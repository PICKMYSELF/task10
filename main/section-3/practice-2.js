'use strict';

function includes(collection, ch) {
  return collection.includes(ch);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    /*let result = [];
    for (let item of collectionA) {
        let key = item.key;
        let count = item.count;
        if (includes(objectB.value, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;*/
    return collectionA.map(item=>{if(includes(objectB.value,item.key)){item.count-=parseInt(item.count/3);return item;}else return item});
}
