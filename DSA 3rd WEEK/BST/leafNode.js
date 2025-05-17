class TreeNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BFS{
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
    inorder(node=this.root){
        if(node){
            this.inorder(node.left)
            console.log(node.value);
            this.inorder(node.right)
            
        }
    }
    leafNodeCount(node=this.root){
        if(node===null) return 0
        if(node.left ===null && node.right===null) return 1
        return this.leafNodeCount(node.left)+this.leafNodeCount(node.right)
    }
    printLeafNodes(node = this.root) {
        if (node === null) return;
    
        if (node.left === null && node.right === null) {
            console.log(node.value);   
            return;
        }
    
        this.printLeafNodes(node.left);
        this.printLeafNodes(node.right);
    }
    
}

const tree = new BFS();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.inorder();
console.log(tree.leafNodeCount());
tree.printLeafNodes()