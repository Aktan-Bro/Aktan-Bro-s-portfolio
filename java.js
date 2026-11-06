function initCarousel() {
    const karusel = document.getElementById('karusel');
    if (!karusel) return;
 
    const kartochki = karusel.querySelectorAll('.kartochka');
    const tochki = document.querySelectorAll('#tochki .tochka');
 
    karusel.addEventListener('scroll', () => {
        const shag = kartochki[1].offsetLeft - kartochki[0].offsetLeft;
        const nomer = Math.round(karusel.scrollLeft / shag);
        tochki.forEach((t, i) => {
            t.classList.toggle('aktivna', i === nomer);
            t.setAttribute('aria-current', i === nomer);
        });
    });
 
    tochki.forEach((t, i) => t.addEventListener('click', () => {
        kartochki[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }));
}
 
function initEmailCopy() {
    const adres = document.getElementById('adress');
    if (!adres) return;
 
    adres.addEventListener('click', e => {
        e.preventDefault();
        navigator.clipboard.writeText('akimkanovaktan@gmail.com')
            .then(() => alert('Email copied!'))
            .catch(() => alert('akimkanovaktan@gmail.com'));
    });
}
 
initCarousel();
initEmailCopy();
