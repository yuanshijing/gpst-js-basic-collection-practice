'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var C=[];
	var dic={};
	for(let i of collectionA){
		dic[i]=typeof dic[i]==='undefined'?1:dic[i]+1;
	}
	for(let item in dic){
        if(objectB.value.indexOf(item)!==-1){
            dic[item]-=Math.floor(dic[item]/3);
        }
    };
    for(let j in dic){
        C.push({key:j,count:dic[j]});
    }
    return C;
};


