// Sample Data mapping
const studentsData = [
    {
        name: "عمر وليد ابراهيم محمد",
        class: "J1",
        roles: ["داعم دراسي"],
        message: "Never lose hope, never give up. Stand up and love what you do until you can do what you love.✨🩵",
        image: "imgs/omarW.jpeg"
    },
    {
        name: "يارا إبراهيم محمد",
        class: "J1",
        roles: ["وسيط"],
        message: "I'm always here to support you and help resolve any conflicts🤍",
        image: "imgs/yara.jpeg"
    },
    {
        name: "مريم الكيلاني",
        class: "J2",
        roles: ["سفير"],
        message: "I'm always here to help you 💗",
        image: "imgs/mariemK.jpeg"
    },
    {
        name: "اسلام احمد نصر",
        class: "J2",
        roles: ["داعم دراسي"],
        message: "Failure is the basis of success",
        image: ""
    },
    {
        name: "عمر محمد محمد",
        class: "J2",
        roles: ["سفير"],
        message: "I’m here for impact, not just a role 👑",
        image: "imgs/omar.jpeg"
    },
    {
        name: "فرح رضوان",
        class: "J3",
        roles: ["سفير", "داعم دراسي"],
        message: "Believe in yourself ,keep going , your effort will pay off🤍",
        image: "imgs/farah.jpeg"
    },
    {
        name: "انس احمد",
        class: "W3",
        roles: ["داعم مهني", "سفير"],
        message: "وان ليس للانسان الا ما سعي",
        image: "imgs/anas.jpeg"
    },
    {
        name: "مهند محمد السيد",
        class: "J3",
        roles: ["وسيط"],
        message: "Don't worry, we are here to help you at all times.",
        image: "imgs/mohanad.jpeg"
    },
    {
        name: "سما محمد عبد النبي",
        class: "J4",
        roles: ["وسيط"],
        message: "The mediator is always by your side 🫵🏻💝",
        image: "imgs/sama.jpeg"
    },
    {
        name: "سما محمد ذكي",
        class: "J4",
        roles: ["سفير"],
        message: "Your ambassador is always by your side",
        image: "imgs/samaZ.jpeg"
    },
    {
        name: "محمد عباس محمد",
        class: "J4",
        roles: ["وسيط"],
        message: "Don't forget God's presence.",
        image: "imgs/abbas.jpeg"
    },
    {
        name: "جني علي عبدالله",
        class: "J4",
        roles: ["داعم مهني"],
        message: "“Wishing you all the best in your journey. Work hard, believe in yourselves, and you will achieve great things.”🌞✨",
        image: "imgs/jana.jpeg"
    },
    {
        name: "مريم محمد فتحي",
        class: "J4",
        roles: ["سفير", "داعم دراسي"],
        message: "I am here to provide simple explanations of any subject you don't understand, and I am an ambassador for anyone who is confused about the school",
        image: "imgs/mariem.jpeg"
    },
    {
        name: "اروى عمر",
        class: "J5",
        roles: ["وسيط"],
        message: "im here to help you solve your problem 🩵",
        image: "imgs/arwa.jpeg"
    },
    {
        name: "عمار عمر",
        class: "J5",
        roles: ["داعم دراسي"],
        message: "Iam here to help you and explain any subject with steps easy for understand 🤍",
        image: ""
    },
    {
        name: "عبد المنعم محمد عبد المنعم",
        class: "J5",
        roles: ["وسيط"],
        message: "أنا موجود معاكم علشان نوصل لبعض أي معلومة أو مساعدة بالشكل اللي يريحكم 🤝 وإن شاء الله نساعد بعض ونبقى دايما أحسن 💪 اللي يهمنا إنكم تبقوا دايمن مرتاحين وحاسين انكم وسط اخواتكم وفي بيتكم التاني ومتقدمين دايما ان شاء الله 💗",
        image: ""
    },
    {
        name: "إيهاب شريف إيهاب",
        class: "J6",
        roles: ["داعم دراسي"],
        message: "Believe you can and you're halfway there",
        image: ""
    },
    {
        name: "ياسين اسلام",
        class: "J6",
        roles: ["سفير"],
        message: "“Together we can achieve more.”",
        image: "imgs/yassen.jpeg"
    },
    {
        name: "جنى رضا",
        class: "W1",
        roles: ["داعم دراسي", "سفير"],
        message: "Don't be shy if you need help ✨️🌷🤍",
        image: "imgs/janaR.jpeg"
    },
    {
        name: "مريم ممدوح",
        class: "W1",
        roles: ["وسيط", "داعم دراسي"],
        message: "\"With God, every hard path is possible, and every distant dream feels near. He sees your heart and never abandons it☺️✨.\"",
        image: "imgs/mariemM.jpeg"
    },
    {
        name: "محمد صابر عبد المجيد (صابر)",
        class: "W1",
        roles: ["سفير"],
        message: "Your Ambassador Saber Always by Your Side. ✨",
        image: "imgs/saber.jpeg"
    },
    {
        name: "تسنيم إمام",
        class: "W2",
        roles: ["سفير", "داعم دراسي"],
        message: "Do everything that will prevent you from saying, 'I wish that had happened.'<br>Be proud of your effort<br>Admit your mistake<br>Remember me ever forget me never ✨",
        image: ""
    },
    {
        name: "محمود محمد محمود",
        class: "W3",
        roles: ["سفير", "داعم مهني"],
        message: "I wish you all great success and prosperity🪬",
        image: ""
    },
    {
        name: "سيف اشرف جابر",
        class: "W3",
        roles: ["داعم مهني"],
        message: "Do what you love and don’t worry about what people say✨",
        image: ""
    },
    {
        name: "سيف محمد يوسف",
        class: "W3",
        roles: ["داعم مهني"],
        message: "أنا هنا علشان أساعدكم، ونفكر مع بعض، وندعم بعض. لو عندك حلم… ابدأ اسأل، اتعلم، واشتغل عليه من النهارده.\nافتكروا دايمًا: المستقبل بيتبني بخطوة صغيرة نبدأها دلوقتي.",
        image: "imgs/sief.jpeg"
    },
    {
        name: "يُمنىٰ السيد مُحمد",
        class: "W3",
        roles: ["داعم دراسى"],
        message: "﴿يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ﴾",
        image: ""
    },
    {
        name: "ادهم محمد رضوان",
        class: "W4",
        roles: ["سفير"],
        message: "In the right environment, everyone has the chance to grow and shine. 🌱✨",
        image: "imgs/adham.jpeg"
    },
    {
        name: "يحيى قطب ابراهيم",
        class: "W4",
        roles: ["وسيط", "سفير"],
        message: "قال الله تعالى: (لَا خَيْرَ فِي كَثِيرٍ مِّن نَّجْوَاهُمْ إِلَّا مَنْ أَمَرَ بِصَدَقَةٍ أَوْ مَعْرُوفٍ أَوْ إِصْلَاحٍ بَيْنَ النَّاسِ).",
        image: ""
    },
    {
        name: "البشمهنـدس فَـارِس مُحمـد",
        class: "W5",
        roles: ["سفير", "وسيط", "داعم دراسي", "داعم مهني"],
        message: "ممكن تسألني في المنهج وبرا المنهج ☝🏻❤️",
        roleMessages: {
            "داعم دراسي": "ممكن تسألني في المنهج وبرا المنهج ☝🏻❤️",
            "سفير": "{وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ}",
            "وسيط": "﴿ إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ ۚ وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُرْحَمُونَ﴾",
            "داعم مهني": "﴿ وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ﴾"
        },
        image: "imgs/fares.jpeg"
    },
    {
        name: "ادهم عمرو",
        class: "W5",
        roles: ["داعم مهني", "سفير"],
        message: "",
        image: ""
    },
    {
        name: "أحمد غلاب",
        class: "W5",
        roles: ["سفير", "وسيط"],
        message: "فَأَمَّا مَن طَغَىٰ (٣٧) وَءَاثَرَ ٱلۡحَيَوٰةَ ٱلدُّنۡيَا (٣٨) فَإِنَّ ٱلۡجَحِيمَ هِيَ ٱلۡمَأۡوَىٰ (٣٩) وَأَمَّا مَنۡ خَافَ مَقَامَ رَبِّهِۦ وَنَهَى ٱلنَّفۡسَ عَنِ ٱلۡهَوَىٰ (٤٠) فَإِنَّ ٱلۡجَنَّةَ هِيَ ٱلۡمَأۡوَىٰ (٤١)",
        image: "imgs/ghalab.jpeg"
    },
    {
        name: "زياد حمدي",
        class: "W5",
        roles: ["سفير", "داعم دراسي"],
        message: "",
        image: ""
    },
    {
        name: "يوسف السيد احمد",
        class: "W5",
        roles: ["سفير", "وسيط"],
        message: "Think Smarter Not Harder And Shine Bright Like A Diamond 💎",
        image: ""
    },
    {
        name: "اياد احمد",
        class: "W6",
        roles: ["داعم مهني"],
        message: "Stars can't shine without darkness",
        image: "imgs/eyad.jpeg"
    },
    {
        name: "سعاد ابراهيم \"سيرو\"",
        class: "W6",
        roles: ["سفير", "داعم دراسي"],
        message: "The beginning is the middle of the road, so I am here to always make it easier and better for you with a smile🤍🤗",
        image: ""
    },
    {
        name: "علي احمد كمال",
        class: "W6",
        roles: ["سفير", "داعم مهني"],
        message: "Always remember: No pressure, no diamonds",
        image: ""
    },
    {
        name: "ملك احمد",
        class: "W6",
        roles: ["وسيط"],
        message: "As a mediator in our PHP group, I encourage everyone to share ideas and help each other so we can all learn and succeed together.",
        image: ""
    },
    {
        name: "حمزه خالد",
        class: "W6",
        roles: ["وسيط", "داعم مهنى"],
        message: "",
        image: ""
    },
    {
        name: "عمار هاني",
        class: "S1",
        roles: ["سفير"],
        message: "Don't give up, you deserve another chance to prove yourself 🫂💞",
        image: ""
    },
    {
        name: "عمر احمد إبراهيم بيومي",
        class: "S2",
        roles: ["سفير", "وسيط"],
        message: "“A word of support today may create someone's success tomorrow.” ✨",
        image: "imgs/bayomy.jpeg"
    },
    {
        name: "منه الله حسن",
        class: "S2",
        roles: ["سفير", "وسيط"],
        message: "بحب وجودي هنا علشان بيخلينا نساعد بعض اذا كان ف ماده صعبه بالنسبه لحد فينا او في تأهلنا لحاجه معينه ونحل المشاكل لبعض ونعرف بعض ع الاماكن❤️🩹",
        image: ""
    },
    {
        name: "ميار محمد السيد",
        class: "S4",
        roles: ["سفير", "داعم دراسي"],
        message: "وجودي معاكم علشان نتعلم من بعض و توصلكم اي معلومة أو مساعده بالشكل اللي ترتاحوا ليه اللي يهمنا انكم تبقوا شطورين دايما 💗.",
        image: "imgs/mayar.jpeg"
    },
    {
        name: "جنى عمرو",
        class: "S5",
        roles: ["سفير", "وسيط"],
        message: "I’m here to help, support you whenever you need it and we are all here to grow together",
        image: ""
    }
];

