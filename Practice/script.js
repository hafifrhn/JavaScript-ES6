// Ambil elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


// Pilih hanya "JAVASCRIPT ES6 TUTORIAL"
let jsTutorial = videos.filter(video => video.textContent.includes('JavaScript ES6 Tutorial'))

// Ambil Durasi Maing-masing Video
.map(item => item.dataset.duration)

// Ubah durasi menjadi float, ubah menit menjadi detik
.map(time => {
  // 10:30 -> [10, 30] Split
  const parts = time.split(':').map(part => parseFloat(part));
  return (parts[0] * 60) + parts[1];
})

// Jumlahkan semua detik
.reduce((total, second) => total + second);

// Ubah format jadi jam, menit, detik
// Floor untuk membulatkan nilai kebawah, Ceil membulatkan nilai keatas, Round membulatkan nilai ke yang paling dekat
const hour = Math.floor(jsTutorial / 3600);
jsTutorial = jsTutorial - hour * 3600;
const minute = Math.floor(jsTutorial / 60);
const second = jsTutorial - minute * 60;

// Simpan di DOM
const pDuration = document.querySelector('.total-durations');
pDuration.textContent = `${hour} Hours, ${minute} Minutes, ${second} Seconds.`;
const ttlVideo = videos.filter(video => video.textContent.includes('JavaScript ES6 Tutorial')).length;
const pTtlVideo = document.querySelector('.total-videos');
pTtlVideo.textContent = `${ttlVideo} Videos.`;

console.log(second);