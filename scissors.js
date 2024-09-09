let scoreuser=document.querySelector("#user-score");
let scorecomp=document.querySelector("#comp-score");
let userScore=0;
let compScore=0;
let para=document.querySelector("#mssg");
let game=document.querySelectorAll(".choices");
game.forEach((val)=>{
val.addEventListener("click",()=>{
const userchoice=val.getAttribute("id");
   playGame(userchoice); })
})
let playGame=(userchoice)=>{
    console.log("user's choice and its id was=",userchoice);
     const computerChoice=compChoice();
    console.log("Computer's choice was=",computerChoice);
if(userchoice===computerChoice){
    para.innerText="Game was draw.Play Again!"; 
    para.style.backgroundColor="#081B31"
} else{
    let userWin=true;
    if(userchoice==="rock"){
        //ab computer ya to paper de ya phir scissor de kyuki agar rock  dega tb to game draw chuka hoga
     userWin=computerChoice==="scissors"?true:false;  
    } else if(userchoice==="paper"){
        userWin=computerChoice==="scissor"?false:true;
    }else{userWin=computerChoice==="rock"?false:true;}  //else case userchoice sirf scissor hi bachi hai
    showWinner(userWin ,userchoice ,computerChoice); 
     }}

let compChoice=()=>{
    const opt=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return opt[random];
}
// math.random is used jab aapko ki random value chahiye hoti hai between 0 and 1 aur jab usko(*3) 
// krte hai tab random value 0 and 2 milti hai aur jab in sbke phle Math.floor likhte iska mtlb 
// decimalke baad ki value nhi chahiye. opt[random] mtlb ho gya ki opt[0] or opt[1] r opt[2] index 
//value apply krne ke liye

const showWinner=(userWin,userchoice ,computerChoice)=>{
    if(userWin){ userScore++;
        scoreuser.innerText=userScore;
                 para.innerText=`YOU WIN!.Your ${userchoice} beats ${computerChoice}`;
                 para.style.backgroundColor="green";
    }
    else{compScore++;
        scorecomp.innerText=compScore;
        para.innerText=`YOU LOSE!. ${computerChoice} beats your ${userchoice}`;
        para.style.backgroundColor="red";
    }
}































