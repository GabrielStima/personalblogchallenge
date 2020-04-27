import axios from "axios";

export default {
  async getPublications() {
    return await axios
      .get("http://www.mocky.io/v2/5ea6f6002f00003f33c4e912")
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
