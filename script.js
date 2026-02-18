var name 
let age=12
name="tina"
console.log(name,age);
//window.alert("Are you 18 years old")
//add text to your document//
document.getElementById("myh1").textContent=`hello my name is tina`;
document.getElementById("myp1").textContent="I am 12 years old,and i like pizza!";
//template literals //
let cgpa=7.6
console.log(`your cgpa is ${cgpa} you can apply for any MNC`);
//if you want to know the type of variable//
console.log(typeof cgpa);
let name1="payal";
console.log(name1);
console.log(typeof name1)
let logIn=true;
console.log(`is she loged  ${logIn}`);
//all variables //
let fullname="riya";
let Age=11;
let isStudent=true;
document.getElementById("Myp1").textContent=`Your name: ${fullname}`;
document.getElementById("Myp2").textContent=`Age is:${Age} years old`;
document.getElementById("Myp3").textContent=`Are you student: ${isStudent}`;
//arthimatic operators //
let students= 20;
students=students+1;
console.log(students);
students=students-1;
console.log(students);
students=students*2;
console.log(students);
students=students**2;
console.log(students);
students=students/2;
console.log(students);
/*operator precedence
1. parenthesis
2.exponents
3.multipilcation 
4. addition and subtraction */
//let number = (1+2)%2**5;
//console.log(number);
/* how to accept user input 
1 easy way = window prompt 
2 professional way= html text box 
*/
let username11;
username11=window.prompt("your username");
console.log(username11);

let user;
document.getElementById("mysubmit").onclick= function()
{
    user=document.getElementById("mytext").value//we want text value //;
    document.getElementById("myh1").textContent=`Hello my name is ${user}`

};
let year=window.prompt("what is the cureent year");
year=+1;
console.log(year)


//type converstion in js//
let x=name;
let y=age;
let z=year;
x=Number(x)
y=String(y)
z=Boolean(z)
console.log(`type of `,x)
console.log(`type of `,y)
console.log(`type of `,z)

const pi=3.14159;
let radious;
let circumference;
radious=window.prompt("enter radious");
console.log(radious);
circumference=2*pi*radious
console.log(circumference);

let radi;
const PI=3.151591;
let circum;
document.getElementById("myok").onclick=function(){
    radi=document.getElementById("mybox").value;
    radi=Number(radi)
    circum=2*PI*radi;
    console.log(circum);
    document.getElementById("myh3").textContent=`${circum}`

};


const increasebtn=document.getElementById("increasebtn");
const decreasebtn=document.getElementById("decreasebtn");
const restartbtn=document.getElementById("restartbtn");
const countable=document.getElementById("countable");
let count=0;
increasebtn.onclick=function(){
    count++;
    countable.textContent=count;

};
decreasebtn.onclick=function(){
    count--;
    countable.textContent=count;

};
restartbtn.onclick=function(){
    count=0;
    countable.textContent=count;

};
/*maths 
its a build in object 
which provides collection of properties and methods
*/
//let a=3
//let b=7;
//let u;
//u=Math.round(a);
//console.log(u);
//u=Math.floor(a);
//console.log(u);
/*u=Math.ceil(a);
console.log(u);
u=Math.trunc(a);
console.log(u);
u=Math.sqrt(a)
console.log(u);
u=Math.pow(a,b)
u=Math.sin(b);
u=Math.cosin(b);
u=Math.tan(b);
u=Math.abs(a);
u=Math.sign(a);
let max=Math.max(a,b);
let min=Math.min(a,b);
console.log(u);*/
//let randomnum=Math.floor(Math.random()*10);
//console.log(randomnum)
const max=100;
const min= 50;
let number=Math.random(max,min)
console.log(number)
//radom number genrator
let randomNumber=Math.floor (Math.random()*6)
console.log(randomNumber)

function rollDicee(){
    const min=1;
    const max =6;
    return  Math.floor(Math.random() * (max - min + 1)) + min;

}


//const randomnumber=rolllDice;

const mybutton=document.getElementById("mybutton");
const label1=document.getElementById("label1");
const label2=document.getElementById("label2");
const label3=document.getElementById("label3");
const label4=document.getElementById("label4");
let randomnum1;
let randomnum2;
let randomnum3;
let randomnum4;


mybutton.onclick=function()

{
    
const min=1;
const max =6;
randomnum1= Math.floor(Math.random() * (max - min + 1)) + min;
randomnum2= Math.floor(Math.random() * (max - min + 1)) + min;
randomnum3= Math.floor(Math.random() * (max - min + 1)) + min;
randomnum4= Math.floor(Math.random() * (max - min + 1)) + min;
label1.textContent=randomnum1;
label2.textContent=randomnum2;
label3.textContent=randomnum3;
label4.textContent=randomnum4;
};
let aGe=18;
//if else if else //
if(aGe>=18){
    console.log("you can viste website and submit form ")

}

let candies;
for(i=1;i<=10;i++){
    console.log("sticker applied to candies")
}
let fruit=["mango","orange","strawberry","buleberry"]
for(i=fruit=1;fruit<=fruit.length;i++)
{
    console.log(fruit)
}
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let row=0;matrix<=matrix.length-1;row++)
{


    for(let col=0;matrix[row]<=matrix.length;col++){
        console.log(matrix[col])
    }
    console.log(matrix)
}
//for in loop//
let friuts=["gaava","apple","beery","leamon"]
for (let index in friuts){
    console.log(friuts[index])
}
//for loop start end iteration //
 let fruitss=["apple","leamon","berry","sushi"]
 console.log(fruitss[Symbol.iterator])

//while loop//
let start=0;
while(start<=5){
    console.log(start)     //while (condition)
                           //code execution//
    start++;                 //increment//
}
//do while loop//
let started=1;
do {
  console.log(started)
  started++
  }while(started<=5)
    