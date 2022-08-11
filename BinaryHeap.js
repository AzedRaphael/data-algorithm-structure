//Binary Heaps
//heap is a tree structur similar to the bst. In a max BH, the parents are always larger than the children;
//min BH has all the children larger than the parent

//In a max heap,tge left of the heap is 2n+1 and the right side is 2n+2 of each node.
//the child can find its parents by using Math.floor((n-1)/2).

// class MaxBH{
//     constructor(){
//         this.values = []
//     }
//     insert(element){
//         this.values.push(element)
//         this.bubbleUp();         
//     }
//     bubbleUp(){
//         let newIdx = this.values.length - 1;
//         const newNode = this.values[newIdx]
//         while(newIdx > 0){
//             let parentIdx = Math.floor((newIdx -1) / 2)
//             let parentNode = this.values[parentIdx];
//             if(newNode <= parentNode)break;
//             this.values[parentIdx] = newNode;
//             this.values[newIdx] = parentNode;
//             newIdx = parentIdx 
//         }
//     }
//     removeMax(){
//         const max = this.values[0]
//         const end = this.values.pop()
//         if(this.values.length > 0){
//             this.values[0] = end;
//             this.bubbleDown()
//         }
//         return max
//     }
//     //bubble down the value at index 0 to thr right index
//     bubbleDown(){
//         let headIdx = 0;
//         const length = this.values.length;
//         const headNode = this.values[0];
//         let leftChildIdx = 2*headIdx + 1;
//         let rightChildIdx = 2*headIdx + 2;
//         let leftChild; 
//         let rightChild;
//         let swap = null;

//         if(leftChildIdx < length){
//             leftChild = this.values[leftChildIdx];
//             if(leftChild > headNode){
//                 swap = leftChildIdx
//             }
//         }
//         if(rightChildIdx < length){
//             rightChild = this.values[rightChildIdx];
//             if((swap === null && rightChild > headNode) || (swap !== null && rightChild > leftChild)){
//                 swap = rightChildIdx;
//             }
//         }
//         if(swap === null) return;
//         this.values[headIdx] = this.values[swap];
//         this.values[swap] = headNode;
//         headIdx = swap;
//     }
// }

// let firstMaxBH = new MaxBH();
// firstMaxBH.insert(20);firstMaxBH.insert(25);firstMaxBH.insert(30);firstMaxBH.insert(15);firstMaxBH.insert(50)
// firstMaxBH.insert(52)
// firstMaxBH.removeMax();firstMaxBH.removeMax();firstMaxBH.removeMax();firstMaxBH.removeMax();firstMaxBH.removeMax();firstMaxBH.removeMax();firstMaxBH.removeMax();
// console.log(firstMaxBH)

//Priority queue is a data structure where each element has a priority. Elements with higher priority...
//are served before elements of lower priority. PQ are seperate from heaps.
class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority
    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(value,priority){
        let newVal = new Node(value,priority);
        this.values.push(newVal)
        this.bubbleUp();         
    }
    bubbleUp(){
        let newIdx = this.values.length - 1;
        const newNode = this.values[newIdx]
        while(newIdx > 0){
            let parentIdx = Math.floor((newIdx -1) / 2)
            let parentNode = this.values[parentIdx];
            if(newNode.priority <= parentNode.priority)break;
            this.values[parentIdx] = newNode;
            this.values[newIdx] = parentNode;
            newIdx = parentIdx 
        }
    }
    dequeue(){
        const max = this.values[0]
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown()
        }
        return max
    }
    //bubble down the value at index 0 to thr right index
    bubbleDown(){
        let headIdx = 0;
        const length = this.values.length;
        const headNode = this.values[0];
        let leftChildIdx = 2*headIdx + 1;
        let rightChildIdx = 2*headIdx + 2;
        let leftChild; 
        let rightChild;
        let swap = null;

        if(leftChildIdx < length){
            leftChild = this.values[leftChildIdx];
            if(leftChild.priotiy > headNode.priority){
                swap = leftChildIdx
            }
        }
        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild.priority > headNode.priority) || 
                (swap !== null && rightChild.priority > leftChild.priority)
            ){
                swap = rightChildIdx;
            }
        }
        if(swap === null) return;
        this.values[headIdx] = this.values[swap];
        this.values[swap] = headNode;
        headIdx = swap;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 1);ER.enqueue("high fever",2);ER.enqueue("gun shot wond",5);ER.enqueue("consussion",3);ER.enqueue("delivery",4)

console.log(ER.dequeue());console.log(ER.dequeue());console.log(ER.dequeue());console.log(ER.dequeue());                                                                                                                                                                                
console.log(ER)