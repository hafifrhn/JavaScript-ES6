// Template Literals / Template String
// const nama = 'Hafif';
// const umur = 24;
// console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expresssions
// const x = 10;
// console.log(`${(x % 2 == 0) ? `Genap` : `Ganjil`}`);

// HTML Fragments
const mhs = {
  nama : 'Hafif Raihan',
  umur : 24,
  nim : '5181011063',
  email : 'raihanhafif@gmail.com'
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nim">${mhs.nim}</span>
</div>`

console.log(el);
