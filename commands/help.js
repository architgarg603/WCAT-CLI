function help(){
    console.log(`
    List of Commands:
    node wcat.js <filepath>
    node wcat.js <filepath 1> <filepath 2> <filepath 3>
    node wcat.js -s <filepath>
    node wcat -n <filepath>
    node wcat -b <filepath> 
    `);
}

module.exports.help = help;