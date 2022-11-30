function findProp(obj, str) {
    return (str in obj);
}

let obj = {
    'string': 'str1',
    2: 'str2'
}

let str = 'string';

console.log(findProp(obj, str));
