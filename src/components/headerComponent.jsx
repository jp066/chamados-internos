export function Header() {
  return (
    <header className="text-gray-800 p-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 shadow-md w-full">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <a
          href="/"
          className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-yellow-700 rounded-lg transition-shadow"
        >
          <img
            src={require("../imgs/fav-icon-brightbee.png")}
            alt="Logo"
            className="h-12 w-12 mr-3 drop-shadow-md"
          />
        </a>
        <span className="text-xl font-bold whitespace-nowrap tracking-tight text-gray-900">
          Chamados de Sistemas
        </span>
        <h1 className="text-lg sm:text-2xl font-extrabold text-center sm:text-left flex-1 text-gray-900 tracking-wide drop-shadow-sm">
          Bright Bee School
        </h1>
        <nav className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
          {[
            ["Todos", "/dashboard"],
            ["Abertos", "/abertos"],
            ["Concluidos", "/concluidos"],
          ].map(([title, url]) => (
            <a
              key={url}
              href={url}
              className="rounded-lg px-4 py-2 text-gray-800 font-semibold bg-white/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-700 shadow-sm transition-all duration-200"
              tabIndex={0}
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
