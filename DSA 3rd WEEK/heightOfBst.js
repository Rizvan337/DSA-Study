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
 findHeight(root){
    if(!root) return -1
    let leftHeight = this.findHeight(root.left)
    let rightHeight = this.findHeight(root.right)
    return Math.max(leftHeight,rightHeight)+1
 }
}
const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(5)
console.log(bst.findHeight(bst.root))