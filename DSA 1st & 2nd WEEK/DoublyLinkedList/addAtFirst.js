class Node{
    constructor(data){
        this.data = data
        this.prev = null
        this.next = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
    }
    addAtFirst(data){
        let newNode = new Node(data)
        newNode.next = this.head
        if(this.head){
            this.head.prev = newNode
        }
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
const list = new DoublyLinkedList()
list.addAtFirst(20)
list.addAtFirst(10)
list.addAtFirst(80)
list.print()