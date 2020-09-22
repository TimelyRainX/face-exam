// 不依赖第三方库 直接child_process
const exec = require('child_process').execSync;
const name = exec('git rev-parse --abbrev-ref HEAD').toString().trim();
if (name != 'zt') {
    console.log('请注意，合并到zt分支进行发布！','当前分支为' + name);
    return false;
}