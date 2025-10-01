import {
  doc,
  updateDoc,
  Timestamp,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";

export async function getChamados() {
  try {
    const chamadosCollection = collection(db, "chamados");
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

export async function updateStatus({ id, status }) {
  try {
    const chamadosCollection = collection(db, "chamados");
    const docRef = doc(chamadosCollection, id);
    await updateDoc(docRef, { status });
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

// As duas funções para maior persistência, serão implementadas em algum lugar como redis ou banco de dados.
let contadorChamadas = [];
export async function contadorDeChamadas(limiteAlcancado, setLimiteAlcancado) {
  if (limiteAlcancado) return;
  let chamadas = contadorChamadas.length;
  if (chamadas === 2) {
    setLimiteAlcancado(true);
    console.log("Limite de relatórios mensais atingido.");
    return chamadas;
  }
  contadorChamadas.push(1);
  console.log("Contador de chamadas de relatório:", contadorChamadas);
  return contadorChamadas;
}

export async function reportSimple(limiteAlcancado, setLimiteAlcancado) {
  try {
    //    await contadorDeChamadas(limiteAlcancado, setLimiteAlcancado);
    if (limiteAlcancado) {
      console.log("Limite de relatórios mensais atingido.");
      return;
    }
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


export function reportMockFilter() {
  return [
    {
      categoria: "Totvs",
      modulo: "Educacional",
      solicitante: "teste@brightbee.com.br",
      problema: "Erro no sistema",
      status: "Aberto",
      sala: "Secretaria",
    },
    {
      id: "2",
      usuario: "Maria Oliveira",
      problema: "Dúvida sobre funcionalidade",
      status: "Em andamento",
      data: "02/10/2023 - 11:00",
    },
  ];
}
