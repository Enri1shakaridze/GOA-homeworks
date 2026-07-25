const toDoList = (  // შექმენით ცვლადი რასაც გავუტოლეთ დალაგებული სია
    <ol>
        <li>Learn React</li>
        <li>Become a Developer</li>
    </ol>
);

const container = document.getElementById('app'); // წამოვიღეთ getElementById ის დახმარებით app ი
const root = createRoot(container); // შევქმენით Root ი და ჩავწერეთ ჩვენ მიერ წამოღბული app 
root.render(toDoList); // დავარენდერეთ toDolist ი render() ფუნქციის დახმარებით და გამოვიტანეთ საიტზე


// დეტრალურად ახსენით რა ხდება კოდის თითოეულ ხაზზე და მოცემული თითოეული ფუნქცია რას აკეთებს. (კომენტარის სახით)