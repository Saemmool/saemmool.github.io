// Menu List

    const body = document.querySelector('body');
    const html = document.documentElement;

    const toggle = document.getElementById('toggle');
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    document.onclick = function(e){
        if(e.target.id !=='sidebar' && e.target.id !=='toggle') {
            toggle.classList.remove('active');
            sidebar.classList.remove('active');
            container.classList.remove('active');
        }
    }

    toggle.onclick = function(){
        toggle.classList.toggle('active');
        sidebar.classList.toggle('active');
        container.classList.toggle('active');
    }

    // mode
    const mode = document.getElementById('mode');
    mode.onclick = function(){
        mode.classList.toggle('active');
    }


    // window.addEventListener('scroll', function() {
    //     var scroll = document.querySelector('.arrow');
    //     scroll.classList.toggle("up", window.scrollY > 500);
    // })

    // function scrollToTop(){
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // }


    // scroll.classList.toggle("up", window.scrollY > 500);


    //arow
    // const arrow = document.querySelector('.arrow');
    // // let scrollPos = 0;
    // let docH = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    // function checkPosition() {
    //     let windowY = window.scrollY;
    //     if (windowY < scrollPos) {
    //         arrow.classList.add('up');
    //     } else {
    //     arrow.classList.remove('up');
    //     }
    
    //     scrollPos = windowY;
    
    //     if ((window.innerHeight + window.scrollY) >= docH) {
    //         arrow.classList.add('up');
    //     }
    //     if(window.scrollY == 0) {
    //         arrow.classList.remove('up');
    //     }
    
    //     arrow.addEventListener('click', scroll => {
    //         window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    //     })
    // }
    