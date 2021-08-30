const {dinero, frutas} = require('./fruits');
const cowsay = require('cowsay');
// frutas.forEach(fruta  => {
//     console.count(fruta);
// })

let dialog = {
    text: "I'm a moooodule",
    e: "oO",
    T: "U"
}


console.log(cowsay.say(dialog));