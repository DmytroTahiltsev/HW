function filter_list(arr){
    return arr.filter(item=>{
        return typeof item === 'number'
    })
}

//test
console.log(filter_list([1,2,'hh',3,'sss', false]))