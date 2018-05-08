const ArticleNotFound = require('src/library/domain/exceptions/articleNotFound');
const ArticleAlreadyExist = require('src/library/domain/exceptions/articleAlreadyExist');

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
   * Create the new article if it doesn't already exist.
   *
   * @param {*} article
   */
  async create(article) {
    const articleExist = await this.get(article.slug);

    if (articleExist !== null) {
      throw ArticleAlreadyExist.withSlug(articleExist.slug);
    }

    await this.model.create(article);
  }

  /**
   * Get the article from the slug.
   *
   * @param {*} slug
   */
  async get(slug) {
    const article = await this.model.findOne({
      slug,
    });

    return article;
  }

  /**
   * Find the article from the slug and update it with the new values.
   *
   * @throws {ArticleNotFound} When the article wasn't found and can't be updated.
   *
   * @param {*} slug
   * @param {*} params
   */
  async findOneAndUpdate(slug, params) {
    const article = await this.model.findOneAndUpdate(
      {
        slug,
      },
      params,
      {
        new: true,
      },
    );

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
    }

    return article;
  }

  /**
   * Find the article from the slug and remove it.
   *
   * @throws {ArticleNotFound} When the article wasn't found and can't be removed.
   *
   * @param {*} slug
   */
  async findOneAndRemove(slug) {
    const article = await this.model.findOneAndRemove({ slug });

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
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