const rolesSection = document.getElementById('roles-section');
const studentsSection = document.getElementById('students-section');
const roleCards = document.querySelectorAll('.role-card');
const mainHero = document.querySelector('.hero');
const navHome = document.getElementById('nav-home');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

// Filter Buttons Containers
const roleFiltersContainer = document.getElementById('role-filters');
const divisionFiltersContainer = document.getElementById('division-filters');
const gradeFiltersContainer = document.getElementById('grade-filters');
const studentsGrid = document.getElementById('students-grid');
const noResults = document.getElementById('no-results');

// State
let currentRole = 'all';
let currentDivision = 'all';
let currentGrade = 'all';

// Initial state, show roles
rolesSection.style.display = 'grid';

// Handle click on Home Page Role Card AND Nav Links
function navigateToRole(role) {
    currentRole = role;

    // Hide roles and hero, show students
    rolesSection.style.display = 'none';
    mainHero.classList.add('hidden');
    studentsSection.classList.add('active');

    // Update active states
    updateActiveButton(roleFiltersContainer, currentRole);
    updateNavLinksState(currentRole);

    // Reset division to all
    currentDivision = 'all';
    currentGrade = 'all';
    updateActiveButton(divisionFiltersContainer, 'all');
    updateGradeButtons('all');

    renderStudents();
}

