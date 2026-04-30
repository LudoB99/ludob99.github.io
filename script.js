const translations = {
    'en-US': {
        description: 'Ludovic Belzile — Software engineering graduate from ÉTS, CEP.',
        tagline: 'Software engineering graduate, CEP.',
        about_heading: 'About',
        about: 'I\'m a software engineering graduate from ÉTS and a CEP (Candidate to the Engineering Profession). I\'ve had the chance to work at Ubisoft and Desjardins, where I worked on everything from iOS apps to cloud backends. I love computers in general, and I\'m always tinkering with something. This site is where I collect the things I make.',
        projects_heading: 'Projects',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'A mobile application designed to support children and adolescents with ADHD in managing their daily routines. Developed as the capstone project for my software engineering degree at ÉTS.',
        project_2_name: 'Tic-tac-toe',
        project_2_desc: 'A tic-tac-toe game featuring an unbeatable AI opponent, built with the minimax algorithm and alpha-beta pruning.',
        project_3_name: 'Trivia Rush',
        project_3_desc: 'A trivia game app for iOS built with SwiftUI. Questions are fetched from the Open Trivia DB.',
        project_4_name: 'Poker Stars',
        project_4_desc: 'A Texas Hold\'em poker game implemented in Java 21 with Maven.',
        links_heading: 'Links',
        email_heading: 'Email',
    },
    'fr-CA': {
        description: 'Ludovic Belzile — Diplômé en génie logiciel de l\'ÉTS, CPI.',
        tagline: 'Diplômé en génie logiciel, CPI.',
        about_heading: 'À propos',
        about: 'Diplômé en génie logiciel de l\'ÉTS et candidat à la profession d\'ingénieur (CPI), j\'ai eu la chance de travailler chez Ubisoft et Desjardins où j\'ai touché au développement iOS et aux backends infonuagiques. J\'aime les ordinateurs en général, et j\'ai toujours un projet en cours. Ce site, c\'est l\'endroit où je regroupe ce que je fais.',
        projects_heading: 'Projets',
        project_1_name: 'FocusQuest+',
        project_1_desc: 'Application mobile conçue pour soutenir les enfants et adolescents atteints du TDAH dans la gestion de leurs routines quotidiennes. Développée dans le cadre du projet de fin d\'études en génie logiciel à l\'ÉTS.',
        project_2_name: 'Tic-tac-toe',
        project_2_desc: 'Un jeu de tic-tac-toe avec un adversaire IA imbattable, implémenté avec l\'algorithme minimax et l\'élagage alpha-beta.',
        project_3_name: 'Trivia Rush',
        project_3_desc: 'Une application de jeu de quiz pour iOS construite avec SwiftUI. Les questions sont récupérées depuis l\'Open Trivia DB.',
        project_4_name: 'Poker Stars',
        project_4_desc: 'Un jeu de poker Texas Hold\'em développé en Java 21 avec Maven.',
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
