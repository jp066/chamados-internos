import { toPng } from "html-to-image";

export const handleExportPng = async (index, nameGraph) => {
    const chartElement = document.getElementById(`grafico-${index}`);
    if (!chartElement) return;

    try {
        const dataUrl = await toPng(chartElement, { cacheBust: true, skipFonts: true });
        const link = document.createElement('a'); // Cria um elemento de link temporário para download
        link.href = dataUrl;
        link.download = `Grafico - ${nameGraph}.png`;
        document.body.appendChild(link);
        link.click();
//        document.body.removeChild(link);
    } catch (error) {
        console.error("Erro ao exportar gráfico como PNG:", error);
    }
}