module.exports = {
  descendingOrder: (a, b) => {
    let date1 = new Date(a.publishedAt);
    let date2 = new Date(b.publishedAt);

    if (date1 < date2) {
      return 1;
    }
    if (date1 > date2) {
      return -1;
    }
    return 0;
  },
};
