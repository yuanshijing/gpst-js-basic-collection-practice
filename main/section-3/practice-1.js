'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(let i of collectionA){
        if(objectB.value.indexOf(i.key)!=-1){
            i.count--;
        }
    };
    return collectionA;
};