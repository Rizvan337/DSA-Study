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
    add(data){
        let newNode = new Node(data)
        newNode.next = this.head
        if(this.head){
            this.head.prev = newNode
        }
        this.head = newNode
    }
    removeAtFirst(){
        if(!this.head) return
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }
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
list.add(10)
list.add(30)
list.add(14)
list.add(15)
list.removeAtFirst()
list.print()