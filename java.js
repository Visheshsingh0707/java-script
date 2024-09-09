  console.log("my name is vishesh singh");
  console.log("this is my first JS code");
 // variables in js
  fullName="Vishesh Singh";
  console.log(fullName);
  steps=19;
  console.log(steps);
  price= 300;
  console.log(price);
//  let,var,const
let Age=9;
 Age=15;
console.log(Age);
// primitive data types
let p=777;
let q="tony stark";
let r=true;
let s;
let t=null;
let u=BigInt("234");
let v=Symbol("hey!");
// non-primitive data types
const student={
studentName:"rahual sharma",
class:9,
cgpa:8.6,
rollNo:240310230652
}
student["class"]=student["class"]+1
student["studentName"]="rohan singh"
console.log(student)


// Arithmetic operators
let a=4;
let b=9;
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)//remainder value when a/b
console.log("a**b=",a**b)//a^b
console.log("a++=",a++);//this step just change value and not print the value of a+1
console.log("a=",a);//this step will be needed to print the value of a+1
console.log("--b=",--b);//this is sufficient to print the value of b-1

//assignment operators
let x=5;
let y=3;
x+=2;
console.log(x);//means x=x+2 that is7
y*=2;
console.log(y);//means y=y*2 that is6
y/=3
console.log(y);//means x=x/3 that is1
x%=2;
console.log(x);//means x=x%2 that is1
y**=2;
console.log(y);//means y=y**2 that is9

//comparision operations
let f=3;
let g="3";
console.log("f==g=",f==g);
console.log("f===g=",f===g);
console.log("f>g",f>g);
console.log("f>=g",f>=g);

// logic operators
let w=6;
let z=7;
let cond1=w<z;//true
let cond2=w===z;//false
console.log("cond1&&cond2=",cond1&&cond2);//will print false bc one statement is false
console.log("cond1||cond2=",w<z||w===z);//will print true bc at least statement is true.(also this is another way of writing console if dont want to specifically create 2 condition ,then directly write inside console.log)
console.log("!(cond1)=",!(cond1))//will print false as statement is actually true bc this symbol prints opposite of what actually it is.

//conditional statements
//if statement
let mode="bright";
let color;
if(mode==="bright"){color="white";}
console.log(color);
//if-else statement
let j=3;
if(j%2===0){console.log("it is even",j);}
else{console.log("it is odd",j);}
//else-if statement
let Mode="blue";
let Color;
if(Mode==="dark") {Color="black";}
else if(Mode==="blue"){Color="blue";}
else if (Mode==="green"){Color="green";}
else{Color="white";}
console.log(Color)

//TERNARY OPRERATORS
let marks=57;
let result=marks>50?"passed":"NOT passed";
console.log(marks,result)

//for loop
for (let count=2;count<=5;count++){console.log("hello!")} //hello will be 4 times only because this time value is initialising from count=2 .

//calcute sum of first 5 numbers
let sum=0;
let n=5; 
for(i=1;i<=n;i++){sum=sum+i;}//phle step me sum ki value 1(sum=0+1) ho jayegi similarly dusre step me sum 3(i.e= sum=1+2 as i=2 ho rha hai dusri baar me.) ho jayega teesre step me sum=6(sum=3+3) aise hi fifth step me sum=15(sum=10+5)
console.log(sum);

//while loop
let number=3;
while(number<=10){console.log("number=",number);number++}

//do-while loop
let no=15;
do{console.log("hello!");no++;}
while(no<=20);

//for-of loop
let srv="vishesh";
let size=0;
for(i of srv){console.log(i);size++;}
console.log("string-size=",size);

//for-in loop
let children={
  name:"Aryan kapoor",
  age:24,
  cgpa:7.5,
  ispass :true,
}
for(let i in children){console.log(i);}//this will print only keys
for(let p in children){console.log("key=",p,"value=",children[p])}//this will print keys with their values

//stringsin js
let str="VISHESHSINGH";
console.log(str);
console.log(str.length);
console.log(str[8]);

