// ===== 스태프 선정 작품 데이터 =====
const staffPickedProjects = [
    {
        id: "proj1",
        title: "환영합니다",
        category: "소개",
        badge: "스선",
        thumbnail: "profile.jpg",
        thumbnailBg: "#e8e8e8",
        thumbnailEmoji: "",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "https://playentry.org/profile/69e0978622d0b9f308c65301"
    },
    {
        id: "proj2",
        title: "엔이 매크로",
        category: "생활과 도구",
        badge: "스선",
        thumbnail: "second.jpg",
        thumbnailBg: "#1a1a3e",
        thumbnailEmoji: "",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "https://github.com/ilyrei/EntryMacro"
    },
    {
        id: "proj3",
        title: "엔트리난독화",
        category: "생활과 도구",
        badge: "스선",
        thumbnail: "third.jpg",
        thumbnailBg: "#2a2a2a",
        thumbnailEmoji: "",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "/encrypt"
    },
    {
        id: "proj4",
        title: "인작/스선 통계 분석",
        category: "생활과 도구",
        badge: "스선",
        thumbnail: "final.jpg",
        thumbnailBg: "#1a1a3e",
        thumbnailEmoji: "",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "alert:5월 중 출시",
        comingSoon: true
    },
    {
        id: "proj5",
        title: "엔트리 사본 편집기",
        category: "생활과 도구",
        badge: "스선",
        thumbnail: "sabon.jpg",
        thumbnailBg: "#1a3a5e",
        thumbnailEmoji: "🔧",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "/traceedit"
    },
    {
        id: "proj6",
        title: "ChatGPT in Entry",
        category: "생활과 도구",
        badge: "스선",
        thumbnail: "chatgpt.jpg",
        thumbnailBg: "#10a37f",
        thumbnailEmoji: "🤖",
        author: "ilyrei",
        authorThumb: null,
        views: "0",
        likes: 0,
        comments: 0,
        link: "/chatgpt"
    }
];

// SVG 아이콘 (Entry 스타일)
const svgIcons = {
    view: `<svg class="stat-icon-view" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2.5C3.5 2.5 1 7 1 7s2.5 4.5 6 4.5S13 7 13 7s-2.5-4.5-6-4.5z" stroke="#979797" stroke-width="1.2" fill="none"/>
        <circle cx="7" cy="7" r="2" stroke="#979797" stroke-width="1.2" fill="none"/>
    </svg>`,
    like: `<svg class="stat-icon-like" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 12.25S1.25 8.75 1.25 5.25a2.75 2.75 0 0 1 5.5-.5h.5a2.75 2.75 0 0 1 5.5.5c0 3.5-5.75 7-5.75 7z" fill="#ff5c5c"/>
    </svg>`,
    comment: `<svg class="stat-icon-comment" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9a1.5 1.5 0 0 1-1.5 1.5H4L2 12.5V3.5A1.5 1.5 0 0 1 3.5 2h7A1.5 1.5 0 0 1 12 3.5V9z" fill="#979797"/>
    </svg>`,
    userDefault: `<svg viewBox="0 0 22 22" fill="#16d8a3" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="8" r="4"/>
        <path d="M18 20a7 7 0 1 0-14 0"/>
    </svg>`
};

// 카드 HTML 생성
function createProjectCard(project) {
    const badgeHTML = project.badge
        ? `<img src="https://playentry.org/img/IcoDefaultCardStaff.svg" alt="${project.badge}" class="card-badge-img">`
        : '';

    let thumbHTML;
    if (project.thumbnail) {
        thumbHTML = `<img src="${project.thumbnail}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;">`;
    } else {
        thumbHTML = `<div class="card-thumb-placeholder" style="background:${project.thumbnailBg}">${project.thumbnailEmoji}</div>`;
    }

    let authorThumbHTML;
    if (project.authorThumb) {
        authorThumbHTML = `<img src="${project.authorThumb}" alt="${project.author}">`;
    } else {
        authorThumbHTML = `<div class="author-thumb-placeholder">${svgIcons.userDefault}</div>`;
    }

    const comingSoonClass = project.comingSoon ? ' coming-soon' : '';

    return `
        <article class="project-card${comingSoonClass}" data-link="${project.link}">
            <div class="card-thumb">
                ${thumbHTML}
                <span class="card-category">${project.category}</span>
                ${badgeHTML}
            </div>
            <div class="card-content">
                <strong class="card-title">${project.title}</strong>
                <div class="card-author">
                    <div class="author-thumb">${authorThumbHTML}</div>
                    <span class="author-name">${project.author}</span>
                </div>
                <div class="card-stats">
                    <span class="stat-item">${svgIcons.view} ${project.views}</span>
                    <span class="stat-item">${svgIcons.like} ${project.likes}</span>
                    <span class="stat-item">${svgIcons.comment} ${project.comments}</span>
                </div>
            </div>
        </article>
    `;
}

