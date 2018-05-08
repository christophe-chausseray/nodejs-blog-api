const DomainException = require('src/core/domain/exception/domainException');

class ArticleNotFound extends DomainException {
  /**
   * @param {string} slug
   */
  static withSlug(slug) {
    return new ArticleNotFound(`The article with the slug ${slug} doesn't exist.`);
  }
}

module.exports = ArticleNotFound;
