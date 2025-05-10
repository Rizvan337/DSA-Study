class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
            return
        }
        let current = this.root
        while(true){
        if(value<current.value){
            if(!current.left){
                current.left = newNode
                return
            }
            current = current.left
        }else{
        if(!current.right){
            current.right = newNode
            return
        }
        current = current.right
    }
}
}
    inorder(node = this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.value)
            this.inorder(node.right)
        }
}
isBst(node = this.root,min =-Infinity,max = Infinity){
    if(!node) return true
    if(node.value<min||node.value>max) return false
    return this.isBst(node.left,min,node.value) && this.isBst(node.right,node.value,max)
}
}
const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(5)
bst.inorder()
console.log(bst.isBst())

