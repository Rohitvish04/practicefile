// Write  a function called countChar that takes two parameters: a String and a Character to count . 
// The function should return the no.of times the specified Charact6er apppear in the String
 

const countChar= (word, char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();



totalCount = word.split("").reduce((accum,currChar)=>{
    if(currChar===char){
        accum++;
    }
    return accum;},0);
    return totalCount;
};


console.log(countChar("MissIssippi","I"))