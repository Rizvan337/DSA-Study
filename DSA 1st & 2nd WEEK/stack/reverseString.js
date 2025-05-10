function reverse(s){
    let split = s.split('')
    let stack = []
    for(let i of split){
        stack.push(i)
    }
    let final = ""
    while(stack.length){
        const current = stack.pop()
        if(current){
            final += ""+current
        }
    }
    return final.trim()
}

const s = "Hello world"
console.log(reverse(s));
