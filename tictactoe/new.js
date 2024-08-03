let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpattens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]
const resetGame=()=>{
    let turn0=true;
    moves=0;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0){
        box.innerHTML=`<span style="color:#0063B2FF">O</span>`;
        turn0=false;
       }
       else{
        box.innerHTML=`<span style="color: #134B70">X</span>`;
        turn0=true;
       }
       box.disabled=true;
       checkWinner();
    });
    
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
let moves = 0;
const checkWinner=()=>{
    for(let pattern of winpattens){
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
             
                showWinner(pos1Val);
            }
          
        }
    }
    moves++;
    if (moves === 9) {
    msg.innerText = "It's a draw!";
      msgContainer.classList.remove("hide");
      disabledBoxes();
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

var origBoard;
const huPlayer='o';
const aiPlayer='X'
