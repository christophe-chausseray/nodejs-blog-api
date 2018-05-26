import {Router} from "express";
import * as core from "express-serve-static-core";
import CreateArticle from "./requestHandler/createArticle";
import DeleteArticle from "./requestHandler/deleteArticle";
import EditArticle from "./requestHandler/editArticle";
import ListArticle from "./requestHandler/listArticle";

class ArticleRouter {
  private listArticle: ListArticle;
  private createArticle: CreateArticle;
  private editArticle: EditArticle;
  private deleteArticle: DeleteArticle;

  constructor(
    listArticle: ListArticle,
    createArticle: CreateArticle,
    editArticle: EditArticle,
    deleteArticle: DeleteArticle,
  ) {
    this.listArticle = listArticle;
    this.createArticle = createArticle;
    this.editArticle = editArticle;
    this.deleteArticle = deleteArticle;
  }

  /**
   * Handle the routing
   */
  public handle(): core.Router {
    const api: core.Router = Router();

    api.get("/api/v1/articles", this.listArticle.action);
    api.put("/api/v1/articles/:slug", this.createArticle.action);
    api.patch("/api/v1/articles/:slug", this.editArticle.action);
    api.delete("/api/v1/articles/:slug", this.deleteArticle.action);

    return api;
  }
}

export default ArticleRouter;
