import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGoogleappsscript } from "react-icons/si";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { GrPersonalComputer } from "react-icons/gr";

export default function IntroSection() {
  const funcionalidades = [
    {
      title: "Monitoramento de Chamados",
      label:
        "Acompanhamento em tempo real do status dos chamados com integração ao Firebase Firestore.",
    },
    {
      title: "Autenticação Segura",
      label:
        "Login via Google OAuth com controle de acesso restrito aos membros da equipe.",
    },
    {
      title: "Dashboard Interativo",
      label:
        "Visualização em tempo real com gráficos e estatísticas dos chamados",
    },
    {
      title: "Notificações Telegram",
      label:
        "Notificações automáticas via bot do Telegram para atualizações importantes",
    },
  ];
  const iconsStack = [
    { name: "React 19+", icon: <FaReact /> },
    { name: "Firebase", icon: <IoLogoFirebase /> },
    { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
    { name: "Google Apps Script", icon: <SiGoogleappsscript /> },
    {
      name: "MUI X Charts",
      icon: (
        <img
          src="https://mui.com/static/branding/product-advanced-dark.svg"
          alt="MUI X Charts"
          className="w-5 h-5"
        />
      ),
    },
  ];
  const documentationStructure = [
    {
      title: "Formulário e Google Apps Script:",
      content: "Configuração do formulário de entrada e automações",
    },
    {
      title: "TelegramBot:",
      content: "Configuração e implementação do bot de notificações",
    },
    {
      title: "Firebase:",
      content: "Configuração do banco de dados e autenticação",
    },
    {
      title: "Aplicação React:",
      content: "Estrutura, componentes e funcionalidades",
    },
    {
      title: "Relatórios:",
      content: "Implementação de gráficos e dashboards com MUI e Chart.js",
    },
  ];
  const fluxoSistema = [
    {
      step: "1",
      title: "Google Formulário",
      desc: "Preenchimento pelo usuário",
    },
    {
      step: "2",
      title: "Google Planilhas",
      desc: "Armazenamento inicial",
    },
    {
      step: "3",
      title: "Apps Script",
      desc: "Processamento automático e envio para Firebase.",
    },
    {
      step: "4",
      title: "Firebase",
      desc: "Sincronização de dados",
    },
    {
      step: "5",
      title: "Dashboard",
      desc: "Visualização de dados",
    },
  ];

  return (
    <>
      <div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 dark:text-yellow-400 text-lg">
              ⚠️
            </span>
            <div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
                Importante
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Esta documentação assume conhecimento básico em React, Firebase
                e Google Apps Script. Para dúvidas específicas, consulte a
                equipe de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
        &nbsp;
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
          <div className="flex items-start gap-3">
            <span className="text-blue-600 dark:text-blue-400 text-xl">
              <HiOutlineComputerDesktop />
            </span>
            <span className="text-blue-600 dark:text-blue-400 text-xl">
              <GrPersonalComputer />
            </span>
            <div>
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Mentalidade Desktop-First
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                Este sistema foi projetado com foco na experiência desktop,
                otimizado para uso em estações de trabalho da equipe de
                Sistemas. A interface foi pensada para maximizar a produtividade
                em telas maiores, aproveitando melhor o espaço disponível para
                visualização de dados e operações complexas.
              </p>
              &nbsp;
              <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                A abordagem Desktop-First garante que as funcionalidades
                principais sejam otimizadas para o ambiente de trabalho, onde a
                equipe passa a maior parte do tempo. Isso inclui layouts
                adaptativos, menus de fácil acesso e ferramentas de
                produtividade integradas.
              </p>
              &nbsp;
              <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                Posteriormente, o sistema pode ser adaptado para dispositivos
                móveis, mas a prioridade inicial foi garantir uma experiência
                robusta e eficiente para os usuários de desktop.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-brightbee-400 dark:text-brightbeeDark-3">
          Documentação Técnica - Sistema de Chamados Internos Bright Bee School.
        </h1>
        {/* Visão Geral */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Problema
          </h2>
          <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            O problema resolvido por este sistema é a necessidade de uma
            plataforma eficiente para o gerenciamento de chamados internos da
            equipe de Sistemas. Anteriormente, a equipe enfrentava desafios com
            processos manuais, falta de rastreamento adequado e comunicação
            ineficiente entre os membros da equipe. Diversas solicitações de
            suporte e manutenção eram feitas por e-mail ou mensagens, o que
            dificultava o acompanhamento e priorização dos chamados e também a
            falta de um histórico centralizado para controle de KPIs.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Visão Geral
          </h2>
          <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            O <strong>Sistema de Chamados Internos BrightBee</strong> é uma
            aplicação web moderna desenvolvida em React para gerenciamento
            eficiente de chamados internos da equipe de Sistemas. A plataforma
            oferece um fluxo completo desde o preenchimento do formulário até a
            resolução dos chamados, com integração robusta entre múltiplas
            tecnologias.
          </p>
          <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            O sistema permite autenticação segura via Google, controle de acesso
            restrito, visualização em tempo real, filtros avançados, atualização
            de status e resposta de chamados, com persistência confiável no
            Firebase Firestore.
          </p>
        </div>
        {/* Principais Funcionalidades */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Principais Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funcionalidades.map((func, index) => (
              <div className="bg-brightbee-50 dark:bg-brightbeeDark-8 p-4 rounded-full smooth">
                <h3 className="font-semibold text-brightbee-600 dark:text-brightbeeDark-3 mb-2 flex justify-center">
                  {func.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {func.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Stack Tecnológica
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {iconsStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white dark:bg-brightbeeDark-7 p-3 rounded-full shadow-sm hover:bg-brightbee-100 dark:hover:bg-brightbeeDark-6 transition-colors duration-200 hover:scale-105 transform"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Fluxo do Sistema
          </h2>
          <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {fluxoSistema.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-brightbee-400 dark:bg-brightbeeDark-3 text-white rounded-full flex items-center justify-center font-bold mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.desc}
                  </p>
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
        {/* Estrutura da Documentação */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
            # Estrutura da Documentação
          </h2>
          <p className="text-base mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            Esta documentação está organizada em seções específicas que cobrem
            cada componente do sistema:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {documentationStructure.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-brightbee-400 dark:text-brightbeeDark-3">
                  •
                </span>
                <span>
                  <strong>{item.title}</strong> {item.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}