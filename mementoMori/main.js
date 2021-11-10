const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
    if(e.target.id !=='sidebar' && e.target.id !=='toggle') {
        toggle.classList.remove('active');
    sidebar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}


// function menuToggle() {
//     const sidebar = document.getElementById('sidebar');
//     const toggle = document.getElementById('toggle');
//     const toggleClose = document.getElementById('toggle_close');
//     sidebar.classList.toggle('active');
//     toggle.classList.toggle('active');
//     toggleClose.classList.toggle('active');
// }


// const toggle = document.getElementById('toggle');
// const toggleClose = document.getElementById('toggle_close');
// const sidebar = document.getElementById('sidebar');


// toggle.onclick = function(){
//     toggle.classList.toggle('active');
//     sidebar.classList.toggle('active');
// }

// toggleClose.onclick = function(){
//     sidebar.classList.remove('active');
//     toggle.classList.remove('active');
// }

// document.addEventListener('click', 
//     function(e){
//         if(e.target.id =='toggle') {
//             toggle.classList.toggle('active');
//             sidebar.classList.toggle('active');
//         }
//         else if(e.target.id !=='toggle' && e.target.id !=='sidebar' && e.target.id!=='toggleClose') {
//             toggle.classList.remove('active');
//             sidebar.classList.remove('active');
//         } 
//     }
// ) 

// document.onclick = function(e) {
//     if(e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
//         toggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }





// const sidebar = document.getElementById('sidebar');
// const toggle = document.getElementById('toggle');
// const toggleClose = document.getElementById('toggle_close');

// document.onclick = function(e){
//     if(e.target.id !=='sidebar' && e.target.id !== 'toggle') {
//         toggle.classList.remove('active');
//         sidebar.classList.remove('active');
//     }
// }

// toggle.onclick = function(){
//     toggle.classList.toggle('active');
//     sidebar.classList.toggle('active');
//     toggleClose.classList.toggle('active');
// }


// background of the front page
function stars() {
    let count = 50;
    let backgroundWrap = document.querySelector('.background-wrap');
    let i = 0;
    while(i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;

        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';
        star.style.animationDuration = 5+duration+'s';
        star.style.animationDelay = duration + 's';

        backgroundWrap.appendChild(star);
        i++
    }
}
stars()

// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true
// });

// //methods
// fullpage_api.setAllowScrolling(false);