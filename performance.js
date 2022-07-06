

//NO-2: OUTPUT: wordRank("The quick Brown Fox") =>  BROWN
let text =   "the quick brown fox"
const myArray = text.split(" ")
const alphabet = [
    {a:1},{b:2},{c:3},{d:4},{e:5},{f:6},{g:7},{h:8},{i:9},{j:10},{k:11},{l:12},{m:13},{n:14},{o:15},{p:16},{q:17},
    {r:18},{s:19},{t:20},{u:21},{v:22},{w:23},{x:24},{y:25},{z:26}
]
const alphabets = ["a","b","c","d","e","f",'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//console.log(myArray)
// for(let figures in alphabet){
//     console.log(figures, alphabet[figures])
//     for(let fig in alphabet[figures]){
//         console.log(fig,alphabet[figures][fig])
//     }
// }
// for(let num in myArray){
//    console.log(myArray[num]) 
//    for(let figures in alphabet){
//         for(let fig in alphabet[figures]){
//             console.log(fig,alphabet[figures][fig])
//             let total = 0;
//             for(let no of myArray[num]){
//                 console.log(no)
//                 if(fig === no){
//                     total+=alphabet[figures][fig]
//                     console.log(total)
//                 }
//             }
//         }
//     }        
// }
let sum= 0;
for(let item in myArray){
    //console.log(myArray[item])
    let tempArr = myArray[item].split("")
    let tempSum = 0;
    //console.log(" ")
    for(let letters in tempArr){
        //console.log(tempArr[letters])       
        for(let index in alphabets){
            if(alphabets[index] === tempArr[letters]){
                //console.log(index)
                tempSum += Number(index)+1              
            }
        }
    }      
    if(tempSum > sum){
        sum = tempSum
        
    }
    console.log(sum)
    tempSum=0;
}

// for(item in myArray){
//     console.log(item, myArray[item])
//     for(letter in alphabet){
//         console.log(alphabet[letter])
//         for(el in alphabet[letter]){
//             console.log(el)            
//         }
//     }
// }

// function wordRank(array,alphabet){
//      for(letter in alphabet){
//          console.log(alphabet[letter])
//          for(el in alphabet[letter]){
//              for(j=0; j< el.length; j++){
//                 console.log(el)
//              }         
//          }
//      }
//     for(i=0; i<array.length; i++){
//         console.log(array[i])
//     }
// }

// wordRank(myArray,alphabet)