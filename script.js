let start = document.getElementById('start');
let startImg = document.getElementById('startImg');
let startText = document.getElementById('startText');
startImg.addEventListener('click', function () {
	startImg.style.opacity = '0%';
	startText.innerHTML = 'Okeiii, thnkuuu';
	const actionInterval = setInterval(function () {
		start.style.display = 'none';
		a1f();
		clearInterval(actionInterval);
	}, 1500);
});

let a1 = document.getElementById('a1');
let a1_1 = document.getElementById('a1_1');
let a1_2 = document.getElementById('a1_2');
let s1 = document.getElementById('s1');
function a1f() {
	a1.style.display = 'flex';
	a1_2f();
}
function a1_2f() {
	const actionInterval = setInterval(function () {
		a1_2.style.opacity = '100%';
		s1.innerHTML = 'Lagi ngapain?';
		clearInterval(actionInterval);
	}, 1500);
}

let a2 = document.getElementById('a2');
a1_2.addEventListener('click', function () {
	a1.style.display = 'none';
	a2.style.display = 'flex';
});
let s2 = document.getElementById('s2');
let masih = document.getElementById('masih');
let gaklagi = document.getElementById('gak');
let imgA2 = document.getElementById('imgA2');
let gak = 0;
masih.addEventListener('click', function () {
	gak++;
	var randX = Math.floor(Math.random() * 100);
	var randY = Math.floor(Math.random() * 100);
	if (randX > 50) randX *= Math.round(Math.random()) ? 1 : -1;
	if (randY > 50) randY *= Math.round(Math.random()) ? 1 : -1;

	masih.style.transform = 'translate(' + randX + 'px,' + randY + 'px)';

	if (gak == 1) {
		s2.innerHTML = 'Harus gak marah! &#128545';
		imgA2.src = 'https://media.tenor.com/VDUojADM6TEAAAAj/yaseen.gif';
	}
	if (gak == 2) {
		s2.innerHTML = 'Eaaa gak bisaaa! Harus gak marah dulu &#128545';
		imgA2.src = 'https://media.tenor.com/sq91_zcvgsIAAAAj/cat-tease.gif';
	}
	if (gak == 3) {
		s2.innerHTML = 'WKWKWK gak kena! &#129322';
		imgA2.src = 'https://media.tenor.com/Pf6kEyHEsnMAAAAj/risada.gif';
	}
	if (gak == 4) {
		s2.innerHTML = 'Ayo coba lagi WWKWK... &#129315';
		imgA2.src = 'https://media.tenor.com/xBF0HstBso8AAAAj/peachandgoma.gif';
	}
	if (gak == 5) {
		s2.innerHTML = 'Gak cape ap? Harus gak marah &#128545';
		imgA2.src = 'https://media.tenor.com/evMwgWDLI7cAAAAj/peach-cute.gif';
	}
	if (gak == 6) {
		s2.innerHTML = 'Ayo donggg, pwissss &#129402';
		imgA2.src = 'https://media.tenor.com/c9tu8_KoqlUAAAAj/cuddles-panda.gif';
	}
	if (gak == 7) {
		s2.innerHTML = 'pwissss &#129402';
		imgA2.src = 'https://media.tenor.com/wsVaAXbCmWUAAAAj/mochi-mochi-peach-cute-cat.gif';
	}
	if (gak == 8) {
		s2.innerHTML = 'yaudah deh aku bolehin... tapi jangan lari dulu ya';
		imgA2.src = 'https://media.tenor.com/pZDCJwlRuSgAAAAj/cute.gif';
	}
	if (gak == 9) a3f();
});
gaklagi.addEventListener('click', function () {
	a3f();
});

let a3 = document.getElementById('a3');
function a3f() {
	a2.style.display = 'none';
	a3.style.display = 'flex';
}
let a4 = document.getElementById('a4');
a3.addEventListener('click', function () {
	a3.style.display = 'none';
	a4.style.display = 'flex';
});
let a5 = document.getElementById('a5');
a4.addEventListener('click', function () {
	a4.style.display = 'none';
	a5.style.display = 'flex';
});
let a6 = document.getElementById('a6');
a5.addEventListener('click', function () {
	a5.style.display = 'none';
	a6.style.display = 'flex';
});
let a7 = document.getElementById('a7');
a6.addEventListener('click', function () {
	a6.style.display = 'none';
	a7.style.display = 'flex';
});
let a8 = document.getElementById('a8');
a7.addEventListener('click', function () {
	a7.style.display = 'none';
	a8.style.display = 'flex';
});
let a9 = document.getElementById('a9');
a8.addEventListener('click', function () {
	a8.style.display = 'none';
	a9.style.display = 'flex';
});
let a10 = document.getElementById('a10');
a9.addEventListener('click', function () {
	a9.style.display = 'none';
	a10.style.display = 'flex';
});
let a11 = document.getElementById('a11');
a10.addEventListener('click', function () {
	a10.style.display = 'none';
	a11.style.display = 'flex';
});