roleCards.forEach(card => {
    card.addEventListener('click', () => {
        navigateToRole(card.getAttribute('data-role'));
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateToRole(link.getAttribute('data-nav-role'));
        mainNav.classList.remove('nav-open'); // Close mobile menu if open
    });
});

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open');
});

// Navigate back to Home
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    studentsSection.classList.remove('active');
    mainNav.classList.remove('nav-open'); // Close mobile menu if open

    // Reset active role to all
    currentRole = 'all';
    updateActiveButton(roleFiltersContainer, ''); // Clear all active states for home page
    updateNavLinksState('all');

    setTimeout(() => {
        rolesSection.style.display = 'grid';
        mainHero.classList.remove('hidden');
    }, 50);
});

// Helper: Update active state on Nav Links
function updateNavLinksState(role) {
    navLinks.forEach(link => {
        if (link.getAttribute('data-nav-role') === role) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Helper: Update active state on button groups
function updateActiveButton(container, value) {
    const buttons = container.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-role') === value ||
            btn.getAttribute('data-division') === value ||
            btn.getAttribute('data-grade') === value) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Role Filters handling inside students page
roleFiltersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        currentRole = e.target.getAttribute('data-role');
        updateActiveButton(roleFiltersContainer, currentRole);

        // Ensure section is shown if applying from nav when on home page
        if (!studentsSection.classList.contains('active')) {
            rolesSection.style.display = 'none';
            mainHero.classList.add('hidden');
            studentsSection.classList.add('active');

            // Reset division to all
            currentDivision = 'all';
            currentGrade = 'all';
            updateActiveButton(divisionFiltersContainer, 'all');
            updateGradeButtons('all');
        }

        renderStudents();
    }
});

