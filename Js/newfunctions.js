function pageStart(){
    callPresident(0)  
}

function callPresident(order){
    presidentElement.name.innerText = `${president[order].name}`
    presidentElement.image.style = `background-image: url('../image/${president[order].image}.png`
    presidentElement.party.innerText = `${president[order].party}`
    presidentElement.partyNum.innerText = `${president[order].partyNum}`
    clickedPresident(order)
}

function clickedPresident(num){
    let changeOpacity = []
    
    for(c=0;president.length-1;c++){   
        changeOpacity.push(c)
        if(num === c){
            document.getElementById(`${president[c].image}`).style = "opacity: 0.2;"
            document.getElementsByClassName(`data`)[0].style = president[c].backstyle
        }        
        else {
            document.getElementById(`${president[c].image}`).style = "opacity: 1.0;"
        } 
    }
}

let presidentElement = {  
    name : document.getElementById('nameCandidate'),
    image : document.getElementById('img'),
    party : document.getElementById('polParty'),
    partyNum : document.getElementById('polPartyNum')
 }
 
let president = [
    {
        backstyle :`background: radial-gradient(circle, #661c1cc0 0%, #661c1cc0 49%, #cd1111ea 100%);` ,
        name : "Luis Inácio Lula da Silva",
        image : "lula",
        party : "Partido dos Trabalhadores",
        partyNum : "13"
    },
    {
        backstyle :`background: radial-gradient(circle, #1d1c66c0 0%, #a7b539b0 49%, #1f5a1bea 100%);` ,
        name : "Jair Bolsonaro",
        image : "Bolsonaro",
        party : "Partido Liberal",
        partyNum : "22"
    },
    {
        backstyle :`background: radial-gradient(circle, #285293c0 0%, #246fe3c0 49%, #1509c3ea 100%);` ,
        name : "Ciro Gomes",
        image : "ciro",
        party : "Partido Democrático Trabalhista",
        partyNum : "12"
    },
    {
        backstyle :`background: radial-gradient(circle, #fcbabf 0%, #c37680 49%, #c37680 100%)` ,
        name : "Simone Tebet",
        image : "simone",
        party : "Movimento Democrático Brasileiro",
        partyNum : "15"
    },
    {
        backstyle :`background: radial-gradient(circle, #1d1c66c0 0%, #a7b539b0 49%, #1f5a1bea 100%);` ,
        name : "Padre Kelmon",
        image : "padre",
        party : "Partido Trabalhista Brasileiro",
        partyNum : "14"
    }
]