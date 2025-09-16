import { Header } from "./components/headerComponent";
import { Hero } from "./components/heroComponent";
import { Dashboard } from "./components/dashboardComponent";
import { auth, signOut } from "./firebase.js";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
//import { ThemeProvider } from "styled-components";
//import { lightTheme, darkTheme } from "./theme";
//import GlobalTheme from "./globals";
//import styled from "styled-components";

export default function App() {
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
      user.email === "sistemas@brightbee.com.br");

  return (
    <div className="min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50">
      <Header usuario={user} loginGoogle={loginGoogle} logoutGoogle={signOut} />
      {!user ? (
        <h1 className="text-center font-sans text-2xl mt-20">
          Por favor, faça login para continuar.
        </h1>
      ) : !isTeamMember ? (
        <h1 className="text-center font-sans text-2xl mt-20 text-red-600">
          <strong>Você não tem permissão para acessar este link.</strong> <br />
          Acesso restrito a membros da equipe de Sistemas.
        </h1>
      )
      :(
        <>
          <Hero />
          <Dashboard />
        </>
      )}
    </div>
  );
}