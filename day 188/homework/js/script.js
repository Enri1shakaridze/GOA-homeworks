let fs = require('fs/promises')
let result = []

async function main() {
    try{
        let response1 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=1');
        let response2 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=2');
        let response3 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=3');
        let response4 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=4');
        let response5 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=5');
        let response6 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=6');
        let response7 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=7');
        let response8 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=8');
        let response9 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=9');
        let response10 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=10');
        let response11 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=11');
        let response12 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=12');
        let response13 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=13');
        let response14 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=14');
        let response15 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=15');
        let response16 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=16');
        let response17 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=17');
        let response18 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=18');
        let response19 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=19');
        let response20 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=20');
        let response21 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3aa0feda46041b093e0ae52b65913ff6&page=21');
        let data1 = await response1.json()
        let data2 = await response2.json()
        let data3 = await response3.json()
        let data4 = await response4.json()
        let data5 = await response5.json()
        let data6 = await response6.json()
        let data7 = await response7.json()
        let data8 = await response8.json()
        let data9 = await response9.json()
        let data10 = await response10.json()
        let data11 = await response11.json()
        let data12 = await response12.json()
        let data13 = await response13.json()
        let data14 = await response14.json()
        let data15 = await response15.json()
        let data16 = await response16.json()
        let data17 = await response17.json()
        let data18 = await response18.json()
        let data19 = await response19.json()
        let data20 = await response20.json()
        let data21 = await response21.json()
        let resdata1 = data1.results
        let resdata2 = data2.results
        let resdata3 = data3.results
        let resdata4 = data4.results
        let resdata5 = data5.results
        let resdata6 = data6.results
        let resdata7 = data7.results
        let resdata8 = data8.results
        let resdata9 = data9.results
        let resdata10 = data10.results
        let resdata11 = data11.results
        let resdata12 = data12.results
        let resdata13 = data13.results
        let resdata14 = data14.results
        let resdata15 = data15.results
        let resdata16 = data16.results
        let resdata17 = data17.results
        let resdata18 = data18.results
        let resdata19 = data19.results
        let resdata20 = data20.results
        let resdata21 = data21.results
        let resdata = [...resdata1, ...resdata2, ...resdata3, ...resdata4, ...resdata5, ...resdata6, ...resdata7, ...resdata8, ...resdata9, ...resdata10, ...resdata11, ...resdata12, ...resdata13, ...resdata14, ...resdata15, ...resdata16, ...resdata17, ...resdata18, ...resdata19, ...resdata20, ...resdata21]
        for(let el of resdata){
            let a = el.id
            let awaitweb = `https://api.themoviedb.org/3/movie/${a}/videos?api_key=3aa0feda46041b093e0ae52b65913ff6`
            let z = await fetch(awaitweb)
            let resawait = await z.json()
            let credits = await fetch(`https://api.themoviedb.org/3/movie/${a}/credits?api_key=3aa0feda46041b093e0ae52b65913ff6`);
            let creditsData = await credits.json();
            if(resawait.results.length !== 0){
                let resres = resawait.results[0]
                let video = resawait.results[0]
                let link = `https://www.youtube.com/embed/${video.key}`
                let result2 = resawait.results[0]
                let date2 = result2.published_at
                let resdate = ''
                let ganres = []
                let elganres = el.genre_ids
                for(let i = 0; i < elganres.length; i++){
                    if (elganres[i] === 28) {
                        ganres.push("Action")
                    }
                    else if (elganres[i] === 12) {
                        ganres.push("Adventure")
                    }
                    else if (elganres[i] === 16) {
                        ganres.push("Animation")
                    }
                    else if (elganres[i] === 35) {
                        ganres.push("Comedy")
                    }
                    else if (elganres[i] === 80) {
                        ganres.push("Crime")
                    }
                    else if (elganres[i] === 99) {
                        ganres.push("Documentary")
                    }
                    else if (elganres[i] === 18) {
                        ganres.push("Drama")
                    }
                    else if (elganres[i] === 10751) {
                        ganres.push("Family")
                    }
                    else if (elganres[i] === 14) {
                        ganres.push("Fantasy")
                    }
                    else if (elganres[i] === 36) {
                        ganres.push("History")
                    }
                    else if (elganres[i] === 27) {
                        ganres.push("Horror")
                    }
                    else if (elganres[i] === 10402) {
                        ganres.push("Music")
                    }
                    else if (elganres[i] === 9648) {
                        ganres.push("Mystery")
                    }
                    else if (elganres[i] === 10749) {
                        ganres.push("Romance")
                    }
                    else if (elganres[i] === 878) {
                        ganres.push("Science Fiction")
                    }
                    else if (elganres[i] === 10770) {
                        ganres.push("TV Movie")
                    }
                    else if (elganres[i] === 53) {
                        ganres.push("Thriller")
                    }
                    else if (elganres[i] === 10752) {
                        ganres.push("War")
                    }
                    else if (elganres[i] === 37) {
                        ganres.push("Western")
                    }
                }
                for(let i = 0; i < date2.length; i++){
                    if(i >= 7){
                        break;
                    }else{
                        resdate += date2[i]
                    }
                }
                result.push({
                    name: result2.name,
                    ganres: ganres,
                    country: result2.iso_3166_1,
                    lenguage: result2.iso_639_1,
                    date: resdate,
                    type: result2.type,
                    size: result2.size,
                    video: link,
                    title: el.title,
                    adult: el.adult,
                    imagesmoll: `https://image.tmdb.org/t/p/original${el.backdrop_path}`,
                    imagebig: `https://image.tmdb.org/t/p/w500${el.poster_path}`,
                    vote_average: el.vote_average,
                    vote_count: el.vote_count,
                    popularity: el.popularity,
                    overview: el.overview,
                    authorName: creditsData.crew[0].name
                    })
                console.log(el)
                await fs.writeFile('data.json', JSON.stringify(result))
                
            }
        
        }
    }catch{
        console.log('Error!')
    }
}
main()
