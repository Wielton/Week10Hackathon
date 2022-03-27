/*
User will see homepage where they can pick between 3 different Pokemon
After they make their selection, they will be taken to the battle page
On the battle page, the user will see:
The Pokemon they selected
Their Pokemon health points
Their Pokemon attack options
The enemy Pokemon
The enemy Pokemon health points
The user should be able to select an attack which will "do damage" to the enemy
The computer player should attack after any time the user attacks
Once either Pokemon reaches 0 health points the match is over and a winner is declared
Use cookies to save the state of the battle. If the user exits the browser and comes back, they should be able to resume their battle
Don't over complicate things at first! The Pokemon can all have the same attacks that do the same amount of damage at first. Some pointers to get you going:

You will need to track the following with variables and cookies for saving state
userMaxHealth
userCurrentHealth
computerCurrentHealth
computerMaxHealth
userPokemonSelection
computerPokemonSelection
The process of a battle is as follows:
User clicks attack
Computer health is decreased
if the computer health is <= 0 user wins
Otherwise the computer player attacks
User health decreases
if the user health <= 0 computer wins
Otherwise user clicks attack and the whole thing happens again


There are things you can add to the functionality of this game to make it more complicated.

Each Pokemon could have a unique set of attacks
The attacks could do a range of randomized damage rather than the same amount each time
You could add moves that weaken the opponent or strengthen yourself
You could add items that allow for healing
You could add moves that make the other Pokemon skip their move
You could make each move only be usable a certain amount of times (like the real Pokemon games)
You could add a "catch" mechanism that allows you to throw a Pokeball when the enemy has low health and try to catch it.
*/

//  The pokedex containing all attributes.  The user has selected one of these pokemon.  2nd, 3rd, or mega evolution
//   can only be achieved by getting to the 3rd, 5th, and 8th stages respectively.  *DEGREES OF EVOLUTION VARY BETWEEN EACH POKEMON
//                                                                                  *NOT ALL HAVE 3rd EVOLUTION STAGE
// Retrieve cookies from main page selection
let userSelection1 = Cookies.get('bulbasaur');
let userSelection2 = Cookies.get('charmander');
let userSelection3 = Cookies.get('squirtle');
let userSelection4 = Cookies.get('caterpie');
let userSelection5 = Cookies.get('weedle');
let userSelection6 = Cookies.get('pidgey');
let userSelection7 = Cookies.get('rattata');
let userSelection8 = Cookies.get('spearow');
let userSelection9 = Cookies.get('ekans');
let userSelection10 = Cookies.get('pikachu');
let userSelection11 = Cookies.get('sandshrew');
let userSelection12 = Cookies.get('nidoranf');
let userSelection13 = Cookies.get('nidoranm');
let userSelection14 = Cookies.get('vulpix');
// // Create an array of those cookies
let cookieArray = [userSelection1, userSelection2, userSelection3, userSelection4, userSelection5, userSelection6, userSelection7, userSelection8, userSelection9, userSelection10, userSelection11, userSelection12, userSelection13, userSelection14];

//-------------------------------------------------------------------

//  Attack and defence paramaters for each evolution stage
let poke1stEvoAttacks = {
            attack1: {minAttack: 6,
                        maxAttack: 10},
            attack2: {minAttack: 8,
                        maxAttack: 12},
            attack3: {minAttack: 10,
                        maxAttack: 13},
            special: {minAttack: 13,
                        maxAttack: 16}
};
let poke2ndEvoAttacks = {
            attack1: {minAttack: 9,
                        maxAttack: 13},
            attack2: {minAttack: 11,
                        maxAttack: 15},
            attack3: {minAttack: 14,
                        maxAttack: 17},
            special: {minAttack: 17,
                        maxAttack: 20}
};
let poke3rdEvoAttacks = {
            attack1: {minAttack: 11,
                        maxAttack: 16},
            attack2: {minAttack: 14,
                        maxAttack: 18},
            attack3: {minAttack: 16,
                        maxAttack: 20},
            special: {minAttack: 20,
                        maxAttack: 25}
};
let poke1stEvoDefense = {
            defense: [{minDefense: 2,
                        maxDefense: 6}],
};
let poke2ndEvoDefense = {
            defense: [{minDefense: 4,
                        maxDefense: 9}],
};
let poke3rdEvoDefense = {
            defense: [{minDefense: 8,
                        maxDefense: 15}],
};
//--------------------------------------------------
//  Pokedex with evolutions for future features:

