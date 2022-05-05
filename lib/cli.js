#!/usr/bin/env node

//macos need add other permission by run :   chmod 755  lib/cli.js
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const ejs = require("ejs");

inquirer
  .prompt({
    type: "input",
    name: "name",
    message: "Project name?",
  })
  .then((answers) => {
    //gen files
    const templateDir = path.join(__dirname, "templates");
    const destDir = process.cwd();
    //read all files in templates
    fs.readdir(templateDir, (err, files) => {
      if (err) throw err;
      files.forEach((fileName) => {
        ejs.renderFile(
          path.join(templateDir, fileName),
          answers,
          (err, result) => {
            if (err) throw err;
            //write files to dest dir
            fs.writeFileSync(path.join((destDir, fileName)), result);
          }
        );
      });
    });
  });
