const SortArray = function(arry){
    this._originalArray = arry;
}

SortArray.prototype.getSortedArray = function(){
     let sortedArray = this._originalArray.sort();
     return sortedArray;   
}

let arr = [5,4,2,7,1,8,8,0];
const sortarr = new SortArray(arr);
console.log(sortarr.getSortedArray());

const sortObjectArray = function(objectArray){
    SortArray.call(this,objectArray);
}
sortObjectArray.prototype = Object.create(SortArray.prototype);

sortObjectArray.prototype.getSortedArray = function(key){
    let sortedArray = this._originalArray.sort((a,b) => a[key]>b[key]?1:-1);
    return sortedArray;
}

const objectArray = [
    {"name":"Harry","age":22},
    {"name":"John","age":21},
    {"name":"Peter","age":24},
    {"name":"Steve","age":20}
];

const sortObjArr = new sortObjectArray(objectArray);
console.log("Sorting by age : ");
console.log(sortObjArr.getSortedArray("age"));
console.log("Sorting by name : ");
console.log(sortObjArr.getSortedArray("name"));
