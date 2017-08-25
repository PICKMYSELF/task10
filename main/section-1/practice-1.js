'use strict';
//重构代码，用 map, reduce, find, filter, forEach, includes 等方法重构代码，消除所有的 for 语句
function includes(collection, ch) {
  /*  for (let item of collection) {
        if (item === ch) {
            return true;
        }

    }*/
    /*let result=false;
     collection.forEach(element=>{if(element===ch)  { result=true;  }})
    return result;*/
    return collection.includes(ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    /*for (let item of collectionA) {
        if (includes(collectionB, item)) {
            result.push(item);
        }
    }*/
    return  collectionA.filter(item=>includes(collectionB,item));
}


