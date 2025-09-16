import React from "react";
import { Header } from "./components/headerComponent";
import { Hero } from "./components/heroComponent";
import { Dashboard } from "./components/dashboardComponent";
import { Footer } from "./components/footerComponent.jsx";
import { auth, signOut } from "./firebase.js";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    document.body.style.transition =
      "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)"; // Adiciona transição suave, para usar:
  };

  const [user, setUser] = useState(null);
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Usuário logado:", currentUser);
        const uid = currentUser.uid;
        console.log("UID do usuário:", uid);
      } else {
        console.log("Nenhum usuário logado");
      }
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // VERIFICAÇÃO DE E-MAILS PERMITIDOS
  const isTeamMember =
    user &&
    user.email &&
    (user.email === "vitorianascimento@brightbee.com.br" ||
      user.email === "rafaeloliveira@brightbee.com.br" ||
      user.email === "alexandretinoco@brightbee.com.br" ||
      user.email === "joaomatos@brightbee.com.br" ||
      user.email === "sistemas@brightbee.com.br" ||
      user.email === "flaviaalves@brightbee.com.br");

  return (
    <div className="min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1.2 dark:via-brightbeeDark-13 dark:to-brightbeeDark-1.2 transition-colors duration-500">
      <Header
        usuario={user}
        loginGoogle={loginGoogle}
        logoutGoogle={signOut}
        dark={dark}
        setDark={setDark}
        darkModeHandler={darkModeHandler}
      />
      {!user ? (
        <h1 className="text-center font-sans text-2xl mt-20 dark:text-white text-brightbeeDark-900">
          Por favor, faça login para continuar.
        </h1>
      ) : !isTeamMember ? (
        <h1 className="text-center font-sans text-2xl mt-20 text-red-600 dark:text-white">
          <strong>Você não tem permissão para acessar este link.</strong> <br />
          Acesso restrito a membros da equipe de Sistemas.
        </h1>
      ) : (
        <>
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
