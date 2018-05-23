import mongoArticleRepository from "../repository/mongoArticleRepository";

class MongoListArticleQuery {
  private repository: mongoArticleRepository;

  constructor(mongoArticleRepository: mongoArticleRepository) {
    this.repository = mongoArticleRepository;
  }

  /**
   * Get the list of articles.
   */
  public async list(): Promise<{}> {
    return await this.model().find();
  }

  /**
   * Get article model from the repository.
   */
  private model(): any {
    return this.repository.getModel();
  }
}

export default MongoListArticleQuery;
