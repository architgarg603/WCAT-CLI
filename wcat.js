const { help } = require("./commands/help");
const { printNumberOfNonEmptyLines, printNumber, removeExtraBlankLines } = require("./commands/lineBreak");
const { printHelper } = require("./commands/printContent");

let input = process.argv.slice(2);
let command = input[0];

switch (command) {
    case "-s":
        removeExtraBlankLines(input)
        break;
    case "-n":
        printNumber(input);
        break;
    case "-b":
        printNumberOfNonEmptyLines(input);
        break;
    case "help":
        help();
        break;
    default:
        printHelper(input);
        break;
}

// 1- node wcat.js filepath => displays content of the file in the terminal 
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
// 3- node wcat.js -s filepath => convert big line breaks into a singular line break
// 4- node wcat -n filepath => give numbering to all the lines 
// 5- node wcat -b filepath => give numbering to non-empty lines
// We can mix and match the options.
