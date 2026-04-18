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
        link: "#"
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
        link: "alert:5월 중 출시"
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
        link: "alert:5월 중 출시"
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

    return `
        <article class="project-card" data-link="${project.link}">
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
    container.innerHTML = projects.map(createProjectCard).join('');

    // 카드 클릭 이벤트
    container.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.dataset.link;
            if (!link || link === '#') return;
            if (link.startsWith('alert:')) {
                alert(link.substring(6));
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

// 스포트라이트 효과 (엔이 매크로 카드)
function initSpotlight() {
    const cards = document.querySelectorAll('.project-card');
    const targetCard = cards[1]; // 2번째 카드 = 엔이 매크로
    if (!targetCard) return;

    // 오버레이 생성
    const overlay = document.createElement('div');
    overlay.className = 'spotlight-overlay';

    // 안내 텍스트 생성
    const tooltip = document.createElement('div');
    tooltip.className = 'spotlight-tooltip';
    tooltip.textContent = '클릭해서 더 알아보기';

    document.body.appendChild(overlay);
    targetCard.classList.add('spotlight-target');

    // 약간의 딜레이 후 활성화 (DOM paint 보장)
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add('active');
            // 툴팁을 카드 아래 중앙에 배치 (body에 append)
            const rect = targetCard.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.left = (rect.left + rect.width / 2) + 'px';
            tooltip.style.top = (rect.bottom + 14) + 'px';
            document.body.appendChild(tooltip);
            requestAnimationFrame(() => tooltip.classList.add('active'));
        });
    });

    function dismissSpotlight() {
        overlay.classList.remove('active');
        tooltip.classList.remove('active');
        targetCard.classList.remove('spotlight-target');
        setTimeout(() => {
            overlay.remove();
            tooltip.remove();
        }, 500);
    }

    // 오버레이 클릭 시 해제
    overlay.addEventListener('click', dismissSpotlight);
    // 카드에 마우스 올려도 해제
    targetCard.addEventListener('mouseenter', dismissSpotlight, { once: true });
    // 카드 클릭 시에도 해제
    targetCard.addEventListener('click', dismissSpotlight, { once: true });
    // 4초 후 자동 해제
    setTimeout(dismissSpotlight, 4000);
}

// 배너 캐러셀 (슬라이드 + 마우스 드래그)
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
    // 페이지 로드 후 0.5초 뒤 스포트라이트 시작
    setTimeout(initSpotlight, 500);
});
