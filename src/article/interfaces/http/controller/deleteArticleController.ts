import {Request, Response} from "express";
import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import DeleteArticle from "../../../application/useCase/command/deleteArticle";
import DeleteArticleHandler from "../../../application/useCase/command/deleteArticleHandler";

class DeleteArticleController {
  private handler: DeleteArticleHandler;
  private logger: any;

  constructor(deleteArticleHandler: DeleteArticleHandler, logger: any) {
    this.handler = deleteArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  public async action(req: Request, res: Response): Promise<{}> {
    try {
      await this.handler.handle(new DeleteArticle(req.params.slug));

      return res.status(HttpStatus.OK);
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default DeleteArticleController;
