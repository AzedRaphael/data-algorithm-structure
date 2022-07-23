// function checkDup(array1,array2){
//     let count = {}
//     for(key in array1){
//         count[array1[key]] = count[array1[key]] + 1 || 1
//     }
  
//     for(value in array2){
//         if(!count[array2[value]]){
//             console.log(array2[value])
//         }
//     }
// }
// checkDup(["dad","mom","kids","grandpa"], ["dad","mom","kids","dogs"])

// function checkDup(array){
//     let count = {}
//     for(key in array)count[array[key]] = count[array[key]] + 1 || 1;
//     for(values in count)count[values] > 1 ? console.log(values) : null;
// }
// checkDup([1,2,2,3,3])

//seek and destroy
// function seekDestroy(arr){
//     let newArr = []
//     let args = [...arguments].slice(1)
//     for(i=0; i<arr.length; i++){
//         let index = args.indexOf(arr[i])
//         if(index === -1){
//             newArr.push(arr[i])
//         }
//     }  
//     console.log(newArr)    
// }
// seekDestroy([1,2,2,1,3,4,2], 2,3)

//where at thou
// let nameObj = [
//     {"apple":1, "bat":2},
//     {"apple":1, "bat":2, "cookie":2},
//     {"apple":1},
//     {"apple":2, "bat":1}
// ]

// let searchName = {"apple":1, "bat":2}

// function search(obj,search){
//    obj.map((item)=>{
//         let items = Object.values(item)
//         let otherName = Object.values(search).join()
//         for(i in items){
//             let index = otherName.indexOf(items[i])
//             if(index >= 0){
//                 console.log(item)
//             }
//         }
//    })
// }
// search(nameObj, searchName)


//18/07/2022 MONDAY
//SELECTIONSORT
// function selectionSort(array){
//     for(i=0; i<array.length; i++){
//         let lowest = i;
//         for(j=i+1; j<array.length; j++){
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
// console.log(selectionSort([21,45,65,1,76,100,0,2,4,7,2]))

//INSERTION SORT:
// function insertionSort(array){
//     for(i=1; i<array.length; i++){
//         for(j=i; j>0; j--){
//             if(array[j] < array[j-1]){
//                 let temp = array[j]
//                 array[j] = array[j-1]
//                 array[j-1] = temp
//             }
//         }
//     }
//     return array
// }
// console.log(insertionSort([2,0,14,21,3,100,1,5,4,-1]))

//MERGE SORT:
// function mergeSort(leftArr,rightArr){
//     const output = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     console.log(rightArr)
//     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
//         let leftEl = leftArr[leftIndex];
//         let rightEl = rightArr[rightIndex]

//         if(leftEl < rightEl){
//             output.push(leftEl)
//             leftIndex++
//         }else{
//             output.push(rightEl)
//             rightIndex++
//         }
//     };
//     return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
// }

// function merge(array){
//     if(array.length <= 1){ 
//         return array
//     }
//     let middleIndex = Math.floor(array.length/2)
//     let leftArr = array.slice(0,middleIndex)
//     let rightArr = array.slice(middleIndex)
//     return mergeSort(
//         merge(leftArr),
//         merge(rightArr)
//     )
// }

// console.log(merge([32,3,6,21,2,1]))

//QUICK SORT: create the base function of the recursion, pivot set to value of last array, then compare each items to the pivot.
//less than should be put in leftArr and vice versa.

// const quickSort = array=>{
//     if(array.length === 1){
//         return array
//     }
//     let pivot = array[array.length -1]
//     let leftArr = []
//     let rightArr = []

//     for(i=0; i<array.length-1; i++){
//         if(array[i] < pivot){
//             leftArr.push(array[i])
//         }else{
//             rightArr.push(array[i])
//         }
//     }

//     if(leftArr.length > 0 && rightArr.length > 0){
//         return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
//     }else if(leftArr.length > 0){
//         return [...quickSort(leftArr), pivot]
//     }else{
//         return [pivot, ...quickSort(rightArr)]
//     }
// }
// console.log(quickSort([90,87,12,3,32,27,1,76,0,78]))

