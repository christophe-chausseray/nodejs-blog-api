import mongoArticleModel from "./model/mongoArticleModel";
import ArticleNotFound from "../../../domain/exceptions/articleNotFound";
import ArticleAlreadyExist from "../../../domain/exceptions/articleAlreadyExist";

class MongoArticleRepository {
  private model: any;

  constructor(mongoArticleModel: mongoArticleModel) {
    this.model = mongoArticleModel.create();
  }

  /**
   * Create the new article if it doesn't already exist.
   */
  public async create(article: any) {
    const articleExist: any = await this.get(article.slug);

    if (articleExist !== null) {
      throw ArticleAlreadyExist.withSlug(articleExist.slug);
    }

    await this.model.create(article);
  }

  /**
   * Get the article from the slug.
   */
  public async get(slug: string): Promise<{}> {
    const article = await this.model.findOne({
      slug,
    });

    return article;
  }

  /**
   * Find the article from the slug and update it with the new values.
   *
   * @throws {ArticleNotFound} When the article wasn't found and can't be updated.
   */
  public async findOneAndUpdate(slug: string, params: any): Promise<{}> {
    const article = await this.model.findOneAndUpdate(
      {
        slug,
      },
      params,
      {
        new: true,
      },
    );

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
    }

    return article;
  }

  /**
   * Find the article from the slug and remove it.
   *
   * @throws {ArticleNotFound} When the article wasn't found and can't be removed.
   *
   * @param {*} slug
   */
  public async findOneAndRemove(slug: string): Promise<{}> {
    const article = await this.model.findOneAndRemove({ slug });

    if (article === null) {
      throw ArticleNotFound.withSlug(slug);
    }

    return article;
  }

  /**
   * Return the article model.
   */
  public getModel(): any {
    return this.model;
  }
}

export default MongoArticleRepository;
