import axios from "axios";

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

export default {
  async getWelcomePhrase() {
    return await axios
      .get("http://www.mocky.io/v2/5ea6f6bd2f00004328c4e91d")
      .then((result) => {
        const choice = randomNumber(result.data.length - 1);
        return result.data[choice];
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
