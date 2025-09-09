import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { categories } from '../categories.js';
const moveFile = (filePath, absPath, folderName, file) => {
    const folderPath = path.join(absPath, folderName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
    fs.renameSync(filePath, path.join(folderPath, file));
    console.log(chalk.blue(`Moved ${file} to ${folderName}`));
};
export const organize = (targetPath) => {
    //create an absolute path
    const absPath = path.resolve(targetPath); //An absolute path is the full path starting from the root (C: as example)
    if (!fs.existsSync(absPath)) {
        console.log(chalk.red("File doesn't exist./wrong path"));
        return;
    }
    //get all files available in the folder
    const files = fs.readdirSync(absPath);
    if (files.length === 0) {
        console.log(chalk.yellow('No files found in this folder'));
    }
    for (const file of files) {
        const filePath = path.join(absPath, file);
        const stat = fs.statSync(filePath); //this synchronously retrieves informations from the file
        if (stat.isFile()) {
            const ext = path.extname(filePath).toLowerCase(); //extracts the extension name
            let moved = false;
            for (const [category, extensions] of Object.entries(categories)) {
                if (extensions.includes(ext)) {
                    moveFile(filePath, absPath, category, file);
                    moved = true;
                    break;
                }
            }
            if (!moved) {
                moveFile(filePath, absPath, "others", file);
            }
        }
    }
    console.log(chalk.green("Files Organized Successfully"));
};
//# sourceMappingURL=organize.js.map