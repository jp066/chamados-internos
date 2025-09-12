// services/firestoreService.js
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
    console.log(chamadosOrdenados);
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

export async function handlerEnviarResposta(email, id, resposta) {
  // os parametros necessários são o email do usuário que abriu o chamado, o id do chamado e a resposta do atendente
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
      resposta: resposta,
      email: email,
      chamadoId: id,
      timestamp: Timestamp.now(),
    };
    const res = await addDoc(chamadosCollection, data);
    console.log("Resposta enviada com sucesso:", data);
    return res; // res 
  } catch (error) {
    console.error("Erro ao enviar resposta:", error);
    return "Erro ao enviar resposta.";
  }
}

export async function enviarEmail(email, id, resposta) {
  // Lógica para enviar o email
  console.log(`Enviando email para ${email} sobre o chamado ${id} com a resposta: ${resposta}`);
  // Aqui você pode integrar com um serviço de envio de email
  return "Email enviado com sucesso.";
}