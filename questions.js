// class Node{
//     constructor(value,next){
//         this.value = value;
//         this.next = next;
//     }
// }

// class SLL{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this
//     }
    
//     pop(){
//         if(!this.head) return undefined;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         let current = this.head;
//         let counter = 0;
//         while(counter !== this.length - 2){
//             current = current.next
//             counter++
//         }
//         current.next = this.tail;
//         this.tail = current;
//         let removedTail = this.tail.next 
//         this.tail.next = null;
//         this.length--;
//         return removedTail
//     }
//     unshift(value){
//         let newNode = new Node(value)
//         if(!this.head){
//             this.head= newNode;
//             this.tail = this.head
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this        
//     }
//     shift(){
//         if(!this.head) return undefined;
//         if(this.length === 1) {
//             this.head = null;
//             this.tail = null
//         }
//         let current = this.head;
//         this.head = current.next;
//         this.length--;
//         return current.value
//     }
//     get(index){
//         if(this.length === 0 || index > this.length)return null
//         let counter = 0;
//         let current = this.head
//         while(counter !== index){
//             current = current.next
//             counter++
//         }
//         return current
//     }
//     set(value,index){
//         let foundVal = this.get(index);
//         if(!foundVal)return false;
//         foundVal.value = value;
//         return this;
//     }
//     insert(value,index){
//         if(index === 0)return this.unshift(value);
//         if(index === this.length) return this.push(value);
//         let prevValue = this.get(index - 1);
//         let newNode = new Node(value);
//         prevValue.next = newNode;
//         newNode.next = prevValue.next.next;
//         this.length++;
//         return this;
//     }
//     remove(index){
//         if(index === this.length) return this.pop()
//         if(index === 0) return this.shift();
//         let prevValue = this.get(index-1)
//         let removedValue = this.get(index)
//         prevValue.next = removedValue.next;
//         this.length--;
//         return removedValue.value
//     }
//     reverse(){
//         if(!this.head)return undefined;
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;

//         let next;
//         let prev = null;
//         for(let i=0; i<this.length; i++){
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this;
//     }
// }