//Template liberals
let string=`this is a template liberals`;//you can print sentences using this and they are writtn inside BACKTICKS(``)
console.log(string);

let obj={
  item:"pen",
  color:"Red",
  price:10
}
console.log("the item is",obj.item,"its color is",obj.color,"it is of",obj.price,"rupees");//this is how we used to print the key and its values in object

let output=`the item is ${obj.item} its color is ${obj.color} it is of ${obj.price}`;
console.log(output);//this is we can print keys and its values using template liberals

//string interpolation
let sd=`this is a text ${1+2+3+4+5}`;
console.log(sd)//${} ke andar jo bhi likha hota hai uski phle value calculate hoti hai phir print hoti hai

//to break line we use(\n)
console.log("Vishesh\nsingh");
//to create tab space we use (\t)
let sc="Vishesh\tsingh";
console.log(sc);
console.log(sc.length);//remember that (\t)is counted as 1 character hence string length will be 13

//different string methods in js
let up="snap chat";
let yes=up.toUpperCase();
console.log(yes);

let down="    snap   chat   ";
down=down.trim();
console.log(down);

let bot="PRINGLES";
console.log(bot.slice(3,6));

let str1="VISHESH";
let str2="SINGH";
let res=str1.concat(str2);//agar str2.concat(str1) likhte to [singhvishesh] print hota
console.log(res);
//in place of concat we can also use + sign,we can also merge more than 2 strings
let sult="My name is"+str1+str2;
console.log(sult);

let red="ring";
console.log(red.replace("r","s"));
let ret="hellololo";
console.log(ret.replace("lo","p"));//sirf sabse phla vala ""lo" hi replace hoga 
console.log(ret.replaceAll("lo","p"));//isme sare ""lo" replace honge kyuki yha replaceall likha hai

let str3="lobster";
console.log(str3.charAt(2));
console.log(str3.charAt(4));

//ARRAYS
let mark=[97,57,4,75,74];
console.log(mark[3]);
mark[0]=10;//if you want to change any array value
console.log(mark);

//loop in arrays
//using for loop
let heroes=["shaktiman","spiderman","thor","iron-man"];//heroes.length=4
for(i=0;i<heroes.length;i++)
  {console.log(heroes[i]);}
//using for-of loop + aapko sabhi heroes kouppercase me print krana hai
for(hero of heroes)
  {console.log(hero.toUpperCase());}

//array methods
//push
let food=["fries","burger","chips","pasta"];
food.push("pizza","crossoint");
console.log(food);
//pop
let cars=["rolls royce","mercedes", "audi", "range rover"," G-wagon"];
cars.pop();
console.log(cars);
let deleted=cars.pop();
console.log("deleted car=",deleted);
//toString
let veggies=["zucchini","avacado","cilantro","lettuce"];
console.log (veggies);
console.log(veggies.toString());
//concat
let films=["ddlj","sktks","kkhh"];
let bfilms=["kkkg","twedsm"];
let bolly=["pathaan","kotafactory"];
let wood=films.concat(bfilms,bolly);
console.log(wood);
//unshift
let un=[23,56,34,35,3];
un.unshift(63,46);
console.log(un);
//shift
let shi=[48,53,24,3];
let del=shi.shift();
console.log(shi);
 console.log("deleted=",del);
//slice
let sel=[23,43,42,53,64,67,84];
console.log(sel.slice(1,3));
//splice
let spl=[1,2,3,4,5,6,7,8];
spl.splice(2,3,9,10,11);
console.log(spl);

//functions
function pal(){
  console.log("this is vishesh singh")
};
pal();

function con(x,y){
  console.log(x+y)
};
con(25,25);
function hi(a,b){
  return a+b
};
let oh=hi(2,3);
console.log(oh);

//arrow function
const pro=(a,b)=>{
  return a*b;
}
let duct=pro(3,4);
console.log(duct);

//forEach loop in array
let arr=["hi","i","am","vishesh","singh"];
arr.forEach((val,idx,arr)=>{
  console.log(val.toUpperCase(),idx,arr)
});

