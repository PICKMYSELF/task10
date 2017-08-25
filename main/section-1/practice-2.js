'use strict';
/*选出A集合中与B集合中子数组的元素相同的元素*/
function includes(collection, ch) {
/*    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }
    return false;*/
let result=false;
collection.forEach(item=>{if(item==ch)result=true });
return result;
}

module.exports = function collectSameElements(collectionA, collectionB) {
/*    let result = [];
    for (let item of collectionA) {
        if (includes(collectionB[0], item)) {
            result.push(item);
        }
    }
    return result;*/
return collectionA.filter(items=>includes(collectionB[0],items));
}
