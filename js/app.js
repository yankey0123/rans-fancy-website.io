const featuredIn = document.querySelector('.featured-in')



onscroll = () => {
    let scroll = window.scrollY 
    
    if (scroll >= 1027 ) {
        featuredIn.classList.add('notvisible')
    } else {
        featuredIn.classList.remove('notvisible')
    }
}
