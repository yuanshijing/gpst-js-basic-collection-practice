'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    for(let i in collectionA){
        if(objectB.value.indexOf(collectionA[i].key)!==-1){
        collectionA[i].count-=Math.floor(collectionA[i].count/3);
        }
    }
    return collectionA;
};
