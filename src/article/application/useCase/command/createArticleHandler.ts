import mongoArticleRepository from "../../../infrastructure/database/repository/mongoArticleRepository";
import createArticle from "./createArticle";
import article from "../../../domain/model/article";


class CreateArticleHandler {
  private repository: mongoArticleRepository; 

  constructor(mongoArticleRepository: mongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Handle the article's creation
   */
  public async handle(createArticle: createArticle) {
    await this.repository.create(article.create(
      createArticle.slug,
      createArticle.title,
      createArticle.description,
      createArticle.body,
    ));
  }
}

export default CreateArticleHandler;
