import { toPng } from "html-to-image";

export const handleExportPng = async (index, nameGraph) => {
  setTimeout(async () => {
    const chartElement = document.getElementById(`grafico-${index}`);
    if (!chartElement) return;
    try {
      const dataUrl = await toPng(chartElement, {
        cacheBust: true,
        skipFonts: true,
        style: {
          transform: "scale(2)",
          width: "400px",
          height: "400px",
        },
      });
      const link = document.createElement("a"); // Cria um elemento de link temporário para download
      link.href = dataUrl;
      link.download = `Grafico - ${nameGraph}.png`;
      document.body.appendChild(link);
      link.click();
      console.log("Gráfico exportado como PNG:", dataUrl);
      console.log(document.getElementById(`grafico-${index}`).innerHTML);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao exportar gráfico como PNG:", error);
    }
  }, 1000);
};

export const handleExportAllPng = async (nameGraph) => {
  setTimeout(async () => {
    const chartElement = document.getElementById(`todos-graficos`);
    if (!chartElement) return;
    try {
      const dataUrl = await toPng(chartElement, {
        cacheBust: true,
        skipFonts: true,
        style: {
          transform: "scale(2)",
          width: "400px",
          height: "400px",
        },
      });
      const link = document.createElement("a"); // Cria um elemento de link temporário para download
      link.href = dataUrl;
      link.download = `Grafico - ${nameGraph}.png`;
      document.body.appendChild(link);
      link.click();
      console.log("Gráfico exportado como PNG:", dataUrl);
      console.log(document.getElementById(`todos-graficos`).innerHTML);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao exportar gráfico como PNG:", error);
    }
  }, 1000);
};
