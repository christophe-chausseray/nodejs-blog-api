import mongoArticleRepository from "../../../infrastructure/database/repository/mongoArticleRepository";
import article from "../../../domain/model/article";
import editArticle from "./editArticle";

class EditArticleHandler {
  private repository: mongoArticleRepository;

  constructor(mongoArticleRepository: mongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Handle the article's edition
   */
  public async handle(editArticle: editArticle): Promise<article> {
    const article: any = await this.repository.findOneAndUpdate(editArticle.slug, editArticle.params);

    return article.create(article.slug, article.title, article.description, article.body);
  }
}

export default EditArticleHandler;
