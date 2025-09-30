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
  // mudança: um useRef não pode ser usado em um callback, então usamos um objeto para armazenar múltiplas refs
  //  const apiRefs = useRef({});
  //  const handleExportPNG = (index) => {
  //    apiRefs.current[index]?.current?.exportAsImage({ // na lista de refs, pegamos a ref correta pelo índice
  //      format: "image/png",
  //      quality: 1, // apenas para jpeg/webp
  //      copyStyles: true, // copia estilos CSS para exportação
  //    });
  //    console.log("Exportando gráfico como PNG...", index);
  //  };
  const navigate = useNavigate();
  const legendSxGlobal = {
    fontSize: 14,
    color: "#ffffff", // Texto da legenda
  };

  return (
    <div
      className={`
        min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4`}
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
        className="flex items-stretch grid mt-[50px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4"
      >
        {dataArray.map((data, index) => (
          <div
            className="chart-container border rounded-3xl border-brightbeeDark-200 p-4 bg-brightbeeDark-8 transition-transform duration-300 bg-brightbeeDark-8 transition-transform duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                id={`grafico-${index}`}
            key={index}
          >
            <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
              {nameGraph[index]}
            </h1>
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
              <div
                className="flex justify-center mt-4 mb-10"
              >
                <PieChart
                  className="ml-[10px]"
                  series={[
                    {
                      data: data,
                      arcLabel: "value",
                      arcLabelMinAngle: 10,
                    },
                  ]}
                  width={200}
                  height={200}
                  slotProps={{
                    legend: { sx: legendSxGlobal, position: "bottom" },
                  }}
                />
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
