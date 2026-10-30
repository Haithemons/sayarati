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
    lucide.createIcons();
    loadSavedUsers();
    checkSavedSession();
});

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
        btnLogin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition bg-brand-600 text-white";
        btnRegister.className = "flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-400 hover:text-white";
    } else {
        formLogin.classList.add('hidden');
        formRegister.classList.remove('hidden');
        btnRegister.className = "flex-1 py-2 text-xs font-bold rounded-lg transition bg-brand-600 text-white";
        btnLogin.className = "flex-1 py-2 text-xs font-bold rounded-lg transition text-slate-400 hover:text-white";
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        showToast('الحساب غير موجود! يرجى إنشاء حساب جديد أولاً.', 'error');
        return;
    }

    if (user.password !== password) {
        showToast('كلمة المرور غير صحيحة! حاول مرة أخرى.', 'error');
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
        showToast('هذا البريد مخصص للأدمن فقط!', 'error');
        return;
    }

    const existingUser = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
        showToast('هذا البريد الإلكتروني مسجل بالفعل!', 'error');
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
        showToast('الرجاء إدخال رمز OTP الصحيح (8492)', 'error');
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
    
    showToast('تم تسجيل الدخول بنجاح!');
    
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
    showToast('تم تسجيل الخروج بنجاح');
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
    container.innerHTML = `
        <div class="flex items-center gap-2 bg-slate-800 py-1.5 px-3 rounded-xl border border-slate-700 text-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span class="text-slate-200 font-bold">${db.isAdmin ? '👑 أدمن المنصة' : '👤 مستخدم نشط'}</span>
            <span class="text-slate-400 hidden sm:inline">(${db.currentUserEmail})</span>
        </div>
    `;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const approvedPosts = db.posts.filter(p => p.status === 'approved');

    if (approvedPosts.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center py-10 text-slate-500 text-xs">لا توجد إعلانات معتمدة متوفرة حالياً.</p>`;
        return;
    }

    grid.innerHTML = approvedPosts.map(p => {
        const postComments = db.comments.filter(c => c.post_id === p.id);
        return `
            <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition shadow-lg flex flex-col justify-between">
                <div>
                    <div class="h-44 w-full relative bg-slate-950 overflow-hidden">
                        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
                        <span class="absolute top-2 right-2 bg-emerald-500/90 text-slate-950 text-[10px] font-bold px-2 py-1 rounded-lg">
                            موافق عليه (Approved)
                        </span>
                    </div>
                    <div class="p-4 space-y-2">
                        <div class="flex justify-between items-center text-[11px] text-slate-400">
                            <span class="font-bold text-brand-400">${p.brand}</span>
                            <span>المُعلن: ${p.vendeur_name}</span>
                        </div>
                        <h3 class="text-sm font-bold text-white line-clamp-1">${p.title}</h3>
                        <p class="text-xs text-slate-400 line-clamp-2">${p.description}</p>
                    </div>
                </div>

                <div class="p-4 pt-0 space-y-3">
                    <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                        <span class="text-slate-400 font-bold block border-b border-slate-800 pb-1">التعليقات والاستفسارات:</span>
                        <div class="space-y-1.5 max-h-24 overflow-y-auto">
                            ${postComments.map(c => `
                                <div class="bg-slate-900/80 p-1.5 rounded border border-slate-800/80">
                                    <span class="text-brand-400 font-bold">${c.username}:</span>
                                    <span class="text-slate-300">${c.content}</span>
                                </div>
                            `).join('')}
                        </div>
                        <form onsubmit="handleAddComment(event, ${p.id})" class="flex gap-1 pt-1">
                            <input type="text" placeholder="اكتب استفسارك..." required class="flex-1 bg-slate-900 border border-slate-800 text-slate-200 text-[10px] rounded-lg px-2 py-1 outline-none">
                            <button type="submit" class="bg-brand-600 hover:bg-brand-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg">إرسال</button>
                        </form>
                    </div>

                    <div class="flex items-end justify-between pt-1 border-t border-slate-800">
                        <div>
                            <span class="text-[10px] text-slate-400 block">السعر بالدينار الجزائري</span>
                            <span class="text-lg font-black text-amber-400 font-mono">${p.price.toLocaleString()} <span class="text-xs font-normal">د.ج</span></span>
                        </div>
                        <button onclick="openCheckoutModal(${p.id})" class="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-3 py-2 rounded-xl transition flex items-center gap-1">
                            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-300"></i> شراء بالضمان
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
    showToast('تمت إضافة تعليقك بنجاح');
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
        sent_at: new Date().toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })
    });

    input.value = '';
    renderMessages();
    showToast('تم إرسال الرسالة');
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
    showToast('تم تسجيل التقييم بنجاح!');
}

function openCreatePostModal() {
    document.getElementById('modal-create-post').classList.remove('hidden');
}

function handleCreatePostSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const price = parseFloat(document.getElementById('post-price').value);
    const description = document.getElementById('post-description').value;

    const newPostId = 100 + db.posts.length + 1;
    const newPost = {
        id: newPostId,
        vendeur_name: db.currentUserEmail.split('@')[0],
        title,
        description,
        price,
        status: 'pending',
        created_at: new Date().toISOString().split('T')[0],
        brand: 'قطع عامة',
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
    showToast('تم إرسال إعلانك بنجاح! هو قيد المراجعة والاعتماد من الأدمن.');
}

function renderAdminRequests() {
    if (!db.isAdmin) return;
    const container = document.getElementById('admin-requests-list');
    const pendingReqs = db.post_requests.filter(r => r.status === 'pending');

    let totalVol = 0;
    db.orders.forEach(o => totalVol += o.totalPaid);

    document.getElementById('admin-stat-volume').innerText = totalVol.toLocaleString() + ' د.ج';
    document.getElementById('admin-stat-commission').innerText = (totalVol * 0.08).toLocaleString() + ' د.ج';
    document.getElementById('admin-stat-pending').innerText = pendingReqs.length;

    if (db.post_requests.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-500 py-4 text-center">لا توجد طلبات معلقة.</p>`;
        return;
    }

    container.innerHTML = db.post_requests.map(r => {
        const post = db.posts.find(p => p.id === r.post_id);
        if (!post) return '';
        return `
            <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs">
                <div>
                    <span class="font-bold text-white text-sm block">${post.title}</span>
                    <span class="text-slate-400">المُعلن: ${post.vendeur_name} | السعر: <span class="font-mono text-amber-400 font-bold">${post.price.toLocaleString()} د.ج</span></span>
                    <p class="text-slate-500 text-[11px] mt-1">${post.description}</p>
                </div>
                <div class="flex items-center gap-2 w-full md:w-auto">
                    ${r.status === 'pending' ? `
                        <button onclick="approvePostRequest(${r.id}, ${post.id})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition">موافق (Approve)</button>
                        <button onclick="rejectPostRequest(${r.id}, ${post.id})" class="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition">رفض (Reject)</button>
                    ` : `
                        <span class="font-bold text-xs ${r.status === 'accepted' ? 'text-emerald-400' : 'text-red-400'}">تمت المعالجة: ${r.status}</span>
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
        showToast('تمت الموافقة على الإعلان ونشره بالكتالوج العام!');
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
        showToast('تم رفض طلب الإعلان.', 'error');
        renderProducts();
        renderAdminRequests();
    }
}

function openCheckoutModal(postId) {
    const post = db.posts.find(p => p.id === postId);
    db.selectedPostForCheckout = post;

    const commission = post.price * 0.08;
    const total = post.price + commission;

    document.getElementById('checkout-details-body').innerHTML = `
        <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
            <span class="text-white font-bold block">${post.title}</span>
            <span class="text-slate-400 block">المُعلن: ${post.vendeur_name}</span>
        </div>
        <div class="space-y-1.5 pt-2 border-t border-slate-800">
            <div class="flex justify-between text-slate-300">
                <span>سعر القطعة:</span>
                <span class="font-mono">${post.price.toLocaleString()} د.ج</span>
            </div>
            <div class="flex justify-between text-amber-400">
                <span>عمولة حماية الوسيط (8%):</span>
                <span class="font-mono">+${commission.toLocaleString()} د.ج</span>
            </div>
            <div class="flex justify-between text-white font-bold text-sm pt-2 border-t border-slate-800">
                <span>المبلغ الإجمالي المحتجز بالضمان:</span>
                <span class="font-mono text-emerald-400">${total.toLocaleString()} د.ج</span>
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
    showToast('تم الدفع واحتجاز المبلغ بالدينار الجزائري في الضمان المالي!');
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

function applyFilters() {
    renderProducts();
}