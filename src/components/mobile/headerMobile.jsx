import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { LoginContext } from "../../context/LoginContext";
import { IoMdLogOut } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbAlignBoxBottomLeft } from "react-icons/tb";
import Swal from "sweetalert2";

export function HeaderMobile({ openHamburger, setOpenHamburger }) {
  const { dark, darkModeHandler } = useContext(DarkModeContext);
  const { usuario, setUsuario, loginGoogle, logoutGoogle } =
    useContext(LoginContext);
  return (
    <div>
      <div
        className="md:hidden text-white text-1xl cursor-pointer"
        onClick={() => setOpenHamburger(!openHamburger)}
      >
        ☰
      </div>
      {openHamburger && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4">
          <button className="text-white">Gerar Relatório &nbsp; 
            <TbAlignBoxBottomLeft size={20} className="inline mb-1" />
          </button>
          <button className="text-white">
            Documentação &nbsp;
            <IoDocumentTextOutline size={20} className="inline mb-1" />
          </button>

          <button
            className="text-white"
            onClick={() => {
              darkModeHandler();
            }}
          >
            Tema
            {dark ? (
              <FaRegLightbulb size={20} color="white" className="inline ml-2" />
            ) : (
              <FaLightbulb size={20} color="white" className="inline ml-2" />
            )}
          </button>
          {!usuario ? (
            <button
              className="dark:hover:bg-gray-700 hover:bg-brightbee-150 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-200"
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
                onClick={() => {
                  Swal.fire({
                    customClass: {
                      popup: "custom-modal", // Classe personalizada para o modal
                      title: "custom-title",
                      confirmButton: "confirm-button",
                      denyButton: "deny-button",
                      cancelButton: "cancel-button",
                    },
                    title: "Você deseja fazer logout?",
                    showDenyButton: true, // isso permite o botão de negação
                    confirmButtonText: "Sair",
                    denyButtonText: `Não sair`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logoutGoogle();
                      setUsuario(null); // Limpa o estado do usuário
                      localStorage.removeItem("usuario"); // Remove do localStorage
                    }
                  });
                }}
                className="cursor-pointer"
              />
            </span>
          )}
        </div>
      )}
    </div>
  );
}