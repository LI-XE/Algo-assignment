// Recursive Binary Search
function recursiveBinarySearch(arr, val, start = 0, end = arr.length - 1){

    if(start > end){
        return false;
    }
    if(arr[(end - start) / 2] == val){
        return true;
    }
    else if(arr[(end - start) / 2] > val){
        return rBinarySearch(arr, val, ((end - start) / 2), end);
    }
    else if(arr[(end - start) / 2] < val){
        return rBinarySearch(arr, val, start, (end - start) / 2);
    }
    else {
        return false;
    }
}
console.log(recursiveBinarySearch([1,3,5,6],4))
console.log(recursiveBinarySearch([4,5,6,8,12],5))
