const fs = require('fs');

fs.readdir('./listsOfText', (err, files) => {
    if (err) throw err;
    files.forEach(item => {
        const newFolder = item.split('.')[0];
        if(!fs.existsSync('./newLists')) {
            fs.mkdir('./newLists', err => {
                if(err) {
                    console.error(err);
                }
            });
        }
        if (!fs.existsSync(`./newLists/${item}`)) {
            fs.mkdir(`./newLists/${newFolder}`, err => {
                if (err) console.error(err.message);
            });
        }
        fs.copyFile(`./listsOfText/${item}`, `./newLists/${newFolder}/${item}`, err => {
            if (err) console.error(err.message);
        });
    })
});