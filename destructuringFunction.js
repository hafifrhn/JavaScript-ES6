// Destructuring Function Return Value
// function penjumlahanPerkalian(a, b){
//   return [a + b, a * b];
// }

// const tambah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(tambah);

// const [tambah, kali] = penjumlahanPerkalian(2, 3);
// console.log(tambah);
// console.log(kali);

// function kalkulasi(a, b){
//   return [a + b, a - b, a *  b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah); // Urutan harus sesuai jika dalam Array

// Contoh jika Urutan tidak sesuai, maka gunakan Object
// function kalkulasi(a, b){
//   return{
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b
//   }
// }

// // Destructring Object gunakan Kurung Kurawal, Array Kurung Siku []
// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3) ;
// console.log(kurang);

// Destructuring Function Arguments
const mhs1 = {
  nama: 'Hafif',
  umur: 24,
  email: 'raihanhafif@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 80
  }
}

// function cetakMhs(mhs){
//   return `Halo, nama saya ${mhs.nama}, saya ${mhs.umur} tahun.`;
// }
// console.log(cetakMhs(mhs1));

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
  return `Halo, nama saya ${nama}, saya ${umur} tahun, nilai UAS saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
