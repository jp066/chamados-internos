export default function Configuracao() {
  return (
    <div className="mt-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
          # Deploy e Configuração:
        </h2>
        <div className="p-2 rounded-lg bg-brightbee-50 dark:bg-brightbeeDark-8 border-l-4 border-r-4 border-brightbee-400 dark:border-brightbeeDark-3">
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            &gt; Após desenvolver o script no Google Apps Script, foi necessário
            fazer o deploy para que ele possa ser utilizado. Isso envolve:
          </p>
          <ol className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1 list-decimal">
            <li>No Apps Script, adicione todos os .gs do projeto.</li>
            <li>Configure os gatilhos (Triggers):</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                <code className="bg-brightbee-50 rounded-[4px] mr-2 text-brightbee-30 dark:text-brightbee-30">
                  {" "}
                  ao enviar formulário{" "}
                </code>
                &gt;
                <code className="bg-brightbee-50 rounded-[4px] ml-2 mr-[1px] text-brightbee-30 dark:text-brightbee-30">
                  {" "}
                  enviarFirestore{" "}
                </code>
                .
              </li>
              <li>
                <code className="bg-brightbee-50 rounded-[4px] mr-2 text-brightbee-30 dark:text-brightbee-30">
                  {" "}
                  a cada X minutos{" "}
                </code>
                &gt;{" "}
                {[
                  { id: 1, name: "getStatus" },
                  { id: 2, name: "getDocs" },
                  { id: 3, name: "getResponse" },
                ].map((func) => (
                  <div key={func.id} className="inline-flex items-center">
                    <code className="bg-brightbee-50 rounded-[4px] mr-[6px] ml-[6px] text-brightbee-30 dark:text-brightbee-30">
                      {func.name}
                    </code>
                    <p> {func.id < 3 ? "," : ""}</p>
                  </div>
                ))}
                .
              </li>
            </ul>
            <li>
              Autorize o uso de:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Google Sheets API</li>
                <li>Gmail API</li>
                <li>UrlFetchApp</li>
              </ul>
            </li>
            <li>Teste com um formulario real.</li>
          </ol>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3"># Manutenção e Logs</h2>
        <div className="p-2 rounded-lg bg-brightbee-50 dark:bg-brightbeeDark-8 border-l-4 border-r-4 border-brightbee-400 dark:border-brightbeeDark-3">
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            &gt; Após a implementação e testes, é importante manter, por isso:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Utilize o Executions Panel no Apps Script para monitorar erros.</li>
            <li>Logs em cada função com <code className="bg-brightbee-50 rounded-[4px] ml-[6px] text-brightbee-30 dark:text-brightbee-30">Logger.log()</code>.</li>
            <li>Mantenha a chave privada segura e fora do repositório público.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}