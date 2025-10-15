export default function FluxoIntegracoes() {
  const flowIntegrations = [
    {
      step: "1",
      title: "Google Formulário",
      desc: "É disponibilizado para toda a empresa um formulário para abertura dos chamados.",
      desc2: [],
    },
    {
      step: "2",
      title: "Google Planilhas",
      desc: "Automaticamente, toda resposta coletada do formulário é armazenada em uma planilha de regimento interno.",
      desc2: [],
    },
    {
      step: "3",
      title: "Apps Script",
      desc: "O apps script, é um ambiente de desenvolvimento baseado em JavaScript que permite a criação de scripts para automatizar tarefas e integrar serviços do Google. Na aplicação, o Apps Script é utilizado para:",
      desc2: [
        "Processar os dados recebidos do formulário.",
        "Enviar notificações via TelegramBot.",
        "Sincronizar dados com o Firebase.",
        "Enviar confirmações por e-mail.",
      ],
    },
    {
      step: "4",
      title: "Firebase",
      desc: "Sincronização de dados",
      desc2: [],
    },
    {
      step: "5",
      title: "Dashboard",
      desc: "Visualização de dados",
      desc2: [],
    },
  ];
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
       # Fluxo das integrações com os serviços Google:
      </h2>
      <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {flowIntegrations.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 bg-brightbee-400 dark:bg-brightbeeDark-3 text-white rounded-full flex items-center justify-center font-bold mb-2 shadow-md">
                {item.step}
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 max-w-xs min-w-[150px]">
                {item.desc}
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 list-inside mt-2">
                {item.desc2.map((descItem, descIndex) => (
                  <li
                    className="ml-4 hover:text-brightbee-400 dark:hover:text-brightbeeDark-3 bg-brightbee-125 dark:bg-brightbeeDark-13 p-2 rounded-full mb-2 hover:scale-110 transition-all delay-150 duration-300 ease-in-out"
                    key={descIndex}
                  >
                    {descItem}
                  </li>
                ))}
              </ul>
              {index < 4 && (
                <div className="hidden md:block text-brightbee-400 dark:text-brightbeeDark-3 text-2xl mt-2">
                  →
                </div>
              )}
              {index === 4 && (
                <div className="hidden md:block text-brightbee-400 dark:text-brightbeeDark-3 text-2xl mt-2">
                  *
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
