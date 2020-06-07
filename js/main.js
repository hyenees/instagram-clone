// 댓글추가, 삭제

const comment = document.querySelector('.comment');
const loadBtn = document.querySelector('.loadBtn');
const removeBtn = document.querySelector('.x');
const commentList = document.querySelector('.comments');

function remove(){
    commentList.removeChild(this.parentNode);
}

function upload(writing){
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

// 검색

const search = document.querySelector('.search input');
const searchList = document.querySelectorAll('.searchList p');
const ul = document.querySelector('.searchList');


function find(){
    let matchedWords = [];
    for(let i = 0; i < searchList.length; i++){
        const listwords = searchList[i].textContent
        if(listwords.includes(this.value)){     
            matchedWords.push(listwords);
            const words = matchedWords.map(word=>{
                return `<li><a href=#>${word}</a></li>`;
            }).join('')
            ul.innerHTML=words;
        }else if(this.value.length > 1){
            const words = matchedWords.map(word=>{
                return `<li><a href=#>${word}</a></li>`;
            }).join('')
            ul.innerHTML=words;
        }
        
        if(this.value.length===0){
            matchedWords.length = 0;
            ul.innerHTML = '';
        }
    } 
}

function left(){
    const icon = document.querySelector('i');
    icon.style.left='10px';
    search.classList.add('change');
}

search.addEventListener('keyup',find);
search.addEventListener('click',left);

