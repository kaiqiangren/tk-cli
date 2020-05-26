# 搭建cli

## 一、初始化

### 1、安装commander、inquirer依赖
```npm
npm i commander inquirer chalk ora download-git-repo
```
> 说明: chalk为美化工具，可不安装

> ora是一个好看的加载，就是你下载的时候会有个转圈圈的那种效果，使用方式如下
```js
const ora = require('ora')
let spinner = ora('downloading template ...')
spinner.start()
```

> download-git-repo是用来下载远程模板的，支持 GitHub、 GitLab 和 Bitbucket 等
```js
const download = require('download-git-repo')
download(repository, destination, options, callback)
```
### 2、package.json中写入bin启动命令
1. 写入命令
```json
{
    "bin": {
        "tk-cli": "bin/index.js"
    }
}
```
2. 本地安装tk-cli脚手架工具
```npm
sudo npm i -g
```
> 安装好之后，尝试执行一下  tk-cli 命令

