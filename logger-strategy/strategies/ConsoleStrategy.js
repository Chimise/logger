class ConsoleStrategy {
    _write(message, level) {
        message = level + ': ' + message;
        console[level.toLowerCase()](message);
    }

    warn(message, level) {
        this._write(message, level);
    }

    error(message, level) {
        this._write(message, level)
    }

    debug(message, level) {
        this._write(message, level)
    }

    info(message, level) {
        this._write(message, level)
    }
}

export default ConsoleStrategy;