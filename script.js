/* LANGUAGE TOGGLE LOGIC */
const translations = {
    en: {
        logo_suffix: "UAE Portal",
        nav_home: "Dashboard",
        nav_services: "Welfare Hub",
        nav_workers: "Directory",
        nav_process: "Calendar",
        nav_resources: "Settling In",
        nav_marketplace: "Marketplace",
        nav_contact: "Careers",
        hero_badge: "Emergency Fund: 85% Funded",
        hero_img_caption: "Unity in Diversity - AFCODD 2026",
        hero_img_details: "Empowering the African Diaspora through unity and shared growth in the UAE since 2024.",
        hero_title: "Empowering the <span>African</span> Diaspora in the UAE",
        hero_desc: "Join the largest network of African professionals in the UAE. Access emergency support, legal resources, community welfare funds, and professional networking opportunities.",
        btn_hire: "Join AFCODD",
        btn_apply: "Member SOS",
        top_banner: "🇦🇪 AFCODD UAE | African Community Development Diaspora | Unity & Welfare Portal",
        map_title: "Community Hubs",
        map_subtitle: "Locate embassies, African restaurants, and community meeting points near you.",
        services_title: "Community Hub",
        services_subtitle: "Access resources and mutual aid designed for the UAE diaspora.",
        res_title: "Settling in UAE Guide",
        res_subtitle: "Essential 'One-Stop' information for moving, living, and thriving in the Emirates.",
        res_banking_title: "Banking & Finance",
        res_banking_desc: "Guides on opening accounts, credit cards for expats, and remittance tips.",
        res_housing_title: "Housing & EJARI",
        res_housing_desc: "Finding the right neighborhood, understanding DEWA, and rental contracts.",
        res_edu_title: "Education & Schools",
        res_edu_desc: "Information on school curriculum, fees, and the KHDA rating system.",
        market_title: "Community Marketplace",
        market_subtitle: "Support businesses owned by fellow diaspora members.",
        service_res_title: "Support Modules",
        service_res_std_title: "Legal Aid",
        service_res_std_desc: "Downloadable guides on UAE labor laws, visa renewals, and contract rights.",
        service_res_deep_title: "Emergency SOS",
        service_res_deep_desc: "One-tap emergency alerts to AFCODD leaders for medical or legal crises.",
        service_res_move_title: "Digital Diaspora ID",
        service_res_move_desc: "Generate your secure QR-coded ID card for event access and verification.",
        btn_book: "Book Service",
        btn_hire_staff: "Register Member",
        quick_quote: "Quick Quote",
        workers_title: "Member Directory",
        jobs_title: "Verified Jobs Board",
        jobs_subtitle: "Exclusive career opportunities posted by and for the AFCODD community.",
        workers_subtitle: "Network with verified African professionals across all Emirates.",
        filter_label: "Filter by Professional Sector:",
        process_title: "Community Calendar",
        process_subtitle: "Stay updated with upcoming sports and networking events.",
        testimonials_title: "Community Voice",
        testi_1: "AFCODD helped me navigate my labor contract when I was confused. The legal library is a lifesaver for every new arrival.",
        testi_2: "Being part of the sports tournament allowed me to make professional connections that led to my current engineering job.",
        faq_title: "Frequently Asked Questions",
        faq_q1: "How do I access the Welfare Fund? <i class=\"fas fa-chevron-down\"></i>",
        faq_a1: "Verified members can submit a request through the dashboard for emergency medical aid or repatriation support.",
        faq_q2: "What is the Digital ID used for? <i class=\"fas fa-chevron-down\"></i>",
        faq_a2: "The ID proves your membership for community events, discounts at partner establishments, and legal verification.",
        cta_title: "Ready to join the AFCODD Community?",
        cta_desc: "Start your registration today to access professional networks and welfare benefits in the UAE.",
        cta_btn: "Register Now",
        poll_title: "Community Poll",
        poll_subtitle: "Vote for our next major community event theme!",
        onboarding_title: "Join AFCODD UAE",
        btn_post_item: "Post an Item",
        modal_market_title: "Post to Marketplace",
        item_name: "Item Name",
        item_price: "Price (AED)",
        item_category: "Category",
        item_desc: "Description",
        onboarding_subtitle: "Become a verified member of the diaspora community.",
        market_search_placeholder: "Search items...",
        filter_all_categories: "All Categories",
        min_price: "Min Price",
        max_price: "Max Price",
        share_whatsapp: "Share to WhatsApp",
        footer_title: "AFCODD UAE Diaspora Development",
        footer_desc: "Empowering Africans in the UAE | Unity & Growth",
        footer_rights: "© 2026 AFCODD UAE. All Rights Reserved."
    },
    ar: {
        logo_suffix: "بوابة الإمارات",
        nav_home: "لوحة التحكم",
        nav_services: "مركز الرعاية",
        nav_workers: "الدليل",
        nav_process: "التقويم",
        nav_contact: "الوظائف",
        hero_badge: "صندوق الرعاية: اكتمل بنسبة 85%",
        hero_img_caption: "الوحدة في التنوع - أف كود 2026",
        hero_img_details: "تمكين الجالية الأفريقية من خلال الوحدة والنمو المشترك في الإمارات منذ عام 2024.",
        hero_title: "تمكين الجالية <span>الأفريقية</span> في الإمارات",
        hero_desc: "انضم إلى أكبر شبكة للمهنيين الأفارقة في الإمارات. احصل على الدعم الطارئ، الموارد القانونية، وصناديق الرعاية الاجتماعية.",
        btn_hire: "انضم إلينا",
        btn_apply: "طلب استغاثة",
        top_banner: "🇦🇪 أف كود الإمارات | تطوير الجالية الأفريقية | بوابة الوحدة والرعاية",
        map_title: "المراكز المجتمعية",
        map_subtitle: "حدد مواقع السفارات والمطاعم الأفريقية ونقاط التجمع القريبة منك.",
        services_title: "مركز الرعاية",
        services_subtitle: "الوصول إلى الموارد والمساعدات المتبادلة المصممة للجالية في الإمارات.",
        service_res_title: "وحدات الدعم",
        service_res_std_title: "المساعدة القانونية",
        service_res_std_desc: "أدلة قابلة للتحميل حول قوانين العمل في الإمارات، وتجديد التأشيرات، وحقوق العقود.",
        service_res_deep_title: "استغاثة طارئة",
        service_res_deep_desc: "تنبيهات طوارئ بنقرة واحدة لقادة أف كود في حالات الأزمات الطبية أو القانونية.",
        service_res_move_title: "الهوية الرقمية",
        service_res_move_desc: "أنشئ بطاقة هويتك الآمنة المشفرة للوصول إلى الفعاليات والتحقق.",
        btn_hire_staff: "تسجيل عضو",
        workers_title: "دليل الأعضاء",
        workers_subtitle: "تواصل مع مهنيين أفارقة معتمدين في جميع الإمارات.",
        filter_label: "تصفية حسب القطاع المهني:",
        process_title: "تقويم المجتمع",
        process_subtitle: "ابق على اطلاع بالفعاليات الرياضية وفعاليات التواصل القادمة.",
        testimonials_title: "صوت المجتمع",
        testi_1: "ساعدتني أف كود في فهم عقد عملي. المكتبة القانونية هي منقذ لكل قادم جديد.",
        testi_2: "مشاركتي في البطولة الرياضية أتاحت لي تكوين علاقات مهنية أدت إلى وظيفتي الحالية كمهندس.",
        faq_title: "الأسئلة الشائعة",
        faq_q1: "كيف يمكنني الوصول إلى صندوق الرعاية؟ <i class=\"fas fa-chevron-down\"></i>",
        faq_a1: "يمكن للأعضاء المعتمدين تقديم طلب عبر لوحة التحكم للحصول على مساعدة طبية طارئة أو دعم العودة للوطن.",
        faq_q2: "ما هي فائدة الهوية الرقمية؟ <i class=\"fas fa-chevron-down\"></i>",
        faq_a2: "تثبت الهوية عضويتك في الفعاليات المجتمعية، والخصومات، والتحقق القانوني.",
        cta_title: "هل أنت مستعد للانضمام إلى مجتمع أف كود؟",
        cta_desc: "ابدأ تسجيلك اليوم للوصول إلى الشبكات المهنية ومزايا الرعاية في الإمارات.",
        cta_btn: "سجل الآن",
        btn_post_item: "نشر سلعة",
        modal_market_title: "نشر في السوق",
        item_name: "اسم السلعة",
        item_price: "السعر (درهم)",
        item_category: "الفئة",
        item_desc: "الوصف",
        onboarding_title: "انضم إلى أف كود الإمارات",
        onboarding_subtitle: "كن عضواً معتمداً في مجتمع المغتربين.",
        footer_title: "أف كود الإمارات لتطوير الجالية",
        footer_desc: "تمكين الأفارقة في الإمارات | وحدة ونمو",
        footer_rights: "© 2026 أف كود الإمارات. جميع الحقوق محفوظة."
    }
};

