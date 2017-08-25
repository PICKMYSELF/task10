'use strict';

function find(collection, ch) {
   /* for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;*/
    if(collection.findIndex(item=>item.key===ch)>=0)
        return collection.find(item=>item.key===ch);
    return null;
}

function summarize(collection) {
    let result = [];
   collection.forEach(item=>{
       let obj = find(result, item)
       if (obj) {
           obj.count++;
       } else {
           result.push({key: item, count: 1});
       }
   }) ;
    return result;
}

function includes(collection, ch) {
   return collection.includes(ch);
}

function discount(collection, promotionItems) {
   /* let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;*/
    return collection.map(item=>{if(includes(promotionItems,item.key)){item.count-=parseInt(item.count/3);return item;}else return item});
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
