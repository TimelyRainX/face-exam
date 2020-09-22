// 依赖第三方库
const execa = require('execa');
const res = execa.commandSync('git rev-parse --abbrev-ref HEAD');
if (res.stdout != 'zt') {
    console.log('请合并到zt分支发布！','当前分支为' + res.stdout);
    return false;
}