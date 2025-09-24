import { motion } from "motion/react";

export function FooterMobile() {
  return (
    <div>
      <div className="md:hidden flex flex-col">
        <div className="flex h-2 w-full">
          <div className="flex-1 bg-yellow-400"></div>
          <div className="flex-1 bg-orange-400"></div>
          <div className="flex-1 bg-cyan-500"></div>
          <div className="flex-1 bg-purple-800"></div>
          <div className="flex-1 bg-green-400"></div>
        </div>
        <div className="text-center p-4 bg-brightbee-1">
          <img
            src={require("../../imgs/logo-bright-bee.png")}
            alt="Descrição da imagem"
            className="mx-auto mt-[-16px] mb-2"
          />
          <div className="flex items-center">
            <motion.a
              href="https://docs.google.com/forms/d/1GTwuIG3Y7cQ_laHtxFGo8k35Kv0znKoVehro18YHZZs/edit"
              style={{
                color: "#3B82F6",
                fontSize: "14px",
                fontFamily: "Dm Sans, sans-serif",
                textAlign: "center",
                marginLeft: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 bg-slate-800"
            >
              Alterar formulário
            </motion.a>
            <motion.a
              href="https://docs.google.com/spreadsheets/d/1pCrag3SUFuxHGONKa1F4ct5BPds4SWYKnLjJRI1xi24/edit?gid=980151376#gid=980151376"
              style={{
                color: "#22C55E",
                fontSize: "14px",
                fontFamily: "Dm Sans, sans-serif",
                textAlign: "center",
                marginLeft: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 bg-slate-800"
            >
              Consultar Planilha
            </motion.a>
            <motion.a
              href="https://console.firebase.google.com/u/0/project/bot-suporte-sistemas/overview?hl=pt-br"
              style={{
                color: "#ff0000ff",
                fontSize: "14px",
                fontFamily: "Dm Sans, sans-serif",
                textAlign: "center",
                marginLeft: "16px",
                justifyContent: "center",
                alignItems: "center",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 bg-slate-800"
            >
              Console Firebase
            </motion.a>
          </div>
          <div className="flex h-8 w-full border-t-2 border-white mt-4">
            <p
              className="container mx-auto text-white mt-4"
              style={{
                fontSize: "14px",
                textAlign: "center",
                fontFamily: "Dm Sans, sans-serif",
              }}
            >
              &copy; {new Date().getFullYear()} Bright Bee School. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
