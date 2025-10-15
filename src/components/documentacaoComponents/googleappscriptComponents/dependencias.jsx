export default function Dependecias() {
  const dependenciesGoogle = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/512px-Google_Sheets_2020_Logo.svg.png",
      alt: "Google Sheets",
      name: "Google Sheets",
      desc: "Armazenar respostas do Forms",
      link: "https://www.google.com/sheets/about/",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Apps_Script.svg/1024px-Google_Apps_Script.svg.png",
      alt: "Google Apps Script",
      name: "Google Apps Script",
      desc: "Executar os scripts",
      link: "https://developers.google.com/apps-script",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png",
      alt: "GmailApp",
      name: "GmailApp",
      desc: "Envio de e-mails",
      link: "https://developers.google.com/apps-script/reference/gmail/gmail-app",
    },
    {
      image:
        "https://firebase.google.com/static/images/products/icons/build_firestore.svg",
      alt: "Firebase Firestore",
      name: "Firebase Firestore",
      desc: "Acesso a Firebase Firestore",
      link: "https://firebase.google.com/docs/firestore",
    },
    {
      image:
        "https://vectorseek.com/wp-content/uploads/2025/05/Firebase-icon-Logo-PNG-SVG-Vector.png",
      alt: "Firebase",
      name: "Firebase",
      desc: "Criação de projeto no Firebase",
      link: "https://firebase.google.com/docs/web/setup",
    },
    {
      image: "https://i.ibb.co/p6dDhLY4/firebase-removebg-preview.png",
      alt: "Chave de serviço",
      name: "Chave de serviço",
      desc: "firebase-adminsdk com permissões no Firestore",
      link: "https://firebase.google.com/docs/admin/setup",
    },
  ];
  const dependenciesTelegram = [
    {
      image: "https://telegram.org/img/t_logo.png",
      alt: "Telegram",
      name: "Telegram",
      desc: "Aplicativo de mensagens instantâneas",
      link: "https://telegram.org/",
    },
    {
      image:
        "https://i.ibb.co/ycGLSDdh/png-clipart-telegram-bot-api-security-token-internet-bot-chatbot-robot-electronics-fictional-charact.png",
      alt: "BotFather",
      name: "BotFather",
      desc: "Criação e gerenciamento de bots no Telegram",
      link: "https://core.telegram.org/bots#6-botfather",
    },
    {
      image: "https://i.ibb.co/xK7cNXpf/images-removebg-preview.png",
      alt: "Token e chat_id",
      name: "Token e chat_id",
      desc: "Configurados no script telegramBot.gs",
      link: "https://core.telegram.org/bots/api#authentication",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
          # Dependências:
        </h2>
        <h3 className="text-md font-medium mb-6 text-gray-700 dark:text-gray-300">
          Para o funcionamento do sistema de chamados internos, são necessárias
          as seguintes dependências:
        </h3>
        <h1 className="text-2xl mb-4 md:mb-3">
          <span className="text-lg font-semibold text-brightbee-400 dark:text-brightbeeDark-3 flex items-center">
            Conta Google Workspace com acesso a:
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {dependenciesGoogle.map((item, index) => (
            <div
              key={index}
              className={`mb-2 p-4 bg-brightbee-50 dark:bg-brightbeeDark-8 rounded-lg border-l-4 border-brightbee-400
                dark:border-brightbeeDark-3 hover:shadow-lg transition-all duration-200 hover:scale-105`}
            >
              <div className="flex items-center mb-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-10 h-10 mr-4`}
                />
              </div>
              <div className="max-w-xs">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {item.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
              <div className="mt-2">
                <button
                  className="text-brightbee-500 dark:text-brightbeeDark-400 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3"
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <span className="text-md">Mais informações</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-2xl mb-4 md:mb-3">
        <span className="text-lg font-semibold text-brightbee-400 dark:text-brightbeeDark-3 flex items-center">
          Dependências do Bot do Telegram:
        </span>
      </h1>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {dependenciesTelegram.map((item, index) => (
          <div
            key={index}
            className={`mb-2 p-4 bg-brightbee-50 dark:bg-brightbeeDark-8 rounded-lg border-l-4 border-brightbee-400
                dark:border-brightbeeDark-3 hover:shadow-lg transition-all duration-200 hover:scale-105`}
          >
            <div className="flex items-center mb-2">
              <img
                src={item.image}
                alt={item.name}
                className={
                  item.name === "Token e chat_id"
                    ? `w-14 h-14 mr-4`
                    : `w-10 h-10 mr-4`
                }
              />
            </div>
            <div className="max-w-xs">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                {item.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
            <div className="mt-2">
              <button
                className="text-brightbee-500 dark:text-brightbeeDark-400 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3"
                onClick={() =>
                  window.open(item.link, "_blank", "noopener,noreferrer")
                }
              >
                <span className="text-md">Mais informações</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
