import {asValue, AwilixContainer, createContainer, Lifetime} from "awilix";
import {scopePerRequest} from "awilix-express";

import {config} from "./core/infrastructure/utils/config";
import errorMiddleware from "./core/interfaces/http/errors/errorMiddleware";

const container: AwilixContainer = createContainer({injectionMode: "CLASSIC"});

// Load our modules!
container.loadModules([["dist/**/*.js", Lifetime.SINGLETON]], {
  formatName: "camelCase",
});

// Register constant values
container
  .register({
    config: asValue(config),
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorMiddleware: asValue(errorMiddleware),
  });

export default container;
