const inquirer = require('inquirer')
const chalk = require('chalk')
const log = console.log

const question = [
  {
    type:'input',
    name:'projectName',
    message:'请输入项目名称:',
    default: 'vue-app',
    validate (value) {
      if (!value) {
        log(chalk.red('项目名称不能为空!'))
        return false
      } else {
        return true
      }
    }
  },
  {
    type:'list',
    name:'templateType:',
    message:'请选择模版类型',
    choices:[
      {
        name:'typescript',
        value: 1
      },
      {
        name:'javascript',
        value: 2
      }
    ]
  },
  {
    type:'confirm',
    name:'isConfirm:',
    message:'是否确认模版?',
    validate (value) {
      if (!value) {
        log(chalk.yellow('请重新选择模版!'))
        return false
      } else {
        return true
      }
    }
  }
]

module.exports = question
