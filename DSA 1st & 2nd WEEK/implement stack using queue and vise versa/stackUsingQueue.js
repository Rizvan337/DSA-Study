var MyStack = function(x){
    this.q1  =[]
    this.q2 =[]
};
 MyStack.prototype.push = function(x){
    while(this.q1.length!==0){
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x)
    while(this.q2.length!==0){
        this.q1.push(this.q2.shift())
    }
}

 MyStack.prototype.pop = function(){
    return this.q1.shift()
}

 MyStack.prototype.top = function(){
    return this.q1[0]
}

 MyStack.prototype.isEmpty = function(){
    return this.q1.length == 0
}

const stack = new MyStack()
stack.push(10)
stack.push(30)
stack.push(60)
stack.push(20)
console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.isEmpty());
