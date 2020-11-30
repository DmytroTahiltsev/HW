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

//test
console.log(names_sorting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))