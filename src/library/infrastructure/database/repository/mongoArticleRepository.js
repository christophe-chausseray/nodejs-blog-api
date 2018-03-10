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
    }).exec();
    console.log(article);

    if (article === null) {
      return null;
    }

    return article;
  }

  async findOneAndUpdate(slug, params) {
    const article = await this.model.findOneAndUpdate({
        slug
      },
      params, {
        new: true
      },
    );

    return article;
  }

  async update(article, params) {
    article.set(params);

    await article.save();
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
