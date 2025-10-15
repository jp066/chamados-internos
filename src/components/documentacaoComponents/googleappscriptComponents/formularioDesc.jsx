import { motion } from "motion/react";
import { useState } from "react";

export default function FormularioDesc() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const formData = [
    "Nome do solicitante",
    "Email do solicitante",
    "Descrição do problema",
    "Anexos (se necessário)",
  ];

  return (
    <div className="mb-8 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Formulário
      </h2>
      <motion.div
        className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4"
        style={{
          borderRadius: "12px",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{
          opacity: 1,
        }}
      >
        <button
          onClick={toggleForm}
          className="w-full text-left flex items-center justify-between hover:text-brightbee-600 dark:hover:text-brightbeeDark-3 transition-colors duration-200"
        >
          <span>Detalhes do Formulário</span>
          <span
            className={`transform transition-transform duration-200 ${
              isFormOpen ? "rotate-180" : ""
            }`}
          >
            ⯆
          </span>
        </button>
        {isFormOpen && (
          <div className="mt-4 p-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-brightbeeDark-7 rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3">
            <h4 className="font-semibold mb-2">Objetivo</h4>
            <h2 className="text-sm mb-4">
              O formulário é a interface inicial onde os usuários podem
              registrar suas solicitações de chamados de forma simples e
              intuitiva. Optamos por utilizar o Google Forms devido à sua
              facilidade de uso, integração nativa com o Google Sheets e
              capacidade de personalização para atender às necessidades
              específicas do nosso fluxo de trabalho. Além disso, o Google Forms
              oferece recursos robustos de coleta e análise de dados, o que
              facilita o acompanhamento e a gestão dos chamados.
            </h2>
            <h4 className="font-semibold mb-2">Campos</h4>
            <h2 className="text-sm mb-4">
              Os campos do formulário foram projetados para capturar as
              informações necessárias de forma clara e concisa. Eles incluem
              campos como:
              <ul className="list-none mt-2 space-y-3">
                {formData.map((field) => (
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
