let fs = require("fs");

function printNumber(path){

    let cmd = path[1];
    let fileName = path[1];

    console.log(fileName);
    if(cmd == "-s" || cmd == "-b" || cmd == "-n" ){
        fileName = path[2];
    }

    if(!fs.existsSync(fileName)){
        console.log("Error:  file does not exist");
        return;
    }

    let data = fs.readFileSync(fileName,'utf-8').split("\n");

    for(let i=0;i<data.length;i++){
        console.log(`[ ${i+1} ]`, data[i]);
    }


    
}

function printNumberOfNonEmptyLines(path){
  

    let cmd = path[1];
    let fileName = path[1];

    if(cmd == "-s" || cmd == "-b" || cmd == "-n" ){
        fileName = path[2];
    }

    if(!fs.existsSync(fileName)){
        console.log("Error:  file does not exist");
        return;
    }

    let data = fs.readFileSync(fileName,'utf-8').split("\n");
    let cnt =0;
    for(let i=0;i<data.length;i++){
        if(data[i].trim().length>0){
            console.log(`[ ${cnt+1} ]`, data[i]);
            cnt++;
        } 
    }


    
}

function removeExtraBlankLines(path){
  

    let cmd = path[1];
    let fileName = path[1];

    if(cmd == "-s" || cmd == "-b" || cmd == "-n" ){
        fileName = path[2];
    }

    if(!fs.existsSync(fileName)){
        console.log("Error:  file does not exist");
        return;
    }

    let data = fs.readFileSync(fileName,'utf-8').split("\n");
    let output = "";
    for(let i=0;i<data.length;i++){
        if(data[i].trim().length>0){
            output += data[i] + "\n";
        } 
    }

    fs.writeFileSync(fileName,output);
    console.log(output);


    
}


module.exports.printNumber = printNumber;
module.exports.printNumberOfNonEmptyLines = printNumberOfNonEmptyLines;
module.exports.removeExtraBlankLines = removeExtraBlankLines;