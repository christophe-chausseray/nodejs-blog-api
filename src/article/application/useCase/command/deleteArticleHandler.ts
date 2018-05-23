import mongoArticleRepository from "../../../infrastructure/database/repository/mongoArticleRepository";
import deleteArticle from "./deleteArticle";

class DeleteArticleHandler {
  private repository: mongoArticleRepository;

  constructor(mongoArticleRepository: mongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Handle the article's deletion
   */
  public async handle(deleteArticle: deleteArticle) {
    await this.repository.findOneAndRemove(deleteArticle.slug);
  }
}

export default DeleteArticleHandler;
