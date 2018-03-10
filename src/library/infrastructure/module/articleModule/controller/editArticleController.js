const HttpStatus = require('http-status');
const EditArticle = require('src/library/application/useCase/command/editArticle');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

class EditArticleController {
  /**
   * @param {editArticleHandler} EditArticleHandler
   * @param {logger} Logger
   */
  constructor({
    editArticleHandler,
    logger,
  }) {
    this.handler = editArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Edit article action
   *
   * @param {*} req
   * @param {*} res
   */
  async action(req, res) {
    try {
      const article = await this.handler.handle(new EditArticle(req.params.slug, req.body));

      return res.status(HttpStatus.OK).send(article).end();
    } catch (exception) {
      this.logger.error(exception.message);

      return errorHandler(exception, req, res);
    }
  }
}

module.exports = EditArticleController;
