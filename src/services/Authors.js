import axios from "axios";

export default {
  async getAuthors() {
    return await axios
      .get("http://www.mocky.io/v2/5ea6f5a22f00003f33c4e90d")
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
