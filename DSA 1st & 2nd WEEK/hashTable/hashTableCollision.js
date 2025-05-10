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
        if(!this.table[index]){
            this.table[index] = []
        }
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]===key){
                this.table[index][i][1]=value
                return
            }
        }
        this.table[index].push([key,value])
    }
    get(key){
        const index = this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]===key)
                    return this.table[index][i][1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0]===key){
                    this.table[index].splice(i,1)
                    return
                }
            }
        }
    }

    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(this.table[i]);
                
            }
        }
    }
}

const table = new HashTable(4)
table.set('ba', 'Rizvan');
table.set('ab', 22);

table.print()