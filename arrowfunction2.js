// This pada Arrow Function

// Constructor function
// const Mahasiswa = function(){
//   this.nama = 'Hafif';
//   this.umur = 24;
//   this.sayHello = function(){
//     console.log(`Halo nama saya ${this.nama}, saya umur ${this.umur} tahun,`);
//   }
// }
// const hafif = new Mahasiswa();

// Arrow Function
const box = document.querySelector('.box');
box.addEventListener('click', function(){
  let satu = 'size';
  let dua = 'caption';

  if(this.classList.contains(satu)){
    [satu, dua] = [dua,satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
