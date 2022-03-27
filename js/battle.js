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
//  1st Evolution Pokedex

let pokedex1stEvo = {
    bulbasaur: {
        type: ['grass', 'poison'],
        weakness: ['fire', 'psychic', 'ice'],
        },
    charmander: {
        type: 'fire',
        weakness: ['water', 'ground', 'rock'],
        },
    squirtle: {
        type: 'water',
        weakness: ['grass', 'electric'],
        },
    caterpie: {
        type: 'bug',
        weakness: ['fire', 'flying', 'rock'],
        },
    weedle: {
        type: ['bug', 'poison'],
        weakness: ['fire', 'psychic', 'flying', 'rock'],
        },
    pidgey: {
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    rattata: {
        type: 'normal',
        weakness: 'fighting',
        },
    spearow: {
        type: ['normal', 'flying'],
        weakness: ['electric', 'ice', 'rock'],
        },
    ekans: {
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    pikachu: {
        type: 'electric',
        weakness: 'ground',
        },
    sandshrew: {
        type: 'ground',
        weakness: ['water', 'grass', 'ice'],
        },
    nidoranf: {
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    nidoranm: {
        type: 'poison',
        weakness: ['psychic', 'ground'],
        },
    vulpix: {
        type: 'fire',
        weakness: ['water', 'ground', 'rock'],
        }
}
//----------------------------------------------------------

//  2nd Evolution Pokedex

let pokedex2ndEvo = {
        ivysaur: {
            type: ['grass', 'poison'],
            weakness: ['fire', 'psychic', 'ice'],
            },
        charmeleon: {
            type: 'fire',
            weakness: ['water', 'ground', 'rock'],
            },
        wartotle: {
            type: 'water',
            weakness: ['grass', 'electric'],
            },
        metapod: {
            type: 'bug',
            weakness: ['fire', 'flying', 'rock'],
            },
        kakuna: {
            type: ['bug', 'poison'],
            weakness: ['fire', 'psychic', 'flying', 'rock'],
            },
        pidgeotto: {
            type: ['normal', 'flying'],
            weakness: ['electric', 'ice', 'rock'],
            },
        raticate: {
            type: 'normal',
            weakness: 'fighting',
            },
        fearow: {
            type: ['normal', 'flying'],
            weakness: ['electric', 'ice', 'rock'],
            },
        arbok: {
            type: 'poison',
            weakness: ['psychic', 'ground'],
            },
        raichu: {
            type: 'electric',
            weakness: 'ground',
            },
        sandlash: {
            type: 'ground',
            weakness: ['water', 'grass', 'ice'],
            },
        nidorino: {
            type: 'poison',
            weakness: ['psychic', 'ground'],
            },
        nidorina: {
            type: 'poison',
            weakness: ['psychic', 'ground'],
            },
        ninetales: {
            type: 'fire',
            weakness: ['water', 'ground', 'rock'],
            },
}
//------------------------------------------------------------------

// 3rd Evolution Pokedex

let pokedex3rdEvo = {
            venusaur: {
                type: ['grass', 'poison'],
                weakness: ['fire', 'psychic', 'ice'],
            },
            charizard: {
                type: 'fire',
                weakness: ['water', 'ground', 'rock'],
            },
            blastoise: {
                type: 'water',
                weakness: ['grass', 'electric'],
            },
            butterfree: {
                type: 'bug',
                weakness: ['fire', 'flying', 'rock'],
            },
            beedrill: {
                type: ['bug', 'poison'],
                weakness: ['fire', 'psychic', 'flying', 'rock'],
            },
            pidgeot: {
                type: ['normal', 'flying'],
                weakness: ['electric', 'ice', 'rock'],
            },
            nidoking: {
                type: 'poison',
                weakness: ['psychic', 'ground'],
            },
            nidoqueen: {
                type: 'poison',
                weakness: ['psychic', 'ground'],
            },
}
//--------------------------------------------------------------

//  Evil Pokedex

let evilPokedex = {
            marshadow: {
                type: ['fighting', 'ghost'],
                weakness: ['psychic', 'flying'],
            },
            mewtwo: {
                type: 'pyschic',
                weakness: 'bug',
            },
            giratina: {
                type: ['ghost', 'dragon'],
                weakness: 'ice',
            },
            mimikyu: {
                type: 'ghost',
                weakness: 'psychic',
            },
            yveltal: {
                type: 'flying',
                weakness: ['electric', 'rock', 'ice'],
            },
            darkrai: {
                type: 'ghost',
                weakness: ['bug', 'fighting'],
            },
            spiritomb: {
                type: 'ghost',
                weakness: 'fire',
            },
            froslass: {
                type: 'grass',
                weakness: ['fire', 'psychic', 'ice'],
            },
            gourgeist: {
                type: ['ghost', 'ice'],
                weakness: ['fire', 'rock'],
            },
            drifloon: {
                type: ['ghost', 'flying'],
                weakness: ['electric', 'rock', 'ice'],
            },
}
//--------------------------------------------------------------


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


// Retrieve cookies from main page selection
var userSelection1 = Cookies.get('bulbasaur');
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
var cookieArray = [userSelection1, userSelection2, userSelection3, userSelection4, userSelection5, userSelection6, userSelection7, userSelection8, userSelection9, userSelection10, userSelection11, userSelection12, userSelection13, userSelection14];
let pokeName = document.getElementById('choiceName');
//  Displays pokemon chosen
for (let n = 0; n < cookieArray.length; n++) {
        
        if (cookieArray[n] = userSelection1) {
            pokeName.innerText='Bulbasaur';
            document.body.style.backgroundColor='#383838';
        } else if (cookieArray[n] = userSelection2) {
            pokeName.innerText='Charmander';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection3) {
            pokeName.innerText='Squirtle';
            document.body.style.backgroundColor='#383838';
        } else if (cookieArray[n] = userSelection4) {
            pokeName.innerText='Caterpie';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection5) {
            pokeName.innerText='Weedle';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection6) {
            pokeName.innerText='Pidgey';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection7) {
            pokeName.innerText='Rattata';
            document.body.style.backgroundColor='#383838';
        } else if (cookieArray[n] = userSelection8) {
            pokeName.innerText='Spearow';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection9) {
            pokeName.innerText='Ekans';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection10) {
            pokeName.innerText='Pikachu';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection11) {
            pokeName.innerText='Sandshrew';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection12) {
            pokeName.innerText='Nidoranf';
            document.body.style.backgroundColor='#383838';
        }else if (cookieArray[n] = userSelection13) {
            pokeName.innerText='Nidoranm';
            document.body.style.backgroundColor='#383838';
        } else if (cookieArray[n] = userSelection14) {
            pokeName.innerText='Vulpix';
            document.body.style.backgroundColor='#383838';
        }
    }
// Enemy
// let computerHealth = Hp;
// let userCurrentHealth = userMaxHealth - oppAttackPoints;
















// let attackHigh = 30;
// let damageLow = 25;
// let damageHigh = 10;
//
let userHealth = 100;
let oppHealth = 100;
let oppHit = 15;
let attack = 15;
let oppDisplayHealth = document.getElementById('oppHP');
let userDisplayHealth = document.getElementById('userHP');
oppDisplayHealth.innerText=oppHealth;
userDisplayHealth.innerText=userHealth;
// if the computer health is <= 0 user wins
// Otherwise the computer player attacks
// User health decreases
// if the user health <= 0 computer wins
// Otherwise user clicks attack and the whole thing happens again;
function userAttack(){

    oppHealth = (oppHealth - attack);
    oppDisplayHealth.innerText=oppHealth;
}

function oppAttack(){

    userHealth = (userHealth - oppHit);
    userDisplayHealth.innerText=userHealth;
}

function attack1(){

    if (oppHealth != 0) {
        userAttack();
         // return attackStat();

    } else {
        console.log('Game Over')
    }
    if (userHealth != 0) {
        oppAttack();
    } else {
        console.log('Game Over')
    }
}
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