//map method
let ars=[2,4,6,8];
ars.map((val)=>{
  console.log(val*2);
})

let am=[2,4,6,8];
let newAms=ars.map((val)=>{
  return val*2;                    //return me directly print nhi hota hai isiliye hume    return ko new array me convert krke print krana pdta hai
})
console.log("newAms=",newAms);

//filter method 
//if you want  to filter out even numbers
let on=[0,1,2,3,4,5,6];
let evenArray= on.filter((val)=>{
  return val % 2===0;
});
console.log("even no=",evenArray);

//reduce method(give out single value)
//if you want to find out the greatest num in array
let ams=[2,15,67,35,75,86];
let NewAms=ams.reduce((res,curr)=>{
  return curr>res?curr:res;          //ternary operators padho if you don't get this
})
console.log("Greatest value=",NewAms);


//DOM
console.dir(document);
console.log(document);

//making changes inhtml using document
document.body.childNodes[1].innerText="Hello";

//DOM manipulations
let heading = document.getElementById("head1");
console.log(heading);
console.dir(heading);
let head1 = document.getElementsByClassName("head2");
console.log(head1);
console.dir(head1);
let head2=document.getElementsByTagName("button");
console.dir(head2);
let select=document.querySelector("p");
console.dir(select);
let selectAll=document.querySelectorAll("p");
console.dir(selectAll);

//innerText and innerHTML
let divi=document.querySelector("div");
console.dir(divi);   //ab console par ja kar type kro (divi.innerText)/(divi.innerHTML)if you want to access div ke andar ke bhi elements

let inner=document.querySelector("#inner");
console.dir(inner);   //ab console par ja kr old heading ko new heading likho aur vo bhi italics me.

//text-content
let out=document.querySelector("h3");
console.log(out);

//get attribute
let dog=document.querySelector("h1");
let cat=dog.getAttribute("id")
console.log(cat);

let pug=document.querySelector("p");
let persian=pug.getAttribute("class")
console.log(persian);

//SET attribute
let Name=document.querySelector("h4");
console.log(Name.setAttribute("old","newId"));

//node.style
let jam=document.querySelector("#scar");
console.log(jam.style);
       //to make changes in css style
jam.style.backgroundColor="purple";       
jam.innerText="Bon Appetite";

//inserting elements
let apple=document.createElement("button");
apple.innerText="click me!";
console.log(apple);
let guava=document.querySelector("pre");
guava.append(apple);


let mango=document.createElement("p");
mango.innerText="this is a text";
console.log(mango);
let peach=document.querySelector("pre");
peach.prepend(mango);


let litchi=document.createElement("h1");
litchi.innerText="heading";
console.log(litchi);
let pine=document.querySelector("pre");
pine.before(litchi);

//delete nodes
let par=document.querySelector(".clause");
par.remove();

//event handing in js
let doc=document.querySelector("#bon");
doc.onmouseover=()=>{console.log("you were inside div box")};

//event object
let biot=document.querySelector(".class"); 
biot.onmouseover=(evt)=>{
  console.log("you moved over me");
  console.log(evt.type);
console.log(evt.target);
};

//add event listener
let savart=document.querySelector(".law");
savart.addEventListener("click",()=>{console.log("clicked-1");});
savart.addEventListener("click",()=>{console.log("clicked-2");});
let ampere=()=>{console.log("clicked-3");};
savart.addEventListener("click",ampere);
//remove event listener (clicked-3)
savart.removeEventListener("click",ampere);

//prototypes in js
let employee={
 fullName:"Vishesh Singh",
 tax(){
  console.log("tax rate is 10%");
 }
}; 

let karan={salary:80000,
};
karan.__proto__=employee;
console.log(karan);

//classes in js
class car{
  srt(){
    console.log("start")
  }
  end(){
    console.log("end")
  }
  brand(x){
    this.brandName=x;
  }
}

let fortuner=new car();  //first object
fortuner.brand("toyota");
console.log("fortuner",fortuner);

