const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.height = 700;
canvas.width = 1200;
canvas.style.marginLeft="0px";

let paint = false;

function startDraw(e){
    paint=true;
    console.log(true);
    draw(e);
}

function stopDraw(){
    paint=false;
    console.log(false);
    ctx.beginPath();
}

function draw(e){
    if(!paint) return;
    ctx.lineCap = "round";
    let mouse = {x:0, y:0};

    mouse.x=e.pageX-this.offsetLeft;
    mouse.y=e.pageY-this.offsetTop;

    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);

}

canvas.addEventListener('mousedown',startDraw);
canvas.addEventListener('mouseup',stopDraw);
canvas.addEventListener('mousemove',draw);

const dlt= document.getElementById('delete');
const fill = document.getElementById('fill');
const eraser = document.getElementById('eraser');
const pen = document.getElementById('pen');
const bg = document.querySelector("canvas");

dlt.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    canvas.style.backgroundColor="#fff"
});

fill.addEventListener('click',()=>{
    let canvasBG = document.getElementById('canvasBG').value;
    canvas.style.backgroundColor= canvasBG;
    console.log(canvasBG);
});

eraser.addEventListener('click',()=>{
    ctx.globalCompositeOperation="destination-out";
    ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
    ctx.fill();
});

pen.addEventListener('click',()=>{
    ctx.globalCompositeOperation="source-over";
    /*let penSize = document.getElementById('penSize').value;
    let penColor = document.getElementById('penColor').value;
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penSize;*/
});

const penSZ = document.getElementById('penSize');
const penC = document.getElementById('penColor');

penSZ.addEventListener('input',()=>{
    let penSize = document.getElementById('penSize').value;
    ctx.lineWidth = penSize;
});

penC.addEventListener('input',()=>{
    let penColor = document.getElementById('penColor').value;
    ctx.strokeStyle=penColor;
});
const bodyWidth = (document.body.clientWidth);
console.log(bodyWidth);
const body = document.getElementsByTagName("body");

if(bodyWidth < 750){
    canvas.width = 450;
    canvas.height = 350;
}else if(bodyWidth < 1100){
    canvas.width = 750;
    canvas.height = 550;
}else if(bodyWidth > 1600){
    canvas.width = 1600;
    canvas.height = 800;
}else if(bodyWidth < 1600){
    canvas.width = 1100;
    canvas.height = 600;
}