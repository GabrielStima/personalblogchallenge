import authorsApi from "./Authors";
import publicationsApi from "./Publications";

const generateListPublications = (arrayPublications, arrayAuthors) => {
  return arrayPublications.map((item) => {
    const id = item.metadata.authorId;
    const currentAuthor = arrayAuthors.filter((item) => {
      return item.id === id;
    });
    const date = new Date(item.metadata.publishedAt);
    return {
      title: item.title,
      body: item.body,
      publishedAt: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
      author: currentAuthor[0].name,
    };
  });
};

export default {
  async getListPublications() {
    const publications = await publicationsApi.getPublications();
    const authors = await authorsApi.getAuthors();

    const list = generateListPublications(publications, authors);

    return list;
  },
};
