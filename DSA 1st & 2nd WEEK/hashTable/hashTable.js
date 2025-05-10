class HashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size)
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index = this.hash(key)
        return this.table[index] = value 
    }
    get(key){
        let index = this.hash(key)
        return this.table[index] 
    }
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i])
            }
        }
    }
}

// Create HashTable with size 5
const table = new HashTable(5);

//  Add key-value pairs
table.set("name", "Rizvan");
table.set("age", 22);
table.set("job", "Developer");

//  Get a value
console.log("Get name:", table.get("name")); // Rizvan
console.log("Get age:", table.get("age"));   // 22

// Remove a key
table.remove("age");
console.log("After removing age:");
console.log("Get age:", table.get("age"));   // undefined

//  Print all key-value pairs
console.log("Print table:");
table.print();

