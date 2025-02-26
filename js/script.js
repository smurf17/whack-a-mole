const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesa;
let skor;


function randomTanah(tanah) {
	const t = Math.floor(Math.random() * tanah.length);
	const tRandom = tanah[t];
	if (tRandom == tanahSebelumnya) {
		randomTanah(tanah);
	}

	tanahSebelumnya = tRandom;
	return tRandom;
}


function randomWaktu (min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(tanah) {
	const tRandom = randomTanah(tanah);
	const wRandom = randomWaktu(300, 1000);
	tRandom.classList.add('muncul');

	setTimeout(() => {
		tRandom.classList.remove('muncul');
		if (!selesai) {
			munculkanTikus();
		}
	}, wRandom);
}

function mulai() {
	selesai = false;
	skor = 0;
	papanSkor.textContent = 0;

	munculkanTikus();
	setTimeout(() => {
		selesai = true;
	}, 10000);
}


function pukul() {
	skor++;
	papanSkor.textContent = skor;
	this.parentNode.classList.remove('muncul');
}

tikus.forEach(t => {
	t.addEventListener('click', pukul());
});


