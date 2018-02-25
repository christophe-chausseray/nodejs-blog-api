const ArticleAlreadyExist = require('src/library/domain/exceptions/articleAlreadyExists');

class MongoArticleRepository {
  /**
   * @param {MongoArticleModel} mongoArticleModel
   */
  constructor({
    mongoArticleModel,
  }) {
    this.model = mongoArticleModel.create();
  }

  async create(article) {
    const articleExist = await this.get(article.slug);

    if (articleExist !== null) {
      throw ArticleAlreadyExist.withSlug(articleExist.slug);
    }

    await this.model.create(article);
  }

  async get(slug) {
    const article = this.model.findOne({
      slug,
    });

    if (article === null) {
      return null;
    }

    return article;
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
