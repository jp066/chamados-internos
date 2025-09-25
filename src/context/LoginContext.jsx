// Adicione essas importações no LoginContext.jsx
import { auth, signOut } from "../firebase.js";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem("usuario")) || null
  );

  // Adicione essas funções:
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("usuario", JSON.stringify(result.user));
      setUsuario(result.user);
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
    }
  };

  const logoutGoogle = async () => {
    try {
      await signOut(auth);
      setUsuario(null); // Limpa o estado do usuário
      localStorage.removeItem("usuario"); // Remove do localStorage
      // por que quando vou fazer login de novo ele automaticamente ja loga na conta antiga?
      // Isso acontece porque o Firebase mantém a sessão do usuário. Para evitar isso, você pode usar o método signOut do Firebase Auth, que já está sendo chamado aqui.
      // Se quiser garantir que o popup de login sempre peça a conta, você pode configurar o provedor para solicitar a seleção da conta:
      // provider.setCustomParameters({ prompt: 'select_account' });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Monitore mudanças de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsuario(currentUser);
      if (currentUser) {
        localStorage.setItem("usuario", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("usuario");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        usuario,
        setUsuario,
        loginGoogle,
        logoutGoogle,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
