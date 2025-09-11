import React, { useState, useMemo, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import {
  getChamados,
  setTotalChamadosF,
  updateStatus,
} from "../services/firestoreService.js";
import { formatDate } from "../services/firestoreService.js";

export function CardComponent() {
  const [totalChamados, setTotalChamados] = useState(0);
  const [chamados, setchamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getChamados();
        setchamados(data || []);
        console.log("Chamados no App:", data);
      } catch (err) {
        setError("Erro ao buscar chamados: " + err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    async function fetchTotal() {
      const total = await setTotalChamadosF();
      setTotalChamados(total);
    }
    fetchTotal();
  }, []);
  const atendentes = ["Rafael", "Vitoria", "Alexandre", "João Pedro"];
  const [busca, setBusca] = useState("");
  const chamadosFiltrados = useMemo(() => {
    if (!busca) return chamados;
    const termo = busca.toLowerCase();
    return chamados.filter((valor) => {
      const descricao = valor["Descrição"]
        ? valor["Descrição"].toLowerCase()
        : "";
      const problema = valor["Problema"] ? valor["Problema"].toLowerCase : "";
      const categoria = valor["Categoria"]
        ? valor["Categoria"].toLowerCase()
        : "";
      const sala = valor["Sala"] ? valor["Sala"].toLowerCase() : "";
      const status = valor["status"] ? valor["status"].toLowerCase() : "";
      const email = valor["Endereço de e-mail"]
        ? valor["Endereço de e-mail"].toLowerCase()
        : "";
      return (
        descricao.includes(termo) ||
        categoria.includes(termo) ||
        status.includes(termo) ||
        email.includes(termo) ||
        sala.includes(termo) ||
        problema.includes(termo) ||
        (valor.id && valor.id.toString().includes(busca))
      );
    });
  }, [busca, chamados]);
  return (
    <div className="flex-col justify-between grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
        <RxDashboard className="text-yellow-500" size={25} /> Chamados
      </h3>
      <div className="col-span-full flex justify-end">
        <input
          type="text"
          placeholder="Buscar chamado..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="font-sans min-w-full text-left text-sm border border-brightbee-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
        />
      </div>

      {loading && <p>Carregando...{totalChamados}</p>}
      {error && <p className="text-red-500">{error}</p>}
      {chamadosFiltrados.length === 0 ? (
        <div className="col-span-full py-4 text-center text-gray-400">
          Nenhum chamado encontrado.
        </div>
      ) : (
        chamadosFiltrados.map((c) => (
          <div
            key={c.id || c["Categoria"]}
            className="bg-brightbee-50 rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col gap-2 font-sans"
          >
            <span className="text-md sm:text-lg text-center sm:text-left font-semibold font-sans">
              {c["Categoria"]}
            </span>
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Email: </strong>
              {c["Endereço de e-mail"]}
            </p>
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Data: </strong>
              {formatDate(c["Carimbo de data/hora"])}
            </p>
            {c["A solicitação é referente a qual modulo?"] ? (
              <p className="text-md sm:text-lg text-center sm:text-left font-sans">
                <strong>Modulo: </strong>{c["A solicitação é referente a qual modulo?"]}
              </p>
            ) : null}
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Problema: </strong>
              {(c["O que ocorreu com o TOTVS RM?"] || c["O que ocorreu com o RM?"])
                ? (c["O que ocorreu com o TOTVS RM?"] || c["O que ocorreu com o RM?"])
                : c["O que ocorreu com o Remark?"]
                ? c["O que ocorreu com o Remark?"]
                : c["O que ocorreu com o Workchat?"]
                ? c["O que ocorreu com o Workchat?"]
                : c["O que ocorreu com o ZapSign?"]
                ? c["O que ocorreu com o ZapSign?"]
                : c["O que ocorreu com os Portais?"]
                ? c["O que ocorreu com os Portais?"]
                : c["Qual a outra categoria?"]}
            </p>
            {c["O que ocorreu com o TOTVS RM?"] ? (
              <p className="text-md sm:text-lg text-center sm:text-left font-sans">
                <strong>Usuario:</strong> {c["Informe o nome do usuario:"]}
              </p>
            ) : null}
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Descrição: </strong>
              {c["Descrição"] ? c["Descrição"] : "Sem descrição"}
            </p>
            <select
              name="atendente"
              id=""
              className="bg-brightbee-25 border-brightbee-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow rounded-lg font-sans"
            >
              {atendentes.map((atendente) => (
                <option key={atendente} value={atendente}>
                  {atendente}
                </option>
              ))}
            </select>
            <span
              className={`inline-flex items-center gap-1 px-2 py-2 rounded-full text-xs font-semibold font-sans ${
                c.status === "em aberto"
                  ? "bg-yellow-200 text-yellow-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {c.status === "em aberto" && (
                <FaExclamationCircle className="text-yellow-500" />
              )}
              {c.status === "concluído" && (
                <FaCheckCircle className="text-green-500" />
              )}
              {c.status}
            </span>
            <br />
            <button
              onClick={async () => {
                await updateStatus({ id: c.id, status: "concluído" });
                setLoading(true);
                setError(null);
                try {
                  const data = await getChamados();
                  setchamados(data || []);
                  const total = await setTotalChamadosF();
                  setTotalChamados(total);
                } catch (err) {
                  setError("Erro ao buscar chamados: " + err.message);
                } finally {
                  setLoading(false);
                }
              }}
              className="bg-green-400 border-green-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow text-green-800 font-semibold disabled:opacity-50 font-sans"
              disabled={c.status === "concluído"}
            >
              Atendido
            </button>
            <button
              onClick={async () => {
                await updateStatus({ id: c.id, status: "em aberto" });
                setLoading(true);
                setError(null);
                try {
                  const data = await getChamados();
                  setchamados(data || []);
                  const total = await setTotalChamadosF();
                  setTotalChamados(total);
                } catch (err) {
                  setError("Erro ao buscar chamados: " + err.message);
                } finally {
                  setLoading(false);
                }
              }}
              className="bg-yellow-400 border-yellow-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow text-yellow-800 font-semibold disabled:opacity-50 mt-2 font-sans"
              disabled={c.status === "em aberto"}
            >
              Reabrir
            </button>
          </div>
        ))
      )}
    </div>
  );
}
