import { i as isMobile } from './js/page.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jquery = createCommonjsModule(function (module) {
	'jquery.js'
});

var jquery = jQuery;

const $html = jquery('html');
const $freebirdItems = jquery('.g-scrollinggraphic, .g-scrollingslides');
const $scrollingGraphics = jquery('.g-scrollinggraphic_wrapper', $freebirdItems);
const scrollingGraphicsAll = {}; // all scrolling items, including ones that extend scrollinggraphic, like scrollingslides.
const debounceTime = 150;

/**
 * Underscore's debounce:
 * http://underscorejs.org/#debounce
 */
const debounce = function(func, wait, immediate) {
var result;
var timeout = null;
return function() {
	var context = this,
	args = arguments;
	var later = function() {
	timeout = null;
	if (!immediate) {
		result = func.apply(context, args);
	}
	};
	var callNow = immediate && !timeout;
	clearTimeout(timeout);
	timeout = setTimeout(later, wait);
	if (callNow) {
	result = func.apply(context, args);
	}
	return result;
};
};


const $vh = (() => {
	let $el;

	if(document.getElementById('g-scrollingraphic-vh')){
		$el = jquery('#g-scrollingraphic-vh');
	} else {
		$el = jquery('<div id="g-scrollingraphic-vh"></div>').css({
		position: 'absolute',
		height: '100vh',
		width: 0,
		left: '-300vh',
		top: 0
		}).appendTo(jquery('body'));
	}
	return $el;
})();

/**
 * Given a prefix string like 'theme' and a value like
 * 'dark', add 'theme-dark' class to the given element
 * after removing any other theme-* classes.
 * @param  {Object} el     Target DOM element
 * @param  {String} prefix Broad prefix slug/category, before the '-' separator.
 * @param  {String} value  Specific suffix value, after the '-' separator.
 */
const containerClass = function(el, prefix, value){
var classList = Array.prototype.slice.call(el.classList);
classList.forEach(function(c){
	if (c.lastIndexOf(prefix + '-') === 0 ){
	el.classList.remove(c);
	}
});
el.classList.add(prefix+'-'+value);
};

/**
 * Used with an out-of-doc-flow div, we get the 
 * css values of 100vh so that we can size full 
 * height mobile, which has a UI that expands 
 * and contracts on scroll. 100vh returns the 
 * max value all the time, unlike window.innerHeight and 
 * document.documentElement.clientHeight
 */
const getViewportHeight = () => {
	return $vh.height();
};

const viewportCache = {
	maxHeight: getViewportHeight(), // ignores mobile UI expanding and contracting on scroll
	minHeight: document.documentElement.clientHeight, // initial height at page load, with maximum mobile ui
	currentHeight: window.innerHeight, // current height, in whatever state in mobile ui is in
	previousHeight: window.innerHeight,
	maxWidth: window.innerWidth, // including scrollbar
	currentWidth: document.documentElement.clientWidth,
	previousWidth: document.documentElement.clientWidth
};

const updateViewportCache = () => {
	viewportCache.previousHeight = viewportCache.currentHeight;
	viewportCache.currentHeight = window.innerHeight;
	viewportCache.previousWidth = viewportCache.currentWidth;
	viewportCache.currentWidth = document.documentElement.clientWidth;
};

