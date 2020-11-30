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

//test
console.log(first_non_repeating_letter('AsTreSaS'))