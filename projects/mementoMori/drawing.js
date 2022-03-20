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

const circle = document.getElementById('circle');
const ctx9 = circle.getContext('2d');

circle.width = 240;
circle.height = 240;

// circle
ctx9.beginPath();
const centerX9 = circle.width / 2;
const centerY9 = circle.height / 2;
ctx9.moveTo(40, centerY9 - 30);
ctx9.quadraticCurveTo(centerX9, -80, 200, centerY9 - 30);
ctx9.moveTo(40, centerY9 + 30);
ctx9.quadraticCurveTo(centerX9, 320, 200, centerY9 + 30);
ctx9.moveTo(175, centerY9 - 42);
ctx9.lineTo(200, centerY9 - 30);
ctx9.lineTo(210, centerY9 - 52);
ctx9.moveTo(30, centerY9 + 55);
ctx9.lineTo(40, centerY9 + 25);
ctx9.lineTo(65, centerY9 + 40);
ctx9.lineWidth = 5;
ctx9.strokeStyle = '#999999';
ctx9.stroke();
ctx8.closePath();

//circle text
ctx9.beginPath();
ctx9.font = '20px Arial';
ctx9.fillStyle = "black";
ctx9.fillText('Living', 20, centerY9 + 5);
ctx9.fillText('Dying', 170, centerY9 + 5);
ctx9.closePath();

// stone 
const stone = document.getElementById('stone');
const ctx10 = stone.getContext('2d');

stone.width = 240;
stone.height = 240;

ctx10.beginPath();
const centerX10 = stone.width / 2;
const centerY10 = stone.height / 2;
//main stone
ctx10.moveTo(60, 20);
ctx10.lineTo(180, 20);
ctx10.lineTo(180, 180);
ctx10.lineTo(60, 180);
ctx10.lineTo(60, 18);
ctx10.lineWidth = 5;
ctx10.strokeStyle = '#000000';
ctx10.stroke();
ctx10.fillStyle = '#ACACAC';
ctx10.fill();
ctx10.closePath();

ctx10.beginPath();
ctx10.moveTo(60, 20);
ctx10.lineTo(80, 3);
ctx10.lineTo(200, 3);
ctx10.lineTo(180, 20);
ctx10.lineTo(60, 20);
ctx10.lineWidth = 5;
ctx10.strokeStyle = '#000000';
ctx10.stroke();
ctx10.fillStyle = '#ACACAC';
ctx10.fill();
ctx10.closePath();

ctx10.beginPath();
ctx10.moveTo(200, 2);
ctx10.lineTo(200, 160);
ctx10.lineTo(179, 179);
ctx10.lineTo(180, 22);
ctx10.lineWidth = 5;
ctx10.strokeStyle = '#000000';
ctx10.stroke();
ctx10.fillStyle = '#ACACAC';
ctx10.fill();
ctx10.closePath();

ctx10.beginPath();
ctx10.moveTo(60, 160);
ctx10.lineTo(40, 160);
ctx10.lineTo(10, 220);
ctx10.lineTo(230, 220);
ctx10.lineTo(220, 160);
ctx10.lineTo(200, 160);
ctx10.moveTo(10, 220);
ctx10.lineTo(10, 240);
ctx10.lineTo(230, 240);
ctx10.lineTo(230, 220);
ctx10.lineTo(10, 220);
ctx10.lineWidth = 5;
ctx10.strokeStyle = '#000000';
ctx10.stroke();
ctx10.closePath();

//circle text
ctx10.beginPath();
ctx10.font = '15px Arial';
ctx10.fillStyle = "black";
ctx10.fillText('HODDIE MIHI', 70, 60);
ctx10.fillText('CRAS TIBI', 80, 90);
ctx10.closePath();

// paper 
const paper = document.getElementById('paper');
const ctx11 = paper.getContext('2d');

paper.width = 400;
paper.height = 300;

ctx11.beginPath();
const centerX11 = paper.width / 2;
const centerY11 = paper.height / 2;
ctx11.arc(20, 30, 10, 0, Math.PI * 2);
ctx11.moveTo(30, 280);
ctx11.arc(20, 280, 10, 0, Math.PI * 2);
ctx11.moveTo(10, 26);
ctx11.lineTo(10, 280);
ctx11.moveTo(30, 26);
ctx11.lineTo(30, 280);
ctx11.moveTo(380, 26);
ctx11.lineTo(380, 280);
ctx11.moveTo(18, 20);
ctx11.bezierCurveTo(100, -10, 200, 50, 380, 26);
ctx11.moveTo(20, 290);
ctx11.bezierCurveTo(120, 250, 200, 300, 380, 280);
ctx11.strokeStyle = 'white';
ctx11.lineWidth = 2;
ctx11.stroke();

