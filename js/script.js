// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 2. Typing Effect State (Global for this scope) ---
    const typingText = document.getElementById('typingText');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    // --- 0. Multilingual Support Logic ---
    const translations = {
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_journey: "Journey",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            site_title: "Ali Eddnoub | Portfolio",
            hero_tag: "Passionate Developer | Hungry for Growth & Collaboration",
            hero_title: "Hi, I'm Ali Eddnoub",
            hero_description: "As a tech enthusiast and fresh graduate, I pour my heart into building modern web applications. Driven by curiosity and a desire to learn from the best, I strive to deliver meticulous, tailored results for every project.",
            hero_cv_btn: "View CV",
            typing_phrases: ['Passionate Web Developer', 'Laravel & PHP Enthusiast', 'Continuous Learner', 'Problem Solver'],
            about_label: "// 01 — Profile",
            about_title: "About Me",
            about_p1: "Having just earned my degree in IT development, web technology has truly become my passion. My goal? To transform my theoretical knowledge into real-world experience, working alongside seasoned developers to learn on the ground.",
            about_p2: "In my eyes, being new to the field is a strength. It means I bring fresh energy, a sharp curiosity, and a hunger to tackle problems with a new perspective. I’m eager to join a professional team, learn from experts, and scale my skills through real-world challenges.",
            about_client: "For Clients: Every project I build carries a piece of your vision and my dedication. I focus on delivering sincere and meticulous work, treating each project as a personal mission.",
            about_team: "For Teams: I am enthusiastic about joining your team and putting my skills toward stimulating projects. I look forward to learning from your experts and growing professionally alongside you.",
            about_advice: "I am always eager for professional advice, feedback, or any guidance that can help me grow in this field. If you have any suggestions for a passionate junior just starting out, please don't hesitate to share them!",
            journey_label: "// 02 — Story",
            journey_title: "Professional Journey",
            journey_tym_title: "TYM Group — CRM & Communication",
            journey_tym_desc: "Sales, consulting, and customer support in telecommunications, mastering CRM tools and call management systems.",
            journey_amigo_title: "AMIGO STAR — Laravel Specialist (PFE)",
            journey_amigo_desc: "Developed the ByHome platform as a Final Study Project (PFE) using Laravel, connecting home cooks with clients through secure booking and payments.",
            journey_newdev_title: "NewDev MAROC — Web Developer",
            journey_newdev_desc: "Realization of personal web projects, focusing on responsive design, UI/UX, and dynamic interactivity using modern JS.",
            journey_axa_title: "AXA Assurance — IT Service Internship",
            journey_axa_desc: "Professional immersion within the IT department of a global leader, gaining insights into corporate tech infrastructure and support.",
            journey_degree_title: "IBEM — Specialized IT Technician Degree",
            journey_degree_desc: "Graduated as a Specialized Technician in IT Development, building a strong academic foundation in algorithms, databases, and software engineering.",
            skills_label: "// 03 — Mastery",
            skills_title: "My Skills",
            skills_fe: "Front-End Mastery",
            skills_be: "Back-End Power",
            skills_soft: "Strengths",
            skills_tools: "Tools",
            soft_adapt: "Adaptability",
            soft_team: "Team Player",
            soft_learn: "Fast Learner",
            soft_problem: "Problem Solver",
            projects_label: "// 04 — Works",
            projects_title: "Featured Projects",
            project_byhome_desc: "A Laravel-based platform connecting home cooks with clients. Includes features for booking, online payment, and rating systems.",
            project_portfolio_desc: "MyPortfolio is a web application designed to create and manage professional CVs dynamically (HTML, CSS, JS).",
            project_clinic_desc: "A comprehensive management system for dental clinics, featuring appointment scheduling and patient record management.",
            btn_case_study: "Case Study",
            btn_demo: "Demo",
            contact_label: "// 05 — Connect",
            contact_title: "Let's Work Together",
            contact_p: "Interested in working together or have a question? Feel free to reach out to me through any of the channels below.",
            contact_feedback: "Feedback Welcome: Any advice or suggestions for my professional journey are highly appreciated!",
            contact_name: "Full Name",
            contact_email: "Email Address",
            contact_message: "Your Message",
            contact_send: "Send Message",
            case_study_problem: "The Problem",
            case_study_solution: "The Solution",
            case_study_tech: "Technologies Used",
            footer_rights: "All rights reserved.",
            msg_sending: "Sending...",
            msg_sent: "Message Sent! ✓",
            msg_error: "Oops! There was a problem."
        },
        fr: {
            nav_home: "Accueil",
            nav_about: "À propos",
            nav_journey: "Parcours",
            nav_skills: "Compétences",
            nav_projects: "Projets",
            nav_contact: "Contact",
            site_title: "Ali Eddnoub | Portfolio",
            hero_tag: "Développeur Passionné | Soif de Croissance et de Collaboration",
            hero_title: "Salut, Je suis Ali Eddnoub",
            hero_description: "Jeune diplômé passionné par la tech, je mets tout mon cœur dans la création d'applications web. Toujours curieux d'apprendre des meilleurs, je m'efforce de livrer un travail soigné et sur mesure à chaque projet.",
            hero_cv_btn: "Voir le CV",
            typing_phrases: ['Développeur Web Passionné', 'Enthousiaste Laravel & PHP', 'Apprenant Continu', 'Résolveur de Problèmes'],
            about_label: "// 01 — Profil",
            about_title: "À Propos de Moi",
            about_p1: "Je viens d'obtenir mon diplôme en développement informatique, et le web est vraiment mon domaine de cœur. Mon ambition ? Transformer mes acquis théoriques en expérience concrète, en travaillant aux côtés de développeurs chevronnés pour apprendre sur le terrain.",
            about_p2: "À mes yeux, être nouveau dans le domaine est un atout. Cela signifie que j’arrive avec une énergie intacte, une curiosité vive et une envie d’aborder les problèmes sous un angle neuf. Je suis impatient de rejoindre une équipe professionnelle, d’apprendre aux côtés d’experts et de faire grandir mes compétences en relevant des défis concrets.",
            about_client: "Pour les Clients : Chaque projet que je réalise porte en lui une part de votre vision et de mon engagement. Je m’attache à créer un travail soigné et sincère, comme si j’y mettais un peu de moi-même.",
            about_team: "Pour les Équipes :Je suis enthousiaste à l'idée de rejoindre votre équipe et de mettre mes compétences au service de projets stimulants. J'ai hâte d'apprendre aux côtés de vos experts et de grandir professionnellement avec vous.",
            about_advice: "Je suis toujours à l'écoute de conseils ou de retours d'expérience qui pourraient m'aider à progresser dans ce domaine. Si vous avez des suggestions pour un passionné qui débute, n'hésitez pas à me les partager !",
            journey_label: "// 02 — Parcours",
            journey_title: "Mon Parcours Professionnel",
            journey_tym_title: "TYM Group — CRM & Communication",
            journey_tym_desc: "Vente, conseil et support client dans les télécommunications, maîtrise des outils CRM et systèmes de gestion des appels.",
            journey_amigo_title: "AMIGO STAR — Spécialiste Laravel (PFE)",
            journey_amigo_desc: "Développement de la plateforme ByHome comme Projet de Fin d'Études (PFE) avec Laravel, connectant cuisiniers et clients.",
            journey_newdev_title: "NewDev MAROC — Développeur Web",
            journey_newdev_desc: "Réalisation de projets web personnels, axés sur le design responsive, l'UI/UX et l'interactivité dynamique avec JS.",
            journey_axa_title: "AXA Assurance — Stage Service Informatique",
            journey_axa_desc: "Immersion professionnelle au sein du département IT d'un leader mondial, découverte des infrastructures technologiques d'entreprise.",
            journey_degree_title: "IBEM — Diplôme de Technicien Spécialisé",
            journey_degree_desc: "Diplômé en tant que Technicien Spécialisé en Développement Informatique, avec une base solide en algorithmes et bases de données.",
            skills_label: "// 03 — Maîtrise",
            skills_title: "Mes Compétences",
            skills_fe: "Maîtrise Front-End",
            skills_be: "Puissance Back-End",
            skills_soft: "Forces",
            skills_tools: "Outils",
            soft_adapt: "Adaptabilité",
            soft_team: "Esprit d'Équipe",
            soft_learn: "Apprentissage Rapide",
            soft_problem: "Résolveur de Problèmes",
            projects_label: "// 04 — Travaux",
            projects_title: "Projets Phares",
            project_byhome_desc: "Une plateforme basée sur Laravel connectant les cuisiniers à domicile avec les clients. Comprend des fonctionnalités de réservation, de paiement en ligne et de notation.",
            project_portfolio_desc: "MyPortfolio est une application web conçue pour créer et gérer des CV professionnels de manière dynamique (HTML, CSS, JS).",
            project_clinic_desc: "Un système de gestion complet pour les cliniques dentaires, comprenant la prise de rendez-vous et la gestion des dossiers des patients.",
            btn_case_study: "Étude de Cas",
            btn_demo: "Démo",
            contact_label: "// 05 — Connexion",
            contact_title: "Travaillons Ensemble",
            contact_p: "Vous souhaitez travailler ensemble ou vous avez une question ? N'hésitez pas à me contacter via l'un des canaux ci-dessous.",
            contact_feedback: "Conseils Bienvenus : Tout conseil ou suggestion pour mon parcours professionnel sera grandement apprécié !",
            contact_name: "Nom Complet",
            contact_email: "Adresse E-mail",
            contact_message: "Votre Message",
            contact_send: "Envoyer le Message",
            case_study_problem: "Le Problème",
            case_study_solution: "La Solution",
            case_study_tech: "Technologies Utilisées",
            footer_rights: "Tous droits réservés.",
            msg_sending: "Envoi en cours...",
            msg_sent: "Message Envoyé ! ✓",
            msg_error: "Oups ! Il y a eu un problème."
        }
    };

    let currentLang = localStorage.getItem('selectedLang') || (navigator.language.startsWith('fr') ? 'fr' : 'en');
    let phrases = translations[currentLang].typing_phrases;

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update Typing Effect Phrases
        phrases = translations[lang].typing_phrases;
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;

        // Update Active Button UI
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        localStorage.setItem('selectedLang', lang);
        currentLang = lang;
        document.documentElement.lang = lang;
        document.title = translations[lang].site_title;
    }

    // Language Toggle Event Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) updateLanguage(lang);
        });
    });

    // Initialize Language
    updateLanguage(currentLang);

    // 1. Current Year for Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

    if (typingText) {
        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // 3. Navbar Scroll Effect & Active Link
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 4. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('active');
                hamburger.classList.remove('toggle');
            });
        });
    }

    // 5. Fill Skill Dots dynamically
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const dotsContainer = item.querySelector('.skill-dots');
        if (dotsContainer) {
            const level = parseInt(dotsContainer.getAttribute('data-level'));
            for (let i = 0; i < 10; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i < level) dot.classList.add('active');
                dotsContainer.appendChild(dot);
            }
        }
    });

    // 6. Video Modal Logic
    const demoBtns = document.querySelectorAll('.btn-demo');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeModal = document.querySelector('.close-modal');

    if (demoBtns.length > 0 && videoModal) {
        demoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const videoSrc = btn.getAttribute('data-video');
                if (videoSrc) {
                    modalVideo.src = videoSrc;
                    modalVideo.playbackRate = 1.5; // Made it faster for better engagement
                    videoModal.classList.add('show');
                    modalVideo.play();
                }
            });
        });

        const closeVideo = () => {
            videoModal.classList.remove('show');
            modalVideo.pause();
            modalVideo.src = '';
        };

        if (closeModal) closeModal.addEventListener('click', closeVideo);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideo();
        });
    }

    // 7. Formspree Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalHTML = btn.innerHTML;

            const formData = new FormData(contactForm);

            btn.textContent = translations[currentLang].msg_sending;
            btn.disabled = true;

            try {
                const response = await fetch('https://formspree.io/f/xpqobqel', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.textContent = translations[currentLang].msg_sent;
                    btn.style.background = '#06b6d4';
                    contactForm.reset();
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                        btn.disabled = false;
                        btn.style.background = '';
                    }, 5000);
                } else {
                    const data = await response.json();
                    alert(data.errors ? data.errors.map(error => error.message).join(", ") : translations[currentLang].msg_error);
                    btn.innerHTML = originalHTML;
                    btn.disabled = false;
                    btn.style.background = '';
                }
            } catch (error) {
                alert(translations[currentLang].msg_error);
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                btn.style.background = '';
            }

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
            }, 4000);
        });
    }

    // 8. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 9. Custom Cursor Follower
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const hoverables = document.querySelectorAll('a, button, .project-card, .skill-card, .social-btn');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // 10. 3D Tilt Effect for Project Cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });

    // 11. Case Study Modal Logic
    const caseStudyBtns = document.querySelectorAll('.btn-case-study');
    const caseModal = document.getElementById('caseStudyModal');
    const caseBody = document.getElementById('caseStudyBody');
    const closeCase = document.querySelector('.close-modal-case');

    const projectData = {
        byhome: {
            en: {
                title: "ByHome Platform",
                problem: "Local home cooks lacked a professional way to reach customers, and users wanted authentic home-cooked meals without restaurant markups.",
                solution: "Developed a full-stack Laravel platform featuring a secure booking system, dual-side dashboards (Cook/Customer), and a real-time rating system.",
                tech: ["Laravel", "PHP", "MySQL", "Blade", "CSS3"]
            },
            fr: {
                title: "Plateforme ByHome",
                problem: "Les cuisiniers à domicile manquaient d'un moyen professionnel de toucher les clients, et les utilisateurs voulaient des repas faits maison authentiques.",
                solution: "Développement d'une plateforme Laravel complète comprenant un système de réservation sécurisé, des tableaux de bord (Cuisinier/Client) et un système de notation.",
                tech: ["Laravel", "PHP", "MySQL", "Blade", "CSS3"]
            }
        },
        portfolio: {
            en: {
                title: "CV Builder App",
                problem: "Creating ATS-friendly CVs is often complex for non-tech users who need something simple and fast.",
                solution: "Built a lightweight Vanilla JS application that uses dynamic DOM manipulation and JSON data to generate professional CVs instantly.",
                tech: ["HTML5", "CSS3", "JavaScript", "JSON"]
            },
            fr: {
                title: "App Constructeur de CV",
                problem: "La création de CV compatibles ATS est souvent complexe pour les utilisateurs non techniques qui ont besoin de quelque chose de simple et rapide.",
                solution: "Construction d'une application Vanilla JS légère qui utilise la manipulation dynamique du DOM et des données JSON pour générer des CV professionnels instantanément.",
                tech: ["HTML5", "CSS3", "JavaScript", "JSON"]
            }
        },
        clinic: {
            en: {
                title: "Dental Clinic System",
                problem: "Manual scheduling in clinics leads to conflicts and poor patient record management.",
                solution: "Engineered a PHP/SQL-based management system to digitize patient records and implement a conflict-free scheduling algorithm.",
                tech: ["PHP", "SQL", "MySQL", "Admin UI"]
            },
            fr: {
                title: "Système de Clinique Dentaire",
                problem: "La planification manuelle dans les cliniques entraîne des conflits et une mauvaise gestion des dossiers des patients.",
                solution: "Conception d'un système de gestion basé sur PHP/SQL pour numériser les dossiers des patients et mettre en œuvre un algorithme de planification sans conflit.",
                tech: ["PHP", "SQL", "MySQL", "Admin UI"]
            }
        }
    };

    if (caseStudyBtns.length > 0 && caseModal) {
        caseStudyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                const data = projectData[projectId][currentLang];

                if (data) {
                    caseBody.innerHTML = `
                        <h2 class="modal-title">${data.title}</h2>
                        <div class="case-section">
                            <h4><i class="fas fa-exclamation-circle"></i> ${translations[currentLang].case_study_problem}</h4>
                            <p>${data.problem}</p>
                        </div>
                        <div class="case-section">
                            <h4><i class="fas fa-check-circle"></i> ${translations[currentLang].case_study_solution}</h4>
                            <p>${data.solution}</p>
                        </div>
                        <div class="case-section">
                            <h4><i class="fas fa-layer-group"></i> ${translations[currentLang].case_study_tech}</h4>
                            <div class="tag-list">
                                ${data.tech.map(t => `<span class="tag tag-tech">${t}</span>`).join('')}
                            </div>
                        </div>
                    `;
                    caseModal.classList.add('show');
                }
            });
        });

        const closeCaseModal = () => {
            caseModal.classList.remove('show');
        };

        if (closeCase) closeCase.addEventListener('click', closeCaseModal);
        caseModal.addEventListener('click', (e) => {
            if (e.target === caseModal) closeCaseModal();
        });
    }
});
