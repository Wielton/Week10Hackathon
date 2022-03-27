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
function reselect() {
    //  Cookies.remove(userSelection);
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i] = userSelection1) {
                Cookies.remove('Latios');
                } else if (cookieArray[i] = userSelection2) {
                Cookies.remove('Charizard');
                } else if (cookieArray[i] = userSelection3) {
                Cookies.remove('Pikachu');
                }
        }window.location.href='/index.html';
    }
// Retrieve cookies from main page selection
let userSelection1 = Cookies.get('Latios');
let userSelection2 = Cookies.get('Charizard');
let userSelection3 = Cookies.get('Pikachu');
// Create an array of those cookies
let cookieArray = [userSelection1, userSelection2, userSelection3];

//  Displays pokemon chosen
for (let n = 0; n < cookieArray.length; n++) {
        let pokeChoice = document.getElementById('choiceName');
        if (cookieArray[n] = userSelection1) {
            pokeChoice.innerText='Latios';
            document.body.style.backgroundColor='#383838';
        } else if (cookieArray[n] = userSelection2) {
            pokeChoice.innerText='Charizard';
            document.body.style.backgroundColor='#383838';;
        }else if (cookieArray[n] = userSelection3) {
            pokeChoice.innerText='Pikachu';
            document.body.style.backgroundColor='#383838';;
        }}
// Enemy
// let computerHealth = Hp;
// let userCurrentHealth = userMaxHealth - oppAttackPoints;                














// let userDisplayHealth = document.getElementById('userHP');
// userDisplayHealth.innerText=('userCurrentHealth');

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

function attackStat() {
    if (oppDisplayHealth <= 0, userDisplayHealth > 0) {
    document.getElementById("status").innerText = "you win!";
    } else if (userDisplayHealth <= 0, oppDisplayHealth > 0) {
    document.getElementById("status").innerText = "you lose!";
    } else {
    document.getElementById("status").innerText = "attack again!";
    }
}

attackStat();