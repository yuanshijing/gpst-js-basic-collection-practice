'use strict';

module.exports = function countSameElements(collection) {
	var dic={};
	var ans=[];
	for(let i of collection){
		var c,cnt;
		var temp=i.split('-');
		c=temp[0];
		cnt=temp.length>1?Number(temp[1]):1
		dic[c]=typeof dic[c]==='undefined'?cnt:dic[c]+cnt;
	}
	for(let item in dic){
		ans.push({key:item,count:dic[item]})
	}
	return ans;
}
