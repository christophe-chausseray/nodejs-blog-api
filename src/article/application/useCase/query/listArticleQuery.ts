import mongoListArticleQuery from "../../../infrastructure/database/query/mongoListArticleQuery";

class ListArticleQuery {
  private query: mongoListArticleQuery;

  constructor(mongoListArticleQuery: mongoListArticleQuery) {
    this.query = mongoListArticleQuery;
  }

  /**
   * List all articles
   */
  list(): Promise<{}> {
    return this.query.list();
  }
}

export default ListArticleQuery;
