// Looping
// const mhs = [
//   {
//     name: 'Hafif Raihan',
//     email: 'raihanhafif@gmail.com'
//   },
//   {
//     name: 'Beni',
//     email: 'benisubeni@gmail.com'
//   },
//   {
//     name: 'Beno',
//     email: 'beno.subeno@gmail.com'
//   }
// ];

// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//     <li>${m.name}</li>
//     <li>${m.email}</li>
//   </ul>`).join('')}
// </div>`;

// Conditionals
// Ternary
// const song = {
//   title: 'All of Me',
//   singer: 'John Legend',
//   feat: 'Lindsey Stirling'
// };

// const el = `<div class="song">
//   <ul>
//     <li>${song.singer}</li>
//     <li>${song.title} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//   </ul>
// </div>`;

// Nested
// Nested HTML Fragments
const mhs = {
  name: 'Hafif Raihan',
  semester: 5,
  subject: ['Internet of Things', 'System Embedded', 'Web Programming', 'Object Orientation Programming']
};

function printSubject(subject){
  return `
  <ol>
    ${subject.map(s => `<li>${s}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.name}</h2>
  <span class="semester">Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${printSubject(mhs.subject)}
</div>`;

document.body.innerHTML = el;
