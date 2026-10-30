const wilayasList = [
    "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة",
    "06 - بجاية", "07 - بسكرة", "08 - بشار", "09 - البليدة", "10 - البويرة",
    "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو",
    "16 - الجزائر", "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة",
    "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة", "25 - قسنطينة",
    "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة",
    "31 - وهران", "32 - البيض", "33 - إليزي", "34 - برج بوعريريج", "35 - بومرداس",
    "36 - الطارف", "37 - تندوف", "38 - تسمسيلت", "39 - الوادي", "40 - خنشلة",
    "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة",
    "46 - عين تموشنت", "47 - غرداية", "48 - غليزان", "49 - المغير", "50 - المنيعة",
    "51 - أولاد جلال", "52 - برج باجي مختار", "53 - بني عباس", "54 - تيميمون", "55 - توقرت",
    "56 - جانت", "57 - إن صالح", "58 - إن قزام"
];

const translations = {
    ar: {
        brandName: "سيارتي بروكر",
        brandTagline: "منصة الوسيط المعتمد لقطع الغيار (الجزائر)",
        authSubtitle: "سجل الدخول أو أنشئ حساباً للوصول إلى المنصة",
        loginTab: "تسجيل الدخول",
        registerTab: "حساب جديد",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        usernameLabel: "اسم المستخدم / المؤسسة",
        loginBtn: "دخول إلى المنصة",
        registerBtn: "إنشاء الحساب وتأكيده",
        registerNote: "ملاحظة: بحسابك الجديد يمكنك تصفح الإعلانات، طلب قطع الغيار، ورفع إعلاناتك للبيع بكل أريحية.",
        authFooter: "منصة الوسيط التجاري المعتمد لحماية التعاملات المالية بالجزائر د.ج",
        navCatalog: "الإعلانات والقطع",
        navMessages: "الرسائل",
        navRatings: "التقييمات",
        navEscrow: "الضمان والوساطة",
        navAdmin: "لوحة الأدمن",
        bannerBadge: "المعاملات بالدينار الجزائري (د.ج / DZD) مع حماية 100%",
        bannerTitle: "منصة الوسيط التجاري لبيع وشراء قطع غيار السيارات في الجزائر",
        bannerDesc: "نربط البائعين والمشترين مع ضمان اعتماد الإدارة للمنشورات وتأمين المبالغ حتى المعاينة.",
        addPostBtn: "إضافة إعلان قطعة جديد للبيع",
        searchPlaceholder: "ابحث باسم القطعة، الملاحظات...",
        allBrands: "جميع الماركات",
        allWilayas: "جميع الولايات (58)",
        selectWilaya: "اختر الولاية *",
        currentUser: "المستخدم الحالي:",
        chatTitle: "المحادثات المباشرة",
        chatDesc: "التواصل المباشر بين المشترين، البائعين والإدارة",
        chatInputPlaceholder: "اكتب رسالتك هنا...",
        sendBtn: "إرسال",
        ratingsTitle: "التقييمات والمراجعات",
        ratingsDesc: "تقييم تجربة التعامل بين البائعين والمشترين لحفظ المصداقية.",
        addRatingBtn: "إضافة تقييم جديد",
        escrowTitle: "كيف يعمل نظام الضمان والوساطة المالي بالدينار الجزائري؟",
        escrowDesc: "نضمن عدم تحويل الأموال للمورد حتى يستلم المشتري القطعة وتكون متطابقة.",
        escrowStep1Title: "1. النشر والموافقة",
        escrowStep1Desc: "ينشر البائع القطعة بسعر د.ج، وتراجعها الإدارة لتغيير الحالة إلى Approved.",
        escrowStep2Title: "2. إيداع المبلغ",
        escrowStep2Desc: "يدفع المشتري القيمة + عمولة الوساطة إلى حساب منصة \"سيارتي بروكر\".",
        escrowStep3Title: "3. المعاينة والشحن",
        escrowStep3Desc: "يستلم المشتري القطعة ويعاينها للتأكد من سلامتها ومطابقتها.",
        escrowStep4Title: "4. الإفراج عن DZD",
        escrowStep4Desc: "تحول المنصة مستحقات البائع بالدينار الجزائري وتقتطع نسبة الوساطة.",
        adminTitle: "لوحة تحكم الأدمن (Admin Dashboard)",
        adminEmail: "البريد الإلكتروني للإدارة:",
        adminStatVol: "حجم التداولات عبر الوسيط",
        adminStatComm: "أرباح عمولة المنصة (8%)",
        adminStatPending: "طلبات المنشورات المعلقة",
        adminReqsTitle: "إدارة طلبات اعتماد الإعلانات (post_requests)",
        otpTitle: "التحقق من البريد الإلكتروني",
        otpDesc: "تم إرسال رمز OTP لتأكيد الحساب.",
        otpCodeLabel: "رمز التفعيل الخاص بك:",
        otpVerifyBtn: "تأكيد البريد والدخول للمنصة",
        createPostTitle: "تقديم إعلان قطعة غيار جديد",
        postTitleLabel: "عنوان القطعة *",
        postPriceLabel: "السعر بالدينار الجزائري (DZD) *",
        postDescLabel: "وصف تفصيلي للقطعة",
        createPostSubmit: "إرسال الإعلان للأدمن",
        addRatingTitle: "إضافة تقييم مستخدم",
        ratingTargetLabel: "اسم المورد أو المشتري *",
        ratingValueLabel: "التقييم (1-5 نجوم) *",
        ratingReviewLabel: "المراجعة والتعليق",
        ratingSubmit: "إرسال التقييم",
        checkoutTitle: "تفاصيل الشراء بالدينار الجزائري (DZD)",
        checkoutDesc: "حفظ المبلغ بالضمان المالي حتى استلام القطعة ومعاينتها",
        checkoutConfirmBtn: "تأكيد وحجز المبلغ بالضمان",
        buyWithEscrow: "شراء بالضمان",
        dzdCurrency: "د.ج",
        commentsTitle: "التعليقات والاستفسارات:",
        writeCommentPlaceholder: "اكتب استفسارك...",
        approvedStatus: "موافق عليه (Approved)",
        noPosts: "لا توجد إعلانات معتمدة متوافقة مع شروط البحث.",
        noRequests: "لا توجد طلبات معلقة.",
        itemPrice: "سعر القطعة:",
        protectionFee: "عمولة حماية الوسيط (8%):",
        totalAmount: "المبلغ الإجمالي المحتجز بالضمان:",
        seller: "المُعلن:",
        priceDzd: "السعر بالدينار الجزائري",
        adminRoleText: "👑 أدمن المنصة",
        userRoleText: "👤 مستخدم نشط"
    },
    en: {
        brandName: "Sayarati Broker",
        brandTagline: "Certified Spare Parts Brokerage Platform (Algeria)",
        authSubtitle: "Sign in or create an account to access the platform",
        loginTab: "Sign In",
        registerTab: "New Account",
        emailLabel: "Email Address",
        passwordLabel: "Password",
        usernameLabel: "Username / Organization",
        loginBtn: "Enter Platform",
        registerBtn: "Create & Confirm Account",
        registerNote: "Note: With a new account, you can browse listings, order spare parts, and publish items for sale.",
        authFooter: "Certified commercial brokerage platform protecting financial transactions in Algeria (DZD)",
        navCatalog: "Listings & Parts",
        navMessages: "Messages",
        navRatings: "Ratings",
        navEscrow: "Escrow & Protection",
        navAdmin: "Admin Dashboard",
        bannerBadge: "Transactions in Algerian Dinar (DZD) with 100% Protection",
        bannerTitle: "Commercial Brokerage Platform for Buying & Selling Auto Spare Parts in Algeria",
        bannerDesc: "Connecting buyers and sellers with admin verification for posts and secure escrow funding until inspection.",
        addPostBtn: "Add New Spare Part Listing",
        searchPlaceholder: "Search by part title, notes...",
        allBrands: "All Brands",
        allWilayas: "All Wilayas (58)",
        selectWilaya: "Select Wilaya *",
        currentUser: "Current User:",
        chatTitle: "Direct Messages",
        chatDesc: "Direct communication between buyers, sellers, and administration",
        chatInputPlaceholder: "Type your message here...",
        sendBtn: "Send",
        ratingsTitle: "Ratings & Reviews",
        ratingsDesc: "Rate experience between buyers and sellers to maintain trust.",
        addRatingBtn: "Add New Rating",
        escrowTitle: "How does the DZD Escrow & Protection System work?",
        escrowDesc: "We ensure funds are held safely and not released until the buyer receives and inspects the item.",
        escrowStep1Title: "1. Post & Approval",
        escrowStep1Desc: "Seller posts the item with price in DZD; admin reviews and approves it.",
        escrowStep2Title: "2. Deposit Funds",
        escrowStep2Desc: "Buyer pays the price + brokerage fee to Sayarati Broker platform escrow account.",
        escrowStep3Title: "3. Inspection & Shipping",
        escrowStep3Desc: "Buyer receives the part and inspects it for quality and matching details.",
        escrowStep4Title: "4. DZD Release",
        escrowStep4Desc: "Platform releases net funds to seller in DZD and retains brokerage fee.",
        adminTitle: "Admin Dashboard",
        adminEmail: "Admin Email:",
        adminStatVol: "Total Brokerage Volume",
        adminStatComm: "Platform Earnings (8%)",
        adminStatPending: "Pending Post Requests",
        adminReqsTitle: "Manage Post Approval Requests (post_requests)",
        otpTitle: "Email Verification",
        otpDesc: "An OTP verification code has been sent to your email.",
        otpCodeLabel: "Your Verification Code:",
        otpVerifyBtn: "Verify Email & Enter",
        createPostTitle: "Submit New Spare Part Listing",
        postTitleLabel: "Part Title *",
        postPriceLabel: "Price in DZD *",
        postDescLabel: "Detailed Description",
        createPostSubmit: "Send Listing to Admin",
        addRatingTitle: "Add User Rating",
        ratingTargetLabel: "Vendor or Buyer Name *",
        ratingValueLabel: "Rating (1-5 Stars) *",
        ratingReviewLabel: "Review & Comments",
        ratingSubmit: "Submit Rating",
        checkoutTitle: "Purchase Details in DZD",
        checkoutDesc: "Funds held securely in escrow until item delivery and inspection",
        checkoutConfirmBtn: "Confirm & Reserve Escrow Amount",
        buyWithEscrow: "Buy with Escrow",
        dzdCurrency: "DZD",
        commentsTitle: "Comments & Inquiries:",
        writeCommentPlaceholder: "Write your inquiry...",
        approvedStatus: "Approved",
        noPosts: "No approved listings matched your search criteria.",
        noRequests: "No pending requests.",
        itemPrice: "Part Price:",
        protectionFee: "Broker Protection Fee (8%):",
        totalAmount: "Total Amount Held in Escrow:",
        seller: "Seller:",
        priceDzd: "Price in Algerian Dinar",
        adminRoleText: "👑 Platform Admin",
        userRoleText: "👤 Active User"
    }
};