// Navigation Bar Scroll Logic (Hide on scroll down, show on scroll up)
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80 && !mainNav.classList.contains('nav-open')) {
        // Scrolling down & passed the top area
        mainNav.classList.add('nav-hidden');
    } else {
        // Scrolling up
        mainNav.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

// Division Filters handling
divisionFiltersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        currentDivision = e.target.getAttribute('data-division');
        updateActiveButton(divisionFiltersContainer, currentDivision);

        // Reset grade choice when division changes
        currentGrade = 'all';

        // Update grade buttons based on division
        updateGradeButtons(currentDivision);
        renderStudents();
    }
});

// Grade Filters handling (dynamically generated)
gradeFiltersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        currentGrade = e.target.getAttribute('data-grade');
        updateActiveButton(gradeFiltersContainer, currentGrade);
        renderStudents();
    }
});

function updateGradeButtons(division) {
    gradeFiltersContainer.innerHTML = '';

    if (division === 'all') {
        gradeFiltersContainer.classList.add('hidden');
        return;
    }

    gradeFiltersContainer.classList.remove('hidden');

    // Add "All Grades" button for this division
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.setAttribute('data-grade', 'all');
    allBtn.textContent = 'كل فصول ' + division;
    gradeFiltersContainer.appendChild(allBtn);

    // Add buttons 6 down to 1
    for (let i = 6; i >= 1; i--) {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        const gradeValue = division + i; // e.g., J6, W5
        btn.setAttribute('data-grade', gradeValue);
        btn.textContent = gradeValue;
        gradeFiltersContainer.appendChild(btn);
    }
}

