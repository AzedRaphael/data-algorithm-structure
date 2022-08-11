//PROBLEM 1: switchChar is a function that helps swap values to return a new word. a word is a set of alphabets
//that obviously must be a dictionary word. the word must have three inputs: inputChar,actualChar and changeChar
//the switchChar(inputChar,actualChar,changeChar). You are to write a function that takes these values as argments and
//return the result only if:
//1)actualChar and changeChar are of the same length
//2)characters in actualChar are not repeated
//3)the length of inputChar is lonmger than the length of actualChar
//4)the characters in inputChar are conatined in actualChar
//example: inputChar:cade, actualChar:abcdefgh(non repeating alpha-characters),changeChar:grdwqsr
//switchChar(inputChar,actualChar,changeChar) => result = dgwq
// let inputChar = "cade"
// let actualChar = "abcdefgh"
// let changeChar = "grdwqsdr"
//conditions: 
//actualChar.length===changeChar.length / changeChar cannot be repeated / inputChar.length !== actualChar.length / inputChar === actualChar
//output:"dgwq"
// function switchChar(str1,str2,str3){
//     let arr = ""
//     let str=""
//     let errorMsg= "code broke check conditions"
//     arr = arr.concat(str1+ " "+str2 + " "+ str3).split(" ")
//     if(str2.length === str3.length){
//         let letter = str3[0]
//         for(let j=1; j<str3.length; j++){
//             if(letter !== str3[j]){
//                 if(str1.length !== str2.length ){
//                     for(val in str1){
//                         let check = str2.indexOf(str1[val])
//                         str += str3[check]                        
//                     }
//                     console.log(str)
//                 }
//                 return
//             }
//         }
//     }else{
//         console.log(errorMsg)
//     }
// }
// switchChar(inputChar,actualChar,changeChar)

//PROBLEM 2: write a code that accepts strings of words and returns the highest scoring word after adding the chardCode value 
//for each word.
// let string = "a nanacy is an dfzdfvhvhfdg ghascdhvahjcbdsncvacxagscghcc awesome friend "
// function wordRank(words) {
//     let word = words.split(" ")
//     let longestVal = "" 
//     for(i=0; i<word.length; i++){  
//        if(word[i].length > longestVal.length){
//             longestVal = word[i]
//        }
//     } 
//     return longestVal; 
// }
// console.log(wordRank(string))

//DAY 1- 6/7/2022 
//PROBLEM3: Count cards and place bet or hold if the following conditions are met: 
//+1(cards are 2,3,4,5,6),0(7,8,9) and -1(10,J,K,Q,A). if Output is + return count bet,- or 0 return hold
// let count = 0;
// function countCard(card){
//     if(card >= 2 && card <= 6){
//         count ++
//     }
//     else if(card >= 7 && card <= 9){
//         count = 0
//     }
//     else{
//         count --
//     }
//     return count>0 ? count + " "+  "bet" : count + " " + "hold"
// }
// countCard("k");countCard(2);countCard(9)
// console.log(countCard(4))

//PROBLEM4:convert celsius to fahrenheit
// function convertTo(celsius){
//     const fahrenheit = (celsius * 9/5) + 32 + "F"
//     return fahrenheit
// }
// console.log(convertTo(20))

//PROBLEM 5:reverse a string
// function reversestr(string){
//     string = string.split("").reverse().join("")
//     return string
// }
// console.log(reversestr("dictionary is good"))

//PROBLEM 6: check if the items in an array is the square of the items in another array. conditions:
//1)the length of both arrays must be equal 
//2)the square of array1 must occur same times as array2
// let array1 = [2,3,4,3]
// let array2 = [4,9,16,9]
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     let counter1 = {}
//     let counter2 = {}
//     for(val in arr1){
//         counter1[arr1[val]] = counter1[arr1[val]] + 1 || 1
//     }
//     for(val in arr2){
//         counter2[arr2[val]] = counter2[arr2[val]] + 1 || 1
//     }
//     for(key in counter1){
//         if(!(key**2 in counter2)){
//             console.log("this means that sq of key cannot be found in counter2: " + false)
//         }
//         if(counter2[key**2] !== counter1[key]){            
//             console.log("this means that the value in both counters are not same: "+ false)
//         }
//     }
//     console.log(true)
// }
// same(array1,array2)

//PROBLEM7:return an array consisting of the largest number from each provided sub-array
// let array1 = [1,2,3,4]
// let array2 = [10,11,12,13]
// let array3 = [20,21,22,23]
// let array4 = [30,31,32,33]

// function largestOfFour(largeArr){
//     let arrContainer = []
//     for (i=0; i<largeArr.length; i++){
//         let maxNum = Math.max(...largeArr[i])
//         arrContainer.push(maxNum)
//     }
//     console.log(arrContainer)
// }
// largestOfFour([array1,array2,array3,array4])

