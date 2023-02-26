let data = [2,3,45,6,75,5,];
let data2 = [23,33,3,33,34,3,3,3,9];
let data3 = [];

for(let i=0; i<data.length; i++){
    data3[i] = data[i];
    console.log(data3);
}
for(let i=0; i<data2.length; i++){
    data3[data.length+i] = data2[i];
    console.log(data3);
}


// reverse and merging with rest  operator
let dummy = [23,222,2333,454,55555];
dummy.reverse();
// console.log(dummy);
let dumm2 = [22,33,22,222,2,22222,22];
// let dummy3 = [...dummy, ...dumm2];
// console.log(dummy3);

dummy = [...dummy, ...dumm2]
console.log(dummy);