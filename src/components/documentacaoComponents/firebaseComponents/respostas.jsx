export default function Respostas() {
  return (
    <>
      <table className="w-full mt-4">
        <tr className="grid grid-cols-3 w-full mt-4 border-b-4 border-gray-300 rounded-full dark:border-gray-700 py-2">
          <th className="ml-[80px] text-left pr-4 font-semibold text-gray-800 dark:text-gray-200">
            Campo
          </th>
          <th className="ml-[80px] text-left pr-4 font-semibold text-gray-800 dark:text-gray-200">
            Tipo
          </th>
          <th className="ml-[80px] text-left pr-4 font-semibold text-gray-800 dark:text-gray-200">
            Descrição
          </th>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            email
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">E-mail do usuário</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            problema
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">Título ou tipo de problema</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            resposta
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">Texto da resposta enviada</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            enviado
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            boolean
          </td>
          <td className="ml-[40px]">Se a resposta foi enviada por e-mail</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            dataHora
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            timestamp
          </td>
          <td className="ml-[40px]">Data e hora do envio da resposta</td>
        </tr>
      </table>
    </>
  );
}
