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

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

let mouseDown = false

addEventListener('mousedown', () => {
    mouseDown = true
});

addEventListener('mouseup', () => {
    mouseDown = false
})

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

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
        ctx.shadowColor = this.color
        ctx.shadowBlur = 15
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.draw()
    }
}

// Implementation
let particles
function init() {
    particles = []
    for (let i = 0; i < 200; i++) {
        const canvasWidth = canvas.width + 300
        const canvasHeight = canvas.height + 300
        const x = Math.random()* canvasWidth - canvasWidth / 2
        const y = Math.random() * canvasHeight - canvasHeight / 2
        const radius = 2 * Math.random()
        const color = colors[Math.floor(Math.random() * colors.length)]
        particles.push(new Particle(x,y,radius,color))
        console.log(particles)
    }
}

//Animation Loop
let radians = 0
let alpha = 1
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`
    ctx.fillRect(0,0,canvas.width,canvas.height);


    ctx.save()
    ctx.translate(canvas.width/2, canvas.height/2)
    ctx.rotate(0.01)
    ctx.rotate(radians)
    particles.forEach(particle => {
        particle.update()
    })
    ctx.restore()
    
    radians += 0.001

    if (mouseDown && alpha >= 0.1) {
        alpha -= 0.01
    } else if (!mouseDown && alpha < 1) {
        alpha += 0.01
    }
}

init();
animate();