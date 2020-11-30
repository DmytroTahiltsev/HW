function target_sum_pairs_counter(arr, target){
    let count=0
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            if(arr[i]+arr[j]===target){
                count++
            }
        }
    }
    return count
}

//test
console.log(target_sum_pairs_counter([1,3,6,2,2,0,4,5],5))