const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const mainHtml = document.getElementById('mainHtml');

function setLanguage(lang) {
    mainHtml.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    mainHtml.setAttribute('lang', lang);
    langText.textContent = lang === 'ar' ? 'English' : 'العربية';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    localStorage.setItem('language', lang);
    // Reposition underline after text content changes
    setTimeout(updateActiveNav, 50);
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const currentLang = mainHtml.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
    });
}

/* MOBILE MENU */

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.onclick = () => {
        navLinks.classList.toggle('active');
    };

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });
}

/* DARK MODE TOGGLE */

const themeBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
}

/* SCROLL REVEAL */

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Performance optimization: stop observing once revealed
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

/* NAVIGATION ACTIVE LINK LOGIC */

const navLinksEls = document.querySelectorAll('.nav-links a');
let isManualScroll = false;

function moveUnderline(el) {
    const underline = document.getElementById('navUnderline');
    if (!underline || !el) return;
    underline.style.width = `${el.offsetWidth}px`;
    underline.style.left = `${el.offsetLeft}px`;
}

function updateActiveNav() {
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) moveUnderline(activeLink);
}

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Avoid observer overriding manual clicks during smooth scroll
        if (!isManualScroll && entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const targetLink = document.querySelector(`.nav-links a[href="#${id}"]`);
            
            if (targetLink) {
                navLinksEls.forEach(link => link.classList.remove('active'));
                targetLink.classList.add('active');
                moveUnderline(targetLink);
            }
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "-10% 0px -70% 0px" 
});

document.querySelectorAll('section[id]').forEach(section => {
    navObserver.observe(section);
});

// Instant Highlight on Click
navLinksEls.forEach(link => {
    link.addEventListener('click', () => {
        isManualScroll = true;
        
        // Instant visual update
        navLinksEls.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        moveUnderline(link);
        
        // Mobile menu close
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        // Unlock observer after scroll finishes
        setTimeout(() => { isManualScroll = false; }, 800);
    });
});

window.addEventListener('resize', updateActiveNav);

/* REAL-TIME JOB SEARCH */

const searchInput = document.getElementById('jobSearch');
const jobCards = document.querySelectorAll('.job-card');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        jobCards.forEach(card => {
            const isVisible = 
                card.dataset.title.toLowerCase().includes(value) || 
                card.dataset.company.toLowerCase().includes(value);
            card.classList.toggle('hide', !isVisible);
        });
    });
}

