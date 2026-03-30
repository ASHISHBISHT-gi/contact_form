const text=document.getElementsByName("text");
const email=document.getElementsByName("email")[0];
const p=document.querySelectorAll("p");
const textarea=document.querySelector("textarea");
const radio=document.getElementsByName("query");
const form=document.querySelector("form");
const check=document.getElementsByName("consent")[0];
const success=document.getElementsByClassName("success")[0];
const succ=document.getElementById("success");
const body=document.querySelector("body");
console.log(text)
let all=[text[0],text[1],email,radio,textarea,check]
let counter=[false,false,false,false,false,false];

console.log("success is ",success);
// error handling for input name and input email post typing

function textvalidate(element,i){
            if(element.value){
                // element.style.borderColor="hsl(186, 15%, 59%)";
                element.classList.remove("invalid");
                counter[i]=true;
                p[i].style.display="None";
            }else{
                element.classList.add("invalid");
                // element.style.borderColor="hsl(0, 66%, 54%)";
                counter[i]=false;
                p[i].style.display="block";
            }
}

text.forEach((element,i)=>{
        element.addEventListener('keyup',(e)=>{
            // console.log(e);
            if(e.key!="Tab"){
                textvalidate(element,i);
            }
        })    
});

// error handlilng for email
function emailvalidate(element){
    if(element.value){
        // element.style.borderColor="hsl(186, 15%, 59%)";
        element.classList.remove("invalid");
        counter[2]=true;
        p[2].style.display="None";
    }else{
        element.classList.add("invalid");
        // element.style.borderColor="hsl(0, 66%, 54%)";
        counter[2]=false;
        p[2].style.display="block";
    }
}

email.addEventListener('keyup',(e)=>{
    if(e.key!="Tab"){
        emailvalidate(email);
    }
})
email.addEventListener('focusout',(e)=>{
    console.log("offFocus")
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.value && !emailRegex.test(email.value)){
        element.classList.add("invalid");
        counter[2]=false;
        p[2].style.display="block";
    }
})

// error handling for radio inputs
function radiovalidate(element,i){
            if(element.checked){
                p[3].style.display="none";
                counter[3]=true;
                if(i==0){
                    element.parentNode.style.borderColor="hsl(169, 82%, 27%)";
                    element.parentNode.style.background="hsl(186, 15%, 59%)";
                    radio[1].parentNode.style.borderColor="rgb(118, 118, 118)";
                    radio[1].parentNode.style.background="hsl(0, 0%, 100%)";
                }else{
                    element.parentNode.style.borderColor="hsl(169, 82%, 27%)";
                    element.parentNode.style.background="hsl(186, 15%, 59%)";
                    radio[0].parentNode.style.borderColor="rgb(118, 118, 118)";
                    radio[0].parentNode.style.background="hsl(0, 0%, 100%)";
                }
            }else{
                p[3].style.display="block";
                counter[3]=false;
            }
}

function radioreset(r1,r2){
        r1.parentNode.style.borderColor="rgb(118, 118, 118)";
        r1.parentNode.style.background="hsl(0, 0%, 100%)";
        r2.parentNode.style.borderColor="rgb(118, 118, 118)";
        r2.parentNode.style.background="hsl(0, 0%, 100%)";

}

radio.forEach((element,i)=>{
        element.addEventListener('click',(e)=>{
            if(e.key!="Tab"){
                radiovalidate(element,i);
            }
        })
})
//  error handling for textarea
function textareavalidate(element){
    if(element.value){
        counter[4]=true;
        p[4].style.display="none";
        element.style.borderColor="rgb(118, 118, 118)";

    }else{
        counter[4]=false;
        element.style.borderColor="hsl(0, 66%, 54%)";
        p[4].style.display="block";
    }
}

textarea.addEventListener('keyup',(e)=>{
    if(e.key!="Tab"){
        textareavalidate(textarea);
    }
})
// error handling for checkbox
function checkvalidate(element){
    if(element.checked){
        counter[5]=true;
        p[5].style.display="none";
    }else{
        counter[5]=false;
        p[5].style.display="block";
    }
}
check.addEventListener('click',(e)=>{
    if(e.key!="Tab"){
        checkvalidate(check);
    }
})

let all1={
    0:textvalidate,
    1:textvalidate,
    2:emailvalidate,
    3:radiovalidate,
    4:textareavalidate,
    5:checkvalidate
}

//  remove success bar
body.addEventListener('click',(e)=>{
    succ.style.display="none";
})


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(counter[0]==true && counter[1]==true && counter[2]==true && counter[3]==true && counter[4]==true && counter[5]==true){
        const form = document.querySelector('form');
        counter.fill(false);
        console.log("dfd")
        // success.style.display="flex";
        succ.style.display="flex";
        console.log("succ_display is ",succ.style.display);
        console.log("form submitted successfuly");
        radioreset(radio[0],radio[1]);
        form.reset();
    }else{
        counter.forEach((element,i)=>{
            if(!element){
                if(i<=1 || i==3){
                    all1[i](all[i],i);
                }else{
                    all1[i](all[i]);
                }
            }
        })
    }
})   
    


