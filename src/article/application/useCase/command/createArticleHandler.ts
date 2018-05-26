import Article from "../../../domain/model/article";
import MongoArticleRepository from "../../../infrastructure/database/repository/mongoArticleRepository";
import CreateArticle from "./createArticle";

class CreateArticleHandler {
  private repository: MongoArticleRepository;

  constructor(mongoArticleRepository: MongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Handle the article's creation
   */
  public async handle(createArticle: CreateArticle): Promise<void> {
    await this.repository.create(
      Article.create(createArticle.slug, createArticle.title, createArticle.description, createArticle.body),
    );
  }
}

export default CreateArticleHandler;
