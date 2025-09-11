
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

export function LoginComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 p-4">
      <div className="w-full max-w-md bg-white/90 p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-8">
        <img src={require("../imgs/LOGOS.png")} alt="Logo" className="w-24 h-24 rounded-lg shadow-md mb-2 border-1 border-yellow-300 bg-white" />
        <p className="text-center text-gray-500 mb-4">Suporte de Sistemas</p>
        <form className="w-full space-y-6">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-400">
                <FaEnvelope />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                className="pl-10 pr-4 py-3 rounded-full w-full border border-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200"
              />
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-yellow-400">
                <FaLock />
              </span>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Senha"
                className="pl-10 pr-4 py-3 rounded-full w-full border border-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900 placeholder-gray-400 shadow-sm transition-all duration-200"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 mt-2"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}