/* APPLICATION MODAL */
const applicationModalOverlay = document.getElementById('applicationModalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalJobTitleSpan = document.getElementById('modalJobTitle');
const jobApplicationForm = document.getElementById('jobApplicationForm');

let currentApplicationStep = 0;
const applicationSteps = document.querySelectorAll('#jobApplicationForm .form-step');
const applicationStepDots = document.querySelectorAll('#applicationStepIndicator .step-dot');

/* HIRING MODAL */
const hiringModalOverlay = document.getElementById('hiringModalOverlay');
const closeHiringModalBtn = document.getElementById('closeHiringModalBtn');
const hiringForm = document.getElementById('hiringForm');

let currentHiringStep = 0;
const hiringSteps = document.querySelectorAll('#hiringForm .form-step');
const stepDots = document.querySelectorAll('#hiringStepIndicator .step-dot');
const submitHiringBtn = document.getElementById('submitHiringBtn');

function populateHiringSummary() {
    const summaryDiv = document.getElementById('hiringSummary');
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const nationalitySelect = document.getElementById('preferredNationality');
    const nationality = nationalitySelect ? nationalitySelect.options[nationalitySelect.selectedIndex].text : 'N/A';
    const profession = document.getElementById('memberProfession').value;
    const locationSelect = document.getElementById('serviceLocation');
    const location = locationSelect ? locationSelect.options[locationSelect.selectedIndex].text : 'N/A';
    const emergencyName = document.getElementById('emergencyContactName').value;
    const emergencyPhone = document.getElementById('emergencyContactPhone').value;

    const data = {
        "Full Name": name,
        "Email": email,
        "Phone": phone,
        "Nationality": nationality,
        "Profession": profession,
        "Residence": location,
        "Emergency Contact": `${emergencyName} (${emergencyPhone})`
    };

    summaryDiv.innerHTML = `
        <h4 style="margin-bottom: 15px; color: var(--primary);">Review Membership Details</h4>
        ${Object.entries(data).map(([key, value]) => `
            <div class="summary-item">
                <span style="color: var(--gray);">${key}</span>
                <span style="font-weight: 500;">${value}</span>
            </div>
        `).join('')}
        <p style="font-size: 11px; color: var(--secondary); margin-top: 10px;">
            <i class="fas fa-shield-alt"></i> By completing registration, you activate your Diaspora ID and SOS benefits.
        </p>
        <div class="step-buttons" style="justify-content: flex-end; margin-top: 20px;">
            <button type="button" class="btn print-btn" id="printHiringSummaryBtn"><i class="fas fa-print"></i> Print Application</button>
        </div>
    `;
}

function showHiringStep(n) {
    if (n === 3) populateHiringSummary();
    
    hiringSteps.forEach((step, index) => {
        step.classList.toggle('active', index === n);
    });
    stepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentHiringStep = n;
}

function validateHiringStep(n) {
    const inputs = hiringSteps[n].querySelectorAll('input, select, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff4d4d';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    return valid;
}

// Event listener for next/prev buttons in Hiring Modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next-step') && e.target.closest('#hiringForm')) {
        if (validateHiringStep(currentHiringStep)) {
            showHiringStep(currentHiringStep + 1);
        }
    } else if (e.target.classList.contains('prev-step') && e.target.closest('#hiringForm')) {
        showHiringStep(currentHiringStep - 1);
    }
});

/* APPLICATION MODAL MULTI-STEP LOGIC */
function populateApplicationSummary() {
    const summaryDiv = document.getElementById('applicationSummary');
    const availabilitySelect = document.getElementById('availability');
    const availabilityText = availabilitySelect.options[availabilitySelect.selectedIndex].text;

    const data = {
        "Full Name": document.getElementById('applicantName').value,
        "Email Address": document.getElementById('applicantEmail').value,
        "Phone Number": document.getElementById('applicantPhone').value || 'N/A',
        "LinkedIn Profile": document.getElementById('applicantLinkedIn').value || 'N/A',
        "Resume": document.getElementById('applicantResume').files[0] ? document.getElementById('applicantResume').files[0].name : 'Not uploaded',
        "Cover Letter": document.getElementById('applicantCoverLetter').value || 'N/A',
        "Desired Salary (AED)": document.getElementById('desiredSalary').value || 'N/A',
        "Availability": availabilityText
    };

    summaryDiv.innerHTML = `
        <h4 style="margin-bottom: 15px; color: var(--primary);">Review Your Application</h4>
        ${Object.entries(data).map(([key, value]) => `
            <div class="summary-item">
                <span style="color: var(--gray);">${key}</span>
                <span style="font-weight: 500;">${value}</span>
            </div>
        `).join('')}
    `;
}

function showApplicationStep(n) {
    if (n === 2) populateApplicationSummary(); // Populate summary on the last step

    applicationSteps.forEach((step, index) => {
        step.classList.toggle('active', index === n);
    });
    applicationStepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === n);
    });
    currentApplicationStep = n;
}

function validateApplicationStep(n) {
    const inputs = applicationSteps[n].querySelectorAll('input, select, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff4d4d';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    return valid;
}

// Event listener for next/prev buttons in Application Modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('next-step') && e.target.closest('#jobApplicationForm')) {
        if (validateApplicationStep(currentApplicationStep)) {
            showApplicationStep(currentApplicationStep + 1);
        }
    } else if (e.target.classList.contains('prev-step') && e.target.closest('#jobApplicationForm')) {
        showApplicationStep(currentApplicationStep - 1);
    }
});

let previewUrl = null;

// Field mapping for Drafts
const DRAFT_FIELDS = ['applicantName', 'applicantEmail', 'applicantPhone', 'applicantLinkedIn', 'applicantCoverLetter', 'desiredSalary', 'availability'];

function openApplicationModal(jobTitle) {
    modalJobTitleSpan.textContent = jobTitle;
    applicationModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
    showApplicationStep(0); // Reset to first step
}

function closeApplicationModal() {
    applicationModalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    const progressContainer = document.getElementById('uploadProgressContainer');
    if (progressContainer) progressContainer.style.display = 'none';
    
    // Cleanup Preview
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    document.getElementById('resumePreview').style.display = 'none';
    document.getElementById('resumeDropZone').style.display = 'flex';
    
    jobApplicationForm.reset(); // Clear form fields
    showApplicationStep(0); // Reset to first step
}

// Close modal when clicking the close button
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeApplicationModal);
}

// Close modal when clicking outside the modal content
if (applicationModalOverlay) {
    applicationModalOverlay.addEventListener('click', (e) => {
        if (e.target === applicationModalOverlay) {
                closeApplicationModal();
            }
        });
    }

// Close modal when clicking outside the modal content for Hiring Modal
if (hiringModalOverlay) {
    hiringModalOverlay.addEventListener('click', (e) => {
        if (e.target === hiringModalOverlay) {
            closeHiringModal();
        }
    });
}

/* DRAFT SAVING LOGIC */
function initDrafts() {
    DRAFT_FIELDS.forEach(fieldId => {
        const el = document.getElementById(fieldId);
        if (el) {
            // Load existing draft
            const savedValue = localStorage.getItem(`draft_${fieldId}`);
            if (savedValue) {
                el.value = savedValue;
                // Update char counter if it's the cover letter
                if (fieldId === 'applicantCoverLetter') updateCharCount(savedValue.length);
            }

            // Save on input
            el.addEventListener('input', () => {
                localStorage.setItem(`draft_${fieldId}`, el.value);
            });
        }
    });
}

function clearDrafts() {
    DRAFT_FIELDS.forEach(fieldId => localStorage.removeItem(`draft_${fieldId}`));
}

/* CHARACTER COUNTER */
const coverLetterTextarea = document.getElementById('applicantCoverLetter');
const currentCharSpan = document.getElementById('currentChar');

