#!/usr/bin/env node

import { program } from "commander";
import { organize } from "./commands/organize.js";

interface Option {
  path?: string
}

program
.command("organize")
.description("organize files into folders")
.option("-p --path <path>", ".")
.action((options: Option) => {
  organize(options.path ?? '.')
})

program.parse(process.argv)