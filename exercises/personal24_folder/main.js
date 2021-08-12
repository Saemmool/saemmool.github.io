//get modal element

var modal = document.getElementById('simpleModal');
//get open modal button
var modalBtn = document.getElementById('modalBtn');
//get close button
var closeBtn = document.querySelector('.closeBtn');

//listen for click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
} 

// Function to open modal
function closeModal() {
    modal.style.display = 'none';
} 

// Function to open modal if outside click
function clickOutside(e) {
    if(e.target == modal)
    modal.style.display = 'none';
} 