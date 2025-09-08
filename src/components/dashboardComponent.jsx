import React, { useState, useMemo, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import {
  getChamados,
  setTotalChamadosF,
  updateStatus,
} from "../services/firestoreService.js";

export function Dashboard() {
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

  const stats = useMemo(
    () => [
      {
        label: "Total de Chamados",
        value: totalChamados,
        color: "bg-blue-100 text-blue-800",
        icon: <FaExclamationCircle className="text-blue-500 text-xl mb-1" />,
      },
      {
        label: "Abertos",
        value: chamados.filter((c) => c.status === "em aberto").length,
        color: "bg-yellow-100 text-yellow-800",
        icon: <FaExclamationCircle className="text-yellow-500 text-xl mb-1" />,
      },
      {
        label: "Concluídos",
        value: chamados.filter((c) => c.status === "concluído").length,
        color: "bg-green-100 text-green-800",
        icon: <FaCheckCircle className="text-green-500 text-xl mb-1" />,
      },
    ],
    [totalChamados, chamados]
  );

  const [busca, setBusca] = useState("");
  const atendentes = [
    "Rafael",
    "Vitoria",
    "Alexandre",
    "João Pedro",
  ];
  const chamadosFiltrados = useMemo(() => {
    if (!busca) return chamados;
    const termo = busca.toLowerCase();
    return chamados.filter((valor) => {
      const descricao = valor["Descrição"]
        ? valor["Descrição"].toLowerCase()
        : "";
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
        (valor.id && valor.id.toString().includes(busca))
      );
    });
  }, [busca, chamados]);

  return (
    <section className="text-gray-800 p-4 sm:p-8 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 shadow-inner w-full animate-fade-in">
      <div className="flex-col justify-between grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 ${stat.color}`}
          >
            {stat.icon}
            <span className="text-3xl font-extrabold drop-shadow-sm">
              {stat.value}
            </span>
            <span className="text-sm font-medium mt-1 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <FaExclamationCircle className="text-yellow-500" /> Chamados
        </h3>
        <input
          type="text"
          placeholder="Buscar chamado..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="mb-6 px-3 py-2 border border-yellow-200 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
        />
  <table className="min-w-full text-left text-sm border border-yellow-300 rounded-lg">
          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <thead>
            <tr className="border-b bg-yellow-50">
              <th className="py-2 px-3">Atendente</th>
              <th className="py-2 px-3">Categoria</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3"></th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Sala</th>
              <th className="py-2 px-3">Data/Hora</th>
              <th className="py-2 px-3">Qual a outra categoria?</th>
              <th className="py-2 px-3">Imagem descritiva</th>
              <th className="py-2 px-3">Descrição</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-yellow-200">
            {chamadosFiltrados.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">
                  Nenhum chamado encontrado.
                </td>
              </tr>
            ) : (
              chamadosFiltrados.map((c) => (
                <tr
                  key={c.id}
                  className="border-b hover:bg-yellow-50 transition-colors"
                >
                  <td className="py-2 px-3 font-mono border border-yellow-200">
                    <select name="atendente" id="" className="bg-yellow-100 border-yellow-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow rounded-lg">
                      {atendentes.map((atendente) => (
                        <option key={atendente} value={atendente}>
                          {atendente}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-2 px-3 font-mono border border-yellow-200">{c["Categoria"]}</td>
                  <td className="py-2 px-3 border border-yellow-200">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                        c.status === "em aberto"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
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
                  </td>
                  <td className="py-2 px-3 border border-yellow-200">
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
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Atendido
                    </button>
                  </td>
                  <td className="py-2 px-3 border border-yellow-200">{c["Endereço de e-mail"]}</td>
                  <td className="py-2 px-3 border border-yellow-200">{c["Sala"]}</td>
                  <td className="py-2 px-3 border border-yellow-200">{c["Carimbo de data/hora"]}</td>
                  <td className="py-2 px-3 border border-yellow-200">{c["Qual a outra categoria?"]}</td>
                  <td className="py-2 px-3 border border-yellow-200">
                    <a href={`http://${c["Imagem descritiva"]}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {c["Imagem descritiva"]}
                    </a>
                  </td>
                  <td className="py-2 px-3 border border-yellow-200">{c["Descrição"]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <style>{`
        table, th, td {
          border-collapse: collapse;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
}
