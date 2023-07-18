import Logger from "./Logger.js";
import ConsoleStrategy from "./strategies/ConsoleStrategy.js";
import FileStrategy from "./strategies/FileStrategy.js";


const fileStrategy = new FileStrategy('log.txt');
const consoleStrategy = new ConsoleStrategy();

const fileLogger = new Logger(fileStrategy);
const consoleLogger = new Logger(consoleStrategy);

fileLogger.warn('hello');
consoleLogger.error('An error occurred');
consoleLogger.warn('This is a warning');