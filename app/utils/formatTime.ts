const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hoursString = hours > 0 ? `${hours}:` : '';
  const minutesString =
    hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
  const secondsString = String(seconds).padStart(2, '0');

  return `${hoursString}${minutesString}:${secondsString}`;
};

export default formatTime;
