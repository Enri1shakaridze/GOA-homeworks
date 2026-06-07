
async function ge() {
    try{
        let res = await fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
        let data = await res.json()
        for(let i = 0; i < data.data.length; i++){
            let resdata = data.data;
            if(resdata[i].country[0] === 'G'){
                console.log(resdata[i].country)
            }
        }
    }
    catch(err) {
        console.log(err)
    }
}
ge()