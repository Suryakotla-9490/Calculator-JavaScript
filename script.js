let display = document.getElementById('display')

let buttons  =Array.from(document.getElementsByClassName('button')) 

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        
      switch(e.target.innerText){
            case 'C':
                display.innerText = ""
                break;
            case 'Del':
                display.innerText = display.innerText.slice(0,-1)  
                break; 
            case '=':
                display.innerText = eval(display.innerText)     //we can use try catch here to catch error when entered only symbols
                break; 
            default:
                display.innerText += e.target.innerText      //we can write it as =display.innerText+e.target.value.  
                break;
      }
    })
})