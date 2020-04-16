import axios from "axios";

export default {
  async getAuthors() {
    return await axios
      .get("http://www.mocky.io/v2/5be5e3ae2f00005b000fc3f6")
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
