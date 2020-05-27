#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const question = require('../src/question');
const ora = require('ora');
const download = require('download-git-repo');

// 定义版本
program.version(require('../package').version);

// description主要用于 tk --help中的说明
program
    .command('init')
    .description('初始化项目的启动命令')
    .action(async () => {
      const spinner = ora("Downloading...");
      const answer = await inquirer.prompt(question)
      const { projectName, templateType } = answer;
      // const nextAnswer = await inquirer.prompt([
      //   {
      //     type:'input',
      //     name:'nextQuestion',
      //     message:'下一个问题:',
      //     default: 'next question!'
      //   },
      // ])
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
