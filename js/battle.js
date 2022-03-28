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
//  need to finish adding in 2nd and 3rd evo images
let pokedex = {
    bulbasaur: {
        evoOne: {
            name: 'Bulbasaur',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png')
            },
        evoTwo: {
            name: 'Ivysaur',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png')
            },
        evoThree: {
            name: 'Venusaur',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png')
            },
        type: ['grass', 'poison'],
        weakness: ['fire', 'psychic', 'ice'],
        },
    charmander: {
        evoOne: {
            name: 'Charmander',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png')
            },
        evoTwo: {
            name: 'Charmeleom',
            img: ('')
            },
        evoThree: {
            name: 'Charizard',
            img: ('')
            },
        type: 'fire',
        weakness: ['water', 'ground', 'rock'],
        },
    squirtle: {
        evoOne: {
            name: 'Squirtle',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png')
            },
        evoTwo: {
            name: 'Wartortle',
            img: ('')
            },
        evoThree: {
            name: 'Blastoise',
            img: ('')
            },
        type: 'water',
        weakness: ['grass', 'electric'],
        },
    caterpie: {
        evoOne: {
            name: 'Caterpie',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png')
            },
        evoTwo: {
            name: 'Metapod',
            img: ('')
            },
        evoThree: {
            name: 'Butterfree',
            img: (''),
            },
        type: 'bug',
        weakness: ['fire', 'flying', 'rock'],
        },
    weedle: {
        evoOne: {
            name: 'Weedle',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png')
            },
        evoTwo: {
            name: 'Kakuna',
            img: ('')
            },
        evoThree: {
            name: 'Beedrill',
            img: ('')
            },
        type: ['bug', 'poison'],
        weakness: ['fire', 'psychic', 'flying', 'rock'],
        },
    pidgey: {
        evoOne: {
            name: 'Pidgey',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png')
            },
        evoTwo: {
            name: 'Pidgeotto',
            img: ('')
            },
        evoThree: {
            name: 'Pidgeot',
            img: ('')
            },
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    rattata: {
        evoOne: {
            name: 'Rattata',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png')
            },
        evoTwo: {
            name: 'Raticate',
            img: ('')
            },
        type: 'normal',
        weakness: 'fighting',
        },
    spearow: {
        evoOne: {
            name: 'Spearow',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png')
            },
        evoTwo: {
            name: 'Fearow',
            img: ('')
            },
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    ekans: {
        evoOne: {
            name: 'Ekans',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png')
            },
        evoTwo: {
            name: 'Arbok',
            img: ('')
            },
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    pikachu: {
        evoOne: {
            name: 'Pikachu',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png')
            },
        evoTwo: {
            name: 'Raichu',
            img: ('')
            },
        type: 'electric',
        weakness: 'ground',
        },
    sandshrew: {
        evoOne: {
            name: 'Sandshrew',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png')
            },
        evoTwo: {
            name: 'Sandslash',
            img: ('')
            },
        type: 'ground',
        weakness: ['water', 'grass', 'ice'],
        },
    nidoranf: {
        evoOne: {
            name: 'Nidoran',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png')
            },
        evoTwo: 'Nidorina',
        evoThree: 'Nidoqueen',
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    nidoranm: {
        evoOne: {
            name: 'Nidoran',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png')
            },
        evoTwo: 'Nidorino',
        evoThree: 'Nidoking',
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    vulpix: {
        evoOne: {
            name: 'Vulpix',
            img: ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png')
            },
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
            if (userSelection1) {
                Cookies.remove('bulbasaur');
                } else if (userSelection2) {
                Cookies.remove('charmander');
                } else if (userSelection3) {
                Cookies.remove('squirtle');
                }else if (userSelection4) {
                    Cookies.remove('caterpie');
                } else if (userSelection5) {
                    Cookies.remove('weedle');
                }else if (userSelection6) {
                    Cookies.remove('pidgey');
                } else if (userSelection7) {
                    Cookies.remove('rattata');
                }else if (userSelection8) {
                    Cookies.remove('spearow');
                } else if (userSelection9) {
                    Cookies.remove('ekans');
                }else if (userSelection10) {
                    Cookies.remove('pikachu');
                } else if (userSelection11) {
                    Cookies.remove('sandshrew');
                }else if (userSelection12) {
                    Cookies.remove('nidoranf');
                } else if (userSelection13) {
                    Cookies.remove('nidoranm');
                }else if (userSelection14) {
                    Cookies.remove('vulpix');
                }
        }window.location.href='/index.html';
    }

//  Displays pokemon chosen in header and scoreboard
/*
document.getElementById('choiceName','scoreUser','pokeCard')
function pokeDisplay(){

}
*/
for (let i = 0; i < cookieArray.length; i++) {
    let pokeName = document.getElementById('choiceName');
    let scoreboardName = document.getElementById('scoreUser');
    let pokeCardImg = document.getElementById('pokeCard');
        if (userSelection1) {
            pokeName.innerText='Bulbasaur';
            scoreboardName.innerText='Bulbasaur';
            pokeCardImg.setAttribute('src', pokedex.bulbasaur.evoOne.img);
            document.body.style.backgroundColor='#383838';
        } else if (userSelection2) {
            pokeName.innerText='Charmander';
            scoreboardName.innerText='Charmander';
            pokeCardImg.setAttribute('src', pokedex.charmander.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection3) {
            pokeName.innerText='Squirtle';
            scoreboardName.innerText='Squirtle';
            pokeCardImg.setAttribute('src', pokedex.squirtle.evoOne.img);
            document.body.style.backgroundColor='#383838';
        } else if (userSelection4) {
            pokeName.innerText='Caterpie';
            scoreboardName.innerText='Caterpie';
            pokeCardImg.setAttribute('src', pokedex.caterpie.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection5) {
            pokeName.innerText='Weedle';
            scoreboardName.innerText='Weedle';
            pokeCardImg.setAttribute('src', pokedex.weedle.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection6) {
            pokeName.innerText='Pidgey';
            scoreboardName.innerText='Pidgey';
            pokeCardImg.setAttribute('src', pokedex.pidgey.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection7) {
            pokeName.innerText='Rattata';
            scoreboardName.innerText='Rattata';
            pokeCardImg.setAttribute('src', pokedex.rattata.evoOne.img);
            document.body.style.backgroundColor='#383838';
        } else if (userSelection8) {
            pokeName.innerText='Spearow';
            scoreboardName.innerText='Spearow';
            pokeCardImg.setAttribute('src', pokedex.spearow.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection9) {
            pokeName.innerText='Ekans';
            scoreboardName.innerText='Ekans';
            pokeCardImg.setAttribute('src', pokedex.ekans.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection10) {
            pokeName.innerText='Pikachu';
            scoreboardName.innerText='Pikachu';
            pokeCardImg.setAttribute('src', pokedex.pikachu.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection11) {
            pokeName.innerText='Sandshrew';
            scoreboardName.innerText='Sandshrew';
            pokeCardImg.setAttribute('src', pokedex.sandshrew.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection12) {
            pokeName.innerText='Nidoranf';
            scoreboardName.innerText='Nidoranf';
            pokeCardImg.setAttribute('src', pokedex.nidoranf.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }else if (userSelection13) {
            pokeName.innerText='Nidoranm';
            scoreboardName.innerText='Nidoranm';
            pokeCardImg.setAttribute('src', pokedex.nidoranm.evoOne.img);
            document.body.style.backgroundColor='#383838';
        } else if (userSelection14) {
            pokeName.innerText='Vulpix';
            scoreboardName.innerText='Vulpix';
            pokeCardImg.setAttribute('src', pokedex.vulpix.evoOne.img);
            document.body.style.backgroundColor='#383838';
        }
}



// Displays boss
document.getElementById('bossDiv', 'scoreBoss', 'headerBoss').addEventListener("load", bossDisplay());
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








function oppAttackOne(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 1;
    console.log(hit);
    userHealth = (userHealth - hit);
    userDisplayHealth.innerText=userHealth;
    
}
function oppAttackTwo(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 10;
    console.log(hit);
    userHealth = (userHealth - hit);
    userDisplayHealth.innerText=userHealth;
}
function oppAttackThree(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 20;
    console.log(hit);
    userHealth = (userHealth - hit);
    userDisplayHealth.innerText=userHealth;
}
function oppAttackFour(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 30;
    console.log(hit);
    userHealth = (userHealth - hit);
    userDisplayHealth.innerText=userHealth;
}

function attackOne(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 1;
    console.log(hit);
    
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
    oppAttackOne();
    healthCheck();
}

function attackTwo(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 10;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
    oppAttackTwo();
    healthCheck();
}
function attackThree(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 20;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
    oppAttackThree();
    healthCheck();
}
function attackFour(){
    healthCheck();
    let hit = Math.floor(Math.random() * 10) + 30;
    console.log(hit);
    oppHealth = (oppHealth - hit);
    oppDisplayHealth.innerText=oppHealth;
    oppAttackFour();
    healthCheck();
}
function healthCheck(){
    let status = document.getElementById('gameStatus');
    if (oppHealth <= 0){
        status.innerText='You Win!';
    }else if (oppHealth >= 1){
        status.innerText='Attack!';
    }else if (userHealth <= 0){
        status.innerText='Sorry, you lost!';
    }
}



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