// 카드 목록 렌더링
function renderProjectCards(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const clip = document.createElement('div');
    clip.className = 'project-carousel-clip';

    const track = document.createElement('div');
    track.className = 'project-track';
    track.innerHTML = projects.map(createProjectCard).join('');

    clip.appendChild(track);
    container.appendChild(clip);

    // 카드 클릭 이벤트
    track.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.dataset.link;
            if (!link || link === '#') return;
            if (link.startsWith('alert:')) {
                alert(link.substring(6));
            } else if (link.startsWith('/')) {
                window.location.href = link;
            } else {
                window.open(link, '_blank');
            }
        });
    });
}

// 탭 전환
function initTabs() {
    document.querySelectorAll('.sub-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sub-nav-item').forEach(t => t.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

// 네비게이션 hover 효과
function initNavHover() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });
    });
}

// 스포트라이트 효과 (카드 2장 + 더보기 버튼 동시) — 최초 방문 시 1회만
function initSpotlight() {
    if (localStorage.getItem('spotlight-seen')) return;

    const cards = document.querySelectorAll('.project-card');
    const btnMore = document.getElementById('btn-more-all');
    const projectClip = document.querySelector('.project-carousel-clip');
    const targets = [cards[0], cards[1], btnMore].filter(Boolean);
    if (targets.length < 2) return;

    const overlay = document.createElement('div');
    overlay.className = 'spotlight-overlay';
    document.body.appendChild(overlay);

    if (projectClip) projectClip.classList.add('spotlight-host-active');
    targets.forEach(el => el.classList.add('spotlight-target'));

    const tooltip = document.createElement('div');
    tooltip.className = 'spotlight-tooltip';
    tooltip.textContent = '클릭해서 더 알아보기';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            const rect0 = targets[0].getBoundingClientRect();
            const rect1 = targets[1].getBoundingClientRect();
            const centerX = (rect0.left + rect1.right) / 2;
            const bottomY = Math.max(rect0.bottom, rect1.bottom);
            tooltip.style.position = 'fixed';
            tooltip.style.left = centerX + 'px';
            tooltip.style.top = (bottomY + 14) + 'px';
            document.body.appendChild(tooltip);
            requestAnimationFrame(() => tooltip.classList.add('active'));
        });
    });

    let dismissed = false;
    function dismissSpotlight() {
        if (dismissed) return;
        dismissed = true;
        localStorage.setItem('spotlight-seen', '1');
        overlay.classList.remove('active');
        tooltip.classList.remove('active');
        if (projectClip) projectClip.classList.remove('spotlight-host-active');
        targets.forEach(el => el.classList.remove('spotlight-target'));
        setTimeout(() => {
            overlay.remove();
            tooltip.remove();
        }, 500);
    }

    overlay.addEventListener('click', dismissSpotlight);
    targets.forEach(el => {
        el.addEventListener('mouseenter', dismissSpotlight, { once: true });
        el.addEventListener('click', dismissSpotlight, { once: true });
    });
    setTimeout(dismissSpotlight, 4000);
}

