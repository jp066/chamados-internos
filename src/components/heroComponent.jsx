export function Hero() {
    return (
        <div className="text-gray-800 p-8 bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 shadow-inner w-full">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-center sm:text-left flex-1 text-gray-900 tracking-wide drop-shadow-sm">
                    Dashboard de Chamados
                </h2>
                <p className="text-md sm:text-lg text-center sm:text-right text-gray-700">
                    Gerencie e acompanhe os chamados de sistemas aqui.
                </p>
            </div>
        </div>
    );
}