function getProp(obj) {
    for (let elem in obj) {
        if (obj.hasOwnProperty(elem)) {
            console.log(elem, obj[elem]);
        }
    }
}
let obj = {
    1: 'str1',
    2: 'str2'
}

getProp(obj)
