import React from "react";
import { Header } from "./headerComponent";
import { Hero } from "./heroComponent";
import { Dashboard } from "./dashboardComponent";
import { Footer } from "./footerComponent.jsx";
import { signOut } from "../firebase.js";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { DarkModeContext } from "../context/DarkModeContext";
//import {ChartSimple} from "./charts/charts_simple.jsx";

export default function Home() {
  const { usuario, loginGoogle } = useContext(LoginContext);
  const { dark, setDark } = useContext(DarkModeContext);

  const darkModeHandler = () => {
    setDark((prev) => {
      const newDark = !prev;
      localStorage.setItem("darkMode", newDark);
      if (newDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      return newDark;
    });
  };
  React.useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  // VERIFICAÇÃO DE E-MAILS PERMITIDOS
  const isTeamMember =
    usuario &&
    usuario.email &&
    (usuario.email === "vitorianascimento@brightbee.com.br" ||
      usuario.email === "rafaeloliveira@brightbee.com.br" ||
      usuario.email === "alexandretinoco@brightbee.com.br" ||
      usuario.email === "joaomatos@brightbee.com.br" ||
      usuario.email === "sistemas@brightbee.com.br" ||
      usuario.email === "flaviaalves@brightbee.com.br");

  return (
    /*<>
      <ChartSimple />
    </>*/
    <div className="min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1 dark:via-brightbeeDark-13 dark:to-brightbeeDark-1 transition-all duration-700 ease-out">
      <Header
        usuario={usuario}
        loginGoogle={loginGoogle}
        logoutGoogle={signOut}
        dark={dark}
        setDark={setDark}
        darkModeHandler={darkModeHandler}
      />
      {!usuario ? (
        <div style={{ height: "80px" }}></div>
      ) : (
        <div style={{ height: "0px" }}></div>
      )}
      {!usuario ? (
        <h1 className="text-center font-sans text-2xl mt-20 dark:text-white text-brightbeeDark-900">
          Por favor, faça login para acessar.
        </h1>
      ) : !isTeamMember ? (
        <h1 className="text-center font-sans text-2xl mt-20 text-red-600 dark:text-white">
          <div style={{ height: "80px" }}></div>
          <strong>Você não tem permissão para acessar este link.</strong> <br />
          Acesso restrito a membros da equipe de Sistemas.
        </h1>
      ) : (
        <>
          <div style={{ height: "80px" }}></div>
          <Hero
            dark={dark}
            setDark={setDark}
            darkModeHandler={darkModeHandler}
          />
          <Dashboard
            dark={dark}
            setDark={setDark}
            darkModeHandler={darkModeHandler}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
