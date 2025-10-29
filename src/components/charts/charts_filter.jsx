import { IoIosCloseCircleOutline } from "react-icons/io";
import { SiGooglebigquery } from "react-icons/si";
import { BsCalendar2Date } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiSolidCategory } from "react-icons/bi";
import { FaForumbee } from "react-icons/fa";
import { RiAiGenerate } from "react-icons/ri";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { useState } from "react";
import { queryRelatoriosJuntos } from "../../services/firestoreService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function ChartsFilter({ onClose }) {
  const navigate = useNavigate();
  const { dark } = useContext(DarkModeContext);
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [status, setStatus] = useState("");
  const [busca, setBusca] = useState("");
  const [valoresJuntos, setValoresJuntos] = useState("valores juntos"); // por enquanto fixo para valores juntos

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
          <div className="mr-4 flex items-center"></div>
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
        <div className="px-6 py-4 border-b border-slate-700 flex justify-start">
          <button className="flex items-center text-white cursor-[not-allowed]">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox-custom mr-3 cursor-[not-allowed]"
              disabled={true}
              checked={valoresJuntos === "valores juntos"}
              value={valoresJuntos}
              on
              onClick={() => {
                setValoresJuntos("valores juntos");
              }}
            />
            <label htmlFor="checkbox" className="text-white cursor-[not-allowed]">
              Juntar valores
            </label>
          </button>
        </div>
        <div className="flex items-center ml-4">
          <h6 className="text-sm text-gray-400 mt-2">
            Marque se deseja incluir todos os valores. caso contrário, sua busca
            irá considerar apenas os valores individuais.
          </h6>
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
                      value={dataInicial}
                      onChange={(e) => setDataInicial(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Data final"
                      value={dataFinal}
                      onChange={(e) => setDataFinal(e.target.value)}
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
                    <input
                      type="checkbox"
                      className="checkbox-custom mr-3"
                      onClick={() => {
                        setStatus("em aberto");
                      }}
                    />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      Em aberto
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="checkbox-custom mr-3"
                      onClick={() => {
                        setStatus("em andamento");
                      }}
                    />
                    <span className="text-white group-hover:text-white transition-colors duration-200">
                      Em andamento
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="checkbox-custom mr-3"
                      onClick={() => {
                        setStatus("concluído");
                      }}
                    />
                    <span
                      className="text-white group-hover:text-white transition-colors duration-200"
                      value="concluído"
                    >
                      Concluído
                    </span>
                  </label>
                </div>
                {console.log(status)}
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
                <select
                  id="modulo"
                  className="w-full dark:bg-slate-700 bg-brightbee-150 border border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursor-pointer"
                >
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
                <select
                  id="categoria"
                  className="w-full dark:bg-slate-700 border bg-brightbee-150 border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursor-pointer"
                >
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
                  Usuário
                </label>
                <input
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Digite o nome do usuário"
                  className="w-full dark:bg-slate-700 border bg-brightbee-150 border-slate-600 rounded-full px-4 py-3 text-brightbee-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 select-custom appearance-none cursorauto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-700 flex justify-center">
          <button
            className="dark:bg-blue-500 bg-brightbee-900 hover:bg-brightbee-200 hover:border-out text-white font-medium px-8 py-3 rounded-full transition-all duration-200 hover-lift flex items-center space-x-2 smooth"
            style={{ border: dark ? "none" : "3px outset #d27300ff" }}
            onClick={async () => {
              const mod = document.querySelector("#modulo").value;
              const cat = document.querySelector("#categoria").value;
              if (
                valoresJuntos === "valores juntos" &&
                (dataInicial === "" || dataFinal === "" || status === "")
              ) {
                return Swal.fire({
                  customClass: {
                    popup: "swal2-popup dark:bg-slate-800 bg-white rounded-xl",
                    title: "swal2-title text-white",
                    confirmButton:
                      "swal2-confirm bg-blue-600 hover:bg-blue-700 text-white rounded-full",
                  },
                  icon: "warning",
                  title: 'Você selecionou a opção "Juntar valores"',
                  confirmButtonText: "Ok",
                });
              } else {
                try {
                  const result = await queryRelatoriosJuntos(
                    valoresJuntos,
                    dataInicial,
                    dataFinal,
                    status,
                    mod,
                    cat,
                    busca
                  );

                  await Swal.fire({
                    customClass: {
                      popup:
                        "swal2-popup dark:bg-slate-800 bg-white rounded-xl",
                      title: "swal2-title text-white",
                      confirmButton:
                        "swal2-confirm bg-blue-600 hover:bg-blue-700 text-white rounded-full",
                    },
                    icon: "success",
                    title: "Sua busca foi realizada com sucesso!",
                    confirmButtonText: "Ok",
                  });

                  navigate("/relatorio-filtrado", { state: { data: result } });
                } catch (error) {
                  console.error("Erro ao gerar relatório:", error);
                  Swal.fire({
                    icon: "error",
                    title: "Erro ao gerar relatório",
                    text: error.message,
                  });
                }
              }
              console.log("Módulo selecionado:", mod);
              console.log("valoresJuntos:", valoresJuntos);
              console.log("Usuário:", busca);
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
