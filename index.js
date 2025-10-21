const button=document.querySelector("button");
const inputs=document.querySelectorAll('input:not([type="radio"])');
const data=[inputs,document.querySelector("textarea"),document.querySelectorAll('input[type="radio"]')]
const p=document.querySelectorAll("p");
p.forEach(elements=>{
    elements.style.display="none";
})
inputs.forEach(input => {
    console.log({input})
});

button.addEventListener('click',(e)=>{
    data.forEach(set=>{
        if(set.isArray()){
            set.forEach((element,index)=>{
                if(element.value=""){
                    p[index].style.display="block";
                }
            })
        }else{
            if(set.value=""){
                
            }
        }
    }

    )

}
)