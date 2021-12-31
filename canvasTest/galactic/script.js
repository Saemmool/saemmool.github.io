//Initial setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//variables
let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};


addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

//utility functions
function randomIntFromRange(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors){
    return colors(Math.floor(Math.random() * colors.length));
}

// Objects
class Particle {
    constructor(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw()
    }
}

// Implementation
function init() {

}

//Animation Loop
function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0,0,canvas.width,canvas.height);
}

init();
animate();