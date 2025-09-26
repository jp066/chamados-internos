import { useState } from "react";
import { motion } from "motion/react";

export default function GoogleIntegration() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6 text-brightbee-400 dark:text-brightbeeDark-3">
          Formulario, Planilha e Google Apps Script.
        </h1>

        {/* Visão Geral */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Fluxo das integrações com os serviços Google:
          </h2>
          <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {[
                {
                  step: "1",
                  title: "Google Formulário",
                  desc: "É disponibilizado para toda a empresa um formulário para abertura dos chamados.",
                  desc2: [],
                },
                {
                  step: "2",
                  title: "Google Planilhas",
                  desc: "Automaticamente, toda resposta coletada do formulário é armazenada em uma planilha de regimento interno.",
                  desc2: [],
                },
                {
                  step: "3",
                  title: "Apps Script",
                  desc: "O apps script, é um ambiente de desenvolvimento baseado em JavaScript que permite a criação de scripts para automatizar tarefas e integrar serviços do Google. Na aplicação, o Apps Script é utilizado para:",
                  desc2: [
                    "Processar os dados recebidos do formulário.",
                    "Enviar notificações via TelegramBot.",
                    "Sincronizar dados com o Firebase.",
                    "Enviar confirmações por e-mail.",
                  ],
                },
                {
                  step: "4",
                  title: "Firebase",
                  desc: "Sincronização de dados",
                  desc2: [],
                },
                {
                  step: "5",
                  title: "Dashboard",
                  desc: "Visualização de dados",
                  desc2: [],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-brightbee-400 dark:bg-brightbeeDark-3 text-white rounded-full flex items-center justify-center font-bold mb-2 shadow-md">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 max-w-xs min-w-[150px]">
                    {item.desc}
                  </p>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 list-inside mt-2">
                    {item.desc2.map((descItem, descIndex) => (
                      <li
                        className="ml-4 hover:text-brightbee-400 dark:hover:text-brightbeeDark-3 bg-brightbee-125 dark:bg-brightbeeDark-13 p-2 rounded-full mb-2 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                        key={descIndex}
                      >
                        {descItem}
                      </li>
                    ))}
                  </ul>
                  {index < 4 && (
                    <div className="hidden md:block text-brightbee-400 dark:text-brightbeeDark-3 text-2xl mt-2">
                      →
                    </div>
                  )}
                  {index === 4 && (
                    <div className="hidden md:block text-brightbee-400 dark:text-brightbeeDark-3 text-2xl mt-2">
                      *
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-8 ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Formulário
          </h2>
          <motion.div
            className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4"
            style={{
              borderRadius: !isFormOpen ? "9999px" : "12px",
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
                }`} // transformação suave ao girar o ícone
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
                  específicas do nosso fluxo de trabalho. Além disso, o Google
                  Forms oferece recursos robustos de coleta e análise de dados,
                  o que facilita o acompanhamento e a gestão dos chamados.
                </h2>
                <h4 className="font-semibold mb-2">Campos</h4>
                <h2 className="text-sm mb-4">
                  Os campos do formulário foram projetados para capturar as
                  informações necessárias de forma clara e concisa. Eles incluem
                  campos como:
                  <ul className="list-none mt-2 space-y-3">
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
                      Nome do solicitante
                    </motion.li>
                    <motion.li
                      style={{ opacity: 0.9, y: 20 }}
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
                      Email do solicitante
                    </motion.li>
                    <motion.li
                      style={{ opacity: 0.9, y: 20 }}
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
                      Descrição do problema
                    </motion.li>
                    <motion.li
                      style={{ opacity: 0.9, y: 20 }}
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
                      Anexos (se necessário)
                    </motion.li>
                  </ul>
                </h2>
              </div>
            )}
          </motion.div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Planilhas
          </h2>
          <motion.div
            className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4"
            style={{
              borderRadius: !isSheetOpen ? "9999px" : "12px",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
            whileHover={{
              opacity: 1,
            }}
          >
            <button
              onClick={toggleSheet}
              className="w-full text-left flex items-center justify-between hover:text-brightbee-600 dark:hover:text-brightbeeDark-3 transition-colors duration-200"
            >
              <span>Detalhes da Planilha</span>
              <span className={`transition-transform duration-200 ${isSheetOpen ? "rotate-180" : ""}`}>⯆</span>
            </button>
            {isSheetOpen && (
              <div className="mt-4 p-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-brightbeeDark-7 rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3">
                <h4 className="font-semibold mb-2">Objetivo</h4>
                <h2 className="text-sm mb-4">
                  A planilha serve como repositório central para todas as
                  solicitações de chamados, facilitando o acompanhamento e a
                  gestão das mesmas.
                </h2>
              </div>
            )}
          </motion.div>
        </div>
        {/* Google Apps Script */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Google Apps Script
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4 rounded-lg"
              initial={{ opacity: 0.9, scale: 0.95 }}
              style={{ originX: 0, originY: 0 }}
              whileHover={{
                scale: 1,
                transition: { duration: 0.2 },
                opacity: 1,
              }}
            >
              <h3 className="font-semibold text-brightbee-600 dark:text-brightbeeDark-3 mb-2">
                TelegramBot API
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demonstrar uso do bot do Telegram para notificações, exemplos do
                código etc.
              </p>
            </motion.div>
            <motion.div
              className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4 rounded-lg"
              initial={{ opacity: 0.9, scale: 0.95 }}
              style={{ originX: 0, originY: 0 }}
              whileHover={{
                scale: 1,
                transition: { duration: 0.2 },
                opacity: 1,
              }}
            >
              <h3 className="font-semibold text-brightbee-600 dark:text-brightbeeDark-3 mb-2">
                Integração Firebase
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sincronização de dados entre a planilha e o banco de dados do
                Firebase, incluindo exemplos de código e melhores práticas.
              </p>
            </motion.div>
            <motion.div
              className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4 rounded-lg"
              initial={{ opacity: 0.9, scale: 0.95 }}
              style={{ originX: 0, originY: 0 }}
              whileHover={{
                scale: 1,
                transition: { duration: 0.2 },
                opacity: 1,
              }}
            >
              <h3 className="font-semibold text-brightbee-600 dark:text-brightbeeDark-3 mb-2">
                Envio de E-Mails, confirmações e atualizações. Mostrar exemplos
                de código.
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Visualização em tempo real com gráficos e estatísticas dos
                chamados
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
