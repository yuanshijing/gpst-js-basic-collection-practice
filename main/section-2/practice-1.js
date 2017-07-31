'use strict';

module.exports = function countSameElements(collection) {
	var result=[];
	var dic={};
	for(let i of collection){
		dic[i]=typeof dic[i]==='undefined'?1:dic[i]+1;
	}
	for(let item in dic){
		result.push({key:item,count:dic[item]});
	}
	return result;
};

