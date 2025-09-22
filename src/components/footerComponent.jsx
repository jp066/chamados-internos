import {motion} from "motion/react";

export function Footer() {
  return (
    <>
      <div className="flex h-2 w-full">
        <motion.div className="flex-1 bg-yellow-400"  style={{ originX: 0, originY: -1 }} whileHover={{ scaleY: 1.5 }}></motion.div>
        <motion.div className="flex-1 bg-orange-400" style={{ originX: 0, originY: -1 }} whileHover={{ scaleY: 1.5 }}></motion.div>
        <motion.div className="flex-1 bg-cyan-500" style={{ originX: 0, originY: -1 }} whileHover={{ scaleY: 1.5 }}></motion.div>
        <motion.div className="flex-1 bg-purple-800" style={{ originX: 0, originY: -1 }} whileHover={{ scaleY: 1.5 }}></motion.div>
        <motion.div className="flex-1 bg-green-400" style={{ originX: 0, originY: -1 }} whileHover={{ scaleY: 1.5 }}></motion.div>
      </div>
      <div className="text-center p-4 bg-brightbee-1">
        <img
          src={require("../imgs/logo-bright-bee.png")}
          alt="Descrição da imagem"
          style={{
            height: "auto",
            marginLeft: "200px",
            marginRight: "auto",
            marginTop: "-16px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginLeft: "140px",
            marginTop: "-10px",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "14px",
              height: "auto",
              lineHeight: "30px",
              textAlign: "justify",
              fontFamily: "Dm Sans, sans-serif",
              marginTop: "16px",
              marginRight: "auto",
            }}
          >
            Sistema de chamados internos, facilitando
            <br />
            o monitoramento e a gestão de indicadores
            <br />
            chave de desempenho KPIs.
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/1GTwuIG3Y7cQ_laHtxFGo8k35Kv0znKoVehro18YHZZs/edit"
            style={{
              color: "#fff",
              fontSize: "14px",
              fontFamily: "Dm Sans, sans-serif",
              textAlign: "center",
              margin: "auto",
              padding: "4px 12px",
              background: "#3B82F6",
              fontWeight: "bold",
            }}
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.9}}
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 rounded-full"
          >
            Alterar formulário
          </motion.a>
          <motion.a
            href="https://docs.google.com/spreadsheets/d/1pCrag3SUFuxHGONKa1F4ct5BPds4SWYKnLjJRI1xi24/edit?gid=980151376#gid=980151376"
            style={{
              color: "#fff",
              fontSize: "14px",
              fontFamily: "Dm Sans, sans-serif",
              textAlign: "center",
              margin: "auto",
              padding: "4px 12px",
              background: "#22C55E",
              fontWeight: "bold",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9}}
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-300 rounded-full"
          >
            Consultar Planilha
          </motion.a>
          <motion.a
            href="https://console.firebase.google.com/u/0/project/bot-suporte-sistemas/overview?hl=pt-br"
            style={{
              color: "#fff",
              fontSize: "14px",
              fontFamily: "Dm Sans, sans-serif",
              textAlign: "center",
              margin: "auto",
              padding: "4px 12px",
              background: "#2C2C2C",
              fontWeight: "bold",
              "&:hover": {
                background: "#ff0000ff",
              },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9}}
            target="_blank"
            rel="noreferrer"
            className="rounded-full"
          >
            Console Firebase
          </motion.a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex h-0 w-full border-t-2 border-white"></div>
        <br />
        <p
          className="container mx-auto text-white"
          style={{
            fontSize: "14px",
            textAlign: "center",
            fontFamily: "Dm Sans, sans-serif",
          }}
        >
          &copy; {new Date().getFullYear()} Bright Bee School. Todos os direitos
          reservados.
        </p>
      </div>
    </>
  );
}