//PROBLEM8:
// const data = {
//     "Ben10":[22,30,11,17,15,52,27,12],
//      "Sameer":[5,17,30,33,40,22,26,10,11,45],
//     "Zeeshan":[22,30,11,5,17,30,6,57]
// }

// for(const item in data){
//      let newArr = [];
//     for(element of data[item]){
//         if(element >= 20){  
//             newArr.push(element)
//         }
//     }
//     if(newArr.length >= 5){
//         console.log(`${item}: ${newArr}`)
//     }
// }

//PROBLEM9: check if the string ends a given target string. eg confirmEnding(word,lastLetter of word)
// let word = "Bastian"
// let lastLetter = "in"
// function confirmEnding(arg,str){
//     console.log(arg.endsWith(str))
    
// } 
// confirmEnding(word, lastLetter)

//PROBLEM10: repeat a given string(first arguments) for n times(second arguments). return an empty string if n is not a positive number. 
// let str ="*&"
// let n = 3
// function repeatString(arg,num){
//     let repeatedStr = ""
//     while(num >0){
//         repeatedStr += arg
//         num--
//     }
//     if(num < 0){
//         repeatedStr = "empty string"
//     }
//     console.log(repeatedStr)
// }
// repeatString(str,n)

//PROBLEM 11:truncate a string if is longer than the given maximum string length(second argument). return the truncated string with a ... ending
// let sentence = "the old black beautiful woman"
// let n = 7
// function truncateStr(str,num=str.length) {
//     string = str.slice(0,num).concat("...")
//     console.log(string)
//     console.log(str)
// }
// truncateStr(sentence)

//PROBLEM 12: find the even and odd numbers in an array
// let array = [1,3,5,8,9]
// function finderKeepers(arr){
//     for(item of arr){
//        if(item %2 ===0){
//         console.log(`the even items is ${item}`)
//        }
//        else{
//         console.log(`the odd items are ${item}`)
//        }
//     }
// }
// finderKeepers(array)

//PROBLEM 13:Return a provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case
// let string = "I am tall man"
// function titleCase(sentence){
//     let str = sentence.split(' ')
//     let newArr = []
//     for(item of str){
//         item = item.charAt(0).toUpperCase() + item.slice(1)
//         newArr.push(item)
//     }  
//     let newStr = newArr.join(" ")
//     console.log(newStr)
// }
// titleCase(string)

//DATE: 7/7/2022 thursday
//PROBLEM 14: You are given two arrays and an index n. 
//copy each item from the first array into the second index by inserting the items at index n. return the resulting array
// let arr1 = [3,4,5,6,7,8]
// let arr2 = [1,2,9,10]
// let num = 1
// function sliceAndSplice(array1,array2,n){
//    let newArr=  array1.slice(n-1).reverse().join("")
//    for(item of newArr){
//     array2.splice(n+1,n-1,Number(item))
//    }
//    console.log(array2)
// }
// sliceAndSplice(arr1,arr2,num)

//PROBLEM 15: return items that falsy in an array
// let array = [9, "ate", false, null, 25]
// function falsyBouncer(arr){
//     for(item of arr){
//         if(!item){
//             continue;
//         }else{console.log(item)}
//     }
// }
// falsyBouncer(array)

//PROBLEM16: return the lowest index at which a value(second arg) should be inserted into an array(first arg)
//once it has been sorted. the returned value should be a number(the index of second arg)
// let array = [3,10,5,20]
// let num = 5
// function sortFunc(a,b){
//     return a-b
// }
// function getIndex(arr,n){
//     arr.push(n)
//     let sortedArr = arr.sort(sortFunc)
//     console.log(sortedArr.indexOf(n))
// }
// getIndex(array,num)

//PROBLEM 17:
// let array = ["liAen","line"]
// function mutation(arr){
//     let newArr = arr.pop().split("")
//     let newArr2 = arr.join().toLowerCase().split("")
        
//     for(i=0; i<newArr2.length; i++){
//          let index = newArr.indexOf(newArr2[i])
//         if(index === -1 ){
//             console.log(`the item ${newArr2[i]} is ${false}`)
//             break;
//         }
//         else{
//             console.log(`all other items are ${true}`)
//         }
//     }    
// }
// mutation(array)

//PROBLEM 18:
// let arr =["a", "b", 1, 2]
// let num =1
// let newArr = []
// function chunkArray(array,n){
//     let newArray = array.splice(-n)
//     newArr.push(arr,newArray)
//     console.log(newArr)
// }
// chunkArray(arr,num)

//PROBLEM 19: ANAGRAM
// let str1 = "anagram"
// let str2 = "nagaram"
// function anagram(string1, string2){
//     if(string1.length !== string2.length){
//         return false
//     }
//     let counter1 = {}
    
