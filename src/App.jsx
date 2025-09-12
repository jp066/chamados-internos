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

export default function App() {
  const [user, setUser] = useState(null);
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user)
      setUser(result.user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };
  // Use useEffect to avoid multiple subscriptions
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Usuário logado:", currentUser);
        const uid = currentUser.uid;
      } else {
        console.log("Nenhum usuário logado");
      }
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Verifica se o usuário logado tem email @brightbee.com.br
  const isBrightbeeUser = user && user.email && user.email.endsWith('@brightbee.com.br');

  return (
    <div className="min-h-screen bg-white">
      <Header usuario={user} loginGoogle={loginGoogle} logoutGoogle={signOut} />
      {!user ? (
        <h1 className="text-center font-sans text-2xl mt-20">Por favor, faça login para continuar.</h1>
      ) : !isBrightbeeUser ? (
        <h1 className="text-center font-sans text-2xl mt-20 text-red-600">Apenas usuários @brightbee.com.br podem acessar.</h1>
      ) : (
        <>
          <Hero />
          <Dashboard />
        </>
      )}
    </div>
  );
}
