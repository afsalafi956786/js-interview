//hoisting 
var count = 1;




//map filter reduce 
const nums = [1,2,3,4];

 let multiple = nums.map((num)=>{
    return num*3
 })


 let filterArray = [1,2,3,4];
 
 let fiexed = filterArray.filter((item)=>{
    return item >=2
 })


 const sum = [1,2,3,4,5];
let total = sum.reduce((acc,curr)=>{
    return acc+curr
 },0)




 let students  = [
    { name: 'afsal',rollNumber:21 , mark:80,},
    { name: 'Raju',rollNumber:22 , mark:60,},
    { name: 'Amal',rollNumber:23 , mark:92,},
    { name: 'Fasil',rollNumber:24 , mark:25,}
 ];

//capital letter
 let capital = students.map((std)=>{
    return std.name.toUpperCase();
 })

 //using for loop 
 let array =[];

 for(let i = 0;i<students.length;i++){
  let std =  students[i].name.toUpperCase();
   array.push(std)
 }

 //mark more than 60
 let student = students.filter((item)=>{
    if(item.mark>60){
        return item
    }
 });

 //return total marks for students with marks greater than 60 after 20 makrs have
 //been added to those who scored less than 60

 let result = students.map((std)=>{
      
    if(std.mark <60){
        std.mark = std.mark +20
    }
    return std;
 }).filter((item)=>{
    return item.mark>60
 }).reduce((acc,curr)=>{
   return acc + curr.mark
 },0)


//spread operator
function multiply(...nums){   //rest
    console.log(nums[0]*nums[1])
}
let arr = [4,5];
multiply(...arr);   //spread


//closure
function subscribe(){
    var name= 'afsal';

    function display(){
        alert(name)
    }
    display()
}

subscribe()



//callback

function displayMessage() {
   console.log('This message is displayed after 2 seconds');
 }
 
 setTimeout(displayMessage, 2000); // displayMessage is called after 2 seconds




 //object 

 const person = {
   name : 'afsal',
   age:23,
   job:"Software engineer"
 }

 const { name, age , job } = person

console.log(name)


//promise 

const myPromise = new Promise((resolve,reject)=>{
   const success = true;

   if(success){
       resolve('the operration was successful')
   }else{
       reject('the operation failed')
   }
})

myPromise.then((mess)=>{
   console.log(mess)
}).catch((error)=>{
   console.log(error)
})


//asyncrnous example
console.log('start');

setTimeout(()=>{
 console.log('iam going to finish')
},1000)
console.log('finish')





 