if ($freebirdItems.length > 0) {

const updateVerticalAlignment = function() {
	const viewportHeight = getViewportHeight();
	$scrollingGraphics.filter('.g-align-center').each(function() {
	const $el = jquery(this);
	const $graphic = $el.find('.g-scrollinggraphic_graphic');
	$el.find('.g-scrollinggraphic_sticky').css({
		top: viewportHeight / 2 - $graphic.height() / 2
	});
	});
};

const updateVerticalAlignmentDebounce = debounce(updateVerticalAlignment, debounceTime);

/**
 * Update all instances of scrollstory.
 * Useful when the dom has changed
 * after initialization.
 */
const updateOffsets = function(){
	Object.keys(scrollingGraphicsAll).forEach((graphicSlug) => {
	const instance = scrollingGraphicsAll[graphicSlug];
	instance.updateOffsets();
	});
};

const updateOffsetsDebounce = debounce(updateOffsets, debounceTime);

/**
 * Get previous index. If the true previous index isn't set, or is the same as the current one,
 * do a best-guess based on the scroll position.
 *
 * @param {ScrollStory Item Object} item
 */
const getPreviousIndex = (item) => {
	const scrollstory = item.scrollStory;
	const length = scrollstory.getLength();
	const prevItem = scrollstory.getPreviousItem();
	return prevItem ? prevItem.index : (length - 1 === item.index) ? length - 1 : 0;
};

/**
 * Determine scroll direction by comparing current index against the previous one.
 * If the index isn't set, or is the same as the current one, ScrollStory has
 * never been active or just became re-active, so determine direction by
 * checking if the current item is at the top of the page, or at the bottom of
 * the page. if top, we're going forward. if bottom, we're going reverse.
 *
 * @param {ScrollStory Item Object} item
 */
const getScrollingDirection = (item) => {
	const prevIndex = getPreviousIndex(item);
	let direction;
	if (item.index === prevIndex) {
	direction = item.index === 0 ? 'forward': 'reverse';
	} else {
	direction = item.index >= prevIndex ? 'forward' : 'reverse';
	}
	return direction;
};

const track = (item) => {
	if(window.dataLayer){
	const type = item.data._scrollinggraphic_type; // scrollinggraphic or scrollingslides

	window.dataLayer.push({
		'event': 'moduleInteraction',
		'module': {
		'name': `interactive-${type}`,
		'element': {
			'name': 'slide-change',
			'label': `slide-${item.index}`,
			'ga': {
			'customDimensions': [
				{'index':188, 'value':`${type}`},
			]
			}
		}
		}
	});
	}
};

$freebirdItems.each(function() {
	const el = this;
	const $el = jquery(el);
	const id = $el.attr('id');

	const $wrapper = jquery('.g-scrollinggraphic_wrapper', $el);
	const $label = jquery('.g-label', $wrapper);
	const $scrollstory = $wrapper.find('.g-scrollinggraphic_items');
	const data = $wrapper.data(); // global data. not item data.
	const scrollingGraphic = {ready: false}; // this  instance

	const { 
	_scrollinggraphic_type: type, 
	_scrollinggraphic_debug: debug, 
	_scrollinggraphic_trigger: triggerOffset, 
	_scrollinggraphic_autoactivate: autoActivateFirstItem, 
	_scrollinggraphic_disableafter: disablePastLastItem 
	} = data;

	// if this scrollinggraphic is in a .g-top-cover,
	// set a html class so the header can be repositioned correctly
	// at the top of the page.
	if($el.parents('.g-top-cover').length > 0){
	$html.addClass('g-scrollinggraphic-istop-cover');
	}

	// wire up scrollstory, which does the heavy lifting
	$scrollstory.scrollStory({
	content: $wrapper.find('.g-scrollinggraphic_item'),
	autoActivateFirstItem,
	disablePastLastItem, // so last item is always active, even after scrolled past
	triggerOffset,
	debug,
	itembuild: function (ev, item) {
		item.data._scrollinggraphic_type = type;
	},
	itemfocus: function (ev, item){
		const previousIndex = (function(){
		const previousIndex = getPreviousIndex(item);

		// if previous === current, move previous to next item
		// to prevent both classes from stacking up on same element.
		return (previousIndex === item.index) ? previousIndex + 1 : previousIndex;
		})();

		containerClass(el, `g-activeitem`, item.id);
		containerClass(el, `g-activeindex`, item.index);
		containerClass($wrapper.get(0), 'g-direction', getScrollingDirection(item));

		//
		// set index-dependent elements (like stepper)
		// to active when needed. works by having a
		// set of `g-dependent` elements
		// inside a `g-dependents` element.
		//
		$el.find('.g-dependents').each(function(){
		jquery(this).find('.g-dependent')
			.removeClass('g-active g-previousactive')
			.eq(item.index)
				.addClass('g-active')
				.end()
			.eq(previousIndex)
				.addClass('g-previousactive');
		});

		// analytics
		track(item);
	},
	complete: function() {
		const scrollstory = this;

		// proxy all the scrollstory public API functionality (ignore methods starting with "_")
		// to the ScrollingGraphic instance:
		// index, getActiveItem, getLength, index, next, getScrollComplete, etc
		const scrollstoryProto = Object.getPrototypeOf(scrollstory);
		Object.keys(scrollstoryProto).forEach((propertyName) => {
		const property = scrollstoryProto[propertyName];
		if(propertyName[0] !== "_" && typeof property === 'function'){
			scrollingGraphic[propertyName] = property.bind(scrollstory);
		}
		});

		scrollingGraphic.ready = true;
	}
	});

	Object.assign(scrollingGraphic, {
	data,
	id,
	type,
	$label,
	$el: $wrapper,
	$sticky: jquery('.g-scrollinggraphic_sticky', $wrapper),
	$graphic: jquery('.g-scrollinggraphic_graphic', $wrapper),
	$stepper: jquery('.g-scrollinggraphic_stepper', $wrapper),

	/**
	 * Given a prefix string like 'theme' and a value like
	 * 'dark', add 'theme-dark' class to the container element
	 * after removing any other theme-* classes.
	 *
	 * @param {Stirng} prefix
	 * @param {String} value
	 */
	updateContainerClass: function(prefix, value) {
		containerClass(this.$el.get(0), prefix, value);
	},

	/**
	 * Given an aspect ratio in (height / width) format,
	 * set the sticky graphic to that shape.
	 *
	 * @param {Number} aspectRatio
	 * @param {Object} options
	 */
	updateAspectRatio: function(aspectRatio, options) {
		options = options || {};

		const updateAlignment = options.updateVerticalAlignment !== undefined ? options.updateVerticalAlignment : true;

		if(!data._scrollinggraphic_fullheight){
		this.$sticky.css({
			'padding-bottom': `${aspectRatio * 100}%`
		});
		}

		if(updateAlignment){ updateVerticalAlignment(); }
	},

	updateVerticalAlignment: updateVerticalAlignment,

	getViewport: function(){
		return viewportCache;
	},

	/**
	 * Size scrolling container to the full width and height of the viewport
	 *
	 * Note: Use clientWidth/Height (instead of getViewport().width/height, which uses
	 * window.innerWith/Height) b/c we need to ratio to match the inner viewport,
	 * not the viewport with scrollbars, etc.
	 *
	 *  @param {Object} options
	 */
	setAspectRatioToFullViewport: function(options){
		// this.updateAspectRatio(document.documentElement.clientHeight/document.documentElement.clientWidth, options);
		this.updateAspectRatio(getViewportHeight() / window.innerWidth, options);
	},

	/**
	 * Update the global label, if it exists
	 * @param {String} msg
	 */
	updateLabel: function(msg){
		if($label.length > 0){
		$label.html(msg);
		}
	},

	/**
	 * Proxy all ScrollStory events
	 * to this scrollinggraphic instance
	 * 
	 * @param {String} eventName 
	 * @param {Function} handler 
	 */
	on: function(eventName, handler){
		if(typeof eventName !== 'string') throw "`eventName` must be string";
		if(typeof handler !== 'function') throw "`handler` must be function";

		// The `container*` named events in scrollstory are a little confusing. 
		// Dropping "container" from the event name is more clear.
		// Here we support either version of the name.
		const eName = ['active', 'inactive', 'scroll', 'resize'].includes(eventName) ? `container${eventName}`: eventName;

		$scrollstory.on(eName, (e, d) => handler.bind(this)(d));
	}
	});

	// add this instance to the running list
	scrollingGraphicsAll[id] = scrollingGraphic;


	if(debug){
	scrollingGraphic.updateContainerClass('g-debug', 'on');

	const $debug = jquery('<div class="g-scrollinggraphic_debug-log"></div>');
	scrollingGraphic.$sticky.append($debug);

	const debugMap = new Map();
	const debugLog = (key, msg) => debugMap.set(key, msg);
	const expiringDebugLog = (key, msg, timeout = 3000) => {
		debugLog(key, msg);
		setTimeout(()=> {
		debugMap.delete(key);
		}, timeout);
	}; 

	const updateDebugLogs = () => {
		if(scrollingGraphic.ready){
		debugLog('index()/getActiveItem().index', scrollingGraphic.getActiveItem().index);
		debugLog('getItemsInViewport().length', scrollingGraphic.getItemsInViewport().length);
		debugLog('getScrollComplete', scrollingGraphic.getScrollComplete().toFixed(4));
		}

		$debug.html(Array.from(debugMap).map((kvArray) => {
		return `${kvArray[0]}: ${kvArray[1]}`;
		}).join('<br>'));

		requestAnimationFrame(updateDebugLogs);
	};

	// keep updated
	requestAnimationFrame(updateDebugLogs);


	// event-based logs
	expiringDebugLog('debug', 'Starting...');

	scrollingGraphic.on('itemfocus', (item) => {
		expiringDebugLog('event: itemfocus', item.id, 3000);
	});

	scrollingGraphic.on('itemblur', (item) => {
		expiringDebugLog('event: itemblur', item.id, 3300);
	});

	scrollingGraphic.on('scroll', () => {
		expiringDebugLog('event: scroll', '', 1500);
	});

	scrollingGraphic.on('resize', () => {
		expiringDebugLog('event: resize + scrollingGraphic.getViewport()', JSON.stringify(scrollingGraphic.getViewport()), 5000);
	});
	}

});

// Set custom aspect ratios as needed
Object.keys(scrollingGraphicsAll).forEach((slug) => {
	if(!!scrollingGraphicsAll[slug].data._scrollinggraphic_ratio){
	scrollingGraphicsAll[slug].updateAspectRatio(scrollingGraphicsAll[slug].data._scrollinggraphic_ratio);
	}
});


const onResize = debounce(() => {
	$scrollingGraphics.trigger('scrollinggraphic:resize');
	updateVerticalAlignmentDebounce();
}, debounceTime);

// set and keep vertically aligned graphics in the correct spot.
updateVerticalAlignment();
jquery(window).on('resize', () => {
	let handleResize = true;
	updateViewportCache();

	// only fire resize on mobile if width changes, which is likely 
	// orientation changes or split screen adjustments on iOS and Android.
	// Ignore height changes, which are probably the mobile UI expanding 
	// and contracting on scroll
	if(isMobile()){
	if(viewportCache.currentWidth === viewportCache.previousWidth){
		handleResize = false;
	}
	} 

	if(handleResize){
	onResize();
	}
});

//
// Watch for document changes:
//
// Anything that changes the height of our page will 
// make the cached scroll position values in scrollstory 
// inaccurate. on such events, re-check scrollstory offsets.
//

// lazy ads
const listenForAdEvents = () => {
	if (window.AdSlot && window.googletag && window.googletag.cmd && window.googletag.cmd.push && window.googletag.pubads) {
	window.googletag.cmd.push(() => {
		window.googletag.pubads().addEventListener('slotRenderEnded', e => {
		updateOffsetsDebounce();
		});
	});
	}
};

if(document.readyState === 'complete'){
	listenForAdEvents();
} else {
	document.onreadystatechange = function () {
	if(document.readyState === 'complete'){
		listenForAdEvents();
	}
	};
}

// lazy freebird images
$html.on('freebird:lazyimage', updateOffsetsDebounce);
}

