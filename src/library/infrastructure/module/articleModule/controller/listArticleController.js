const HttpStatus = require('http-status');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

class ListArticleController {
  /**
   * @param {ListArticleQuery} listArticleQuery
   */
  constructor({
    listArticleQuery,
    logger,
  }) {
    this.query = listArticleQuery;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * List article action
   *
   * @param {*} req
   * @param {*} res
   *
   * @return {*}
   */
  async action(req, res) {
    try {
      const articles = await this.query.list();

      return res.status(HttpStatus.OK).send(articles);
    } catch (exception) {
      this.logger.error(exception.message);

      return errorHandler(exception, req, res);
    }
  }
}

module.exports = ListArticleController;
