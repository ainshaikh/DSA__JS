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


// OPTIMIZED SOLUTION 
function findSumPair (array){
    let left = 0;
    let right = array.length-1;
    
    while(left < right){
        sum = (array[left] + array[right]);
        if(sum === 0){
            return [array[left], array[right]];
        }
        else if(sum > 0){
            right --;
        }
        else{
            left ++;
        }
    }
}
const results = findSumPair([2,3,1,-5,-2,6,5]);
console.log(results);

// time complexity is o(n) linear








// function getSumZero(array){
//     for(let number of array){
//         for(let j=1; j<array.length;j++){
//             if(number + array[j]===0){
//                 return [number, array[j]]
//             }
//         }
//     }
// }
// const resuult = getSumZero([2,3,1,-2,-5,6,5]);
// console.log(resuult);

function getSumZeroIndex(array){
    let left = 0;
    let right = array.length-1;

    while(left < right){
        sum = (array[left] + array[right]);
        if(sum === 0){
            return [array[left], array[right]];
        }
        else if(sum > 0){
            right --;           
        }
        else{
            left ++;
        }
    }
}
const ai = getSumZeroIndex([2,3,1,-2,-5,6,5])
console.log(ai);