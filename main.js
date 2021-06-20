const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
