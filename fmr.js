// Filter, Map dan Reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Contoh : Angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//   if(angka[i] >= 3){
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// Map
// Contoh : Kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// Reduce
// Contoh : Jumlahkan seluruh elemen pada Array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Setelah currentValue ada nilai 0, bisa ditulis atau tidak, defaultnya jika tidak ditulis = 0. Bisa digunakan untuk history nilai user
// console.log(newAngka);

// Method Chaining / Method Berantai
// Contoh : Angka > 5, Hasil Kalikan 3, lalu Jumlahkan
const hasil = angka.filter(a => a > 5)
  .map(a => a * 3)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
