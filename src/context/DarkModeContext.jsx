import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();


export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem("dark") === "true" // valor inicial do estado baseado no localStorage
  );
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      console.log("dark mode ativado");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
      console.log("dark mode desativado");
    }
    localStorage.setItem("dark", dark);
  }, [dark]); // [dark] é a dependência, o efeito roda quando dark muda

  const darkModeHandler = () => setDark((prevDark) => !prevDark);
  return (
    <DarkModeContext.Provider value={{ dark, setDark, darkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
}
