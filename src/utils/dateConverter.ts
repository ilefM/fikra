export function ConvertDateToYYYYMMDDFormat(date: Date) {
  console.log(date);

  date.toLocaleDateString();

  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are 0-based in JavaScript
  const day = ("0" + date.getDate()).slice(-2);

  console.log(year);
  console.log(month);
  console.log(day);

  return `${year}-${month}-${day}`;
}
