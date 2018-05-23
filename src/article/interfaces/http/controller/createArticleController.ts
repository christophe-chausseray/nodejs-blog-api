import HttpStatus from "http-status";
import errorMiddleware from "../../../../core/interfaces/http/errors/errorMiddleware";
import createArticle from "../../../application/useCase/command/createArticle";

class CreateArticleController {
  private handler: any;
  private logger: any;

  constructor(createArticleHandler: any, logger: any) {
    this.handler = createArticleHandler;
    this.logger = logger;

    this.action = this.action.bind(this);
  }

  /**
   * Create article action
   *
   * @param {*} req
   * @param {*} res
   */
  public async action(req: any, res: any): Promise<{}> {
    try {
      await this.handler.handle(new createArticle(
        req.params.slug,
        req.body.title,
        req.body.description,
        req.body.body,
      ));

      return res.status(HttpStatus.CREATED).end();
    } catch (exception) {
      this.logger.error(exception.message);

      errorMiddleware(exception, req, res);
    }
  }
}

export default CreateArticleController;
