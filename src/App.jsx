import { useState, useRef } from "react";
import { Outlet } from "react-router";
import Footer from "./pages/footer/footer";
import styles from "./App.module.css";

function App() {
  const originalRef = { x: 2000, y: 3556 };
  const [userAnswer, setUserAnswer] = useState({
    black: null,
    white: null,
    dead: null,
  });

  function handleAnswer(target, answer) {
    if (target === "black") {
      setUserAnswer({ ...userAnswer, [target]: answer });
    }
  }

  const contextOutlet = {
    userAnswer,
    handleAnswer,
    originalRef,
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
