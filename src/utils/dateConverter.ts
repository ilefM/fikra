export function ConvertDateFormat(date: Date) {
  const newDate = new Date(date);

  newDate.toLocaleDateString();

  const year = newDate.getFullYear();
  const month = ("0" + (newDate.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
  const day = ("0" + newDate.getDate()).slice(-2);

  return `${year}-${month}-${day}`;
}
