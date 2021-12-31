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

//event listeners 
addEventListener('mousemove', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

//Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = '#1A1A23'
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (mouse.x + 100 >= canvas.width / 2 - 50 &&
        mouse.x <= canvas.width / 2 - 50 + 100 &&
        mouse.y + 100 >= canvas.height / 2 - 50 &&
        mouse.y <= canvas.height / 2 - 50 + 100){
        console.log('colliding')
    }

    //red rectangle
    ctx.fillStyle = '#E86262'
    ctx.fillRect(mouse.x, mouse.y, 100, 100)

    //blue rectangle
    ctx.fillStyle = '#92ABEA';
    ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100)
}

animate();