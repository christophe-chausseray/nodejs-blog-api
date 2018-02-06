const Router = require('express');

class articleRouter {
  constructor({
        listArticleController,
  }) {
    this.listArticleController = listArticleController;
  }

  /**
   * Handle the routing
   *
   * @return {Function}
   */
  handle() {
    const api = Router();

    api.get('/api/v1/articles', this.listArticleController.action);

    return api;
  }
}

module.exports = articleRouter;
