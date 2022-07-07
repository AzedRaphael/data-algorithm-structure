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
//this is a test change