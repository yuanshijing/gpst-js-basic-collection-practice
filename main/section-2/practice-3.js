'use strict';

module.exports = function countSameElements(collection) {
	var dic={};
	var ans=[];
	for(let i of collection){
		if(i.length>1){
			if(i[1]=='-'||i[1]==':'){
				var o=i[1];
				var c=i.split(o)[0];
				var cnt=i.split(o)[1]-'0';
			}else if(i[1]=='['){
				var c=i.split('[')[0];
				var cnt=i.split('[')[1].split(']')[0]-'0';
			}
		}else{
			var c=i;
			var cnt=1;
		}
		if(typeof(dic[c])=='undefined'){
			dic[c]=cnt;
		}else{
			dic[c]+=cnt;
		}
	}
	for(let item in dic){
		ans.push({name:item,summary:dic[item]})
	}
	return ans;
}
