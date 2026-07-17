import data from "./data.json" with { type: "json" }

const search = document.getElementById('search')



search.addEventListener('input', function(){
    let value = search.value.toLowerCase()
    if(value.length >= 3){
        data.forEach(obj => {
            if(obj.name.toLowerCase().includes(value) || obj.title.toLowerCase().includes(value)){
                console.log(obj)
            }
        })
    }
})