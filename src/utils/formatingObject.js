export function formatingObject(data, key) {
  const formattedData = data.map((item, index) => ({
    id: index,
    value: item[key],
    label: item[key],
  }));
  return formattedData;
}