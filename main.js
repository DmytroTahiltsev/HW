function filter_list(arr){
    return arr.filter(item=>{
        return typeof item === 'number'
    })
}
function first_non_repeating_letter(str){
    for(let i=0; i<str.length; i++){
        if(!is_Repeat(str,i)){
            return str[i]
        }
    }
    return ''

    function is_Repeat(str, pos) {
        return  str.includes(str[pos].toUpperCase(), pos+1) || str.includes(str[pos].toLowerCase(), pos+1)
    }
}
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
function names_sorting(s){
    let output=''
    s=s.toUpperCase()
    let persons=s.split(';')
    for(let i in persons){
        let name, surname
        [name,surname]=persons[i].split(':')
        persons[i]=new Object()
        persons[i].name=name
        persons[i].surname=surname
    }
    persons.sort((a, b)=>{
        if(a.surname+a.name<b.surname+b.name){
            return -1
        }
        else if(a.surname+a.name===b.surname+b.name){
            return 0
        }
        else{
            return 1
        }

    })
    for(elem of persons){
        output+=`(${elem.surname}, ${elem.name})`
    }
    return output

}
console.log(filter_list([1,2,'hh',3,'sss', false]))
console.log(first_non_repeating_letter('AsTreSaS'))

console.log(digital_root(493193))
console.log(target_sum_pairs_counter([1,3,6,2,2,0,4,5],5))

console.log(names_sorting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
