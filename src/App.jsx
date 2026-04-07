import { useState, useRef } from "react";
import { Outlet } from "react-router";
import Footer from "./pages/footer/footer";
import styles from "./App.module.css";

function App() {
  const originalImageSize = { x: 2000, y: 3556 };
  const [userAnswer, setUserAnswer] = useState({
    black: null,
    white: null,
    dead: null,
  });

  function handleAnswer(target, answer) {
    setUserAnswer((prev) => {
      const newState = { ...prev, [target]: answer };
      return newState;
    });
  }

  const contextOutlet = {
    userAnswer,
    handleAnswer,
    originalImageSize,
  };
  return (
    <>
      <div className={styles.body}>
        <Outlet context={contextOutlet} />

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

// <div>
//   <div>{userAnswer.black && JSON.stringify(userAnswer.black)}</div>
//   <div>{userAnswer.white && JSON.stringify(userAnswer.white)}</div>
//   <div>{userAnswer.dead && JSON.stringify(userAnswer.dead)}</div>
// </div>
