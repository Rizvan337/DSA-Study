class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    addFirst(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
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
list.addFirst(50)
list.removeFirst()
list.print()