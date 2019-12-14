const fs = require('fs');

const ws = fs.createWriteStream('stream.jpg', {encoding: 'utf8'});

ws.write('First\n');
ws.write('Second\n');
ws.end('End');