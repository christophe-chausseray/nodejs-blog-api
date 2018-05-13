import bodyParser from "body-parser";
import cors from "cors";
import {Router} from "express";
import * as core from "express-serve-static-core";
import {Morgan} from "morgan";

const router: (
  loggerMiddleware: () => void,
  containerMiddleware: () => void,
  errorMiddleware: () => void,
) => core.Router = (loggerMiddleware, containerMiddleware, errorMiddleware) => {
  const apiPrefix: string = "/api/v1";
  const router: core.Router = Router();

  router
    .use(cors())
    .use(bodyParser.json())
    .use(containerMiddleware);

  router.use(loggerMiddleware);

  // router.use(articleRouter.handle());

  router.use(errorMiddleware);

  return router;
};

export default router;