function updateCharCount(count) {
    if (currentCharSpan) currentCharSpan.textContent = count;
}

if (coverLetterTextarea) {
    coverLetterTextarea.addEventListener('input', (e) => {
        updateCharCount(e.target.value.length);
    });
}

/* HIRE WORKERS INTEGRATION */
function openHiringModal(serviceName = null) {
    hiringModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalSubTitle = document.querySelector('#hiringModalContent p');
    const workforceSelect = document.getElementById('workforceType');
    
    if (serviceName) {
        // Update modal text to show specific service
        const currentLang = mainHtml.getAttribute('lang');
        const prefix = currentLang === 'ar' ? 'طلب خدمة: ' : 'Requesting: ';
        modalSubTitle.innerHTML = `${prefix}<strong style="color: var(--primary);">${serviceName}</strong>`;
        
        // Smart auto-selection of category
        const nameLower = serviceName.toLowerCase();
        if (nameLower.includes('cleaning') || nameLower.includes('janitorial') || nameLower.includes('scrubbing')) {
            workforceSelect.value = 'cleaning';
        } else if (nameLower.includes('hospitality') || nameLower.includes('hotel') || nameLower.includes('event') || nameLower.includes('steward')) {
            workforceSelect.value = 'hospitality';
        } else if (nameLower.includes('maid') || nameLower.includes('domestic') || nameLower.includes('nanny')) {
            workforceSelect.value = 'domestic';
        }
        
        // Trigger change event to update any dependent UI (like category descriptions)
        workforceSelect.dispatchEvent(new Event('change'));
    } else {
        // Fallback for general hire buttons
        const currentLang = mainHtml.getAttribute('lang');
        modalSubTitle.textContent = currentLang === 'ar' ? 'أخبرنا عن متطلبات القوى العاملة لديك.' : 'Tell us about your workforce requirements.';
    }
}

function closeHiringModal() {
    hiringModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    hiringForm.reset();
    submitHiringBtn.disabled = false; // Ensure button is re-enabled
    showHiringStep(0); // Reset to first step
}

if (closeHiringModalBtn) closeHiringModalBtn.onclick = closeHiringModal;

document.addEventListener('click', (e) => {
    const hireBtn = e.target.closest('.hire-btn');
    if (hireBtn) {
        e.preventDefault();
        // Find the service title relative to the button clicked
        const serviceCard = hireBtn.closest('.qatar-service-card, .service-card');
        const serviceTitle = serviceCard ? (serviceCard.querySelector('h4') || serviceCard.querySelector('h3')).textContent : null;
        
        openHiringModal(serviceTitle);
    }
});

/* REMOVE RESUME HANDLER */
const removeResumeBtn = document.getElementById('removeResumeBtn');
if (removeResumeBtn) {
    removeResumeBtn.addEventListener('click', () => {
        const fileInput = document.getElementById('applicantResume');
        const dropZone = document.getElementById('resumeDropZone');
        const resumePreview = document.getElementById('resumePreview');
        
        fileInput.value = ""; // Clear file
        resumePreview.style.display = 'none';
        dropZone.style.display = 'flex';
    });
}

/* DRAG AND DROP HANDLER */
const dropZone = document.getElementById('resumeDropZone');
const fileInput = document.getElementById('applicantResume');

if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            updateThumbnail(dropZone, fileInput.files[0]);
        }
    });

    ['dragover', 'dragleave', 'dragend', 'drop'].forEach(type => {
        dropZone.addEventListener(type, e => e.preventDefault());
    });

    dropZone.addEventListener('dragover', () => dropZone.classList.add('drop-zone--over'));
    ['dragleave', 'dragend'].forEach(type => {
        dropZone.addEventListener(type, () => dropZone.classList.remove('drop-zone--over'));
    });

    dropZone.addEventListener('drop', (e) => {
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            updateThumbnail(dropZone, e.dataTransfer.files[0]);
        }
        dropZone.classList.remove('drop-zone--over');
    });
}

function updateThumbnail(dropZoneElement, file) {
    let prompt = dropZoneElement.querySelector('.drop-zone__prompt');
    if (prompt) {
        prompt.textContent = `Selected: ${file.name}`;
        prompt.style.color = 'var(--secondary)';
    }

    // PDF Preview Logic
    if (file && file.type === "application/pdf") {
        const resumePreview = document.getElementById('resumePreview');
        const pdfFrame = document.getElementById('pdfFrame');
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        previewUrl = URL.createObjectURL(file);
        pdfFrame.src = previewUrl;
        resumePreview.style.display = 'block';
        dropZoneElement.style.display = 'none';
    }
}

// Handle form submission (client-side simulation)
if (jobApplicationForm) {
    jobApplicationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Final validation for the last step
        if (!validateApplicationStep(currentApplicationStep)) {
            return;
        }

        const fileInput = document.getElementById('applicantResume');
        const errorDiv = document.getElementById('formError');
        const progressContainer = document.getElementById('uploadProgressContainer');
        const progressFill = document.getElementById('uploadProgressFill');
        const file = fileInput.files[0];
        const submitApplicationBtn = document.getElementById('submitApplicationBtn');

        // Check if resume is required and not uploaded
        if (fileInput.hasAttribute('required') && !file) {
            errorDiv.textContent = "Error: Please upload your resume.";
            errorDiv.style.display = "block";
            // Highlight drop zone or file input
            const dropZone = document.getElementById('resumeDropZone');
            if (dropZone) {
                dropZone.style.borderColor = '#ff4d4d';
                setTimeout(() => dropZone.style.borderColor = '', 2000); // Revert after 2s
            }
            return;
        } else {
            errorDiv.style.display = "none";
            const dropZone = document.getElementById('resumeDropZone');
            if (dropZone) {
                dropZone.style.borderColor = '';
            }
        }


        // Custom Validation: Check File Size (Max 2MB)
        if (file && file.size > 2 * 1024 * 1024) {
            errorDiv.textContent = "Error: Resume file size must be less than 2MB.";
            errorDiv.style.display = "block";
            fileInput.style.borderColor = "#ff4d4d";
            return;
        }

        // If valid, simulate success
        errorDiv.style.display = "none";
        progressContainer.style.display = "block";
        progressFill.style.width = "0%";
        submitApplicationBtn.disabled = true;
        submitApplicationBtn.textContent = "Uploading...";
        submitApplicationBtn.querySelector('.loading-spinner').style.display = 'inline-block';

        let progress = 0;
        const uploadSimulation = setInterval(() => {
            progress += Math.floor(Math.random() * 20) + 5; 
            if (progress >= 100) {
                progress = 100;
                clearInterval(uploadSimulation);
                
                setTimeout(() => {
                    closeApplicationModal();
                    clearDrafts();
                    
                    // Email Simulation Toast
                    const toast = document.getElementById('emailToast');
                    toast.classList.add('show');
                    
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 4000);
                    
                    // Reset button state
                    submitApplicationBtn.disabled = false;
                    submitApplicationBtn.textContent = "Submit Application";
                    submitApplicationBtn.querySelector('.loading-spinner').style.display = 'none';
                }, 400);
            }
            progressFill.style.width = progress + "%";
        }, 300);
    });
}

