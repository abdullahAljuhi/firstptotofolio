let inputs= document.querySelectorAll('.input');
let textarea= document.querySelector('textarea');
let ok= document.querySelector('.submet');
inputs.forEach(element => {
    element.addEventListener('keyup',(e)=>{
        if(element.value.length < 1 || element.value ==''){
                if (e.target.parentElement.nextElementSibling.classList.contains('valid')) {
                    e.target.parentElement.nextElementSibling.classList.remove('valid')
                    e.target.parentElement.nextElementSibling.innerText="thia falid is reqired";
                }
                e.target.parentElement.nextElementSibling.classList.add('novalid');
        }
            else {
                if (e.target.parentElement.nextElementSibling.classList.contains('novalid')) {
                    e.target.parentElement.nextElementSibling.classList.remove('novalid')
            }
            e.target.parentElement.nextElementSibling.classList.add('valid')
        }
    });
});

ok.addEventListener('click',function(e){
    e.preventDefault();
    inputs.forEach(element => {
        if(element.value=="" || element.value.length < 1){
            if (element.parentElement.nextElementSibling.classList.contains('valid')) {
                element.parentElement.nextElementSibling.classList.remove('valid')
            }
            element.parentElement.nextElementSibling.classList.add('novalid');
    }
        else {
            if (element.parentElement.nextElementSibling.classList.contains('novalid')) {
                element.parentElement.nextElementSibling.classList.remove('novalid')
        }
        element.parentElement.nextElementSibling.classList.add('valid')
    }
    })
});