let gWagon=new car();    //second object using same template
gWagon.brand("mercides");
console.log("G-wagon",gWagon);

//use of container
class Food{
  constructor(items,prices){
    console.log("creating new object"),
    this.item=items;
    this.price=prices;
  }
  eat(){
    console.log("chew")
  }
  drink(){
    console.log("drink")
  }
  }

let soup=new Food("hot&Sour",200);//adding item and price value using constructor
console.log("soup",soup);

let porridge=new Food("rice",70);
console.log("porridge",porridge);

//inheritance in js
class Person{
  constructor(){
    this.species="homosapiens";
  }
  eat(){
    console.log("eat food")
  }
  sleep(){
    console.log("sleep at least 6 hr")
  }
  work(){
    console.log("do nothing")
  }
}

class Engineers extends Person{ 
  work(){
    console.log("BUILD something,solve complex problems")
  }}

  class Doctors extends Person{ 
    work(){
      console.log("treat patients")
    }}
  
let kaushik=new Engineers();
console.log("kaushik",kaushik);

let piyush=new Doctors();
console.log("piyush",piyush);

//super keyword
class People{
  constructor(){
    this.species="homosapiens";
  }
  eat(){
    console.log("eat food")
  }
}
class teachers extends People{ 
  constructor(subject){
    super();  //to invoke parent class constructor
    this.Subject=subject;
  }
  work(){
    console.log("build our future")
  }}

let prachi=new teachers("Science");
console.log("Prachi",prachi);

//Catching error
let e=3;
let h=4;
                         //using try-catch error
console.log("e+h=",e+h);
try{console.log("e+h=",k+i);}
catch(err){console.log(err);}
console.log("e+h=",e+h);
console.log("e+h=",e+h);

//asynchronous 
console.log("hi");
console.log("i");
//  function namaste(){console.log("HI i am Vishesh")};
//  setTimeout(namaste,4000);
                                //remove comment out from above 2 lines to see change  
                                 //namaste function will be displayed after 4 sec and settimeout func is always printed at the last of code
console.log("am");
console.log("Vishesh");

//callback
function docu(name,age,callback){
  console.log(name);
  callback(age);
}
function AGE(age){
  console.log(age);
}
docu("Vishesh",19,AGE);

//nesting in callbacks
function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data=",dataId);
    if(getNextData){getNextData();}       
  },4000);                           //to print after 4sec
}
getData(1234);
//TO invoke and print different getData with time difference of 4sec 
//and this is also CAllback HEll
getData(1,()=>{
       getData(2,()=>{
              getData(3,()=>{
                    getData(4);})
                  })
                  });

//promise
//eg 1  (which will be pending initially until you don't define resolve/reject )
let fan=new Promise((resolve,reject)=>{
  console.log("this a a promise");
});
console.log(fan);

//eg 2
function get(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("data=",dataId);
    resolve("it was a success")
  },6000);});}
 // go on console and type {let house=get("xyz");} then type house initially and then
 // after 6 sec and observe change in promise state

//.then() &.catch()
let oops=()=>{
  return new Promise((resolve,reject)=>{
    console.log("it has a promise");
    reject(1234);
});
}
let snake=oops();
snake.catch((err)=>{
   console.log("it has a error",err);
})

//promise chaining
function async1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("DATA 1");
    resolve("success");
},5000);});
}

function async2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("DATA 2");
    resolve("successfull");
},5000);});
}

console.log("fetching data 1")
async1().then((res)=>{console.log(res);
         console.log("fetching data 2");
         async2().then((res)=>{console.log(res);});
});


//async-awaits
function dorm(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("data=",dataId);
    resolve("it was a success")
  },2000);});
}
async function getdorm(){
  console.log("getting dorm 1");
  await dorm(91);
  console.log("getting dorm 2");
  await dorm(92);
  console.log("getting dorm 3");
  await dorm(93);
}

//fetch API
let url="https://cat-fact.herokuapp.com/facts";
let day=async()=>{
  console.log("getting all data");
  let prot= await fetch(url);
  console.log(prot); 
}





























































































