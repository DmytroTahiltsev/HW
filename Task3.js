function digital_root(n){
    let sum=0, new_n=n
    if(is_one_digit(n)){
        return add_digits(new_n)
    }
    else{
        sum+=add_digits(new_n)
        new_n=sum
        return  digital_root(new_n)
    }


    function add_digits(n){
        return n.toString(10).split('').map(Number).reduce(function(a,b) { return a + b; },0)
    }
    function is_one_digit(n){
        return n.toString(10).length===1
    }
}

//test
console.log(digital_root(493193))