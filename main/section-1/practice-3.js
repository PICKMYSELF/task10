'use strict';
//选出A集合中跟B对象中value属性中的元素相同的元素
function includes(collection, ch) {
    /*for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;*/
    let result=false;
    collection.forEach(element=>{if(element===ch)  { result=true;  }})
    return result;
}

module.exports = function collectSameElements(collectionA, objectB) {
   /* let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item)) {
            result.push(item);
        }
    }
    return result;*/
   return collectionA.filter(item=>includes(objectB.value,item));
}
