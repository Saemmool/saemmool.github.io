const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;

let number = 0;
let scale = 10;

// let positionX = canvas.width/2;
// let positionY = canvas.height/2;
// let angle = 0;

function drawFlower(){
    let angle = number * 0.8;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++;
}

function animate() {
    //draw each frame
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // size += 0.15;
    // positionX += 5 * Math.sin(angle);
    // positionY += 5 * Math.cos(angle);
    // angle += 0.1;
    drawFlower();
    if (number > 100) return;
    requestAnimationFrame(animate);
}
animate();