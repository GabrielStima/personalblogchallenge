import axios from "axios";

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

export default {
  async getWelcomePhrase() {
    return await axios
      .get("http://www.mocky.io/v2/5e94bb4031000033ce5e3471")
      .then((result) => {
        const choice = randomNumber(result.data.length - 1);
        return result.data[choice];
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
