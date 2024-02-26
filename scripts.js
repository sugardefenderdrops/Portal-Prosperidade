function MenuShow() {
    let MenuMobile = document.querySelector('.nav-mobile');
    if (MenuMobile.classList.contains('open')) {
        MenuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu-mobile.png";
    }

    else{
        MenuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close.png";
    }
}