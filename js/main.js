(() => {
	// styb
	console.log("lalala");

	const 	sigils = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video');

	function toggleLightbox() {
		lightbox.classList.add('lightbox-on');
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
	}

	sigils.forEach(sigil => sigil.addEventListener('click', toggleLightbox));

	video.addEventListener('ended', closeLightbox);


})();