// A ScrollingGrahpic can be custom graphics or a pre-configured plugin, like ScrollingSlides. Make record of just the 
// "scrollinggraphic" type for easy use by gfx editors in scrpt.js
Object.keys(scrollingGraphicsAll).filter(graphicSlug => scrollingGraphicsAll[graphicSlug].type === 'scrollinggraphic').forEach((graphicSlug) => {
});

/**
 * intrinsic-scale
 * https://github.com/bfred-it/intrinsic-scale
 * MIT
 *
 * Replicates basic object-fit math. Assumes object-position of 50%, 50%
 */
const fit = function (contains) {
return (parentWidth, parentHeight, childWidth, childHeight) => {
	const doRatio = childWidth / childHeight;
	const cRatio = parentWidth / parentHeight;
	let width = parentWidth;
	let height = parentHeight;

	if (contains ? doRatio > cRatio : doRatio < cRatio) {
	height = width / doRatio;
	} else {
	width = height * doRatio;
	}

	return {
	width,
	height,
	x: (parentWidth - width) / 2,
	y: (parentHeight - height) / 2
	};
};
};

/**
 * Get width, height, x and y needed to modify
 * an existing element to cover a parent element.
 * So we can emulate `objectfit: cover` with
 * any element.
 *
 * @param {Number} parentWidth
 * @param {Number} parentHeight
 * @param {Number} childWidth
 * @param {Number} childHeight
 */