// 회전초밥 캐러셀 (페이지 로드 시 바로 시작)
function startProjectCarousel() {
    const list = document.getElementById('staff-cards');
    const track = list && list.querySelector('.project-track');
    if (!track || track.children.length <= 4) return;

    const slideWidth = 252 + 18; // card width + gap = 270px
    let isAnimating = false;

    function rotateOnce() {
        if (isAnimating) return;
        isAnimating = true;

        track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(-${slideWidth}px)`;

        track.addEventListener('transitionend', function () {
            track.appendChild(track.firstElementChild);
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            track.offsetHeight; // force reflow
            isAnimating = false;
        }, { once: true });
    }

    setInterval(rotateOnce, 3000);
}

// 전체 목록 모달
function openProjectsModal() {
    const overlay = document.createElement('div');
    overlay.className = 'projects-modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'projects-modal';

    const header = document.createElement('div');
    header.className = 'modal-header';
    header.innerHTML = `
        <h3 class="modal-title">스태프 선정 작품</h3>
        <button class="modal-close" aria-label="닫기">×</button>
    `;

    const list = document.createElement('ul');
    list.className = 'modal-project-list';

    staffPickedProjects.forEach(project => {
        const item = document.createElement('li');
        item.className = 'modal-project-item' + (project.comingSoon ? ' coming-soon' : '');

        let thumbHTML;
        if (project.thumbnail) {
            thumbHTML = `<img src="${project.thumbnail}" alt="${project.title}">`;
        } else {
            thumbHTML = `<span style="font-size:26px">${project.thumbnailEmoji || '📄'}</span>`;
        }

        item.innerHTML = `
            <div class="modal-item-thumb" style="background:${project.thumbnailBg || '#f0f0f0'}">${thumbHTML}</div>
            <div class="modal-item-info">
                <div class="modal-item-title">${project.title}</div>
                <div class="modal-item-meta">
                    <span class="modal-item-category">${project.category}</span>
                    <span class="modal-item-author">${project.author}</span>
                </div>
            </div>
            <span class="modal-item-arrow">›</span>
        `;

        item.addEventListener('click', () => {
            const link = project.link;
            if (!link || link === '#') return;
            if (link.startsWith('alert:')) {
                alert(link.substring(6));
            } else if (link.startsWith('/')) {
                window.location.href = link;
            } else {
                window.open(link, '_blank');
            }
        });

        list.appendChild(item);
    });

    modal.appendChild(header);
    modal.appendChild(list);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => overlay.classList.add('active'));

    function closeModal() {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 300);
    }

    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    header.querySelector('.modal-close').addEventListener('click', closeModal);
}


function initBannerCarousel() {
    const track = document.querySelector('.banner-track');
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    const pagination = document.querySelector('.banner-pagination');
    if (!track || !slides.length) return;

    let current = 0;
    const total = slides.length;
    let autoTimer;

    function goToSlide(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        current = index;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
        pagination.style.background = slides[current].style.background;
    }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(() => goToSlide(current + 1), 4000);
    }

    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
    }

    // 도트 클릭
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => { goToSlide(i); startAuto(); });
    });

    // 마우스 드래그
    let isDragging = false, startX = 0, dragOffset = 0;

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        dragOffset = 0;
        track.classList.add('dragging');
        stopAuto();
        e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        dragOffset = e.clientX - startX;
        const base = -current * track.offsetWidth;
        track.style.transform = `translateX(${base + dragOffset}px)`;
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('dragging');
        const threshold = track.offsetWidth * 0.15;
        if (dragOffset < -threshold) goToSlide(current + 1);
        else if (dragOffset > threshold) goToSlide(current - 1);
        else goToSlide(current);
        startAuto();
    });

    // 터치 지원
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAuto();
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - touchStartX;
        const base = -current * track.offsetWidth;
        track.style.transform = `translateX(${base + dx}px)`;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const threshold = track.offsetWidth * 0.15;
        if (dx < -threshold) goToSlide(current + 1);
        else if (dx > threshold) goToSlide(current - 1);
        else goToSlide(current);
        startAuto();
    });

    // 초기화
    goToSlide(0);
    startAuto();
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    renderProjectCards('staff-cards', staffPickedProjects);
    initTabs();
    initNavHover();
    initBannerCarousel();

    // 회전초밥 캐러셀 바로 시작
    startProjectCarousel();

    // 더보기 버튼 → 전체 목록 모달
    const btnMore = document.getElementById('btn-more-all');
    if (btnMore) {
        btnMore.addEventListener('click', e => {
            e.preventDefault();
            openProjectsModal();
        });
    }

    // 페이지 로드 후 0.5초 뒤 스포트라이트 시작
    setTimeout(initSpotlight, 500);
});
