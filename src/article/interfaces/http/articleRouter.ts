import {Router} from "express";
import * as core from "express-serve-static-core";
import CreateArticleController from "./controller/createArticleController";
import DeleteArticleController from "./controller/deleteArticleController";
import EditArticleController from "./controller/editArticleController";
import ListArticleController from "./controller/listArticleController";

class ArticleRouter {
  private listArticleController: ListArticleController;
  private createArticleController: CreateArticleController;
  private editArticleController: EditArticleController;
  private deleteArticleController: DeleteArticleController;

  constructor(
    listArticleController: ListArticleController,
    createArticleController: CreateArticleController,
    editArticleController: EditArticleController,
    deleteArticleController: DeleteArticleController,
  ) {
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

    api.get("/api/v1/articles", this.listArticleController.action);
    api.put("/api/v1/articles/:slug", this.createArticleController.action);
    api.patch("/api/v1/articles/:slug", this.editArticleController.action);
    api.delete("/api/v1/articles/:slug", this.deleteArticleController.action);

    return api;
  }
}

export default ArticleRouter;