//RADIX SORT: find number with max digit count(eg 12,34, 567 => 3), iterate through the max digit and create 10 empty arrays,iterate thru array,
//getDigit starting from last digit in number then push num in an array. Finally concat the buckets in one big array 
// function getDigit(digit,num){
//    return Math.floor(Math.abs(digit) / Math.pow(10,num) % 10)
// }

// function digitCount(num){
//     if(num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1 
// }

// function mostDigits(nums){
//     let maxDigit = 0;
//     for(i=0; i<nums.length; i++){
//         maxDigit = Math.max(maxDigit, digitCount(nums[i]))
//     }
//     return maxDigit
// }

// function radixSort(numArr){
//     let maxDigit = mostDigits(numArr);
//     for(i=0; i<maxDigit; i++){
//         let digitBuckets = Array.from({length:10}, ()=>[])
//         for(j=0; j<numArr.length; j++){
//             let digit = getDigit(numArr[j],i)
//             digitBuckets[digit].push(numArr[j])
//         }
//         numArr = [].concat(...digitBuckets)
//     }
//     return numArr
// }
// console.log(radixSort([12,4,5,98,312,2,89,57,3678,972156,1]))

//ES2015 SYNTAX
//class is a blueprint for creating object with pre-defined properties and methods.

// class Student{
//     constructor(firstName,lastName,year){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.graduation_year = year;
//         this.class_absence = 0; 
//         this.scores =[];
//     }
//     fullname(){
//         return `your full name is ${this.firstName} ${this.lastName} and year of graduation is ${this.graduation_year}`
//     }
//     markLate(){
//         this.class_absence += 1;
//         if(this.class_absence >= 3){
//             return `YOU AREA EXPELLED !!!`           
//         }
//         return `${this.firstName} ${this.lastName} have been late ${this.class_absence} time(s)`
//     }
//     addScores(score){
//         this.scores.push(score)
//         return this.scores
//     }
//     averageScore(){
//         let avg = this.scores.reduce((a,b)=> a+b)
//         return avg
//     }

//     static enrolledStudents(){
//         return `ENROLLING STUDENTS!!!`
//     }
// }

// let firstStudent = new Student('raph', "enweazu",2015)
// console.log(firstStudent.addScores(90))
// console.log(firstStudent.addScores(42))
// console.log(firstStudent.addScores(100))
// console.log(firstStudent.scores)
// console.log(firstStudent.averageScore())
//console.log(Student.enrolledStudents())

//SINGLY LISTED LISTS
// class Node{
//     constructor(value,next){
//         this.val = value;
//         this.next = next;
//     }
// }

// let first = new Node("Hi")
// first.next = new Node("There")
// first.next.next =new Node("Raphael")
//THIS IS A DIRTY WAY TO POINT TO THE NEXT NODE
//First create head and tail ppt to null then length to 0. For push(), the Node class should be vcalled in the SLL class and value accepted.
// if no node head,assign head to newNode and tail to head. if there is a head, set tail.next to newNode and tail to newNode.
//increment length by 1 and return this(for the sll)
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let newNode = new Node(val)
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
//     pop(){
//         if(!this.head) return undefined;
//         let current = this.head;
//         let newTail = current
//         while(current.next){
//             newTail = current
//             current = current.next;
//         }
//         this.tail = newTail
//         this.tail.next = null;
//         this.length--;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
//     shift(){
//         if(!this.head) return undefined;
//         let tempHead = this.head;
//         this.head = tempHead.next;
//         this.length--;   
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }   
//         return tempHead
//     }
//     unshift(val){
//         let newHead = new Node(val)

//         if(!this.head){
//             this.head = newHead;
//             this.tail = newHead;
//             this.length = 1;
//         }
//         newHead.next = this.head;
//         this.head = newHead;
//         this.length++;
//         return this
//     }
//     get(val){
//         if(val < 0 || val >= this.length) return null;
//         let counter = 0
//         let current = this.head
//         while(counter !== val){
//             current = current.next;
//             counter++
//         }
//         return current
//     }
//     set(val,index){
//         let foundVal = this.get(index)
//         if(foundVal){
//             foundVal.val = val;
//             return true;
//         }
//         return false;
//     }
//     insert(val,index){
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length) return this.push(val)
//         if(index === 0) return this.unshift(val)
//         let prevValue = this.get(index-1);
//         let newNode = new Node(val)
//         prevValue.next = newNode;
//         newNode.next = prevValue.next.next;
//         this.length++;
//         return this;
//     }
//     remove(index){
//         if(index < 0 || index > this.length) return undefined;
//         if(index === this.length) return this.pop()
//         if(index === 0) return this.shift()
        
