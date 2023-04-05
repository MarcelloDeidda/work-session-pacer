import { React, useState } from "react";
import Info from "./components/Info";
import Options from "./components/Options";
import StudySection from "./components/StudySection";

const root = document.getElementById("root");

function App() {
  const [sessionHasStarted, setSessionHasStarted] = useState(false);
  const [timers, setTimers] = useState({ focusTimer: 60 * 25, breakTimer: 60 * 5 });

  const sessionSwitchHandler = e => {
    e.preventDefault();
    root.style.opacity = "0";
    setTimeout(() => {
      setSessionHasStarted(prevState => !prevState);
      root.style.opacity = "1";
    }, 1000);
  }

  const timerChangeHandler = newLength => {
    setTimers(newLength);
  }

  if (sessionHasStarted) {
    return <StudySection
      onSwitchSession={sessionSwitchHandler}
      timers={timers}
    />
  } else {
    return <Options
      onSwitchSession={sessionSwitchHandler}
      onTimerChange={timerChangeHandler}
      timers={timers}
    >
      <Info />
    </Options>
  }
}

export default App;
