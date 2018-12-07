const copyFile = require('fs-copy-file');
var fs = require('fs');
if (!fs.existsSync('.env')) {
    copyFile('.env.example', '.env', (err) => {
        if (err)
            throw err;
        console.log('.env.example was copied to .env');
    });
}