//         let prevValue = this.get(index-1)
//         let removeValue = prevValue.next
//         prevValue.next = removeValue.next
//         this.length--;
//         return removeValue;
//     }
//     print(){
//         var arr = [];
//         let current = this.head;
//         while(current){
//             arr.push(current.val)
//             current = current.next;
//         } 
//         console.log(arr)
//     }
//     reverse(){
//         if(this.length === 0) return undefined;
//         let node = this.head;
//         this.head = this.tail
//         this.tail = node

//         let next; 
//         let prev = null;
//         for( let i=0; i<this.length; i++){
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         return this
//     }
// }


// let list = new SinglyLinkedList()
// console.log(list.push("Hi"))
// console.log(list.push("az"))
// console.log(list.push("raph"))
// console.log(list.push("Good"))
// console.log(list.push("gone"))
// console.log(list.reverse())


//DOUBLY LINKED LIST
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.prev =null;
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(this.head === null){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(this.length === 0) return undefined;
//         if(this.length === 1) {
//             this.head = null;
//             this.tail =  null;
//         }else{
//             let tail = this.tail;
//             this.tail = tail.prev;
//             tail.prev = null;
//             this.tail.next = null;
//         }
//         this.length--;
//         return tail;
//     }
//     shift(){
//         let shiftedHead = this.head;
//         if(this.length === 0) return undefined;
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//         }else{
//             this.head = shiftedHead.next;
//             this.head.prev = null;
//             shiftedHead.next = null;
//         }
//         this.length--;
//         return shiftedHead;
//     }
//     unshift(value){
//         let newNode = new Node(value);
//         if(this.length === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{      
//             let head = this.head;
//             head.prev = newNode;
//             newNode.next = head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     get(index){
//         if(index < 0 || index > this.length) return null;
//         if(index === this.length) return this.tail;
//         let indexAvg = Math.floor(this.length/2)
//         let counter;
//         let currentValue;
//         if(index <= indexAvg){
//             counter = 0;
//             currentValue = this.head;
//             while(counter !== index){
//                 currentValue = currentValue.next;
//                 counter++;            
//             }
//         }
//         else{
//             counter = this.length -1
//             currentValue = this.tail;
//             while(counter !== index){
//                 currentValue = currentValue.prev;
//                 counter--;            
//             }
//         }
//         return currentValue;
//     }
//     set(value, index){
//         let foundValue = this.get(index);
//         if(foundValue){
//             foundValue.value = value
//             return foundValue
//         }
//         return `index not found`
//     }
//     insert(value,index){
//         if(index < 0 || index >= this.length)return false;
//         if(index === 0) return this.unshift(value);
//         if(index === this.length) return this.push(value);
        
//         let newNode = new Node(value);
//         let prevNode = this.get(index-1);
//         let afterNode = prevNode.next
//         prevNode.next = newNode;
//         newNode.prev = prevNode;
//         newNode.next = afterNode;
//         afterNode.prev = newNode;
//         this.length++;
//         return this;
//     }
//     remove(index){
//         if(index < 0 || index >= this.length)return undefined;
//         if(index === 0) return this.shift(index);
//         if(index === this.length -1) return this.pop();

//         let foundValue = this.get(index);
//         let prevNode = this.get(index - 1);
//         let nextNode = foundValue.next;
//         foundValue.next = null;
//         foundValue.prev = null;
//         prevNode.next = nextNode;
//         nextNode.prev = prevNode;
//         this.length--;
//         return this;
//     }
//     reverse(){

//     }
// }
// let first = new DoublyLinkedList();
// first.push(10);first.push(11);first.push(16);first.push(16);
// console.log(first.remove(2))

//STACKS AND QUEUES: stacks follows the lifo principle which is the last in first out while a queue follow the fifo pirnciple
//first in first out.
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;        
//     }
//     print(){
//         var arr = [];
//         let current = this.first;
//         while(current){
//             arr.push(current.value)
//             current = current.next;
//         } 
//         console.log(arr)
//     }
//     unshift(value){
//         let newNode = new Node(value);
//         if(!this.first){
//             this.first = value;
//             this.last = this.first;
//         }
//         newNode.next =  this.first;
//         this.first = newNode;
//         this.size++;
//         return this.size;
//     }
//     shift(){
//         if(!this.first) return null;
//         if(this.size === 1){
//             this.first = null;
//             this.last = null;
//         }
//         let removeNode = this.first;
//         this.first = removeNode.next;
//         removeNode.next = null;
//         this.size--;
//         return removeNode;
//     }
// }

// let firstStack = new Stack()
// firstStack.unshift("first");firstStack.unshift("second");firstStack.unshift("third")
// console.log(firstStack.shift())

//QUEUE:FIFO Principle
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     enqueue(value){
//         let newNode = new Node(value);
//         if(!this.first){
//             this.first = newNode;
//             this.last = this.first;
//         }
//         this.last.next = newNode;
//         this.last = newNode;
//     }
//     print(){
//         let arr = [];
//         let current = this.first;
//         while(current){
//             arr.push(current.value)
//             current = current.next;
//         }
//         console.log(arr)
//     }
//     dequeue(){
//         if(!this.first) return null;
//         if(this.first === this.last){
//             this.last = null;
//         }
//         let removeNode = this.first;
//         this.first = removeNode.next;
//         removeNode.next = null;
//         this.size--;
//         return removeNode;
//     }

// }
// let firstQueue = new Queue()
// firstQueue.enqueue("first");firstQueue.enqueue("second");firstQueue.enqueue("third")
// console.log(firstQueue)
// console.log(firstQueue.dequeue())

//BINARY SEARCH TREE
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left= null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         let newNode = new Node(value)
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }else{
//             var current = this.root;
//             while(true){
//                 if(value === current.value) return undefined
//                 if(value < current.value){
//                     if(current.left === null){
//                         current.left = newNode;
//                         return this
//                     }else{
//                         current = current.left;
//                     }
//                 }else if(value > current.value){
//                     if(current.right === null){
//                         current.right = newNode;
//                         return this;
//                     }else{
//                         current = current.right
//                     }
//                 }
//             }
//         }
//     }
//     find(value){
//         if(this.root === null) return false;
//         let current = this.root;
//         let found = false;
//         while(current && !found){
//             if(value < current.value){
//                 current = current.left;
//             }else if(value > current.value){
//                 current = current.right;
//             }else{
//                 found = true;
//             }
//         }
//         if(!found) return `${value} is not in the tree`
//         return current;
//     }
//     BFS(){
//         let data = [], queue = [], node = this.root;
//         queue.push(node);
//         while(queue.length){
//             node = queue.shift();
//             data.push(node.value);
//             if(node.left)queue.push(node.left)
//             if(node.right)queue.push(node.right)
//         }
//         return data
//     }
//     PreDFS(){
//         let data = [],current = this.root;
//         function tranverse(node){
//             data.push(node.value);
//             if(node.left)tranverse(node.left);
//             if(node.right) tranverse(node.right);
//         }
//         tranverse(current)
//         return data;
//     }
//     PostDFS(){
//         let data =[], current=this.root;
//         function tranverse(node){
//             if(node.left)tranverse(node.left);
//             if(node.right) tranverse(node.right);
//             data.push(node.value);
//         }
//         tranverse(current);
//         return data;
//     }
//     InorderDFS(){
//         let data = [], current = this.root;
//         function transverse(node){
//             if(node.left)transverse(node.left);
//             data.push(node.value);
//             if(node.right)transverse(node.right);
//         }
//         transverse(current);
//         return data
//     }
// }

// let tree = new BinarySearchTree();
// tree.insert(10)
// tree.insert(19)
// tree.insert(8)
// tree.insert(21)
// tree.insert(12)
// tree.insert(18)
// tree.insert(6)
// console.log(tree.InorderDFS())

//TREE TRAVERSAL -- There are two ways to traverse a tree. the breadth first search and depth first search.
//BREADTH FIRST SEARCH

