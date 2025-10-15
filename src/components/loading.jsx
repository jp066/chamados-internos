import { useNavigate } from "react-router-dom";

export function LoadingPage() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 dark:from-brightbeeDark-1
        dark:via-brightbeeDark-13 dark:to-brightbeeDark-1"
    >
      <div className="absolute top-10 left-10 flex items-center justify-center">
        <button
          className="px-4 py-2 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-white">Voltar</span>
        </button>
      </div>
      <div className="loader">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
          role="status"
        >
          <div className="bg-blue-600 border-solid rounded-full w-1 h-1"></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-brightbee-25 dark:text-white text-lg font-semibold ml-4">
          Carregando...
        </p>
      </div>
    </div>
  );
}