class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    addAtIndex(index,data){
        if(index<0 || index>this.size){
            console.error("Invalid")
            return
        }
        let newNode = new Node(data)
        if(index===0){
            newNode.next = this.head
            this.head = newNode
        }else{
            let current = this.head
            for(let i=0;i<index-1;i++){
                current =  current.next
            }
            newNode.next = current.next
            current.next = newNode
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
const list = new LinkedList()
list.addAtIndex(0,2)
list.addAtIndex(1,1)
list.addAtIndex(2,8)
list.addAtIndex(2,6)
list.print()