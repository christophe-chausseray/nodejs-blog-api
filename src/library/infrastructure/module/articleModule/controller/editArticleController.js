const HttpStatus = require('http-status');
// const CreateArticle = require('src/library/application/useCase/command/editArticle');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

class EditArticleController {
  constructor({
    editArticleHandler,
    logger,
  }) {
    this.handler = editArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  async action(req, res) {
    try {
      await this.handler.handle(req.params.slug, req.body);

      return res.status(HttpStatus.NO_CONTENT).end();
    } catch (exception) {
      this.logger.error(exception.message);

      return errorHandler(exception, req, res);
    }
  }
}

module.exports = EditArticleController;
