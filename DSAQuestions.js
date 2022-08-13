//BINARY HEAP
// class MaxBH{
//     constructor(){
//         this.values = []
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp()
//     }
//     bubbleUp(){
//         let newId = this.values.length - 1;
//         let newNode = this.values[newId];
//         while(newId > 0){
//             let parentIdx = Math.floor((newId-1)/2);
//             let parentNode = this.values[parentIdx];
//             if(newNode <= parentNode)break;
//             this.values[parentIdx] = newNode;
//             this.values[newId] = parentNode;
//             newId = parentIdx
//         }
//     }
//     extractMax(){
//         let max = this.values[0]
//         let end = this.values[this.values.length - 1]
//         this.values[0] = end;
//         this.bubbleDown();
//         return max
//     }
//     bubbleDown(){
//         let headIdx = 0;
//         let headNode = this.values[headIdx]
//         let length = this.values.length - 1;
//         let leftChildIdx = 2 * headIdx + 1;
//         let rightChildIdx = 2 * headIdx + 2;
//         let leftChild,rightChild
//         let swap = null;

//         if(leftChildIdx < length){
//             leftChild = this.values[leftChildIdx];
//             if(leftChild > headNode){
//                 swap = leftChildIdx
//             }
//         }
//         if(rightChildIdx < length){
//             rightChild = this.values[rightChildIdx]
//             if((swap === null && rightChild>headNode) || (swap !== null && rightChild >leftChild)){
//                 swap = rightChildIdx
//             }
//         }
//         if(swap === null)return;
//         this.values[headIdx] = this.values[swap];
//         this.values[swap] = headNode;
//         headIdx = swap
//     }
// }

// let first = new MaxBH();
// first.insert(100);first.insert(90);first.insert(80);first.insert(88);first.insert(70);first.insert(110);
// console.log(first.extractMax())
// console.log(first)

// class MinBH{
//     constructor(){
//         this.values = []
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp(this.values.length - 1)
//     }
//     getParent(index){
//         return Math.floor((index -1 )/2)
//     }
//     getValue(index){
//         return this.values[index]
//     }
//     swap(i,j){
//         let temp = this.values[i];
//         this.values[i] = this.values[j]
//         this.values[j] = temp
//     }
//     bubbleUp(childIdx){
//         if(childIdx === 0)return;
//         const parentIndex = this.getParent(childIdx)
//         const parentValue = this.getValue(parentIndex)
//         const childValue = this.getValue(childIdx)
//         if(childValue < parentValue){
//             this.swap(childIdx,parentIndex);
//             this.bubbleUp(parentIndex)
//         }
//     }
//     insertFromArray(array){
//         for(let num of array)this.insert(num)
//     }
//     isEmpty(){
//         if(this.values.length === 0)throw new Error("HEAP IS EMPTY")
//     }
//     isPeek(){
//         this.isEmpty();
//         return this.values[this.values.length - 1]
//     }
//     extractMin(){
//         this.isEmpty();
//         const output = this.values[0];
//         const end = this.values[this.values.length - 1];
//         this.values[0] = end;
//         this.bubbleDown(0);
//         return output;
//     }
//     isValidIndex(Index){
//         return 0 < Index && Index < this.values.length
//     }
//     isMinHeap(parentVal, childVal){
//        return  parentVal > childVal
//     }
    
//     bubbleDown(headIdx){
//         let headValue = this.values[headIdx];
//         let leftChildIndex = 2 * headIdx + 1;
//         let rightChildIdx = 2 * headIdx + 2;
//         let rightChild,leftChild

//         if(this.isValidIndex(leftChildIndex)){
//             leftChild = this.values[leftChildIndex];
//             if(this.isMinHeap(headValue,leftChild)){
//                 this.swap(leftChildIndex,headIdx)
//                 this.bubbleDown(leftChildIndex);
//                 headValue = leftChild;
//             }
//         }
//         if(this.isValidIndex(rightChildIdx)){
//             rightChild = this.values[rightChildIdx];
//             if(this.isMinHeap(headValue,rightChild)){
//                 this.swap(rightChildIdx,headIdx)
//                 this.bubbleDown(rightChildIdx);
//                 headValue = rightChild;
//             }
//         }
//     }
    
// }

// let firstMinBH = new MinBH();
// //let arr = []
// let arr = [34,32,67,43,12,78987,0,-1,23,123,543,-10]
// firstMinBH.insertFromArray(arr)
// //console.log(firstMinBH)

