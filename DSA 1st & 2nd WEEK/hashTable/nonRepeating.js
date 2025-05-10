function nonRepeat(str){
    const map = new Map()
    for(let char of str){
        const count = map.get(char)||0
        map.set(char,count+1)
    }
    non = []
    for(let char of str){
        if(map.get(char)===1){
            non.push(char)
        }
    }
    return non
}

const str = 'swiss'
console.log(nonRepeat(str))