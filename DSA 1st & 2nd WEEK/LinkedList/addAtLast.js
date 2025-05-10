class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
    }
    addLast(data){
        const newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    print(){
        let current = this.head
        while(current!==null){
            console.log(current.data);
            current = current.next
            
        }
    }
}
const list = new LinkedList()
list.addLast(10)
list.addLast(20)
list.addLast(40)
list.addLast(60)
list.print()