//1. function fib(n){
//     if(n==0) return 0
//     if(n==1) return 1
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(6));


//2. recursive function to print Fibonacci series 
function fib(n){
    if(n===0) return 0
    if(n===1) return 1
    return fib(n-1)+fib(n-2)
}
function printFib(n){
    for(let i=0;i<=n;i++){
        console.log(fib(i));
        
    }
}
printFib(5)