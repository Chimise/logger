const levels = {
    debug: 'DEBUG',
    error: 'ERROR',
    info: 'INFO',
    warn: 'WARN'
}


class Logger {
    constructor(logStrategy) {
        this.logStrategy = logStrategy;
    }

    debug(message) {
        this.logStrategy.debug(message, levels.debug);
    }

    info(message) {
        this.logStrategy.info(message, levels.error);
    }

    warn(message) {
        this.logStrategy.warn(message, levels.warn);
    }

    error(message) {
        this.logStrategy.error(message, levels.error);
    }
}

export default Logger;