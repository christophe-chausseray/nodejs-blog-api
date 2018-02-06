class ListArticleQuery {
  /**
   * @param {MongoListArticleQuery} mongoListArticleQuery
   */
  constructor({
    mongoListArticleQuery,
  }) {
    this.query = mongoListArticleQuery;
  }

  /**
   * List all articles
   *
   * @return {Promise}
   */
  list() {
    return this.query.list();
  }
}

module.exports = ListArticleQuery;