let pokedex = {
    bulbasaur: {
        evoOne: 'Bulbasaur',
        evoTwo: 'Ivysaur',
        evoThree: 'Venosaur',
        type: ['grass', 'poison'],
        weakness: ['fire', 'psychic', 'ice'],
        },
    charmander: {
        evoOne: 'Charmander',
        evoTwo: 'Charmeleom',
        evoThree: 'Charizard',
        type: 'fire',
        weakness: ['water', 'ground', 'rock'],
        },
    squirtle: {
        evoOne: 'Squirtle',
        evoTwo: 'Wartortle',
        evoThree: 'Blastoise',
        type: 'water',
        weakness: ['grass', 'electric'],
        },
    caterpie: {
        evoOne: 'Caterpie',
        evoTwo: 'Metapod',
        evoThree: 'Butterfree',
        type: 'bug',
        weakness: ['fire', 'flying', 'rock'],
        },
    weedle: {
        evoOne: 'Weedle',
        evoTwo: 'Kakuna',
        evoThree: 'Beedrill',
        type: ['bug', 'poison'],
        weakness: ['fire', 'psychic', 'flying', 'rock'],
        },
    pidgey: {
        evoOne: 'Pidgey',
        evoTwo: 'Pidgeotto',
        evoThree: 'Pidgeot',
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    rattata: {
        evoOne: 'Rattata',
        evoTwo: 'Raticate',
        type: 'normal',
        weakness: 'fighting',
        },
    spearow: {
        evoOne: 'Spearow',
        evoTwo: 'Fearow',
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    ekans: {
        evoOne: 'Ekans',
        evoTwo: 'Arbok',
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    pikachu: {
        evoOne: 'Pikachu',
        evoTwo: 'Raichu',
        type: 'electric',
        weakness: 'ground',
        },
    sandshrew: {
        evoOne: 'Sandshrew',
        evoTwo: 'Sandslash',
        type: 'ground',
        weakness: ['water', 'grass', 'ice'],
        },
    nidoranf: {
        evoOne: 'Nidoran',
        evoTwo: 'Nidorina',
        evoThree: 'Nidoqueen',
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    nidoranm: {
        evoOne: 'Nidoran',
        evoTwo: 'Nidorino',
        evoThree: 'Nidoking',
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    vulpix: {
        evoOne: 'Vulpix',
        evoTwo: 'Ninetales',
        type: 'fire',
        weakness: ['water', 'ground', 'rock'],
        }
}

//--------------------------------------------------------------

//  Evil Pokedex

let evilPokedex = {
            marshadow: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/802.png'),
                name: 'Marshadow',
                type: ['fighting', 'ghost'],
                weakness: ['psychic', 'flying'],
            },
            mewtwo: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png'),
                name: 'Mewtwo',
                type: 'pyschic',
                weakness: 'bug',
            },
            giratina: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/487.png'),
                name: 'Giratina',
                type: ['ghost', 'dragon'],
                weakness: 'ice',
            },
            mimikyu: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/778.png'),
                name: 'Mimikyu',
                type: 'ghost',
                weakness: 'psychic',
            },
            yveltal: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/717.png'),
                name: 'Yveltal',
                type: 'flying',
                weakness: ['electric', 'rock', 'ice'],
            },
            darkrai: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/491.png'),
                name: 'Darkrai',
                type: 'ghost',
                weakness: ['bug', 'fighting'],
            },
            spiritomb: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/442.png'),
                name: 'Spiritomb',
                type: 'ghost',
                weakness: 'fire',
            },
            froslass: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/478.png'),
                name: 'Froslass',
                type: 'grass',
                weakness: ['fire', 'psychic', 'ice'],
            },
            gourgeist: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/711.png'),
                name: 'Gourgeist',
                type: ['ghost', 'ice'],
                weakness: ['fire', 'rock'],
            },
            drifloon: {
                img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/425.png'),
                name: 'Drifloon',
                type: ['ghost', 'flying'],
                weakness: ['electric', 'rock', 'ice'],
            }
}
//--------------------------------------------------------------
const keys = Object.keys(evilPokedex);
const randomBoss = keys[Math.floor(Math.random() * keys.length)];
const boss = evilPokedex[randomBoss];


