// for..of
// Array
// const mhs = ['Hafif', 'Beni', 'Beno'];

// for(let i = 0; i < mhs.length; i++){
//   console.log(mhs[i]);
// }

// mhs. forEach(m => console.log(m));

// for(const m of mhs){
//   console.log(m);
// }

// String
// const nama = 'Hafif';
// for(const n of nama){
//   console.log(n);
// }

// const mhs = ['Hafif', 'Beni', 'Beno'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for(const[i, m] of mhs.entries()){
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// };

// Node List
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));

// for(n of liNama){
//   console.log(n.innerHTML);
// }

// Arguments
// function jumAngka(){
//   let jumlah = 0;
//   for (a of arguments){
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: 'Hafif',
  umur: 24,
  email: 'raihanhafif@gmail.com'
}

for(m in mhs){
  console.log(mhs[m]); // Jika ingin mengambil value nya (bukan properti), panggil seperti (mhs[m]) => [m] sebagai index dari object. Jika (m) memanggil index
  // index = nama, umur, email
  // value = Hafif, 24, raihanhafif@gmail.com
}