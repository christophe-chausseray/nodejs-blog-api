import DomainException from "../../../core/domain/exception/domainException";

class ArticleNotFound extends DomainException {
  public static withSlug(slug: string): Error {
    return new ArticleNotFound(`The article with the slug ${slug} doesn't exist.`);
  }
}

export default ArticleNotFound;
