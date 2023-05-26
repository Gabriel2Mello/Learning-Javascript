const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);

    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;        

        const stats = await fs.stat(fileFullPath);
        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }        

        if (
            //!/\.css$/g.test(fileFullPath) &&
            !/\.html$/g.test(fileFullPath)
            ) continue;
        console.log(fileFullPath);
    }
}

readdir('C:\\Users\\gabri\\Music\\Curso-Javascript');