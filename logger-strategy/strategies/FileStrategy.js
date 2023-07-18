import {resolve} from 'node:path';
import fs from 'node:fs';


class FileStrategy {
    constructor(filename) {
        this.filename = resolve(filename);
    }

    _write(message, level) {
        message = level + ': ' + message + '\n';
        fs.writeFileSync(this.filename, message, {flag: 'a'});
    }

    warn(message, level) {
        this._write(message, level);
    }

    error(message, level) {
        this._write(message, level);
    }

    info(message, level) {
        this._write(message, level);
    }

    debug(message, level) {
        this._write(message, level);
    }

}


export default FileStrategy;