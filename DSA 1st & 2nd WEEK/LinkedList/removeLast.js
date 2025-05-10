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
    removeLast(){
      if(!this.head) return
      let current  = this.head
      while(current.next.next){
        current = current.next
      }
      current.next = null
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
list.removeLast()
list.print()