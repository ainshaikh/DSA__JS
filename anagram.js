function isAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    let counter = {};
    for(let letter of string1){
        counter[letter] = counter[letter] || 0 +1;
        console.log(counter[letter]);

    }

    for(let items of string2){
        if(!counter[items]){
            console.log("for third");
        }   
        counter[items]-=1;
    }

    return true;

}
const check = isAnagram("hello", "lleho");
console.log(check);