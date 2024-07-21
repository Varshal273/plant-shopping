let interval = "5000"
let count = 0;
let direction = "right";
let intervalID;
function startinterval(){
intervalID = setInterval(() => {
    if(count < 2 & direction == "right"){
        document.getElementById('scroll').scrollBy({
            top: 0,
            left: 1000,
            behavior: "smooth",
        });
        count++;
        // console.log(count);
    }
    else if(count > 0 & direction == "left"){
        document.getElementById('scroll').scrollBy({
            top: 0,
            left: -1000,
            behavior: "smooth",
        });
        count--;
        // console.log(count);
    }
    if(count == 2){
        direction = "left"
        // console.log(count);
    }
    if(count == 0){
        direction = "right"
        // console.log(count);
    }
}, interval);}
document.getElementById('scroll').addEventListener("mouseover",()=>{
    clearInterval(intervalID);
});
document.getElementById('scroll').addEventListener("mouseout",()=>{
    startinterval();
});
document.getElementById('scroll').addEventListener("click",()=>{
    startinterval();
});

startinterval();