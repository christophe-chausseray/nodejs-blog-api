const ArticleNotFound = require('src/library/domain/exceptions/articleNotFound');
const Article = require('src/library/domain/model/article');

class EditArticleHandler {
  constructor({
    mongoArticleRepository,
  }) {
    this.mongoArticleRepository = mongoArticleRepository;
  }

  async handle({ slug, params }) {
    const article = await this.mongoArticleRepository.findOneAndUpdate(slug, params);

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
    }

    return Article.create(article.slug, article.title, article.description, article.body);
  }
}

module.exports = EditArticleHandler;
