'use strict';
//把A集合中相同的元素统计出数量
function found(collection, ch) {
    /*for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;*/
    if(collection.findIndex(item=>item.key===ch)>=0)
    return collection.find(item=>item.key===ch);
    return null;
}

module.exports = function countSameElements(collection) {
    /*let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;*/
   /*return collection.reduce(function (arr,ch) {
       let obj = found(arr, ch)
       if (obj) {
           obj.count++;
       } else {
           arr.push({key: ch, count: 1});
       }
        
    },[]);*/
    let result = [];
    collection.forEach(item=>{
        let obj = found(result, item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
});
    return result;
}


