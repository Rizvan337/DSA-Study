function palindrome(s){
    let stack = []
    for(let i of s){
        stack.push(i)
    }
    let rev = ""
    while(stack.length>0){
        rev+=stack.pop()
    }
    return s===rev
}
const s = 'malayalam'
console.log(palindrome(s));
