import { VscAccount } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { TbAlignBoxBottomLeft } from "react-icons/tb";
import Swal from "sweetalert2";
import { IoDocumentTextOutline } from "react-icons/io5";
//import { reportSimple } from "../services/firestoreService";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LoginContext } from "../context/LoginContext";
import { ModalRelatorio } from "./modalRelatorio";
import { HeaderMobile } from "./mobile/headerMobile";
import { contadorDeChamadas } from "../services/firestoreService";

export function Header() {
  const { dark, setDark, darkModeHandler } = useContext(DarkModeContext);
  const [openHamburger, setOpenHamburger] = useState(false);
  const { usuario, setUsuario, loginGoogle, logoutGoogle } =
    useContext(LoginContext);
  const [limiteAlcancado, setLimiteAlcancado] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(setDark);
  console.log(setLimiteAlcancado);
  let navigate = useNavigate();
  return (
    <motion.header
      className={`fixed top-[-10px] left-0 z-[1000] p-4 nav ${
        openHamburger ? "open" : ""
      } w-full ${
        dark
          ? "bg-gradient-to-r from-headerDark-1 via-headerDark-2 to-headerDark-3"
          : "bg-gradient-to-r from-headerLight-1 via-headerLight-2 to-headerLight-3"
      } transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0.6, scale: 1 }}
          style={{ originX: 0, originY: 0 }}
          whileHover={{ scale: 1.2, transition: { duration: 0.2 }, opacity: 1 }}
        >
          <NavLink to="/">
            <img
              src={require("../imgs/LOGOS.png")}
              alt="Logo"
              className="h-12 w-15 mr-1 drop-shadow-md"
            />
          </NavLink>
        </motion.div>
        {/* Header Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {usuario && usuario.email.endsWith("@brightbee.com.br") && (
            <motion.button
              initial={{ opacity: 0.6, scale: 1 }}
              style={{ originX: 0, originY: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                opacity: 1,
              }}
              className="dark:hover:bg-gray-700 hover:bg-brightbee-150 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-300"
              onClick={() => {
                console.log("Botão de relatório clicado");
                Swal.fire({
                  customClass: {
                    popup: "custom-modal", // Classe personalizada para o modal
                    title: "custom-title",
                    confirmButton: "confirm-button",
                    denyButton: "deny-button",
                    cancelButton: "cancel-button",
                  },
                  title: "Você deseja gerar um relatório com os dados atuais?",
                  text: "Só pode ser gerado no maximo 3 relatórios por mês por questão de custo ao Banco de Dados.",
                  showDenyButton: true, // isso permite o botão de negação
                  showCancelButton: true, // isso permite o botão de cancelamento
                  confirmButtonText: "KPI rápido  📄",
                  denyButtonText: "KPI detalhado  🔎",
                  cancelButtonText: "Cancelar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    contadorDeChamadas(limiteAlcancado, setLimiteAlcancado);
                    console.log("Limite alcançado:", limiteAlcancado);
                    navigate("/relatorio");
                    if (limiteAlcancado) {
                      Swal.fire({
                        customClass: {
                          popup: "custom-modal-small",
                          title: "custom-title-small",
                          text: "custom-text-small",
                          confirmButton: "confirm-button-small",
                        },
                        icon: "error",
                        title: "Limite de relatórios mensais atingido",
                        text: "Você atingiu o limite de  relatórios mensais. Por favor, entre em contato com o suporte para mais informações.",
                        confirmButtonText: "Ok",
                      });
                    }
                  } else if (result.isDenied) {
                    setShowModal(true);
                  }
                });
              }}
            >
              <TbAlignBoxBottomLeft size={25} /> &nbsp; Gerar KPI
            </motion.button>
          )}
          <motion.button
            initial={{ opacity: 0.6, scale: 1 }}
            style={{ originX: 0, originY: 0 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              opacity: 1,
            }}
            className="dark:hover:bg-gray-700 hover:bg-brightbee-150 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md"
            onClick={() => navigate("/documentacao")}
          >
            <IoDocumentTextOutline size={25} color="white" />
            &nbsp; Documentação
          </motion.button>
          <motion.button
            initial={{ opacity: 0.6, scale: 1 }}
            style={{ originX: 0, originY: 0 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
              opacity: 1,
            }}
            onClick={() => darkModeHandler()}
            className="dark:hover:bg-gray-700 hover:bg-brightbee-150 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-500"
          >
            {dark && <FaLightbulb color="white" />}
            {!dark && <FaRegLightbulb color="white" />}
            &nbsp; Modo {dark ? "Escuro" : "Claro"}
          </motion.button>
          {!usuario ? (
            <motion.button
              initial={{ opacity: 0.6, scale: 1 }}
              style={{ originX: 0, originY: 0 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
                opacity: 1,
              }}
              className="dark:hover:bg-gray-700 hover:bg-brightbee-150 text-white flex items-center font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-200"
              onClick={loginGoogle}
            >
              <VscAccount size={30} color="white" />
              &nbsp; Login
            </motion.button>
          ) : (
            <span className="text-white text-sm sm:text-base font-semibold text-center sm:text-left tracking-wide drop-shadow-sm flex items-center gap-2">
              {usuario.photoURL && (
                <motion.img
                  initial={{ opacity: 0.6, scale: 1 }}
                  style={{ originX: 0, originY: 0 }}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                    opacity: 1,
                  }}
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
                      denyButton: "deny-button-cancel",
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
      </div>
      {/* Header Mobile */}
      <HeaderMobile
        openHamburger={openHamburger}
        setOpenHamburger={setOpenHamburger}
      />
      {showModal && (
        <ModalRelatorio
          onClose={() => setShowModal(false)}
          style={{ zIndex: 1000 }}
        />
      )}
    </motion.header>
  );
}