let registered=[];
let suc=document.querySelector('.sus')
let nsus=document.querySelector('.nsus')
let names=document.getElementById('names')
suc.style.display='none';
nsus.style.display='none';


let details=document.querySelector('.details')
let container=document.querySelector('.container')
details.style.display='none';

function goback(){
    details.style.display='none';
    container.style.display='block';
}

let go=document.querySelector('.aro');
go.addEventListener('click',goback)



function showdetails(e){
    names.innerHTML=''; 
    container.style.display='none';
    details.style.display='block';
    let email=e.target.innerText;
    
    let res=registered.find((user)=>{
        return user.mail==email;
    })
    console.log(res);




    let namele=document.createElement('p')
    let emaele=document.createElement('p')
    let regele=document.createElement('p')
    namele.innerText=res.name;
    emaele.innerText=res.mail;
    regele.innerText=res.reg;
   
    names.appendChild(namele);
    names.appendChild(emaele);
    names.appendChild(regele);

}

function render(){
    
    let tem=document.getElementById('list');
    tem.innerHTML=''
    registered.map((user)=>{
        let div=document.createElement('div');
        let p=document.createElement('p');
        div.classList.add('temp')
        p.innerText=user.mail;
        tem.appendChild(div);
        div.appendChild(p);
        p.addEventListener('click',showdetails)
        
    })

}




function clicked(){
    let name=document.querySelector('.user');
    let mail=document.querySelector('.ema');
    let regno=document.querySelector('.regn');
    let val=registered.filter((user)=>{
        return user.mail==mail.value;
    })
    if(name.value==''||mail.value==null||regno.value==""){
        alert('you missed something')
    }
    else if(val.length==0){
        let nl={
            name:name.value,
            mail:mail.value,
            reg:regno.value
        }
        registered.push(nl)
        suc.style.display='block';
        setTimeout(()=>{
            suc.style.display='none';
        },2000)
        render();
    }
    else{
        nsus.style.display='block';
        setTimeout(()=>{
            nsus.style.display='none';
        },2000)

    }
    name.value='';
    mail.value=''
    regno.value=''
}


let submit=document.querySelector('.butt');
submit.addEventListener('click',clicked)
