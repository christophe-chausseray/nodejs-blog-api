import DomainException from "../../../core/domain/exception/domainException";

class ArticleAlreadyExist extends DomainException {
  /**
   * @param {string} slug
   */
  public static withSlug(slug: string) {
    return new ArticleAlreadyExist(`An article already exists with the slug ${slug}.`);
  }
}

export default ArticleAlreadyExist;
