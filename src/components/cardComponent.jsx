import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle, FaClock } from "react-icons/fa";
import { RxDashboard, RxLockOpen2, RxLockClosed } from "react-icons/rx";
import {
  getChamados,
  setTotalChamadosF,
  updateStatus,
} from "../services/firestoreService.js";
import {
  formatDate,
  handlerEnviarResposta,
} from "../services/firestoreService.js";
import { InputFile } from "./inputFileComponent.jsx";
import Swal from "sweetalert2";

export function CardComponent(props) {
  const [respostas, setRespostas] = useState({});
  console.log("Respostas:", setRespostas);
  const { chamadosFilter } = props;
  const { onStatusChange } = props;
  const { dark, setDark, darkModeHandler } = props;
  const [totalChamados, setTotalChamados] = useState(0);
  const [chamados, setchamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Estado para controlar descrição expandida/reduzida por card
  const [descricaoExpandida, setDescricaoExpandida] = useState({});
  console.log("Chamados no Card:", chamados);
  console.log(dark, setDark, darkModeHandler); // Verifica se as props estão sendo recebidas corretamente
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
  const [busca, setBusca] = useState("");
  /*  const chamadosFiltrados = useMemo(() => {
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
  }, [busca, chamados]);*/
  return (
    <div className="flex-col justify-between grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8 dark:text-white">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2 dark:text-white">
        <RxDashboard className="text-yellow-500 dark:text-blue-400" size={25} /> Chamados
      </h3>
      <div className="col-span-full flex justify-end">
        <input
          type="text"
          placeholder="Buscar chamado..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="font-sans min-w-full text-left text-sm border border-brightbee-100 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow dark:bg-brightbeeDark-2 dark:border-blue-400 dark:text-white"
        />
      </div>
      {loading && <p>Carregando...{totalChamados}</p>}
      {error && <p className="text-red-500">{error}</p>}
      {chamadosFilter.length === 0 ? (
        <div className="col-span-full py-4 text-center text-gray-400">
          Nenhum chamado encontrado.
        </div>
      ) : (
        chamadosFilter.map((c) => (
          <div
            key={c.id || c["Categoria"]}
            className="bg-brightbee-50 rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col gap-2 font-sans dark:bg-brightbeeDark-2"
          >
            <span className="text-md sm:text-lg text-center sm:text-left font-semibold font-sans">
              {c["Categoria"]}
            </span>
            <div>
              {c["status"] === "concluído" ? (
                c["status"] === "concluído"
              ) : (
                <button // Botão para alterar status para "em andamento"
                  color="gray"
                  className="p-2 rounded-full hover:bg-brightbee-100" //transition-200 é uma transição suave
                  style={{ transitionDuration: "400ms" }} // Define a duração da transição para 400ms
                  onClick={async () => {
                    await updateStatus({ id: c.id, status: "em andamento" });
                    setLoading(true);
                    setError(null);
                    try {
                      const data = await getChamados();
                      setchamados(data || []);
                      const total = await setTotalChamadosF();
                      setTotalChamados(total);
                      onStatusChange();
                    } catch (err) {
                      setError("Erro ao buscar chamados: " + err.message);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  disabled={c["status"] === "em andamento"}
                >
                  <FaClock
                    className={
                      c["status"] === "em andamento"
                        ? "text-brightbee-400"
                        : "text-gray-400"
                    }
                  />
                </button>
              )}
            </div>

            {/*
              Usuario logado que fechou o chamado
            */}
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
                <strong>Modulo: </strong>
                {c["A solicitação é referente a qual modulo?"]}
              </p>
            ) : null}
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Problema: </strong>
              {c["O que ocorreu com o TOTVS RM?"] ||
              c["O que ocorreu com o RM?"]
                ? c["O que ocorreu com o TOTVS RM?"] ||
                  c["O que ocorreu com o RM?"]
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
            {c["Informe o nome do usuario:"] ? (
              <p className="text-md sm:text-lg text-center sm:text-left font-sans">
                <strong>Usuario:</strong> {c["Informe o nome do usuario:"]}
              </p>
            ) : null}
            <p className="text-md sm:text-lg text-center sm:text-left font-sans">
              <strong>Descrição: </strong>
              {c["Descrição"]
                ? descricaoExpandida[c.id]
                  ? c["Descrição"]
                  : c["Descrição"].length > 100
                  ? c["Descrição"].slice(0, 100) + "..."
                  : c["Descrição"]
                : "Sem descrição"}
            </p>
            {c["Descrição"] && c["Descrição"].length > 100 && (
              <button
                className="text-xs text-blue-600 underline focus:outline-none mb-2"
                onClick={() =>
                  setDescricaoExpandida((prev) => ({
                    ...prev,
                    [c.id]: !prev[c.id],
                  }))
                }
              >
                {descricaoExpandida[c.id] ? (
                  <RxLockClosed size={24} color="gray" />
                ) : (
                  <RxLockOpen2 size={24} color="gray" />
                )}
              </button>
            )}
            <span
              className={`inline-flex items-center gap-1 px-2 py-2 rounded-full text-xs font-semibold font-sans ${
                c.status === "em aberto"
                  ? "bg-yellow-200 text-yellow-800 dark:bg-brightbeeDark-10 dark:text-brightbee-25"
                  : "bg-green-200 text-green-800 dark:bg-brightbeeDark-10 dark:text-brightbee-25"
                  ? "bg-brightbee-100 text-brightbee-400 dark:bg-brightbeeDark-10 dark:text-brightbee-25"
                  : ""
              }`}
            >
              {c.status === "em aberto" && (
                <FaExclamationCircle className="text-yellow-500" />
              )}
              {c.status === "concluído" && (
                <FaCheckCircle className="text-green-500" />
              )}
              {c.status === "em andamento" && (
                <FaClock className="text-brightbee-400" />
              )}
              {c.status}
            </span>
            <br />
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
                  onStatusChange();
                } catch (err) {
                  setError("Erro ao buscar chamados: " + err.message);
                } finally {
                  setLoading(false);
                }
              }}
              className="bg-yellow-400 border-yellow-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow text-yellow-800 font-semibold disabled:opacity-50 mt-2 font-sans"
              disabled={c.status === "em aberto" || c.status === "em andamento"}
            >
              Reabrir
            </button>
            <button
              onClick={async () => {
                await updateStatus({ id: c.id, status: "concluído" });
                await handlerEnviarResposta(
                  c["Endereço de e-mail"],
                  c.id,
                  respostas[c.id]
                );
                setError(null);
                try {
                  const data = await getChamados();
                  setchamados(data || []);
                  const total = await setTotalChamadosF();
                  setTotalChamados(total);
                  onStatusChange();
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
            {c.status === "em aberto" || c.status === "em andamento"
              ? c.status === "em aberto" ||
                (c.status === "em andamento" && ( //
                  <>
                    <input
                      type="text"
                      placeholder="Resposta do atendimento"
                      value={respostas[c.id] || ""}
                      onChange={(e) =>
                        setRespostas({ ...respostas, [c.id]: e.target.value })
                      }
                      className="font-sans min-w-full text-left text-sm border border-brightbee-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow dark:bg-brightbeeDark-2 dark:border-brightbeeDark-3 dark:text-white border-gray-300 mb-2 dark:placeholder-brightbee-25"
                    />
                    <InputFile />
                    <button
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-brightbee-50 dark:bg-brightbeeDark-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow font-sans"
                      onClick={() => {
                        if (!respostas[c.id] || respostas[c.id].trim() === "") {
                          Swal.fire({
                            title: "A resposta é obrigatória",
                            text: "Por favor, insira uma resposta antes de enviar.",
                            icon: "warning",
                            confirmButtonText: "OK",
                            backdrop: true,
                            confirmButtonColor: "#fbbf24",
                            timer: 3000,
                          });
                          return;
                        }
                        handlerEnviarResposta(
                          c["Endereço de e-mail"],
                          formatDate(c["Carimbo de data/hora"]),
                          c["A solicitação é referente a qual modulo?"],
                          c["O que ocorreu com o TOTVS RM?"] ||
                            c["O que ocorreu com o RM?"] ||
                            c["O que ocorreu com o Remark?"] ||
                            c["O que ocorreu com o Workchat?"] ||
                            c["O que ocorreu com o ZapSign?"] ||
                            c["O que ocorreu com os Portais?"] ||
                            c["Qual a outra categoria?"] ||
                            "Sem problema",
                          c["Informe o nome do usuario:"] || "Sem usuário",
                          c["Descrição"] || "Sem descrição",
                          c.id,
                          respostas[c.id]
                        );
                        setRespostas((prev) => ({ ...prev, [c.id]: "" }));
                      }}
                    >
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-yellow-400 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent font-semibold font-sans">
                        Enviar resposta
                      </span>
                    </button>
                  </>
                ))
              : ""}
          </div>
        ))
      )}
    </div>
  );
}