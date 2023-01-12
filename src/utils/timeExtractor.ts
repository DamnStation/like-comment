export const getCurrentDay = (): Date => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
};

export const getDateFromSec = (unixSecs: number): Date => {
  return new Date(unixSecs * 1000);
};

export const getTimeComponent = (unixSecs: number): string => {
  return getDateFromSec(unixSecs).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