const cover = fit(false);

//
// Cycle through all the scrollingslides data and prep functionality
//

const scrollingSlidesSlugs = Object.keys(scrollingGraphicsAll).filter(graphicSlug => scrollingGraphicsAll[graphicSlug].type === 'scrollingslides');

scrollingSlidesSlugs.forEach((slug) => {
const scrollingSlide = scrollingGraphicsAll[slug];
const { data, id, $el, $graphic, getViewport } = scrollingSlide;
const { _scrollingslides_ratio:aspectRatio, _scrollingslides_effect:slideEffect, _scrollingslides_duration:slideDuration } = data;
const isSlideEffect = slideEffect === 'slide' || slideEffect === 'verticalslide' || slideEffect === 'carousel';
const isHorizontalSlide = isSlideEffect && (slideEffect === 'slide' || slideEffect === 'carousel');
const $positioner = $graphic.find('.g-scrollingslides_slideposition');
const $slides = $graphic.find('.g-scrollingslides_slide');
let lastSeenAspectRatio;


//
// "slide" transition layout
//
if(isSlideEffect){

	// layout the slides in the correct direction within the slide container
	$slides.each(function(index){
	const direction = isHorizontalSlide ? 'left' : 'top';
	const slideCss = {};
	slideCss[direction] = (index * 100) + '%';
	jquery(this).css(slideCss);
	});

	// horizontal slides get a horizontal stepper
	if(isHorizontalSlide){
	scrollingSlide.updateContainerClass('g-stepperdirection', 'horizontal');
	}
}


//
// optionally, set duration via google docs by appending
// id-namespaced CSS to the document in a style tag.
//
// this also could (should?) be done with regular css in local project.
//
if(parseInt(slideDuration) || parseInt(slideDuration) === 0){
	const durationElementSelector = isSlideEffect ? [
	`#${id} .g-scrollingslides-effect-slide .g-scrollingslides_slideposition`,
	`#${id} .g-scrollingslides-effect-verticalslide .g-scrollingslides_slideposition`,
	`#${id} .g-scrollingslides-effect-carousel .g-scrollingslides_slideposition`
	] : [
	`#${id} .g-scrollingslides-effect-fade .g-scrollingslides_slide.g-previousactive`
	];

	const rules = durationElementSelector.map((selector) => {
	return `${selector}{ transition-duration: ${parseInt(slideDuration)}ms};`;
	}).join('\n');

	const $style = jquery(`<style>${rules}</style>`);
	$el.prepend($style);
}

/**
 * Handle needed updates when new text block gains focus
 * @param {Integer} index
 */
const update = function(index){
	const item = scrollingSlide.getItemByIndex(index);
	
	// reposition the container to reveal the correct slide
	if (isSlideEffect) {
	const translateDirection = isHorizontalSlide ? 'X' : 'Y';
	const translatePosition = (-1 * (item.index * 100) ) + '%';
	$positioner.css({
		transform: "translate"+translateDirection+"("+translatePosition+")"
	});
	}
		
	// graphic's current aspect ratio
	const targetRatio = (function(){
	let targetRatio;

	// use image data if possible
	// this comes from an image within an individual slide
	if(!!item.data._scrollingslides_ratio){
		targetRatio = item.data._scrollingslides_ratio;

		// in advance cases, an aspect ratio
		// may have been specified in the google doc
	} else if (aspectRatio) {
		targetRatio = aspectRatio;

		// when in doubt, do the math on the contents of the
		// the slide. This will work if the content pre-fills
		// the correct height (like ai2html does width padding-bottom)
	} else {
		const $slide = $slides.eq(index);

		// in most cases we could safely grab the slide width
		// and height to get the ratio ($slide.height() / $slide.width())
		// but some fragment files and ai2htmls are responsive and would
		// fill the current $sticky container, instead of reflecting their
		// true width and height, and their natural aspect ratio.
		//
		// let's duplicate the slide content and measure it outside the $sticky element.

		const $tmp = jquery('<div></div>').css({
		position: 'absolute',
		width: $slide.width(),
		visibility: 'hidden'
		}).appendTo('body');

		$slide.find('.g-asset_inner').clone().appendTo($tmp);

		targetRatio = $tmp.height() / $tmp.width();
		$tmp.remove();
	}

	return targetRatio.toFixed(2);
	})();

	// re-adjust the positioning of the graphic
	// if the new aspect ratio isn't close to the current one
	if(!lastSeenAspectRatio || Math.abs(lastSeenAspectRatio - targetRatio) > 0.06){
	lastSeenAspectRatio = targetRatio;

	// to keep scrollstory from triggering a new focus
	// event while the page might be changing sizes a touch,
	// disable it during the update.
	// mobile needed about a 100ms delay...
	scrollingSlide.disable();
	scrollingSlide.updateAspectRatio(targetRatio);
	setTimeout(function(){
		scrollingSlide.updateOffsets();
		scrollingSlide.enable();
	}, 100);
	}
};

const sizeSlides = function(){
	if(data._scrollinggraphic_fullheight){
	const vpWidth = getViewport().currentWidth;

	// on mobile, we want the tallest possible size to cover the area where the mobile UI contracts
	const vpHeight = isMobile() ? getViewport().maxHeight : getViewport().currentHeight; 

	// size scrolling container to be the full size of the viewport
	scrollingSlide.setAspectRatioToFullViewport();

	$slides.each(function(){

		// the first div in the asset container that needs to be resized.
		// grab and reset any previous styles
		const $innerEl =  jquery(this).find('.g-asset_inner').attr('style', '');

		// grab the actual asset
		const assetType = $innerEl.data().type;
		const $assetEl = assetType === 'image' ? jquery('.g-scrollingslides-lazy', $innerEl) : jquery('.ai2html', $innerEl);

		// get needed height and width to cover viewport
		const targetSize = assetType === 'image' ? (function(){
		// b/c of lazy images, prefer calculated height
		// over true height, as image might not have loaded.
		const assetData = $assetEl.data();
		const assetWidth = $assetEl.width();
		const assetHeight = assetData && assetData._ratio ? assetWidth * assetData._ratio: $assetEl.height();
		return cover(vpWidth, vpHeight,  assetWidth,  assetHeight);
		})() : cover(vpWidth, vpHeight,  $assetEl.width(),  $assetEl.height());

		const { width:targetWidth, height:targetHeight } = targetSize;

		$innerEl.css({
		width: `${targetWidth}px`,
		height:  `${targetHeight}px`
		});
	});
	}
};

//
// Prep lazy load images
//
const $lazyImgs = $slides.find('.g-scrollingslides-lazy');

// `fullheights` need not set a height, as css will do it
// with object-fit: cover
if(data._scrollinggraphic_fullheight){
	$lazyImgs.each(function(){
	const data = jquery(this).data();
	data._ratio = data.ratio;
	delete data.ratio;
	});
}

// lazy load the images
$lazyImgs.laziestloader({
	threshold: getViewport().maxHeight * 2
});

// set initial state and keep in sync
update(!!scrollingSlide.getActiveItem()? scrollingSlide.getActiveItem().index : 0);
scrollingSlide.on('itemfocus', function(item){
	update(item.index);
});

sizeSlides();
$el.on('scrollinggraphic:resize', sizeSlides);
});
//# sourceMappingURL=freebird.js.map
