'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    var result=[];
    for(var i in collectionA){
        if(objectB.value.indexOf(collectionA[i].key)!=-1){
            result.push(collectionA[i].key);
        }
    }
    return result;
}