let currentLang = localStorage.getItem('sayarati_lang') || 'ar';
let currentTheme = localStorage.getItem('sayarati_theme') || 'dark';

const db = {
    users: [
        { id: 1, username: 'أدمن المنصة', email: 'ounnashaithem3@gmail.com', password: '123321', role: 'admin' },
        { id: 2, username: 'مورّد قطع الجزائر', email: 'vendeur@parts.dz', password: '123', role: 'user' },
        { id: 3, username: 'يوسف (مشتري)', email: 'buyer@client.dz', password: '123', role: 'user' }
    ],
    currentUserEmail: '',
    isAdmin: false,
    isLoggedIn: false,

    posts: [
        {
            id: 101,
            vendeur_name: 'مورّد قطع الجزائر',
            title: 'طقم فحمات فرامل أمامي رينو سمبول / داسيا لوغان',
            description: 'قطع غيار أصلية جديدة متوافق مع محرك 1.2 / 1.6 16v مع ضمان.',
            price: 4500,
            status: 'approved',
            created_at: '2026-10-29',
            brand: 'Renault',
            wilaya: '16 - الجزائر',
            img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 102,
            vendeur_name: 'مورّد قطع الجزائر',
            title: 'كمبروسر مكيف بيجو 308 / 208 محرك HDI',
            description: 'جديد مستورد OEM عالي الجودة مع شحن لكافة الولايات.',
            price: 38000,
            status: 'approved',
            created_at: '2026-10-30',
            brand: 'Peugeot',
            wilaya: '31 - وهران',
            img: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 103,
            vendeur_name: 'يوسف (مشتري)',
            title: 'مساعدات خلفية جولف 7 / سيات ليون',
            description: 'طقم مساعدين ألمانيا أصلية جديد بالكرتون.',
            price: 18500,
            status: 'pending',
            created_at: '2026-10-30',
            brand: 'Volkswagen',
            wilaya: '25 - قسنطينة',
            img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=400&q=80'
        }
    ],
    post_requests: [
        { id: 1, post_id: 103, status: 'pending', request_date: '2026-10-30 11:00' }
    ],
    comments: [
        { id: 1, post_id: 101, username: 'يوسف (مشتري)', content: 'هل المتوفر أصلي أم تجاري؟ وهل يوجد توصيل لولاية وهران؟', created_at: '2026-10-29' }
    ],
    ratings: [
        { id: 1, evaluator_name: 'يوسف (مشتري)', evaluated_name: 'مورّد قطع الجزائر', rating: 5, review: 'تعامل ممتاز وسريع وسلعة أصلية كما بالوصف تماماً.', created_at: '2026-10-28' }
    ],
    messages: [
        { id: 1, sender_name: 'يوسف (مشتري)', message_content: 'السلام عليكم، هل كمبروسر بيجو متوفر حالياً؟', sent_at: '10:30' }
    ],
    orders: [
        { id: 'ORD-501', title: 'طقم فحمات فرامل أمامي رينو سمبول', price: 4500, totalPaid: 4860, buyerEmail: 'buyer@client.dz', vendorName: 'مورّد قطع الجزائر', date: '2026-10-30' }
    ],
    selectedPostForCheckout: null
};

