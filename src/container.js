const {
  asValue,
  createContainer,
} = require('awilix');
const Lifetime = require('awilix').Lifetime;
const {
  scopePerRequest,
} = require('awilix-express');

const config = require('src/core/infrastructure/utils/config');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

const container = createContainer();

// Load our modules!
container.loadModules([
  'src/**/*.js',
], {
  formatName: 'camelCase',
  // Apply registration options to all modules.
  registrationOptions: {
    lifetime: Lifetime.SINGLETON,
  },
});

// Register constant values
container
  .register({
    config: asValue(config),
  })
  .register({
    containerMiddleware: asValue(scopePerRequest(container)),
    errorHandler: asValue(errorHandler),
  });

module.exports = container;
