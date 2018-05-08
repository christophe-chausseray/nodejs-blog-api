const Router = require('express');

class articleRouter {
  /**
   * @param {ListArticleController} listArticleController
   * @param {CreateArticleController} createArticleController
   * @param {EditArticleController} editArticleController
   * @param {DeleteArticleController} deleteArticleController
   */
  constructor({
    listArticleController,
    createArticleController,
    editArticleController,
    deleteArticleController,
  }) {
    this.listArticleController = listArticleController;
    this.createArticleController = createArticleController;
    this.editArticleController = editArticleController;
    this.deleteArticleController = deleteArticleController;
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
    api.delete('/api/v1/articles/:slug', this.deleteArticleController.action);

    return api;
  }
}

module.exports = articleRouter;
