export const createLogger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(err) {
      logs.push(`log - ${name} - ${err}`);
    },
    getLogs() {
      return logs;
    },
  };
};
