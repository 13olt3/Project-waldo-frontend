import styles from "./WinScreen.module.css";
import { gameEndTimer } from "../../services/answerService.js";
import { useNavigate } from "react-router";

function WinScreen({ imgName }) {
  const navigate = useNavigate();
  async function submitTime(e) {
    e.preventDefault();
    const username = e.target.playerName.value;
    const response = await gameEndTimer(
      localStorage.getItem("session"),
      username,
      imgName,
    );
    console.log(response);
    navigate("/scoreboard");
  }

  return (
    <div className={styles.winScreen}>
      <form
        action="POST"
        className={styles.scoreboardForm}
        onSubmit={submitTime}
      >
        <label htmlFor="name">Scoreboard name:</label>
        <input type="text" id="name" name="playerName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WinScreen;
