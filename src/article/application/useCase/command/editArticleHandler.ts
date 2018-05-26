import Article from "../../../domain/model/article";
import MongoArticleRepository from "../../../infrastructure/database/repository/mongoArticleRepository";
import EditArticle from "./editArticle";

class EditArticleHandler {
  private repository: MongoArticleRepository;

  constructor(mongoArticleRepository: MongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Handle the article's edition
   */
  public async handle(editArticle: EditArticle): Promise<Article> {
    const article: any = await this.repository.findOneAndUpdate(editArticle.slug, editArticle.params);

    return Article.create(article.slug, article.title, article.description, article.body);
  }
}

export default EditArticleHandler;
