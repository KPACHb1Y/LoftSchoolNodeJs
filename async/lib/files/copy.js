const fs = require('fs');
const path = require('path');

const fl = require('../firstLetter');
const write = require('./write');
const reader = require('./reader');

const copy = async (sourceDir, destDir, file) => {
    destDir = path.join(destDir, fl(file));
    const sourceFile = path.join(sourceDir, file);
    const destFile = path.join(destDir, file);

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    }

    const data = await reader(sourceFile);
    write(destFile, data);

    return true;
};

module.exports = copy;