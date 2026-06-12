// 1) შექმენით ფუნქცია სახელად getUsers რომლის დავალლებაც იქნება, რომ გააგზავნოს მოთხოვნა ამ API - ზე: https://fakestoreapi.com/users

// თქვენ უნდა გამოიყენოთ try catch ბლოკი იმისთვის, რომ უფრო ზუსტად მართოთ თქვენი მოთხოვნის შედეგი, წარმატების შემთხვევაში გამოიტანეთ ტერმინალში ობიექტი შემდეგი ინფორმაციით: status, message და data

// catch ბლოკში კი ჩაწერეთ ერორის ობიექტი შემდეგი კუთვნილებებით: status და message
async function getUsers() {
    try{
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json()
        console.log({
            status: '200',
            message:'successfully',
            data
        })
    }
    catch (err){
        console.log({
            status: '404',
            message: 'not found'
        })
    }
}
getUsers()