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
ctx4.lineWidth = 5;
ctx4.strokeStyle = '#999999';
ctx4.stroke();

//man
const man = document.getElementById('man');
const ctx5 = man.getContext('2d');

man.width = 120;
man.height = 240;

ctx5.beginPath();
const centerX5 = man.width / 2;
const centerY5 = man.height / 2;
//head
ctx5.arc(centerX5, 30, 20, 10, 0, Math.PI * 2);
//neck
ctx5.moveTo(centerX5, 50);
ctx5.lineTo(centerX5, 160);
ctx5.moveTo(centerX5, 70);
ctx5.lineTo(centerX5 - 45, 110);
ctx5.moveTo(centerX5, 70);
ctx5.lineTo(centerX5 + 45, 110);
ctx5.moveTo(centerX5, 160);
ctx5.lineTo(centerX5 - 45, 200);
ctx5.moveTo(centerX5, 160);
ctx5.lineTo(centerX5 + 45, 200);
ctx5.lineWidth = 5;
ctx5.strokeStyle = '#000';
ctx5.stroke();

//bible
const bible = document.getElementById('bible');
const ctx6 = bible.getContext('2d');

bible.width = 200;
bible.height = 240;

//upper cover
ctx6.beginPath();
const centerX6 = bible.width / 2;
const centerY6 = bible.height / 2;
ctx6.moveTo(0, 30);
ctx6.lineTo(170, 30);
ctx6.lineTo(200, 0);
ctx6.lineTo(30, 0);
ctx6.lineTo(0, 30);
ctx6.fillStyle = '#880000';
ctx6.fill();
ctx6.closePath();

//main cover
ctx6.beginPath();
ctx6.moveTo(0, 30);
ctx6.lineTo(0, 240);
ctx6.lineTo(170, 240);
ctx6.lineTo(170, 30);
ctx6.lineTo(0,30);
ctx6.fillStyle = '#000000';
ctx6.fill();
ctx6.closePath();

//side cover
ctx6.beginPath();
ctx6.moveTo(170, 240);
ctx6.lineTo(200, 210);
ctx6.lineTo(200, 0);
ctx6.lineTo(170, 30);
ctx6.lineTo(170, 240);
//fill text
ctx6.font = '30px Arial';
ctx6.fillStyle = 'white';
ctx6.fillText('Holy Bible', 18, 100);
ctx6.fillStyle = '#880000';
ctx6.fill();
ctx6.closePath();

//life
const life = document.getElementById('life');
const ctx7 = life.getContext('2d');

life.width = 450;
life.height = 250;

//line
ctx7.beginPath();
ctx7.moveTo(80, 200);
ctx7.lineTo(380, 200);
ctx7.moveTo(360, 180);
ctx7.lineTo(380, 200);
ctx7.lineTo(360, 220);
ctx7.lineWidth = 5;
ctx7.strokeStyle = '#000';
ctx7.stroke();
ctx7.closePath();
//text
ctx7.beginPath();
ctx7.lineWidth = 1;
ctx7.strokeStyle = 'black';
ctx7.font = '20px serif';
ctx7.fillStyle = '#000000';
ctx7.fillText('Birth', 20, 205);
ctx7.fillText('Death', 390, 206);
ctx7.fillText('Life', 220, 230);
ctx7.fill();
ctx7.closePath();
//arrow
ctx7.beginPath();
ctx7.moveTo(185, 180);
ctx7.lineTo(200, 197);
ctx7.lineTo(215, 180);
ctx7.moveTo(200, 197);
ctx7.quadraticCurveTo(200, 150, 300, 50);
ctx7.lineWidth = 2;
ctx7.strokeStyle = 'red';
ctx7.stroke();
ctx7.closePath();
//another text
ctx7.beginPath();
ctx7.font = '20px Arial';
ctx7.fillStyle = "#000000";
ctx7.fillText('Where I was', 310, 50);

//hourglass
const sandglass = document.getElementById('sandglass');
const ctx8 = sandglass.getContext('2d');

sandglass.width = 150;
sandglass.height = 200;

//outer lines
ctx8.beginPath();
ctx8.moveTo(10, 10);
ctx8.lineTo(140, 10);
ctx8.quadraticCurveTo(125, 50, 90, 100);
ctx8.quadraticCurveTo(125, 150, 140, 190);
ctx8.lineTo(10, 190);
ctx8.quadraticCurveTo(25, 150, 70, 100);
ctx8.quadraticCurveTo(25, 50, 10, 8);
ctx8.lineWidth = 5;
ctx8.strokeStyle = '#000';
ctx8.stroke();
ctx8.closePath();

//life text
ctx8.beginPath();
ctx8.font = '20px Arial';
ctx8.fillStyle = "black";
ctx8.fillText('LIFE', 55, 50);
ctx8.fillText('DEATH', 43, 170);
ctx8.closePath();

//sands 
ctx8.beginPath();
const centerX8 = sandglass.width / 2;
const centerY8 = sandglass.height / 2;
ctx8.moveTo(centerX8 - 30, centerY8 - 40);
ctx8.lineTo(centerX8 + 35, centerY8 - 40);
ctx8.lineTo(centerX8 + 25, centerY8 - 30);
ctx8.lineTo(centerX8 + 5, centerY8 - 5);
ctx8.lineTo(centerX8 + 5, centerY8 - 5);
ctx8.lineTo(centerX8 - 28, centerY8 - 40);
ctx8.moveTo(centerX8 - 30, centerY8 + 50);
ctx8.lineTo(centerX8 + 37, centerY8 + 50);
ctx8.lineTo(centerX8 + 5, centerY8 + 5);
ctx8.lineTo(centerX8 + 5, centerY8 + 5);
ctx8.lineTo(centerX8 - 27, centerY8 + 40);
ctx8.moveTo(centerX8 - 60, centerY8 + 90);
ctx8.lineTo(centerX8 + 60, centerY8 + 90);
ctx8.lineTo(centerX8 + 50, centerY8 + 75);
ctx8.lineTo(centerX8 - 50, centerY8 + 75);
ctx8.lineTo(centerX8 - 60, centerY8 + 85);
ctx8.fillStyle = 'blue';
ctx8.fill();
ctx8.closePath();

//line
ctx8.beginPath();
ctx8.moveTo(centerX8 + 4, centerY8 - 10);
ctx8.lineTo(centerX8 + 4, centerY8 + 10);
ctx8.moveTo(centerX8 - 20, centerY8 + 38);
ctx8.lineTo(centerX8 - 60, centerY8 + 85);
ctx8.moveTo(centerX8 + 24, centerY8 + 38);
ctx8.lineTo(centerX8 + 61, centerY8 + 89);
ctx8.lineWidth = 8;
ctx8.strokeStyle = 'blue';
ctx8.stroke();



// ctx8.strokeStyle = 'blue';
// ctx8.stroke();


        //Arc
        // ctx.beginPath();
        // const centerX = well.width / 2;
        // const centerY = well.height / 2;
        // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
        // ctx.strokeStyle = '#fff';
        // ctx.stroke();