const username = document.querySelector('.username');
const password = document.querySelector('.password')
const btn = document.querySelector('button');


function blue(){
    btn.classList.add('active')  
    if(username.value.length===0 || password.value.length===0){
        btn.classList.remove('active');
    }
}

username.addEventListener('keyup',blue);
password.addEventListener('keyup',blue);