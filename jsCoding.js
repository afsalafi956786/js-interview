// 1. write a function that returns the reverse of a string?

let value = 'Interview , Happy';

function reverseString(str){
    let reversed = '';
    for(let i =str.length-1;i>=0;i--){
        reversed += str[i]
    }
    return reversed

}

let result = reverseString(value);

//short cur
function reverseSTR(st){
    return st.split("").reverse().join("")

}



//2. Find the Longest word 

const word = "I love coding in javascript";
function longestWord(word){
let longOne = ''
 splitwords = word.split( " " )
 for(let words of splitwords){
    if(words.length > longOne.length){
        longOne = words;
    }
 }
 return longOne

}
longestWord(word)



//3. write a funciton given string is Palindrome or not
//palindorm is a word that reads same forward and backward

let plaWord = 'MALAYALAM';

function palindromCheck(word){
    let reversedOne =''
    for(let i=word.length-1;i>=0;i--){
        reversedOne += word[i];
    }
    console.log(reversedOne)
    
    if(reversedOne === plaWord){
        console.log('it is palindorm')
    }else{
        console.log('not palindrome')
    }

}


//4.write a function to remvoe duplicate elemets from an array

let array  = [1,2,3,1,4,5,4,6,7,8];

let unique = array.filter((item,index)=>{
    return array.indexOf(item) === index
});


//5.second largest number

let numbers = [1,2,3,4,5,6,7,10,9,8];

function largestNumber (arr){
    let secondLar = 0;
    let firstLar = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>firstLar){
            firstLar = secondLar;
            secondLar = arr[i]
        }
    }
    return firstLar
 }


//forEach
const Numbers = [1,2,3,4,5];
sum = 0
Numbers.forEach((item)=>{
       sum+= item
})
console.log(sum)


//object reference 

let obj1 = { name: "Afsal" };
let obj2 = obj1; // obj2 is now referencing the same object as obj1

obj2.name = "John"; // Changing the object through obj2

console.log(obj1.name); // Output: "John"

//In this example, obj1 and obj2 both point to the same object in memory.
//  So, when the name property is changed via obj2, it is reflected in obj1 as well because they share the same reference.




let object1 = { name: "Afsal" };
let object2 = { ...object1 }; // Shallow copy of obj1

object2.name = "John";

console.log(object1.name); // Output: "Afsal"
console.log(object2.name); // Output: "John"


//Here, we use the spread operator { ...obj1 } to create a shallow copy of obj1. 
// Now obj1 and obj2 refer to different objects in memory, so changes to obj2 do not affect obj1.


//sum of even numbers 
let arrays = [1,2,3,4,5];

let sum = array.filter((arr)=>{
    return arr % 2 ===0;
}).reduce((acc,curr)=>{
    return acc + curr
},0)

console.log(sum)



