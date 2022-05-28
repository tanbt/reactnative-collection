export function getFormattedDate(date) {
  let month = date.getMonth() + 1 < 10 ? "0" : "";
  month = month.concat(date.getMonth() + 1);
  const day = date.getDate() < 10 ? "0" : "" + date.getDate();

  return `${date.getFullYear()}-${month}-${day}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
