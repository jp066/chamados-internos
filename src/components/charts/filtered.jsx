import { useLocation, useNavigate } from "react-router-dom";
import { handleExportPng } from "../../utils/exportPng";
import { PieChart } from "@mui/x-charts/PieChart";
import { GrGallery } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";

export default function FilteredChart() {
  const location = useLocation();
  const navigate = useNavigate();
  const filteredList = location.state?.data || [];

  console.log("Dados filtrados recebidos:", filteredList);

  return (
    <div
      className={`
        min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4 sm:block md:block lg:block xl:block`}
    >
      <div className="border rounded-3xl border-brightbeeDark-200 p-4 transition-colors duration-500">
        <h1 className="text-center font-sans font-bold text-2xl mt-5 text-brightbeeDark-900 dark:text-white">
          Relatório Filtrado
        </h1>
        <div className="flex justify-between ml-4 mr-4 mt-4">
          <button
            className="bg-brightbeeDark-15 hover:bg-brightbeeDark-13 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <IoMdArrowRoundBack className="inline-block mr-2" />
            Voltar para Home
          </button>
        </div>
      </div>

      <div className="mt-[50px] p-4">
        {filteredList.length === 0 ? (
          <div className="text-center text-white text-xl">
            Nenhum dado filtrado encontrado.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
          <span className="font-sans text-white font-2xl">{filteredList.length} chamados encontrados</span>
            {filteredList.map((chamado, index) => (
              <div
                id={`grafico-${index}`}
                className="border rounded-2xl border-brightbeeDark-200 p-4 bg-brightbeeDark-8 transition-transform duration-300 hover:scale-[1.008] shadow-lg hover:shadow-xl"
              >
                <button
                  onClick={() => {
                    handleExportPng(index, `grafico-${index}`);
                    console.log("Exportando chamado:", index);
                  }}
                  disabled={true}
                >
                    <div className="bg-brightbeeDark-15 hover:bg-brightbeeDark-13 text-white font-bold w-8 h-8 rounded-full transition-colors duration-300 flex items-center justify-center">
                        <FaDownload />
                    </div>
                </button>
                <h2 className="text-white font-bold text-lg mb-2">
                  Chamado #{chamado.id}
                </h2>
                <p className="text-white"><strong>Usuário:</strong> {chamado.usuario || chamado["Endereço de e-mail"]}</p>
                <p className="text-white"><strong>Categoria:</strong> {chamado.Categoria}</p>
                <p className="text-white"><strong>Módulo:</strong> {chamado["A solicitação é referente a qual modulo?"]}</p>
                <p className="text-white"><strong>Status:</strong> {chamado.status}</p>
                <p className="text-white"><strong>Data:</strong> {chamado.data || new Date(chamado["Carimbo de data/hora"].seconds * 1000).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}