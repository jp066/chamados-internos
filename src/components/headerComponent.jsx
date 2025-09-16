import { VscAccount } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";
//import {darkModeHandler, dark} from "../darkModeHandler.js";

export function Header({ usuario, loginGoogle, logoutGoogle }) {
  return (
    <header className="text-gray-800 p-4 bg-gradient-to-r from-brightbee-400 via-brightbee-300 to-brightbee-200 shadow-md w-full">
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
        {/*
        <button onClick={() => darkModeHandler()}>
          {
            dark && <IoSunny /> // render sunny when dark is true
          }
          {
            !dark && <IoMoon /> // render moon when dark is false
          }
        </button>
        */}
      </div>
    </header>
  );
}
