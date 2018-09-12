var shell = require('shelljs')
var inquirer = require('inquirer')

if (shell.exec('git fetch').code !== 0) {
  return
}
inquirer.prompt([
  {
    type: 'input',
    name: 'commit',
    message: '请输入提交信息(修改了xx笔记/修改xx用法/参数)'
  }
]).then(answers => {
  var build = shell.exec('npm run build')
  if (build.code == 0) {
    var add = shell.exec('git add .')
    if (add.code === 0) {
      shell.exec(`git commit -m ${answers.commit}`)
      shell.exec('git push origin ')
    }
  }
})