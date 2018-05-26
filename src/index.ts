import container from "./container";
import Application from "./core/infrastructure/application/application";

const start = async () => {
  try {
    const application: Application = container.resolve("application");
    await application.start();
  } catch (exception) {
    const logger: any = container.resolve("logger");
    logger.error(exception);
    process.exit();
  }
};

start();
