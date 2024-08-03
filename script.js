const body = document.querySelector("body")

const start = document.querySelector("#start")

const stop = document.querySelector("#stop")

console.log(stop);



// generate a random color

const randomcolor = function(){
    const hex = "0123456789ABCDEF";

    let color = "#";

    for(let i = 0; i < 6; i++){
         color += hex[Math.floor(Math.random() * 16)]
    }
      return color;
}


let intervalId;

const startChangingColor = ()=>{
   
   if(!intervalId){
    intervalId = setInterval(changeBgColor,1000)
   }

   function changeBgColor(){
    document.body.style.backgroundColor = randomcolor()
   }
}

const stopChangingColor = ()=>{
     clearInterval(intervalId)
     intervalId = null;
};

start.addEventListener("click",startChangingColor)

stop.addEventListener("click", stopChangingColor)
