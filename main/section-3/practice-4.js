'use strict';

function find(collection, ch) {
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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach(function (item) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
    });
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
