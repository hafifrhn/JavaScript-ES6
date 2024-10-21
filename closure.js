// Closure
// Untuk membuat Function Factories
// Untuk membuat Private Method

// function init(){
//   let nama = 'Hafif';
//   function tampilNama(){
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();


// Function Factories
// function ucapkanSalam(waktu){
//   return function(nama){
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu Senin terusss!!!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatPagi);


let add = (function(){
  let counter = 0;
  return function(){
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
