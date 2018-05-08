const Article = require('src/article/domain/model/article');

class CreateArticleHandler {
  /**
   * @param {MongoArticleRepository} mongoArticleRepository
   */
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

  /**
   * Handle the article's creation
   *
   * @param {CreateArticle} createArticle
   */
  async handle(createArticle) {
    await this.mongoArticleRepository.create(Article.create(
      createArticle.slug,
      createArticle.title,
      createArticle.description,
      createArticle.body,
    ));
  }
}

module.exports = CreateArticleHandler;
