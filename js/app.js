//  I tried this function but it gave me all the cookies upon page load
//  whereas giving each pokemon its own function only creates that cookie.
//  I will tackle this after the scoring is complete

/*
I tried this function but couldn't figure it out in time.
function setCookie(name) {
    
    Cookies.set(name);
}
const pokemon = [
    'bulbasaur',
    'charmander',
    'squirtle',
    'caterpie',
    'weedle',
    'pidgey',
    'rattata',
    'spearow',
    'ekans',
    'pikachu',
    'sandshrew',
    'nidoranf',
    'nidoranm',
    'vulpix'
]
document.getElementsByClassName('pokeCard').addEventListener('click', setCookie());
*/

function bulbasaur() {
    var item = document.getElementById('bulbasaur');
    Cookies.set('bulbasaur', item);
}
function charmander() {
    var item = document.getElementById('charmander');
    Cookies.set('charmander', item);
}
function squirtle() {
    var item = document.getElementById('squirtle');
    Cookies.set('squirtle', item);
}
function caterpie() {
    var item = document.getElementById('caterpie');
    Cookies.set('caterpie', item);
}
function weedle() {
    var item = document.getElementById('weedle');
    Cookies.set('weedle', item);
}
function pidgey() {
    var item = document.getElementById('pidgey');
    Cookies.set('pidgey', item);
}
function rattata() {
    var item = document.getElementById('rattata');
    Cookies.set('rattata', item);
}
function spearow() {
    var item = document.getElementById('spearow');
    Cookies.set('spearow', item);
}
function ekans() {
    var item = document.getElementById('ekans');
    Cookies.set('ekans', item);
}
function pikachu() {
    var item = document.getElementById('pikachu');
    Cookies.set('pikachu', item);
}
function sandshrew() {
    var item = document.getElementById('sandshrew');
    Cookies.set('sandshrew', item);
}
function nidoranf() {
    var item = document.getElementById('nidoranf');
    Cookies.set('nidoranf', item);
}
function nidoranm() {
    var item = document.getElementById('nidoranm');
    Cookies.set('nidoranm', item);
}
function vulpix() {
    var item = document.getElementById('vulpix');
    Cookies.set('vulpix', item);
}

