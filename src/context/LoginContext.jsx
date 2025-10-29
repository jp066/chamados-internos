// Adicione essas importações no LoginContext.jsx
import { auth, signOut } from "../firebase.js";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem("usuario")) || null
  );

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