window.addEventListener('DOMContentLoaded', () => {
    populateWilayasDropdowns();
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    lucide.createIcons();
    loadSavedUsers();
    checkSavedSession();
});

function populateWilayasDropdowns() {
    const filterSelect = document.getElementById('filter-wilaya');
    const postSelect = document.getElementById('post-wilaya');

    wilayasList.forEach(w => {
        if (filterSelect) {
            const opt = document.createElement('option');
            opt.value = w;
            opt.innerText = w;
            filterSelect.appendChild(opt);
        }
        if (postSelect) {
            const opt = document.createElement('option');
            opt.value = w;
            opt.innerText = w;
            postSelect.appendChild(opt);
        }
    });
}

function toggleTheme() {
    currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
    localStorage.setItem('sayarati_theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    const htmlEl = document.documentElement;
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        htmlEl.classList.add('dark');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        htmlEl.classList.remove('dark');
        if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
    }
    lucide.createIcons();
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('sayarati_lang', lang);
    applyLanguage(lang);
    renderAuthHeader();
    renderProducts();
    renderMessages();
    renderRatings();
    renderAdminRequests();
}

function applyLanguage(lang) {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.innerText = lang === 'ar' ? 'EN' : 'عربي';
    }
}

function loadSavedUsers() {
    const stored = localStorage.getItem('sayarati_registered_users');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            parsed.forEach(u => {
                if (!db.users.find(existing => existing.email.toLowerCase() === u.email.toLowerCase())) {
                    db.users.push(u);
                }
            });
        } catch(e) {}
    }
}

