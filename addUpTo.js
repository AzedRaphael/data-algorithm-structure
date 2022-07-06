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
let word = "White"
let anotherWord = "this is Raphael Rapha the best programmer using thunder pc lol."
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
//console.log(word.charAt(2))

//charCodeAt: returns the unicode of the value at index 2
//console.log(word.charCodeAt(0))

//fromCharCode()
//console.log(String.fromCharCode(108,109,110,111))

//concat() = this joins two or more string variables. the += is more effective since it doesnt create temp string for each concatenation.
//word = word.concat(otherWords,sentence)
//word += otherWords +sentence
// console.log(word)

//indexOf and lastIndexOf(): returns the position of a specified string. indexOf searched from the beginning...
//of the string while lastIndexOf starts from the last character. When a character is not found it returns -1. this is a very useful logic.
//console.log(word.indexOf("l")) returns 2
//console.log(word.lastIndexOf("l")) returns 3

//match(): returns all matches as an array from a search against a regex. .toString() or join() converts array to strings
//let match = anotherWord.match(/n/g) //returns ["n", "n"]
//let match = anotherWord.match(/[Ra]/g) //returns ['h', 'R', 'a', 'p','h', 'a', 'h', 'p','a', 'h', 'p'] match values contained in the []
// let match = otherWords.match(/(?:ha)+/g).join()
 //console.log(match)

//replace:returns the replaced new value after searching a string for specific value
// word = word.replace("hello", "hi")
// console.log(word)

//search(): returns -1 if no match was found or positive numvber if match was found.
//console.log(anotherWord.search("raphael")) returns -1 since its no there cos search is case sensitive. there is no raphael 

//slice(): extracts texts from one string and returns a new string with the extracted one.Special characters and whitespace counts as characters.
//console.log(anotherWord.slice(8,15)) returns Raphael. it means start from index 8 to but not including index 15.
//console.log(anotherWord.slice(8)) returns Raphael Rapha the best programmer using thunder pc lol. from index 8 to the last index
//console.log(anotherWord.slice(8,-4)) returns Raphael Rapha the best programmer using thunder pc . from index 8 to last index(n) -4

//substr(): extracts text from one string with start index to the length of the string to be extracted.
// anotherWord = anotherWord.substr(8,14) 
// console.log(anotherWord) means start at index 8(0 based) expand 14(inclusive) characters to the right

//split(): converts strings to array while join() converts array to strings
//this takes the whitespace delimiter and grabs every data btw the delimiter(what separates units from another) to form an element of an array and ...
//can take limiters a s second parameter(how many units are included)
// let anotherWordArr = anotherWord.split(" ")
//let anotherWordArr = anotherWord.split("R") uses R as a delimiter
//let anotherWordArr = anotherWord.split(" ",5) means use white space as delimiter and 5 limiter units of data in the Array
//let anotherWordArr = anotherWord.split() means turn all strings to one big array with no delimiter or limiter
//console.log(anotherWordArr)

//valueOf(): returns the value of an Object primitive. eg Boolean object returns value of true or false.
//console.log(word.valueOf()) returns hello

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
//arr = array.join("/")
//console.log(arr)

//reverse(): reverses the order of the element
// let array = new Array("white","red", "blue", "black")
// console.log(array.reverse())

//sort(): sort has a callback function that corrects the default sort functionality. it takes a comparison function that
//num1-num2(4-5 = -1 /4-6=- / 4-7=-.... 4--3= + ===> [-3,4,5,6,7,20,30,44,-5.2,1]);
//(-3-4=-7 / -3-5=-8...-3--5.2=+2.2 ===> [-5.2,-3,4,5,6,7,20,30,44,1] do so till its properly arranged)
// let array = [4,5,6,7,20,30,44,-3,-5.2,1]

// function compareArr(num1,num2){
//     return num1-num2
// }
//console.log(array.sort(compareArr))
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
//console.log(array.slice(2,5)) returns [ 'blue', 'black', 'green' ]
//console.log(array.slice(-4)) returns [ 'green', 'violet', 'scarlet', 'cyan' ]
//console.log(array.slice(-4,-2)) returns [ 'green', 'violet' ]

//splice():it adds items at any position in the array. it means give me n(index) to length and replace spliced aread with third arg.
// let array = new Array("white","red", "blue", "black","green","violet","scarlet","cyan")
// console.log(array.splice(2,"yellow","scarlet")) //[ 'blue', 'black', 'green', 'violet', 'scarlet' ]
// console.log(array) //[ 'white', 'red', 'yellow', 'scarlet', 'cyan' ]

//forEach():
//let array = new Array("white","red", "blue", "black","green","violet","scarlet","cyan")




