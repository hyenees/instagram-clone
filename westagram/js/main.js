const comment = document.querySelector('.comment');
const loadBtn = document.querySelector('.loadBtn');

function upload(writing){
    const commentList = document.querySelector('.comments');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const img = document.createElement('img');
    span.className='id';
    span.innerText = 'canon_mj';
    p.innerText = writing;
    img.src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(img);
    commentList.appendChild(li);

}

function enter(e){
    if(e.keyCode===13){
        upload(this.value);
    }
    
}

function mouseClick(){
    upload(comment.value);
}

comment.addEventListener('keydown',enter);
loadBtn.addEventListener('click', mouseClick);