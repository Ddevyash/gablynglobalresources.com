let toggle = document.querySelector('.hamburger');
    toggle.addEventListener('click', function(){
        document.querySelector('.nav-menu').style.display='block;';
        document.querySelector(' .cancel').style.display='block;'
        document.querySelector('.nav-menu a').style.display='block;'
        this.style.display='none'

    })