//     for(i=0; i<string1.length; i++){
//         counter1[string1[i]] =counter1[string1[i]] + 1 || 1;
//     }        
//     for(j=0; j<string2.length; j++){
//         if(!counter1[string2[j]]){
//             return false
//         }else{
//             counter1[string2[j]] --
//         }
//     }
//     return true
// }
// console.log(anagram(str1, str2))

//PROBLEM 20: implement a function called count unique values which accepts a sorted array and counts the unique values in the array. negative numbers
// in the array will be involved.
//SOLUTION1
// let arr = [1,2,2,2,2,1,3,3,3,1,-2,-3,-2,-3]
// function countUniqueValues(array){
//     let counter = {}
//     let sum = 0
//     for(item =0; item<array.length; item++){
//         let i = array[item]
//         counter[i] = counter[i] + 1 || 1
//     }
//     for(key in counter){
//         if(counter[key] > 1){
//             sum += counter[key] 
//         }
//     }
//     return sum
// }
// console.log(countUniqueValues(arr))

//SOLUTION2 FOR PROBLEM 20: find the numbers that occurred more than once
// let arr = [1,2,2,2,2,1,3,3,3,1,-2,-3,-2,-3]
// function sortedArr(a,b){
//  return a-b
// }
// function countUniqueValues(array){
//     array.sort(sortedArr)
//     console.log(array)
//     let i = 0;
//     for(j=1; j<array.length; j++){
//         if(array[i] !== array[j]){
//             i++;
//             array[i] = array[j]
//         }
//     }
//     return  i + 1
// }
// console.log(countUniqueValues(arr))


//SLIDING WINDOW PATTERN:It is useful for keeping track of a subset of data in a larage data set.
// let array = [1,2,4,5,7,2,4,5,2,8,20]
// let num = 4
// function findLongUnique(arr,n){
//     let max = Number.NEGATIVE_INFINITY
//   for(i=0; i<arr.length-n+1; i++){
//     let temp = 0;
//     for(j=0; j<n; j++){
//         temp += arr[i+j]
//     }
//     if(temp > max){
//         max = temp
//     }
//   }  
//   console.log(max)
// }
// findLongUnique(array,num)

// function maxSumArray(arr,n){
//     if(n > arr.length){
//         return null
//     }
//     let max = 0
//     let temp = 0
//     for(i=0; i<n; i++){
//         max += arr[i];
//     }
//     temp = max;
//     for(i=n; i<arr.length; i++){
//         temp = temp - arr[i - n] + arr[i]
//         max = Math.max(max,temp)
//     }
//     return max
// }
// console.log(maxSumArray(array,num))

//DIVIDE AND CONQUER: This pattern involves dividing a data set into smaller chunks and then repeating a process witha subset of data
//EXAMPLE:Given a sroted array of integers write a function called search that accepts a value and returns the index where tha value passed to the function
// is located.
//SOLUTION 1
//  let array = [2,4,5,6,7,1,3,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
//  let num = 7
// function sortedArr(a,b){
//     return a-b
// }
// function search(arr,n){
//     let newArr = arr.sort(sortedArr)
//     let index = newArr.indexOf(n)
//     return index
// }
//console.log(search(array,num))


//SOLUTION 2
// function search(arr,n){
//     let newArr = arr.sort(sortedArr)
//     let min = 0;
//     let max = newArr.length - 1

//     while(min <= max){
//         let middle = Math.floor((min+max)/2)
//         let currentNum = newArr[middle]

//         if(currentNum < n ){
//             min = middle + 1
//         }
//         else if(currentNum > n){
//             max = middle - 1
//         }else {
//             return middle
//         }
//     }
//     return -1;
// }
// console.log(search(array,num))

// let t1 = performance.now();
// console.log(search(array,num))
// let t2 = performance.now();
// console.log(`Time elapsed: ${t2-t1/1000} seconds`)


//PROBLEM: find if second string is an anagram of the first
// let num1 = "182"
// let num2 = "811"
// function sameFreq(number1,number2){
//     let count = {}
//  for(i=0; i<number1.length; i++){
  
//    let letter = number1[i]
//    count[letter] = count[letter] + 1 || 1
//  }
//  for(i=0; i<number2.length; i++){
//     if(!count[number2[i]]){
//         return false
//     }
//     else{
//         count[number2[i]]--
//     }
//  }
//  return true
// }
// console.log(sameFreq(num1,num2))

//PROBLEM: check for duplicates in array and return true if there are duplicates and false if there is none.
// let arr = [1,2,3]
// function checkDups(array){
//     let count = {}
//     for(i=0; i<array.length; i++){
//         let letter = array[i]
//         count[letter] = count[letter] + 1 || 1
//     }
//     for(key in count){
//         if(count[key] > 1){
//             return true
//         }
//         return false
//     }
    
