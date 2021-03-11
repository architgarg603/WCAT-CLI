let fs = require("fs")


function printFile(path){
    if(!fs.existsSync(path)){
        console.log("Error:  file does not exist");
        return;
    }
    let data = fs.readFileSync(path,"utf-8");
    console.log(data);
}

function printHelper(paths){
    if(!paths.length){
        console.log("wrong command type help for all the commands");
        return;
    }

    for(let i=0;i<paths.length;i++){
        printFile(paths[i]);
    }
}

module.exports.printHelper = printHelper