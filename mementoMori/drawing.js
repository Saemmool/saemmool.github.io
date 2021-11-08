const well = document.getElementById('well');
const ctx = well.getContext('2d');

//well width and height 
well.width = 300;
well.height = 300;

// top of the well
ctx.beginPath();
const centerX = well.width / 2;
const centerY = well.height / 2;
ctx.moveTo(0,80);
ctx.quadraticCurveTo(centerX, -30, 300, 80);
ctx.moveTo(300, 80);
ctx.quadraticCurveTo(centerX, 150, 0, 80)
ctx.fillStyle = '#2BA2FF';
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, 80);
ctx.lineTo(0, 250);
ctx.quadraticCurveTo(centerX, 300, 300, 250);
ctx.lineTo(300, 80);
ctx.moveTo(0, 120);
ctx.quadraticCurveTo(centerX, 180, 300, 120);
ctx.moveTo(0, 160);
ctx.quadraticCurveTo(centerX, 220, 300, 160);
ctx.moveTo(0, 200);
ctx.quadraticCurveTo(centerX, 260, 300, 200);
ctx.moveTo(40, 96);
ctx.lineTo(40, 262);
ctx.moveTo(80, 107);
ctx.lineTo(80, 270);
ctx.moveTo(120, 110);
ctx.lineTo(120, 275);
ctx.moveTo(160, 115);
ctx.lineTo(160, 276);
ctx.moveTo(200, 113);
ctx.lineTo(200, 273);
ctx.moveTo(240, 105);
ctx.lineTo(240, 266);
ctx.moveTo(275, 93);
ctx.lineTo(275, 257);
ctx.strokeStyle = '#999';
ctx.stroke();

// ctx.moveTo(0,25);
// ctx.quadraticCurveTo(centerX, centerY, centerX + 150, 25);
// ctx.moveTo(0, 25);
// ctx.lineTo(0, 350);
// ctx.quadraticCurveTo(150, 420, 300, 350);
// ctx.lineTo(300, 25);
// ctx.quadraticCurveTo(150, -20, 0, 25);
// ctx.strokeStyle= '#999';
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(0,25);
// ctx.quadraticCurveTo(centerX, centerY, centerX + 150, 25);
// ctx.quadraticCurveTo(150, -20, 0, 25);
// ctx.fillStyle = '#2BA2FF';
// ctx.fill();
// ctx.closePath();

//face 

const face = document.getElementById('face');
const ctx2 = face.getContext('2d');

face.width = 200;
face.height = 200;

ctx2.beginPath();
const centerX2 = face.width / 2;
const centerY2 = face.height / 2;
ctx2.arc(centerX2, centerY2, 100, 0, Math.PI * 2);
ctx2.moveTo(80, 70);
ctx2.arc(60, 70, 20, 0, Math.PI * 2);
ctx2.moveTo(160,70);
ctx2.arc(140, 70, 20,  0, Math.PI * 2);
ctx2.moveTo(60, 140);
ctx2.lineTo(140, 140);
ctx2.strokeStyle = '#000000';
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.arc(centerX2 - 40, centerY2 - 20, 10, 0, Math.PI * 2);
ctx2.arc(centerX2 + 40, centerY2 - 20, 10, 0, Math.PI * 2);
ctx2.fillStyle = '#000000';
ctx2.fill();


        //Arc
        // ctx.beginPath();
        // const centerX = well.width / 2;
        // const centerY = well.height / 2;
        // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
        // ctx.strokeStyle = '#fff';
        // ctx.stroke();

//coal

const coal = document.getElementById('coal');
const ctx3 = coal.getContext('2d');

coal.width = 100;
coal.height = 120;

ctx3.beginPath();
const centerX3 = coal.width / 2;
const centerY3 = coal.height / 2;
ctx3.arc(centerX3, centerY3, 50, 100, 0, Math.PI, false);
ctx3.moveTo(0, 50);
ctx3.lineTo(0, 90);
ctx3.lineTo(100, 90);
ctx3.lineTo(100, 50);
ctx3.moveTo(0, 90);
ctx3.bezierCurveTo(25, 120, 80, 120, 100, 90);
ctx3.fillStyle = '#454545';
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.arc(20, 40, 7, 100, 0, Math.PI);
ctx3.moveTo(80, 70);
ctx3.arc(80, 40, 7, 20, 0, Math.PI *2);
ctx3.moveTo(70, 10);
ctx3.arc(40, 25, 7, 10, -10, Math.PI *2);
ctx3.moveTo(90, 10);
ctx3.arc(63, 25, 7, 50, 0, Math.PI *2);
ctx3.moveTo(30, 70);
ctx3.arc(64, 55, 7, 50, 30, Math.PI *2);
ctx3.moveTo(15, 70);
ctx3.arc(35, 55, 7, 40, 30, Math.PI *2);

// ctx3.moveto()
// ctx3.arc(27, 55, 7, 100, 0, Math.PI); 
ctx3.fillStyle = '#000000';
ctx3.fill();


//book 
const book = document.getElementById('book');
const ctx4 = book.getContext('2d');

book.width = 500;
book.height = 250;

ctx4.beginPath();
const centerX4 = book.width / 2;
const centerY4 = book.height / 2;
ctx4.moveTo(0, 40);
ctx4.quadraticCurveTo(125, -20, 250, 40);
ctx4.quadraticCurveTo(375, -20, 500, 40);
ctx4.lineTo(500, 210);
ctx4.lineTo(250, 250);
ctx4.lineTo(0, 210);
ctx4.lineTo(0, 40);
ctx4.moveTo(220, 27);
ctx4.lineTo(220, 244);
ctx4.moveTo(280, 27);
ctx4.lineTo(280, 244);
ctx4.strokeStyle = '#999999';
ctx4.stroke();
