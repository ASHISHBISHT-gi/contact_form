const button=document.querySelector("button");
const inputs=document.querySelectorAll('input:not([type="radio"])');
const data=[inputs,document.querySelector("textarea"),document.querySelectorAll('input[type="radio"]')]
const p=document.querySelectorAll("p");
const p_new=[p[0],p[1],p[2],p[5],p[4],p[3]]
p_new.forEach(element=>{
    // console.log(element);
})
p.forEach(elements=>{
    // console.log(elements);
    elements.style.display="none";
})
inputs.forEach(input => {
    console.log({input})
});
let counter=[0,0,0];
button.addEventListener('click',(e)=>{
    e.preventDefault();
    data.forEach((set,i)=>{
        // for first three inputs
        if(set instanceof NodeList && i==0){
            set.forEach((element,index)=>{
                console.log(element);
                console.log("index is",index);
                // for first three inputs
                if(element.value=="" && element.type!="radio"){
                    console.log("index is ",index);
                    p_new[index].style.display="block";
                    console.log(p_new[index].style.display);
                    console.log("hello from if array");
                    counter[0]=counter[0]-1;
                }else{
                    counter[0]=counter[0]+1
                    p_new[index].style.display="none";
                    console.log("hello from else");
                }
                // for checkbox
                if(element.type=="checkbox" && element.checked==false){
                    p_new[3].style.display="block";
                    counter[0]=counter[0]-1;
                }else{
                    counter[0]=counter[0]+1
                    p_new[3].style.display="none";
                }
            })
        } 
        // textarea validation logic
        if(i==1){
            if(set.value==""){
                p_new[4].style.display="block";
                counter[1]=counter[1]-1;
            }else{
                counter[1]=counter[1]+1
                p_new[4].style.display="none";
            }
        }else{
            // radio button validation logic
            if(set[0].checked || set[1].checked){
                counter[2]=counter[2]+1;
                p_new[5].style.display="none";
            }else{
                counter[2]=counter[2]-1;
                p_new[5].style.display="block";
            }
        }
        // if(element.type=="radio" && element.checked==false && counter==0){
        //             console.log("element.checked is",element.checked);
        //             p_new[5].style.display="block";
        //             counter=1;
        //         }
    }

    )
    console.log("counter is",counter);
    if(counter==9){
        const form = document.querySelector('form');
        form.submit();
        console.log("form submitted successfuly");
    }

}
)