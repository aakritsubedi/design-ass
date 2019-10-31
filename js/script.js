var burgerMenu = document.getElementById('burger');
var leftNav = document.getElementById('left-nav');
var leftLi = leftNav.querySelectorAll('li')
var clickCount = 0;
burgerMenu.addEventListener('click',()=>{
    if(clickCount==0){
        leftNav.style.display='block';
        for(let i=0;i<leftLi.length;i++){
            leftLi[i].style.display='inline-block';
        }
        clickCount++; 
    }
    else{
        leftNav.style.display='none';
        clickCount--;
    }
});