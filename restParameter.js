// Rest Parameter
// function jumlah(...angka){
  // let total = 0;
  // for(const a of angka){
  //   total += a;
  // }
  // return total;

  // return angka.reduce((a, b) => a+ b); // Higher Order Function dengan Reduce
// }
// console.log(jumlah(1, 2, 3, 4, 5));

// Array Destructuring
// const kel1 = ['Hafif', 'Beni', 'Beno', 'Gunawan', 'Gugun'];
// const [ketua, wakil, ...anggota] = kel1;
// console.log(ketua);

// Object Destructuring
// const team = {
//   pm : 'Hafif',
//   fEnd1 : 'Beni',
//   fEnd2 : 'Gunawan',
//   bEnd : 'Beno',
//   ux : 'Gugun',
//   dOps : 'Wawan'
// }
// const{pm, ...myTeam} = team;
// console.log(pm);

// Filtering
function filterBy(type, ...values){
  return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'Hafif', false, 10, true, 'Gugun')); // Number, String, Boolean

