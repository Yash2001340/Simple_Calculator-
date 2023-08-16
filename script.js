let x=Array.from(document.getElementsByClassName("btn"))
let string=" ";
let text=document.getElementsByTagName("input")[0];
x.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            text.value=string;
            string=JSON.stringify(string);
        }
        else if(e.target.innerHTML=='AC')
        {
            string=" ";
            text.value=string;
        }
        else if(e.target.innerHTML==='X')
        {
            string=string.slice(0,-1);
            text.value=string;
        }
        else{
        string+=e.target.innerHTML;
        text.value=string;
        }
    })
})