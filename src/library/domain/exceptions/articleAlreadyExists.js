const DomainException = require('src/core/domain/exception/domainException');

class ArticleAlreadyExist extends DomainException {
  /**
   * @param {string} slug 
   */
  static withSlug(slug) {
    return new ArticleAlreadyExist(`An article already exists with the slug ${slug}.`);
  }
}

module.exports = ArticleAlreadyExist;
