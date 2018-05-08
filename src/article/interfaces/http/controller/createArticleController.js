const HttpStatus = require('http-status');
const CreateArticle = require('src/article/application/useCase/command/createArticle');
const errorHandler = require('src/core/interfaces/http/errors/errorHandler');

class CreateArticleController {
  /**
   * @param {CreateArticleHandler} createArticleHandler
   * @param {Logger} logger
   */
  constructor({
    createArticleHandler,
    logger,
  }) {
    this.handler = createArticleHandler;
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
      await this.handler.handle(new CreateArticle(
        req.params.slug,
        req.body.title,
        req.body.description,
        req.body.body,
      ));

      return res.status(HttpStatus.CREATED).end();
    } catch (exception) {
      this.logger.error(exception.message);

      return errorHandler(exception, req, res);
    }
  }
}

module.exports = CreateArticleController;
