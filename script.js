const translations = {
    'en-US': {
        description: 'Ludovic Belzile — Software engineering student at ÉTS, graduating 2026.',
        tagline: 'Software engineering student, graduating soon.',
        about_heading: 'About',
        about: 'I\'m a software engineering student at ÉTS, wrapping up my degree in 2026. I\'ve had the chance to work at Ubisoft and Desjardins — touching everything from iOS apps to cloud backends. I love computers in general, and I\'m always tinkering with something. This site is where I collect the things I make.',
        projects_heading: 'Projects',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'FocusQuest+ is a mobile application designed to support children and adolescents with ADHD in managing their daily routines. This application was developed as part of the final year project at ÉTS for the Winter 2026 semester.',
        links_heading: 'Links',
        email_heading: 'Email',
    },
    'fr-CA': {
        description: 'Ludovic Belzile — Étudiant en génie logiciel à l\'ÉTS, diplômé en 2026.',
        tagline: 'Étudiant en génie logiciel, bientôt diplômé.',
        about_heading: 'À propos',
        about: 'Étudiant en génie logiciel à l\'ÉTS, je termine mon baccalauréat en 2026. J\'ai eu la chance de travailler chez Ubisoft et Desjardins — du développement iOS aux backends infonuagiques. J\'aime les ordinateurs en général, et j\'ai toujours un projet en cours. Ce site, c\'est l\'endroit où je regroupe ce que je fais.',
        projects_heading: 'Projets',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'FocusQuest+ est une application mobile conçue pour soutenir les enfants et adolescents atteints du TDAH dans la gestion de leurs routines quotidiennes. Ce projet a été réalisé dans le cadre du projet de fin d\'études à l\'ÉTS pour la session d\'hiver 2026.',
        links_heading: 'Liens',
        email_heading: 'Courriel',
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

    document.querySelector('meta[name="description"]').setAttribute('content', t.description);

    document.querySelectorAll('.lang-toggle a').forEach(a => {
        a.classList.toggle('active', a.dataset.lang === lang);
    });
}

applyLang(getLang());
