function frequency(str){
    const hashTable = new Map()
    for(let char of str){
        const count = hashTable.get(char)||0
        hashTable.set(char,count+1)
    }
    for(let [key,value] of hashTable){
        console.log(key,value);
        
    }
}

const str = 'mississippi'
frequency(str)
