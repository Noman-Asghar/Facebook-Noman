let messngerBtn = document.getElementById('message');
let listBtn = document.getElementById('list');
let darkBtn = document.getElementById('dark');
let lightBtn = document.getElementById('light');
let commentSection = document.createElement('div');
commentSection.className = 'commentModal';

//   dark mode and light mode js section

darkBtn.addEventListener('click', function(){

    let body = document.querySelector('body');
    body.classList.toggle('dark');

    let header = document.querySelector('.header');
    header.classList.toggle('dark-head');

    lightBtn.style.display = "block"
    darkBtn.style.display = "none"

    let likeSec = document.querySelectorAll('.like-sec');

likeSec.forEach((e)=>{

    e.classList.toggle('dark-p')
});
   
});


lightBtn.addEventListener('click', function(){

    let body = document.querySelector('body');
    body.classList.toggle('dark');

    let header = document.querySelector('.header');
    header.classList.toggle('dark-head');

    darkBtn.style.display = "block"
    lightBtn.style.display = "none"

    let likeSec = document.querySelectorAll('.like-sec');

    likeSec.forEach((e)=>{
    
        e.classList.toggle('dark-p');

})

});

// responsive list and messenger  buttons js section

listBtn.addEventListener('click', function(){
   let side =  document.querySelector('.side-bar');

    side.classList.toggle('side'); 
})

messngerBtn.addEventListener('click', function(){

    let messenger = document.querySelector('.messenger')
    messenger.classList.toggle('Show')
})

//  coment box js section

let buttons = document.querySelectorAll('.buttons');
let comentBox  = document.querySelectorAll('.coment-box');
comentBox.forEach((e)=>{
    e.style.display  = "none"
})

let CommentModal = false

buttons.forEach((el , i)=>{
    el.addEventListener('click' ,()=>{
        CommentModal = !CommentModal
        if(CommentModal){
            comentBox[i].style.display='block'
        }
        else{
            comentBox[i].style.display = 'none'
        }
    })
})

// Here we start the comment logic;

let commentP = document.querySelector('.comment-p');
let comments ;

let coment = document.querySelectorAll('#coment');

coment.forEach((e, i)=>{

    e.addEventListener('click',function(){
        let userInput = document.querySelectorAll('#user-input');
        let p = document.querySelectorAll('#user-coment');
      let userImg = document.querySelectorAll('#user-img')

    
userImg.forEach(()=>{

    userImg[i].style.display = "block"
})
        p.forEach(()=>{

            p[i].innerHTML = userInput[i].value    
        });

        comments = [{

            coment:commentP.innerHTML,
            userComent:userInput[i].value
        },

    ]
       console.log(comments);
       return comments
    });

});

// like button js section

let like = document.querySelectorAll('#like');
let count = 1;

like.forEach((e , i)=> {

    e.addEventListener('click',function(){

        let p = document.querySelectorAll('.like');
        let img = document.querySelectorAll('#likes')

        img.forEach((e)=>{

            img[i].style.display = "block"
        });
  
        p.forEach((pl)=>{
            
            p[i].style.display = "block"
            p[i].innerHTML = count;

        });

        count++;
    });

    
});



