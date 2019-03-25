(() => {
	// styb
	console.log("lalala");

	const 	sigils = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video'),
			lbClose = document.querySelector('.lightbox-close'),
			topBanners = document.querySelector('#houseImages')

	function toggleLightbox() {
		// debugger;
		let targetHouse = this.className.split(" ")[1];
		 //this gives us a lowercase house name -> the secons class 
		 //on all of the ie stark,  baratheon ..

		 //flip this to uppercase
		 targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);
		 	// targetHouse.split(1));

		 video.src = `video/House-${targetVid}.mp4`; 
		lightbox.classList.add('lightbox-on');

		video.load();
		video.play();
	}

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');

		// rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners() {
		// move the banners to the left so that the current house banner is visable
		const offSet = 600;
		// grab the data-offset number from the shield we're clicking on and than do a bit of match 
		let currentOffset = this.dataset.offset * offSet;

		// topBanners.style.right = currentOffset + "px";
		
	}


	// sigils.forEach(sigil => sigil.addEventListener('click', toggleLightbox));
	
    // animate the banners at the top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);


})();