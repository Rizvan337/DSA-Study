class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size  = 0
    }
    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
    }
    removeAt(index){
        if(index<0 || index>this.size){
            console.error("Invalid")
            return
        }
        if(index===0){
            this.head = this.head.next
        }else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current = current.next
            }
            if(current.next){
                current.next = current.next.next
            }
            
        }
        this.size--
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
list.removeAt(2)
list.print()