import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { scrollToSection } from "../../utils/scrollToSection.js";
import { RxPinTop } from "react-icons/rx";
import { IntroSectionMobile } from "../documentacaoComponents/mobileDocuments/introSectionMobile.jsx";
import GoogleIntegrationMobile from "../documentacaoComponents/mobileDocuments/googleIntegrationMobile.jsx";

export function DocumentMobile() {
  const { dark } = useContext(DarkModeContext);
  const optionsSection = [
    { value: "Avisos", label: "Avisos" },
    { value: "intro-section-mobile", label: "Introdução" },
    { value: "google-services-mobile", label: "Serviços Google" },
    { value: "telegramBot-mobile", label: "TelegramBot" },
    { value: "firebase-mobile", label: "Firebase" },
    { value: "react-mobile", label: "Aplicação React" },
    { value: "cloudinary-mobile", label: "Cloudinary" },
    { value: "relatorios-mobile", label: "Relatórios com MUI x Chart.js" },
  ];
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
          <option value="">Ir para seção...</option>
          {optionsSection.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* Áreas de Seções */}
        <section id="Avisos">
          <IntroSectionMobile />
        </section>
        <section id="google-services-mobile">
          <GoogleIntegrationMobile />
        </section>
        {optionsSection.slice(3).map((section) => (
          <section key={section.value} id={section.value}>
            <h2 className="text-2xl font-bold mt-12 mb-4">
              {section.label}
            </h2>
            <p className="mb-4">
              Conteúdo da seção {section.label} em desenvolvimento...
            </p>
          </section>
        ))}
      </div>
      <button>
        <RxPinTop
          className="fixed bottom-4 right-4 text-3xl"
          onClick={() => window.scrollTo(0, 0)}
          color="#ff4500"
        />
      </button>
    </div>
  );
}
