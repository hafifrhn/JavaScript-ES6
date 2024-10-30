// Spread Operator
// Memecah iterables menjadi single element

// const mhs = ['Hafif', 'Beni', 'Beno'];
//  console.log(...mhs[0]);

// Menggabungkan 2 atau lebih Array
// const mhs = ['Hafif', 'Beni', 'Beno'];
// const dosen = ['Gunawan', 'Gugun', 'Wawan'];
// const orang = [...mhs, 'Aji', ...dosen];
// console.log(orang);

// Meng-copy Array
// const mhs = ['Hafif', 'Beni', 'Beno'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Surya';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for(let i = 0; i < liMhs.length; i++){
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const judul = document.querySelector('.judul');
const huruf = [...judul.textContent].map(h => `<span>${h}</span>`).join('');
judul.innerHTML = huruf;

