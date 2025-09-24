export function Hero({dark, setDark, darkModeHandler}) {
    return (
        <div className="font-sans text-gray-800 p-8 bg-gradient-to-r from-brightbee-50 via-brightbee-50 to-yellow-50 shadow-inner w-full dark:bg-gradient-to-r dark:from-brightbeeDark-1.2 dark:via-brightbeeDark-1.2 dark:to-brightbeeDark-1.2 dark:border-b-2 border-brightbeeDark-1 pb-6 transition-colors duration-700">
            <div className="'max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'">
                <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-center sm:text-left flex-1 text-gray-900 tracking-wide drop-shadow-sm dark:text-white">
                    Dashboard de Chamados
                </h2>
                <p className="text-md sm:text-lg text-center sm:text-right text-gray-600 font-sans flex items-center gap-2 dark:text-white">
                    Gerencie e acompanhe os chamados de sistemas aqui.
                </p>
            </div>
        </div>
    );
}