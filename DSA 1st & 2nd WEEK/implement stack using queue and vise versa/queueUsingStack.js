var MyQueue = function(){
    this.stack1 = []
    this.stack2 = []
}
MyStack.prototype.push = function(x){
    this.stack1.push(x)
}
MyStack.prototype.pop = function(){
    if(this.stack2.length==0){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}

MyStack.prototype.front = function(){
    if(this.stack2.length==0){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length-1]
}

MyStack.prototype.empty= function(){
    return this.stack1.length ===0 && this.stack2.length==0
}
