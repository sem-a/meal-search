let lastScroll = 0;
document.addEventListener('scroll', () => {
    const vegetable = document.querySelectorAll('.vegetable');
    let scrollTop = window.scrollY;
    if(scrollTop > lastScroll) {
        for(let i=0; i < vegetable.length; i++) {
            let top = window.getComputedStyle(vegetable[i]);
            vegetable[i].style.top = `${Number(top.top.slice(0, -2)) - 1}px`;
        }
    } else {
        for(let i=0; i < vegetable.length; i++) {
            let top = window.getComputedStyle(vegetable[i]);
            vegetable[i].style.top = `${Number(top.top.slice(0, -2)) + 1}px`;
        }
    }
    lastScroll = scrollTop;
});