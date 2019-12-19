const fs = require('fs');

const files = ['A.txt', 'B.txt', 'C.txt', 'D.txt', 'F.txt', 'G.txt'];


if (!fs.existsSync('./listsOfText')) {
    fs.mkdir('./listsOfText', err => {
        if (err) throw err;
        files.forEach(item => {
            fs.writeFile(`./listsOfText/${item}`, 'hello', err => {
                if (err) console.error(err);
            });
        });

        fs.readdir('./listsOfText', (err, files) => {
            if (err) throw err;

            if(!fs.existsSync('./newLists')) {
                fs.mkdir('./newLists', err => {
                    if(err) console.error(err);
                });
            }

            files.forEach(item => {
                const newFolder = item.split('.')[0];
                if (!fs.existsSync(`./newLists/${newFolder}`)) {
                    fs.mkdir(`./newLists/${newFolder}`, err => {
                        if (err) console.error(err.message);
                        fs.copyFile(`./listsOfText/${item}`, `./newLists/${newFolder}/${item}`, err => {
                            if (err) console.error(err.message);
                        });
                    });
                } else {
                    fs.copyFile(`./listsOfText/${item}`, `./newLists/${newFolder}/${item}`, err => {
                        if (err) console.error(err.message);
                    });
                }
            });
        });
    });
}
