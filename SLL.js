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


//VVI SLL question
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length = 0;
    }
    unshift(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this
    }
    push(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    deleteMiddle(){
        let middleNumber = Math.ceil((this.length) / 2)
        let counter = 1
        let current = this.head
    
        while(counter !== middleNumber ){
            current = current.next;
            counter++
        }
        let removedValue = current.next
        current.next = removedValue.next;
        removedValue.next= null;
        this.length--;
        
        return this;
    }
    checkDup(){
        if(!this.head) return false
        if(this.length === 1) return false
        let array = this.print()
        let newArray = []
        let list = null;
        let index = {}
        for(let i = 0; i<array.length; i++){
            index[array[i]] = index[array[i]] + 1 || 1
        }
        for(let key in index){
            if(index[key] === 1){
                newArray.push(Number(key))
            }
        }
        for(let j=newArray.length-1; j>=0; j++){
            list = {value:newArray[j], rest:list}
        }
        return list
    }
    print(){
        var arr = [];
        let current = this.head;
        while(current){
            arr.push(current.value)
            current = current.next;
        } 
        return arr
    }
}

let first = new SinglyLinkedList()
console.log(first.push(1));console.log(first.push(2));console.log(first.push(3));console.log(first.push(4));console.log(first.push(5));console.log(first.push(5))
console.log(first.checkDup())
