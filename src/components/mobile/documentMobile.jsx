import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { scrollToSection } from "../../utils/scrollToSection.js";

export function DocumentMobile() {
  const { dark } = useContext(DarkModeContext);
  return (
    <div
      className="md:hidden p-4 max-w-3xl mx-auto"
      style={{
        background: dark ? "#181818" : "#fff1eb",
        color: dark ? "#ffffff" : "#000000",
        transition:
          "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ height: "100px" }}></div>
      <div className="mb-6 flex justify-between items-center">
        <select
          name="select-section"
          id="select-section-id"
          className="mt-9 p-2 rounded-full fixed"
          style={{
            background: dark ? "#333" : "#fff",
            color: dark ? "#fff" : "#000",
          }}
          onChange={(element) => {
            if (element.target.value) {
              console.log("Elemento selecionado:", element.target.value);
              requestAnimationFrame(() => {
                scrollToSection(element.target.value);
              });
              setTimeout(() => {
                element.target.value = "";
              }, 1000);
            } else {
              console.log("Nenhum elemento selecionado");
            }
          }}
        >
          <option value="">Seções</option>
          <option value="intro-section-mobile">Introdução</option>
          <option value="formulario-section-mobile">Formulário</option>
        </select>
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-12 mb-6">
          Documentação do Sistema de Chamados
        </h1>
        <section
          id="intro-section-mobile"
          className="mb-8"
          style={{
            scrollMarginTop: "80px",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Introdução</h2>
          <p className="mb-4">
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
        <section
          id="formulario-section-mobile"
          className="mb-8"
          style={{
            scrollMarginTop: "80px",
          }}
        >
          <h2 className="text-2xl font-bold mb-4">Formulário</h2>
          <p className="mb-4">
            O formulário do Sistema de Chamados é a principal interface para
            registro de novos chamados. Nele, os usuários podem fornecer
            informações detalhadas sobre o problema que estão enfrentando.
          </p>
          <p className="mb-4">
            Para acessar o formulário, clique no botão "Novo Chamado" na página
            inicial do sistema.
          </p>
        </section>
      </div>
    </div>
  );
}
