// Execution Context, Hoisting & Scope

// var nama  = 'Hafif Raihan';
// var username = 'hafif_rhn';

// function cetakURL(username){
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

function satu(){
  var nama = "Hafif";
  console.log(nama);
}

function dua(){
  console.log(nama);
}

console.log(nama);
var nama = "Beni";
satu();
dua('Beno');
console.log(nama);

// JavaScript Visualizer
