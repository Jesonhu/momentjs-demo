// ==================================================
// 获取目录中 `.html` 文件的 Node.js 脚本.
// 
// @author Jesonhu(github)
// @email jesonhu_web@163.com
// @update 2019/03/05
// @version v0.1.0
// ==================================================
const path = require('path');
const fs = require('fs');

const fileDisplaySync = (filePath, fileType) => {
  const files = fs.readdirSync(filePath);
  const conArr = [];
  files.forEach((fileName) => {
    //获取当前文件的绝对路径
    const filedir = path.join(filePath, fileName);

    const isExpectType = fileName.indexOf(fileType);
    let itemStr = '';
    const basicUrl = 'https://jesonhu.github.io/momentjs-demo/'
    if (isExpectType) {
      itemStr = `[${fileName}](${basicUrl}/${fileName})`;
      conArr.push(itemStr);
    }
  });
  console.log(conArr);
}

const filePath = __dirname + '/';
const fileType = '.html';
fileDisplaySync('./', fileType);