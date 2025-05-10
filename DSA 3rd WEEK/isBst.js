class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newnode = new TreeNode(value)
        if(!this.root){
            this.root = newnode
            return
        }
        let queue = [this.root]
        while(queue.length){
         let current = queue.shift()   
         if(!current.left){
             current.left = newnode
             return
         }else{
             queue.push(current.left)
         }
         if(!current.right){
             current.right = newnode
             return
         }else{
             queue.push(current.right)
         }
        }
    }
    isBst(node = this.root,min = -Infinity,max = Infinity){
    if(!node) return true
    if(node.value<min||node.value>max) return false
    return this.isBst(node.left,min,node.value) && this.isBst(node.right,node.value,max)
}
}

const tree = new Tree()
tree.insert(11)
tree.insert(1)
tree.insert(10)
tree.insert(9)
console.log(tree.isBst())