class MongoListArticleQuery {
  /**
   * @param {MongoArticleRepository} mongoArticleRepository
   */
  constructor({
    mongoArticleRepository,
  }) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Query to get all the articles.
   *
   * @return {*}
   */
  async list() {
    const data = await this.model().find({});

    return data;
  }

  /**
   * Get article model from the repository.
   *
   * @return {Function}
   */
  model() {
    return this.repository.getModel();
  }
}

module.exports = MongoListArticleQuery;
