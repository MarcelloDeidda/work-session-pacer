import { React, useState, useEffect } from "react";
import Info from "./components/Info";
import InfoModal from "./components/InfoModal";
import Options from "./components/Options";
import StudySection from "./components/StudySection";

const root = document.getElementById("root");

function App() {
  const [sessionHasStarted, setSessionHasStarted] = useState(false);
  const [timers, setTimers] = useState({ focusTimer: 60 * 25, breakTimer: 60 * 5 });
  const [audioOn, setAudioOn] = useState(true);

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

  const audioToggleHandler = e => {
    e.preventDefault();
    setAudioOn(prevState => !prevState);
  }

  useEffect(() => {
    root.classList.remove("options-background");
    root.classList.remove("focus-background");
    root.classList.remove("break-background");
    root.classList.add(sessionHasStarted ? "focus-background" : "options-background");
  }, [sessionHasStarted]);

  if (sessionHasStarted) {
    return <StudySection
      onSessionSwitch={sessionSwitchHandler}
      timers={timers}
      audioOn={audioOn}
      onAudioToggle={audioToggleHandler}
    />
  } else {
    return <>
      <Info>
        <InfoModal />
      </Info >
      <Options
        onSessionSwitch={sessionSwitchHandler}
        onTimerChange={timerChangeHandler}
        timers={timers}
        audioOn={audioOn}
        onAudioToggle={audioToggleHandler}
      >
      </Options>
    </>
  }
}

export default App;
