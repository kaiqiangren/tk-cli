#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const question = require('../src/question');
const ora = require('ora');
const download = require('download-git-repo');

// 定义版本
program.version(require('../package').version);

program
    .command('init')
    .description('run init commands')
    .action(async () => {
      const spinner = ora("Downloading...");
      const answer = await inquirer.prompt(question)
      const { projectName, templateType } = answer;
      spinner.start();
      download(
          'github:kaiqiangren/vue-next-ts-preview',
          projectName,
          (err) => {
            if (err) {
              console.log(err)
            } else {
              spinner.stop()
            }
          })
    });

program.parse(process.argv);
