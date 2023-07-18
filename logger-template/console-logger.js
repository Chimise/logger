import Logger from "./logger.js";

class ConsoleLogger extends Logger {
  constructor() {
    super();
  }

  _write(message, level) {
    message = level + ": " + message;
    console[level.toLowerCase()](message);
  }

  _warn(message, level) {
    this._write(message, level);
  }

  _error(message, level) {
    this._write(message, level);
  }

  _debug(message, level) {
    this._write(message, level);
  }

  _info(message, level) {
    this._write(message, level);
  }
}


export default ConsoleLogger;