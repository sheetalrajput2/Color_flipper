const Code = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const main=document.querySelector(".main")
const btn=document.querySelector(".btn")
btn.addEventListener("click",function(){
    let color = "#";
    for(let i=1; i<=6; i++){
        color +=Code[randomNum()];
    }
    main.style.backgroundColor = color;
    document.querySelector(".bold").innerText=color;
})
function randomNum(){
    return Math.floor(Math.random()*Code.length);
}