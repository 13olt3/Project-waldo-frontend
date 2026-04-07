import axios from "axios";
import api from "./api";

const API_URL_SEND_ANSWER = import.meta.env.VITE_API_URL_SEND_ANSWER;

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
