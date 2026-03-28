/* ════════════════════════════════════════════════════════════
   SLANGIST — main.js
   Core functionality: cursor, nav, animations, theme, search
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCursor();
  initNav();
  initScrollProgress();
  initRevealAnimations();
  initPageLoad();
  initToast();
  initCopyButtons();
  initAccordions();
  initSearch();
  initCardFilters();
  initSlangCards();
  renderCardsIfNeeded();
});

/* ════════════════════════════════════════════════════════════
   THEME
   ════════════════════════════════════════════════════════════ */
function initTheme() {
  const stored = localStorage.getItem('slangist-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
  updateThemeToggleIcons(theme);

  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      updateThemeToggleIcons(next);
      localStorage.setItem('slangist-theme', next);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeToggleIcons(theme) {
  const sunHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? sunHTML : moonHTML;
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
}

/* ════════════════════════════════════════════════════════════
   CURSOR
   ════════════════════════════════════════════════════════════ */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100, rx = -100, ry = -100;
  let animFrame;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
  });

  (function trackRing() {
    rx += (mx - rx) * 0.115;
    ry += (my - ry) * 0.115;
    ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
    animFrame = requestAnimationFrame(trackRing);
  })();

  /* Hover state */
  const hoverTargets = 'a, button, [data-cursor-hover], .slang-card, .related-card, .chat-scene, .viral-card, .filter-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverTargets)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverTargets)) ring.classList.remove('hover');
  });

  document.addEventListener('mousedown', () => ring.classList.add('clicking'));
  document.addEventListener('mouseup',   () => ring.classList.remove('clicking'));

  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ════════════════════════════════════════════════════════════
   NAV
   ════════════════════════════════════════════════════════════ */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  /* Scroll shadow */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* Mobile hamburger */
  const hamburger = document.querySelector('.nav-hamburger');
  const drawer    = document.querySelector('.nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });

    /* Close on link click */
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      });
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !drawer.contains(e.target)) {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
      }
    });
  }

  /* Active link highlighting */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/^\.\.\//, ''))) {
      link.classList.add('active');
    }
  });
}

/* ════════════════════════════════════════════════════════════
   SCROLL PROGRESS
   ════════════════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  }, { passive: true });
}

/* ════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER — REVEAL ANIMATIONS
   ════════════════════════════════════════════════════════════ */
function initRevealAnimations() {
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  /* Observe all reveal elements */
  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-group').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ════════════════════════════════════════════════════════════
   PAGE LOAD ANIMATION
   ════════════════════════════════════════════════════════════ */
function initPageLoad() {
  document.body.classList.add('loading');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    });
  });
}

/* ════════════════════════════════════════════════════════════
   TOAST
   ════════════════════════════════════════════════════════════ */
let toastTimeout;

function showToast(message = 'Copied!', duration = 2200) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), duration);
}

function initToast() {
  /* Toast element is in HTML — this just ensures the function is ready */
}

/* ════════════════════════════════════════════════════════════
   COPY BUTTONS
   ════════════════════════════════════════════════════════════ */
function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      copyToClipboard(text, btn);
    });
  });
}

function copyToClipboard(text, btn = null) {
  const attempt = navigator.clipboard
    ? navigator.clipboard.writeText(text)
    : Promise.reject();

  attempt.catch(() => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
    document.body.appendChild(el);
    el.select();
    try { document.execCommand('copy'); } catch(e) {}
    document.body.removeChild(el);
  });

  if (btn) {
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1800);
  }

  showToast(`"${text}" copied to clipboard!`);
}

/* ════════════════════════════════════════════════════════════
   ACCORDION / FAQ
   ════════════════════════════════════════════════════════════ */
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const isOpen = item.classList.contains('open');

      /* Close all */
      document.querySelectorAll('.accordion-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
      });

      /* Open clicked if it was closed */
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ════════════════════════════════════════════════════════════
   SEARCH
   ════════════════════════════════════════════════════════════ */