// let firstList = new SLL()
// firstList.push(100);firstList.push(200);firstList.push(300);firstList.push(400);
// console.log(firstList.set(1,1))
// console.log(firstList)

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class DLL{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0        
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(this.head === null){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop(){
//         let tail;
//         if(this.length === 0) return null;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             tail = this.tail;
//             this.tail = tail.prev;
//             tail.prev = null;
//             this.tail.next = null;
//         }
//         this.length--;
//         return tail
//     }

//     unshift(value){
//         let newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head
//         }else{
//             this.head.prev = newNode;
//             newNode.next = this.head;
//             this.head = newNode
//         }
//         this.length++;
//         return this
//     }
//     shift(){
//         let removedHead;
//         if(!this.head) return null;
//         if(this.length === 1) {
//             this.head = null;
//             this.tail = null
//         }else{
//             removedHead = this.head;
//             this.head = removedHead.next;
//             removedHead.next = null;
//             this.head.prev = null;
//         }
//         this.length--;
//         return removedHead.value
//     }
//     get(index){
//         if(index < 0 || index > this.length) return null;
//         if(index === 0)return this.head;
//         if(index === this.length) return this.tail;
//         let middleIndex = Math.floor(this.length /2)
//         let counter,currentValue

//         if(index <= middleIndex){
//             counter = 0;
//             currentValue = this.head;
//             while(counter !== index){
//                 currentValue = currentValue.next;
//                 counter++;
//             }
        
//         }else{
//             counter = this.length-1;
//             currentValue = this.tail;
//             while(counter !== index ){
//                 currentValue = currentValue.prev;
//                 counter--;
//             }
//         }
//         return currentValue;
//     }
//     set(value,index){
//         let foundValue = this.get(index);
//         if(foundValue){
//             foundValue.value = value
//             return foundValue
//         }
//         return false;
//     }
//     insert(value,index){
//         let newNode = new Node(value);
//         let prevValue = this.get(index -1);
//         let foundValue = prevValue.next
//         prevValue.next = newNode;
//         newNode.prev = prevValue;
//         newNode.next = foundValue;
//         foundValue.prev= newNode;

//         this.length++;
//         return this
//     }
//     remove(index){
//         if(index === 0)return this.shift();
//         if(index === this.length) return this.pop();

//         let currentValue, prevValue
//         prevValue = this.get(index-1);
//         currentValue = this.get(index)
//         let nextNode = currentValue.next;
//         prevValue.next = nextNode;
//         nextNode.prev = prevValue
//         currentValue.next = null;
//         currentValue.prev = null;
//         this.length--;
//         return currentValue.value
//     }
//     reverse(){
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         for(let i = 0;i<this.length; i++){
//             const {next,prev} = node
//             node.prev = next;
//             node.next = prev;
//             node = next
//         }
//         return this
//     }
// }

// let firstDLL = new DLL()
// firstDLL.push(100);firstDLL.push(200);firstDLL.push(300);firstDLL.push(400);firstDLL.push(500);firstDLL.push(600);
// console.log(firstDLL.reverse())


// //STACK
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(!this.first){
//             this.first = newNode;
//             this.last = this.first;
//         }else{
//             this.last.next = newNode;
//             this.last = newNode
//         }
//         this.size++;
//         return this;
//     }
//     pop(){
//         if(!this.first)return undefined;
//         let counter = 0, current = this.first, newTail = current;
//         while(counter !== this.size-1){
//             newTail = current;
//             current = current.next;
//             counter++;
//         }
//         newTail.next = current;
//         current = this.last;
//         this.last = newTail;
//         newTail.next = null;
//         this.size--;
//         return current.value;
//     }
// }

// let firstStack = new Stack()
// firstStack.push(1);firstStack.push(2);firstStack.push(3);firstStack.push(4);firstStack.push(5);
// console.log(firstStack.pop())

//QUEUE
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     enqueue(value){
//         let newNode = new Node(value);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     dequeue(){
//         let current;
//         if(!this.head) return undefined;
//         if(this.length === 1) {
//             this.head = null;
//             this.tail = null;
//         }else{          
//             current = this.head;
//             this.head = current.next;
//             current.next = null; 
//         }   
//         this.length--;
//         return this;  
//     }
// }

// let firstQueue = new Queue();
// firstQueue.enqueue(1);firstQueue.enqueue(2);firstQueue.enqueue(3);firstQueue.enqueue(4);
// console.log(firstQueue.dequeue())

// let array = [39237, 47660, 58250, 33163, 42295, 18094, 22100, 27701, 24670, 20717,
//     31364, 62448, 13046, 61072, 26269, 16190, 12, 52790, 31730, 33595,
//     12442, 14787, 49997, 60065, 19713, 42748, 50568, 8563, 25033, 25167,
//     54335, 50053, 38876, 45102, 18406, 60230, 32277, 8334, 15448, 54761,
//     21332, 62294, 10468, 46165, 22828, 57633, 21720, 24394, 48407, 31271,
//     30659, 25640, 27736, 16167, 52, 42553, 27172, 12713, 11076, 29023,
//     46662, 59979, 46443, 29976, 61561, 39223, 55755, 31530, 24041, 44670,
//     6032, 45787, 40379, 32813, 62451, 20010
// ]


// let url = "HISTORICAL RESULT AS 24072022 (MB COGNETIK)-josh.xlsx"
// let oReq = new XMLHttpRequest();
// oReq.open("GET",url, true);
// oReq.responseType =  "arraybuffer";
// oReq.onload = function(e){
//     let arraybuffer = oReq.response;

//     let data = new Uint8Array(arraybuffer);
//     let arr = new Array();
//     for(let i=0; i!= data.length; i++)arr[i] = String.fromCgarCode(data[i]);
//     let bstr = arr.join("")

//     let workbook = XLSX.read(bstr,{type:"binary"});
//     let firstSheet = workbook.SheetNames[0];
//     let worksheet = workbook.Sheets[firstSheet];
//     let test = XLSX.utils.sheet_to_json(worksheet,{raw:true})
//     console.log(test)
// }

// oReq.send();
// console.log(test)


//STACKS QUESTIONS
// function checkSymbols(array){
//     array = array.join().replace(/,/g,"")
//     let char = []
//     for(let i=0; i<array.length; i++){
//         char.push(array.charCodeAt(i))
//     }
//     console.log(char)
//     for(let j=0; j<char.length; j++){
//         for(let k=1; k<char.length; k++){
//             if(char[k] > char[k-1] && Math.floor(char[k]/10) === Math.floor(char[k-1]/10) ){
//                 return true
//             }
//             return false
//         }
//     }
// }
// console.log(checkSymbols(["(", "}", "{", ")", "(",")"]))

//LONGEST VALID PARENTHESIS
// function longestParenthesis(string){
//     string = string.split("")
//     let stack = [-1], count = 0;
//     for(let i =0; i<string.length; i++){
//         if(string[i] === "(")stack.push(i);
//         else if(stack.length === 1)stack[0] = i;
//         else stack.pop()

//         count=Math.max(count, i-stack[stack.length - 1])
//         console.log(stack[stack.length-1] + " "+ "is the value at stacks end")
//         console.log(count + " "+"is the new count")
//         console.log(i + " "+ "value of i")
//         console.log(i-stack[stack.length - 1] + " "+"is the other value")
//         console.log("+++++++++++++++++++++++++++++++++")
//     }
//     return count
// }
// console.log(longestParenthesis("((()())"))

// function trappingWater(array){
//     let left = 0,right = array.length  - 1,count = 0,leftMax = 0, rightMax = 0;
//     while(left < right){
//         if(array[left] < array[right]){
//             array[left] >= leftMax ? (leftMax = array[left]) : count+=(leftMax-array[left]);
//             left++
//         }else{
//             array[height] >= rightMax ? (rightMax = array[right]) : count+=(rightMax - array[right])
//             right--
//         }
//     }
//     return count
// }
// console.log(trappingWater([4,2,0,3,2,5]))

// function largestRectangle(array){
//     let index = array.indexOf(Math.max(...array))
//     let left = array[index-1], right = array[index+1]
//     left == undefined ? (left = 0) : left ;
//     right == undefined ? (right = 0) : right;
//     let result;
    
//     left > right ? (result = left+left) : (result = right+right);
//     return result
// }
// console.log(largestRectangle([2,4,3]))


// function equalSum(array,num){
//     let result = []
//     for(let i=0; i<array.length; i++){
//         for(let j= i+1; j<array.length; j++){
//             if(num === array[i] + array[j]){
//                 result.push(array[j],array[i])
//             }else{
//                 result
//             }
//         }
//     }
//     return result
// }
// console.log(equalSum([2,3,6,9,11],11))

// function removeDup(array){
//     let newArr = []
//     for(let i=0; i<array.length; i++){
//         if(array[i] === array[i+1]){
//             array[i] = 0;
//             newArr.push(array[i])
//         }
//         newArr.push(array[i])
//     }
//     return newArr
// }
// console.log(removeDup([2,3,6,9,11,11]))

// function findMinMax(array){
//     let minNum = Math.min(...array)
//     let maxNum = Math.max(...array)
//     return [minNum,maxNum]
// }
// console.log(findMinMax([-10,2,3,4,5]))

// function intersection(arr1,arr2){
//     let result = []
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 result.push(arr1[i])
//             }
//         }
//     }
//     return result
// }
// console.log(intersection([1,2,3,4,5],[4,5,6,7,8]))

//DOUBLY LINKED LIST
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev=null;
//     }
// }
// class DLL{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(value){
//         let node = new Node(value)
//         if(!this.head){
//             this.head = node;
//             this.tail = this.head
//         }
//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node
//         this.length++;
//         return this;
//     }
//     pop(){
//         let count =0,current = this.head,newTail = current
//         while (count < this.length-1){
//             newTail = current;
//             current = current.next;
//             count++
//         }
//         newTail.next = null;
//         current.prev = null;
//         this.tail = newTail;
//         this.length--;
//         return current.value;
//     }
//     get(index){
//         if(index === 0) return this.head;
//         if(index === this.length-1) return this.tail;
//         let avgIndex = Math.floor(this.length / 2)
//         let count, current;
//         if(index <= avgIndex){
//             count = 0; current = this.head;
//             while(count < index){ 
//                 current = current.next;
//                 count++
//             }
//         }else{
//             count = this.length-1; current = this.tail;
//             while(count > index){ 
//                 current = current.prev;
//                 count--
//             } 
//         }
//         return current
//     }
//     unshift(value){
//         let node = new Node(value);
//         if(!this.head){
//             this.head =node;
//             this.tail = this.head;
//         }
//         let current = this.head
//         current.prev = node;
//         node.next = current;
//         this.head = node;
//         this.length++;
//         return this
//     }
//     shift(){
//         let current = this.head;
//         let newHead = current.next;
//         current.next = null;
//         newHead.prev= null;
//         this.head = newHead;
//         this.length--;
//         return current.value;
//     }
//     set(value,index){
//         let node = new Node(value)
//         if(index === 0)return this.unshift(value);
//         if(index === this.length-1)return this.push(value);
//         let foundValue = this.get(index);
//         let prevValue = this.get(index-1);
//         prevValue.next = node;
//         node.prev = prevValue;
//         node.next = foundValue;
//         foundValue.prev = node;
//         this.length++;
//         return this;
//     }
//     remove(index){
//         let foundValue = this.get(index);
//         let prevValue = this.get(index -1);
//         let nextValue = foundValue.next;
//         foundValue.next=null;
//         foundValue.prev = null;
//         prevValue.next =  nextValue;
//         nextValue.prev = prevValue
//         this.length--;
//         return foundValue;
//     }
//     insert(value,index){
//         let node = new Node(value)
//         let removedValue = this.remove(index)
//         let prevValue = this.get(index-1)
//         let nextValue = prevValue.next

//         prevValue.next = null;
//         nextValue.prev = null;
//         prevValue.next = node;
//         node.prev = prevValue;
//         node.next = nextValue;
//         nextValue.prev = node;
//         return this
//     }

//     isPeek(){
//         return this.length
//     }
//     isEmpty(){
//         if(this.head){
//             return this.length
//         }
//         return null
//     }
// }

// let firstDLL = new DLL();
// firstDLL.push(10);firstDLL.push(20);firstDLL.push(30);firstDLL.push(40);firstDLL.push(50);firstDLL.push(60);firstDLL.push(70);
// console.log(firstDLL.isEmpty())

// const printPairs = (numbers,n)=>{
//     if(numbers.length<2)return;
//     let set = new Set(numbers.length);
//     for(value in numbers){
//         let target = n - value;
//         if(!set.contains(target)){
//             set.add(value)
//         }else{
//             console.log(`${value} ${target}`)
//         }
//     }
// }

// const printLog= (random,k)=>{
//     printPairs(random,k)
// }
// const getRandom = (length)=>{
//     let randome
//     for(i=0; i<length;i++){
//         randome= Math.random()*15
//     }
//     return randome
// }
// console.log(printLog(getRandom(9),11))

//MULTIPLE POINT PATTERN
// function countUnique(array){
//     let i=0;
//     for(let j=1; j<array.length; j++){
//         if(array[0] !== array[j]){
//             i++;
//             array[i] = array[j]
//         }
//     }
//     return i
// }
// console.log(countUnique([1,1,1,2,2,3,4,5,6]))


//SLIDING PATTERN
// function maxSubarraySum(arr,num){
//     if(num > arr.length)return null;
//     let max = Number.NEGATIVE_INFINITY;
//     for(let i=0; i<arr.length-num+1; i++){
//         let temp = 0;
//         for(let j=0; j<num; j++){
//             temp += arr[i+j]
//         }
//         if(temp> max){
//             max = temp;
//         }
        
//     }
//     return max
// }
// console.log(maxSubarraySum([2,6,7,5,3,4,9],3))

// function maxSubarray(array,num){
//     if(num > array.length)return null;
//     let max=0, temp=0;
//     for(let i=0; i<num; i++){
//         max += array[i];
//     }
//     temp = max;
//     for(let i = num; i<array.length; i++){
//         temp = temp - array[i-num] + array[i]
//         max = Math.max(max,temp);
//     }
//     return max;
// }
// console.log(maxSubarray([2,3,4,5,6,4,5,3,1,2,8,7,-1,-4],4))

//SUM TWO LINKED LIST

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class List{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
function addTwoNumbers(l1,l2){
    let list = new Node(0);
    let current = list;

    let sum=0;
    let carry =0;
    while(l1 !== null || l2 !== null || sum > 0){
        if(l1 !== null){
            sum += l1.value;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.value;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        current.next = new Node(sum);
        current = current.next

        sum=carry;
        carry = 0
    }
    return list.next
}
console.log(addTwoNumbers(11,12))
