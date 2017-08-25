'use strict';
//选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素
function includes(collection, ch) {
    /*for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;*/
/*    let result=false;
    collection.forEach(element=>{if(element===ch)  { result=true;  }})
    return result;*/
return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, objectB) {
    /*let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item.key)) {
            result.push(item.key);
        }
    }
    return result;*/
   return collectionA.map(value=>value.key).filter(item=>includes(objectB.value,item));
}
