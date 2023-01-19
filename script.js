
//1.Print odd numbers in an array
//Anonymous  Function

function isEven(num) {
  let out;
    if (num % 2 == 0) {
      out = `Number ${num} is even`;
    } else {
     out = `Number ${num} is odd`;
    }
   return out;
  }
  
  console.log(isEven(5));
  console.log(isEven(10));

// IIFE

(function() {
  let out;
  let num = 6;
    if (num % 2 == 0) {
    out = `Number ${num} is even`;
    } else {
    out = `Number ${num} is odd`;
    }
    console.log(out);
  })();

//Arrow Function

let isEvenNum = (num) => {
  if (num % 2 == 0) {
    out = `Number ${num} is even`;
  } else {
    out = `Number ${num} is odd`;
  }
  return out;
};

console.log(isEvenNum(7));


//2.Convert all the strings to title caps in a string array
//Anonymous  Function

function string(str) {
  str = str.toLowerCase().split(' ');
 for(let i=0; i<str.length ; i++) {
 str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
          } 
            return str.join(' ');
            }


console.log(string("guvi geeks"));

// IIFE

(function () {
  let str = "guvi geeks";
  str = str.toLowerCase().split(' ');
for(let i=0; i<str.length ; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      } 
       
       console.log(str.join(' '));
             })();

//Arrow Function

let string = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}     
console.log(string("guvi geeks"));   

//3.Sum of all numbers in an array
//Anonymous  Function

function array(arr){
  let sum =0;
  for(let i=0;i<arr.length;i++){
   sum += arr[i];
  }
  return sum;
}
let arr=[1,2,3,4];
console.log(array(arr));

//IIFE

(function() {
  let array = [1,2,3,4];
  let sum =0;
  for(let i=0; i<array.length; i++){
      sum = sum + array[i];
  }
  console.log(sum);
  })();

  //Arrow Function

  let array=(arr)=> {
for(let i=0; i<arr.length; i++){
  sum = sum + arr[i];
}
return sum;
}
let arr = [1,2,3,4];
let sum =0;
console.log(array(arr));

//4.Return all the prime numbers in an array
//Anonymous  Function

function isPrime(num){
    
if(num<2)
return `${num} is not prime number`

for(let i=2; i<num; i++){
if(num % i === 0){
return `${num} is not prime number`
}
}
return `${num} is prime number`

}

console.log(isPrime(6));

//IIFE Function

(function() {
  let out;
  let num = 10;
  if(num < 2){
      out = `${num} is not prime number`
      }
  for(let i=2; i< num; i++){
      if(num % i === 0){
          out=  `${num} is not prime number`
      }
  }
     
      out= `${num} is prime number`

console.log(out);
})();

//Arrow Function

let isPrime=(num)=> {
  if(num<2)
  return `${num} is not prime number`;

for(let i=2; i<num; i++){
if(num % i === 0){
  return `${num} is not prime number`;
}
}
return `${num} is prime number`;

}

console.log(isPrime(6));

//5.Return all the palindromes in an array
//Anonymous  Function

function palindrome(arr, n)
{
        let pali = 0;
 
        for (let i = 0; i <= n / 2 && n != 0; i++) {
 
          if (arr[i] != arr[n - i - 1]) {
            pali = 1;
            break;
        }
    }
 
    if (pali == 1)
        console.log("Not Palindrome");
    else
        console.log("Palindrome");
}
 
    let arr = [ 1, 2, 3, 2, 1 ];
    let n = arr.length;
 
    palindrome(arr, n);

//IIFE    

(function ()
{
    let arr = [ 1, 2, 3, 2, 1 ];
    let n = arr.length;
 
        let pali = 0;
 
        for (let i = 0; i <= n / 2 && n != 0; i++) {
 
          if (arr[i] != arr[n - i - 1]) {
            pali = 1;
            break;
        }
    }
 
    if (pali == 1)
        console.log("Not Palindrome");
    else
        console.log("Palindrome");
})();

//Arrow Function

let palindrome=(arr, n)=>
{
        let pali = 0;
 
        for (let i = 0; i <= n / 2 && n != 0; i++) {
 
          if (arr[i] != arr[n - i - 1]) {
            pali = 1;
            break;
        }
    }
 
    if (pali == 1)
        console.log("Not Palindrome");
    else
        console.log("Palindrome");
}
 
    let arr = [ 1, 2, 3, 4, 5 ];
    let n = arr.length;
 
    palindrome(arr, n);

//6.Return median of two sorted arrays of the same size.
//Anonymous Function 

function medianArray(arr1,arr2)
{
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let medianIndex = Math.floor(arr.length/2);
  let median;
  return median = arr.length % 2 === 1? arr[medianIndex]:(arr[medianIndex-1]+arr[medianIndex])/2;
}
let arr1 = [1,3,5,7];
let arr2 = [2,4,6,8];

console.log(medianArray(arr1,arr2));

//IIFE

(function ()
{
let arr1 = [1,3,5,7];
let arr2 = [2,4,6,8];
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let medianIndex = Math.floor(arr.length/2);
  let median;
   median = arr.length % 2 === 1? arr[medianIndex]:(arr[medianIndex-1]+arr[medianIndex])/2;
   console.log(median);
})();

//7.Remove duplicates from an array
//Anonymous Function 

function duplicate(array){
  let dup = [...new Set(array)];
  return dup;
}
let array = [1,1,2,3,4,2];
console.log(duplicate(array));

//IIFE

(function() {
  let array = [1,1,2,3,4,2];
  let dup = [...new Set(array)];
  console.log(dup);
})();

//8.Rotate an array by k times
//Anonymous Function 

function arrayRotation(arr , k){
  for(let i=0; i<k; i++){
      
      arr.unshift(arr.pop());
      console.log(`step ${i+1}:`,arr);
  }
}
let arr = [1,2,3,4,5,6,7];
let k = 3;
console.log("final output:",arrayRotation(arr ,k));

//IIFE

(function () {
  let arr = [1,2,3,4,5,6,7];
  let k = 3;
  for(let i=0; i<k; i++){
      
      arr.unshift(arr.pop());
      console.log(`step ${i+1}:`,arr);
  }
  
})();




 