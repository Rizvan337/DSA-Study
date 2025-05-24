function fact(n){
    if(n===0) return 1
    return n*fact(n-1)
}
function print(n){
    for(let i=0;i<=n;i++){
        console.log(fact(i));
        
    }
}
// console.log(fact(4));
print(4)
