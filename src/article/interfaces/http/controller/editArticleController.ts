import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import editArticle from "../../../application/useCase/command/editArticle";
import editArticleHandler from "../../../application/useCase/command/editArticleHandler";

class EditArticleController {
  private handler: editArticleHandler;
  private logger: any;

  constructor(editArticleHandler: editArticleHandler, logger: any) {
    this.handler = editArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Edit article action
   */
  public async action(req: any, res: any): Promise<{}> {
    try {
      const article = await this.handler.handle(new editArticle(req.params.slug, req.body));

      return res.status(HttpStatus.OK).send(article).end();
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default EditArticleController;
