let ctx = document.getElementById("my_canvas").getContext("2d");
document.getElementById("my_canvas").width = innerWidth;
document.getElementById("my_canvas").height = innerHeight-120;
let radius=200;
let i=0;
let angle=0;
let sizeX=24;
let sizeY=24;
let a=1.1;
let x=document.getElementById("my_canvas").width/2;
let y=document.getElementById("my_canvas").height*10/24;
let colors=["red","orange","yellow","green","skyblue","blue","purple","black"];
const rectangle = new Path2D();
function draw(){
    if(i===8){i=0;}
    let vx = Math.cos(angle) * radius;
    let vy = Math.sin(angle) * radius;
    ctx.fillStyle=colors[i];
    i++;
    const rectangle = new Path2D();
    //ctx.translate(0.01, 0.01);
    rectangle.rect(x + vx, y + vy, sizeX, sizeY);
    ctx.fill(rectangle);
    angle+=a;
    sizeX=document.getElementById("sizeX").value;
    sizeY=document.getElementById("sizeY").value;
}
/*Angle*/
increase=document.querySelector(".inc");
increase.addEventListener("click", (e)=>{
    a+=0.1;
    console.log(a);
})
decrease=document.querySelector(".dec");
decrease.addEventListener("click", (e)=>{
    a-=0.1;
    console.log(a);
})

let frame=()=>{
    draw();
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);