// Handle hiring form
if (hiringForm) {
    hiringForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Final validation for the last step
        if (!validateHiringStep(currentHiringStep)) {
            return;
        }

        const spinner = submitHiringBtn.querySelector('.loading-spinner');
        submitHiringBtn.disabled = true;
        submitHiringBtn.textContent = "Sending Request...";
        spinner.style.display = 'inline-block';

        const memberName = document.getElementById('clientName').value;
        const profession = document.getElementById('memberProfession').value;
        const emergencyName = document.getElementById('emergencyContactName').value;

        // Simulate network request
        setTimeout(() => {
            closeHiringModal();
            
            // Populate and show ID Modal
            const idName = document.getElementById('idMemberName');
            if(idName) idName.textContent = memberName;
            const idRole = document.getElementById('idMemberRole');
            if(idRole) idRole.textContent = profession || "Verified Member";
            const idEmergency = document.getElementById('idEmergencyContact');
            if(idEmergency) idEmergency.textContent = emergencyName || "N/A";
            
            const idModal = document.getElementById('idModalOverlay');
            if(idModal) {
                idModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Reset form button
            if(submitHiringBtn) {
                submitHiringBtn.textContent = "Confirm & Send Request";
                spinner.style.display = 'none';
                submitHiringBtn.disabled = false;
            }
        }, 2000);
    });
}

