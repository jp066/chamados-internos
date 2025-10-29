import {
  doc,
  updateDoc,
  Timestamp,
  collection,
  getDocs,
  addDoc,
  query,
} from "firebase/firestore";
import { db } from "../firebase.js";

const databaseCollections = {
  chamadosCollection: collection(db, "chamados"),
  respostasCollection: collection(db, "respostas"),
  relatoriosCollection: collection(db, "relatorios"),
};

export async function getChamados() {
  try {
    const chamadosCollection = databaseCollections.chamadosCollection;
    const snapshot = await getDocs(chamadosCollection);
    const chamados = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const chamadosOrdenados = chamados.sort((a, b) => {
      const dateA = new Date(
        a["Carimbo de data/hora"] instanceof Timestamp
          ? a["Carimbo de data/hora"].toDate()
          : new Date(a["Carimbo de data/hora"].seconds * 1000)
      );
      const dateB = new Date(
        b["Carimbo de data/hora"] instanceof Timestamp
          ? b["Carimbo de data/hora"].toDate()
          : new Date(b["Carimbo de data/hora"].seconds * 1000)
      );
      return dateB - dateA;
    });
    console.log("esses são os chamados: ", chamadosOrdenados);
    return chamadosOrdenados;
  } catch (err) {
    console.error("Error fetching chamados:", err);
  }
}

export async function setTotalChamadosF() {
  try {
    const chamados = async () => {
      const chamadosCollection = collection(db, "chamados");
      const snapshot = await getDocs(chamadosCollection);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    };
    return (await chamados()).length;
  } catch (err) {
    console.error("Error fetching total chamados:", err);
  }
}

export async function updateStatus({ id, status, usuario }) {
  try {
    const chamadosCollection = collection(db, "chamados");
    const docRef = doc(chamadosCollection, id);
    await updateDoc(docRef, { status, "ObservadoPor": usuario });
    console.log(`Status atualizado para ${status}!`);
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
  }
  return;
}

export function formatDate(timestamp) {
  if (!timestamp) return "";
  const date =
    timestamp instanceof Timestamp
      ? timestamp.toDate()
      : new Date(timestamp.seconds * 1000);
  const dateSplit = date
    .toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    .split(",");
  return dateSplit[0] + " - " + dateSplit[1].trim();
}

// enviar imagem para o cloudinary.

export async function handlerEnviarResposta(
  email,
  dataHora,
  modulo,
  problema,
  usuario,
  descricao,
  id,
  resposta,
  arquivo
) {
  if (!email) {
    return "Erro: email do usuário não fornecido.";
  }
  if (!id) {
    return "Erro: ID do chamado não fornecido.";
  }
  if (!resposta) {
    return "Erro: resposta do atendente não fornecida.";
  }
  try {
    const chamadosCollection = collection(db, "respostas");
    const data = {
      enviado: false,
      resposta: resposta,
      email: email,
      dataHora: dataHora,
      modulo: modulo,
      usuario: usuario,
      descricao: descricao,
      chamadoId: id,
      problema: problema,
      timestamp: Timestamp.now(),
      arquivo: arquivo || null,
    };
    const res = await addDoc(chamadosCollection, data);
    console.log("Resposta enviada com sucesso:", data);
    return res;
  } catch (error) {
    console.error("Erro ao enviar resposta:", error);
    return "Erro ao enviar resposta.";
  }
}

