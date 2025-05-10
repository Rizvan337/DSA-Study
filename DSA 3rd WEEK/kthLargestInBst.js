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
        kthLargest(k){
            let result = null
            let count = 0
           function reverseInorderTraversal(node){
                if(!node || count>=k) return null
                reverseInorderTraversal(node.right)
                    count++
                    if(count===k){
                        result = node.value
                        return
                    }
                    reverseInorderTraversal(node.left)
                }
                reverseInorderTraversal(this.root)
                return result
            }
            kthSmallest(k){
                let count = 0
                let result = null
                function inorder(node){
                    if(!node || count>=k) return
                    inorder(node.left)
                    count++
                    if(count === k){
                        result = node.value
                        return
                    }
                    inorder(node.right)
                }
                inorder(this.root)
                return result
            }
            
        }

        const bst = new BST()
        bst.insert(20);
        bst.insert(10);
        bst.insert(30);
        bst.insert(5);
        bst.insert(15);
        bst.insert(25);
        bst.insert(35);
        console.log(bst.kthLargest(2))
        console.log(bst.kthSmallest(1));
        