function initSearch() {
  const inputs = document.querySelectorAll('.search-input');
  inputs.forEach(input => {
    const wrap  = input.closest('.search-wrap');
    const clear = wrap ? wrap.querySelector('.search-clear') : null;

    input.addEventListener('input', () => {
      const query = input.value.trim();

      /* Show/hide clear btn */
      if (clear) {
        clear.classList.toggle('visible', query.length > 0);
      }

      /* Trigger search */
      handleSearch(query, input);
    });

    /* Clear button */
    if (clear) {
      clear.addEventListener('click', () => {
        input.value = '';
        clear.classList.remove('visible');
        handleSearch('', input);
        input.focus();
      });
    }

    /* Enter key navigation */
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const query = input.value.trim();
        if (query && !window.location.pathname.includes('search')) {
          /* Navigate to search page */
          const base = getBaseURL();
          window.location.href = `${base}search.html?q=${encodeURIComponent(query)}`;
        }
      }
    });
  });

  /* Handle URL query on search page */
  if (window.location.pathname.includes('search')) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    if (q) {
      document.querySelectorAll('.search-input').forEach(inp => {
        inp.value = q;
        const clear = inp.closest('.search-wrap')?.querySelector('.search-clear');
        if (clear) clear.classList.add('visible');
      });
      handleSearch(q);
    }
  }
}

function handleSearch(query, sourceInput) {
  /* Update all other search inputs */
  document.querySelectorAll('.search-input').forEach(inp => {
    if (inp !== sourceInput) inp.value = query;
  });

  /* Render results if we're on a page that has a results container */
  const container = document.getElementById('search-results') ||
                    document.getElementById('slangs-grid');
  if (!container) return;

  if (typeof searchSlangs !== 'function') return;

  const results = searchSlangs(query);
  const tag = getActiveTag();
  const filtered = tag === 'all' ? results : results.filter(s => s.tag === tag);

  renderCards(filtered, container);
  updateResultsCount(filtered.length, query);
}

/* ════════════════════════════════════════════════════════════
   CARD FILTERS (tag buttons)
   ════════════════════════════════════════════════════════════ */
function initCardFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      /* Update active state */
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tag = btn.getAttribute('data-filter');
      filterCards(tag);
    });
  });
}

function getActiveTag() {
  const active = document.querySelector('.filter-btn.active');
  return active ? (active.getAttribute('data-filter') || 'all') : 'all';
}

function filterCards(tag) {
  const query = document.querySelector('.search-input')?.value?.trim() || '';
  const results = searchSlangs(query);
  const filtered = tag === 'all' ? results : results.filter(s => s.tag === tag);
  const container = document.getElementById('search-results') ||
                    document.getElementById('slangs-grid');
  if (container) {
    renderCards(filtered, container);
    updateResultsCount(filtered.length, query);
  }
}

function updateResultsCount(count, query) {
  const countEl = document.getElementById('results-count');
  if (!countEl) return;
  if (query) {
    countEl.innerHTML = `<span>${count}</span> result${count !== 1 ? 's' : ''} for "<em>${query}</em>"`;
  } else {
    countEl.innerHTML = `Showing <span>${count}</span> slang${count !== 1 ? 's' : ''}`;
  }
}

/* ════════════════════════════════════════════════════════════
   CARD RENDERING
   ════════════════════════════════════════════════════════════ */
function renderCardsIfNeeded() {
  const slangsGrid = document.getElementById('slangs-grid');
  const searchResults = document.getElementById('search-results');
  const featuredGrid = document.getElementById('featured-grid');

  if (slangsGrid && typeof getAllSlangs === 'function') {
    /* Respect URL filter param or active button on page load */
    const urlTag = new URLSearchParams(window.location.search).get('filter') || 'all';
    const activeBtn = document.querySelector('.filter-btn.active');
    const tag = activeBtn ? (activeBtn.getAttribute('data-filter') || 'all') : urlTag;
    const all = getAllSlangs();
    const toShow = tag === 'all' ? all : all.filter(s => s.tag === tag);
    renderCards(toShow, slangsGrid);
    updateResultsCount(toShow.length, '');
  }

  if (searchResults && typeof getAllSlangs === 'function') {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q') || '';
    const results = q ? searchSlangs(q) : getAllSlangs();
    renderCards(results, searchResults);
    updateResultsCount(results.length, q);
  }

  if (featuredGrid && typeof getFeaturedSlangs === 'function') {
    const featured = getFeaturedSlangs(6);
    renderCards(featured, featuredGrid, true);
  }
}

