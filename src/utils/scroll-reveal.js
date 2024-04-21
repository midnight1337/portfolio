const scroll_reveal = () => {
    const sr = ScrollReveal({
        distance: '50px',
        duration: 2500,
        delay: 0,
        reset: true
    });

    sr.reveal('.about__content', { origin: 'left' });
    sr.reveal('.about__img-wrapper', { origin: 'top' });
}

export default scroll_reveal;
