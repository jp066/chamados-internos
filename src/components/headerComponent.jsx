import { VscAccount } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";

export function Header({
  usuario,
  loginGoogle,
  logoutGoogle,
  dark,
  setDark,
  darkModeHandler,
}) {
  const headerStyle = {
    color: "#fff",
    background: dark
      ? "linear-gradient(to right, #121212, #060910ff, #0c101aff)"
      : "linear-gradient(to right, #e9692c, #f08a54, #c94e0cc6)",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    width: "100%",
    padding: "1rem",
    transition: "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)",
  };
  console.log("Renderizando Header, modo dark:", setDark);
  return (
    <header style={headerStyle}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <a
          href="/"
          className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-yellow-700 rounded-lg transition-shadow"
        >
          <img
            src={require("../imgs/LOGOS.png")}
            alt="Logo"
            className="h-12 w-15 mr-1 drop-shadow-md"
          />
        </a>
        <span className="text-white text-sm sm:text-base font-semibold text-center sm:text-left tracking-wide drop-shadow-sm">
          Chamados de Sistemas
        </span>
        {!usuario ? (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white flex items-center font-bold py-2 px-4 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            onClick={loginGoogle}
          >
            <VscAccount size={30} color="white" />
            &nbsp; Login
          </button>
        ) : (
          <span className="text-white text-sm sm:text-base font-semibold text-center sm:text-left tracking-wide drop-shadow-sm flex items-center gap-2">
            {usuario.photoURL && (
              <img
                src={usuario.photoURL}
                alt="usuario"
                className="h-8 w-8 rounded-full"
              />
            )}
            {usuario.displayName || usuario.email || "Usuário logado"}
            &nbsp;
            <IoMdLogOut
              size={24}
              color="white"
              onClick={logoutGoogle}
              className="cursor-pointer"
            />
          </span>
        )}

        <button onClick={() => darkModeHandler()}>
          {dark && <FaLightbulb color="white" />}
          {!dark && <FaRegLightbulb color="white" />}
        </button>
      </div>
    </header>
  );
}