// }
// console.log(checkDups(arr))

//date: 10/7/2022. This method is a recursive function. calling an inner function pointing to an same outer function.
// function factorial(num){
//     if(num === 1) return 1;
//     return num * factorial(num-1)
// }
// console.log(factorial(7))

//solution 2:factorial solved non-recursively
// function factorial(num){
//     let n = 1
//     for(i= num; i> 1; i--){
//         console.log(i)
//         n *= i
//     }
//     console.log(n)
// }
// factorial(4)

//PROBLEM: RETURN THE OFF NUMBERS IN ANA RRAY USING RECURSION
// function collectOdds (arr){
//     let result = [];
//     function helper (num){
//         if(num.length === 0){
//             return;
//         }
//         if(num[0] % 2 !== 0){
//             result.push(num[0])
//         }
//         helper(num.slice(1))
//     }
//     helper(arr)
//     return result;
// }

// console.log(collectOdds([1,2,3,4,5,6,7,8,9,10]))

//FIBONACCI NUMBERS: the iterative solution
// let a = 1;
// let b = 1;
// let result = [1,1]
// let newNum;
// function fibonacci(n){
//     for(i=0; i<n; i++){
//         newNum = a + b;
//         result.push(newNum)
//         a = b;
//         b = newNum
//     }
//     return `${result} `
// }
// console.log(fibonacci(10))

//Recursive solution
// function fibonacci(n){
//     let result;
//     if(n === 1 || n===2){
//         return 1
//     }else{
//         result = fibonacci(n-1) + fibonacci(n-2)
//     }
//     return result;
// }
// console.log(fibonacci(10))
// let n = 2;
// let x = 2;
// function powerOf(num,pow){
//     if(pow === 0)return 1;
//     return num * powerOf(num,pow-1)
// }
// console.log(powerOf(n,x))

//productOfArray iterative
// let array = [2,4,5,6,3]
// function productOfArray(arr){
    
//     let result = 1;
//     for(item of arr){
//         result *= item
//     }
//     console.log(result)
// }
// console.log(productOfArray(array))

//productOfArray recursive
// let array = [2,4,5,6,3]
// function productOfArray(arr){
//     if(arr.length === 0)return 1;
//     return arr[0] * productOfArray(arr.slice(1))
// }
// console.log(productOfArray(array))

//recursive Range: mulitiply the range of n that is from 1 to n
// function recursiveRange(n){
//     if(n === 1) return 1
//     return n * recursiveRange(n-1)
// }
// console.log(recursiveRange(4))

//recursive reverse:
// let str = "reverse"
// function recursiveReverse(str){

//     if(str.length<=1) return str;

//     return recursiveReverse(str.slice(1)) + str[0] 
// }
// console.log(recursiveReverse(str))

//addUpArray:
// let array = [2,5,7,8,9,10]
// function addUpArray(arr){
//     if(arr.length === 0) return 1;
//     return arr[0] + addUpArray(arr.slice(1))
// }
// console.log(addUpArray(array))

//someRecur:
// let array = [2,3,4,5,6]
// let isOdd = val => val % 2 !== 0;
// function someRecur(arr,callback){
//     if(arr.length === 0) return false;
//     if(callback(arr[0])) return true;
//     return someRecur(arr.slice(1),callback)
// }
// console.log(someRecur(array,isOdd))

//capitalize string in an array
// let array = ["hello", "raph", "how", "are", "you"]
// function capitalizeFirst(arr){
//     if(arr.length === 1){
//         return arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
//     };
//     return (arr[0].charAt(0).toUpperCase() + arr[0].slice(1)) +" " + capitalizeFirst(arr.slice(1))
// }
// console.log(capitalizeFirst(array))

//flatten: flatten with and without recursion
// let array = [1,2,3, [4,5,6], 7,[[[8,9,10]]]]
// console.log(array.flat(Infinity))

// function flatten(arr){
//     let newArr = []
//    for(i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newArr.push(...flatten(arr[i]))
//         }
//         else{newArr.push(arr[i])}
//    }
//    return newArr
// }
// console.log(flatten(array))

//nestedEvenSum
// var obj1 = {
//     outer: 2,
//     another: 4,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
// }
// const isEven = val=> val%2 === 0;
// function nestedEvenSum(objs){
//     let sum = 0;
//     for( key in objs){
//         if(objs[key].constructor === Object){
//            sum += nestedEvenSum(objs[key])
//         }
//         if(objs[key] % 2 === 0){
//             sum += objs[key]
//         }
//     }
//     return sum
// }
// console.log(nestedEvenSum(obj1))

//capitalizeWords:
// let string = "i am a man"
// function capitalizeWords(str){
//     if(str.length === 1){
//         return str[0].toUpperCase() 
//     }
//    return str[0].toUpperCase() + capitalizeWords(str.slice(1))
// }
// console.log(capitalizeWords(string))