export async function reportSimple() {
  try {
    const chamados = await getChamados();
    const reportData = chamados.map((chamado) => ({
      id: chamado.id,
      usuario: chamado["Endereço de e-mail"],
      categoria: chamado["Categoria"],
      modulo: chamado["A solicitação é referente a qual modulo?"],
      sala: chamado["Sala"],
      problema: chamado["O que ocorreu com o TOTVS RM?"]
        ? chamado["O que ocorreu com o TOTVS RM?"]
        : chamado["O que ocorreu com o Remark?"]
        ? chamado["O que ocorreu com o Remark?"]
        : chamado["O que ocorreu com o Workchat?"]
        ? chamado["O que ocorreu com o Workchat?"]
        : chamado["O que ocorreu com o ZapSign?"]
        ? chamado["O que ocorreu com o ZapSign?"]
        : chamado["O que ocorreu com os Portais?"],
      status: chamado.status,
      data: formatDate(chamado["Carimbo de data/hora"]),
    }));
    const response = new Array(reportData); // transformar em array
    console.log("Relatório simples gerado com sucesso:", response);
    return reportData;
  } catch (error) {
    console.error(
      "Erro ao gerar relatório simples:",
      error.stack,
      error.message
    );
    throw new Error("Erro ao gerar relatório simples.");
  }
}
/*
export async function postFilter(
  valoresJuntos,
  dataInicial,
  dataFinal,
  status,
  modulo,
  categoria
) {
  if (
    !(dataInicial instanceof Timestamp) &&
    !(dataFinal instanceof Timestamp)
  ) {
    const dataInicialDate = new Date(dataInicial);
    const dataFinalDate = new Date(dataFinal);
  }

  try {
    const relatoriosCollection = collection(db, "relatorios");
    const data = {
      dataInicial: dataInicial,
      dataFinal: dataFinal,
      status: status,
      modulo: modulo,
      categoria: categoria,
    };
    if (valoresJuntos === "valores juntos") {
      const res = await queryRelatoriosJuntos(
        valoresJuntos,
        dataInicial,
        dataFinal,
        status,
        modulo,
        categoria
      );
      console.log("Resposta enviada com sucesso:", data);
      return res;
    }
    const res = await addDoc(relatoriosCollection, data);
    console.log("Resposta enviada com sucesso:", data);
    return res;
  } catch (error) {
    console.error("Erro ao enviar resposta:", error);
    return "Erro ao enviar resposta.";
  }
}*/

export async function queryRelatoriosJuntos(
  valoresJuntos,
  dataInicial,
  dataFinal,
  status,
  mod,
  cat,
  busca
) {
  try {
    const chamados = databaseCollections.chamadosCollection;
    const relatoriosDocs = await getDocs(chamados);
    
    const dataInicialTimestamp = dataInicial
      ? Timestamp.fromDate(new Date(dataInicial + "T00:00:00"))
      : null;
    const dataFinalTimestamp = dataFinal
      ? Timestamp.fromDate(new Date(dataFinal + "T23:59:59"))
      : null;
    
    console.log("Data Inicial:", dataInicialTimestamp?.toDate());
    console.log("Data Final:", dataFinalTimestamp?.toDate());
    console.log("Status:", status);
    console.log("Módulo:", mod);
    console.log("Categoria:", cat);
    
    const filteredDocs = relatoriosDocs.docs.filter((doc) => {
      const data = doc.data();
      const dataHora = data["Carimbo de data/hora"];
      const statusChamado = data.status;
      const moduloChamado = data["A solicitação é referente a qual modulo?"];
      const categoriaChamado = data.Categoria;
      const buscaUsuario = data["Endereço de e-mail"] || "";
      
      // Converter para milissegundos para comparação
      const dataHoraMs = dataHora.toMillis();
      const dataInicialMs = dataInicialTimestamp?.toMillis();
      const dataFinalMs = dataFinalTimestamp?.toMillis();
      
      const matchDataInicial = !dataInicialMs || dataHoraMs >= dataInicialMs; 
      const matchDataFinal = !dataFinalMs || dataHoraMs <= dataFinalMs;
      const matchStatus = !status || statusChamado === status;
      const matchModulo = !mod || moduloChamado === mod;
      const matchCategoria = !cat || categoriaChamado === cat;
      const matchBusca = !busca || buscaUsuario.toLowerCase().includes(busca.toLowerCase()); // compara o valor recebido com o e-mail do usuário
      
      console.log("Documento:", doc.id, {
        dataHora: dataHora.toDate(),
        statusChamado,
        moduloChamado,
        categoriaChamado,
        matchDataInicial,
        matchDataFinal,
        matchStatus,
        matchModulo,
        matchCategoria
      });
      
      return matchDataInicial && matchDataFinal && matchStatus && matchModulo && matchCategoria;
    });
    
    console.log("Total de documentos filtrados:", filteredDocs.length);
    const resultado = filteredDocs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log("Chamados filtrados:", resultado);
    return resultado;
  } catch (error) {
    console.error("Erro ao consultar relatórios juntos:", error);
    throw error;
  }
}
