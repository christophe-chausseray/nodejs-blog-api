const ArticleNotFound = require('src/library/domain/exceptions/articleNotFound');
const Article = require('src/library/domain/model/article');

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
   * @throws {ArticleNotFound} When the article wasn't found and can't be updated.
   *
   * @param {EditArticle} editArticle
   */
  async handle({ slug, params }) {
    const article = await this.mongoArticleRepository.findOneAndUpdate(slug, params);

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
    }

    return Article.create(article.slug, article.title, article.description, article.body);
  }
}

module.exports = EditArticleHandler;
