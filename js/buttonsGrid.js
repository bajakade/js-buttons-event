let div =  document.getElementById('btns')


function changeLabel(){
    
    let buttons = document.getElementsByTagName('button')
    for(let i=0; i<buttons.length; i++){
        switch(parseInt(buttons[i].innerText)){
            case 2:
            case 3:
                buttons[i].innerText = parseInt(buttons[i].innerText) - 1
                break
            case 6:
            case 9:
                buttons[i].innerText = parseInt(buttons[i].innerText) - 3
                break
            case 7:
            case 8:
                buttons[i].innerText = parseInt(buttons[i].innerText) + 1
                break
            case 4:
                buttons[i].innerText = 7
                break
            case 1:
                buttons[i].innerText = 4
                break
        }  
     }
}

for(let i=0; i<9; i++){
    let el = document.createElement('button')
        el.innerText = i + 1
        el.id = 'btn' + parseInt(i + 1)
        div.appendChild(el)
}

var buttons = document.getElementsByTagName('button')
document.getElementById('btn5').addEventListener('click', changeLabel)
