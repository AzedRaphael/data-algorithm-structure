const items = [
    {name:"bike", price:100},
    {name:"car", price:43000},
    {name:"mansion", price:2300000},
    {name:"tv", price:400},
    {name:"condo", price:10000},
    {name:"nft", price:327000},
    {name:"phone", price:23000},
    {name:"computer", price:45000},
]

const numbers = [23.87, 56.23, 98.7, 12, 97.3, 23, 12, 35.3, 23.9]

//FILTER: to get elements of the arrays that have conditions
// const filteredItem = items.filter((item)=>{
//     return item.price >= 5000
// })
// console.log(filteredItem)

//MAP: To copies the values of an array, map is very handy with extracting and adding info. 
// const itemNames = items.map(item=>{
//     return {
//         ...item,
//         description: `${item.name} has a price of ${item.price}`
//     }
// })
// console.log(itemNames)

//FIND: find single item that fulfills a condition in an array
// const findCondo = items.find(item=>item.name === "condo")
// console.log(findCondo)

//FOR..OF: this prints each element of an array from index 0 to the last index
// for(item of items){
//     console.log(item)
// }
// function forOf(arr){
//  for(i=0; i<arr.length; i++){
//     console.log(arr[i])
//  }
// }
//forOf(items)

//FOR..IN:it gives us the keys and values of the arrays in the loop...itemName is the key and item[itemName] the value
// const item = items[3]
// for(let itemName in item){
//     console.log(itemName, item[itemName])
// }

//FINDINDEX: this finds the index of element that fulfills a condition in an array
// const findItem = items.findIndex(item=> item.name === "tv")
// console.log(findItem)

//REDUCE:this accepts two parameters, a callbcak fxn and another value for initial state. the acc is the first item while the number is the next no
//Index is always the initial value set to 0 for numbers or []/{} for arrays or objects respectively.
// const keyedItem = items.reduce((acc,user)=>{
//     acc[user.name] = user
//     return acc
// },{})
// console.log(keyedItem)

// const sum = numbers.reduce((acc,number)=>{
//     return acc + number
// })
// console.log(sum)

// const average = numbers.reduce((acc,number,index,array)=>{
//     console.log(acc)
//     acc+=number
//     return acc/array.length
// },0)
// console.log(average)

//EVERY: it checks if all the values fulfill same condition
// const allExpensive = items.every(item => item.price >= 10000)
// console.log(allExpensive)

//SOME: this return true if any of the item matches the given criteria
// const someCheap = items.some(item =>item.price <= 15000)
// console.log(someCheap)

//ENTRIES:It turns the key value pair of an item to an array while FROMENTRIES converts back to normal
// const item = items[0];
// const entries = Object.entries(item)
// console.log(entries)
// console.log(Object.fromEntries(entries))

//INCLUDES:checks if the arrays has an item in it
//console.log(numbers.includes(2))

//SPLICE: it means cut from the second index and count n-1 items to the right.Specify length with splice
// const colours = ["red", "yellow", "cyan", "black", "blue", "purple", "orange"]
// const newColour = colours.splice(2,2)
// console.log(colours)
// console.log(newColour)

//SLICE:its cuts from the index to the n-1 eg cut from index 1 to 3 is slice(1,4).Select what to remove
// const colours = ["red", "yellow", "cyan", "black", "blue", "purple", "orange"]
// const newColor = colours.slice(1,4)
// console.log(newColor)

//CONCAT
// const colours = ["red", "yellow", "cyan", "black", "blue", "purple", "orange"]
// const mergeItems = numbers.concat(colours)
// console.log(mergeItems)

