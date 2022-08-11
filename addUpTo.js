//sum of all numbers from 1 to n

//SOLUTION 1
// function addUpTo(n){
//     let total = 0;
//     for (i=0; i<=n;i++){
//         total +=i
//     }
//     return total
// }

//SOLUTION 2
// function addUpTo(n){``
//     return n * (n+1)/2
// }

// let t1 = performance.now();
// console.log(addUpTo(1000000000));
// let t2 = performance.now();
// console.log(`Time elapsed: ${t2-t1/1000} seconds`)

// 1 + 1 = 2

//write a function which takes in a string and returns counts of each character in the string
//1. "hello" ====> 5
// function countString(str){
//     const strArr = str.split('')
//     let count = 0;
//     for(i=1; i<=strArr.length; i++){
//         count+=1        
//     }
//     console.log(count)
// }
// countString("dictionairy is great")

//2. Inputs== "aaaa", "hello", "Hello hi", "phone number is 12345"," ". 
//output: {h:1, e:1, l:2, o:1}
// function countChar(str){
//     str = str.toLowerCase().split("");
//     let strObj = {}
//     for(i=0; i<str.length; i++){
//         console.log(str[i])
//         if(str[i] !== " "){
//             strObj[str[i]] = strObj[str[i]] + 1 || 1;
//         } 
//         else{
//             continue
//         }   
//     }
//     console.log(strObj)
// }
// countChar("HELLO GOOD MORNING")