//paper text
ctx11.beginPath();
ctx11.font = '15px Arial';
ctx11.fillStyle = "white";
ctx11.fillText('1. Everybody dies once. No one can avoid it.', 40, 100);
ctx11.fillText('2. Death does not comes in order.', 40, 130);
ctx11.fillText('3. You cannot carry anything when you die.', 40, 160);
ctx11.fillText('4. No one can die behalf of you.', 40, 190);
ctx11.fillText('5. You cannot experience death until you die.', 40, 220);
ctx11.closePath();

//wall 
const wall = document.getElementById('wall');
const ctx12 = wall.getContext('2d');

wall.width = 400;
wall.height = 200;

ctx12.beginPath();
const centerX12 = wall.width / 2;
const centerY12 = wall.height / 2;
//wall

ctx12.fillStyle = '#ACACAC';
ctx12.fillRect(centerX12, 0, 20, 160);

//text
ctx12.beginPath();
ctx12.font = '25px Arial';
ctx12.fillStyle = "white";
ctx12.fillText('LIFE', 70, 90);
ctx12.fillStyle = "red";
ctx12.fillText('DEATH', centerX12 - 40, 190);
ctx12.closePath();

ctx12.beginPath();
ctx12.arc(300, 70, 10, 3.5, Math.PI * 2.55, false);
ctx12.lineTo(298, 95);
ctx12.moveTo(298, 99);
ctx12.arc(298, 102, 3, 0, Math.PI * 2);
ctx12.strokeStyle = '#ACACAC';
ctx12.lineWidth = 2;
ctx12.stroke();

//another wall
const anothewall = document.getElementById('anotherwall');
const ctx13 = anotherwall.getContext('2d');
const centerX13 = anotherwall.width / 2;
const centerY13 = anotherwall.height / 2;

anotherwall.width = 400;
anotherwall.height = 200;

ctx13.fillStyle = '#ACACAC';
ctx13.fillRect(centerX13, 0, 20, 160);

//text - life
ctx13.beginPath();
ctx13.font = '25px Arial';
ctx12.fillStyle = "white";
ctx13.fillText('LIFE', 30, 60);
ctx13.font = '20px Arial';
ctx13.fillText('LIFE', 330, 60);
ctx13.fillText('AFTER', 310, 90);
ctx13.fillText('DEATH', 310, 120);
ctx13.fillStyle = "red";
ctx13.font = '25px Arial';
ctx13.fillText('DEATH', centerX13 - 40, 190);
ctx13.closePath();

//person
ctx13.beginPath();
ctx13.arc(60, 90, 10, 0, Math.PI * 2);
ctx13.moveTo(60, 99);
ctx13.lineTo(60, 150);
ctx13.moveTo(40, 130);
ctx13.lineTo(60, 110);
ctx13.lineTo(80, 130);
ctx13.moveTo(40, 170);
ctx13.lineTo(60, 150);
ctx13.lineTo(80, 170);
ctx13.strokeStyle = 'blue';
ctx13.lineWidth = 2;
ctx13.stroke();
ctx13.closePath();

//heart
ctx13.beginPath();
ctx13.moveTo(centerX13 + 70, centerY13);
ctx13.quadraticCurveTo(centerX13 + 60, centerY13 - 30, centerX13 + 40, centerY13);
ctx13.moveTo(centerX13 + 70, centerY13);
ctx13.quadraticCurveTo(centerX13 + 90, centerY13 - 30, centerX13 + 100, centerY13);
ctx13.moveTo(centerX13 + 40, centerY13);
ctx13.quadraticCurveTo(centerX13 + 50, centerY13 + 25, centerX13 + 70, centerY13 + 35);
ctx13.moveTo(centerX13 + 100, centerY13);
ctx13.quadraticCurveTo(centerX13 + 90, centerY13 + 25, centerX13 + 68, centerY13 + 35);
ctx13.strokeStyle = 'blue';
ctx13.lineWidth = 2;
ctx13.stroke();
ctx13.closePath();

//line
ctx13.beginPath();
ctx13.moveTo(100, 100);
ctx13.lineTo(185, 90);
ctx13.moveTo(160, 80);
ctx13.lineTo(185, 90);
ctx13.lineTo(160, 105);
ctx13.strokeStyle = 'yellow';
ctx13.lineWidth = 2;
ctx13.stroke();
ctx13.closePath();

