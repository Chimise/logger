import ConsoleLogger from "./console-logger.js";
import FileLogger from "./file-logger.js";
import Logger from "./logger.js";


const fileLogger = new FileLogger('log.txt');
const consoleLogger = new ConsoleLogger();
const logger = new Logger();

console.log(fileLogger);
console.log(logger);

fileLogger.warn('hello');
consoleLogger.error('An error occurred');
consoleLogger.warn('This is a warning');