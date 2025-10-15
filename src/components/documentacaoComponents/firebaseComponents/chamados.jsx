export default function Chamados() {
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
            Carimbo de data/hora
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            timestamp
          </td>
          <td className="ml-[40px]">Data de abertura do chamado.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            Endereço de e-mail
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">E-mail do solicitante.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            Categoria
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">Categoria selecionada no formulário.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            status
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">“em aberto” / “concluído”.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            notificado
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            boolean
          </td>
          <td className="ml-[40px]">Controle de envio de e-mails.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            descricao
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">Descrição do problema.</td>
        </tr>
        <tr className="mt-[16px] grid grid-cols-3 w-full border rounded-full border-gray-300 dark:border-gray-700 py-2 smooth">
          <td className="ml-[40px] border-r-4 border-gray-300 dark:border-gray-700">
            modulo
          </td>
          <td className="ml-[80px] border-r-4 border-gray-300 dark:border-gray-700">
            string
          </td>
          <td className="ml-[40px]">Módulo relacionado.</td>
        </tr>
      </table>
    </>
  );
}
