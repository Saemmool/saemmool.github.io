import './chunks/page.2b523c01.js';

// Freebird modules like images.js and videos.js are now

// NODE MODULES
// import _ from 'lodash';
// import $ from 'jquery';
// import * as d3 from 'd3';
// import * as d3 from 'd3-jetpack/d3-index.js';
// import { stateAbbrev } from '@nytg/graphics-toolkit';

// SCRIPTS
// import example from './scripts/example.js';

// TEMPLATES
// import templates from '../build/templates.js';

// WEBGL
// import createREGL from 'regl';
// import fragShader from './scripts/shaders/triangle.frag.glsl';

// ADS
// import './scripts/ads.js';

// WRITE YOUR JS HERE:






/*

Intersection observer

*/

const quotefade = document.querySelectorAll('.g-quote');
const textfade = document.querySelectorAll('.g-fade');
const textstay = document.querySelectorAll('.g-stay');

const quotefadeMargin = `-25% 0px ${window.innerWidth < 1023 ? '-20%' : '-35%'} 0px`;
const textfadeMargin = `-25% 0px ${window.innerWidth < 1023 ? '-20%' : '-35%'} 0px`;
const textstayMargin = `100% 0px ${window.innerWidth < 1023 ? '-20%' : '-35%'} 0px`;

setupObserver(quotefade, quotefadeMargin);
setupObserver(textfade, textfadeMargin);
setupObserver(textstay, textstayMargin);

function setupObserver(browsers, rootMargin) {

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`g-fadein`);
      } else {
        entry.target.classList.remove(`g-fadein`);
      }
    });
  }, {
  	rootMargin: rootMargin,
  });

  Array.prototype.forEach.call(browsers, (el) => {
    observer.observe(el);
  });
}


const body = document.querySelector('body');
setupYetAnotherObserver();

function setupYetAnotherObserver() {
	const top = document.querySelector('.g-top');
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				body.classList.remove('changebkg');
			} else {
				body.classList.add('changebkg');
			}
		});
	}, {
		rootMargin: '-50% 0px 0px 0px'
	});
	observer.observe(top);
}



/*

End intersection observer

*/







// console.clear();

// console.log('initial page state:', page.getState());


// text balance headline and subheds
// (consider doing this with CSS instead, which provides a significantly better user experience)
// import balanceText from './scripts/lib/balance-text.js';
// balanceText('.interactive-heading, .g-subhed');
//# sourceMappingURL=main.js.map