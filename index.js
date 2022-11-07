// Code your solution here
function findMatching(arr, string){
   return arr.filter((name) => name.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(arr, string){
    return arr.filter((letter) => letter[0] === string[0])
}

function matchName(arr, string){
    return arr.filter((item) => item.name === string)
}


//