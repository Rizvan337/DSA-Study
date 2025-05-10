function insertionSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        let temp = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
    return arr
}
const arr = [ 3, 2, 3, 4, 7, 9 ]
console.log((insertionSort(arr)));

// Best Case (Already Sorted): O(n)
// Average/Worst Case: O(n²)
// Space Complexity: O(1)