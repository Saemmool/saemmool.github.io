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

const center = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let angle = 0

addEventListener('mousemove', (event) => {
    gsap.to(mouse, {
        x: event.clientX - canvas.width / 2,
        y: event.clientY - canvas.height / 2,
        duration: 1
    })

    angle = Math.atan2(mouse.y, mouse.x)
})

addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Objects
class Particle {
    constructor(x, y, radius, color, distanceFromCenter){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.distanceFromCenter = distanceFromCenter;
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
        this.x = center.x + this.distanceFromCenter * Math.cos(angle)
        this.y = center.y + this.distanceFromCenter * Math.sin(angle)
    }
}

// Implementation
let particles
function init() {
    particles = []

    const particleCount = 200
    const hueIncrement = 360 / particleCount

    const radiusIncrement = 30 / particleCount

    for (let i = 0; i < particleCount; i++){
        const x = canvas.width / 2 + i * Math.cos(Math.PI)
        const y = canvas.height / 2 + i * Math.sin(-Math.PI)

        particles.push(new Particle(x, y, 5, `hsl(${hueIncrement * i}, 50%, 50%)`, i))
    }
}

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach(particle => {
        particle.update()
    })
}

init();
animate();