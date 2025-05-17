// closest(target){
//     let current = this.root
//     let closest = current.value
//     while(current){
//     if(Math.abs(target-current.value)<Math.abs(target-closest)){
//         closest = current.value
//     }
//     if(target<current.value){
//         current = current.left
//     }else if(target>current.value){
//         current = current.right
//     }else{
//         break
//     }
//   }
//     return closest

// }




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
findClosest(target,node = this.root,closest = Infinity){
    if(!node) return closest
    if(Math.abs(target-closest)>Math.abs(target-node.value)){
        closest = node.value
    }
    if(target<node.value){
        return this.findClosest(target,node.left,closest)
    }else if(target>node.value){
        return this.findClosest(target,node.right,closest)
    }
    return closest
}
}

const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(6);
tree.insert(22);

console.log(tree.findClosest(13));