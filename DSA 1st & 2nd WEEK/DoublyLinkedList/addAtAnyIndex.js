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
        this.size = 0
    }
    addAtAnyIndex(index,data){
        if(index<0 || index>this.size){
            console.error("Invalid")
            return
        }
        let newNode = new Node(data)
        if(index===0){
            newNode.next = this.head
            if(this.head){
                this.head.prev = newNode
            }
            this.head = newNode
        }
        else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            newNode.prev = current
            newNode.next = current.next
            current.next = newNode
            if(current.next){

                current.next.prev = newNode
                
                
            }
        }
        this.size++
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
list.addAtAnyIndex(0,2)
list.addAtAnyIndex(1,3)
list.addAtAnyIndex(2,90)
list.addAtAnyIndex(2,2)
list.print()