//tomb
const tomb = document.getElementById('tomb');
const ctx14 = tomb.getContext('2d');
const centerX14 = anotherwall.width / 2;
const centerY14 = anotherwall.height / 2;

tomb.width = 400;
tomb.height = 240;

ctx14.beginPath();
ctx14.moveTo(20, centerY14);
ctx14.lineTo(380, 20);
ctx14.lineTo(400, 120);
ctx14.lineTo(40, 200);
ctx14.lineTo(20, centerY14);
ctx14.lineTo(20, centerY14 + 60);
ctx14.lineTo(40, 240);
ctx14.lineTo(40, 200);
ctx14.moveTo(40, 240);
ctx14.lineTo(380, 180);
ctx14.lineTo(400, 120);
ctx14.strokeStyle = 'grey';
ctx14.lineWidth = 2;
ctx14.stroke();
ctx14.closePath();

ctx14.beginPath();
ctx14.moveTo(300, centerY14 - 15);
ctx14.lineTo(200, centerY14 + 10);
ctx14.moveTo(260, 70);
ctx14.lineTo(280, 120);
ctx14.strokeStyle = '#6C0000';
ctx14.lineWidth = 10;
ctx14.stroke();

//letter
const letter = document.getElementById('letter');
const ctx15 = letter.getContext('2d');
const centerX15 = letter.width / 2;
const centerY15 = letter.height / 2;

letter.width = 200;
letter.height = 200;

ctx15.beginPath();
ctx15.moveTo(10, 10);
ctx15.lineTo(190, 10);
ctx15.lineTo(100, 100);
ctx15.lineTo(10, 10);
ctx15.lineTo(10, 190);
ctx15.lineTo(190, 190);
ctx15.lineTo(190, 10);
ctx15.strokeStyle = 'white';
ctx15.lineWidth = 2;
ctx15.stroke();
ctx15.closePath();

//memento
const memento = document.getElementById('memento');
const ctx16 = memento.getContext('2d');
const centerX16 = memento.width / 2;
const centerY16 = memento.height / 2;

memento.width = 250;
memento.height = 250;

//word 
ctx16.beginPath();
ctx16.moveTo(150, 50);
ctx16.quadraticCurveTo(50, 50, 50, 125);
ctx16.quadraticCurveTo(50, 200, 100, 200);
ctx16.quadraticCurveTo(100, 240, 60, 250);
ctx16.quadraticCurveTo(120, 240, 130, 200);
ctx16.quadraticCurveTo(250, 200, 250, 125);
ctx16.quadraticCurveTo(250, 50, 150, 50);
ctx16.strokeStyle = 'white';
ctx16.lineWidth = 2;
ctx16.stroke();
ctx16.closePath();

//text
ctx16.beginPath();
ctx16.font = '25px Arial';
ctx16.fillStyle = "white";
ctx16.fillText('MEMENTO', 80, 120);
ctx16.fillText('MORI', 110, 150);
ctx16.closePath();


// function Circle(x, y, r, c) {
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.c = c;

//         this.dx;
//         this.dy;

//         this.draw = function() {
//                 ctx12.beginPath();
//                 ctx12.fillStyle = this.c;
//                 ctx12.arc(this.x, this.y, this.r, 3.5, Math.PI * 2.5);
//                 ctx12.lineTo(280, 130);
//                 ctx12.moveTo(282, 135);
//                 ctx12.arc(280, 136, 3, 0, Math.PI * 2);
//                 ctx12.strokeStyle = 'white';
//                 ctx12.stroke();
//         }
// }

// const balls = [];
// for (let i = 0; i < 20; i++) {
//         let r = Math.floor(Math.random() * 30) + 15;
//         let x = Math.random() * (400 - r * 2 + 220) + r;
//         let y = Math.random() * (wall.height - r * 2) + r;
//         let c = 'red';
//         balls.push(new Circle(x, y, r, c));
// }

// function Update() {
//         for (let i = 0; i < balls.length; i++) {
//         balls[i].draw();
//         }
// }
// Update();

// let ball = new Circle(280, 100, 10, 'white');
// ball.draw();



// question mark
// function drawCircle() {
//        

// drawCircle();

// function update() {
//         ctx12.clearRect(220, 0, 400, 0);
//         drawCircle();
// }



// ctx12.strokeStyle = '#ACACAC';
// ctx12.lineWidth = 2;
// ctx12.stroke();




        //Arc
        // ctx.beginPath();
        // const centerX = well.width / 2;
        // const centerY = well.height / 2;
        // ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
        // ctx.strokeStyle = '#fff';
        // ctx.stroke();