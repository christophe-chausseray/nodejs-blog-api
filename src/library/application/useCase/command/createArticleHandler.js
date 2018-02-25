const Article = require('src/library/domain/model/article');

class CreateArticleHandler {
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

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
