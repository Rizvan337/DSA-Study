function bubbleSort(arr){
    let n = arr.length
    let swapped
    for(let i=0;i<n;i++){
        let swapped = false
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(!swapped) break
    }
    return arr
}
const arr = [10,-3,7,2,6]
console.log(bubbleSort(arr))
//o(n) best case
//o(n^2) worst case
//space complexity:o(1)