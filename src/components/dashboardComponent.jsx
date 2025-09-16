import React, { useState, useMemo, useEffect } from "react";
import { FaCheckCircle, FaClock, FaExclamationCircle } from "react-icons/fa";
import { MdApps } from "react-icons/md";
import { GrRadialSelected } from "react-icons/gr";
import {
  getChamados,
  setTotalChamadosF,
} from "../services/firestoreService.js";
import { CardComponent } from "./cardComponent.jsx";
export function Dashboard({ dark, setDark, darkModeHandler }) {
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
        label: "Em Andamento",
        value: chamados.filter((c) => c.status === "em andamento").length,
        color: "bg-brightbee-100 text-brightbee-400 dark:bg-brightbeeDark-3 dark:text-brightbee-25",
        icon: <FaClock className="text-brightbee-400 text-xl mb-1 dark:text-brightbee-25" />,
      },
      {
        label: "Abertos",
        value: chamados.filter((c) => c.status === "em aberto").length,
        color: "bg-yellow-100 text-yellow-800 dark:bg-brightbeeDark-4 dark:text-brightbee-25",
        icon: <FaExclamationCircle className="text-yellow-500 text-xl mb-1 dark:text-brightbee-25" />,
      },
      {
        label: "Concluídos",
        value: chamados.filter((c) => c.status === "concluído").length,
        color: "bg-green-100 text-green-800 dark:bg-brightbeeDark-5 dark:text-brightbee-25",
        icon: <FaCheckCircle className="text-green-500 text-xl mb-1 dark:text-brightbee-25" />,
      },
      {
        label: "Total de Chamados",
        value: totalChamados,
        color: "bg-blue-100 text-blue-800 dark:bg-brightbeeDark-6 dark:text-brightbee-25",
        icon: <MdApps className="text-blue-500 text-xl mb-1 dark:text-brightbee-25" />,
      },
    ],
    [totalChamados, chamados]
  );
  const escolha = (stat) => {
    setFiltro(stat.label);
  };

  const chamadosFiltrados = useMemo(() => {
    if (filtro === "Abertos") {
      return chamados.filter((c) => c.status === "em aberto");
    }
    if (filtro === "Concluídos") {
      return chamados.filter((c) => c.status === "concluído");
    }
    if (filtro === "Em Andamento") {
      return chamados.filter((c) => c.status === "em andamento");
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
    <section
      style={{
        fontFamily: "Dm Sans, sans-serif",
        color: dark ? "#fff" : "#3c1501ff" ,
        background: dark
          ? "linear-gradient(to right, #282828ff, #282828ff, #282828ff)"
          : "linear-gradient(to right, #fff1eb, #fff1eb, #fff1eb)",
        boxShadow: "inset 0 2px 8px 0 rgba(0,0,0,0.08)",
        width: "100%",
        padding: "1rem",
        animation: "fade-in 0.7s cubic-bezier(.4,0,.2,1) both",
      }}
    >
      <div className="flex-col justify-between grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
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
                  <GrRadialSelected className="inline text-blue-600 dark:text-white" />
                )}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto dark:bg-brightbeeDark-10">
        {loading && <p className="text-gray-500">Carregando chamados...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <CardComponent
          chamadosFilter={chamadosFiltrados}
          onStatusChange={fetchChamados}
          dark={dark}
          setDark={setDark}
          darkModeHandler={darkModeHandler}
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
