class Stack{
    constructor(){
        this.stack = []
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack.pop()
    }
    isEmpty(){
        return this.size()===0
    }
    size(){
        return this.stack.length
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.size()-1]
    }
    print(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack.join(',')
    }
}
const stack1 = new Stack()
stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)
console.log(stack1.peek())
stack1.pop()
console.log(stack1.print())