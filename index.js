const container = require('src/container');

const start = async () => {
  try {
    await (container.resolve('application')).start();
  } catch (exception) {
    (container.resolve('logger')).error(exception);
    process.exit();
  }
};

start();
