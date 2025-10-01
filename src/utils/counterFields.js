import { formatingObject } from "./formatingObject.js";

export const counterFields = (data, key) => {
  if (!Array.isArray(data)) {
    console.error("Os dados fornecidos não são um array.", data);
    return [];
  }
  const formattedData = formatingObject(data, key);
  if (!Array.isArray(formattedData)) {
    console.error(
      `O retorno de 'formatingObject' não é um array. Valor recebido:`,
      formattedData
    );
    return [];
  }
  const counter = formattedData.reduce((acumulador, item) => {
    acumulador[item.label] = (acumulador[item.label] || 0) + 1;
    return acumulador;
  }, {});
  const result = Object.keys(counter).map((key, index) => ({
    id: index,
    label: key,
    value: counter[key],
  }));
  console.log(`os valores de ${key} são:`, result);
  return result;
};