// let array = ["i", "am", "learning", "recursion", "and", "its", "easy"]
// function capitalizeWords(arr){
//     let newArr = []
//     if(arr.length === 1){
//         return arr[0].toUpperCase()
//     }
//     newArr.push(arr[0].toUpperCase())    
//     return newArr + " " + capitalizeWords(arr.slice(1))
// }
// console.log(capitalizeWords(array))

//stringifyNumbers
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// function stringifyNums(o){
//     let newObj = {}
//     for(key in o){
//         if(o[key].constructor === Object){
//             newObj[key]= stringifyNums(o[key]) 
//         }
//         else if(o[key].constructor === Number){
//             newObj[key] = o[key].toString()   
//         }
//         else{
//             newObj[key] = o[key]
//         }
//     }
//     return newObj
// }
// console.log(stringifyNums(obj))

// //collectStrings

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     },
//                     addMoreInfo: {
//                         IMadeIt: "raph",
//                         addedMoreInfo: {
//                              MadeIt: "crame"
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// function collectStrings(o){
//     let newArr = []
//     for(key in o){
//         if(o[key].constructor === Object){
//             newArr.push(...collectStrings(o[key]))
//         }
//         else if(o[key === undefined]){
//             newArr
//         }
//         else{
//             newArr.push(o[key])
//         }
//     }
//     return newArr
// }
// console.log(collectStrings(obj))

//fibonacci sequence
// function fibonacci(n){
//     let result = [1,1]
//     if(n <= 1) return result=[1];
//     if(n === 2) return result;

//     if(n > 2){
//         for(i=0; i<n-2; i++){
//             result.push(result[result.length-1] + result[result.length-2])
//         }
//     }
//     return result
// }
// console.log(fibonacci(10))

//leastSubstring
// let array = [1,2,4,5,7,2,4,5,2,8,20]
// let num = 4
// function maxSumArray(arr,n){
//     if(n > arr.length){
//         return null
//     }
//     let max = 0
//     let temp = 0
//     for(i=0; i<n; i++){
//         max += arr[i];
//     }
//     temp = max;
//     for(i=n; i<arr.length; i++){
//         temp = temp - arr[i - n] + arr[i]
//         max = Math.max(max,temp)
//     }
//     return max
// }
// console.log(maxSumArray(array,num))

// function findLongUnique(arr,n){
//     let max = Number.NEGATIVE_INFINITY
//   for(i=0; i<arr.length-n+1; i++){
//     let temp = 0;
//     for(j=0; j<n; j++){
//         temp += arr[i+j]
//     }
//     if(temp > max){
//         max = temp
//     }
//   }  
//   console.log(max)
// }


// function answer([str,subStr]){
//     let result = ""
//     let origin = 0;
//     let end = subStr.length;

//     for(i=0; i<str.length; i++){
//         let qq = str.split("").slice(origin,end)
        
//         result = qq.join("");
//         console.log(result)
//         let ss = qq.sort()
       
//         let ee= subStr.split("").sort();
        
//         if(ss.join("") === ee.join("")){
//             break;
//         }else{
//             origin++;
//             end++
//         }
//     }
//     return result
// }
// console.log(answer(["ahffaksfajeeubsne","fakh"]))

//searching algorithm
// let array = [2,3,4,5,68,3,5,9]
// let value = 1
// function linearSearch(arr,val){
//     let result;
//     for(index in arr){
//         if(arr[index] === val){
//             result =  `the index of ${arr[index]} is ${index}`
//             break
//         }
//         else{
//             result = `no value found so index is -1 `
//         }
//     }
//     return result
// }
// console.log(linearSearch(array,value))

//refactor the above code
// function linearSearch(arr,val){
//     for(index in arr){
//         if(arr[index] === val) return `the index of ${arr[index]} is ${index}`       
//     }
//     return `no value found so index is -1 `
// }
// console.log(linearSearch(array,value))

//     while(min <= max){
//         let middle = Math.floor((min+max)/2)
//         let currentNum = newArr[middle]

//         if(currentNum < n ){
//             min = middle + 1
//         }
//         else if(currentNum > n){
//             max = middle - 1
//         }else {
//             return middle
//         }
//     }
//     return -1;
// }
// console.log(search(array,num))

//binary search
// let array = [2,3,4,5,12,15,24,32,33,34,35,56,57,59,60,61,62,67,72,98]
// let value =1
// function binarySearch(arr,val){
//     let leftPointer = 0
//     let rightPointer = arr.length-1
//     let middle = Math.floor((leftPointer + rightPointer)/2)
//     while(leftPointer <= rightPointer ){
//         if(val < array[middle])rightPointer = middle - 1
//         else leftPointer = middle + 1
//         middle = Math.floor((leftPointer + rightPointer)/2)       
//     }
//     return arr[middle] === val ? middle : `${val} does not exist in the array`; 
// }
// console.log(binarySearch(array,value)) 


