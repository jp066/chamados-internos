import { IoIosCloseCircleOutline } from "react-icons/io";
import { SiGooglebigquery } from "react-icons/si";
import { BsCalendar2Date } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiSolidCategory } from "react-icons/bi";
import { FaForumbee } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Swal from "sweetalert2";

export function ModalRelatorio({ onClose }) {
  const { dark } = useContext(DarkModeContext);
  // const solicitantes = (async () => {
  //   const response = await fetch("/api/solicitantes");
  //   const data = await response.json();
  //   return data;
  // })();
  // essa função deve buscar os solicitantes no banco de dados e retornar um objeto.
  const solicitantesTeste = [
    { id: 1, name: "joaopedro@brightbee.com.br" },
    { id: 2, name: "lucia.fernandes@brightbee.com.br" },
    { id: 3, name: "rafael.lima@brightbee.com.br" },
    { id: 4, name: "camila.rodrigues@brightbee.com.br" },
    { id: 5, name: "bruno.almeida@brightbee.com.br" },
  ];

  const categorias = [
    //
    { id: 1, name: "TOTVS RM" },
    { id: 2, name: "Portais" },
    { id: 3, name: "wORKCHAT" },
    { id: 4, name: "ZapSign" },
    { id: 5, name: "Remark" },
  ];

  const modulos = [
    { id: 1, name: "Educacional" },
    { id: 2, name: "Financeiro" },
    { id: 3, name: "Recursos Humanos" },
    { id: 4, name: "Gestão de Compras, Estoque e Faturamento" },
    { id: 5, name: "Totvs Aprovações e Atendimento" },
    { id: 6, name: "Fluig" },
  ];

  return (
    <div
      id="modalBackdrop"
      className="fixed inset-0 modal-backdrop flex items-center justify-center z-50 font-sans"
      onClick={onClose}
    >
      <div
        className="shadow-3xl w-full max-w-4xl mx-4 fade-in"
        style={{
          background: dark
            ? "linear-gradient(to right, #1e293b, #0f172a, #1e293b)"
            : "linear-gradient(to right, #e9692c, #f08a54, #c94e0cff)",
          borderRadius: "50px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 dark:bg-blue-500 bg-brightbee-150 rounded-lg flex items-center justify-center">
              <SiGooglebigquery
                size={20}
                color={dark ? "white" : "#c94e0cff"}
              />
            </div>
            <h2 className="text-xl font-semibold text-white">Consultas</h2>
          </div>
          <button
            id="closeModal"
            className="w-8 h-8 rounded-lg dark:dark:bg-slate-700 bg-brightbee-150 dark:hover:bg-slate-600 hover:bg-white flex items-center justify-center transition-colors duration-200"
          >
            <IoIosCloseCircleOutline
              size={25}
              color={dark ? "white" : "#c94e0cff"}
              onClick={onClose}
            />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <BsCalendar2Date
                    className="inline text-blue-400 mr-2"
                    size={20}
                    color={dark ? "white" : "#612200ff"}
                  />
                  Intervalo de Datas
                </label>
                <div className="grid grid-cols-1 gap-3">
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Data inicial"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Data final"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <TbStatusChange
                    className="inline text-blue-400 mr-2"
                    size={20}
                    color={dark ? "white" : "#612200ff"}
                  />
                  Status
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="checkbox-custom mr-3"/>
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      Em aberto
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="checkbox-custom mr-3" />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      Em andamento
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="checkbox-custom mr-3" />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      Concluído
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <VscFileSubmodule
                    className="inline text-blue-400 mr-2"
                    size={20}
                    color={dark ? "white" : "#612200ff"}
                  />
                  Módulo
                </label>
                <select className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursor-pointer">
                  {modulos.map((modulo) => (
                    <option
                      key={modulo.id}
                      value={modulo.name}
                      className="font-sans"
                    >
                      {modulo.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <BiSolidCategory
                    className="inline text-blue-400 mr-2"
                    size={20}
                    color={dark ? "white" : "#612200ff"}
                  />
                  Categoria
                </label>
                <select className="w-full dark:bg-slate-700 border bg-brightbee-150 border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursor-pointer">
                  {categorias.map((categorias) => (
                    <option
                      key={categorias.id}
                      value={categorias.name}
                      className="font-sans"
                    >
                      {categorias.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  <FaForumbee
                    className="inline text-blue-400 mr-2"
                    size={20}
                    color={dark ? "white" : "#612200ff"}
                  />
                  Solicitante
                </label>
                <select className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursor-pointer">
                  {solicitantesTeste.map((solicitante) => (
                    <option
                      key={solicitante.id}
                      value={solicitante.name}
                      className="font-sans"
                    >
                      {solicitante.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-700 flex justify-center">
          <button
            className="dark:bg-blue-500 bg-brightbee-900 hover:bg-brightbee-200 hover:border-out text-white font-medium px-8 py-3 rounded-full transition-all duration-200 hover-lift flex items-center space-x-2"
            style={{ border: dark ? "none" : "3px outset #d27300ff" }}
            onClick={() => {
              Swal.fire({
                customClass: {
                  popup: "custom-modal-notification",
                  cancelButton: "cancel-button-notification",
                },
                title: "Em breve",
                text: "Essa função será implementada em breve.",
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: false,
                cancelButtonText: "Voltar",
              });
            }}
          >
            <RiAiGenerate className="inline" size={20} />
            <span>Gerar</span>
          </button>
        </div>
      </div>
    </div>
  );
}