class DeleteArticleHandler {
  /**
   * @param {MongoArticleRepository} mongoArticleRepository
   */
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

  /**
   * Handle the article's deletion
   *
   * @param {DeleteArticle} deleteArticle
   */
  async handle({ slug }) {
    await this.mongoArticleRepository.findOneAndRemove(slug);
  }
}

module.exports = DeleteArticleHandler;
