sameTree(tree1,tree2){
    if(!tree1 && !tree2){
        return true
    }
    if(!tree1 || !tree2){
        return false
    }
    return tree1.value === tree2.value && sameTree(tree1.left,tree2.left) && sameTree(tree1.right,tree2.right)
}