let s11 = document.getElementById('s11');
let aku = document.getElementById('aku');
let apa = document.getElementById('apa');
let imgA11 = document.getElementById('imgA11');
var geer = 0;
aku.addEventListener('click', function () {
	geer++;
	randX = Math.floor(Math.random() * 100);
	randY = Math.floor(Math.random() * 100);
	if (randX > 50) randX *= Math.round(Math.random()) ? 1 : -1;
	if (randY > 50) randY *= Math.round(Math.random()) ? 1 : -1;

	if (geer == 1) {
		aku.style.transform = 'translate(' + randX + 'px,' + randY + 'px)';
		s11.innerHTML = 'Ishhh ge er betttt';
		imgA11.src = 'https://media.tenor.com/Tz9Y_V_s3kEAAAAj/pat-tap.gif';
	}
	if (geer == 2) {
		aku.style.transform = 'translate(' + randX + 'px,' + randY + 'px)';
		s11.innerHTML = 'WKWK kepedean bangetttt';
		imgA11.src = 'https://media.tenor.com/otVruCWdV98AAAAj/love-climb.gif';
	}
	if (geer == 3) {
		aku.style.transform = 'translate(' + randX + 'px,' + randY + 'px)';
		s11.innerHTML = 'WKWKWK gak kena! &#129322';
		imgA11.src = 'https://media.tenor.com/Pf6kEyHEsnMAAAAj/risada.gif';
	}
	if (geer == 4) {
		aku.style.transform = 'translate(' + randX + 'px,' + randY + 'px)';
		s11.innerHTML = 'Ayo coba lagi WWKWK... &#129315';
		imgA11.src = 'https://media.tenor.com/xBF0HstBso8AAAAj/peachandgoma.gif';
	}
	if (geer == 5) {
		s11.innerHTML = 'WKWKKW oke oke, capek juga lari terus';
		imgA11.src = 'https://media.tenor.com/Al9GWrFURrAAAAAj/peachandgoma.gif';
		aku.style.transform = 'translate(0px,0px)';
		random = false;
	}
	if (geer == 6) {
		s11.innerHTML = 'aku langsung tunjukin aja ya';
		imgA11.src = 'https://media.tenor.com/tM41zj1vNkQAAAAj/detri-sitting.gif';
	}
	if (geer == 7) {
		s11.innerHTML = 'yang paling cute adalahhhh....';
		imgA11.src = 'https://media.tenor.com/mW59O5CKAxQAAAAj/dance.gif';
	}
	if (geer == 8) {
		s11.innerHTML = 'jeng jeng jenggggg.....';
		imgA11.src = 'https://media.tenor.com/DlrBozJeVXQAAAAj/tkthao219-bubududu.gif';
	}
	if (geer == 9) a12f();
});
apa.addEventListener('click', function () {
	apa.style.display = 'none';
});

let a12 = document.getElementById('a12');
function a12f() {
	a11.style.display = 'none';
	a12.style.display = 'flex';
}
let a13 = document.getElementById('a13');
a12.addEventListener('click', function () {
	a12.style.display = 'none';
	a13.style.display = 'flex';
});
let a14 = document.getElementById('a14');
a13.addEventListener('click', function () {
	a13.style.display = 'none';
	a14.style.display = 'flex';
});
let a15 = document.getElementById('a15');
let hitung = document.getElementById('hitung');
a14.addEventListener('click', function () {
	a14.style.display = 'none';
	a15.style.display = 'flex';
	let count = 3;
	const actionInterval = setInterval(function () {
		hitung.innerHTML = count;
		if (count <= 0 && count >= -1) {
			hitung.style.fontSize = '50px';
			hitung.innerHTML = 'yang ter-cute jatuh kepadaa....';
			if (count == -1) play();
		}
		if (count == -2) {
			clearInterval(actionInterval);
			a16f();
		}
		count--;
	}, 1000);
});
let a16 = document.getElementById('a16');
let s15 = document.getElementById('s15');
function a16f() {
	let count = 1;
	a15.style.display = 'none';
	a16.style.display = 'flex';
	const actionInterval = setInterval(function () {
		if (count == 2) {
			s15.innerHTML = 'iya kamuuu';
			s15.style.fontSize = '3em';
			s15.style.transform = 'translateY(-1em)';
		}
		if (count == 9) {
			s15.innerHTML = 'jgn marah lg yaaa';
			s15.style.fontSize = '1.7em';
			s15.style.transform = 'translateY(-1.2em)';
			clearInterval(actionInterval);
		}
		count++;
	}, 1000);
}

const audio = ['sempurna.mp3'];
const audioNames = [(audioPerfect = new Audio())];
for (let i = 0; i < audio.length; i++) {
	audioNames[i].src = audio[i];
}
function audioPlay(name) {
	if (name === 'Perfect') {
		audioNames[0].play();
	}
}
function play() {
	audioPlay('Perfect');
}
