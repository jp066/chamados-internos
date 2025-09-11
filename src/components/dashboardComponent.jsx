import React, { useState, useMemo, useEffect } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";
import {
  getChamados,
  setTotalChamadosF,
} from "../services/firestoreService.js";
import { CardComponent } from "./cardComponent.jsx";
export function Dashboard() {
  const [totalChamados, setTotalChamados] = useState(0);
  const [chamados, setchamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtro, setFiltro] = useState("Total de Chamados");
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
  // Função para alterar o filtro ao clicar nos botões
  const escolha = (stat) => {
    setFiltro(stat.label);
  };

  // Chamados filtrados conforme o filtro selecionado
  const chamadosFiltrados = useMemo(() => {
    if (filtro === "Abertos") {
      return chamados.filter((c) => c.status === "em aberto");
    }
    if (filtro === "Concluídos") {
      return chamados.filter((c) => c.status === "concluído");
    }
    return chamados;
  }, [chamados, filtro]);

  async function fetchChamados() {
  setLoading(true);
  setError(null);
  try {
    const data = await getChamados();
    setchamados(data || []);
  } catch (err) {
    setError("Erro ao buscar chamados: " + err.message);
  } finally {
    setLoading(false);
  }
}

  return (
    <section className="font-sans text-gray-800 p-4 sm:p-8 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-brightbee-50 shadow-inner w-full animate-fade-in">
      <div className="flex-col justify-between grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <button
            className={`focus:outline-none w-full`}
            key={stat.label}
            onClick={() => escolha(stat)}
          >
            <div
              className={`rounded-3xl shadow-lg p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105 ${stat.color}`}
            >
              {stat.icon}
              <span className="text-2xl font-extrabold drop-shadow-sm">
                {stat.value}
              </span>
              <p className="text-md sm:text-lg text-center sm:text-right font-sans flex items-center gap-2">
                {stat.label}
                {filtro === stat.label && (
                  <GrRadialSelected className="inline text-blue-600" />
                )}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto">
        {loading && <p className="text-gray-500">Carregando chamados...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <CardComponent
          chamadosFilter={chamadosFiltrados}
          onStatusChange={fetchChamados}
        />
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
