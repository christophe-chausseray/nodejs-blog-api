import DomainException from "../../../core/domain/exception/domainException";

class ArticleNotFound extends DomainException {
  /**
   * @param {string} slug
   */
  static withSlug(slug: string) {
    return new ArticleNotFound(`The article with the slug ${slug} doesn't exist.`);
  }
}

export default ArticleNotFound;
