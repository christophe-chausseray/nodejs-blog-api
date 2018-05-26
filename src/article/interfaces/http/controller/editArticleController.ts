import {Request, Response} from "express";
import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import EditArticle from "../../../application/useCase/command/editArticle";
import EditArticleHandler from "../../../application/useCase/command/editArticleHandler";

class EditArticleController {
  private handler: EditArticleHandler;
  private logger: any;

  constructor(editArticleHandler: EditArticleHandler, logger: any) {
    this.handler = editArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Edit article action
   */
  public async action(req: Request, res: Response): Promise<{}> {
    try {
      const article = await this.handler.handle(new EditArticle(req.params.slug, req.body));

      return res.status(HttpStatus.OK).send(article);
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default EditArticleController;
