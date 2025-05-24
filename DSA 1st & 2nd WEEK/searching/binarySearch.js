function binarySearch(nums,target){
    let start = 0
    let end = nums.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid]===target){
            return mid
        }else if(nums[mid]<target){
            start = mid+1
        }else{
            end = mid-1
        } 
    }
    return -1
}
let nums =  [1,2,3,4,5,6]
console.log(binarySearch(nums,4))