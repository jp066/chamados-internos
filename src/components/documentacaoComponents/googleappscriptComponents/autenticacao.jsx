export default function Autenticacao() {
  const informations = {
    title: "JWT (JSON Web Token)",
    linkImg: "https://i.ibb.co/ynnS2s75/image-removebg-preview.png",
    altText: "Imagem de exemplo do JWT",
    summary:
      "JWT é como um crachá de identificação digital para a internet. Depois de fazer login, o servidor cria e entrega a você um crachá (o token JWT).",
    description:
      "A autenticação no Google Apps Script (acesso ao firebase) é feita via JWT (JSON Web Token), garantindo segurança e integridade na comunicação com a API do Google.",
  };
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 hover:underline transition-all duration-200 ease-in-out underline-offset-4 decoration-brightbee-400 dark:decoration-brightbeeDark-3">
        # Autenticação:
      </h2>
      <div className="p-2 rounded-lg bg-brightbee-50 dark:bg-brightbeeDark-8 border-l-4 border-r-4 border-brightbee-400 dark:border-brightbeeDark-3">
        <img
          src={informations.linkImg}
          alt={informations.altText}
          className="w-32 h-32 object-contain"
        />
        <p className="text-brightbee-400 dark:text-brightbee-400 font-semibold mb-2">
          O que é o JWT?
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          &gt; {informations.summary}
        </p>
        <p className="text-brightbee-400 dark:text-brightbee-400 font-semibold mt-4">
          Descrição da autenticação feita pelo Google:
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          &gt; {informations.description}
        </p>
      </div>
    </div>
  );
}
