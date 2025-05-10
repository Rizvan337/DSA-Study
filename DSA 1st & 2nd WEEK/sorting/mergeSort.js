function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let sort = []
    while(left.length && right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}
const arr = [4,2,3,7,6,8,9,2,6,4]
console.log(mergeSort(arr));
