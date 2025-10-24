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
    // console.log({input})
});
let counter=[false,false,false,false,false,false];
button.addEventListener('click',(e)=>{
    e.preventDefault();
    data.forEach((set,i)=>{
        // for first three inputs
        if(set instanceof NodeList && i==0){
            set.forEach((element,index)=>{
                // console.log(element);
                // console.log("index is",index);
                // for first three inputs
                if(element.value=="" && element.type!="checkbox"){
                    console.log("index is ",index);
                    p_new[index].style.display="block";
                    console.log(p_new[index].style.display);
                    console.log("type from if is",element.type);
                    // console.log("hello from 1st if");
                    counter[index]=false;
                }else{
                    if(element.type!="checkbox"){
                        counter[index]=true;
                        console.log("type from else is",element.type);
                        p_new[index].style.display="none";
                        // console.log("hello from 1st else");
                    }
                }
                // for checkbox
                if(element.type=="checkbox" && element.checked==false){
                    p_new[3].style.display="block";
                    counter[3]=false;
                    // console.log("hello from 2nd if");
                }else{
                    counter[3]=true;
                    p_new[3].style.display="none";
                    // console.log("hello from 2nd else");
                }
            })
        } 
        // textarea validation logic
        if(i==1){
            if(set.value==""){
                p_new[4].style.display="block";
                counter[4]=false;
            }else{
                counter[4]=true;
                p_new[4].style.display="none";
            }
        }else{
            // radio button validation logic
            if(set[0].checked || set[1].checked){
                counter[5]=true;
                p_new[5].style.display="none";
            }else{
                counter[5]=false;
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
    if(counter[0]==true && counter[1]==true && counter[2]==true && counter[3]==true && counter[4]==true && counter[5]==true){
        const form = document.querySelector('form');
        form.submit();
        console.log("form submitted successfuly");
    }

}
)