'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
	var C=[];
    var dic={};
	for(let i of collectionA){
		var c,cnt;
		var temp=i.split('-');
		c=temp[0];
		cnt=temp.length>1?Number(temp[1]):1
		dic[c]=typeof dic[c]==='undefined'?cnt:dic[c]+cnt;
	}
	for(let item in dic){
        if(objectB.value.indexOf(item)!==-1){
            dic[item]-=Math.floor(dic[item]/3);
        }
		C.push({key:item,count:dic[item]});
	}
	return C;
};