// Functions

//  Reselect Pokemon and remove the cookie
function reselect() {
    //  Cookies.remove(userSelection);
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i] = userSelection1) {
                Cookies.remove('bulbasaur');
                } else if (cookieArray[i] = userSelection2) {
                Cookies.remove('charmander');
                } else if (cookieArray[i] = userSelection3) {
                Cookies.remove('squirtle');
                }else if (cookieArray[i] = userSelection4) {
                    Cookies.remove('caterpie');
                } else if (cookieArray[i] = userSelection5) {
                    Cookies.remove('weedle');
                }else if (cookieArray[i] = userSelection6) {
                    Cookies.remove('pidgey');
                } else if (cookieArray[i] = userSelection7) {
                    Cookies.remove('rattata');
                }else if (cookieArray[i] = userSelection8) {
                    Cookies.remove('spearow');
                } else if (cookieArray[i] = userSelection9) {
                    Cookies.remove('ekans');
                }else if (cookieArray[i] = userSelection10) {
                    Cookies.remove('pikachu');
                } else if (cookieArray[i] = userSelection11) {
                    Cookies.remove('sandshrew');
                }else if (cookieArray[i] = userSelection12) {
                    Cookies.remove('nidoranf');
                } else if (cookieArray[i] = userSelection13) {
                    Cookies.remove('nidoranm');
                }else if (cookieArray[i] = userSelection14) {
                    Cookies.remove('vulpix');
                }
        }window.location.href='/index.html';
    }

//  Displays pokemon chosen in header and scoreboard

for (let i = 0; i < cookieArray.length; i++) {
    let pokeName = document.getElementById('choiceName');
    let scoreboardName = document.getElementById('scoreUser');

        if (userSelection1) {
            pokeName.innerText='Bulbasaur';
            scoreboardName.innerText='Bulbasaur';
            document.body.style.backgroundColor='#383838';
        } else if (userSelection2) {
            pokeName.innerText='Charmander';
            scoreboardName.innerText='Charmander';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection3) {
            pokeName.innerText='Squirtle';
            scoreboardName.innerText='Squirtle';
            document.body.style.backgroundColor='#383838';
        } else if (userSelection4) {
            pokeName.innerText='Caterpie';
            scoreboardName.innerText='Caterpie';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection5) {
            pokeName.innerText='Weedle';
            scoreboardName.innerText='Weedle';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection6) {
            pokeName.innerText='Pidgey';
            scoreboardName.innerText='Pidgey';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection7) {
            pokeName.innerText='Rattata';
            scoreboardName.innerText='Rattata';
            document.body.style.backgroundColor='#383838';
        } else if (userSelection8) {
            pokeName.innerText='Spearow';
            scoreboardName.innerText='Spearow';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection9) {
            pokeName.innerText='Ekans';
            scoreboardName.innerText='Ekans';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection10) {
            pokeName.innerText='Pikachu';
            scoreboardName.innerText='Pikachu';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection11) {
            pokeName.innerText='Sandshrew';
            scoreboardName.innerText='Sandshrew';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection12) {
            pokeName.innerText='Nidoranf';
            scoreboardName.innerText='Nidoranf';
            document.body.style.backgroundColor='#383838';
        }else if (userSelection13) {
            pokeName.innerText='Nidoranm';
            scoreboardName.innerText='Nidoranm';
            document.body.style.backgroundColor='#383838';
        } else if (userSelection14) {
            pokeName.innerText='Vulpix';
            scoreboardName.innerText='Vulpix';
            document.body.style.backgroundColor='#383838';
        }
}



