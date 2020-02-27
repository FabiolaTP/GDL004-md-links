//uso obligartorio/strict use
const fs = require('fs');
const path = require('path');
const file = process.argv[2];

//validando si el archivo es .md/validate if the file is .md
const validateMD = () => {
    let foundExt = path.extname(file);
    if (foundExt === '.md') {
        console.log('This is a .md file'); 
        return true; 
    } 
    else {
        console.log('This isn\'t a .md file');
        return false;    
    }    
}
console.log(validateMD(file));

//lee el archivo/read the file
const readFileMd = fs.readFile( file, "utf8", (err, data) => {
    if (validateMD(file) === false) {
      console.log(err);
    } 
    else { //Buscando links/finding links
      const findLink = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
      const links = data.match(findLink);
      console.log(links);
    }
});
console.log(readFileMd);

//Continuará.../To be continue..... ;)