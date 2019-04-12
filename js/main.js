(() => {
	// styb
	console.log("lalala");

	const 	sigils = document.querySelectorAll('.sigil-container'),
			lightbox = document.querySelector('.lightbox'),
			video = document.querySelector('video'),
			lbClose = document.querySelector('.lightbox-close'),
			topBanners = document.querySelector('#houseImages'),
			tagline = document.querySelector('.house-name');
			houseInfo = document.querySelector('.house-info')

const houseData = [
`House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.
`];





	function toggleLightbox() {
		// debugger;
		let targetHouse = this.className.split(" ")[1];
		 //this gives us a lowercase house name -> the secons class 
		 //on all of the ie stark,  baratheon ..

		 //flip this to uppercase
		 targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);
		 	// targetHouse.split(1));

		 	tagline.textContent = `House ${targetVid}`;

		 	// populate the house content
		 	houseInfo.textContent = houseData

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
		TweenMax.to(topBanners, 0.7, {right: currentOffset});
	}


	// sigils.forEach(sigil => sigil.addEventListener('click', toggleLightbox));
	
    // animate the banners at the top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners));

	video.addEventListener('ended', closeLightbox);
	lbClose.addEventListener('click', closeLightbox);


})();