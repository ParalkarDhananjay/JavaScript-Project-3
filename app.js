const circle=document.querySelector('#circle');
circle.addEventListener('mouseenter',()=>{
    if(!circle.classList.contains('Hover')){
        circle.classList.add('Hover');
    }
});

circle.addEventListener('mouseleave',()=> {
    if(circle.classList.contains('Hover')){
        circle.classList.remove('Hover');
    }
})