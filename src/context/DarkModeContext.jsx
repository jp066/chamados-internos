import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]); // [dark] é a dependência, o efeito roda quando dark muda

  const darkModeHandler = () => setDark((prevDark) => !prevDark);
    return (
    <DarkModeContext.Provider value={{ dark, setDark, darkModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
}