import { resolve } from "node:path";
import { writeFileSync } from "node:fs";
import Logger from "./logger.js";



class FileLogger extends Logger {
  constructor(filename) {
    super();
    this.filename = resolve(filename);
  }

  _write(message, level) {
    message = level + ": " + message + "\n";
    writeFileSync(this.filename, message, { flag: "a" });
  }

  _warn(message, level) {
    this._write(message, level);
  }

  _info(message, level) {
    this._write(message, level);
  }

  _error(message, level) {
    this._write(message, level);
  }

  _debug(message, level) {
    this._write(message, level);
  }
}

export default FileLogger;
