const Article = require('src/article/domain/model/article');

class EditArticleHandler {
  /**
   * @param {MongoArticleRepository} mongoArticleRepository
   */
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

  /**
   * Handle the article's edition
   *
   * @param {EditArticle} editArticle
   */
  async handle({ slug, params }) {
    const article = await this.mongoArticleRepository.findOneAndUpdate(slug, params);

    return Article.create(article.slug, article.title, article.description, article.body);
  }
}

module.exports = EditArticleHandler;
