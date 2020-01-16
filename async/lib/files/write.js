const fs = require('fs');

const write = async (dest, data) => {
    try {
        await fs.writeFileSync(dest, data);
    } catch (error) {
        // throw `Ошибка чтения ${dest}`;
        return false;
    }
    return true;
};

module.exports = write;