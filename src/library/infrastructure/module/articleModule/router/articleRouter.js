const Router = require('express');

class articleRouter {
  /**
   * @param {ListArticleController} listArticleController
   */
  constructor({
    listArticleController,
    createArticleController,
    editArticleController,
  }) {
    this.listArticleController = listArticleController;
    this.createArticleController = createArticleController;
    this.editArticleController = editArticleController;
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
    api.patch('/api/v1/articles/:slug', this.editArticleController.action);

    return api;
  }
}

module.exports = articleRouter;
