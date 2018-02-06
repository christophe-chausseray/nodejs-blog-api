class MongoArticleRepository {
  /**
   * @param {MongoArticleModel} mongoArticleModel
   */
  constructor({
    mongoArticleModel,
  }) {
    this.model = mongoArticleModel.create();
  }

  /**
   * Return the article model.
   *
   * return {Function}
   */
  getModel() {
    return this.model;
  }
}

module.exports = MongoArticleRepository;
