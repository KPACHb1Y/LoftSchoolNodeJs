const fs = require('fs');

const write = async (dest, data) => {
    try {
        await fs.writeFileSync(dest, data);
    } catch (error) {
        return false;
    }
    return true;
};

module.exports = write;