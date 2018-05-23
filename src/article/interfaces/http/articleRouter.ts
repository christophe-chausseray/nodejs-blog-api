import {Router} from "express";
import * as core from "express-serve-static-core";
import listArticleController from "./controller/listArticleController";
import createArticleController from "./controller/createArticleController";
import editArticleController from "./controller/editArticleController";

class ArticleRouter {
  private listArticleController: listArticleController;
  private createArticleController: createArticleController;
  private editArticleController: editArticleController;
  private deleteArticleController: any;

  constructor(listArticleController: listArticleController, createArticleController: createArticleController, editArticleController: editArticleController, deleteArticleController: any) {
    this.listArticleController = listArticleController;
    this.createArticleController = createArticleController;
    this.editArticleController = editArticleController;
    this.deleteArticleController = deleteArticleController;
  }

  /**
   * Handle the routing
   */
  public handle(): core.Router {
    const api: core.Router = Router();

    api.get('/api/v1/articles', this.listArticleController.action);
    api.put('/api/v1/articles/:slug', this.createArticleController.action);
    api.patch('/api/v1/articles/:slug', this.editArticleController.action);
    api.delete('/api/v1/articles/:slug', this.deleteArticleController.action);

    return api;
  }
}

export default ArticleRouter;
