class BinarySearch {
     // Returns index of x if it is present in arr[l.. r], else return -1
    binarySearch(arr, l, r, x) {
    
        while(l<=r){
            let mid = Math.floor(l + (r-l)/2); // to prevent integer overflow
            if (arr[mid]===x){
                return mid;
            }else if(x<arr[mid]){
                r = mid-1
            }else{
                l = mid +1
            }
        }
        return -1;
}
}


// Driver method to test above
const ob = new BinarySearch();
const arr = [2, 3, 4, 10, 40];
const x = 10;
const n = arr.length;
const result = ob.binarySearch(arr, 0, n - 1, x);
if (result === -1){
    console.log("Element not present");
}
else {
    console.log("Element found at index " + result);
}
    
