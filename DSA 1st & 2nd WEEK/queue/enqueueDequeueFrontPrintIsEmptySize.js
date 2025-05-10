class Queue{
    constructor(){
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue.shift()
    }
    isEmpty(){
       return this.size()===0
    }
    size(){
        return this.queue.length
    }
    front(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue[0]
    }
    print(){
        if(this.isEmpty()){
            return "Queue is empty"
        }
        return this.queue.join(',')
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(40)
queue.enqueue(20)
queue.enqueue(80)
queue.dequeue()
console.log(queue.front());
console.log(queue.size());
console.log(queue.print());
