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
        }
        else{
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
isBalanced(node = this.root){
    const checkHeight = (node)=>{
        if(!node) return 0
        const leftHeight = checkHeight(node.left)
        if(leftHeight===-1) return -1
        const rightHeight = checkHeight(node.right)
        if(rightHeight===-1) return -1
        if(Math.abs(leftHeight-rightHeight)>1) return -1
        return Math.max(leftHeight,rightHeight)+1
    }
    return checkHeight(node)!==-1
}
contains(value){
    let current = this.root
    while(current){
        if(value === current.value) return true
        if(value<current.value){
            current = current.left
        }else {
            current = current.right
        }
    }
    return false
}
}
const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(5)
bst.insert(40)
bst.inorder()
console.log(bst.isBalanced());
console.log(bst.contains(10))