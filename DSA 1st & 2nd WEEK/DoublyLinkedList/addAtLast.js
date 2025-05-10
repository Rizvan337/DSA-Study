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
    addAtLast(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        newNode.prev = current
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
const list = new DoublyLinkedList()
list.addAtLast(10)
list.addAtLast(20)
list.addAtLast(19)
list.addAtLast(17)
list.print()