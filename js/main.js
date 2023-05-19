//ready(() => {
//
//	//MENU
//		let iconMenu=document.querySelector(".icon-menu");
//		let body=document.querySelector("body");
//		let menuBody=document.querySelector(".menu__body");
//	iconMenu.addEventListener("click", (e) => {
//		iconMenu.classList.toggle("active");
//		body.classList.toggle("lock");
//		menuBody.classList.toggle("active");
//	});



//	//SLIDER
//		let slider=document.querySelectorAll(".slider");
//	slider.forEach(el => {
//		let sliderItem = new Glide(el, {
//			type: 'carousel',
//			perView: 1,
//		});
//		sliderItem.mount();
//	});



//	//IBG
//	document.querySelectorAll(".ibg").forEach(el => {
//		if(el.querySelector('img')){
//			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
//			el.querySelector('img').style.display = 'none';
//		}
//	});
//});


//async function ibg() {
//   const images = document.querySelectorAll(".ibg");
//   if (images.length > 0) {
//      await Promise.all(
//         await Object.keys(images).map(async (i) => {
//            if (images[i].querySelector('img')) {
//               images[i].style.backgroundImage = `url(${images[i].querySelector('img').getAttribute('src')})`;
//            }
//         })
//      )
//   }
//}
//
//ibg().then(() => {
//   console.log('images BG added correctly')
//}).catch(err => {
//   console.log('Error: ', err)
//   throw err;
//})


//function ibg(){
//
//   let ibg=document.querySelectorAll(".ibg");
//   for (var i = 0; i < ibg.length; i++) {
//   if(ibg[i].querySelector('img')){
//   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//   }
//   }
//   }
//   
//   ibg();