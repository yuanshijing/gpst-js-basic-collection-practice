'use strict';

module.exports = function countSameElements(collection) {
	var dic={};
    var result=[];
    for(let i of collection) {
        if(i.length>1){
			if(i[1]==='-'||i[1]===':'){
				var o=i[1];
				var c=i.split(o)[0];
				var cnt=Number(i.split(o)[1]);
			}else if(i[1]==='['){
			    c=i.split('[')[0];
			    cnt=Number(i.split('[')[1].split(']')[0]);
			}
		}else{
			c=i;
			cnt=1;
		}{
		    dic[c]=typeof dic [c]==='undefined'?cnt:dic[c]+cnt;
		}
	}for(let item in dic){
		result.push({name:item,summary:dic[item]})
	}
	return result;
}
