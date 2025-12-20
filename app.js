document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'fr';

    const translations = {
        fr: {
            nav_home: "Accueil",
            nav_gallery: "Galerie",
            nav_about: "À propos",
            nav_contact: "Contact",
            home_h1: "L'EXCELLENCE VISUELLE, <span class=\"slogan\">VOTRE SIGNATURE DE MARQUE.</span>",
            home_p: "FBO SERVICE transforme vos idées en designs percutants. Nous créons des identités visuelles uniques qui captivent et engagent votre audience.",
            home_cta: "Découvrir nos créations",
            gallery_title: "Notre Galerie",
            gallery_subtitle: "Explorez une sélection de nos travaux, classés par catégorie. Chaque projet est une collaboration unique avec nos clients.",
            filter_all: "Tout",
            filter_flyers: "Flyers",
            filter_logos: "Logos",
            filter_affiches: "Affiches",
            filter_bannieres: "Bannières",
            filter_reseaux: "Réseaux Sociaux",
            flyer1_title: "Flyer Entreprise",
            logo_design_title: "Logo Corporatif",
            poster1_title: "Affiche Événementielle",
            social_post_title: "Post Instagram",
            banner_ad_title: "Bannière Web",
            flyer2_title: "Flyer Promotionnel",
            logo2_title: "Logo Moderne",
            about_title: "À Propos de FBO SERVICE",
            about_h3_vision: "Notre Vision",
            about_p_vision: "Chez FBO SERVICE, nous croyons que le design est plus qu'une simple esthétique ; c'est un langage puissant qui raconte une histoire. Notre mission est de donner vie à votre vision avec créativité, passion et expertise technique.",
            about_h3_graphiste: "Le Graphiste",
            about_p_graphiste: "Dirigé par Fabrice, un designer graphique passionné avec plusieurs années d'expérience, FBO SERVICE combine l'art et la stratégie pour créer des solutions visuelles qui fonctionnent.",
            about_h3_services: "Nos Services",
            about_li_service1: "Création de logos et identité de marque",
            about_li_service2: "Conception de supports imprimés (flyers, affiches, cartes de visite)",
            about_li_service3: "Design pour les réseaux sociaux et bannières web",
            about_li_service4: "Retouches photo et montages",
            contact_title: "Contactez-nous",
            contact_subtitle: "Une question ? Un projet en tête ? Remplissez le formulaire ou contactez-nous directement. Nous serons ravis d'échanger avec vous.",
            contact_info_h3: "Informations",
            contact_info_location: "Lomé, Togo (Disponible à distance)",
            form_label_name: "Nom",
            form_label_email: "Email",
            form_label_message: "Message",
            form_submit_btn: "Envoyer",
            titre_miniature: "miniature",
            footer_copyright: "&copy; 2024 FBO SERVICE. Tous droits réservés."
        },
        en: {
            nav_home: "Home",
            nav_gallery: "Gallery",
            nav_about: "About",
            nav_contact: "Contact",
            home_h1: "VISUAL EXCELLENCE, <span class=\"slogan\">YOUR BRAND SIGNATURE.</span>",
            home_p: "FBO SERVICE transforms your ideas into impactful designs. We create unique visual identities that captivate and engage your audience.",
            home_cta: "Discover Our Work",
            gallery_title: "Our Gallery",
            gallery_subtitle: "Explore a selection of our work, sorted by category. Each project is a unique collaboration with our clients.",
            filter_all: "All",
            filter_flyers: "Flyers",
            filter_logos: "Logos",
            filter_affiches: "Posters",
            filter_bannieres: "Banners",
            filter_reseaux: "Social Media",
            flyer1_title: "Business Flyer",
            logo_design_title: "Corporate Logo",
            poster1_title: "Event Poster",
            social_post_title: "Instagram Post",
            banner_ad_title: "Web Banner",
            flyer2_title: "Promotional Flyer",
            logo2_title: "Modern Logo",
            about_title: "About FBO SERVICE",
            about_h3_vision: "Our Vision",
            about_p_vision: "At FBO SERVICE, we believe that design is more than just aesthetics; it's a powerful language that tells a story. Our mission is to bring your vision to life with creativity, passion, and technical expertise.",
            about_h3_graphiste: "The Designer",
            about_p_graphiste: "Led by Fabrice, a passionate graphic designer with several years of experience, FBO SERVICE combines art and strategy to create visual solutions that work.",
            about_h3_services: "Our Services",
            about_li_service1: "Logo creation and brand identity",
            about_li_service2: "Print media design (flyers, posters, business cards)",
            about_li_service3: "Social media and web banner design",
            about_li_service4: "Photo editing and montages",
            contact_title: "Contact Us",
            contact_subtitle: "Have a question? A project in mind? Fill out the form or contact us directly. We'd be happy to chat with you.",
            contact_info_h3: "Information",
            contact_info_location: "Lomé, Togo (Available remotely)",
            form_label_name: "Name",
            form_label_email: "Email",
            form_label_message: "Message",
            form_submit_btn: "Send",
            titre_miniature: "thumbnail",
            footer_copyright: "&copy; 2024 FBO SERVICE. All rights reserved."
        }
    };

    const contentEl = document.getElementById('content');
    const navLinks = document.querySelectorAll('.nav a');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');

    const galleryItems = [
        // flyers
        { src: 'Flyers/8mars.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/anniv.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/conference.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/fbo service.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/formation crypto.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/independance benin.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/Live tiktok.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/medecin.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/weekend.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/makup.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/cycle.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/decembre.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/dev.png', category: 'flyers', titleKey: 'flyer1_title' },  
        { src: 'Flyers/ouvert.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/1mai.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/1mai2.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/poule.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/rencontre s2.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/chatgpt.jpeg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/location de voiture.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/rapport de stage.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/rentrée.png', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/tisane.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyers/pentecote.jpg', category: 'flyers', titleKey: 'flyer1_title' },
        { src: 'Flyer3.png', category: 'flyers', titleKey: 'flyer1_title' },
        // logo
        { src: 'logo/logo-design.png', category: 'logos', titleKey: 'logo2_title' },
        { src: 'logo/logo2.png', category: 'logos', titleKey: 'logo2_title' },
        { src: 'logo/fbo logo.png', category: 'logos', titleKey: 'logo2_title' },
        { src: 'logo/logo prunel.png', category: 'logos', titleKey: 'logo2_title' },
        // Miniature
        { src: 'miniature/la fin de yomi.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/immo afro.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/revenu.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/bear market.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/home tour.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/humain vs vo3.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/la nuit.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/pornhub.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/riche.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/ventes.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/podcast.png', category: 'miniature', titleKey: 'titre_miniature' },
        { src: 'miniature/ventes 2.png', category: 'miniature', titleKey: 'titre_miniature' },
        
        
    ];
    
    const pageTemplates = {
        home: `
            <section class="page-section home-hero">
                <div class="container">
                    <h1 data-key="home_h1"></h1>
                    <p data-key="home_p"></p>
                    <a href="#gallery" class="cta-button" data-key="home_cta">Découvrir nos créations</a>
                </div>
            </section>
        `,
        gallery: `
            <section class="page-section">
                <div class="container">
                    <h2 class="section-title" data-key="gallery_title"></h2>
                    <p class="section-subtitle" data-key="gallery_subtitle"></p>
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all" data-key="filter_all">Tout</button>
                        <button class="filter-btn" data-filter="flyers" data-key="filter_flyers">Flyers</button>
                        <button class="filter-btn" data-filter="logos" data-key="filter_logos">Logos</button>
                        <button class="filter-btn" data-filter="miniature" data-key="filter_miniature">miniature</button>
                        <button class="filter-btn" data-filter="bannieres" data-key="filter_bannieres">Bannières</button>
                    </div>
                    <div class="gallery-grid"></div>
                </div>
            </section>
        `,
        about: `
            <section class="page-section">
                <div class="container">
                    <h2 class="section-title" data-key="about_title"></h2>
                    <div class="about-content">
                        <div class="about-text">
                            <h3 data-key="about_h3_vision"></h3>
                            <p data-key="about_p_vision"></p>
                            <h3 data-key="about_h3_graphiste"></h3>
                            <p data-key="about_p_graphiste"></p>
                             <h3 data-key="about_h3_services"></h3>
                            <ul>
                                <li data-key="about_li_service1"></li>
                                <li data-key="about_li_service2"></li>
                                <li data-key="about_li_service3"></li>
                                <li data-key="about_li_service4"></li>
                            </ul>
                        </div>
                        <div class="about-image">
                            
                        </div>
                    </div>
                </div>
            </section>
        `,
        contact: `
            <section class="page-section">
                <div class="container">
                     <h2 class="section-title" data-key="contact_title"></h2>
                     <p class="section-subtitle" data-key="contact_subtitle"></p>
                     <div class="contact-wrapper">
                        <div class="contact-info">
                            <h3 data-key="contact_info_h3"></h3>
                            <p><i class="fas fa-phone"></i> +228 98 22 12 74</p>
                            <p><i class="fas fa-envelope"></i> fabricefbo9@gmail.com</p>
                            <p><i class="fas fa-map-marker-alt"></i> <span data-key="contact_info_location"></span></p>
                            <div class="social-links-contact" style="margin-top:2rem; font-size:1.5rem">
                               <a href="https://wa.me/22898221274" target="_blank" aria-label="WhatsApp" style="color:white; margin-right:1rem"><i class="fab fa-whatsapp"></i></a>
                               <a href="https://www.instagram.com/fbo_le_sheild/" target="_blank" aria-label="Instagram" style="color:white; margin-right:1rem"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <form class="contact-form" action="https://formspree.io/f/your_form_id" method="POST">
                            <div class="form-group">
                                <label for="name" data-key="form_label_name">Nom</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                             <div class="form-group">
                                <label for="email" data-key="form_label_email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                             <div class="form-group">
                                <label for="message" data-key="form_label_message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn" data-key="form_submit_btn">Envoyer</button>
                        </form>
                     </div>
                </div>
            </section>
        `
    };

    function translatePage() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[currentLang] && translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });
    }

    function populateGalleryGrid() {
        const grid = document.querySelector('.gallery-grid');
        if (!grid) return;
        const langDict = translations[currentLang];
        grid.innerHTML = galleryItems.map(item => `
            <div class="gallery-item" data-category="${item.category}" data-src="${item.src}" data-title-key="${item.titleKey}">
                <img src="${item.src}" alt="${langDict[item.titleKey]}">
                <div class="overlay">${langDict[item.titleKey]}</div>
            </div>
        `).join('');
    }

    function switchLanguage(lang) {
        if (!translations[lang] || lang === currentLang) return;
        currentLang = lang;

        document.querySelectorAll('.lang-switcher span').forEach(span => {
            span.classList.toggle('active', span.dataset.lang === currentLang);
        });
        
        router();
    }

    function router() {
        const hash = window.location.hash.substring(1) || 'home';
        if (pageTemplates[hash]) {
            contentEl.innerHTML = pageTemplates[hash];
            
            if (hash === 'gallery') {
                populateGalleryGrid();
            }
            
            translatePage();
            updateActiveLink(hash);
            addPageSpecificListeners(hash);
            window.scrollTo(0, 0);
        } else {
             contentEl.innerHTML = pageTemplates['home'];
             translatePage();
             updateActiveLink('home');
        }
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }

    function updateActiveLink(page) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${page}`);
        });
    }
    
    function addPageSpecificListeners(page) {
        if (page === 'gallery') {
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    filterGallery(btn.dataset.filter);
                });
            });

            const galleryGridItems = document.querySelectorAll('.gallery-item');
            const modal = document.getElementById('modal');
            const modalImg = document.getElementById('modal-image');
            const modalCaption = document.getElementById('modal-caption');
            const closeModal = document.querySelector('.modal-close');

            galleryGridItems.forEach(item => {
                item.addEventListener('click', () => {
                    const titleKey = item.dataset.titleKey;
                    const captionText = translations[currentLang][titleKey] || '';
                    modal.style.display = 'block';
                    modalImg.src = item.dataset.src;
                    modalImg.alt = captionText;
                    modalCaption.innerHTML = captionText;
                });
            });

            closeModal.onclick = () => modal.style.display = 'none';
            window.onclick = (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            }
        }
    }

    function filterGallery(filter) {
        const items = document.querySelectorAll('.gallery-grid .gallery-item');
        items.forEach(item => {
            const show = filter === 'all' || item.dataset.category === filter;
            item.style.display = show ? 'block' : 'none';
        });
    }

    // Mobile Nav Toggle
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.lang-switcher span').forEach(span => {
        span.addEventListener('click', (e) => switchLanguage(e.target.dataset.lang));
    });

    window.addEventListener('hashchange', router);
    
    // Initial setup
    document.querySelector('.lang-switcher span[data-lang="fr"]').classList.add('active');
    router();
});