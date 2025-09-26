import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";


export function ChartSimple() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1 dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-colors duration-500 p-4">
      <h1 className="text-center font-sans font-bold text-2xl mt-20 text-brightbeeDark-900 dark:text-white">
        Gráficos Simples - Teste de Integração da Biblioteca MUI X Charts
      </h1>
      <div className="flex items-stretch grid grid-cols-3 mt-[50px]">
        <Box width="100%">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Categoria
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Totvs" },
                  { id: 1, value: 15, label: "Remark" },
                  { id: 2, value: 20, label: "ZapSign" },
                ],
                innerRadius: 30,
                outerRadius: 100,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>
        <Box width="100%">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Modulo
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Educacional" },
                  { id: 1, value: 15, label: "Financeiro" },
                  { id: 2, value: 20, label: "Outros" },
                ],
                innerRadius: 30,
                outerRadius: 100,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>
        <Box width="100%">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Modulo
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Educacional" },
                  { id: 1, value: 15, label: "Financeiro" },
                  { id: 2, value: 20, label: "Outros" },
                ],
                innerRadius: 30,
                outerRadius: 100,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>
        <Box width="100%">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Modulo
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Educacional" },
                  { id: 1, value: 15, label: "Financeiro" },
                  { id: 2, value: 20, label: "Outros" },
                ],
                innerRadius: 30,
                outerRadius: 100,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>{" "}
        <Box width="100%">
          <h1 className="text-center mr-[90px] mb-4 font-sans font-bold text-xl mt-4 text-brightbeeDark-900 dark:text-white">
            Modulo
          </h1>
          <PieChart
            className="ml-[10px]"
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Educacional" },
                  { id: 1, value: 15, label: "Financeiro" },
                  { id: 2, value: 20, label: "Outros" },
                ],
                innerRadius: 30,
                outerRadius: 100,
              },
            ]}
            width={200}
            height={200}
          />
        </Box>
      </div>
    </div>
  );
}