function findLongestWordLength(str) {
    // return str.length;
    let words = str.split(' ');
    let max = 0;
    for(let i=0; i<words.length; i++){
        if(words[i].length > max){
            max = words[i].length;
        }
    }
    return max; 
  }
  
  console.log(findLongestWordLength());
  findLongestWordLength("The quick brown fox jumped over the lazy dog");