const loggerStreamAdapter = {
  toStream(logger: any) {
    return {
      write(message: string) {
        logger.info(message.slice(0, -1));
      },
    };
  },
};

export default loggerStreamAdapter;
