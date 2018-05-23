import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import deleteArticle from "../../../application/useCase/command/deleteArticle";

class DeleteArticleController {
  private handler: any;
  private logger: any;

  constructor(deleteArticleHandler: any, logger: any) {
    this.handler = deleteArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  public async action(req: any, res: any): Promise<{}> {
    try {
      await this.handler.handle(new deleteArticle(req.params.slug));

      return res.status(HttpStatus.OK).end();
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default DeleteArticleController;
