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
    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
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
list.addFirst(20)
list.addFirst(10)
list.addFirst(30)
list.addFirst(20)
list.print()