//Palindrome:recursive solution
// let string = "kayaka is where madam redivider to work at noon"
// string = string.split(" ")

// function isPalindrome(str){
//     let array = []
    
//     for(i=0; i<str.length; i++){
//         if(str[i].length % 2 !== 0){
//             array.push(str[i])
//         }
//     }
//     let newArr = []
//     for(j=0; j<array.length; j++){
//         let element = array[j]
//         let check = element.split("").reverse().join("")
//         if(element === check){
//             newArr.push(element.length)
//         }
//     }
//     return Math.max(...newArr)
// }
// console.log(isPalindrome(string))

//stringSearch()
// let string = "omgzomg"
// let subStr = "omg"
// function stringSearch(str,s){
//     let stringObj= 0
//     for(i=0; i<str.length; i++){
//        for( j=0; j<s.length; j++){
//             console.log(str[i+j], s[j])
//             if(s[j] !== str[i+j] ){
//                 console.log("BREAK")
//                 break;
//             }
//             if(j === s.length -1){
//                 console.log("FOUND ONE")
//                 stringObj++
//             }
//        }
//     }
//     console.log(stringObj)
// }

// stringSearch(string, subStr)
// let array = ["ahffaksfajeeubsne", "jefaa"]
// function leastSubstring(arr){
//     arr[1] = arr[1].sort()
//     let newArr = []
//     for(i=0; i<arr[0].length; i++){
//         for(j=0; j<arr[1].length; j++){
// console.log(arr[1][j])
//         }
//     }
// }
// leastSubstring(array)

//SORTING ALGORITHM
//Bubble Sort:this sorts a collection
// function bubbleSort(arr){
//     for(i=arr.length; i > 0; i--){
//         for(j=0; j<i-1; j++){
//             console.log(arr,arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 let temp = 0
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1]= temp
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([32,21,43,51,1,3,46,10,5]))

//SOLUTION2 (optimized)
// function bubbleSort(arr){
//     const swap = (arr,id1,id2)=>{
//         [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
//     }
//     let noSwaps;
//     for(i=arr.length; i > 0; i--){
//         noSwaps = true;
//         for(j=0; j<i-1; j++){
//             console.log(arr,arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 swap(arr,j,j+1)
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps)break;
//     }
//     return arr
// }
// console.log(bubbleSort([32,1,2,3,4,5]))

//SELECTION SORT:

// function selectionSort(arr){
   
//     return arr
// }
// console.log(selectionSort([5,1,3,45,2]))

// function armstrong(number){
//     let tempNum = number
//     let count = Math.floor(Math.log10(Math.abs(number))) + 1
//     number = number.toString().split("")
//     let total = [];
//     let sum = 0;
//     for(i=0; i<number.length; i++){
//         let num = Math.pow(Number(number[i]),count)
//         total.push(num)      
//     }
//     sum = total.reduce((a,b)=> a+ b)
//     if(sum !== tempNum){
//         return `NO ${tempNum} is NOT an armstrong`
//     }else{
//         return `YES ${tempNum} is an armstrong`
//     }
// }
// console.log(armstrong(371))

// function pigLatin(string){
//     let vowel = ['a', 'e', 'i', 'o', 'u']
//     string = string.split('')
//     let newStr = string
//     let str = Math.ceil((newStr.length-1) / 2)
//     let middle = vowel.indexOf(newStr[str])
    
//     for(item in string){
//         let index = vowel.indexOf(string[item])
//         let id = vowel.indexOf(string[0])
//         //check middle is vowel 
//         if(middle >= 0){
//             let shifted = string.shift()
//             string = string.concat(shifted)
//             return string.concat(["w","a","y"])
//         }
//         //check without vowels
//         if(index === -1 && middle === -1){
//             return string
//         }
//         //check starts with consonant
//         if(index === -1 && id === -1){
//             let shiftedVal = string.shift()
//             string = string.concat(shiftedVal)
//             return string.concat(["w","a","y"].splice(1))
//         }
//         //check starts with vowel
//         if(index >= 0 && id >= 0){
//             string = string.concat(["w","a","y"])
//             return string
//         }
//     }
//     //return string.concat(["w","a","y"])
// }
// console.log(pigLatin('glove'))

//FEAR NOT MISSING LETTER
// function findMissingLetter(string){
//     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     let array = [];

//     let start = alphabet.indexOf(string[0])
//     let end = alphabet.indexOf(string[string.length-1])
    
