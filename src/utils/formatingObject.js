export function formatingObject(data, key) {
  const formattedData = data.map((item, index) => ({
    id: index,
    value: index + 5 , // transformar o valor em um número, como um contador de ocorrências?
    label: item[key],
  }));
  return formattedData;
}
console.log(formatingObject([{ categoria: "Rede" }, { categoria: "Hardware" }, { categoria: "Software" }], "categoria"));