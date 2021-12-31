//Initial setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};

addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

// Objects
class Particle {
    constructor(x, y, radius, color, velocity){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.ttl = 1000;
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
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.ttl--
    }
}

// Implementation

let particles
function init() {
    particles = []
    
    const radius = 100

    for (let i = 0; i < 30; i++) {
        const radian = (Math.PI * 2) / 30
        const x = canvas.width / 2 
        const y = canvas.height / 2 
        particles.push(new Particle(x, y, 5, 'blue', {
            x: Math.cos(radian * i),
            y: Math.sin(radian * i)
            })
        )
    }
}

let hue = 0
let hueRadians = 0

function generateRing() {
    setTimeout(generateRing, 200)
    hue = Math.sin(hueRadians) 
    for (let i = 0; i < 30; i++) {
        const radian = (Math.PI * 2) / 30
        const x = mouse.x
        const y = mouse.y
        particles.push(new Particle(x, y, 5, `hsl(${Math.abs(hue * 360)}, 50%, 50%)`, {
            x: Math.cos(radian * i),
            y: Math.sin(radian * i)
        })
    )
}
    hueRadians += 0.01
}

//Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.fillRect(0,0,canvas.width,canvas.height);

    particles.forEach((particle, i) => {

        if (particle.ttl < 0) {
            particles.splice(i, 1)
        } else {
            particle.update()
        }
    })
}

init()
animate()
generateRing()