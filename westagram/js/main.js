const comment = document.querySelector('.comment');
const loadBtn = document.querySelector('.loadBtn');
const removeBtn = document.querySelector('.x');
const comments = document.querySelector('.comments');



function remove(){
    comments.removeChild(this.parentNode);
}

function upload(writing){
    const commentList = document.querySelector('.comments');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');
    span.className='id';
    span.innerText = 'canon_mj';
    p.innerText = writing;
    img.src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    btn.innerText = 'X';
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(btn);
    li.appendChild(img); 
    commentList.appendChild(li);

    const removeBtns = document.querySelectorAll('.comments>li button');
    removeBtns.forEach(removeBtn=>removeBtn.addEventListener('click',remove));
}

function enter(e){
    if(e.keyCode===13){
        upload(this.value);
        comment.value=null;
    }
    
}

function mouseClick(){
    upload(comment.value);
    comment.value=null;
}

comment.addEventListener('keydown',enter);
loadBtn.addEventListener('click', mouseClick);



const search = document.querySelector('.search input');
const searchList = document.querySelectorAll('.searchList li');
const ul = document.querySelector('.searchList');
const searchBox = document.querySelector('.searchBox');


function left(){
    const icon = document.querySelector('i');
    icon.style.left='10px';
    search.classList.add('change');
}


function find(){
    for (i=0; i<searchList.length; i++){
        const listwords = searchList[i].textContent;
        if (listwords.includes(this.value)){
            console.log(listwords);
            searchBox.style.display='block';
            searchList[i].style.display = 'block';
        }else{
            // searchBox.style.display='none';
            searchList[i].style.display = 'none';
        }
    } 

   if(this.value===''){
        searchList.forEach(list=>list.style.display='none');
   }
        
}

search.addEventListener('click',left);
search.addEventListener('keyup',find);
