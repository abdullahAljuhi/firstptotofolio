let inputs= document.querySelectorAll('.input');
let textarea= document.querySelector('textarea');
let ok= document.querySelector('.submet');
let alrt;
let elm;
inputs.forEach(element => {
    elm=0
    element.addEventListener('blur',(e)=>{
        if(element.value.length < 1 || element.value==''){
                alrt=e.target.parentElement.nextElementSibling;
                elm=1;
            if(alrt && elm){
                if (alrt.classList.contains('valid')) {
                    alrt.classList.remove('valid')
                }
                alrt.classList.add('novalid');
            }
        }
            else if(elm){
                if (alrt.classList.contains('novalid')) {
                    alrt.classList.remove('novalid')
            }
            alrt.classList.add('valid')
        }
            
    
    });
    ok.disabled=false;
});

ok.addEventListener('click',function(e){
    e.preventDefault();
    inputs.forEach(element => {
        if(element.value="" || element.value.length<1){
            alrt=element.parentElement.nextElementSibling;
        if(alrt){
            if (alrt.classList.contains('valid')) {
                alrt.classList.remove('valid')
            }
            alrt.classList.add('novalid');
        }
    }
        else if(elm){
            if (alrt.classList.contains('novalid')) {
                alrt.classList.remove('novalid')
        }
        alrt.classList.add('valid')
    }
    })
});