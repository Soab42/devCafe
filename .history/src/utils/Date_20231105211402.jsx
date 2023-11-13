export const FullDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const loadingZero = (number) => {
    let loadedZero;
    if (number > 9) {
      loadedZero = number;
    } else {
      loadedZero = "0" + number;
    }

    return loadedZero;
  };
  const fullDate = loadingZero(day) + "-" + loadingZero(month) + "-" + year;
  return fullDate;
};
