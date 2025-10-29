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

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          REACT_APP_FIREBASE_API_KEY: \${{ secrets.REACT_APP_FIREBASE_API_KEY }}
          REACT_APP_FIREBASE_AUTH_DOMAIN: \${{ secrets.REACT_APP_FIREBASE_AUTH_DOMAIN }}
          REACT_APP_FIREBASE_PROJECT_ID: \${{ secrets.REACT_APP_FIREBASE_PROJECT_ID }}
          REACT_APP_FIREBASE_STORAGE_BUCKET: \${{ secrets.REACT_APP_FIREBASE_STORAGE_BUCKET }}
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID: \${{ secrets.REACT_APP_FIREBASE_MESSAGING_SENDER_ID }}
          REACT_APP_FIREBASE_APP_ID: \${{ secrets.REACT_APP_FIREBASE_APP_ID }}
          REACT_APP_MEASUREMENT_ID: \${{ secrets.REACT_APP_MEASUREMENT_ID }}

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: \${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: \${{ secrets.FIREBASE_SERVICE_ACCOUNT_BOT_SUPORTE_SISTEMAS }}
          projectId: bot-suporte-sistemas
          channelId: live
`;

  return (
    <div className="mt-8">
      <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Deploy & CI/CD
      </p>
      <span>
        &gt; Para deploy da aplicação React, utilize o Firebase Hosting com GitHub Actions.
      </span>

      <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl mt-4">
        <div>
          <p className="mb-2 text-gray-700 dark:text-gray-300">&gt; Passo a Passo:</p>

          <ol className="list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
            <li>Instalar Firebase CLI</li>
            <pre className="bg-gray-800 text-red-500 rounded-[20px] border solid p-2 overflow-x-auto my-4 relative">
              <button
                className="absolute right-2 top-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => copyContent("npm install -g firebase-tools")}
              >
                <FaRegCopy className="text-gray-300" />
              </button>
              npm install -g firebase-tools
            </pre>

            <li>Fazer login no Firebase</li>
            <pre className="bg-gray-800 text-red-500 rounded-[20px] border solid p-2 overflow-x-auto my-4 relative">
              <button
                className="absolute right-2 top-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => copyContent("firebase login")}
              >
                <FaRegCopy className="text-gray-300" />
              </button>
              firebase login
            </pre>

            <li>Inicializar Hosting no repositório</li>
            <pre className="bg-gray-800 text-red-500 rounded-[20px] border solid p-2 overflow-x-auto my-4 relative">
              <button
                className="absolute right-2 top-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                onClick={() => copyContent("firebase init hosting")}
              >
                <FaRegCopy className="text-gray-300" />
              </button>
              firebase init hosting
            </pre>

            <li>
              Selecione o projeto <code className="text-red-500">bot-suporte-sistemas</code>, defina a pasta pública como{" "}
              <code className="text-red-500">build</code>, habilite SPA (rewrite para <code className="text-red-500">/index.html</code>) e confirme.
            </li>

            <li>
              Crie o diretório <code className="text-red-500">.github/workflows</code> e o arquivo{" "}
              <code className="text-red-500">firebase-hosting-merge.yml</code>.
            </li>

            <li>Cole o conteúdo abaixo no arquivo do workflow:</li>
            <span className="block my-4">
              <pre className="bg-gray-800 text-red-500 rounded-[20px] border solid p-2 overflow-x-auto my-4 relative">
                <button
                  className="absolute right-2 top-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
                  onClick={() => copyContent(textClipboard)}
                >
                  <FaRegCopy className="text-gray-300 " />
                </button>
                <code>{textClipboard}</code>
              </pre>
            </span>

            <li>
              No GitHub, adicione os segredos em
              <code className="text-red-500"> Settings &gt; Secrets and variables </code>:
              <ul className="list-disc list-inside ml-6 mb-2">
                <li><code className="text-red-500">FIREBASE_SERVICE_ACCOUNT_BOT_SUPORTE_SISTEMAS</code> (JSON do service account)</li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_API_KEY</code></li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_AUTH_DOMAIN</code></li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_PROJECT_ID</code></li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_STORAGE_BUCKET</code></li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_MESSAGING_SENDER_ID</code></li>
                <li><code className="text-red-500">REACT_APP_FIREBASE_APP_ID</code></li>
                <li><code className="text-red-500">REACT_APP_MEASUREMENT_ID</code></li>
              </ul>
            </li>

            <li>Faça push para a branch <code className="text-red-500">main</code> e acompanhe a execução do workflow.</li>
          </ol>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}