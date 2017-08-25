'use strict';
//选出A集合中元素的key属性跟B对象中value属性中的元素相同的元素,把他们的count-1，输出减过之后的新A集合
function includes(collection, ch) {
    return collection.includes(ch);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    /*let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count--;
        }
        result.push({key, count});
    }
    return result;*/
    return collectionA.map(item=>{if(includes(objectB.value,item.key)){item.count--;return item;}else return item});
}

