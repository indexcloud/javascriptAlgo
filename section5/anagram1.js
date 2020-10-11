function validAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for (let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }
    console.log(obj1);
    for (let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }
    console.log(obj2);
    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        } 
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
