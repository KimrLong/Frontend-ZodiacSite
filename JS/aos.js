 
 
$(()=>{
 
 
  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: "images/space.jpeg",
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
  });

})
// var granimInstance = new Granim({
//   element: '',
//   name: 'granim',
//   elToSetClassOn: 'body',
//   direction: 'diagonal',
//   isPausedWhenNotInView: false,
//   scrollDebounceThreshold: 300,
//   stateTransitionSpeed: 1000,
//   image : {
//       source: '../assets/img/bg-forest.jpg',
//       position: ['center', 'bottom'],
//       stretchMode: ['stretch', 'stretch-if-bigger'],
//       blendingMode: 'multiply',
//   },
//   states : {
//       "default-state": {
//           gradients: [
//               ['#834d9b', '#d04ed6'],
//               ['#1CD8D2', '#93EDC7']
//           ],
//           transitionSpeed: 5000,
//           loop: true
//       },
//       "dark-state": {
//           gradients: [
//               ['#757F9A', '#D7DDE8'],
//               ['#5C258D', '#4389A2']
//           ],
//           transitionSpeed: 5000,
//           loop: true
//       }
//   },
//   onStart: function() {
//       console.log('Granim: onStart');
//   },
//   onGradientChange: function(colorDetails) {
//       console.log('Granim: onGradientChange, details: ');
//       console.log(colorDetails);
//   },
//   onEnd: function() {
//       console.log('Granim: onEnd');
//   }
// );








AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
AOS.refresh();