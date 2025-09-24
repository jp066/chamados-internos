import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export function DocumentMobile() {
  const { dark } = useContext(DarkModeContext);
  return (
    <div
      className="p-4 max-w-3xl mx-auto"
      style={{
        background: dark ? "#181818" : "#fff1eb",
        color: dark ? "#ffffff" : "#000000",
        transition:
          "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <div style={{ height: "100px" }}></div>
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Documentação do Sistema de Chamados
        </h1>
      </div>
    </div>
  );
}