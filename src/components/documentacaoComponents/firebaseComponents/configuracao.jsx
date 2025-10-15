import Chamados from "./chamados";
import Respostas from "./respostas";
import AutenticacaoFirebase from "./autenticacao";
import Hosting from "./hosting";

export default function Configuracao() {
  const listInformations = [
    {
      step: 1,
      field: "Authentication (Autenticação)",
      link: "https://firebase.google.com/docs/auth",
    },
    {
      step: 2,
      field: "Firestore Database (Banco de Dados)",
      link: "https://firebase.google.com/docs/firestore",
    },
    {
      step: 3,
      field: "Storage (Armazenamento de Arquivos)",
      link: "https://firebase.google.com/docs/storage",
    },
  ];
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6 text-brightbee-400 dark:text-brightbeeDark-3">
        Firebase
      </h1>
      <div className="mb-8 ">
        <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
          # Configuração do Projeto
        </p>
        <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
          <p>&gt; Exemplo:</p>
          <img
            src="https://i.ibb.co/DJwnHfJ/image.png"
            alt="Tela do firebase"
            className="w-full rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3 mt-4"
          />
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            &gt; Para configurar o Firebase no projeto, foram implementados os
            seguintes passos:
          </p>
          <ol className="list-decimal list-inside mt-2 text-gray-700 dark:text-gray-300">
            <li>Crie um projeto no Firebase Console.</li>
            <li>
              Adicione um aplicativo web ao projeto. (serve para a autenticação
              no seu Aplicativo)
            </li>
            <li>Habilite os serviços:</li>
            <p className="text-gray-700 dark:text-gray-300 text-sm opacity-70">
              {" "}
              * Para mais informações, consulte a documentação oficial do
              Firebase.
            </p>
            <ul className="list-disc list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300">
              {listInformations.map((item) => (
                <li key={item.step}>
                  <a
                    href={item.link}
                    className="text-brightbee-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.field}
                  </a>
                </li>
              ))}
            </ul>
            <li>Integração: Google Apps Script + Firebase REST API</li>
          </ol>
        </div>
      </div>
      <div className="mb-8 ">
        <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
          # Estrutura do Firestore
        </p>
        <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
          <p>&gt; Coleções:</p>
          <img
            src="https://i.ibb.co/rBwRW7n/Design-sem-nome.png"
            alt="Tela do firestore"
            className="w-full rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3 mt-4"
          />
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            &gt; Campos comuns na coleção "chamados":
          </p>
          <Chamados />
        </div>

        <div className="mt-[50px] bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
          <p>&gt; Respostas:</p>
          <img
            src="https://i.ibb.co/xKgccCm3/Design-sem-nome-2-1.png"
            alt="Tela do firestore"
            className="w-full rounded-lg border-l-4 border-brightbee-400 dark:border-brightbeeDark-3 mt-4"
          />
          <p className="mt-[25px] text-gray-700 dark:text-gray-300">
            &gt; Campos comuns na coleção "respostas":
          </p>
          <Respostas />
        </div>
        <AutenticacaoFirebase />
        <Hosting />
      </div>
    </div>
  );
}
