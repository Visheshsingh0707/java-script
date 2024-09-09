let boxes=document.querySelectorAll(".box");
let resetButt=document.querySelector("#reset");
let container=document.querySelector(".msg-container");
let message=document.querySelector("#mssg");
let newGame=document.querySelector("#newgame");
let turnO=true;
let count=0;
let winPatt=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
                if(turnO){box.innerText="O";
                 turnO=false;
        }else{box.innerText="X";
            turnO=true;
        }
        box.disabled=true; count++;
       let isWinner= checkWinner();
        if(count===9 && !isWinner){
            gameDraw();}
    });
});

let gameDraw=()=>{
    message.innerText="Game was a draw";
    container.classList.remove("hide");
disable();
}



const checkWinner=()=>{
  for(pattern of winPatt){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
    console.log("winner",pos1);
    showWinner(pos1);
    return true;
        }
    }
  }
}
const showWinner=(winner)=>{
message.innerText=`Congratulations,Winner is ${winner}`;
container.classList.remove("hide");
disable();
}
//to disable all boxes after we get a winer
let disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
//to reset/new game button
let enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }}
let reset=()=>{
turnO=true;
container.classList.add("hide");
enable();
}
newGame.addEventListener("click",reset);
resetButt.addEventListener("click",reset);