//PROBLEM3a: num([1,2,3],[1,4,9]) ==== true
// function sqNum(arr1,arr2){
//     let newArr = []
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(i=0; i<arr1.length; i++){
//         let index = arr2.indexOf(arr1[i] ** 2)
        
//         if(index === -1){
//             return false
//         }
//         arr2.splice(index,1)
//     }
//     return true
// }

//3b
// function sqNum(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let countVal1 = {}
//     let countVal2 = {}

//     for(let val of arr1){    
//         countVal1[val] =countVal1[val] + 1 || 1;
//     }

//     for(let val of arr2){
//         countVal2[val] = countVal2[val] + 1 || 1;
//     }
//     console.log(countVal1)
//     for(let key in countVal1){
//         if(!(key ** 2 in countVal2)){
//             return false
//         }
//         if((countVal2[key ** 2] !== countVal1[key])){
//             return false
//         }
//     }
//     return true
// }
// console.log(sqNum([1,2,3],[1,5,9]))

// check Num
// let sentence = "hello"
// sentence.split()
// function checkNum(){
//     let counter = {}
//     for(value of sentence){
//         counter[value] = counter[value] + 1 || 1
//     }
// }   
// checkNum()

//DEEP AND SHALLOW COPY
// let num = []
// let altNum = []
// for(i=0; i<10; i++){
//     num[i] = i+1
// }
// altNum = [...num]
// console.log(altNum === num)

//ACCESSOR FUNCTION
// let names1 = ["David", 'Joe', 'Raphael', 'Uzoma', 'Ken']
// let names2 = ["David", "Tergen", "Deribel", "Ken", "Kido"]

// function checkName(arr1,arr2){

// }

// checkName()

//PROTOTYPE AND METHODS FOR STRINGS


let otherWords = "this is Raphael Rapha the best Rprogrammer using Rthunder pc lol."
let sentence = "this an absolutely beautiful life"
//String.prototype.sentence = "Hello Raph welcome to js methods and objects"
// String.prototype.repeat = function(){
//     return this + this;
// }
//
//console.log(word.repeat())
//console.log(word.sentence)
//console.log(word.__proto__)
//console.log(Object.getPrototypeOf(word))
//=======================================================
//charAt: returns the position or index of the value
let word = "white"
//console.log(word.charAt(0))

//charCodeAt: returns the unicode of the value at index 2
//console.log(word.charCodeAt(0))

//fromCharCode()
//console.log(String.fromCharCode(108,109,110,111))

//concat() = this joins two or more string variables. the += is more effective since it doesnt create temp string for each concatenation.
//word = word.concat("......",sentence)
// word += sentence
// console.log(word)

//indexOf and lastIndexOf(): returns the position of a specified string. indexOf searched from the beginning...
//of the string while lastIndexOf starts from the last character. When a character is not found it returns -1. this is a very useful logic.
//console.log(word.indexOf("i")) 
//returns 2
//console.log(word.lastIndexOf("w")) 
//returns 3

//match(): returns all matches as an array from a search against a regex. .toString() or join() converts array to strings
//let match = otherWords.match(/Raphael/g) //returns ["n", "n"]
//let match = anotherWord.match(/[Ra]/g) //returns ['h', 'R', 'a', 'p','h', 'a', 'h', 'p','a', 'h', 'p'] match values contained in the []
// let match = otherWords.match(/(?:ha)+/g).join()
//console.log(match)

//replace:returns the replaced new value after searching a string for specific value
 //word = word.replace("w", "hi")
 //console.log(word)

//search(): returns -1 if no match was found or positive numvber if match was found.
//console.log(otherWords.search("Raphael")) 
//returns -1 since its no there cos search is case sensitive. there is no raphael 

//slice(): extracts texts from one string and returns a new string with the extracted one.Special characters and whitespace counts as characters.
//console.log(otherWords.slice(8,15)) 
//returns Raphael. it means start from index 8 to but not including index 15.
//console.log(anotherWord.slice(8)) returns Raphael Rapha the best programmer using thunder pc lol. from index 8 to the last index
//console.log(otherWords.slice(8,-4)) 
//returns Raphael Rapha the best programmer using thunder pc . from index 8 to last index(n) -4

//substr(): extracts text from one string with start index to the length of the string to be extracted.
// otherWords = otherWords.substr(8,14) 
// console.log(otherWords) 
//means start at index 8(0 based) expand 14(inclusive) characters to the right

//split(): converts strings to array while join() converts array to strings
//this takes the whitespace delimiter and grabs every data btw the delimiter(what separates units from another) to form an element of an array and ...
//can take limiters a s second parameter(how many units are included)
//let anotherWordArr = otherWords.split(" ")
//let anotherWordArr = otherWords.split("R") 
//uses R as a delimiter
//let anotherWordArr = anotherWord.split(" ",5) means use white space as delimiter and 5 limiter units of data in the Array
//let anotherWordArr = anotherWord.split() means turn all strings to one big array with no delimiter or limiter
//console.log(anotherWordArr)

//valueOf(): returns the value of an Object primitive. eg Boolean object returns value of true or false.
//console.log(word.valueOf())
// returns hello

//=================================================================
//ARRAY METHODS AND PEOPERTIES
//array constructor: this describes a variable(a pointer) named array to an array object containing 4 strings.
//array[0] = "white" replaces red for white in 0 index.
//array constructors contaisn a prototype used to add properties and methods to an existing object

// Array.prototype.listArr = function(){
//     for(i=0; i<this.length; i++){
//         // console.log(this[i])
//         if(this[i].length < 5){
//             console.log(this[i])
//         }
//     }
// }
// let arr = ["violet", 'orange', 'purple', 'yellow']
// let array = new Array("white","red", "blue", "black", "green")
//let newArray = new Array(5)
//let newArray = []

// array.listArr()
// console.log(array)
// console.log(Object.getPrototypeOf(arr))

//concat: add elements of a second array into the end of the first array
// let arr = ["violet", "orange","green"]
// let array = new Array("white","red", "blue", "black")
// array = array.concat(arr)
// console.log(array)

//join(): converts array to strings. the default delimiter is comma, we can add our own custom delimiter like join("/")
//let array = new Array("white","red", "blue", "black")
//array = array.join()
//arr = array.join("....")
//console.log(arr)

//reverse(): reverses the order of the element
//let array = new Array("white","red", "blue", "black")
//console.log(array.reverse())

//sort(): sort has a callback function that corrects the default sort functionality. it takes a comparison function that
//num1-num2(4-5 = -1 /4-6=- / 4-7=-.... 4--3= + ===> [-3,4,5,6,7,20,30,44,-5.2,1]);
//(-3-4=-7 / -3-5=-8...-3--5.2=+2.2 ===> [-5.2,-3,4,5,6,7,20,30,44,1] do so till its properly arranged)
 //let array = [4,5,6,7,20,30,44,-3,-5.2,1]
//let arr = ["d","a","b","c"]
//console.log(array.sort())

// function compareArr(num1,num2){
//     return num1-num2
// }
// console.log(array.sort(compareArr))
//PROBLEM 4 -------------------------------
// function compareColorArr(item1,item2){
//     return item1.length - item2.length
// }

// let colorArray = new Array("zebraJake","white","red", "blue", "black","apple")
// function compare(arr){
//     let count = 0;
//         for(keys in arr){
//         let sum = 0 
//         let counter = {}
//         for(value in arr[keys]){
//              let arr1=arr[keys][value].charCodeAt(arr[keys][value])
//              sum += arr1
//               counter[arr[keys]] =  counter[arr[keys][value]]  + 0 || sum              
//         }
//         for(val in counter){
//            if(counter[val] > count){
//                 count = counter[val]
//                 console.log(counter)
//            }
//         }
//     } 
// }
// compare(colorArray)

//pop() and push(): pop removes the last element in the array one piece at a time and reduces the array length by 1 while push added as many...
//element thorugh the back.
// let array = new Array("white","red", "blue", "black")
// console.log(array.pop()) returns black
// console.log(array.push("green","violet","scarlet","cyan")) returns 7
// console.log(array) returns the array

//shift() and unshift():shift removes element from the front of array while unshifts adds
// let array = new Array("white","red", "blue", "black")
// console.log(array.shift()) returns white
// console.log(array.unshift("green")) returns 4

//slice(): extracts items from an array. it returns the extracted items when the initial index(n) and index(n-1) is reached.
//let array = new Array("white","red", "blue", "black","green","violet","scarlet","cyan")
// console.log(array.slice(2,3)) 
//returns [ 'blue', 'black', 'green' ]
//console.log(array.slice(-4)) 
//returns [ 'green', 'violet', 'scarlet', 'cyan' ]
//console.log(array.slice(-4,-2)) 
//returns [ 'green', 'violet' ]

//splice():it adds items at any position in the array. it means give me n(index) to length and replace spliced aread with third arg.
 //let array = new Array("white","red", "blue", "black","green","violet","scarlet","cyan")
 //let newArr = array.splice(2,2,"1")
 //console.log(newArr)
 //console.log(array.splice(2)) //[ 'blue', 'black', 'green', 'violet', 'scarlet' ]
 //console.log(array) //[ 'white', 'red', 'yellow', 'scarlet', 'cyan' ]

//forEach():
//let array = new Array("white","red", "blue", "black","green","violet","scarlet","cyan")

//==================================================================
//OBJECT ORIENTED PROGRAMMING
//an argument object acts like a local variables of a function
// let x = function(){
//     return arguments;
// }
// console.log(x("cow",2,3,"dogs"))

// let x = function(){
//     let argCreated = Array.prototype.slice.call(arguments);
//     return argCreated.reduce(function(prevVal, currVal){
//         return prevVal + currVal
//     })
// }

//call() makes sure we apply "this" to the intended target by vinding it to whatever we name in the inside parenthesis
// //which means from this particular function which is named x , call its arguments -z in this case
// let z = "i am a z"
// let y =function(){
//     let arr = Array.prototype.slice.call(z);
//     return arr;
// }
// console.log(y())

//CLOSURES
// let flyKite = function(kite){
//     let boy = "boy holds the kite"

//     function girl(){
//         boy = "girl is holding the kite"
//         return boy
//     }
//     if(kite === "boy"){
//         return boy
//     }else{
//         return girl();
//     }
// }
// console.log(flyKite("girl"))

//JS looks at the outer function at the time of calling and makes an inventory list of boy and varaible then
//makes and inventory of the inner firl func with variable mapped boy. as long as the fxn is processing
//the js points at the surrounding variable called boy. function girl has  FREE VARIABLE of boy. this is closure

// const truncateStr = (str,num)=>str.length > num ?console.log(str.slice(0, num).concat("....")):  console.log(str.concat("."))
// truncateStr("A tisket a tasket A green and yellow basket",80)

// function longestSub(str){
//     let array = str.split(" "),newArr=[]
//     for(items in array)newArr+=array[items].length
//     return Math.max(...newArr)
// }
// console.log(longestSub("The quick brown fox jumped over the wall"))

//RECURSION
//count down numbers

// function countDown(num){
//     if(num <=0 ){
//         console.log("ALL DONE")
//         return
//     }
//     console.log(num)
//     num--;
//     return countDown(num)
// }
// console.log(countDown(10))

//sum a range of numbers
// function sumRange(num){
//     if(num === 1)return 1;
//     return num + sumRange(num-1)
// }
// console.log(sumRange(5))

//factorial
// function factorial(num){
//     if(num === 1)return 1;
//     return num * factorial(num-1)
// }
// console.log(factorial(5))

//sum all odd numbers in range of number
// function sumOddRange(num){
//     let result = []
//     function helper(input){
//         if(input.length === 0)return;
//         if(input[0] % 2 !== 0)result.push(input[0]);
//         helper(input.slice(1))
//     }
//     helper(num);
//     if(result.length === 1)return result[0];
//     return result[0] + sumOddRange(result.splice(1))
// }
// console.log(sumOddRange([1,4,5,6,7,8,9,80,23,71,17,19,13]))

//write a function to get the integers in a range(x,y) and sum them all
// function range(x,y){
//    if(y-x === 2){
//     return [x+1]
//    }
//     let list = range(x,y-1)
//     list.push(y-1);
//     return list
   
// }
// console.log(range(1,9))

//write  a js program to find the greatest common divisor of two positiv number
// function gcd(num1,num2){
    
//     let i = 2;
//     let num;
//     if((num1 %  i !== 0)  && (num2 % i !== 0)){
//         return [i]      
//     }
//     console.log(num1/i, num2/i)
//     num+=i
//     num = gcd(num1/i, num2/i);
    
//     return num
// }
// console.log(gcd(336,360))

function gcd(num1,num2){
    let hcf = []
    for(let i =2; i<=num1 && i<=num2; i++ ){
        if(num1 % i == 0 && num2 % i == 0){
            hcf.push(i)
        }
    }
    return hcf.pop()
}
console.log(gcd(60,72))