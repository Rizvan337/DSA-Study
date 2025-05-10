function validParanthesis(s){
    let stack = []
    for(let i of s){
        if(i=='('||i=='['||i=='{'){
            stack.push(i)
        }else{
            const p = stack.pop()
            if((i==')'&&p!=='(') ||(i==']'&&p!=='[') ||(i=='}'&&p!=='{') ){
                return false
            }
        }
    }
    return stack.length===0
}


console.log(validParanthesis("()[]{}"));  // true
console.log(validParanthesis("([{}])"));  // true
console.log(validParanthesis("(]"));      // false
console.log(validParanthesis("((()))"));  // true
console.log(validParanthesis("((()"));    // false