function renderStudents() {
    // Filter Data
    let filteredStudents = studentsData.filter(student => {
        const matchRole = currentRole === 'all' || student.roles.includes(currentRole);

        let matchClass = true;
        if (currentDivision !== 'all') {
            if (currentGrade !== 'all') {
                // Must match specific grade, e.g., "J4", "W5"
                matchClass = student.class === currentGrade;
            } else {
                // Return all classes starting with division letter, e.g., "J", "W"
                matchClass = student.class.startsWith(currentDivision);
            }
        }

        return matchRole && matchClass;
    });

    // Custom Sorting for Team Leader Fares Mohammed
    // If exploring "سفير", "داعم دراسي", or "all", bubble Fares to the top
    if (currentRole === 'سفير' || currentRole === 'داعم دراسي' || currentRole === 'all') {
        filteredStudents.sort((a, b) => {
            if (a.name === "البشمهنـدس فَـارِس مُحمـد") return -1;
            if (b.name === "البشمهنـدس فَـارِس مُحمـد") return 1;
            return 0;
        });
    }

    // Populate DOM
    studentsGrid.innerHTML = '';

    if (filteredStudents.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filteredStudents.forEach(student => {
            // Determine Displayed Roles
            // If viewing a specific role, only show that role. Otherwise, show all.
            let displayedRoles = currentRole === 'all' ? student.roles.join(' - ') : currentRole;

            // Fares Display Customization
            // Moved to the top of the card generation loop
            let isTeamLeader = false;
            let displayTitle = student.name;
            let currentMessage = student.message;

            if (student.name === "البشمهنـدس فَـارِس مُحمـد") {
                displayTitle = "البشمهنـدس فَـارِس مُحمـد";
                isTeamLeader = true;

                if (currentRole === 'all') {
                    displayedRoles = "سفير - داعم دراسي";
                    currentMessage = student.roleMessages["داعم دراسي"];
                } else if (student.roleMessages && student.roleMessages[currentRole]) {
                    currentMessage = student.roleMessages[currentRole];
                }
            }

            const cardEl = document.createElement('div');
            cardEl.className = 'student-card' + (isTeamLeader ? ' team-leader-card' : '');
            cardEl.style.backgroundImage = `url('${student.image}')`;

            // Staggered entry animation delay
            const index = filteredStudents.indexOf(student);
            cardEl.style.animationDelay = `${index * 0.05}s`;
            cardEl.style.animation = 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both';

            // Optional Team Leader Badge
            const teamLeaderHtml = isTeamLeader
                ? `<div class="team-leader-badge"><i class="fa-solid fa-crown"></i> Team Leader</div>`
                : '';

            // Text info bottom
            cardEl.innerHTML = `
                ${teamLeaderHtml}
                <div class="student-info">
                    <div class="name-badge-container">
                        <div class="student-class-badge">${student.class}</div>
                        <h3 class="student-name">${displayTitle}</h3>
                    </div>
                    <div class="role-container">
                        <div class="student-role">${displayedRoles}</div>
                    </div>
                    <blockquote class="student-message">${currentMessage}</blockquote>
                </div>
            `;
            studentsGrid.appendChild(cardEl);
        });
    }
}

// Copy Phone Number Logic
document.getElementById('copy-phone').addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = '01203927960';
    navigator.clipboard.writeText(phoneNumber).then(() => {
        // Simple visual feedback
        const btn = document.getElementById('copy-phone');
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.style.color = '#25D366';

        setTimeout(() => {
            btn.innerHTML = originalIcon;
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
