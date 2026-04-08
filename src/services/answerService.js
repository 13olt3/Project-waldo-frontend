import axios from "axios";

const API_URL_SEND_ANSWER = import.meta.env.VITE_API_URL_SEND_ANSWER;
const API_URL_START_TIMER = import.meta.env.VITE_API_URL_START_TIMER;
const API_URL_END_TIMER = import.meta.env.VITE_API_URL_END_TIMER;
const API_URL_GET_SCOREBOARD = import.meta.env.VITE_API_URL_GET_SCOREBOARD;

export const checkAnswer = async (playerAnswer) => {
  try {
    const response = await axios.post(API_URL_SEND_ANSWER, {
      black: playerAnswer.black,
      white: playerAnswer.white,
      dead: playerAnswer.dead,
    });
    return response.data;
  } catch (error) {
    console.log("Error checking answer:", error);
    throw error;
  }
};

export const gameStartTimer = async () => {
  try {
    const response = await axios.post(API_URL_START_TIMER);
    return response;
  } catch (error) {
    console.log("Error game start timer:", error);
    throw error;
  }
};

export const gameEndTimer = async (sessionId, playerName, imgName) => {
  try {
    const response = await axios.post(API_URL_END_TIMER, {
      session: sessionId,
      username: playerName,
      imgName: imgName,
    });
    return response;
  } catch (error) {
    console.log("Error game end timer:", error);
    throw error;
  }
};

export const getScoreboardData = async () => {
  try {
    const response = await axios.get(API_URL_GET_SCOREBOARD);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error retrieving scoreboard:", error);
    throw error;
  }
};
