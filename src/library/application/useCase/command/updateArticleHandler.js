const ArticleNotFound = require('src/library/domain/exceptions/articleNotFound');

class UpdateArticleHandler {
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

  async handle(slug, params) {
    const article = await this.mongoArticleRepository.get(slug);

    if (article !== null) {
      throw ArticleNotFound.withSlug(slug);
    }

    this.mongoArticleRepository.update(slug, params);
  }
}

module.exports = UpdateArticleHandler;
