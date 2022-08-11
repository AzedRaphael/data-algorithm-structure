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

class MinBH{
    constructor(){
        this.values = []
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp(this.values.length - 1)
    }
    getParent(index){
        return Math.floor((index -1 )/2)
    }
    getValue(index){
        return this.values[index]
    }
    swap(i,j){
        let temp = this.values[i];
        this.values[i] = this.values[j]
        this.values[j] = temp
    }
    bubbleUp(childIdx){
        if(childIdx === 0)return;
        const parentIndex = this.getParent(childIdx)
        const parentValue = this.getValue(parentIndex)
        const childValue = this.getValue(childIdx)
        if(childValue < parentValue){
            this.swap(childIdx,parentIndex);
            this.bubbleUp(parentIndex)
        }
    }
    insertFromArray(array){
        for(let num of array)this.insert(num)
    }
    isEmpty(){
        if(this.values.length === 0)throw new Error("HEAP IS EMPTY")
    }
    isPeek(){
        this.isEmpty();
        return this.values[this.values.length - 1]
    }
    extractMin(){
        this.isEmpty();
        const output = this.values[0];
        const end = this.values[this.values.length - 1];
        this.values[0] = end;
        this.bubbleDown(0);
        return output;
    }
    isValidIndex(Index){
        return 0 < Index && Index < this.values.length
    }
    isMinHeap(parentVal, childVal){
       return childVal < parentVal
    }
    
    bubbleDown(headIdx){
        let headValue = this.values[headIdx];
        let leftChildIndex = 2 * headIdx + 1;
        let rightChildIdx = 2 * headIdx + 2;
        let rightChild,leftChild

        if(this.isValidIndex(leftChildIndex)){
            leftChild = this.values[leftChildIndex];
            if(this.isMinHeap(headValue,leftChild)){
                this.swap(leftChildIndex,headIdx)
                this.bubbleDown(leftChildIndex);
                headValue = leftChild;
            }
        }
        if(this.isValidIndex(rightChildIdx)){
            rightChild = this.values[rightChildIdx];
            if(this.isMinHeap(headValue,rightChild)){
                this.swap(rightChildIdx,headIdx)
                this.bubbleDown(rightChildIdx);
                headValue = rightChild;
            }
        }
    }
    convertMaxHeap(array,n){
        for(let i=(n-2)/2; i>=0; i--){
            return this.maxHeapify(array,i,n)
        }
    }
    maxHeapify(arr,i,n){
        let left = 2*i + 1;
        let right = 2*i + 2;
        let largest = i;
        if(left < n && arr[left] > arr[i]){
            largest = left;
        }
        if(right < n && arr[right] > arr[largest]){
            largest = right;
        }
        if(largest !== i){
            let temp = arr[i];
            arr[i] = arr[largest]
            arr[largest] = temp
            this.maxHeapify(arr,largest,n)
        }
    }
}

let firstMinBH = new MinBH();
//let arr = []
let arr = [34,32,67,43,12,78987,0,-1,23,123,543,-10]


function heapSort(){
    firstMinBH.insertFromArray(arr)
    let count = 0, newArr = new Array(arr.length);i=0
    while(!firstMinBH.isEmpty() && count < firstMinBH.values.length){
        newArr[i++] = firstMinBH.extractMin();
        count++;
    }
    return newArr
}
console.log(firstMinBH.convertMaxHeap(arr,arr.length))
//console.log(heapSort())