// function heapSort(){
//     firstMinBH.insertFromArray(arr)
//     let count = 0, newArr = new Array(arr.length);i=0
//     while(!firstMinBH.isEmpty() && count < firstMinBH.values.length){
//         newArr[i++] = firstMinBH.extractMin();
//         count++;
//     }
//     return newArr
// }
// function slidingWindow(array,num){
//     let result = [],temp = []
//     for(let i=0; i<num; i++){
//        temp.push(array[i]);
//     }
//     temp.sort(function(a,b){return b-a});
//     result.push(temp[0]);
//     temp.splice(array[0],1);
//     console.log(temp)
//     for(let i=num; i<array.length; i++){
//         temp.push(array[i]);
//         temp.sort(function(a,b){return b-a});
//         result.push(temp[0]);
//         temp.splice(array[i-array.length+1], 1)
//     }
//     return result
// }
// console.log(slidingWindow([2,5,12,7,8,9,45,32,1,0,-1],3))


//BALANCED SYMBOLS
// function balanceSymbol(string){
//     let array = string.split(""),newArr=[],arr=[]
//     for(let i=0; i<array.length; i++){
//         let char = string.charCodeAt(i)
//         newArr.push(char)
//     }
//    for(let i=1; i<newArr.length; i++){
//     if( (Math.floor(newArr[i] /10) === Math.floor(newArr[i-1] /10)) && (newArr[i] > newArr[i-1])  ){
//         arr.push(true)
//     } 
//     arr.push(false)
//    }
//    return arr.some((element)=>element ===true)
// }
// console.log(balanceSymbol("({..)"))

//STACK
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.minStack = [];
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(value){
//         let node = new Node(value);
//         if(this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]){
//             this.minStack.push(value)
//         }
//         if(!this.head){
//             this.head = node;
//             this.tail = node;
//         }else{
//             this.tail.next = node;
//             this.tail = node;
//         }
        
//         this.length++;
//         return this;
//     }
//     pop(){
//         if(!this.head) return null;
//         let count = 0,current = this.head,newTail = current;
//         while(count < this.length-1){
//             newTail = current;
//             current = current.next
//             count++;
//         }
//         newTail.next = current;
//         this.tail = newTail;
//         newTail.next = null;
//         return current.value;
//     }
//     min(){
//         return this.minStack.pop()       
//     }
// }

// let firstStack = new Stack();
// firstStack.push(11);firstStack.push(3);firstStack.push(13);firstStack.push(4);firstStack.push(1);
// console.log(firstStack.min())
// firstStack.push(40);
// firstStack.pop();
// firstStack.pop();
// console.log(firstStack.min())


//BST
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(this.root === null){
            return this.root = node;
        }else{
            let current = this.root;
            
            while(true){
                if(value === this.root)return undefined;
                if(value < current.value){
                    if(current.left === null){
                        current.left = node;
                        return this;
                    }else{
                        current = current.left;
                    }
                }
                else {
                    if(current.right === null){
                        current.right = node;
                        return this;
                    }
                    else{
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value){
        if(this.root === null)return false;
        let current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value>current.value){
                current = current.right;
            }else{
                found = true
            }
        }
        if(!found) return `${value} is not found`
        return current;
    }
    BFS(){
        let result = [], queue=[], current= this.root;
        queue.push(current);
        while(queue.length){
            current = queue.shift();
            result.push(current.value);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right)
        }
        return result;
    }
    PreDFS(){
        let data = [], node = this.root;
        function tranverse(current){
            data.push(current.value)
            if(current.left)tranverse(current.left);
            if(current.right)tranverse(current.right);
        }
        tranverse(node)
        return data;
    }
    PostDFS(){
        let data = [], node = this.root;
        function tranverse(current){
            if(current.left)tranverse(current.left);
            if(current.right)tranverse(current.right);
            data.push(current.value)
        }
        tranverse(node);
        return data
    }
    InorderDFS(){
        let data = [], node = this.root;
        function tranverse(current){
            if(current.left)tranverse(current.left);
            data.push(current.value)
            if(current.right)tranverse(current.right);
        }
        tranverse(node);
        return data
    }
}

let firstBST = new BST();
firstBST.insert(100);firstBST.insert(90);firstBST.insert(110);firstBST.insert(89);firstBST.insert(91);
console.log(firstBST.InorderDFS())

