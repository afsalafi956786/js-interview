//add and remove from the array

const { reverse } = require("dns");


// const array = ['apple','mango','papaya'];
// array.push('orange');
// console.log(array,'___')

// array.unshift('cherry');
// console.log(array,'___');
// array.shift();
// console.log(array,'__')



//while and for
// let array = ['apple','cherry','mango','orange']
// let i =0;
// while(i<array.length){
//     console.log(array[i]);
//     i++;
// }


//map , filter,find

const numbers = [1,2,3,4,5];
const values = numbers.map((item,index)=>{
    return item +5;
})

const res = numbers.find((item)=>{
    return item >4
})


// spread and rest operator
   
const nums = [1,2,3];
const nums2 = [4,5,5,6,7];

const finalArray = [...nums,...nums2];


function sum(...first){
     total = 0;
    for(let i =0;i<first.length;i++){
       
       total += first[i]
    }
    return total;

    
}
let value = sum(...nums);


//more array question  
//concate
let arri = [1,2,3,4];
let veg = ['tomato','chilli','potato','onion'];
const newArr = arri.concat(veg);

//slice
let fruits = ['apple','banana','cherry','water melon','grapes'];
const sliced = fruits.slice(1,2);
             // positon  //remove
fruits.splice(1,0,'add');

//find index
let findInd = [1,2,4,5,6,7,8];
const index = findInd.findIndex((item)=> item === 5);


//reverse 
const array = [1,2,3,4,5];
let reversed = []
for (let i = array.length -1 ;i>=0;i--){
   reversed.push(array[i])
}



//sort
let arr = [5,4,1,2,19,3,8,6];
// - i: This is because, after each pass of the outer loop, 
// the last i elements are already sorted and in their correct positions.
//  We don't need to compare those again
for (let i =0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
    }
}



//second larges Number
// let array = [1,2,3,4,5,6,8,10,99,46,77];

function seconndLargest(arr){
    large = 0;
    second = 0;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>large){
            second = large;
            large = arr[i]
        }else if( arr[i] > second && arr[i] !==large){
            second = arr[i]
        }
    }
    return second;
}



//array from for makes an arry - set fro uniqe array
function secondLargest (arr){
     const unArray = Array.from(new Set(arr));
     for(let i =0;i<unArray.length;i++){
        for(let j=0;j<unArray.length-1-i;j++){
            if(unArray[j]>unArray[j+1]){
                let temp = unArray[j];
                unArray[j]= unArray[j+1];
                unArray[j+1] = temp;
            }
        }
     }
    return unArray;
    
}
secondLargest([12,35,1,10,34,1]);


//Remvoe duplicate elements in an Array
            //    i i+1 and then i-- means previos position
let duplicated = [1, 1, 2,3,4,2,5];

function removeDuplicate(arr){
    for(let i =0;i<arr.length-1;i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1 , 1);
            i--
        }
    }
    return arr;
}

removeDuplicate(duplicated);


//without inbuilt js - worst case
let uniqeArr = []
for (let i =0;i<duplicated.length;i++){
    let flag = false
    for(let j=i+1;j<duplicated.length;j++){
        if(duplicated[i] === duplicated[j]){
           flag = true;
           break;
        }
    }
    if(!flag){
        uniqeArr.push(duplicated[i])
    }

}

//using js remvoe element
let clean = duplicated.filter((item,index)=>{
    return duplicated.indexOf(item)  === index
 })
console.log(clean,'--')


//add sum of two numbers and find the target 

let question = [1,2,8,7,6,12,5];
target = 9;
function addTwoNUmber(arr,target){
    let answer = []
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j] === target){
                answer.push(arr[i],arr[j])
            }
        }
    }

    return answer.length > 0 ? answer : arr;
    
}

console.log(addTwoNUmber(question,target))



//reverse an array without reverse loop
let array = [1, 2, 3, 4, 5];


function reverseAnarray (arr){
    for(let i =0;i<arr.length /2 ;i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;

}

console.log(reverseAnarray(array))



//find min and max fro array using minimum number of comparison


let array = [3, 1, 7, 0, 5, 9];


function minAndMax(arr){
    let min = arr[0];        
    let max = arr[0];

    for(let i = 1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }

        if(arr[i]<min){
            min = arr[i]
        }
    }
    console.log(min,max)
}

console.log(minAndMax(array))
















