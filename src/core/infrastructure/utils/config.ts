import nconf from "nconf";

interface InterfaceAppenderOptions {
  type: string;
  filename?: string;
}

interface InterfaceMongoOptions {
  database: string;
  server: string;
  port: string;
  user: string;
  password: string;
}

interface InterfaceLoggingOptions {
  appenders: InterfaceAppenderOptions[];
}

export interface InterfaceConfigOptions {
  env: string;
  port: string;
  mongo: InterfaceMongoOptions;
  logging: InterfaceLoggingOptions;
}

nconf.env();

const environment: any = nconf.get();
const logDirectory: string = "logs";

const appenders: InterfaceAppenderOptions[] = [
  {
    type: "console",
  },
  {
    type: "file",
    filename: `${logDirectory}/dev.log`,
  },
];

export const config: InterfaceConfigOptions = {
  env: environment.NODE_ENV,
  port: environment.API_PORT,
  mongo: {
    database: environment.MONGO_DATABASE,
    server: environment.MONGO_SERVER,
    port: environment.MONGO_PORT,
    user: environment.MONGO_USER,
    password: environment.MONGO_PASSWORD,
  },
  logging: {
    appenders,
  },
};
