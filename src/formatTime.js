export const formatTime = (time) => {
  console.log(time);
  const getSeconds = `0${time?time%60:`0`}`.slice(-2);
  const minutes = time?(Math.floor(time/60)):0;
  const getMinutes = `0${minutes?minutes%60:`0`}`.slice(-2);
  const getHours = `0${time?Math.floor(time / 3600):`0`}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
