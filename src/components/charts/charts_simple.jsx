import { PieChart } from "@mui/x-charts/PieChart";
import { FaFilePdf } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import {
  dataCategory,
  dataModule,
  dataRequester,
  dataProblem,
  dataStatus,
  dataRoom,
} from "../../utils/mocks";

export function ChartSimple() {
  const graficoRef = useRef(null); // Inicializa o ref corretamente

  const handleExportPDF = async () => {
    if (!graficoRef.current) {
      console.error(
        "graficoRef.current está null. Certifique-se de que o elemento foi renderizado."
      );
      return;
    }

    try {
      // Captura o conteúdo do gráfico
      const canvas = await html2canvas(graficoRef.current, {
        scale: 2, // Aumenta a qualidade da imagem
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Retrato, milímetros, A4

      // Calcula largura para centralizar na página
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth - 20; // Margem de 10mm de cada lado
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("relatorio.pdf");
    } catch (error) {
      console.error("Erro ao gerar o PDF:", error);
    }
  };

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
        Gráficos Simples - Teste de Integração da Biblioteca MUI X Charts
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
        <button
          className="bg-brightbeeDark-15 hover:bg-brightbeeDark-13 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center"
          onClick={handleExportPDF}
        >
          <FaFilePdf className="inline-block mr-2" />
          Exportar para PDF
        </button>
      </div>

      <div
        className="flex items-stretch grid mt-[50px] sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4"
        ref={graficoRef}
      >
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Categoria
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                innerRadius: 30,
                outerRadius: 100,
                data: dataCategory,
                arcLabel: "value",
              },
            ]}
            width={200}
            height={200}
            slotProps={{
              legend: { sx: legendSxGlobal, position: "bottom" },
            }}
          />
        </div>
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Modulo
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: dataModule,
                innerRadius: 30,
                outerRadius: 100,
                arcLabel: "value",
              },
            ]}
            width={200}
            height={200}
            slotProps={{
              legend: { sx: legendSxGlobal, position: "bottom" },
            }}
          />
        </div>
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Solicitante
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: dataRequester,
                innerRadius: 30,
                outerRadius: 100,
                arcLabel: "value",
              },
            ]}
            width={200}
            height={200}
            slotProps={{
              legend: { sx: legendSxGlobal, position: "bottom" },
            }}
          />
        </div>
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Problema
          </h1>
          <PieChart
            className="ml-[80px]"
            series={[
              {
                data: dataProblem,
                innerRadius: 30,
                outerRadius: 100,
                arcLabel: "value",
              },
            ]}
            width={200}
            height={200}
            slotProps={{
              legend: { sx: legendSxGlobal, position: "bottom" },
            }}
          />
        </div>
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Status
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: dataStatus,
                innerRadius: 30,
                outerRadius: 100,
                arcLabel: "value",
              },
            ]}
            width={200}
            height={200}
            slotProps={{
              legend: { sx: legendSxGlobal, position: "bottom" },
            }}
          />
        </div>{" "}
        <div className="chart-container">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Sala
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: dataRoom,
                innerRadius: 30,
                outerRadius: 100,
                arcLabel: "value",
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
    </div>
  );
}
