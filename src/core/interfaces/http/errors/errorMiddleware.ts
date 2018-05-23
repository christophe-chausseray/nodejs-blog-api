import HttpStatus from "http-status";

export default (err: any, req: any, res: any, next?: Function) => {
  const logger: any = req.container.cradle;

  logger.error(err);

  const response = {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
  };

  if (!res.headersSent) {
    res.status(response.statusCode).json(response);
  }
};
