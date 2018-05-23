import bodyParser from "body-parser";
import cors from "cors";
import {Router} from "express";
import * as core from "express-serve-static-core";
import {Morgan} from "morgan";
import articleRouter from "../../../article/interfaces/http/articleRouter";

const router: (
  loggerMiddleware: () => void,
  containerMiddleware: () => void,
  errorMiddleware: () => void,
  articleRouter: articleRouter
) => core.Router = (loggerMiddleware, containerMiddleware, errorMiddleware, articleRouter) => {
  const apiPrefix: string = "/api/v1";
  const router: core.Router = Router();

  router
    .use(cors())
    .use(bodyParser.json())
    .use(containerMiddleware);

  router.use(loggerMiddleware);

  router.use(articleRouter.handle());

  router.use(errorMiddleware);

  return router;
};

export default router;
