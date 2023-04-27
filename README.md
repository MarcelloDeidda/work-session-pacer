# === Work Session Pacer ===

[Give it a try!](https://marcellodeidda-worksessionpacer.netlify.app/ "Work Session Pacer")

## 1.The project

Work Session Pacer is a productivity webapp designed to help individuals manage their time more efficiently. The Pomodoro method involves breaking work sessions into short, focused intervals of 25 minutes (called "pomodoros"), followed by a short break of 5 minutes. These lengths can be changed in the starting page of the app.

The webapp displays a timer that automatically starts and stops the pomodoros, alerting the user when each pomodoro is complete and when it's time for a break. The user can also manually start and stop the timer as needed.

## 2.Development

The app is developed with React.js and styled with a mix of Bootstrap and plain CSS. The initial setup was managed with the "create-react-app" package in NPM, and the final build obtained with "npm run build" command.

All react components used are Functional Components, managed with react hooks such as useState() and useEffect().

Work Session Pacer is fully responsive, so it can be used from any type of screen. Sounds are not available on Safari browser.

## 3.Usage

### 3.1 Setup Page

The webapp start page displays info about the app, its purpose and credits. A small form lets the user adjust the length of the Focus and Break timers, as well as switch on sounds and start the work session.

When the "START SESSION" button is clicked, the work session starts with a Focus timer.

### 3.2 Session Page

The Session Page alternates Focus and Break timers. The beginning of each timer is announced by a bell sound, which can be disabled from the screen.

The page displays the timer, which can be paused with the "PAUSE" button. The session can be interrupted with the "STOP SESSION" button, which will take the user back to the Setup Page.

## 4.Previews

### 4.1 Setup Page

![setup-page](https://user-images.githubusercontent.com/76016486/234838551-0fc2248c-3821-4dfb-89ba-0c797acf1ccd.png)

### 4.1 Session Page

![session-page](https://user-images.githubusercontent.com/76016486/234838649-1641136d-a242-41fb-a831-1319d7bf0564.png)


