//write  a function generateHash to accomplish this task
//op:- #MyNameIsRohitVishakarma

const generateHash = (str)=>{
    if(str.length >280 || str.trim().length === 0){
        return false;
    }

    str = str.split(" ");
    str = str.map((currElem)=>
   // currElem.replace(currElem[0],currElem[0].toUpperCase())  1st method
   currElem.charAt(0).toUpperCase() + currElem.slice(1)
);

    str = `#${str.join("")}`;
    return str;
}

console.log(generateHash("my name is rohit vishwakarma"))