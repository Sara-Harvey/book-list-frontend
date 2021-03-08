import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    //start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{fontSize: '40px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
      <p>{isRunning ? 'Running' : 'Not running'}</p>

        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 2 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 120);
          restart(time)
        }}>Restart</button>

    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}