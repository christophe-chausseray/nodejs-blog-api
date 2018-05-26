import morgan from "morgan";
import loggerStreamAdapter from "../../../infrastructure/logging/loggerStreamAdapter";

const loggerMiddleware: (logger: any) => Function = (logger) =>
  morgan("dev", {
    stream: loggerStreamAdapter.toStream(logger),
  });

export default loggerMiddleware;
