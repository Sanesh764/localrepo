let x=document.getElementById("pika");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
});

let y=document.getElementById("chari");
y.addEventListener("mousemove",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
});
y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="black";
});
let z=document.getElementById("mewtwo");
y.addEventListener("click",function(){
    z.style.color="red";
    z.style.backgroundColor="green";
});

z.addEventListener("click",function(){
    z.style.color="dark yellow";
    z.style.backgroundColor="purple";

});