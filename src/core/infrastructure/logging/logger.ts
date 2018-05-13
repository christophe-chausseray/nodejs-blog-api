const Log4js = require("log4js");
import {InterfaceConfigOptions} from "./../utils/config";

const logger: (config: InterfaceConfigOptions) => any = (config) => {
  Log4js.configure(config.logging);

  return Log4js.getLogger();
};

export default logger;
