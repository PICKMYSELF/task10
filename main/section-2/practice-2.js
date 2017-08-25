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
    /*for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }*/
    collection.forEach(item=>{
            let obj = find(result, item);
            if (obj) {
                obj.count++;
            } else {
                result.push({key: item, count: 1});
            }
    });
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
    collection.forEach(item=> {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
        }
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);//有-的在结尾加上字符d5次，循环检查collection时会忽略d-5
    return summarize(expandedArray);
}
