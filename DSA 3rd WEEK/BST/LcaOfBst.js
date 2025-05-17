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
        while(current){
            if(!current.left){
                if(value<current.value){
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
        LCA(node,x,y){
            if(!node) return null
            if(x<node.value && y<node.value){
                return this.LCA(node.left,x,y)
            }
            if(x>node.value && y>node.value){
                return this.LCA(node.right,x,y)
            }
            return node
        }
    }
    const bst = new BST()
    bst.insert(10)
    bst.insert(15)
    bst.insert(13)
    bst.insert(23)
    bst.insert(20)
    console.log(bst.LCA(bst.root,10,13).value);