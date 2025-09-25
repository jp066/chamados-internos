import { HiOutlineComputerDesktop } from "react-icons/hi2";

export function IntroSectionMobile() {
  return (
    <div>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-12">
        <div className="flex items-start gap-2">
          <span className="text-yellow-600 dark:text-yellow-400 text-lg">
            ⚠️
          </span>
          <div>
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">
              Importante
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              Esta documentação assume conhecimento básico em React, Firebase e
              Google Apps Script. Para dúvidas específicas, consulte a equipe de
              desenvolvimento.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6 mt-6">
        <div className="flex items-start gap-1">
          <span className="text-blue-600 dark:text-blue-400 text-xl">
            <HiOutlineComputerDesktop />
          </span>
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Mentalidade Desktop-First
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
              Este sistema foi projetado com foco na experiência desktop. A
              interface foi pensada para maximizar a produtividade em telas
              maiores, aproveitando melhor o espaço disponível para visualização
              de dados e operações complexas.
            </p>
            &nbsp;
            <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
              Para melhor experiência, recomenda-se o uso em navegadores no
              Desktop. A versão mobile está disponível apenas para consultas
              rápidas.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6 mt-20 text-brightbee-400 dark:text-brightbeeDark-3">
        Documentação do Sistema de Chamados
      </h1>
      <section
        id="intro-section-mobile"
        className="mb-8"
        style={{
          scrollMarginTop: "80px",
        }}
      >
        <h2 className="text-2xl font-bold mt-12">Introdução</h2>
        <p className="mb-4 mt-16">
          Bem-vindo à documentação do Sistema de Chamados! Este sistema foi
          desenvolvido para facilitar a gestão de chamados internos em uma
          organização, permitindo que os funcionários registrem, acompanhem e
          resolvam problemas de forma eficiente.
        </p>
        <p className="mb-4">
          Esta documentação tem como objetivo fornecer informações claras e
          concisas sobre o uso do sistema, suas funcionalidades e melhores
          práticas.
        </p>
      </section>
    </div>
  );
}
