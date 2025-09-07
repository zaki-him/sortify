import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
import { categories } from '../categories.js'


export const organize = (targetPath: string): void => {
  //create an absolute path
  const absPath = path.resolve(targetPath) //An absolute path is the full path starting from the root (C: as example)

  if(!fs.existsSync(absPath)){
    console.log(chalk.red("File doesn't exist./wrong path"))
    return;
  }

  //get all files available in the folder
  const files: string[] = fs.readdirSync(absPath)

  if(files.length === 0){
    console.log(chalk.yellow('No files founded in this folder'))
  }

  for(const file in files){
    const filePath = path.join(absPath, file)

    const stat: fs.Stats = fs.statSync(filePath) //this synchronously retrieves informations from the file
  }
}