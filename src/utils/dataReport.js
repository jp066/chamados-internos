import { counterFields } from "./counterFields.js";
import { reportSimple } from "../services/firestoreService.js";

export async function loadData() {
  const chamados = await reportSimple();
  const dataCategory = counterFields(chamados, "categoria");
  const dataModule = counterFields(chamados, "modulo");
  const dataRequester = counterFields(chamados, "usuario");
  const dataProblem = counterFields(chamados, "problema");
  const dataStatus = counterFields(chamados, "status");
  const dataRoom = counterFields(chamados, "sala");
  return {
    dataCategory,
    dataModule,
    dataRequester,
    dataProblem,
    dataStatus,
    dataRoom,
  };
}