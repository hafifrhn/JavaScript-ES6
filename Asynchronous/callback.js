// Callback
// Synchronous Callback

// function halo(nama){
//   alert(`Halo, ${nama}`);
// }

// function tampilPesan(callback){
//   const nama = prompt('Masukkan Nama : ');
//   callback(nama);
// }

// tampilPesan(nama => alert(`Halo, ${nama}`));


// const mhs = [
//   {
//     "nama": "Hafif",
//     "nim": "5181011063",
//     "email": "raihanhafif@gmail.com",
//     "jurusan": "Teknik Komputer",
//     "idDosenWali": 1
//   },
//   {
//     "nama": "Gugun",
//     "nim": "5181011084",
//     "email": "gugun25@gmail.com",
//     "jurusan": "Teknik Komputer",
//     "idDosenWali": 2
//   },
//   {
//     "nama": "Wawan",
//     "nim": "5181011089",
//     "email": "wawan17@gmail.com",
//     "jurusan": "Teknik Komputer",
//     "idDosenWali": 3
//   }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//   for (let i = 0; i < 1000000; i++){
//     let date = new Date();
//   }
//   console.log(m.nama)
// });
// console.log('selesai');


// Asynchronous Callback
// function getDataMahasiswa(url, success, error){
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         success(xhr.response);
//       }else if(xhr.status === 404){
//         error();
//       }
//     }
//   }
//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('Asynchronous/mahasiswa.json', results => {
//   // console.log(JSON.parse(results));
//   const mhs = JSON.parse(results);
//   mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
  url: 'Asynchronous/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach(m => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  }
});
console.log('selesai');
