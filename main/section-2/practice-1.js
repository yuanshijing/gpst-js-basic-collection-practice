'use strict';

module.exports = function countSameElements(collection) {
	var dic={};
	var ans=[];
	for(let i of collection){
		dic[i]=typeof (dic[i])=='undefined'?1:dic[i]+1;
	}
	for(let item in dic){
		ans.push({key:item,count:dic[item]})
	}
	return ans;
}

