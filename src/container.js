const awilix = require('awilix');
const Lifetime = require('awilix').Lifetime;
const { scopePerRequest } = require('awilix-express');

const config = require('src/core/infrastructure/utils/config');
const errorHandler = require('src/core/infrastructure/http/errors/errorHandler');

const container = awilix.createContainer();

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
  .registerValue({ config })
  .registerValue({
    containerMiddleware: scopePerRequest(container),
    errorHandler,
  });

module.exports = container;
