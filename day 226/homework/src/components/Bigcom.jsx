import { useRef } from "react"


export function Bigcomp(){
    const CountRef = useRef(null)

    function heandler(){
        CountRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="rt">
            <header>
                <div className="headermain">
                    <div className="img">
                        <img width='200px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvn0D8E_k7-K9QHVb5PF3jPHWHmXy2rGul9EbHsLb5fg&s=10' alt="" />
                    </div>
                    <div className="navigation">
                        <nav>
                            <li onClick={heandler}>მთავარი</li>
                            <li>ჩვენს შესახებ</li>
                            <li>მანქანები</li>
                            <li>კონტაქტი</li>
                            <li>რეგისტრაცია</li>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <article>
                        <div className="firstinfo">
                            <div className="flexinginfo">
                                <div className="flex1">
                                    <h1>თქვენი საიმედო <br /> პარტნიორი <br /> FastLine Auto</h1>
                                    <p>ჩვენ ვყიდულობთ და ჩამოგვყავს <br /> ავტომანქანები ამერიკიდან შუამავლის <br /> გარეშე</p>
                                    <button>მანქნის შერჩევა</button>
                                </div>
                                <div className="flex2">
                                    <img width='600px' src="https://2mcars.ge/wp-content/uploads/2022/02/group_4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="art1">
                        <div className="abouts">
                            <div className="flex2ing">
                                <div className="flex1ing1">
                                    <h1 id="About">About Us</h1>
                                    <img width='500px' src="https://irp.cdn-website.com/eb90f14d/dms3rep/multi/JB+Team+1_900px_Comp.jpg" alt="" />
                                </div>
                                <div className="flex2ing2">
                                    <h1 ref={CountRef}>FastLine არის</h1>
                                    <p>Fastline არის გამოცდილი პროფესიონალების გუნდი, რომელსაც ავტომობილების სფეროში მრავალწლიანი გამოცდილება გააჩნია. წლების განმავლობაში ჩვენ წარმატებით განვახორციელეთ არაერთი პროექტი, მათ შორის განსაკუთრებული ადგილი უკავია აშშ-დან ავტომობილების იმპორტის მიმართულებას. ჩვენი ხედვა და მუშაობის სტილი განსხვავებულია — მუდმივად ვნერგავთ ახალ მიდგომებსა და თანამედროვე გადაწყვეტილებებს, რაც გვაძლევს შესაძლებლობას თითოეულ კლიენტს შევთავაზოთ უფრო სწრაფი, უსაფრთხო და კომფორტული მომსახურება. მსოფლიოს სხვადასხვა ქვეყანაში სანდო პარტნიორული ქსელი, ავტომობილის შესახებ სრული და დეტალური ინფორმაციის მიწოდება, პროცესის სრული გამჭვირვალობა და კლიენტზე ორიენტირებული მომსახურება. სწორედ ეს არის Fastline-ის მთავარი უპირატესობა.</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
            <footer>
                <div className="finalboss">
                    <div className="final1">
                        <h1>Location</h1>
                        <ol>
                            <li>21 P. Wavwavadze street, Batumi</li>
                            <li>21 P. Wavwavadze street, Batumi</li>
                            <li>21 P. Wavwavadze street, Batumi</li>
                            <li>21 P. Wavwavadze street, Batumi</li>
                        </ol>
                    </div>
                    <div className="final2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf51u6nqqboe1JGN0Yd43KASyuo4FLkvgM6JBHWBpvt8OPCdz6" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}