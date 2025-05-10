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
depth(value){
    let current = this.root
    let depth = 0
    while(current){
        if(value === current.value){
            return depth
        }else if(value<current.value){
            current = current.left
        }else{
            current = current.right
        }
        depth++

    }
    return -1
}

}

const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(5)
console.log(bst.depth(5))
console.log(bst.depth(5)); 
console.log(bst.depth(10)); 
console.log(bst.depth(30)); 
console.log(bst.depth(15));