//     for(let i=start; i<=end; i++){
//         array.push(alphabet[i])
//     }
//     for(let j=0; j<array.length; j++){
//         if(!(string.includes(array[j]))){
//             return array[j]
//         }else{
//             return undefined
//         }
//     }
// }
// console.log(findMissingLetter("ab"))

// function sumFibonacci(index){
//     let result = [1,1]
//     if(index === 1)return [1]
//     if(index === 2) return result;
//     for(i=1; i<index; i++)result.push(result[result.length - 1] + result[result.length - 2])
//     let odd = result.filter(items => items % 2 !== 0)
//     odd = odd.reduce((a,b)=>a+b)
//     return odd
// }
// console.log(sumFibonacci(10))

//sum primes

// function sumPrimes(number){
//     let array = []
//     let result = [2,3]
//     for(let i=2; i<number; i++){
//         console.log(number[i])
//         if(number[i] % i == 0){
//             array.push(number[i])
//         }
//     }
//     return array
// }
// console.log(sumPrimes(10))

//MULTIPLE POINTER: this increments a 
// function appearTwice(string){
//     string = string.split("")
//    let i = 0;
//    for(let j = i+1; j<string.length; j++){
//         if(string[i] !== string[j]){
//             i++;
//             string[i] = string[j]
//         }
//         return string[i + 1]
//    }
// }
// console.log(appearTwice("abaaczz"))

// function sumZero(arr){
//     let left = 0;
//     let right = arr.length -1 
//     while(left < right){
//         let sum = arr[left] + arr[right]
//         if(sum===0)return [arr[left], arr[right]]
//         else if(sum > 0) right--;
//         else left++
//     }
// }
// console.log(sumZero([-4,-3,-2,-1,0,10]))

// function armstrong(n){
//     let num = String(n).split("")
//     let arrLength = num.length
//     let sum = 0;
//     for(let i = 0; i<num.length; i++){
//         sum += Math.pow(num[i], arrLength);
//     }
//    if(sum === n)return true;
//    return false
// }
// console.log(armstrong(371))

//SELECTIONSORT
// function selectionSort(array){
//     for(let i =0; i<array.length; i++){
//         let lowest = i;
//         for(let j = i+1; j<array.length; j++){
//             if(array[j] < array[lowest]){
//                 lowest = j
//             }
//         }
//         if(i !== lowest){
//             let temp = array[i]
//             array[i] = array[lowest]
//             array[lowest] = temp
//         }
//     }
//     return array
// }
// console.log(selectionSort([7,34,23,9,12,1,0,-3,100,78]))

//INSERTION SORT
// function insertionSort(array){
//     for(let i =1; i<array.length; i++){
//         for(let j = i; j>0; j--){
//             if(array[j] < array[j-1]){
//                 let temp = array[j]
//                 array[j] = array[j-1]
//                 array[j-1] = temp 
//             }
//         }
//     }
//     return array
// }
// console.log(insertionSort([7,34,23,9,12,1,0,-3,100,78]))

//BUBBLE SORT
// function bubbleSort(array){
//     let noSwaps;
//     for(let i =array.length; i> 0; i--){
//         noSwaps = true
//         for(let j=0; j<i-1; j++){
//             if(array[j] > array[j+1]){
//                 let temp = array[j+1]
//                 array[j+1] = array[j]
//                 array[j] = temp
//                 noSwaps = false;
//             }
//         }
//         if(noSwaps)break;
//     }
//     return array
// }
// console.log(bubbleSort([7,34,23,9,12,1,0,-3,100,78]))

//MERGE SORT
// function merge(leftArr,rightArr){
//     let leftIndex = 0;
//     let rightIndex = 0
//     let newArr = []

//     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
//         let leftEl = leftArr[leftIndex]
//         let rightEl = rightArr[rightIndex]
        

//         if(leftEl < rightEl){
//             newArr.push(leftEl)
//             leftIndex++
//         }else{
//             newArr.push(rightEl)
//             rightIndex++
//         }
//     }
//     console.log(rightArr.slice(rightIndex) + " " + "is from right arr")
//     console.log(leftArr.slice(leftIndex ) + " " + "is from left array")
//     console.log(newArr + " " + "is from new array")
//     return [...newArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
// }
// function mergeSort(array){
//     if(array.length <= 1) return array
//     let middleIndex = Math.floor(array.length/2)
//     let leftArr = array.slice(0,middleIndex)
//     let rightArr = array.slice(middleIndex)

//     return merge(mergeSort(leftArr), mergeSort(rightArr))
// }
// console.log(mergeSort([7,34,23,9,12,1,0,-3,100,78]))

//Recursion problems
// function productOfArray(array){
//     if(array.length === 1) return array[0]
//     return array[0] * productOfArray(array.slice(1))
// }
// console.log(productOfArray([2,3,4,5,6]))

