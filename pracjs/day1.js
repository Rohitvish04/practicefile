//Longest Word in a String

const findLongestWord = (str)=>{
    if(str.trim().length == 0){
        return false;
    }

    words = str.split(" ");
    // words = words.sort((a,b)=>b.length - a.length);
    // console.log(words);
    // return words[0];

    return words.reduce((accum, currWord)=>(currWord.length > accum.length? currWord:accum ," "));
};

console.log(findLongestWord("Watch Thala Technical Javascript course on YouTube"))
