What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


getElementById("id"):
Eta diye sudhu ekta id diye element select kora jai.Always single element return kore.id unique howar kotha, tai ekdom specific ekta element pawa jai.

getElementsByClassName("className"):
Eta diye class name diye multiple element select kora jai.Eti ekta HTMLCollection return kore .



How do you create and insert a new element into the DOM?

let div = document.createElement("div");
Div.innerText = "Hello ami notun jinis";






What is Event Bubbling and how does it work?


Event Bubbling holo ekta process jekhane kono child element e kono event ,click trigger hole seta first oi element e kaj kore, tarpor step by step uporer parent element gulo keo sei event er signal pathai. Mane event ta nijer element theke suru hoye parent ,tar parent,paren er paren  pura document porjonto chole jay. Ei uporer dike uthar process ke bola hoy bubbling, 7-up er nich theke jevabe bubble upore uthe jai onekta temon.



What is Event Delegation in JavaScript? Why is it useful?

Event Delegation holo ekta technique jekhane amra parent element e ekta event listener bosai, ar oi parent er vitore joto child element thake, segulo jodi event trigger kore ,dhori  click, tahole oi parent er listener diyei event handle kora jay. 





What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()

Eta mainly use hoy default behavior ke stop korte.Jemon ekta <a> tag click korle normally link e chole jay, ar ekta <form> submit korle page reload hoy.Jodi preventDefault() use koro, tahole oi default kaj ta hobe na.page bar bar reload nile ei function use korle page reload newa bondho kore dei.


stopPropagation()

Eta use hoy event bubbling or event capturing ke stop korte.Normally kono child element e click korle event ta parent element gulo teo bubble hoy.Jodi stopPropagation() use koro, tahole event tar propagation uporer parent gulo te jabe na.