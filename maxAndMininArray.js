function getMinMax(arr, n){
    minmax = new Array()
    var min;
    var max;
    if(n==1){
        arr[0] = minmax.min;
        arr[0] = minmax.max;
    }

    if(arr[0]>arr[1]){
        minmax.max = arr[0];
        minmax.min = arr[1];
    }

    else{
        minmax.max = arr[1];
        minmax.min = arr[0]
    }

    for(let i=2; i<n; i++){
        if(arr[i]>minmax.max){
            minmax.max = arr[i];
        }
        else if(arr[i]<minmax.min){
            minmax.min = arr[i]
        }
    }

    return minmax;
}




// driver code
var arr = [3,4,6,78,1,0,5,8,8888];
var arr_size = 9;
minmax = getMinMax(arr, arr_size);
console.log("Minimum number is", minmax.min);
console.log("Maximum number is", minmax.max);