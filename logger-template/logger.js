const levels = {
  debug: "DEBUG",
  error: "ERROR",
  info: "INFO",
  warn: "WARN",
};


class Logger {
  constructor() {
    Object.keys(levels).forEach((level) => {
      const method = "_" + level;
      Logger.prototype[method] = function (message, level) {
        throw new Error(`${method}() must be implemented`);
      };
    });
  }


  warn(message) {
    this._warn(message, levels.warn);
  }

  error(message) {
    this._error(message, levels.error);
  }

  debug(message) {
    this._debug(message, levels.debug);
  }

  info(message) {
    this._info(message, levels.info);
  }
}

export default Logger;
