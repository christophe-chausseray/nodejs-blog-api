import {Request, Response} from "express";
import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/infrastructure/http/errors/errorMiddleware";
import CreateArticle from "../../../application/useCase/command/createArticle";
import CreateArticleHandler from "../../../application/useCase/command/createArticleHandler";

class CreateArticle {
  private handler: CreateArticleHandler;
  private logger: any;

  constructor(createArticleHandler: CreateArticleHandler, logger: any) {
    this.handler = createArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Create article action
   */
  public async action(req: Request, res: Response): Promise<{}> {
    try {
      await this.handler.handle(
        new CreateArticle(req.params.slug, req.body.title, req.body.description, req.body.body),
      );

      return res.status(HttpStatus.CREATED);
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default CreateArticleController;
