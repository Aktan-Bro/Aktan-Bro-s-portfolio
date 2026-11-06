function showToast(message, duration = 2500) {
    const toast = document.createElement('div');
    toast.textContent = message;

    Object.assign(toast.style, {
        position: 'fixed',
        left: '50%',
        bottom: '40px',
        transform: 'translateX(-50%) translateY(20px)',
        padding: '12px 26px',
        background: '#131313',
        color: 'white',
        border: '1px solid #B292FF',
        borderRadius: '40px',
        fontSize: '14px',
        zIndex: '1000',
        opacity: '0',
        transition: 'opacity 0.3s, transform 0.3s',
        pointerEvents: 'none'
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}


function initBackToTop() {
    const button = document.createElement('button');
    button.textContent = '↑';
    button.setAttribute('aria-label', 'Back to top');

    Object.assign(button.style, {
        position: 'fixed',
        right: '24px',
        bottom: '24px',
        width: '44px',
        height: '44px',
        border: '1px solid #222',
        borderRadius: '50%',
        background: '#131313',
        color: '#B292FF',
        fontSize: '20px',
        cursor: 'pointer',
        zIndex: '999',
        opacity: '0',
        pointerEvents: 'none',
        transition: 'opacity 0.3s'
    });

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        const visible = window.scrollY > 400;
        button.style.opacity = visible ? '1' : '0';
        button.style.pointerEvents = visible ? 'auto' : 'none';
    }, { passive: true });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


const karusel = document.getElementById('karusel');

if (karusel) {
    const kartochki = karusel.querySelectorAll('.kartochka');
    const tochki = document.querySelectorAll('#tochki .tochka');

    karusel.addEventListener('scroll', () => {
        const shag = kartochki[1].offsetLeft - kartochki[0].offsetLeft;
        const nomer = Math.round(karusel.scrollLeft / shag);

        tochki.forEach((tochka, i) => {
            tochka.classList.toggle('aktivna', i === nomer);
            tochka.setAttribute('aria-current', i === nomer);
        });
    });

    tochki.forEach((tochka, i) => {
        tochka.addEventListener('click', () => {
            kartochki[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        });
    });
}


const adres = document.getElementById('adress');

if (adres) {
    adres.addEventListener('click', async function (e) {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText('akimkanovaktan@gmail.com');
            showToast('Email copied to clipboard!');
        } catch (err) {
            showToast('Could not copy. Email: akimkanovaktan@gmail.com', 4000);
        }
    });
}


initBackToTop();