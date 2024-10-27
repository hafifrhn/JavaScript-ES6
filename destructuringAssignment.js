// Destructuring Assignment / Variable
// Array menggunakan Kurung Siku [], Object menggunakan Kurung Kurawal {}

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Hafif'];

// const [salam, satu, dua, nama] = perkenalan;

// Skipping Item
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// Swap Item
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return Value pada Function
// function coba(){
//   return[1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama : 'Hafif',
//   umur : 24
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa Deklarasi Object
// ({nama, umur} = { nama : 'Hafif', umur : 24 });
// console.log(nama);

// Assignment ke Variabel Baru
// const mhs = {
//   nama : 'Hafif',
//   umur : 24
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

//Memberikan Default Value
// const mhs = {
//   nama : 'Hafif',
//   umur : 24,
//   email : 'raihanhafif@gmail.com'
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// Memberi Nilai Default + Assign ke Variabel Baru
// const mhs = {
//   nama : 'Hafif',
//   umur : 24,
//   email : 'raihanhafif@gmail.com'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama : 'Hafif',
//   umur : 24,
//   email : 'raihanhafif@gmail.com'
// }

// const {nama, ...value} = mhs;
// console.log(value);

// Mengambil Field pada Object, setelah dikirim sebagai paramater untuk Function
const mhs = {
  id: 123,
  nama : 'Hafif',
  umur : 24,
  email : 'raihanhafif@gmail.com'
}
function getIMhs({id}){
  return id;
}
console.log(getIMhs(mhs));

