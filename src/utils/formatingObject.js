export function formatingObject(data, key) {
  const formattedData = data.map((item, index) => ({
    id: index,
    value: item[key] , // transformar o valor em um número, como um contador de ocorrências?
    label: item[key],
  }));
  return formattedData;
}