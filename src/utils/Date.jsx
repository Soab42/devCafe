export const formatDate = (timestamp) => {
  const dateTime = new Date(timestamp);
  const now = new Date();

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const year = dateTime.getFullYear();
  const month = addLeadingZero(dateTime.getMonth() + 1);
  const day = addLeadingZero(dateTime.getDate());
  // const hours = addLeadingZero(dateTime.getHours());
  // const minutes = addLeadingZero(dateTime.getMinutes());

  const formattedDate = `${day}-${month}-${year}`;

  // Calculate the difference in milliseconds
  const timeDifference = now - dateTime;

  // Convert the time difference to minutes
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  if (minutesAgo < 1) {
    return "Just now";
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  } else if (minutesAgo < 24 * 60) {
    const hoursAgo = Math.floor(minutesAgo / 60);
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else if (minutesAgo < 7 * 24 * 60) {
    const daysAgo = Math.floor(minutesAgo / (24 * 60));
    return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  } else {
    return formattedDate;
  }
};
