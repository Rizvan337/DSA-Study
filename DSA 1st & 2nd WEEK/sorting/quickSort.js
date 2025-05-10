function quickSort(arr){
    let pivot = arr[0]
    let n = arr.length
    let left = []
    let right = []
    if(n<=1) return arr
    for(let i=1;i<n;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
const arr = [7,6,3,9,6,10,2,33]
console.log(quickSort(arr));
