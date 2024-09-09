//Practice ques 1
const product={
productname:"Ball Pen",
price:270,
rating:4,
}
console.log(product);
//practice ques 2
let num= prompt("Enter a number");
if(num%5===0){console.log(num," is the multiple of 5");}
else{console.log(num," is NOT the multiple of 5");}

//practice ques 3
let score=prompt("Enter your score");
let grade;
if(score<=100&&score>=90){grade="A";}
else if(score<=89&&score>=70){grade="B";}
else if(score<=69&&score>=60){grade="C";}
else if(score<=59&&score>=50){grade="D";}
else if(score<=49&&score>=0){grade="F";}
console.log("according to your score your grade is=",grade);

//practice ques 4
for(let i=0;i<=50;i++){
    if(i%2===0){console.log("i=",i)}
}

//practice ques 5
let gameNum=7;
let userNum=prompt("Guess the game number");
while(gameNum!=userNum){
    userNum=prompt("you guessed wrong,Guess again")//jab tk gamenum ,usernum ke equal nhi ho jata tb tk yeh loop chalta rhega jaise hi dono equal ho jayenge console.log wala print ho jayega.(also hum log != use krenge na ki !== kyuki prompt humesha string me answer deta hai.) 
};
console.log("you guessed the right number");

//practice ques 6
let so=prompt("enter you name");
let then="@"+so+so.length;
console.log("Username=",then);

//practice ques 7
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks)
    {sum+=val;}
console.log(sum);
let avg=sum/marks.length;
console.log(`average marks= ${avg}`);

//practice ques 8
let items=[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    offer=items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);

//practice ques 9
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.splice(2,1,"ola");
companies.shift();
companies.push("amazon");
console.log(companies);

//practice ques 10
function val(str){
     let count=0;
for(let i of str)
     {if(i==="a"||
i==="e"||
i==="i"||
i==="o"||
i==="u")
{count++;}}
console.log(count);
}
val("vishesh");
val("missisipi");


//practice ques 11
const vowels=(str)=>{
    let count=0;
    for(let i of str)
         {if(i==="a"||
    i==="e"||
    i==="i"||
    i==="o"||
    i==="u")
    {count++;}}
    console.log(count); 
}
val("aeiou");
val("discipline");

//practice ques 12
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
});

//practice ques 13
let mark=[23,97,54,76,98,90,91];
let mark90 =mark.filter((val)=>{
    return val>90;
});
console.log(mark90);

//practice ques 14
let n=prompt("enter a number for array");
arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;         //arr[0]=1,arr[1]=2 so on    
}
console.log(arr);
let cont=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(cont);
let ret=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(ret);

//practice ques 15
let doc=document.querySelector("h2");
doc.innerText=doc.innerText+"from College students"
console.dir(doc);

//practice ques 16
let log=document.querySelectorAll(".box");

let i=1
for(vals of log){
    vals.innerText=`new unique text ${i}`;i++
}

// //another way=>
//  let log=document.querySelectorAll(".box");    
// log[0].innerText="new unique text 1"
// log[1].innerText="new unique text 2"
// log[2].innerText="new unique text 3"


//practice ques 17
let bob=document.querySelector("body");
let suu=document.createElement("button")
suu.innerText="Click Me!";
suu.style.color="white";
suu.style.backgroundColor="red";
bob.prepend(suu);

//practice ques 18
let diff=document.querySelector("p");
diff.classList.add("newClass");

//practice ques19
let change=document.querySelector(".mode");
let BODY=document.querySelector("body");
let currMode="light";
change.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        BODY.style.backgroundColor ="black";   
    }else{
        currMode="light";
        BODY.style.backgroundColor="white";
    }
    console.log(currMode);
})

//practice ques 20
class user{
    constructor(name,email){
       this.Name=name;
       this.Email=email;}
    viewdata(){
     console.log("data=",DATA);
    }
}
let DATA="view INFORMATION";

let student1=new user("Vishesh","vsingh@gamil.com");
console.log("student1",student1);

let student2=new user("Dhruv","dyadav@gamil.com");
console.log("student2",student2);

//PRACTICE ques21
class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
editData(){
    DATA="new information";
}
}

let Admin1=new Admin("Piyush","pmish@gmail.com");





