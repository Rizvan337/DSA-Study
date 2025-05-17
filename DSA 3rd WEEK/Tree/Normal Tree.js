// // 1.Tree insertion,deletion,traversal

// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class Tree{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const newnode = new TreeNode(value)
//         if(!this.root){
//             this.root = newnode
//             return
//         }
//         let queue = [this.root]
//         while(queue.length){
//          let current = queue.shift()   
//          if(!current.left){
//              current.left = newnode
//              return
//          }else{
//              queue.push(current.left)
//          }
//          if(!current.right){
//              current.right = newnode
//              return
//          }else{
//              queue.push(current.right)
//          }
//         }
//     }
//     delete(value){
//         if(!this.root) return
//         let queue = [this.root]
//         let parent = null
//         let todelete = null
//         let last = null
//         while(queue.length>0){
//             let current = queue.shift()
//             if(current.value  === value){
//                 todelete = current
//             }
//             if(current.left){
//                 parent = current
//                 queue.push(current.left)
//             }
//             if(current.right){
//                 parent = current
//                 queue.push(current.right)
//             }
//             last = current
//         }
//         if(todelete){
//             todelete.value = last.value
//             if(parent.left === last){
//                 parent.left = null
//             }
//             else if(parent.right === last){
//                 parent.right = null
//             }
//         }
//     }
    
//     inorder(node = this.root){
//         if(node){
//             this.inorder(node.left)
//             console.log(node.value)
//             this.inorder(node.right)
//         }
//     }
//     preorder(node = this.root){
//         if(node){
//             console.log(node.value)
//             this.preorder(node.left)
//             this.preorder(node.right)
//         }
//     }
//     postorder(node = this.root){
//         if(node){
//             this.postorder(node.left)
//             this.postorder(node.right)
//             console.log(node.value)
//         }
//     }
//     bfs(){
//         if(!this.root) return null
//         let queue = [this.root]
//         while(queue.length>0){
//             let current = queue.shift()
//             console.log(current.value)
//             if(current.left) queue.push(current.left)
//             if(current.right) queue.push(current.right)
//         }
//     }
// }
// const tree = new Tree()
// tree.insert(11)
// tree.insert(1)
// tree.insert(10)
// tree.insert(19)
// tree.insert(14)
// tree.delete(11)
// console.log("inorder")
// tree.inorder()
// console.log("preorder")
// tree.preorder()
// console.log("postorder")
// tree.postorder()
// console.log("bfs")
// tree.bfs()

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
        const newNode = new TreeNode(value)
        if(!this.root){
            this.root = newNode
            return
        }
        let queue = [this.root]
        while(queue.length){
            let current = queue.shift()
            if(!current.left){
                current.left = newNode
                return
            }else{
                queue.push(current.left)
            }
            if(!current.right){
                current.right = newNode
                return
            }else{
                queue.push(current.right)
            }
        }
    }
    delete(value){
        if(!this.root) return 
        let queue = [this.root]
        let parent = null
        let todelete = null
        let last = null
        while(queue.length){
            let current = queue.shift()
            if(current.value===value){
                todelete = current
            }
            if(current.left){
                parent = current
                queue.push(current.left)
            }
            if(current.right){
                parent = current
                queue.push(current.right)
            }
            last = current
        }
        if(todelete){
            todelete.value = last.value
            if(parent.left === last){
                parent.left = null
            }else if(parent.right = last){
                parent.right = null
            }
        }
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
            
        }
    }
    preOrder(node = this.root){
        if(node){
            console.log(node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
            
        }
    }
    postOrder(node = this.root){
        if(node){
            this.preOrder(node.left)
            this.preOrder(node.right)
            console.log(node.value);
        }
    }
    bfs(){
        if(!this.root){
            return null
        }
        let queue = [this.root]
        while(queue.length>0){
            let current = queue.shift()
            console.log(current.value);
            if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
        }
    }
}

const tree = new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.delete(20)
tree.inOrder()



