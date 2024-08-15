import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState();

  const isStart = useRef(false);
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current=true;
    refInterval.current=setInterval(
      ()=>{
        if(isStart){
        setTime((time)=>time+1);
      }},1000);
    
  };
  const stopTimer = () => {
    isStart.current=false;
    active.current.disabled=false;
    clearInterval(refInterval.current);

  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
    isStart.current=false;
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
