// Function Expression
// const tampilNama = function(nama){
//   return `Halo, ${nama}`;
// }
// console.log(tampilNama('Hafif'));

// Arrow Function
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Hafif', 'Pagi'));

// Implisit Return
// const tampilNama = nama => `Halo ${nama}`;
// console.log('Hafif');

// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

let mahasiswa = ['Hafif Raihan', 'Beni Subeni', 'Beno'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);

