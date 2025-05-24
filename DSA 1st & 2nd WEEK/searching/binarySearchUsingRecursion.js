function binarySearchUsingRecursion(arr,target,left,right){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===target){
        return mid
    }else if(arr[mid]>target){
        return binarySearchUsingRecursion(arr,target,left,mid-1)
    }else{
        return binarySearchUsingRecursion(arr,target,mid+1,right)
    }
}
const arr = [1,2,3,4,5,6]
console.log(binarySearchUsingRecursion(arr,4,0,arr.length-1));

