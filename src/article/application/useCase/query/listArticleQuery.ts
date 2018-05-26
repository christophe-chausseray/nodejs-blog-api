import MongoListArticleQuery from "../../../infrastructure/database/query/mongoListArticleQuery";

class ListArticleQuery {
  private query: MongoListArticleQuery;

  constructor(mongoListArticleQuery: MongoListArticleQuery) {
    this.query = mongoListArticleQuery;
  }

  /**
   * List all articles
   */
  public list(): Promise<{}> {
    return this.query.list();
  }
}

export default ListArticleQuery;