function renderCards(slangs, container, fromRoot = null) {
  const inSlangDir = window.location.pathname.includes('/slang/');
  const useRoot = fromRoot !== null ? fromRoot : !inSlangDir;
  const prefix = useRoot ? 'slang/' : '';

  if (!slangs || slangs.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column:1/-1">
        <div class="no-results-emoji">🔍</div>
        <div class="no-results-title">No slangs found</div>
        <div class="no-results-sub">Try a different search or browse all slangs</div>
      </div>`;
    return;
  }

  /* Render WITHOUT reveal class — cards start hidden via .card-hidden,
     then we stagger-reveal them via setTimeout (no 56x IntersectionObserver lag) */
  const tagLbl   = { trending:'Trending', classic:'Classic', new:'New', viral:'Viral' };
  const tagColor  = { trending:'var(--saffron)', classic:'var(--gold)', new:'var(--rose)', viral:'var(--mint)' };

  container.innerHTML = slangs.map(s => `
    <a
      href="${prefix}${s.slug}.html"
      class="slang-card card-hidden"
      data-tag="${s.tag}"
      aria-label="${s.word}: ${s.shortMeaning}"
    >
      <div class="card-header">
        <h3 class="card-word">${s.word}</h3>
        <span class="card-badge" style="--badge-color:${tagColor[s.tag]||'var(--gold)'}">${tagLbl[s.tag]||s.tag}</span>
      </div>
      <p class="card-meaning">${s.shortMeaning}</p>
      <div class="card-footer">
        <span class="card-year">${s.year}</span>
        <span class="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </span>
      </div>
    </a>
  `).join('');

  /* Stagger-reveal cards immediately — no scroll needed for grids */
  container.querySelectorAll('.card-hidden').forEach((card, i) => {
    setTimeout(() => card.classList.remove('card-hidden'), Math.min(i, 20) * 30);
  });
}

/* ════════════════════════════════════════════════════════════
   SLANG CARDS — click handling & hover effects
   ════════════════════════════════════════════════════════════ */
function initSlangCards() {
  /* Delegated click on statically rendered cards */
  document.addEventListener('click', e => {
    const card = e.target.closest('.slang-card[data-slug]');
    if (card) {
      const slug = card.getAttribute('data-slug');
      if (slug) {
        const inSlangDir = window.location.pathname.includes('/slang/');
        const url = inSlangDir ? `${slug}.html` : `slang/${slug}.html`;
        navigateTo(url);
      }
    }
  });
}

/* ════════════════════════════════════════════════════════════
   PAGE NAVIGATION WITH TRANSITION
   ════════════════════════════════════════════════════════════ */
function navigateTo(url) {
  const overlay = document.getElementById('page-overlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => { window.location.href = url; }, 350);
  } else {
    window.location.href = url;
  }
}

/* Handle all internal links for smooth transitions */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') ||
      href.startsWith('mailto') || link.getAttribute('target') === '_blank') return;
  /* Let browser handle — transitions are CSS-based */
});

/* Fade in on page load */
window.addEventListener('pageshow', () => {
  const overlay = document.getElementById('page-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.transition = 'opacity 0.35s';
  }
});

/* ════════════════════════════════════════════════════════════
   SPOTLIGHT / WORD OF THE DAY (homepage)
   ════════════════════════════════════════════════════════════ */
function renderSpotlight() {
  const el = document.getElementById('spotlight');
  if (!el || typeof getWordOfTheDay !== 'function') return;

  const wod = getWordOfTheDay();
  document.getElementById('spotlight-word')  && (document.getElementById('spotlight-word').textContent  = wod.word);
  document.getElementById('spotlight-devan') && (document.getElementById('spotlight-devan').textContent = wod.devanagari || '');
  document.getElementById('spotlight-meaning')&& (document.getElementById('spotlight-meaning').textContent = wod.shortMeaning);
  document.getElementById('spotlight-tag')   && (document.getElementById('spotlight-tag').className    = `tag tag-${wod.tag}`);
  document.getElementById('spotlight-tag')   && (document.getElementById('spotlight-tag').textContent   = wod.tag);
  document.getElementById('spotlight-link')  && (document.getElementById('spotlight-link').setAttribute('href', `slang/${wod.slug}.html`));

  const badge = document.getElementById('spotlight-badge');
  if (badge) {
    badge.querySelector('.spotlight-badge-text').textContent = wod.word.slice(0, 6);
  }
}

/* ════════════════════════════════════════════════════════════
   FLOATING WORDS BACKGROUND (hero)
   ════════════════════════════════════════════════════════════ */
function initFloatingWords() {
  const container = document.querySelector('.hero-floats');
  if (!container || typeof SLANGIST_DATA === 'undefined') return;

  /* Use only single-word slangs to prevent long phrases overlapping */
  const allWords = SLANGIST_DATA.map(s => s.word);
  const shortWords = allWords.filter(w => !w.includes(' ')); /* no spaces */
  const longWords  = allWords.filter(w => w.includes(' '));

  /* 7 columns × 5 rows = 35 cells — spread words evenly */
  const COLS = 7;
  const ROWS = 5;
  const TOTAL = COLS * ROWS;

  /* Prefer short words, pad with truncated long ones if needed */
  const pool = [...shortWords]
    .sort(() => Math.random() - 0.5)
    .slice(0, TOTAL);

  /* If not enough short words, fill with long ones capped at first word */
  while (pool.length < TOTAL && longWords.length) {
    const w = longWords[Math.floor(Math.random() * longWords.length)];
    pool.push(w.split(' ')[0]); /* use only first word of multi-word phrases */
  }

  pool.forEach((word, i) => {
    const el = document.createElement('span');
    el.classList.add('float-word');
    el.textContent = word;

    const col = i % COLS;
    const row = Math.floor(i / COLS);

    /* Cell dimensions in % */
    const cellW = 100 / COLS;
    const cellH = 100 / ROWS;

    /* Position at cell centre — transform:translate(-50%,-50%) centres the word there */
    const left = col * cellW + cellW * 0.5;
    const top  = row * cellH + cellH * 0.5;

    /* Very small jitter — only 20% of cell size so words never reach cell boundary */
    const jitterX = (Math.random() - 0.5) * cellW * 0.2;
    const jitterY = (Math.random() - 0.5) * cellH * 0.2;

    /* Tightly controlled sizes: 1.2–2.2rem max so words stay short enough */
    const size = 1.2 + Math.random() * 1.0;

    const dur = 25 + Math.random() * 20;
    /* Drift only within ~40% of cell size — words never leave their zone */
    const tx  = (Math.random() - 0.5) * (cellW * 0.35) + 'vw';
    const ty  = (Math.random() - 0.5) * (cellH * 0.35) + 'vh';
    const rot = (Math.random() - 0.5) * 8 + 'deg'; /* barely any tilt */

    el.style.cssText = `
      font-size: ${size}rem;
      top: calc(${top + jitterY}%);
      left: calc(${left + jitterX}%);
      transform: translate(-50%, -50%) rotate(${rot});
      --tx: ${tx};
      --ty: ${ty};
      --r: 0deg;
      animation-duration: ${dur}s;
      animation-delay: -${Math.random() * dur}s;
    `;

    container.appendChild(el);
  });
}

/* ════════════════════════════════════════════════════════════
   PARALLAX (subtle, performance-safe)
   ════════════════════════════════════════════════════════════ */
function initParallax() {
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight * 1.5) {
          heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
          heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ════════════════════════════════════════════════════════════
   HELPER: BASE URL
   ════════════════════════════════════════════════════════════ */
function getBaseURL() {
  const path = window.location.pathname;
  if (path.includes('/slang/')) return '../';
  return '';
}

/* ════════════════════════════════════════════════════════════
   INIT EXTENDED (called from pages that need it)
   ════════════════════════════════════════════════════════════ */
function initHomepage() {
  renderSpotlight();
  initFloatingWords();
  initParallax();
}

function initSlangDetailPage(slug) {
  const slang = typeof getSlangBySlug === 'function' ? getSlangBySlug(slug) : null;
  if (!slang) return;

  /* Render related slangs */
  const relatedContainer = document.getElementById('related-slangs');
  if (relatedContainer) {
    const related = typeof getRelatedSlangs === 'function' ? getRelatedSlangs(slang) : [];
    relatedContainer.innerHTML = related.map(r => `
      <a href="${r.slug}.html" class="related-card">
        <div class="related-word">${r.word}</div>
        <div class="related-meaning">${r.shortMeaning.slice(0, 50)}...</div>
        <div style="margin-top:10px"><span class="tag tag-${r.tag}">${r.tag}</span></div>
      </a>
    `).join('');
  }
}
