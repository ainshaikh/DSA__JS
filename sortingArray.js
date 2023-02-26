function kthElement(arr, N, K){
    arr.sort((a,b) => a-b);
    return arr[k-1];
}

let arr = [12,33,4,53,22,1,55];
let N = arr.length, k=2;
console.log(kthElement(arr, N, K));
