function DogOrCat(){
    let test;
    let bool = Math.random() > 0.5;
    if(bool){
        test = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KMBj_N8wN1pFHwOvFKw_0znVCt0F0YoaL9hShsC7QQ&s=10" alt="" />
    }else{
        test = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSms_ozSJ73CYy_WImTOyt_IGGR4ZopM7QUb_C5Ugyc2Q&s=10" alt="" />
    }
    return test
}
export {DogOrCat}