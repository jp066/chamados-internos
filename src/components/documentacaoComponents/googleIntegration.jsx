import { motion } from "motion/react";
import FluxoIntegracoes from "./googleappscriptComponents/flowIntegrations";
import FormularioDesc from "./googleappscriptComponents/formularioDesc";
import PlanilhaDesc from "./googleappscriptComponents/planilhaDesc";
import Dependecias from "./googleappscriptComponents/dependencias";
import Autenticacao from "./googleappscriptComponents/autenticacao";
import Configuracao from "./googleappscriptComponents/configuracao";

export default function GoogleIntegration() {
  const gasData = [
    { title: "telegramBot.gs", desc: "Envia notificações via TelegramBot." },
    {
      title: "enviarEmailAbertura.gs",
      desc: "Gera e envia e-mail HTML com detalhes do chamado aberto, incluindo informações do usuário.",
    },
    {
      title: "integracaoFirebase.gs",
      desc: "Cria o token JWT e envia os dados para o Firestore.",
    },
    {
      title: "getKey.gs",
      desc: "Armazena e retorna a chave privada e credenciais do Firebase.",
    },
    {
      title: "payloadModulo.gs",
      desc: "Monta o texto do chamado considerando o módulo selecionado.",
    },
    {
      title: "enviarEmailConfirmacao.gs",
      desc: "Envia e-mail quando o chamado é concluido ao usuário solicitante.",
    },
    {
      title: "enviarEmailReabrir.gs",
      desc: "Envia e-mail quando o chamado é reaberto ao usuário solicitante.",
    },
    {
      title: "enviarEmailResposta.gs",
      desc: "Envia e-mail quando há uma nova resposta no chamado.",
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6 text-brightbee-400 dark:text-brightbeeDark-3">
          Formulario, Planilha e Google Apps Script.
        </h1>
        <FluxoIntegracoes />
        <FormularioDesc />
        <PlanilhaDesc />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Google Apps Script
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gasData.map((field, index) => (
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
                  {gasData[index].title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gasData[index].desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Dependecias />
      <Autenticacao />
      <Configuracao />
    </>
  );
}