import { VscAccount } from "react-icons/vsc";
import { IoMdLogOut } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import Swal from "sweetalert2";
//import { contadorDeChamadas, reportSimple } from "../services/firestoreService";
//import { useState } from "react";

export function Header({
  usuario,
  loginGoogle,
  logoutGoogle,
  dark,
  setDark,
  darkModeHandler,
}) {
//  const [limiteAlcancado, setLimiteAlcancado] = useState(false);
  const headerStyle = {
    color: "#fff",
    background: dark
      ? "linear-gradient(to right, #121212, #060910ff, #0c101aff)"
      : "linear-gradient(to right, #e9692c, #f08a54, #c94e0cc6)",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
    width: "100%",
    padding: "1rem",
    transition:
      "background 0.7s cubic-bezier(.4,0,.2,1), color 0.7s cubic-bezier(.4,0,.2,1)",
  };
  console.log("Renderizando Header, modo dark:", setDark);
  return (
    <header style={headerStyle}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <img
          src={require("../imgs/LOGOS.png")}
          alt="Logo"
          className="h-12 w-15 mr-1 drop-shadow-md"
        />
        <span className="text-white text-sm sm:text-base font-semibold text-center sm:text-left tracking-wide drop-shadow-sm">
          Chamados de Sistemas
        </span>
        {!usuario ? (
          <button
            className="hover:bg-brightbeeDark-4 text-white flex items-center font-bold py-2 px-4 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
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
                  }
                });
              }}
              className="cursor-pointer"
            />
          </span>
        )}
        {usuario && usuario.email.endsWith("@brightbee.com.br") && (
          <button
            onClick={() => {
              console.log("Botão de relatório clicado");/*
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
                confirmButtonText: "Relatório simples",
                denyButtonText: `Relatório personalizado com filtros`,
                cancelButtonText: "Cancelar",
              }).then((result) => {
                if (result.isConfirmed) {
                  reportSimple(limiteAlcancado, setLimiteAlcancado);
                  console.log("Limite alcançado:", limiteAlcancado);
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
                  } else {
                    Swal.fire({
                      customClass: {
                        popup: "custom-modal-small",
                        title: "custom-title-small",
                        text: "custom-text-small",
                        confirmButton: "confirm-button-small",
                      },
                      icon: "success",
                      title:
                        "O relatório foi enviado para o seu e-mail cadastrado.",
                      confirmButtonText: "Ok",
                    });
                  }
                } else if (result.isDenied) {
                  // <ReportCustomComponent />
                }
              });*/
              Swal.fire({
                customClass: {
                  popup: "custom-modal-small",
                  title: "custom-title-small",
                },
                icon: 'info',
                title: 'Relatório',
                text: 'Função de geração de relatório será implementada em breve.',
              });
            }}
          >
            <BiSolidReport size={25} />
          </button>
        )}
        <button onClick={() => darkModeHandler()}>
          {dark && <FaLightbulb color="white" />}
          {!dark && <FaRegLightbulb color="white" />}
        </button>
      </div>
    </header>
  );
}
