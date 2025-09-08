
import React, { useState, useMemo } from "react";
import { FaCheckCircle, FaHourglassHalf, FaExclamationCircle } from "react-icons/fa";

export function Dashboard() {
  const stats = [
    { label: "Total de Chamados", value: 0, color: "bg-blue-100 text-blue-800", icon: <FaExclamationCircle className="text-blue-500 text-xl mb-1" /> },
    { label: "Abertos", value: 0, color: "bg-yellow-100 text-yellow-800", icon: <FaExclamationCircle className="text-yellow-500 text-xl mb-1" /> },
    { label: "Concluídos", value: 0, color: "bg-green-100 text-green-800", icon: <FaCheckCircle className="text-green-500 text-xl mb-1" /> },
  ]; // Dados estáticos para demonstração, os dados ideias serão do firestore.

  const chamados = [
    { id: 1, titulo: "Teste", status: "Aberto", data: "05/09/2025" },
    { id: 3, titulo: "Teste", status: "Concluído", data: "03/09/2025" },
    { id: 4, titulo: "Teste", status: "Aberto", data: "02/09/2025" },
  ]; // Dados estáticos para demonstração, os dados ideias serão do firestore.

  const [busca, setBusca] = useState("");  
  const chamadosFiltrados = useMemo(() => {
    if (!busca) return chamados;
    return chamados.filter(
      (valor) =>
        valor.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        valor.status.toLowerCase().includes(busca.toLowerCase()) ||
        valor.id.toString().includes(busca)
    );
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
            <span className="text-3xl font-extrabold drop-shadow-sm">{stat.value}</span>
            <span className="text-sm font-medium mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 overflow-x-auto">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <FaExclamationCircle className="text-yellow-500" /> Chamados Recentes
        </h3>
        <input
          type="text"
          placeholder="Buscar chamado..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="mb-6 px-3 py-2 border border-yellow-200 rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
        />
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b bg-yellow-50">
              <th className="py-2 px-3">ID</th>
              <th className="py-2 px-3">Título</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Data</th>
            </tr>
          </thead>
          <tbody>
            {chamadosFiltrados.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">Nenhum chamado encontrado.</td>
              </tr>
            ) : (
              chamadosFiltrados.map((c) => (
                <tr key={c.id} className="border-b hover:bg-yellow-50 transition-colors">
                  <td className="py-2 px-3 font-mono">{c.id}</td>
                  <td className="py-2 px-3">{c.titulo}</td>
                  <td className="py-2 px-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                        c.status === "Aberto"
                          ? "bg-yellow-100 text-yellow-800"
                          : c.status === "Aberto"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {c.status === "Aberto" && <FaExclamationCircle className="text-yellow-500" />}
                      {c.status === "Concluído" && <FaCheckCircle className="text-green-500" />}
                      {c.status}
                    </span>
                  </td>
                  <td className="py-2 px-3">{c.data}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <style>{`
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
