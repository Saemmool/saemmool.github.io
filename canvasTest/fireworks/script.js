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

const gravity = 0.005
const friction = 0.99

addEventListener('resize', function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// Objects
class Particle {
    constructor(x, y, radius, color, velocity){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity 
    this.alpha = 1
    }

    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore()
    }

    update() {
        this.draw()
        this.velocity.x *= friction 
        this.velocity.y *= friction
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.alpha -= 0.005
    }
}

// Implementation
let particles
function init() {
    particles = [];
}

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((particle, i) => {
        if (particle.alpha > 0) {
            particle.update()
        } else {
            particles.splice(i, 1)
        }
    })
}

init()
animate()

addEventListener('click', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    const particleCount = 400
    const angleIncrement = (Math.PI * 2) / particleCount
    const power = 50

    for (let i = 0; i < 400; i++) {
        console.log(Math.cos(angleIncrement))
        particles.push(new Particle(
            mouse.x, mouse.y, 3, `hsl(${Math.random() * 360}, 50%, 50%`, {
                x: Math.cos(angleIncrement * i) * Math.random() * power,
                y: Math.sin(angleIncrement * i) * Math.random() * power
            }))
    }

})