const myfs = require('fs');

const originPath = './raw/';

myfs.readdirSync(originPath).forEach(file => {
    let updatedFileName = file.replace('=','_');
    myfs.renameSync(originPath+file,originPath+updatedFileName);
})