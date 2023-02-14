// checking sum zero
// input [-5, -4, -3, -2, 0, 2, 4, 6, 8]
// first output [-4, 4]

function getSumZero(array){
    for(let number of array){
        for(let j=1; j<array.length; j++){
            if(number + array[j] === 0)
            return [number, array[j]];
        }
    }
}
const result = getSumZero([-5, -3, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);
// time complexity will be O(n^2) i.e quadratic
