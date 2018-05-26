import DomainException from "../../../core/domain/exception/domainException";

class ArticleAlreadyExist extends DomainException {
  public static withSlug(slug: string): Error {
    return new ArticleAlreadyExist(`An article already exists with the slug ${slug}.`);
  }
}

export default ArticleAlreadyExist;
