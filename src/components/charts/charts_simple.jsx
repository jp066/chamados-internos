import { handleExportPng } from "../../utils/exportPng";
import { PieChart } from "@mui/x-charts/PieChart";
import { MdFileDownloadDone } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  dataCategory,
  dataModule,
  dataRequester,
  dataProblem,
  dataStatus,
  dataRoom,
} from "../../utils/mocks";

const { innerWidth } = window; // Obtém a largura da janela

export function ChartSimple() {
  const nameGraph = [
    "Categoria",
    "Módulo",
    "Solicitante",
    "Problema",
    "Status",
    "Sala",
  ];
  const dataArray = [
    dataCategory,
    dataModule,
    dataRequester,
    dataProblem,
    dataStatus,
    dataRoom,
  ];
  const navigate = useNavigate();
  const legendSxGlobal = {
    fontSize: 14,
    color: "#ffffff",
    wordBreak: innerWidth > 768 ? "normal" : "break-word", // Ajusta a posição da legenda com base na largura da janela
  };

  return (
    <div
      className={`
        min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4 sm:block md:block lg:block xl:block`}
    >
      <h1 className="text-center font-sans font-bold text-2xl mt-5 text-brightbeeDark-900 dark:text-white">
        Relatorio Simples
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
      <div
        className="flex items-stretch grid mt-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4"
      >
        {dataArray.map((data, index) => (
          <div
            className="md:chart-container border rounded-3xl border-brightbeeDark-200 p-4 bg-brightbeeDark-8 transition-transform duration-300 
            bg-brightbeeDark-8 transition-transform duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            key={index}
          >
            <button
              className="bg-brightbeeDark-15 hover:bg-brightbeeDark-13 text-white font-bold w-8 h-8 rounded-full transition-colors duration-300"
              onClick={() => {
                handleExportPng(index, nameGraph[index]);
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <MdFileDownloadDone className="inline-block" />
              </div>
            </button>
            <div id={`grafico-${index}`} className="md:w-full h-full">
              <h1 className="text-center ml-[70px] md:text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
                {nameGraph[index]}
              </h1>
              <div className="flex justify-center mt-4 mb-10">
                  <PieChart
                    series={[
                      {
                        data: data,
                        arcLabel: "value",
                        arcLabelMinAngle: 10,
                      },
                    ]}
                    width={innerWidth > 768 ? 200 : 150} 
                    height={innerWidth > 768 ? 200 : 150}
                    slotProps={{
                      legend: { sx: legendSxGlobal, position: "bottom" },
                    }}
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
