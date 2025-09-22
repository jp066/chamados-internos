import { Header } from "./headerComponent";
import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import SidebarComponent from "./sidebarComponent";
import IntroSection from "./documentacaoComponents/introSection";
import GoogleIntegration from "./documentacaoComponents/googleIntegration";
import { LoginContext } from "../context/LoginContext";
import loginGoogle from "./appComponent";

export default function DocumentComponent() {
  const { dark, setDark, darkModeHandler } = useContext(DarkModeContext);
  const { usuario, setUsuario } = useContext(LoginContext);
  const [activeSection, setActiveSection] = useState("intro-section");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header fixo */}
      <div className="fixed top-0 left-0 w-full h-16 z-50 shadow-md">
        <Header
          dark={dark}
          setDark={setDark}
          darkModeHandler={darkModeHandler}
          usuario={usuario}
          setUsuario={setUsuario}
          loginGoogle={loginGoogle} // ← Você precisa ter essa função
          logoutGoogle={() => {
            setUsuario(null);
            localStorage.removeItem("usuario");
          }}
        />
      </div>

      {/* Container principal */}
      <div
        className="flex min-h-screen pt-16"
        style={{
          background: dark ? "#181818" : "#fff1eb",
          color: dark ? "#ffffff" : "#000000",
          transition:
            "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Sidebar */}
        <SidebarComponent
          activeSection={activeSection}
          handleSectionClick={handleSectionClick}
          dark={dark}
          darkModeHandler={darkModeHandler}
          setDark={setDark}
        />

        {/* Conteúdo principal */}
        <main className="flex-1 p-6 md:p-10">
          <section
            id="intro-section"
            className="max-w-5xl mb-8"
            style={{
              scrollMarginTop: "80px",
            }}
          >
            <IntroSection />
          </section>
          &nbsp;
          <section
            id="formulario-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <GoogleIntegration />
          </section>
          <section
            id="telegram-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <h2 className="text-xl font-bold mb-2">TelegramBot</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta seção cobre a integração com o TelegramBot.
            </p>
          </section>
          <section
            id="firebase-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <h2 className="text-xl font-bold mb-2">Firebase</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta seção cobre a integração com o Firebase.
            </p>
          </section>
          <section
            id="react-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <h2 className="text-xl font-bold mb-2">Aplicação React</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta seção cobre a construção da aplicação em React.
            </p>
          </section>
          <section
            id="cloudinary-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <h2 className="text-xl font-bold mb-2">Cloudinary</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta seção cobre a integração com o Cloudinary.
            </p>
          </section>
          <section
            id="relatorios-section"
            className="mb-8"
            style={{ scrollMarginTop: "80px" }}
          >
            <h2 className="text-xl font-bold mb-2">
              Relatórios com MUI x Chart.js
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta seção cobre a geração de relatórios utilizando MUI e
              Chart.js.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