// Displays boss
document.getElementById('bossCardContainer', 'scoreBoss', 'headerBoss').addEventListener("load", bossDisplay());
function bossDisplay(){
    //let boss = document.getElementById('bossCard');
    let bossImg = document.getElementById('bossImg');
    let bossName = document.getElementById('bossName');
    let bossScore = document.getElementById('scoreBoss');
    let bossHeader = document.getElementById('headerBoss');
    bossImg.setAttribute('src', boss.img);
    bossName.innerText=boss.name;
    bossScore.innerText=boss.name;
    bossHeader.innerText=boss.name;
    }
    


// for (let i = 0; i < evilPokedex.length; i++){
//     let bossImages = document.getElementById('bossCard').querySelector('img');
//     if (evilPokedex[0]){
//         bossImages.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/802.png");
//     }console.log(bossImages[0]);
// }


// document.getElementsByClassName('pokeCard').addEventListener('click', function(){

//     document.getElementById('bossCard').querySelector('img').setAttribute('src', )
// })


// let computerHealth = Hp;
// let userCurrentHealth = userMaxHealth - oppAttackPoints;
















// let attackHigh = 30;
// let damageLow = 25;
// let damageHigh = 10;
//
let userHealth = 200;
let oppHealth = 200;
let oppDisplayHealth = document.getElementById('bossHP');
let userDisplayHealth = document.getElementById('userHP');
oppDisplayHealth.innerText=oppHealth;
userDisplayHealth.innerText=userHealth;
// if the computer health is <= 0 user wins
// Otherwise the computer player attacks
// User health decreases
// if the user health <= 0 computer wins
// Otherwise user clicks attack and the whole thing happens again;



function userAttack(){


}

function oppAttack(){

    userHealth = (userHealth - oppHit);
    userDisplayHealth.innerText=userHealth;
}


function attackOne(){
    let hit = Math.floor(Math.random() * 10) + 1;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
};

function attackTwo(){
    let hit = Math.floor(Math.random() * 10) + 10;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
};
function attackThree(){
    let hit = Math.floor(Math.random() * 10) + 20;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
};
function attackFour(){
    let hit = Math.floor(Math.random() * 10) + 30;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
};


// function attack1(){

//     if (oppHealth != 0) {
//         userAttack();
//          // return attackStat();

//     } else {
//         console.log('Game Over')
//     }
//     if (userHealth != 0) {
//         oppAttack();
//     } else {
//         console.log('Game Over')
//     }
// }
// }  This feels like GhostWriter
//lol yes
// just find me on messenger if you

// kyle and I have worked together sometimes thru that
// ok we can make a group chat if Jolade has messenger?
// I am samantha ellen on there
// sent a message
// let oppNewHealth = (oppCurrentHealth - attackLow);
//         oppDisplayHealth.innerText=oppNewHealth;
//         console.log(oppNewHealth);

// var process_attack = function (attacker, attackee) {

//     // Reset our Attack Button
//     attackBTN.prop('disabled', false).text('Attack');

//     // Generate a new damage value each time
//     damage = _.random(5, 20);

//     // Lower the attackee's health
//     attackee.health -= damage;


//attack 1 function
//     userCurrentHealth -= damage1;


// //attack 2 function
//     userCurrentHealth -= damage2;
//     oppCurrenthealth -= attack2;

// display game status

// function attackStat() {
//     if (oppDisplayHealth <= 0, userDisplayHealth > 0) {
//     document.getElementById("status").innerText = "you win!";
//     } else if (userDisplayHealth <= 0, oppDisplayHealth > 0) {
//     document.getElementById("status").innerText = "you lose!";
//     } else {
//     document.getElementById("status").innerText = "attack again!";
//     }
// }

// attackStat();