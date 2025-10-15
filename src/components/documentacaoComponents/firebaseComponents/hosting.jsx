import { FaRegCopy } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

export default function Hosting() {
  const notify = () => toast("Copiado para a área de transferência!");
  const copyContent = (content) => {
    navigator.clipboard.writeText(content);
    notify();
  };
  const textClipboard = `name: Deploy to Firebase Hosting on merge
on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install and Build
        run: npm ci && npm run build
        env:
          REACT_APP_FIREBASE_API_KEY: ${" secrets.REACT_APP_FIREBASE_API_KEY "}
          REACT_APP_FIREBASE_AUTH_DOMAIN: ${" secrets.REACT_APP_FIREBASE_AUTH_DOMAIN "}
          REACT_APP_FIREBASE_PROJECT_ID: ${" secrets.REACT_APP_FIREBASE_PROJECT_ID "}
          REACT_APP_FIREBASE_STORAGE_BUCKET: ${" secrets.REACT_APP_FIREBASE_STORAGE_BUCKET "}
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID: ${" secrets.REACT_APP_FIREBASE_MESSAGING_SENDER_ID "}
          REACT_APP_FIREBASE_APP_ID: ${" secrets.REACT_APP_FIREBASE_APP_ID "}
          REACT_APP_MEASUREMENT_ID: ${" secrets.REACT_APP_MEASUREMENT_ID "}

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${" secrets.GITHUB_TOKEN "}
          firebaseServiceAccount: ${" secrets.FIREBASE_SERVICE_ACCOUNT_BOT_SUPORTE_SISTEMAS "}
          channelId: live
          projectId: bot-suporte-sistemas
`;
  return (
    <div className="mt-8">
      <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Deploy & CI/CD
      </p>
      <span>
        &gt; Para deploy da aplicação React, utilize o Firebase Hosting com
        GitHub Actions.
      </span>
      <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl mt-4">
        <div>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            &gt; Passo a Passo:
          </p>
          <ol className="list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
            <li>Inicializar Hosting localmente</li>
            <ol className="list-decimal list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300">
              <li>Instalar Firebase CLI</li>
              <pre className="bg-gray-800 text-gray-300 rounded-[20px] border solid p-2 overflow-x-auto my-4">
                <button
                  className="absolute right-20 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    copyContent("npm install -g firebase-tools");
                  }}
                >
                  <FaRegCopy />
                </button>{" "}
                npm install -g firebase-tools
                <ToastContainer />
              </pre>
            </ol>
            <li>Faça login no Firebase Console.</li>
            <li>Selecione seu projeto.</li>
            <li>Vá para a seção "Hosting".</li>
            <li>Siga as instruções para configurar o Firebase Hosting.</li>
            <li>
              Crie um diretório{" "}
              <code className="bg-gray-100 rounded-md font-mono text-gray-800">
                .github/workflows
              </code>{" "}
              e um arquivo
              <code className="bg-gray-100 rounded-md font-mono text-gray-800">
                firebase-hosting-merge.yml
              </code>{" "}
              dentro desse diretório.
            </li>
            <li>
              Adicione o seguinte conteúdo ao arquivo
              <code className="bg-gray-100 rounded-[2px] font-mono text-gray-800">
                firebase-hosting-merge.yml
              </code>
              :
            </li>
            <span className="block my-4">
              <pre className="bg-gray-800 text-gray-300 rounded-[20px] border solid p-2 overflow-x-auto my-4">
                <button
                  className="absolute right-20 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    copyContent(textClipboard);
                  }}
                >
                  <FaRegCopy />
                </button>{" "}
                <ToastContainer />
                <code>{textClipboard}</code>
              </pre>
            </span>
            <li>
              Substitua `your-project-id` pelo ID do seu projeto Firebase.
            </li>
            <li>
              Adicione o segredo `FIREBASE_SERVICE_ACCOUNT` no seu repositório
              GitHub.
            </li>
            <li>
              Faça um push para a branch `main` e verifique se o deploy foi
              bem-sucedido.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
