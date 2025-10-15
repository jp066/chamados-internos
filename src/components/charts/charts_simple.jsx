import { handleExportPng } from "../../utils/exportPng";
import { PieChart } from "@mui/x-charts/PieChart";
import { GrGallery } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { loadData } from "../../utils/dataReport.js";
import { useEffect, useState } from "react";
import { LoadingPage } from "../loading.jsx";
import { FaDownload } from "react-icons/fa6";

const { innerWidth } = window;

export function ChartSimple() {
  const [chartData, setChartData] = useState(null);

  const [buttonDownloadHidden, setButtonDownloadHidden] = useState(false);
  console.log("buttonDownloadHidden:", buttonDownloadHidden); // 
  useEffect(() => {
    async function fetchData() {
      const data = await loadData();
      setChartData(data);
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  const legendSxGlobal = {
    fontSize: 14,
    color: "#ffffff",
    wordBreak: innerWidth > 768 ? "normal" : "break-word",
  };

  if (!chartData) {
    //
    return <LoadingPage />;
  }

  const {
    dataCategory,
    dataModule,
    dataRequester,
    dataProblem,
    dataStatus,
    dataRoom,
  } = chartData;

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

  return (
    <div
      className={`
        min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4 sm:block md:block lg:block xl:block`}
    >
      <div className=" border rounded-3xl border-brightbeeDark-200 p-4 transition-colors duration-500">
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
      </div>
      <div className="mt-[50px] justify-center items-center">
        <div>
          <button
            className={`bg-brightbeeDark-15 hover:bg-brightbeeDark-13 text-white font-bold w-[265px] h-[60px] rounded-2xl transition-colors duration-300 ml-4 mb-2`}
            onClick={() => {
              setButtonDownloadHidden(true);
            }}
          >
            <div className="position-relative grid grid-cols-2 rows-2 float-left ml-3">
              <GrGallery className="inline-block mr-2" />
              <FaDownload className="inline-block" />
            </div>
            <span className="">Baixar todos os gráficos</span>
          </button>
        </div>
        <div
          className="flex items-stretch grid mt-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
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
                  <FaDownload className="inline-block" />
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
    </div>
  );
}
