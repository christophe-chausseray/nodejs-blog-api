const HttpStatus = require('http-status');
const DeleteArticle = require('src/library/application/useCase/command/deleteArticle');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

class DeleteArticleController {
  /**
   * @param {DeleteArticleHandler} deleteArticleHandler
   * @param {Logger} logger
   */
  constructor({
    deleteArticleHandler,
    logger,
  }) {
    this.handler = deleteArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Create article action
   *
   * @param {*} req
   * @param {*} res
   */
  async action(req, res) {
    try {
      await this.handler.handle(new DeleteArticle(req.params.slug));

      return res.status(HttpStatus.OK).end();
    } catch (exception) {
      this.logger.error(exception.message);

      return errorHandler(exception, req, res);
    }
  }
}

module.exports = DeleteArticleController;
