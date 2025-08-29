
const callHistory=[];


const hearts=document.getElementsByClassName("heart")
for(const everyHeart of hearts){
everyHeart.addEventListener(('click'),function(){
    let countHeart = parseInt(document.getElementById("count-heart").innerText);
    countHeart++;
    document.getElementById("count-heart").innerText = countHeart;
 
})

}



const calls=document.getElementsByClassName("call")
for(const everycall of calls){
everycall.addEventListener(('click'),function(){
    let countcall = parseInt(document.getElementById("count-call").innerText);
    countcall++;
    document.getElementById("count-call").innerText = countcall;
    
 
})

}





















document.getElementById("b163").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME: Bangladesh Railway \n Helpline NUMBER:163 ")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Bangladesh Railway",
    date: new Date().toLocaleTimeString(),
    contact: "163"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})

document.getElementById("b16445").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME: Brac Helpline \n Helpline NUMBER:16445 ")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Brac Helpline",
    date: new Date().toLocaleTimeString(),
    contact: "16445"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})

document.getElementById("e16216").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Electricity Helpline \n Helpline NUMBER:16216")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Electricity Helpline",
    date: new Date().toLocaleTimeString(),
    contact: "16216"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})



document.getElementById("a106").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Anti-Corruption Helpline \n Helpline NUMBER:106")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Anti-Corruption Helpline",
    date: new Date().toLocaleTimeString(),
    contact: "106"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})

document.getElementById("w109").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Women & Child Helpline \n Helpline NUMBER:109")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Women & Child Helpline",
    date: new Date().toLocaleTimeString(),
    contact: "109"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})

document.getElementById("a1994-999999").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Ambulance Service\n Helpline NUMBER:1994-999999")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Ambulance Service",
    date: new Date().toLocaleTimeString(),
    contact: "1994-999999"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})
document.getElementById("f999").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Fire Service Number\n Helpline NUMBER:999")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Fire Service Number",
    date: new Date().toLocaleTimeString(),
    contact: "999"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})


document.getElementById("p999").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Police Helpline Number\n Helpline NUMBER:999")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"Police Helpline Number",
    date: new Date().toLocaleTimeString(),
    contact: "999"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})

document.getElementById("n999").addEventListener(('click'),function(){
    let coins = parseInt(document.getElementById("coin").innerText);
    if(coins>=20){
    alert("SERVICE-NAME:Police Helpline Number\n Helpline NUMBER:999")
    }
   
   
   if(coins<20){
    alert("takka nai mamma")
    return;
   }
    coins=coins-20;
    document.getElementById("coin").innerText=coins;



    const data={
    name:"National Emergency Number",
    date: new Date().toLocaleTimeString(),
    contact: "999"      
}
callHistory.push(data);
const historycontainer =document.getElementById("history-container")
console.log(callHistory)
historycontainer.innerHTML="";
for(const data of callHistory ){
    const div =document.createElement("div");
    div.innerHTML=` <div class="flex justify-between items-center bg-[#FAFAFA] p-[16px] rounded-[8px] mt-[16px]">
                 <div>
                  <h1  class="text-[18px] font-bold ">${data.name}</h1>
                  <p class="text-[18px] font-normal">${data.contact}</p>
                 </div>
                 <div class="text-[18px] font-normal">${data.date}</div>

               </div>`;
               historycontainer.appendChild(div);
}


    
})





    










document.getElementById("nationalemergency-btn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("nationalemergency").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("nationalemergency").innerText)
    })
})


document.getElementById("Policebtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Police").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Police").innerText)
    })
})

document.getElementById("Firebtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Fire").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Fire").innerText)
    })
})


document.getElementById("Ambulancebtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Ambulance").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Ambulance").innerText)
    })
})

document.getElementById("Womenbtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Women").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Women").innerText)
    })
})


document.getElementById("Antibtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Anti").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Anti").innerText)
    })
})



document.getElementById("Electricitybtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Electricity").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Electricity").innerText)
    })
})

document.getElementById("Bracbtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Brac").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Brac").innerText)
    })
})

document.getElementById("Railwaybtn").addEventListener(('click'),function(){


    navigator.clipboard.writeText(document.getElementById("Railway").innerText).then(function(){

        alert("copied:"+ " "+document.getElementById("Railway").innerText)
    })
})




























document.getElementById("clear").addEventListener(('click'),function(){

 callHistory.length=0;
 document.getElementById("history-container").innerHTML="";

})


