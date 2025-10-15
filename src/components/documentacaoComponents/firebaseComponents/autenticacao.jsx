export default function AutenticacaoFirebase() {
  return (
    <div className="mt-8">
      <p className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Autenticação Firebase
      </p>
      <div className="bg-gradient-to-r from-brightbee-50 to-brightbee-25 dark:from-brightbeeDark-8 dark:to-brightbeeDark-7 p-6 rounded-xl">
        <div>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            &gt; Metodo de Login usado:
          </p>
          <ul className="list-disc list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300">
            <li>Login com Google</li>
          </ul>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            &gt; Passo a Passo:
          </p>
          <ul className="list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
            <li className="font-bold">
              Ativar provedores no Console do Firebase
            </li>
            <ul className="list-decimal list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300">
              <li>
                Abra o Firebase Console → seu projeto → Authentication → aba
                Método de login.
              </li>
              <li>Habilite os provedores que precisa (Google).</li>
              <li>
                Em Domínios autorizados, adicione o domínio do seu front (ex.:
                seu-app.web.app) se for necessário.
              </li>
            </ul>
            <li className="font-bold">
              Criar Service Account para o GAS (para usar REST do Firestore)
            </li>
            <ul className="list-decimal list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300">
              <li>
                Acesse Google Cloud Console → IAM & Admin → Service Accounts →
                Create Service Account..
              </li>
              <li>Dê um nome (ex.: bot-suporte-svc).</li>
              <li>
                Conceda papel: Cloud Firestore Owner ou Cloud Datastore Owner
                (ou permissões mínimas necessárias, ex.: Datastore User +
                Firestore Admin).
              </li>
              <li>
                Crie JSON key e baixe o arquivo service-account.json. NÃO commit
                esse arquivo.
              </li>
            </ul>
          </ul>
          <p className="mb-2 text-gray-700 dark:text-gray-300">
            &gt; Fluxo de Login no Frontend:
          </p>
          <ul className="list-inside ml-6 mb-2 text-gray-700 dark:text-gray-300 list-decimal">
            <li>O usuário clica em "Login com Google" no frontend.</li>
            <li>O Firebase Auth abre a janela de login do Google (OAuth2).</li>
            <li>
              Após o login, o Firebase Auth retorna um ID token JWT (curta
              duração, 1 hora).
            </li>
            <li>
              O frontend envia esse ID token junto com as requisições ao GAS.
            </li>
            <li>
              O GAS valida o ID token com Firebase Admin SDK para garantir que é
              válido e não expirou.
            </li>
            <li>
              Se válido, o GAS pode usar a REST API do Firestore para
              ler/escrever dados em nome do usuário autenticado.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}