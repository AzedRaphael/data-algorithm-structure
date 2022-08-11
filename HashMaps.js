// function hash(key,arrayLen){
//     let total = 0;
//     let prime = 31;
//     for(let i = 0; i<Math.min(key.length,100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0)-96;
//         total = (total*prime+value) & arrayLen;
//     }
//     return total;
// }
// console.log(hash("cyan",10))

//hashTable class
class HashTable {
    constructor(size=5) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0;
        let weird_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * weird_prime + value) & this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }
    get(key) {
        let index = this._hash(key)
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    values(){
        let valuesArr = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
    key(){
        let keyArray = [];
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!keyArray.includes(this.keyMap[i][j][0])){
                        keyArray.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keyArray
    }
}

let ht = new HashTable();
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("plum", "#DDA0DD");
ht.set("grape", "F000FF");
ht.set("flare", "#FFFF00");
ht.set("flare", "#F00A00")
console.log(ht.key())
