// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//   success: movies => console.log(movies)
// });


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){

//   if(xhr.status === 200){
//     if(xhr.readyState === 4){
//       console.log(JSON.parse(xhr.response));
//     }
//   }else{
//     console.log(xhr.responseText);
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();


// Promise >> Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang Asynchronous dimasa yang akan datang
// Janji (Promise) >> (terpenuhi / tidak terpenuhi)
// States (keadaan) >> (fulfilled / rejected / pending) >> jika terpenuhi fulfilled, jika tidak terpenuhi rejected, waktu tunggu sebelum promise terpenuhi yaitu pending
// Callback >> (resolve / reject / finally) >> resolve dibuat jika promise terpenuhi, reject jika promise tidak terpenuhi, dan finally jika waktu tunggu selesai naik terpenuhi atau tidak
// Aksi >> (then / catch) >> then jika promise terpenuhi, catch jika janji tidak terpenuhi


// Contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if(ditepati){
    resolve('Janji telah ditepati!');
  }else{
    reject('Ingkar janji ..');
  }
});

janji1
  .then(response => console.log('OK! : ' + response))
  .catch(response => console.log('NOT OK! : ' + response));
