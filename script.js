var obj1 = {
    address : "Mumbai,India",
    Age: 26,
    job:"web dev",
    getsalary :function(){
      console.log(obj2.salary);

    },
    getAddress: function(){
    console.log(this.address); 
  }
}

var getAdd =obj1.getAddress;

var obj2 ={age: 25,
name: "Subash",
place: "TVM",
address: "Banglore",
salary:"45000/-", getAdd
}
obj2.getAdd();
obj2.gender="male";
obj2.dob="2/12/1997";
console.log(obj2);
obj1.getAddress()



// function sayHello(){
//   return "Hello " + this.name;
// }       
// var newobj = {name: "Sandy"};
        
// var pers=sayHello.call(newobj);
// console.log(pers);

var person = {
  age: 23,
  getAge: function(){
    return  "The age is " +this.age;
  }
}        
var person2 = {age:  54};
var person3 ={age: 28 }
var pers2=person.getAge.call(person3);  
console.log(pers2);




function randomFunc(){
  var obj1 = {name:"Trivian", age:45};

  return function(){
    console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed

  }
}

var initializeclosure= randomFunc()     // Returns a function
initializeclosure();



function Person(name,age,gender,place){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.place = place;
}

var person1 = new Person("Vivek", 76, "male","trivandrum");
console.log(person1);

var person2 = new Person("Courtney", 34, "female","");
console.log(person2);

var person3= new Person( "Yamaha", 2022,"Red","");
console.log(person3);


var obj11 = {
  name: "vijay",
  valueOfThis: function(){
    return this.name;
  }
}
var obj22 = {
  name: "Jay",
  place:"kollam",
  valueOfThis: ()=>{
    return this.name
  }
}

console.log(obj11.valueOfThis()); 
console.log(obj22.valueOfThis());




function extractingArgs(...args){
  return args[0];
}

var ext=extractingArgs(8,9,1); // Returns 9
console.log(ext);

function addAllArgs(a, ...args){
  let sumOfArgs = 0;
  let i = 0;
  // while(i < args.length){
  //   sumOfArgs += args[i];
  //   i++;
  // }
  for(let i=0;i<args.length;i++){
    sumOfArgs += args[i];
  }
  return sumOfArgs;
}

 var add= addAllArgs(10,6, 5, 7, 99,12,); // Returns 117
// addAllArgs(1, 3, 4);
console.log(add);

let prod = {x:'Hello', y:'Bye'};
// let clonedObj1 = {...prod}; // Spreads and clones obj1
// console.log(prod);



function sumOfThreeElements(...elem){
  return new Promise((resolve,reject)=>{
    if(elem.length > 3 ){
      reject("Only three elements or less are allowed");
    }
    else{
      let sum1 = 0;
      let i = 0;
      while(i < elem.length){
        sum1 += elem[i];
        i++;
      }
     console.log(resolve("Sum has been calculated: "+sum1))
    }
  })
}

// var sum3 = sumOfThreeElements(1,21,312);
// console.log(sum3);

sumOfThreeElements(4, 5, 6)
.then(result=> console.log(result))
.catch(error=> console.log(error));


var party= (part1,part2)=>console.log(part1+part2);
party(5,8);


function* genFunc(){
 for(let i=0;i<5;i++){
  console.log(i);
  
 }
}
var generator=genFunc();

console.log(generator.next());

const ClassDetails ={
  strength :58,
  benches:25,
  blackboard:10
}
const classStrength= ClassDetails.strength;
const classBenches= ClassDetails.benches;
const classBlackboards =ClassDetails.blackboard;

console.log("class Strength is : "+ classStrength);

//Destructuring>>>
const{
  strength:nofStudent, 
  benches:nofBenches, 
  blackboard:nofBlackboard
}=ClassDetails;
console.log(nofStudent);
console.log(nofBenches);
console.log(nofBlackboard);



