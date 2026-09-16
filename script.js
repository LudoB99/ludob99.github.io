const translations = {
    'en-US': {
        description: 'Portfolio of Ludovic Belzile, software developer. See my projects and how to get in touch.',
        projects_heading: 'Projects',
        projects_live_heading: 'Live',
        projects_other_heading: 'Source only',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'A mobile application designed to support children and adolescents with ADHD in managing their daily routines. Developed as the capstone project for my software engineering degree at ÉTS.',
        project_2_name: 'Tic-tac-toe',
        project_2_desc: 'A tic-tac-toe game featuring an unbeatable AI opponent, built with the minimax algorithm and alpha-beta pruning.',
        project_3_name: 'Trivia Rush',
        project_3_desc: 'A trivia game app for iOS built with SwiftUI. Questions are fetched from the Open Trivia DB.',
        project_4_name: 'Poker Stars',
        project_4_desc: 'A Texas Hold\'em poker game implemented in Java 21 with Maven.',
        project_5_name: 'Weasel Program',
        project_5_desc: 'An interactive simulation of Richard Dawkins\' Weasel Program, illustrating how cumulative selection can rapidly evolve a random string toward a target phrase.',
        links_heading: 'Links',
        email_heading: 'Email',
    },
    'fr-CA': {
        description: 'Portfolio de Ludovic Belzile, développeur de logiciels. Découvrez mes projets et comment me contacter.',
        projects_heading: 'Projets',
        projects_live_heading: 'En ligne',
        projects_other_heading: 'Source seulement',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'Application mobile conçue pour soutenir les enfants et adolescents atteints du TDAH dans la gestion de leurs routines quotidiennes. Développée dans le cadre du projet de fin d\'études en génie logiciel à l\'ÉTS.',
        project_2_name: 'Tic-tac-toe',
        project_2_desc: 'Un jeu de tic-tac-toe avec un adversaire IA imbattable, implémenté avec l\'algorithme minimax et l\'élagage alpha-beta.',
        project_3_name: 'Trivia Rush',
        project_3_desc: 'Une application de jeu de quiz pour iOS construite avec SwiftUI. Les questions sont récupérées depuis l\'Open Trivia DB.',
        project_4_name: 'Poker Stars',
        project_4_desc: 'Un jeu de poker Texas Hold\'em développé en Java 21 avec Maven.',
        project_5_name: 'Programme Weasel',
        project_5_desc: 'Une simulation interactive du programme Weasel de Richard Dawkins, illustrant comment la sélection cumulative peut faire évoluer rapidement une chaîne aléatoire vers une phrase cible.',
        links_heading: 'Liens',
        email_heading: 'Courriel',
    },
};

const SUPPORTED = Object.keys(translations);
const DEFAULT_LANG = 'fr-CA';
const STORAGE_KEY = 'lang';

function getLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(param)) return param;

    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED.includes(stored)) return stored;
    } catch (e) {}

    return DEFAULT_LANG;
}

function setLang(lang) {
    applyLang(lang);

    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    if (location.search) {
        history.replaceState(null, '', location.pathname);
    }
}

function applyLang(lang) {
    const t = translations[lang];

    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', t.description);

    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (metaOgDescription) metaOgDescription.setAttribute('content', t.description);

    document.querySelectorAll('.lang-toggle a').forEach(a => {
        const isActive = a.dataset.lang === lang;
        a.classList.toggle('active', isActive);
        if (isActive) {
            a.setAttribute('aria-current', 'page');
        } else {
            a.removeAttribute('aria-current');
        }
    });
}

document.querySelectorAll('.lang-toggle a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        setLang(a.dataset.lang);
    });
});

setLang(getLang());
document.getElementById('year').textContent = new Date().getFullYear();
