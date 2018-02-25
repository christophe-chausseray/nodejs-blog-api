const Router = require('express');

class articleRouter {
  /**
   * @param {ListArticleController} listArticleController
   */
  constructor({
    listArticleController,
    createArticleController,
  }) {
    this.listArticleController = listArticleController;
    this.createArticleController = createArticleController;
  }

  /**
   * Handle the routing
   *
   * @return {Function}
   */
  handle() {
    const api = Router();

    api.get('/api/v1/articles', this.listArticleController.action);
    api.put('/api/v1/articles/:slug', this.createArticleController.action);

    return api;
  }
}

module.exports = articleRouter;
