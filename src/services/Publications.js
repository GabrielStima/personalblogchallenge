import axios from "axios";

export default {
  async getPublications() {
    return await axios
      .get("http://www.mocky.io/v2/5be5e3fa2f000082000fc3f8")
      .then((result) => {
        return result.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
