import { Request, Response } from "express";
import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import ListArticleQuery from "../../../application/useCase/query/listArticleQuery";

class ListArticleController {
  private query: ListArticleQuery;
  private logger: any;

  constructor(listArticleQuery: ListArticleQuery, logger: any) {
    this.query = listArticleQuery;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * List article action
   */
  public async action(req: Request, res: Response): Promise<{}> {
    try {
      const articles = await this.query.list();

      return res.status(HttpStatus.OK).send(articles);
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default ListArticleController;
