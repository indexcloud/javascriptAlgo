function searchStr(longStr, subStr) {
    var count = 0;
    for (var i = 0; i < longStr.length; i++) {  
        for (var j = 0; j < subStr.length; j++) {
            if (subStr[j] !== longStr[i + j]) {
                break;   
            }
            if (j === subStr.length - 1) {
                count++;
            }
        }
    }
    return count;
}

console.log(searchStr("wowomgomgzogomg", "omg"));
                         