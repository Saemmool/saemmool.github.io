const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowblur = 10;
ctx.shadowColor = 'black';
let hue = 0;
let drawing = false;
// ctx.globalCompositeOperation = 'hue';

function drawShape(x, y, radius, inset, n){
    ctx.fillStyle = 'hsl(' + hue + ',100%,50%)';
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);

    for (let i = 0; i < n; i++){
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }


    ctx.restore();
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill();
}

const radius = 70;
const inset = 0.5;
const n = 20;
drawShape(200, 120, 100, 0.5, 5);

let angle = 0;

window.addEventListener('mousemove', function(e){
    if (drawing) {
        ctx.save();
        ctx.translate(e.x, e.y);
        ctx.rotate(angle);
        hue+=3;
        angle += 0.1;
        drawShape(150, 150, radius, inset, n);
        ctx.restore();
    }

});

window.addEventListener('mousedown', function(){
    drawing = true;
});


window.addEventListener('mouseup', function(){
    drawing = false;
});