//REVERSE A STRING RECURSIVELY
// function recursiveReverse(string){
//     let result = []
//     function helper(input){
//         if(input.length === 0) return
//         if(input.length >= 1) result.unshift(input[0])
//         helper(input.slice(1));
//     }
//     helper(string)
//     return result.join().replace(/,/g,"")
// }
// console.log(recursiveReverse("awesome"))

// const isOdd = value=> value%2 !== 0;

// function checkOdd(array,Odd){
//     if(array.length === 0) return false;
//     if(Odd(array[0])) return true;
//     return checkOdd(array.slice(1),Odd)
// }
// console.log(checkOdd([2,4,6,8,9], isOdd))

//COLLECT STRING IN AN OBJECT
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// function collectStrings(object){
//     let result = []
//     for(keys in object){
//         if(object[keys].constructor === Object)result.push(...collectStrings(object[keys]))
//         else if(object[keys].constructor === undefined)return
//         else result.push(object[keys])
//     }
//     return result
// }
// console.log(collectStrings(obj))

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     },
//     test2: {
//         value: 10,
//         value2:20,
//         info1: {
//             isRight: false,
//             random: 66,
//             info2: {
//                 isFalse: true,
//                 random: 50,
//                 info3: {
//                     isleft: true,
//                     random: 12
//                 }
//             }
//         }
//     }
// }

// function stringifyNumbers(object){
//     let newObj = {}
//     for(key in object){
//         if(object[key].constructor === Number){
//             newObj[key] = object[key].toString()
//         }
//         else if(object[key].constructor === Object){
//             newObj[key] = stringifyNumbers(object[key])
//         }
//         else {
//             newObj[key] = object[key]
//         }
//     }
//     return newObj
// }
// console.log(stringifyNumbers(obj))

// function power(num1,num2){
//     if(num2 === 0) return 1;
//     return num1 * replicate(num1,num2-1)
// }
// console.log(power(3,5))

//REPLICATE NUMBERS BY TIMES
// function replicate(num1,num2){
//     let result = []
//     function helper(input1,input2){
//         if(input2 === 0)return;
//         if(input2 >= 1) result.push(input1)
//         helper(input1, input2 - 1)
//     }
//     helper(num1,num2)
//     return result
// }

// function replicate(num1,num2){
//     if(num2 <= 0) return [];
//     return [num1].concat(replicate(num1,num2 - 1))
// }
// console.log(replicate(3,5))

// function totalIntegers(array){
//     let result = [];
//    for(let i =0 ; i<array.length; i++){
//         if(Array.isArray(array[i])){
//             result.push(...totalIntegers(array[i]))
//         }else{
//             result.push(array[i])
//         }
//    }
//    return result
// }
// console.log(totalIntegers([ [[5]], [3], 0, 2, [4, [5,6]], 8, 9]))

//RECURSION
// function range(number){
//     if(number === 0) return ;
//     console.log(number)
//     number--
//     range(number)
// }
// range(5)

//power
// function power(num1,num2){
//     if(num2 === 1) return num1;
//     return num1 * power(num1, num2 - 1)
// }
// console.log(power(2,3))

// function reverseString(array){
//     let result = []
//     let arr = array.split("")
//     function helper(input){
//         if(input.length === 0 ) return;
//         if(input.length >= 1 ) result.unshift(input[0]);
//         helper(input.slice(1))
//     }
//     helper(arr)
//     return result;
// }
// console.log(reverseString("john"))


//QUESTION
//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a 
//single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

//SORTING ALGORITHM
// function bubbleSort(array){
//     for(let i = array.length; i> 0; i-- ){
//         for(let j = 0; j<i-1; j++){
//             if(array[j] > array[j+1]){
//                 let temp = array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = temp
//                 console.log(array[j], array[j+1], array)
//             }
//         }
//     }
//     return array
// }
// console.log(bubbleSort([10,9,4,5,8,3,2,0,1,7]))

//selection sort

// function selectionSort(array){
//     for(let i =0; i<array.length; i++){
//         let lowest = i;
//         for(let j = i+1; j<array.length; j++){
//             if(array[j] < array[lowest]){
//                 lowest = j
//             }
//         }
//         if(i !== lowest){
//             let temp = array[i]
//             array[i] = array[lowest]
//             array[lowest] = temp
//         }
//     }
//     return array
// }
// console.log(selectionSort([7,34,23,9,12,1,0,-3,100,78]))

function selectionSort(array){
    for(let i =0; i<array.length; i++){
        let lowest = i;
        for(let j= i+1; j<array.length; j++){
            if(array[j] < array[lowest]){
                lowest = j
            }
        }
        if(i !== lowest){
            let temp = array[i]
            array[i] = array[lowest]
            array[lowest] = temp
        }
    }
    return array
}

console.log(selectionSort([1,10,4,5,2,-1]))
