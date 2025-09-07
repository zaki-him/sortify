#!/usr/bin/env node
import { program } from "commander";
import { organize } from "./commands/organize.js";
program
    .command("organize")
    .description("organize files into folders")
    .option("-p --path <path>", ".")
    .action((options) => {
    organize(options.path);
});
//# sourceMappingURL=index.js.map