function checkSavedSession() {
    const savedEmail = localStorage.getItem('sayarati_user_email');
    const authPortal = document.getElementById('auth-portal');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');

    if (savedEmail) {
        db.currentUserEmail = savedEmail;
        db.isAdmin = (savedEmail.toLowerCase() === 'ounnashaithem3@gmail.com');
        db.isLoggedIn = true;

        if (authPortal) authPortal.classList.add('hidden');
        if (mainHeader) mainHeader.classList.remove('hidden');
        if (mainContent) mainContent.classList.remove('hidden');

        if (db.isAdmin) {
            const navAdmin = document.getElementById('nav-admin');
            if (navAdmin) {
                navAdmin.classList.remove('hidden');
                navAdmin.classList.add('flex');
            }
        }
        renderAuthHeader();
        renderProducts();
        renderMessages();
        renderRatings();
        renderAdminRequests();
    } else {
        db.isLoggedIn = false;
        if (authPortal) authPortal.classList.remove('hidden');
        if (mainHeader) mainHeader.classList.add('hidden');
        if (mainContent) mainContent.classList.add('hidden');
    }
}

function toggleAuthMode(mode) {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const btnLogin = document.getElementById('tab-login-btn');
    const btnRegister = document.getElementById('tab-register-btn');

    if (mode === 'login') {
        formLogin.classList.remove('hidden');
        formRegister.classList.add('hidden');
        btnLogin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition bg-brand-600 text-white shadow";
        btnRegister.className = "flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-400 hover:text-white";
    } else {
        formLogin.classList.add('hidden');
        formRegister.classList.remove('hidden');
        btnRegister.className = "flex-1 py-2 text-xs font-bold rounded-lg transition bg-brand-600 text-white shadow";
        btnLogin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-400 hover:text-white";
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        showToast(currentLang === 'ar' ? 'الحساب غير موجود! يرجى إنشاء حساب جديد أولاً.' : 'Account not found! Please register first.', 'error');
        return;
    }

    if (user.password !== password) {
        showToast(currentLang === 'ar' ? 'كلمة المرور غير صحيحة! حاول مرة أخرى.' : 'Incorrect password! Please try again.', 'error');
        return;
    }

    db.currentUserEmail = user.email;
    db.isAdmin = (user.email.toLowerCase() === 'ounnashaithem3@gmail.com');

    document.getElementById('modal-otp').classList.remove('hidden');
}

function handleRegisterSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;

    if (email.toLowerCase() === 'ounnashaithem3@gmail.com') {
        showToast(currentLang === 'ar' ? 'هذا البريد مخصص للأدمن فقط!' : 'This email is reserved for Admin only!', 'error');
        return;
    }

    const existingUser = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
        showToast(currentLang === 'ar' ? 'هذا البريد الإلكتروني مسجل بالفعل!' : 'This email is already registered!', 'error');
        return;
    }

    const newUser = {
        id: db.users.length + 1,
        username: username,
        email: email,
        password: password,
        role: 'user'
    };

    db.users.push(newUser);
    
    const localUsers = JSON.parse(localStorage.getItem('sayarati_registered_users') || '[]');
    localUsers.push(newUser);
    localStorage.setItem('sayarati_registered_users', JSON.stringify(localUsers));

    db.currentUserEmail = email;
    db.isAdmin = false;

    document.getElementById('modal-otp').classList.remove('hidden');
}

function verifyOtpCode() {
    const inputOtp = document.getElementById('otp-input').value;
    if (!inputOtp || inputOtp.length < 4) {
        showToast(currentLang === 'ar' ? 'الرجاء إدخال رمز OTP الصحيح (8492)' : 'Please enter valid OTP code (8492)', 'error');
        return;
    }

    db.isLoggedIn = true;
    localStorage.setItem('sayarati_user_email', db.currentUserEmail);

    closeModal('modal-otp');
    document.getElementById('auth-portal').classList.add('hidden');
    document.getElementById('main-header').classList.remove('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    if (db.isAdmin) {
        document.getElementById('nav-admin').classList.remove('hidden');
        document.getElementById('nav-admin').classList.add('flex');
    }

    renderAuthHeader();
    renderProducts();
    renderMessages();
    renderRatings();
    renderAdminRequests();
    
    showToast(currentLang === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Logged in successfully!');
    
    if (db.isAdmin) switchTab('admin-dash');
    else switchTab('catalog');
}

function logoutUser() {
    localStorage.removeItem('sayarati_user_email');
    db.isLoggedIn = false;
    db.isAdmin = false;
    document.getElementById('auth-portal').classList.remove('hidden');
    document.getElementById('main-header').classList.add('hidden');
    document.getElementById('main-content').classList.add('hidden');
    showToast(currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Logged out successfully');
}

function switchTab(tabId) {
    ['catalog', 'messages', 'ratings', 'escrow-info', 'admin-dash'].forEach(id => {
        const el = document.getElementById(`view-${id}`);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById(`view-${tabId}`);
    if (target) target.classList.remove('hidden');

    ['catalog', 'messages', 'ratings', 'escrow', 'admin'].forEach(id => {
        const btn = document.getElementById(`nav-${id}`);
        if (btn) {
            if (id === tabId) btn.classList.add('text-brand-400', 'font-bold');
            else btn.classList.remove('text-brand-400', 'font-bold');
        }
    });

    if (tabId === 'messages') renderMessages();
    if (tabId === 'ratings') renderRatings();
    if (tabId === 'admin-dash') renderAdminRequests();
}

function renderAuthHeader() {
    const container = document.getElementById('auth-container');
    const t = translations[currentLang];
    const roleText = db.isAdmin ? t.adminRoleText : t.userRoleText;
    container.innerHTML = `
        <div class="flex items-center gap-2 bg-slate-800 py-1.5 px-3 rounded-xl border border-slate-700 text-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span class="text-slate-200 font-bold">${roleText}</span>
            <span class="text-slate-400 hidden sm:inline">(${db.currentUserEmail})</span>
        </div>
    `;
}

function applyFilters() {
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const keyword = document.getElementById('filter-keyword')?.value.toLowerCase().trim() || '';
    const selectedBrand = document.getElementById('filter-brand')?.value || '';
    const selectedWilaya = document.getElementById('filter-wilaya')?.value || '';
    const t = translations[currentLang];

    const filteredPosts = db.posts.filter(p => {
        const isApproved = p.status === 'approved';
        const matchesBrand = !selectedBrand || p.brand === selectedBrand;
        const matchesWilaya = !selectedWilaya || p.wilaya === selectedWilaya;
        const matchesKeyword = !keyword || 
            p.title.toLowerCase().includes(keyword) || 
            p.description.toLowerCase().includes(keyword) ||
            p.brand.toLowerCase().includes(keyword);

        return isApproved && matchesBrand && matchesWilaya && matchesKeyword;
    });

    if (filteredPosts.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center py-10 text-slate-500 text-xs">${t.noPosts}</p>`;
        return;
    }

    grid.innerHTML = filteredPosts.map(p => {
        const postComments = db.comments.filter(c => c.post_id === p.id);
        return `
            <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition shadow-lg flex flex-col justify-between">
                <div>
                    <div class="h-44 w-full relative bg-slate-950 overflow-hidden">
                        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
                        <span class="absolute top-2 right-2 bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-lg">
                            ${t.approvedStatus}
                        </span>
                        ${p.wilaya ? `
                        <span class="absolute bottom-2 right-2 bg-slate-900/90 text-amber-400 text-[10px] font-bold px-2 py-1 rounded-lg border border-slate-700 flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-3 h-3"></i> ${p.wilaya}
                        </span>` : ''}
                    </div>
                    <div class="p-4 space-y-2">
                        <div class="flex justify-between items-center text-[11px] text-slate-400">
                            <span class="font-bold text-brand-400">${p.brand}</span>
                            <span>${t.seller} ${p.vendeur_name}</span>
                        </div>
                        <h3 class="text-sm font-bold text-white line-clamp-1">${p.title}</h3>
                        <p class="text-xs text-slate-400 line-clamp-2">${p.description}</p>
                    </div>
                </div>

                <div class="p-4 pt-0 space-y-3">
                    <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                        <span class="text-slate-400 font-bold block border-b border-slate-800 pb-1">${t.commentsTitle}</span>
                        <div class="space-y-1.5 max-h-24 overflow-y-auto">
                            ${postComments.map(c => `
                                <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800/80">
                                    <span class="text-brand-400 font-bold">${c.username}:</span>
                                    <span class="text-slate-300">${c.content}</span>
                                </div>
                            `).join('')}
                        </div>
                        <form onsubmit="handleAddComment(event, ${p.id})" class="flex gap-1 pt-1">
                            <input type="text" placeholder="${t.writeCommentPlaceholder}" required class="flex-1 bg-slate-900 border border-slate-800 text-slate-200 text-[10px] rounded-lg px-2 py-1 outline-none">
                            <button type="submit" class="bg-brand-600 hover:bg-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">${t.sendBtn}</button>
                        </form>
                    </div>

                    <div class="flex items-end justify-between pt-1 border-t border-slate-800">
                        <div>
                            <span class="text-[10px] text-slate-400 block">${t.priceDzd}</span>
                            <span class="text-lg font-black text-amber-400 font-mono">${p.price.toLocaleString()} <span class="text-xs font-normal">${t.dzdCurrency}</span></span>
                        </div>
                        <button onclick="openCheckoutModal(${p.id})" class="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-3 py-2 rounded-xl transition flex items-center gap-1">
                            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-300"></i> ${t.buyWithEscrow}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function handleAddComment(e, postId) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const content = input.value.trim();
    if (!content) return;

    db.comments.push({
        id: db.comments.length + 1,
        post_id: postId,
        username: db.currentUserEmail.split('@')[0],
        content,
        created_at: new Date().toISOString().split('T')[0]
    });

    input.value = '';
    renderProducts();
    showToast(currentLang === 'ar' ? 'تمت إضافة تعليقك بنجاح' : 'Comment added successfully');
}

function renderMessages() {
    document.getElementById('chat-current-user').innerText = db.currentUserEmail;
    const container = document.getElementById('chat-messages-list');

    container.innerHTML = db.messages.map(m => `
        <div class="p-3 rounded-xl border border-slate-800 bg-slate-950 text-xs space-y-1">
            <div class="flex justify-between items-center text-[10px] text-slate-500">
                <span class="text-brand-400 font-bold">${m.sender_name}</span>
                <span>${m.sent_at}</span>
            </div>
            <p class="text-slate-200">${m.message_content}</p>
        </div>
    `).join('');
}

function handleSendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('chat-input-text');
    const val = input.value.trim();
    if (!val) return;

    db.messages.push({
        id: db.messages.length + 1,
        sender_name: db.currentUserEmail.split('@')[0],
        message_content: val,
        sent_at: new Date().toLocaleTimeString(currentLang === 'ar' ? 'ar-DZ' : 'en-US', { hour: '2-digit', minute: '2-digit' })
    });

    input.value = '';
    renderMessages();
    showToast(currentLang === 'ar' ? 'تم إرسال الرسالة' : 'Message sent successfully');
}

function renderRatings() {
    const container = document.getElementById('ratings-list-container');
    container.innerHTML = db.ratings.map(r => `
        <div class="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-2 text-xs">
            <div class="flex justify-between items-center">
                <span class="font-bold text-white">${r.evaluator_name} ➔ ${r.evaluated_name}</span>
                <span class="text-amber-400 font-bold">★ ${r.rating}/5</span>
            </div>
            <p class="text-slate-300 italic">"${r.review}"</p>
            <span class="text-[10px] text-slate-500 block">${r.created_at}</span>
        </div>
    `).join('');
}

function openAddRatingModal() {
    document.getElementById('modal-add-rating').classList.remove('hidden');
}

function handleAddRatingSubmit(e) {
    e.preventDefault();
    const target = document.getElementById('rating-target-user').value;
    const ratingVal = parseInt(document.getElementById('rating-value').value);
    const review = document.getElementById('rating-review').value;

    db.ratings.unshift({
        id: db.ratings.length + 1,
        evaluator_name: db.currentUserEmail.split('@')[0],
        evaluated_name: target,
        rating: ratingVal,
        review: review,
        created_at: new Date().toISOString().split('T')[0]
    });

    closeModal('modal-add-rating');
    renderRatings();
    showToast(currentLang === 'ar' ? 'تم تسجيل التقييم بنجاح!' : 'Rating submitted successfully!');
}

function openCreatePostModal() {
    document.getElementById('modal-create-post').classList.remove('hidden');
}

function handleCreatePostSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const price = parseFloat(document.getElementById('post-price').value);
    const wilaya = document.getElementById('post-wilaya').value;
    const description = document.getElementById('post-description').value;

    const newPostId = 100 + db.posts.length + 1;
    const newPost = {
        id: newPostId,
        vendeur_name: db.currentUserEmail.split('@')[0],
        title,
        description,
        price,
        wilaya: wilaya || '16 - الجزائر',
        status: 'pending',
        created_at: new Date().toISOString().split('T')[0],
        brand: currentLang === 'ar' ? 'قطع عامة' : 'General Parts',
        img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400&q=80'
    };

    db.posts.unshift(newPost);
    db.post_requests.unshift({
        id: db.post_requests.length + 1,
        post_id: newPostId,
        status: 'pending',
        request_date: new Date().toISOString().split('T')[0]
    });

    closeModal('modal-create-post');
    renderAdminRequests();
    showToast(currentLang === 'ar' ? 'تم إرسال إعلانك بنجاح! هو قيد المراجعة والاعتماد من الأدمن.' : 'Listing submitted! Pending admin review.');
}

function renderAdminRequests() {
    if (!db.isAdmin) return;
    const container = document.getElementById('admin-requests-list');
    const pendingReqs = db.post_requests.filter(r => r.status === 'pending');
    const t = translations[currentLang];

    let totalVol = 0;
    db.orders.forEach(o => totalVol += o.totalPaid);

    document.getElementById('admin-stat-volume').innerText = totalVol.toLocaleString() + ' ' + t.dzdCurrency;
    document.getElementById('admin-stat-commission').innerText = (totalVol * 0.08).toLocaleString() + ' ' + t.dzdCurrency;
    document.getElementById('admin-stat-pending').innerText = pendingReqs.length;

    if (db.post_requests.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">${t.noRequests}</p>`;
        return;
    }

    container.innerHTML = db.post_requests.map(r => {
        const post = db.posts.find(p => p.id === r.post_id);
        if (!post) return '';
        return `
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs">
                <div>
                    <span class="font-bold text-white text-sm block">${post.title}</span>
                    <span class="text-slate-400">${t.seller} ${post.vendeur_name} | الولاية: ${post.wilaya || 'غير محددة'} | Price: <span class="font-mono text-amber-400 font-bold">${post.price.toLocaleString()} ${t.dzdCurrency}</span></span>
                    <p class="text-slate-500 text-[11px] mt-1">${post.description}</p>
                </div>
                <div class="flex items-center gap-2 w-full md:w-auto">
                    ${r.status === 'pending' ? `
                        <button onclick="approvePostRequest(${r.id}, ${post.id})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition">موافق (Approve)</button>
                        <button onclick="rejectPostRequest(${r.id}, ${post.id})" class="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition">رفض (Reject)</button>
                    ` : `
                        <span class="font-bold text-xs ${r.status === 'accepted' ? 'text-emerald-400' : 'text-red-400'}">Status: ${r.status}</span>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

function approvePostRequest(requestId, postId) {
    const req = db.post_requests.find(r => r.id === requestId);
    const post = db.posts.find(p => p.id === postId);

    if (req && post) {
        req.status = 'accepted';
        post.status = 'approved';
        showToast(currentLang === 'ar' ? 'تمت الموافقة على الإعلان ونشره بالكتالوج العام!' : 'Listing approved and published!');
        renderProducts();
        renderAdminRequests();
    }
}

function rejectPostRequest(requestId, postId) {
    const req = db.post_requests.find(r => r.id === requestId);
    const post = db.posts.find(p => p.id === postId);

    if (req && post) {
        req.status = 'rejected';
        post.status = 'rejected';
        showToast(currentLang === 'ar' ? 'تم رفض طلب الإعلان.' : 'Listing request rejected.', 'error');
        renderProducts();
        renderAdminRequests();
    }
}

function openCheckoutModal(postId) {
    const post = db.posts.find(p => p.id === postId);
    db.selectedPostForCheckout = post;
    const t = translations[currentLang];

    const commission = post.price * 0.08;
    const total = post.price + commission;

    document.getElementById('checkout-details-body').innerHTML = `
        <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span class="text-white font-bold block">${post.title}</span>
            <span class="text-slate-400 block">${t.seller} ${post.vendeur_name} (${post.wilaya || 'غير محددة'})</span>
        </div>
        <div class="space-y-1.5 pt-2 border-t border-slate-800">
            <div class="flex justify-between text-slate-300">
                <span>${t.itemPrice}</span>
                <span class="font-mono">${post.price.toLocaleString()} ${t.dzdCurrency}</span>
            </div>
            <div class="flex justify-between text-amber-400">
                <span>${t.protectionFee}</span>
                <span class="font-mono">+${commission.toLocaleString()} ${t.dzdCurrency}</span>
            </div>
            <div class="flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800">
                <span>${t.totalAmount}</span>
                <span class="font-mono text-emerald-400">${total.toLocaleString()} ${t.dzdCurrency}</span>
            </div>
        </div>
    `;

    document.getElementById('modal-checkout').classList.remove('hidden');
}

function confirmOrderPayment() {
    const p = db.selectedPostForCheckout;
    const commission = p.price * 0.08;
    const total = p.price + commission;

    db.orders.unshift({
        id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
        title: p.title,
        price: p.price,
        totalPaid: total,
        buyerEmail: db.currentUserEmail,
        vendorName: p.vendeur_name,
        date: new Date().toISOString().split('T')[0]
    });

    closeModal('modal-checkout');
    showToast(currentLang === 'ar' ? 'تم الدفع واحتجاز المبلغ بالدينار الجزائري في الضمان المالي!' : 'Payment confirmed and funds held in escrow!');
}

function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function showToast(msg, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `p-3.5 rounded-xl text-xs font-bold text-white shadow-xl flex items-center gap-2 pointer-events-auto border transition duration-300 ${
        type === 'error' ? 'bg-red-950/90 border-red-500/80 text-red-200' : 'bg-slate-900 border-brand-500/50 text-slate-100'
    }`;
    toast.innerHTML = `
        <i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle-2'}" class="w-4 h-4 ${type === 'error' ? 'text-red-400' : 'text-emerald-400'}"></i>
        <span>${msg}</span>
    `;
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => toast.remove(), 3500);
}
