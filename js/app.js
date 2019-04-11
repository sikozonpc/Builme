const imgSlider = document.querySelector(".img-slider__img");

let currImg = 1;
function imageSlide() {
	const imgMax = 4;
	if (currImg === imgMax) {
		currImg = 1;
	} else {
		currImg++;
		imgSlider.style.backgroundImage = `url('../assets/imgs/house-${currImg}.jpg')`;
	}
	
}

window.setInterval( () => imageSlide(), 5000);