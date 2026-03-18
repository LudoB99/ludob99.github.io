const translations = {
    'en-US': {
        tagline: 'Software engineering student, graduating soon.',
        about_heading: 'About',
        about: 'I\'m a software engineering student at ÉTS, wrapping up my degree in 2026. I\'ve had the chance to work at Ubisoft and Desjardins — touching everything from iOS apps to cloud backends. I love computers in general, and I\'m always tinkering with something. This site is where I collect the things I make.',
        projects_heading: 'Projects',
        links_heading: 'Links',
    },
    'fr-CA': {
        tagline: 'Étudiant en génie logiciel, bientôt diplômé.',
        about_heading: 'À propos',
        about: 'Étudiant en génie logiciel à l\'ÉTS, je termine mon baccalauréat en 2026. J\'ai eu la chance de travailler chez Ubisoft et Desjardins — du développement iOS aux backends infonuagiques. J\'aime les ordinateurs en général, et j\'ai toujours un projet en cours. Ce site, c\'est l\'endroit où je regroupe ce que je fais.',
        projects_heading: 'Projets',
        links_heading: 'Liens',
    },
};

const SUPPORTED = Object.keys(translations);
const DEFAULT_LANG = 'fr-CA';

function getLang() {
    const param = new URLSearchParams(location.search).get('lang');
    return SUPPORTED.includes(param) ? param : DEFAULT_LANG;
}

function applyLang(lang) {
    const t = translations[lang];

    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('.lang-toggle a').forEach(a => {
        a.classList.toggle('active', a.dataset.lang === lang);
    });
}

applyLang(getLang());
