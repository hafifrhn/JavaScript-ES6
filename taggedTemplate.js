// Tagged Templates
// const nameP = 'Hafif';
// const age = 24;

// function tries(strings, ...values){
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = tries`Halo, my name is ${nameP}, i'm ${age} years.`;
// console.log(str);

// Highlight
const nameP = 'Hafif';
const age = 24;
const email = 'raihanhafif@gmail.com'

function tries(strings, ...values){
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}
const str = tries`Halo, my name is ${nameP}, i'm ${age} years, and my email is ${email}.`;

document.body.innerHTML = str;
