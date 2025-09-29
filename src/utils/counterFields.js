import { formatingObject } from "./formatingObject.js";

export const counterFields = (data, key) => {
  const formattedData = formatingObject(data, key);
  const counter = formattedData.reduce((acumulador, item) => {
    acumulador[item.label] = (acumulador[item.label] || 0) + 1;
    return acumulador;
  }, {});
  const result = Object.keys(counter).map((key, index) => ({
    id: index,
    label: key,
    value: counter[key],
  }));
  return result;
};

