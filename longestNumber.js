function longestNumber(arr){
    const results = [];
    for(let i=0; i<arr.length; i++){
        let longestNumber = arr[i][0];
        for(let j=1; j<arr[i].length; j++){
            if(arr[i][j] > longestNumber){
                longestNumber = arr[i][j];
            }
        }
        results[i] = longestNumber;
        // console.log(results);
    }
    return results;
    
}
longestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);