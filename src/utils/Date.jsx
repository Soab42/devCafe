export const FullDate = (date) => {
  const dateTime = new Date(date);
  const day = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

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
