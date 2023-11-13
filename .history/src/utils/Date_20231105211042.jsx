export const FullDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const loadingZero = () => {};
  return (
    (day > 9 ? day : "0" + day) +
    "-" +
    (month > 9 ? month : "0" + month) +
    "-" +
    year
  );
};
