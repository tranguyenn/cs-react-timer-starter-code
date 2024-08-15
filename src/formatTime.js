export const formatTime = (time) => {
  const getSeconds = time?(time%60<10?`0${time%60}`:`${time%60}`):`00`;
  const minutes = Math.floor(time/60);
  const getMinutes = minutes?(minutes%60<10?`0${minutes%60}`:`${minutes%60}`):`00`;
  const getHours = time?(Math.floor(time / 3600)<10?`0${Math.floor(time / 3600)}`:`${Math.floor(time / 3600)}`):`00`;

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
