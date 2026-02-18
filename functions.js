//function are the block of code which we can use to perform repeatative task //
//A function is a standalone block of code that is not attached to an object.//
function addsum(a,b)//parameters//
{ 
                  //this is decleration of function// 
    return a+b    //return is must//  //what  you want to perfrom//
}
let result=addsum(4,5)     //function arguments//     
                         //assign your parameters here and store yor result//
console.log(result)
console.log(addsum(10,30))
//varible decleared inside the function is local vriable //

let globalvariabe="i am global varibale "//its an global variable and avilable outside the function//
function localscopevariable(){
    let localvar ="i am a local variable"//this is local variable and it is ristricted to only this function//
    
}

//function decleration//
function greet(name){
  console.log(`hello ${name}`)
}
greet("tina")


//function expresion //
const saygoodbye=function(name){
console.log(`${name}`)
};
saygoodbye("tina")

//arrow functions:(Arrow functions do not have their own this)//
const multi=(a,b)=> //parmeters//

    {

    return a*b              //body of the function //

    }
    console.log(multi(2,4))

    //without return //
const  add=(a,b)=>a+b
console.log(add(7+7))



function calculateSum(a,b)
{
   
   return a+b


};
let sum=(calculateSum(2,6))
console.log(sum)

function findMax(a,b){
    if (a>b){
        return a
    }
    else{
        return b
    }
};
let max=findMax(10,20)
console.log(findMax)


const isEven=(a)=>
{
    if(a % 2 == 0)
    {
        return true;
    }
    else{
        return false 
    }
    
}
let even=isEven(4)
console.log(even)
//methods in js//
//this key word is used to access object  properties  function ketword //
let car={
    color:"black",
    model:"toyota",
    verion:"7 series",
    //this is object methds//
    describe:function(){
        return `This car is ${this.color} ${this.model} ${this.version} `;
    }

};
//function wthin object //
let calculator=
{
    add(a,b)
    {
     return a+b
    },
    sub(a,b){
        return a-b
    },
};
console.log(calculator.add(3,5))
console.log(calculator.sub(3,2))

const vehicle={
    type:"Car",
    color:"Red",
    //methods in js:A method is a function stored inside an object''//
    startEngine:function()
    {
            return `The${this.type}'s engine has started `;
    },
    displayInfo:function(){
        return `This is  ${this.color} ${this.type}`
    },
    maintenance: {
    lastService: "2023-01-01",
    checkStatus: function () {
        return `Last serviced on ${this.lastService}`;
        }
    }
    
};
let engineStart=(vehicle.startEngine());
let vehicleInfo =(vehicle.displayInfo());
let maintenanceStatus=(vehicle.maintenance.checkStatus()); 
console.log(engineStart)
console.log(vehicleInfo)
console.log(maintenanceStatus)
//method call:object name . method name //
let person={
    gendar:"female",
    education:"b.tech",
    info(){
        return `the person is ${this.gendar} and education is ${this.education}`
    }


};
console.log(person.info());
// autoboxing:This automatic conversion is autoboxing.//
//indexing start from 0//
let example="js is easest programming language to learn "
console.log(example.charAt(2))
console.log(example.indexOf("programming"))
//method//
console.log(example.toUpperCase())
console.log(example.toLowerCase())
let Car=["toyota","bmw","tata"]
console.log(Car)
//add elements//
Car.push("range")
console.log(Car)
//remove elements//
Car.pop("bmw")
console.log(Car)
//add element//
Car.unshift("rolls royals")
console.log(Car)
//remove element//
Car.shift()
console.log(Car)
//check index of element//
console.log(Car.indexOf("bmw"))
console.log(Car)
//check Whether the element exist or not //
console.log(Car.includes("range"))
console.log(Car)
//merge two arrays//
let a=[1,2,3]
let b=[4,5,6]
let c=[]
for (i=0;i<a.length;i++)
{
    c.push(a[i])
    for(i=0;i<b.length;i++){
        c.push(b[i])
    }
}

/*Array Creation: Begin with an array named numbersArray containing initial values [10, 20, 30, 40, 50].

Slicing an Array: Use an appropriate method to extract the middle three elements (20, 30, 40) from numbersArray and store this in a variable named slicedArray.

Merging Arrays: Merge numbersArray with another array [60, 70] using a suitable method and store the result in a variable named mergedArray.

Reversing an Array: Reverse the mergedArray and store this in a variable named reversedArray.
console.log(c)*/

let numbersArray=[10, 20, 30, 40, 50];
let slicedArray=numbersArray.slice(1,4);
console.log(numbersArray);

let merge=[60,70];
let mergedArray=[...numbersArray,...merge];
console.log(mergedArray);

let reversedArray=[...mergedArray].reverse();
console.log(reversedArray);

console.log(Math.PI)
console.log(Math.abs(-25))
console.log(Math.floor(4.7))
console.log(Math.round(4.7))
console.log(Math.sqrt(49))
console.log(Math)
//current date and time //
let curentDate=new Date()
console.log(curentDate)
let specificdate=new Date(2024,5,18,30,0)//year,month,date,hour,minute//
console.log(specificdate)
console.log(curentDate.getFullYear())
console.log(curentDate.getMonth())
console.log(curentDate.getTime())