// Print Hiring Summary
document.addEventListener('click', (e) => {
    if (e.target.id === 'printHiringSummaryBtn') {
        const summaryContent = document.getElementById('hiringSummary').outerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Hiring Request Summary</title>');
        printWindow.document.write('<link rel="stylesheet" href="style.css">'); // Include your CSS for styling
        printWindow.document.write('</head><body>');
        printWindow.document.write(summaryContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    }
});

/* DIASPORA ID MODAL HELPERS */
function closeIdModal() {
    const idModal = document.getElementById('idModalOverlay');
    if(idModal) idModal.classList.remove('active');
    document.body.style.overflow = '';
}

/* DOWNLOAD ID AS IMAGE */
async function downloadIdAsImage() {
    const card = document.querySelector('.id-card-front');
    const downloadBtn = document.getElementById('downloadIdBtn');
    if (!card || !downloadBtn) return;

    try {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        
        const canvas = await html2canvas(card, {
            backgroundColor: null,
            scale: 2, // Higher quality
            useCORS: true
        });
        
        const link = document.createElement('a');
        link.download = `AFCODD_ID_${document.getElementById('idMemberName').textContent.replace(/\s+/g, '_')}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Error generating ID card image:', error);
    } finally {
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = 'Download ID Card';
        closeIdModal();
    }
}

/* ID CARD FLIP LOGIC */
const idCardContainer = document.getElementById('idCardContainer');
if (idCardContainer) {
    idCardContainer.addEventListener('click', () => {
        idCardContainer.classList.toggle('flipped');
    });
}

/* ONBOARDING THEME TOGGLE */
const modalThemeToggle = document.getElementById('modalThemeToggle');
const hiringModal = document.querySelector('#hiringModalOverlay .application-modal');

if (modalThemeToggle && hiringModal) {
    modalThemeToggle.addEventListener('click', () => {
        hiringModal.classList.toggle('light-theme');
        const icon = modalThemeToggle.querySelector('i');
        if (hiringModal.classList.contains('light-theme')) {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
    });
}

/* COMMUNITY POLL LOGIC */
const submitVoteBtn = document.getElementById('submit-vote');
const pollVoting = document.getElementById('poll-voting');
const pollResults = document.getElementById('poll-results');

function updatePollDisplay() {
    const votes = JSON.parse(localStorage.getItem('afcodd_votes') || '{"sports":12, "business":8, "cultural":15}');
    const total = Object.values(votes).reduce((a, b) => a + b, 0);
    
    ['sports', 'business', 'cultural'].forEach(opt => {
        const perc = Math.round((votes[opt] / total) * 100);
        document.getElementById(`perc-${opt}`).textContent = perc + '%';
        document.getElementById(`bar-${opt}`).style.width = perc + '%';
    });
}

if (localStorage.getItem('afcodd_voted')) {
    pollVoting.style.display = 'none';
    pollResults.style.display = 'block';
    setTimeout(updatePollDisplay, 100);
}

if (submitVoteBtn) {
    submitVoteBtn.addEventListener('click', () => {
        const selected = document.querySelector('input[name="event-poll"]:checked');
        if (!selected) return alert("Please select an option to vote!");

        let votes = JSON.parse(localStorage.getItem('afcodd_votes') || '{"sports":12, "business":8, "cultural":15}');
        votes[selected.value]++;
        
        localStorage.setItem('afcodd_votes', JSON.stringify(votes));
        localStorage.setItem('afcodd_voted', 'true');

        // Confetti effect on first vote
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00d9ff', '#00ffb3', '#f7c35f']
            });
        }

        pollVoting.style.display = 'none';
        pollResults.style.display = 'block';
        setTimeout(updatePollDisplay, 100);
    });
}

/* CURRENCY CONVERTER LOGIC */
const currencyToggle = document.getElementById('currencyToggle');
const currencyWidget = document.getElementById('currencyWidget');
const aedInput = document.getElementById('aedAmount');
const targetSelect = document.getElementById('targetCurrency');
const convValue = document.getElementById('convValue');
const convSymbol = document.getElementById('convSymbol');

const rates = {
    UGX: 1045.50,
    KES: 35.20,
    NGN: 420.75,
    TZS: 710.00,
    RWF: 345.15
};

function convertCurrency() {
    const amount = parseFloat(aedInput.value) || 0;
    const currency = targetSelect.value;
    const result = (amount * rates[currency]).toLocaleString(undefined, { maximumFractionDigits: 0 });
    
    convValue.textContent = result;
    convSymbol.textContent = currency;
}

if (currencyToggle) {
    currencyToggle.addEventListener('click', () => {
        currencyWidget.classList.toggle('active');
    });
}

if (aedInput) aedInput.addEventListener('input', convertCurrency);
if (targetSelect) targetSelect.addEventListener('change', convertCurrency);

/* INTERACTIVE MAP LOGIC */
function initCommunityMap() {
    const mapContainer = document.getElementById('map-display');
    if (!mapContainer) return;

    // Use Leaflet.js to initialize map
    const map = L.map('map-display').setView([24.8, 54.8], 9);

    // Using CartoDB Voyager tiles which provide English labels for global locations
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Custom AFCODD Logo Icon
    const afcoddIcon = L.icon({
        iconUrl: 'assets/logo.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });

    const locations = {
        "Ugandan Embassy": [24.4443, 54.3970],
        "African Kitchen": [25.2685, 55.3090],
        "Nigerian Consulate": [25.2586, 55.3031],
        "Ethiopian Restaurant": [25.2635, 55.3340]
    };

    const markers = {};
    for (const [name, coords] of Object.entries(locations)) {
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
        const popupContent = `
            <b>${name}</b>
            <br>
            <a href="${directionsUrl}" target="_blank" style="color: var(--primary); text-decoration: none; font-size: 12px; display: inline-block; margin-top: 5px;">
                <i class="fas fa-directions"></i> Get Directions
            </a>
        `;
        markers[name] = L.marker(coords, { icon: afcoddIcon }).addTo(map).bindPopup(popupContent);
    }

    // Add GeoSearch Control
    const searchControl = new window.GeoSearch.GeoSearchControl({
        provider: new window.GeoSearch.OpenStreetMapProvider(),
        style: 'bar',
        showMarker: true,
        showPopup: true,
        marker: {
            icon: afcoddIcon,
            draggable: false,
        },
        maxMarkers: 1,
        retainZoomLevel: false,
        animateZoom: true,
        autoClose: true,
        keepResult: true
    });
    map.addControl(searchControl);

    const sidebarItems = document.querySelectorAll('.map-location-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const lat = item.getAttribute('data-lat');
            const lng = item.getAttribute('data-lng');
            const title = item.querySelector('strong').textContent;
            
            map.flyTo([lat, lng], 13);
            if(markers[title]) markers[title].openPopup();
        });
    });

    // Reset Button Logic
    const resetBtn = document.getElementById('mapResetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            map.flyTo([24.8, 54.8], 9);
            map.closePopup();
            sidebarItems.forEach(i => i.classList.remove('active'));
        });
    }
}

/* GLOBAL THEME PERSISTENCE */
const globalThemeToggle = document.getElementById('globalThemeToggle');
const savedTheme = localStorage.getItem('site-theme') || 'dark';

if (savedTheme === 'light') document.body.classList.add('light-mode');

if (globalThemeToggle) {
    globalThemeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
        const icon = globalThemeToggle.querySelector('i');
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });
}

if (document.getElementById('downloadIdBtn')) {
    document.getElementById('downloadIdBtn').onclick = downloadIdAsImage;
}

/* MARKETPLACE MODAL LOGIC */
const marketModalOverlay = document.getElementById('marketModalOverlay');
const openMarketModalBtn = document.getElementById('openMarketModalBtn');
const closeMarketModalBtn = document.getElementById('closeMarketModalBtn');
const marketPostForm = document.getElementById('marketPostForm');

if (openMarketModalBtn) {
    openMarketModalBtn.onclick = () => {
        marketModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
}

if (closeMarketModalBtn) {
    closeMarketModalBtn.onclick = () => {
        marketModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
}

if (marketPostForm) {
    marketPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('itemName')?.value || "New Item";
        const price = document.getElementById('itemPrice')?.value || "0";
        const category = document.getElementById('itemCategory')?.value || "General";
        const desc = document.getElementById('itemDesc')?.value || "";

        const marketGrid = document.querySelector('.market-grid');
        if (marketGrid) {
            const newItem = document.createElement('div');
            newItem.className = 'market-item reveal active';
            newItem.dataset.title = name;
            newItem.dataset.category = category.toLowerCase();
            newItem.dataset.price = price;
            newItem.innerHTML = `
                <div class="market-card">
                    <div class="market-img" style="background: var(--darker); display: flex; align-items: center; justify-content: center; height: 200px;">
                        <i class="fas fa-box-open fa-3x" style="color: var(--primary);"></i>
                    </div>
                    <div class="market-content">
                        <span class="market-tag">${category}</span>
                        <h4>${name}</h4>
                        <p>${desc}</p>
                        <div class="market-footer">
                            <span class="market-price">AED ${price}</span>
                            <button class="whatsapp-share-btn" title="Share on WhatsApp"><i class="fab fa-whatsapp"></i></button>
                        </div>
                    </div>
                </div>
            `;
            marketGrid.prepend(newItem);
        }

        alert("Item submitted for verification and added to the preview!");
        marketModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        marketPostForm.reset();
    });
}

/* MARKETPLACE SEARCH & FILTER LOGIC */
const marketSearchInput = document.getElementById('marketSearchInput');
const marketCategoryFilter = document.getElementById('marketCategoryFilter');
const marketMinPrice = document.getElementById('marketMinPrice');
const marketMaxPrice = document.getElementById('marketMaxPrice');

function filterMarketplace() {
    const searchQuery = marketSearchInput.value.toLowerCase();
    const category = marketCategoryFilter.value;
    const minPrice = parseFloat(marketMinPrice.value) || 0;
    const maxPrice = parseFloat(marketMaxPrice.value) || Infinity;

    document.querySelectorAll('.market-item').forEach(item => {
        const title = item.dataset.title.toLowerCase();
        const itemCategory = item.dataset.category;
        const price = parseFloat(item.dataset.price);

        const matchesSearch = title.includes(searchQuery);
        const matchesCategory = category === 'all' || itemCategory === category;
        const matchesPrice = price >= minPrice && price <= maxPrice;

        if (matchesSearch && matchesCategory && matchesPrice) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

if (marketSearchInput) {
    [marketSearchInput, marketCategoryFilter, marketMinPrice, marketMaxPrice].forEach(el => {
        el.addEventListener('input', filterMarketplace);
    });
}

/* WHATSAPP SHARE LOGIC */
document.addEventListener('click', (e) => {
    if (e.target.closest('.whatsapp-share-btn')) {
        const card = e.target.closest('.market-item');
        const text = `Check out this ${card.dataset.title} on AFCODD Marketplace for AED ${card.dataset.price}! Link: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
});

/* NATIONALITY FLAG FILTERING & COUNTS */
function updateNationalityCounts() {
    const counts = { all: 0, uganda: 0, kenya: 0, tanzania: 0, rwanda: 0, ethiopia: 0, uae: 0 };
    const members = document.querySelectorAll('.worker-card-item');
    
    members.forEach(member => {
        const nat = member.dataset.nationality;
        counts.all++;
        if (counts.hasOwnProperty(nat)) {
            counts[nat]++;
        }
    });

    Object.keys(counts).forEach(nat => {
        const countEl = document.querySelector(`.member-count[data-count-for="${nat}"]`);
        if (countEl) countEl.textContent = counts[nat];
    });
}

const nationalityFlags = document.querySelectorAll('#nationalityFlags .flag');
if (nationalityFlags.length > 0) {
    nationalityFlags.forEach(flagBtn => {
        flagBtn.addEventListener('click', () => {
            const selectedNat = flagBtn.dataset.nationality;
            
            // Update Active State
            nationalityFlags.forEach(f => f.classList.remove('active'));
            flagBtn.classList.add('active');

            // Filter Cards
            document.querySelectorAll('.worker-card-item').forEach(card => {
                if (selectedNat === 'all' || card.dataset.nationality === selectedNat) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* SOS MODAL LOGIC */
const sosModalOverlay = document.getElementById('sosModalOverlay');
const closeSosModalBtn = document.getElementById('closeSosModalBtn');

function openSosModal() {
    sosModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSosModal() {
    sosModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (closeSosModalBtn) closeSosModalBtn.onclick = closeSosModal;

document.querySelector('.btn-danger-sos')?.addEventListener('click', (e) => {
    e.preventDefault();
    openSosModal();
});

function triggerSos(type) {
    alert(`🚨 SOS ALERT SENT: ${type.toUpperCase()}\n\nYour GPS coordinates and Digital Diaspora ID have been shared with AFCODD emergency responders and local authorities in your Emirate.`);
    closeSosModal();
}

/* FAQ ACCORDION */
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        const icon = question.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

/* WORKER PROFILE MODAL LOGIC */
const profileModalOverlay = document.getElementById('profileModalOverlay');
const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-profile-btn')) {
        const btn = e.target;
        const name = btn.dataset.workerName;
        const bio = btn.dataset.bio;
        const nationality = btn.dataset.nationality;
        const skills = btn.dataset.skills.split(',');

        document.getElementById('profileName').textContent = name;
        document.getElementById('profileBio').textContent = bio;
        document.getElementById('profileNationality').textContent = nationality;
        
        const skillsContainer = document.getElementById('profileSkills');
        skillsContainer.innerHTML = '';
        skills.forEach(skill => {
            const span = document.createElement('span');
            span.textContent = skill.trim();
            skillsContainer.appendChild(span);
        });

        profileModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

if (closeProfileModalBtn) {
    closeProfileModalBtn.onclick = () => {
        profileModalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
}

/* APPLY FOR JOB */

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.apply-btn');
    if (btn) {
        e.preventDefault();
        
        // Get title from data attribute or fallback to parent card title
        const jobCard = btn.closest('.job-card');
        const jobTitle = btn.dataset.title || (jobCard ? jobCard.dataset.title : 'this position');

        openApplicationModal(jobTitle);
    }
});

/* BACK TO TOP BUTTON */

const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    backToTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

/* PROGRESS BAR */

window.addEventListener('scroll', () => {

    let winScroll =
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById("progressBar");
    if (progressBar) progressBar.style.width = scrolled + "%";

    // Header background change on scroll
    const header = document.querySelector('header');
    if (header) {
        if (winScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Show/Hide Back to Top button
    if (backToTopBtn) {
        if (winScroll > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
});

/* COMPARISON MODAL LOGIC */
const comparisonModalOverlay = document.getElementById('comparisonModalOverlay');
const packageIconTrigger = document.getElementById('packageIcon');
const closeComparisonBtn = document.getElementById('closeComparisonModalBtn');

function openComparisonModal() {
    comparisonModalOverlay.classList.add('active');
}

function closeComparisonModal() {
    comparisonModalOverlay.classList.remove('active');
}

if (packageIconTrigger) packageIconTrigger.onclick = openComparisonModal;
if (closeComparisonBtn) closeComparisonBtn.onclick = closeComparisonModal;
if (comparisonModalOverlay) {
    comparisonModalOverlay.onclick = (e) => {
        if (e.target === comparisonModalOverlay) closeComparisonModal();
    };
}

/* BUDGET SLIDER & HOURLY CALCULATION LOGIC */
function updateBudgetUI() {
    const slider = document.getElementById('budgetRange');
    const display = document.getElementById('budgetValue');
    const hourlyDisplay = document.getElementById('liveHourlyRate');
    const packageType = document.getElementById('packageType')?.value || 'full-time';
    const category = document.getElementById('workforceType')?.value;
    const warningDisplay = document.getElementById('budgetWarning');
    const warningWrapper = document.getElementById('warningWrapper');
    const tooltipDisplay = document.getElementById('budgetTooltip');
    const packageIcon = document.getElementById('packageIcon');
    const budgetLabelText = document.getElementById('budgetLabelText');
    const totalHoursDisplay = document.getElementById('totalHoursDisplay');

    const minRates = {
        cleaning: { 'full-time': 2500, 'part-time': 1500, 'daily': 150, 'hourly': 25 },
        hospitality: { 'full-time': 3200, 'part-time': 2000, 'daily': 200, 'hourly': 35 },
        domestic: { 'full-time': 1800, 'part-time': 1100, 'daily': 100, 'hourly': 20 }
    };

    const minReasons = {
        cleaning: "Covers premium eco-friendly chemicals, industrial equipment maintenance, and staff transportation logistics.",
        hospitality: "Includes professional grooming kits, specialized service training, health certifications, and safety compliance.",
        domestic: "Covers comprehensive medical insurance, standardized accommodation, and strict worker welfare protection."
    };

    if (packageIcon) {
        const icons = {
            'full-time': 'fas fa-business-time',
            'part-time': 'fas fa-user-clock',
            'daily': 'fas fa-calendar-day',
            'hourly': 'fas fa-clock'
        };
        packageIcon.className = icons[packageType];
    }

    if (budgetLabelText) {
        const labels = {
            'full-time': 'Monthly Budget Preference (Per Staff)',
            'part-time': 'Monthly Budget Preference (Per Staff)',
            'daily': 'Daily Budget Preference (Per Staff)',
            'hourly': 'Hourly Budget Preference (Per Staff)'
        };
        budgetLabelText.textContent = labels[packageType];
    }

    const hoursLookup = { 'full-time': 192, 'part-time': 96, 'daily': 8, 'hourly': 1 };
    const hoursPerUnit = hoursLookup[packageType];
    const quantity = parseInt(document.getElementById('staffQuantity')?.value) || 0;
    
    if (slider && display) {
        const val = parseInt(slider.value);
        display.textContent = val;

        // Progress Animation Gradient
        const min = parseInt(slider.min) || 1000;
        const max = parseInt(slider.max) || 10000;
        const percent = ((val - min) / (max - min)) * 100;
        
        slider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--secondary) ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%)`;
        
        const hourly = (val / hoursPerUnit).toFixed(2);
        if (hourlyDisplay) {
            hourlyDisplay.innerHTML = `<i class="fas fa-calculator"></i> Est. <strong>${hourly} AED/hour</strong> (${packageType})`;
        }

        if (totalHoursDisplay) {
            const totalHours = hoursPerUnit * quantity;
            const unitLabel = packageType.includes('time') ? 'hrs/month' : (packageType === 'daily' ? 'hrs/day' : 'hrs');
            totalHoursDisplay.innerHTML = `<i class="fas fa-hourglass-half"></i> Total Capacity: <strong>${totalHours} ${unitLabel}</strong>`;
        }

        // Validation check
        if (category && minRates[category] && warningDisplay && warningWrapper) {
            const minBudget = minRates[category][packageType];
            if (val < minBudget) {
                warningDisplay.textContent = `Note: Below recommended minimum (${minBudget} AED).`;
                warningWrapper.style.display = 'flex';
                if (tooltipDisplay) tooltipDisplay.textContent = minReasons[category];
                display.style.color = '#ff4d4d';
            } else {
                warningWrapper.style.display = 'none';
                display.style.color = 'var(--primary)';
            }
        }
    }
}

/* HANDLE SLIDER BOUNDS ON PACKAGE CHANGE */
function handlePackageChange() {
    const packageType = document.getElementById('packageType').value;
    const slider = document.getElementById('budgetRange');
    if (!slider) return;

    if (packageType === 'hourly') {
        slider.min = 15; slider.max = 300; slider.step = 1; slider.value = 35;
    } else if (packageType === 'daily') {
        slider.min = 80; slider.max = 1200; slider.step = 10; slider.value = 200;
    } else {
        slider.min = 1000; slider.max = 12000; slider.step = 100; slider.value = 3000;
    }
    updateBudgetUI();
}

// Initialize everything
function init() {
    initDrafts();
    const budgetSlider = document.getElementById('budgetRange');
    const packageSelect = document.getElementById('packageType');
    const categorySelect = document.getElementById('workforceType');
    const quantityInput = document.getElementById('staffQuantity');

    if (budgetSlider) {
        budgetSlider.addEventListener('input', updateBudgetUI);
    }
    if (packageSelect) {
        packageSelect.addEventListener('change', handlePackageChange);
    }
    if (categorySelect) {
        categorySelect.addEventListener('change', updateBudgetUI);
    }
    if (quantityInput) {
        quantityInput.addEventListener('input', updateBudgetUI);
    }
    
    updateBudgetUI(); // Initial call
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    updateNationalityCounts();
    initCommunityMap();

    // Initialize custom selects
    initCustomSelect('packageSelectWrapper', 'packageTrigger', 'packageOptionsList', 'packageMovingHighlight', 'packageType', 'packageTriggerText');
    initCustomSelect('categorySelectWrapper', 'categoryTrigger', 'categoryOptionsList', 'categoryMovingHighlight', 'workforceType', 'categoryTriggerText');

    // Global listener for SOS and Registration buttons based on data-i18n attributes
    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-i18n]');
        if (!target) return;

        const key = target.getAttribute('data-i18n');
        if (key === 'btn_apply') {
            e.preventDefault();
            openSosModal();
        } else if (key === 'cta_btn' || key === 'btn_hire') {
            e.preventDefault();
            openHiringModal();
        }
    });
}

/* REUSABLE CUSTOM SELECT LOGIC */
function initCustomSelect(wrapperId, triggerId, listId, highlightId, nativeId, triggerTextId) {
    const wrapper = document.getElementById(wrapperId);
    const trigger = document.getElementById(triggerId);
    const list = document.getElementById(listId);
    const highlight = document.getElementById(highlightId);
    const nativeSelect = document.getElementById(nativeId);
    const triggerText = document.getElementById(triggerTextId);

    if (!wrapper || !trigger || !list || !highlight) return;

    // Spotlight effect logic
    trigger.addEventListener('mousemove', (e) => {
        const rect = trigger.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        trigger.style.setProperty('--x', `${x}px`);
        trigger.style.setProperty('--y', `${y}px`);
    });

    trigger.onclick = (e) => {
        e.stopPropagation();
        // Close all other custom selects first
        document.querySelectorAll('.custom-select-wrapper').forEach(w => {
            if (w !== wrapper) w.classList.remove('active');
        });
        wrapper.classList.toggle('active');
    };

    list.querySelectorAll('.custom-option-item').forEach(option => {
        option.addEventListener('mouseenter', () => {
            highlight.style.transform = `translateY(${option.offsetTop}px)`;
            highlight.style.height = `${option.offsetHeight}px`;
        });

        option.addEventListener('click', () => {
            const val = option.dataset.value;
            nativeSelect.value = val;
            triggerText.textContent = option.textContent;
            const i18nKey = option.getAttribute('data-i18n');
            if (i18nKey) triggerText.setAttribute('data-i18n', i18nKey);
            wrapper.classList.remove('active');
            nativeSelect.dispatchEvent(new Event('change'));
        });
    });
}

window.addEventListener('click', () => {
    document.querySelectorAll('.custom-select-wrapper').forEach(w => w.classList.remove('active'));
});

init();