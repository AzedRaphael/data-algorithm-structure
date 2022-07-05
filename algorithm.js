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
let inputChar = "cade"
let actualChar = "abcdefgh"
let changeChar = "grdwqsdr"
//conditions: 
//actualChar.length===changeChar.length / changeChar cannot be repeated / inputChar.length !== actualChar.length / inputChar === actualChar
//output:"dgwq"
function switchChar(str1,str2,str3){
    let arr = ""
    let str=""
    let errorMsg= "code broke check conditions"
    arr = arr.concat(str1+ " "+str2 + " "+ str3).split(" ")
    if(str2.length === str3.length){
        let letter = str3[0]
        for(let j=1; j<str3.length; j++){
            if(letter !== str3[j]){
                if(str1.length !== str2.length ){
                    for(val in str1){
                        let check = str2.indexOf(str1[val])
                        str += str3[check]                        
                    }
                    console.log(str)
                }
                return
            }
        }
    }else{
        console.log(errorMsg)
    }
}
switchChar(inputChar,actualChar,changeChar)

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