function insertionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let min = i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min!=i){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}
const arr = [1,7,3,4,2,9]
console.log(insertionSort(arr));

//o(n^2) every case
//space complexity:o(1)