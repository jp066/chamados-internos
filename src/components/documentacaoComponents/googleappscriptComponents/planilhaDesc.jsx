import { motion } from "motion/react";
import { useState } from "react";

export default function PlanilhaoDesc() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };
  const sheetData = [
    "Carimbo de data/hora",
    "Endereço de e-mail",
    "Sala",
    "Categoria",
    "O que ocorreu com o TOTVS RM?",
    "O que ocorreu com os Portais?",
    "O que ocorreu com o Workchat?",
    "O que ocorreu com o ZapSign?",
    "O que ocorreu com o Remark?",
    "Imagem descritiva",
    "Descrição",
    "Informe o nome do usuario:",
    "A solicitação é referente a qual modulo?",
  ];
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Planilha
      </h2>
      <motion.div
        className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4"
        style={{
          borderRadius: "12px",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
        whileHover={{
          opacity: 1,
        }}
      >
        <button
          onClick={toggleSheet}
          className="w-full text-left flex items-center justify-between hover:text-brightbee-600 dark:hover:text-brightbeeDark-3 transition-colors duration-200"
        >
          <span>Detalhes da Planilha</span>
          <span
            className={`transition-transform duration-200 ${
              isSheetOpen ? "rotate-180" : ""
            }`}
          >
            ⯆
          </span>
        </button>
        {isSheetOpen && (
          <div className="mt-4 p-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-brightbeeDark-7 rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3">
            <h4 className="font-semibold mb-2">Objetivo</h4>
            <h2 className="text-sm mb-4">
              A planilha serve como o repositório central para todas as
              solicitações de chamados recebidas através do formulário. Ela
              permite uma visualização organizada e estruturada dos dados,
              facilitando o acompanhamento do status de cada chamado, além de
              fornecer insights valiosos para a equipe de suporte. Optamos por
              utilizar o Google Sheets devido à sua integração nativa com o
              Google Forms, o que permite a atualização automática dos dados na
              planilha sempre que um novo chamado é registrado.
            </h2>
            <h4 className="font-semibold mb-2">Campos</h4>
            <h2 className="text-sm mb-4">
              Os campos da planilha correspondem diretamente aos campos do
              formulário, garantindo que todas as informações relevantes sejam
              capturadas e armazenadas de forma consistente. Eles incluem campos
              como:
              <ul className="list-none mt-2 space-y-3">
                {sheetData.map((field) => (
                  <motion.li
                    style={{
                      opacity: 0.9,
                      y: 20,
                    }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.5 },
                      color: "#f97316",
                    }}
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/icon-brightbee.png"
                      alt="BrightBee Icon"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    {field}
                  </motion.li>
                ))}
              </ul>
            </h2>
          </div>
        )}
      </motion.div>
    </div>
  );
}
