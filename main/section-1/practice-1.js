'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result=[];
    for(var i in collectionA){
        if(collectionB.indexOf(collectionA[i])!=-1){
            result.push(collectionA[i]);
        }
    }
    return result;
}
