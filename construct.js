//constructors//
function Person(name,age,haircolor,education){
    this.firstname=name;
    this.yourage=age;
    this.yourhaircolor=haircolor;
    this.youreducation=education;


}
const myname=new Person("vaishnavi",19,"black","B.tech")//always remebar use new keyword to invoke constructor//
console.log("my name is " + myname.firstname + " my age is "  + myname.yourage + " my haircolor is " + myname.yourhaircolor+ " my education is " +myname.youreducation)

const myfev=new Person("sanika",21,"black","ENTC")
console.log("my name is " + myfev.firstname + " my age is "  + myfev.yourage + " my haircolor is " + myfev.yourhaircolor+ " my education is " +myfev.youreducation)

function car(brand,model,year){
this.brand=brand;
this.model=model;
this.yeaar=year
}
let car1=new car ("toyota","crysta","2024")
console.log("my car is " + car1.car + "my car model is " + car1.car + "year of my car " + car1.car )




function kid(name,age,gendar){
    this.name=name;
    this.age=age;
    this.gendar=gendar;

}
this.getdata=function()
{
    return `${this.name} ${this.age} ${this.gendar}`
}
let kid1=new kid("tina",1,"girl")
console.log(kid1)
//console.log("my name is " + kid1.name + " I am " + kid1.age+"year old" + "and i am " + kid1.gendar)
function Book(title,author,year){
    
    this.title=title;
    this.author=author;
    this.year=year;
    
}
Book.prototype.getSummary = function () //the prototype approach is more memory-efficient and preferred in real projects.//
{
  return `${this.title} by ${this.author}, published in ${this.year}`;
};


let book1=new Book ("To Kill a Mockingbird","Harper Lee",1960 );

let book2=new Book("1984","George Orwell", 1949);

let firstBookInfo=book1.getSummary();
let secondBookInfo=book2.getSummary();

console.log(firstBookInfo);
console.log(secondBookInfo);

let fruit=["apple","banana","pineapple"]
let newfruit=["mango"]
console.log(...fruit,...newfruit)


let newarray=[
    [1,2,3],
    [4,5,6]
];
let copiedarray=[]
for (array of newarray){
    copiedarray.push(...array)

}
console.log(copiedarray)
newarray[0][0]=90
console.log(copiedarray)
console.log(newarray)
//example//
let arrayOne=[1,2,3];
let arrayTwo=[4,5,6];

let combinedArray=[...arrayOne,...arrayTwo];//spread operator(...) used to combine //
console.log(combinedArray);

let copiedArray=[...combinedArray];
copiedArray[6]=7;
console.log(copiedArray.join(''));
let car={

    brand:"toyota",
    color:"red",
    model:"7 series"
}

let updatecar={...car,color:"black"}
console.log(updatecar)

let ccar={
    color:"white",
    brand:"8 series"
}
let carupdate={...ccar,color:"black"}//replace color
console.log(carupdate)
let carowner={
    age:"55"
}
let nesetdowner={...ccar,carowner:{...carowner}

}
console.log(nesetdowner)
let updatedcar={
    model:"2025",
    color:"red"
}
let finalcar={...ccar,...updatedcar}
console.log(finalcar)
//excerise//
let person={
    name:"john",
    age:25
};
let job={
    title:"Developer",
    company:"Tech Co"
};
let employee=
{
    ...person,
    ...job,
    age:30,
    yearStarted:2020
    
};
console.log(employee)
let employeCopy={...employee}
employeCopy.company="new Tech CO"
console.log(employeCopy)
console.log(employee)
//default parameter//
function welcome(name="tina"){
    console.log(`Hello ${name}`)
}
welcome()
function orderoffice(size,type,milk){
    console.log(`You ordered ${size}, ${type}and with ${milk}`)

}
orderoffice("Medium","latte","steamed")

function calculateSum(a,b,c)
{
    return a+b+c;
    
}
let numberArray=[10,20,30];
let result=calculateSum(...numberArray);
console.log(result);
//rest parameters//
//you can use spread operator while declearing the function //
function sum(...numbers){
    let total=0;
    for(let number of numbers){
        total+=number
    }
    return total
}
console.log(sum(1,2,3))


function multiplier(multiplier,...numbers){
    let result=[]
    for(let number of numbers){
        result.push(number*multiplier)
    }
    return result

}
console.log(multiplier(2,1,2,3,4))

//Rest parameter//

function sumNumbers(...numbers)
{
    let total=0;
    for(let number of numbers)
    {
        total+=number;
    }
    return total;
};
let result1=(sumNumbers(1,2,3));
console.log(result1);
let result2=(sumNumbers(10,20,30,40,50));
console.log(result2);
let result3=(sumNumbers());
console.log(result3);

//destructing //
let Fruits=["apple","banana","pineapple"]
let [firstFruit,sedecondFruit,... otherFruits]=friuts
console.log(firstFruit)
console.log(secondFruit)
//destructure object//

let Car={
    brand:"BMW",
    model:"7 series",
    color:"white",
    owner:{
        age:23,
        name:"tinu"

    }
};

let {
    owner:{ownername:name,age},
}=Car
console.log(Car)
let {brand,model,color}=Car
console.log(brand)

//destructure function
let Person={
    name:"pinki",
    age:9,
    eligible:true
};
function persondetail({name,age,eligible}){
    console.log(`The person is ${Person.name} , her age is ${Person.age} year old and person is ${Person.eligible}`)
};

persondetail(Person)

const score=[89,86,90,80]
function processScores([firstScore,secodScore,remainingnumber])
{
    return firstScore+secodScore
    
    
}
let result11=processScores([80,90,70,60]);

let result22=processScores([75,85]);
console.log(result11)
console.log(result22)


function displayPersonInfo({name,age,job}){
    
console.log(`${name},${age},${job}
`)
}
let infoAlice = {
    name:"Alice",
    age:30,
    job:"Developer"
};
 console.log(infoAlice)
 let infoBob={
     name:"Bob",
     age:25,
     
     
 }
 console.log(infoBob)

//map ()//
const number=[1,4,6,7]
const addi=number.map((number,index)=>number+index)
console.log(aadi)
//
let users=[
 { name:"tina",age:23},
  {name:"pinki",age:22},
  {name:"janu",age:21}
]
const userwithbirthyear=
users.map((user) => ({...user, //Copies all properties of user into a new object

  birthyear:new Date().getFullYear() - user.age,//to find birthyear and (its a new propertie)// //new Date() It represents today’s current date and time// getFullYear() Extracts only the year from the Date object Returns a number
}));
console.log(userwithbirthyear)


const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Coffee Maker", price: 100, category: "Kitchen" },
    { name: "Book", price: 20, category: "Literature" }
];

//  Write your code below this line 
let productNames=products.map((product)=>product.name)
return productNames
let producttax=products.map((products)=>products.name*0.01)
return producttax
//filter()//
const numbersArray = [1, -2, 3, 4, -5, 6, -7, 8, 9, -10];

let positiveNumbers= numbersArray.filter((numberArray)=>numberArray>0)
    console.log( positiveNumbers)
    let evenNumbers=numbersArray.filter(number=>number%2==0)
    console.log(evenNumbers)
    //reduce()//
    const numbersArrray = [10, 20, 30, 40, 50];
let totalSum=numbersArrray.reduce((accumulator, currentValue)=>{
return accumulator+currentValue
},0);

let maxValue=numbersArrray.reduce((accumulator, currentValue)=>{
    return Math.max(accumulator, currentValue)
},)
console.log(maxValue)