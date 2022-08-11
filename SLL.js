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
let addTwoNumbers = function(l1, l2) {
    let carry = 0;
    while(l1 || l2 || carry){
        console.log(l1,l2,carry)
        let val1 = 0;
        let val2 = 0;
        if(l1){
            val1 = l1.val;
            l1 = l1.next
        }
        if(l2){
            val2 = l2.val;
            l2 = l2.next;
        }
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10
        console.log(digit)
    }
};

let first = new SinglyLinkedList()
let second= new SinglyLinkedList()
first.push(2);first.push(1);first.push(3);
second.push(2);second.push(1);second.push(3);
console.log(addTwoNumbers(first,second))

//CIRCULAR LINKED LIST
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class CircularLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail =null;
//         this.length = 0;
//     }
//     unshift(value){
//         let newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//     }
//         newNode.next = this.head;
//         this.head = newNode
//         this.length++;
//         return this
//     }
//     push(value){
//         let newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         newNode.next =this.head
//         this.length++;
//         return this
//     }
//     deleteMiddle(){
//         let middleNumber = Math.ceil((this.length) / 2)
//         let counter = 1
//         let current = this.head
    
//         while(counter !== middleNumber ){
//             current = current.next;
//             counter++
//         }
//         let removedValue = current.next
//         current.next = removedValue.next;
//         removedValue.next= null;
//         this.length--;
        
//         return this;
//     }
//     checkDup(){
//         if(!this.head) return false
//         if(this.length === 1) return false
//         let array = this.print()
//         let newArray = []
//         let list = null;
//         let index = {}
//         for(let i = 0; i<array.length; i++){
//             index[array[i]] = index[array[i]] + 1 || 1
//                 }
//         for(let key in index){
//             if(index[key] === 1){
//                 newArray.push(Number(key))
//             }
//         }
//         for(let j=newArray.length-1; j>=0; j++){
//             list = {value:newArray[j], rest:list}
//         }
//         return list
//     }
//     print(){
//         var arr = [];
//         let current = this.head;
//         while(current){
//             arr.push(current.value)
//             current = current.next;
//         } 
//         return arr
//     }
//      get(val){
//         if(val < 0 || val >= this.length) return null;
//         let counter = 0
//         let current = this.head
//         while(counter !== val){
//             current = current.next;
//             counter++
//         }
//         return current
//     }
//     insert(val,index){
//         let newNode = new Node(val)
//         if(index < 0 || index > this.length) return false;
//         if(index === this.length-1) return this.push(val)
//         if(index === 0){
//             newNode.next = this.head;
//             if(!this.head){
//                 newNode.next = newNode
//             }else{
//                 const last = this.get(this.length - 1)
//                 last.next = newNode;
//             }
//             this.head = newNode;
//         }else{
//             const prevValue = this.get(index -1)
//             newNode.next = prevValue.next;
//             prevValue.next = newNode;
//         }
//         this.length++;
//         return this;
//     }

// }

// let first = new CircularLinkedList()
// first.push(1);first.push(2);first.push(3);
// console.log(first.insert(5,1))

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head1 = null;
//         this.head2 = null;
//         this.length = 0;
//     }
//     printlist( head) {
//         while (head != null) {
//             //document.write(head.val + " ");
//             head = head.next;
//         }
//     }
//     push(val , list) {
//         let head1, head2, result;
//         let carry;
//         var newnode = new node(val);
//         if (list == 1) {
//             newnode.next = head1;
//             head1 = newnode;
//         } else if (list == 2) {
//             newnode.next = head2;
//             head2 = newnode;
//         } else {
//             newnode.next = result;
//             result = newnode;
//         }
    
//     }
//     addsamesize( n,  m) {
//         // Since the function assumes linked lists are of
//         // same size, check any of the two head pointers
//         if (n == null)
//             return;
    
//         // Recursively add remaining nodes and get the carry
//         addsamesize(n.next, m.next);
    
//         // add digits of current nodes and propagated carry
//         var sum = n.val + m.val + carry;
//         carry = parseInt(sum / 10);
//         sum = sum % 10;
    
//         // Push this to result list
//         push(sum, 3);
    
//     }
//     propogatecarry( head1) {
//         // If diff. number of nodes are not traversed, add carry
//         if (head1 != cur) {
//             propogatecarry(head1.next);
//             var sum = carry + head1.val;
//             carry = parseInt(sum / 10);
//             sum %= 10;
    
//             // add this node to the front of the result
//             push(sum, 3);
//         }
//     }
//     getsize( head) {
//         var count = 0;
//         while (head != null) {
//             count++;
//             head = head.next;
//         }
//         return count;
//     }
//     addlists() {
//         // first list is empty
//         if (head1 == null) {
//             result = head2;
//             return;
//         }
    
//         // first list is empty
//         if (head2 == null) {
//             result = head1;
//             return;
//         }
    
//         var size1 = getsize(head1);
//         var size2 = getsize(head2);
    
//         // Add same size lists
//         if (size1 == size2) {
//             addsamesize(head1, head2);
//         } else {
//             // First list should always be larger than second list.
//             // If not, swap pointers
//             if (size1 < size2) {
//                 var temp = head1;
//                 head1 = head2;
//                 head2 = temp;
//             }
//             var diff = Math.abs(size1 - size2);
    
//             // move diff. number of nodes in first list
//             var temp = head1;
//             while (diff-- >= 0) {
//                 cur = temp;
//                 temp = temp.next;
//             }
    
//             // get addition of same size lists
//             addsamesize(cur, head2);
    
//             // get addition of remaining first list and carry
//             propogatecarry(head1);
//         }
//         // if some carry is still there, add a new node to
//         // the front of the result list. e.g. 999 and 87
//         if (carry > 0)
//             push(carry, 3);
    
//     }    
// }


//


// javascript Iterative program to add
// two linked lists  
