const rl = require("readline-sync");
// juego uno 
var  deck = [];
var Colors = ["Yellow","Blue", "Green","Red"];
var type = ["Comun","Especial","Comodin"];
var card = {
    color: null, // el color puede ser amarillo, azul, verde y rojo
    number: null,  // del 0 al 9
    tipe: null // comun, especial y comodin
};

for (var cColor = 0; cColor < Colors.length; cColor++ ){
    for (var cNumber= 0; cNumber < 10; cNumber++){
        deck.push({Color: Colors[cColor], Number: cNumber, type:"comun"});
    }
    for (var cNumber1= 1; cNumber1 < 10; cNumber1++){
        deck.push({Color: Colors[cColor], Number1: cNumber1, type:"comun"});
    }

deck.push({color: Colors [cColor],number:"+2", type:"especial"});
deck.push({color: Colors [cColor],number:"+2", type:"especial"});
deck.push({color: Colors [cColor],number:"B", type:"especial"});
deck.push({color: Colors [cColor],number:"B", type:"especial"});
deck.push({color: Colors [cColor],number:"R", type:"especial"});
deck.push({color: Colors [cColor],number:"R", type:"especial"});
}
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"+4", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});
deck.push({color: null,number:"CC", type:"Comodin"});

//console.log(JSON.stringify(deck));

const players = rl.question("cuantos jugadores seran?",{})
const totalCards = players * 7;
//repartir 7 cartas por jugador 
// recorro al total de tarjetas (total de tarjetas por jugador = tarjetas/7 * jugador)
//arreglo por cada jugador 
var cardsPlayers ={};

for(var cTCards = 0; cTCards < 7; cTCards++){
    for(var cPlayers = 0; cPlayers < players;cPlayers++){
        if(!cardsPlayers["player"+cPlayers]){
        cardsPlayers["player"+cPlayers] = [];
        }
       // console.log("players:", cPlayers);
        cardsPlayers["player"+cPlayers].push(deck[cTCards]);
        //console.log(cardsPlayers)
    }
}
console.log(cardsPlayers)
// npm i  <modulo>  o npm install <modulo> sirve para iniziaclizar un proyecto de node