let arry = [
    { 
      "channel" : "A",
      "name" : "shoe"
    },
    { 
      "channel" : "A",
      "name" : "electronics"
    },
    {
      "channel" : "B",
      "name" : "apparel"
    },
    {
      "channel" : "C",
      "name" : "electronics"
    }
 ]

 const groupObjectsBy = function(arry,key){
     let ans_map = new Map();
     for(let i=0;i<arry.length;i++){
       let objKey = arry[i][key];
       if(ans_map.has(objKey)){
            ans_map.get(objKey).push(arry[i]);
       }
       else{
        let new_list = [];
        new_list.push(arry[i]);
        ans_map.set(arry[i][key],new_list);
       }
     }
     return ans_map;
 }

 let ans_map = groupObjectsBy(arry,"channel")
 console.log(ans_map);