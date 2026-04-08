import styles from "./Scoreboard.module.css";
import { getScoreboardData } from "../../services/answerService.js";
import { useState, useEffect } from "react";

function Scoreboard() {
  const [scoreboard, setScoreboard] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const scoreboardData = async () => {
      try {
        const data = await getScoreboardData();
        setScoreboard(data);
      } catch (error) {
        console.error("Failed to load scores:", error);
      }
      setLoading(false);
    };
    scoreboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.scoreboard}>
      <table className={styles.scoreboardTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Time (s)</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((score, index) => (
            <tr key={score.id}>
              <td>{index + 1}</td> {/* The "Rank" */}
              <td>{score.playername}</td>
              <td>{score.timeInSeconds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;

// <ol type="1">
//   {" "}
//   Scoreboard:
//   {scoreboard.map((score) => {
//     return (
//       <li key={score.id}>
//         <div>{score.playername}</div>
//         <div>{score.timeInSeconds}s</div>
//       </li>
//     );
//   })}
// </ol>
