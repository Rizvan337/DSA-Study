let arr = [2,5,3,2,5,4,6,7,8,7,8]
let seen = new Set()
let res = []
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        if(!seen.has(arr[i])){
        seen.add(arr[i])
        res.push(arr[i])
        }
    }else{
        res.push(arr[i])
    }
}
console.log(res);
