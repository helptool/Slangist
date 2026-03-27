/* ════════════════════════════════════════════════════════════
   SLANGIST — slang-render.js  v2
   Full retention system: inline links, explore more, sticky bar
   ════════════════════════════════════════════════════════════ */

'use strict';

/* ── All slugs for inline auto-linking ── */
function buildSlangLinkMap() {
  const map = {};
  (SLANGIST_DATA || []).forEach(s => {
    map[s.word.toLowerCase()] = s.slug;
    /* Also map slug without diacritics */
    const plain = s.word.toLowerCase().replace(/[āīūéèêàâôûùç]/g, c =>
      ({ā:'a',ī:'i',ū:'u',é:'e',è:'e',ê:'e',à:'a',â:'a',ô:'o',û:'u',ù:'u',ç:'c'}[c]||c));
    map[plain] = s.slug;
  });
  return map;
}

/* ── Auto-link slang words inside a text block ──
   Wraps every known slang term in a clickable link.
   Skips the current page's own word.              */
function autoLink(text, currentSlug) {
  if (!text) return '';
  const map = buildSlangLinkMap();
  /* Sort keys by length desc so "main character" matches before "main" */
  const keys = Object.keys(map).sort((a, b) => b.length - a.length);
  /* Build one big regex */
  const escaped = keys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
  const linked = new Set(); /* link each word only once per block */
  return text.replace(regex, (match) => {
    const key = match.toLowerCase();
    const slug = map[key];
    if (!slug || slug === currentSlug || linked.has(slug)) return match;
    linked.add(slug);
    return `<a href="${slug}.html" class="inline-slang-link">${match}</a>`;
  });
}

/* ── Pick "Explore More" cards: related + smart fillers ── */
function getExploreSlangs(slang, count = 8) {
  const related = getRelatedSlangs(slang).map(s => s.slug);
  const all = SLANGIST_DATA.filter(s => s.slug !== slang.slug);

  /* Priority: explicit related first, then same tag, then random */
  const pool = [
    ...all.filter(s => related.includes(s.slug)),
    ...all.filter(s => !related.includes(s.slug) && s.tag === slang.tag),
    ...all.filter(s => !related.includes(s.slug) && s.tag !== slang.tag),
  ];

  /* Dedupe while preserving order */
  const seen = new Set();
  const deduped = pool.filter(s => seen.has(s.slug) ? false : (seen.add(s.slug), true));
  return deduped.slice(0, count);
}

/* ── Random slang (excludes current) ── */
function getRandomSlang(currentSlug) {
  const pool = SLANGIST_DATA.filter(s => s.slug !== currentSlug);
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ══════════════════════════════════════════════════════════
   MAIN RENDER
   ══════════════════════════════════════════════════════════ */
function renderFullSlangPage(slug) {
  const slang = getSlangBySlug(slug);
  if (!slang) {
    document.querySelector('main').innerHTML = `
      <div style="text-align:center;padding:140px 20px">
        <div style="font-size:4rem;margin-bottom:16px">🔍</div>
        <h1 style="color:var(--text-1)">Slang not found</h1>
        <p style="color:var(--text-3);margin:12px 0 24px">We couldn't find "${slug}" in our dictionary.</p>
        <a href="../slangs.html" class="btn btn-primary">Browse All Slangs</a>
      </div>`;
    return;
  }

  /* Meta */
  document.title = `${slang.word} Meaning — ${slang.language || 'Gen Z'} Slang | Slangist`;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.content = `${slang.word} meaning: ${slang.shortMeaning} Full origin, examples & cultural context.`;

  const tagClass = { trending: 'tag-trending', classic: 'tag-classic', new: 'tag-new' };
  const tagLabel = { trending: '🔥 Trending', classic: '⭐ Classic', new: '✨ New' };

  /* Chat examples */
  const examplesHTML = (slang.examples || []).map(ex => `
    <div class="chat-scene stagger-group" role="group" aria-label="${ex.label} example">
      <div class="chat-label">${ex.label}</div>
      <div class="bubble-row">
        <div class="avatar them">${ex.them[0]}</div>
        <div class="bubble them">${ex.them}</div>
      </div>
      <div class="bubble-row me">
        <div class="bubble me">${highlightWord(ex.me, slang.word)}</div>
        <div class="avatar me">Y</div>
      </div>
    </div>
  `).join('');

  /* Timeline */
  const originHTML = (slang.originStory || []).map(item => `
    <div class="tl-item">
      <div class="tl-dot" aria-hidden="true"></div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-title">${item.title}</div>
      <p class="tl-body">${item.body}</p>
    </div>
  `).join('');

  /* Viral cards */
  const viralHTML = (slang.whyViral || []).map((item, i) => `
    <div class="viral-card">
      <div class="viral-num">0${i + 1}</div>
      <div class="viral-title">${item.title}</div>
      <p class="viral-desc">${item.desc}</p>
    </div>
  `).join('');

  /* ── Explore More (8 cards in a full grid) ── */
  const exploreSlangs = getExploreSlangs(slang, 8);
  const exploreHTML = exploreSlangs.map(s => `
    <a href="${s.slug}.html" class="slang-card card-hidden" data-tag="${s.tag}" aria-label="${s.word}: ${s.shortMeaning}">
      <div class="card-header">
        <h3 class="card-word">${s.word}</h3>
        <span class="tag ${tagClass[s.tag]}">${tagLabel[s.tag]}</span>
      </div>
      <p class="card-meaning">${s.shortMeaning}</p>
      <div class="card-footer">
        <span class="card-year">${s.year}${s.language ? ' · ' + s.language : ''}</span>
        <span class="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </span>
      </div>
    </a>
  `).join('');

  /* ── Also See: inline keyword chips for related slangs ── */
  const alsoSee = getRelatedSlangs(slang);
  const alsoSeeHTML = alsoSee.length ? `
    <div class="also-see reveal">
      <span class="also-see-label">Also see:</span>
      ${alsoSee.map(r => `<a href="${r.slug}.html" class="also-see-chip">${r.word}</a>`).join('')}
    </div>` : '';

  /* Language badge */
  const langBadge = slang.language ? `
    <span class="tag" style="background:var(--saffron-dim);color:var(--saffron);border-color:rgba(226,117,26,.25)">
      ${slang.language === 'Hinglish' ? '🇮🇳' : '🌐'} ${slang.language}
    </span>` : '';

  /* Coined by */
  const coinedByHTML = slang.coinedBy ? `
    <div style="margin-top:24px;opacity:0;animation:word-rise 0.8s 1.1s var(--expo) forwards">
      <span class="label" style="color:var(--text-4)">Coined by</span>
      ${slang.coinedBy.startsWith('@') ?
        `<a href="https://instagram.com/${slang.coinedBy.slice(1)}" target="_blank" rel="noopener noreferrer"
           style="color:var(--gold);font-weight:600;font-size:0.88rem;margin-left:6px">${slang.coinedBy}</a>` :
        `<span style="color:var(--gold);font-weight:600;font-size:0.88rem;margin-left:6px">${slang.coinedBy}</span>`
      }
      <span style="color:var(--text-4);font-size:0.78rem;margin-left:8px">· ${slang.year}</span>
    </div>` : '';

  /* ── SEO keyword chips ── */
  const seoChipsHTML = (slang.seoKeywords || []).map(kw =>
    `<span class="seo-chip">${kw}</span>`).join('');

  /* ── Random word ── */
  const rand = getRandomSlang(slug);
  const randHTML = rand ? `
    <a href="${rand.slug}.html" class="random-next-card reveal">
      <div class="random-next-label">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
          <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
          <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
        </svg>
        Random Word
      </div>
      <div class="random-next-word">${rand.word}</div>
      <div class="random-next-meaning">${rand.shortMeaning}</div>
    </a>` : '';

  /* ══ MAIN HTML ══ */
  document.querySelector('main').innerHTML = `

    <!-- HERO -->
    <section class="slang-hero">
      <div class="slang-hero-bg"><div class="slang-hero-glow" aria-hidden="true"></div></div>
      <div class="container slang-hero-content">
        <nav class="slang-breadcrumb" aria-label="Breadcrumb">
          <a href="../index.html">Home</a>
          <span aria-hidden="true">›</span>
          <a href="../slangs.html">Slangs</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${slang.word}</span>
        </nav>
        <div style="overflow:hidden;margin-bottom:10px">
          <h1 class="slang-hero-word" style="opacity:0;animation:word-rise 1s 0.2s var(--expo) forwards">${slang.word}</h1>
        </div>
        ${slang.devanagari ? `<p class="slang-hero-devanagari" style="opacity:0;animation:word-rise 0.8s 0.5s var(--expo) forwards">${slang.devanagari}</p>` : ''}
        <div class="slang-hero-meta" style="opacity:0;animation:word-rise 0.8s 0.65s var(--expo) forwards">
          <div class="pronun-chip">Pronunciation: <em>${slang.pronunciation}</em></div>
          <span class="tag ${tagClass[slang.tag]}">${tagLabel[slang.tag]} · ${slang.year}</span>
          ${langBadge}
        </div>
        <p class="slang-hero-def" style="opacity:0;animation:word-rise 0.8s 0.8s var(--expo) forwards">${slang.shortMeaning}</p>
        <div class="slang-hero-actions" style="opacity:0;animation:word-rise 0.8s 0.95s var(--expo) forwards">
          <button class="btn btn-primary copy-btn" data-copy="${slang.word}" aria-label="Copy the word ${slang.word}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            Copy Word
          </button>
          <button class="btn btn-ghost" onclick="shareSlangPage('${slang.word}')" aria-label="Share">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Share
          </button>
          <a href="../slangs.html" class="btn btn-ghost">Browse All →</a>
        </div>
        ${coinedByHTML}
        ${alsoSeeHTML}
      </div>
    </section>

    <div class="container"><div class="hr-ornate"><span class="hr-ornate-glyph">✦</span></div></div>

    <!-- CONTENT BODY -->
    <div class="container--narrow">

      <!-- DEFINITION with auto-linked keywords -->
      <section class="section" style="padding-top:0" aria-labelledby="def-heading">
        <div class="reveal">
          <div class="eyebrow">Definition</div>
          <h2 id="def-heading" class="display-md" style="margin-bottom:24px">
            What does <em style="color:var(--gold)">${slang.word}</em> mean?
          </h2>
        </div>
        <div class="def-block reveal">
          <div class="def-number">01.</div>
          <p class="def-text">"${slang.shortMeaning}"</p>
          <p class="def-body">${autoLink(slang.fullMeaning, slug)}</p>
          ${slang.culturalContext ? `<p class="def-body" style="margin-top:14px">${autoLink(slang.culturalContext, slug)}</p>` : ''}
        </div>
        ${seoChipsHTML ? `<div class="seo-chips reveal" style="margin-top:20px">${seoChipsHTML}</div>` : ''}
      </section>

      <hr class="hr reveal" />

      <!-- USAGE EXAMPLES -->
      <section class="section" aria-labelledby="examples-heading">
        <div class="reveal">
          <div class="eyebrow">Usage Examples</div>
          <h2 id="examples-heading" class="display-md" style="margin-bottom:8px">
            ${slang.word} in <em style="color:var(--gold)">real conversations</em>
          </h2>
          <p class="body-md" style="margin-bottom:28px">
            Real examples of how "${slang.word}" is used across chats, comments, and daily conversation.
          </p>
        </div>
        <div class="chat-container">${examplesHTML}</div>
      </section>

      <hr class="hr reveal" />

      <!-- ORIGIN -->
      <section class="section" aria-labelledby="origin-heading">
        <div class="reveal">
          <div class="eyebrow">Origin Story</div>
          <h2 id="origin-heading" class="display-md" style="margin-bottom:8px">
            How <em style="color:var(--gold)">${slang.word}</em> was born
          </h2>
          <p class="body-md" style="margin-bottom:32px">Every word has a birth story.</p>
        </div>
        <div class="timeline reveal">${originHTML}</div>
      </section>

      <hr class="hr reveal" />

      <!-- WHY VIRAL -->
      <section class="section" aria-labelledby="viral-heading">
        <div class="reveal">
          <div class="eyebrow">Viral Analysis</div>
          <h2 id="viral-heading" class="display-md" style="margin-bottom:28px">
            Why <em style="color:var(--gold)">${slang.word}</em> took off
          </h2>
        </div>
        <div class="viral-grid stagger-group">${viralHTML}</div>
      </section>

      <hr class="hr reveal" />

      <!-- FAQ -->
      <section class="section" aria-labelledby="faq-heading">
        <div class="reveal">
          <div class="eyebrow">FAQ</div>
          <h2 id="faq-heading" class="display-md" style="margin-bottom:28px">
            Frequently asked about <em style="color:var(--gold)">${slang.word}</em>
          </h2>
        </div>
        <div class="reveal" role="list">
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              What does ${slang.word} mean?
              <span class="accordion-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
            </button>
            <div class="accordion-body"><div class="accordion-body-inner">${slang.fullMeaning}</div></div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              How do you use ${slang.word}?
              <span class="accordion-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                Use <strong>${slang.word}</strong> in casual conversation, texts, or social media.
                ${slang.examples && slang.examples[0] ? `Example: "${slang.examples[0].me}"` : ''}
              </div>
            </div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              Where did ${slang.word} come from?
              <span class="accordion-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <strong>${slang.word}</strong> originated from <strong>${slang.origin || 'internet culture'}</strong>
                around ${slang.year}. ${slang.coinedBy ? `Coined by <strong>${slang.coinedBy}</strong>.` : ''}
                ${slang.originStory && slang.originStory[0] ? slang.originStory[0].body : ''}
              </div>
            </div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              Is ${slang.word} still used today?
              <span class="accordion-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                ${slang.tag === 'trending' ? `Yes! <strong>${slang.word}</strong> is currently trending.` :
                  slang.tag === 'new' ? `<strong>${slang.word}</strong> is freshly coined and gaining traction.` :
                  `<strong>${slang.word}</strong> is a classic that has stood the test of time.`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- RANDOM NEXT WORD -->
      <div style="margin:0 0 48px">
        ${randHTML}
      </div>

    </div><!-- /container--narrow -->

    <!-- EXPLORE MORE — full grid (8 cards) -->
    <section class="section" style="border-top:1px solid var(--line-soft)" aria-labelledby="explore-heading">
      <div class="container">
        <div class="section-header reveal">
          <div>
            <div class="eyebrow">Keep Reading</div>
            <h2 id="explore-heading" class="section-title">More <em>slangs</em> to explore</h2>
          </div>
          <a href="../slangs.html" class="btn btn-ghost">View All ${SLANGIST_DATA.length}+ →</a>
        </div>
        <div class="slang-grid" id="explore-grid" style="margin-top:24px">
          ${exploreHTML}
        </div>
      </div>
    </section>

  `;

  /* Re-init */
  initRevealAnimations();
  initCopyButtons();
  initAccordions();

  /* Stagger the explore cards */
  document.querySelectorAll('#explore-grid .card-hidden').forEach((card, i) => {
    setTimeout(() => card.classList.remove('card-hidden'), i * 30);
  });

  /* Build sticky bottom bar */
  buildStickyBar(slang);
}

/* ── Sticky bottom bar: prev / random / next ── */
function buildStickyBar(slang) {
  /* Remove existing bar if any */
  const existing = document.getElementById('sticky-nav-bar');
  if (existing) existing.remove();

  const all = SLANGIST_DATA;
  const idx = all.findIndex(s => s.slug === slang.slug);
  const prev = idx > 0 ? all[idx - 1] : all[all.length - 1];
  const next = idx < all.length - 1 ? all[idx + 1] : all[0];
  const rand = getRandomSlang(slang.slug);

  const bar = document.createElement('div');
  bar.id = 'sticky-nav-bar';
  bar.className = 'sticky-nav-bar';
  bar.innerHTML = `
    <a href="${prev.slug}.html" class="sticky-nav-btn sticky-nav-prev" title="${prev.word}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      <span class="sticky-nav-word">${prev.word}</span>
    </a>
    <a href="${rand.slug}.html" class="sticky-nav-btn sticky-nav-random" id="random-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
        <polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/>
        <polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/>
      </svg>
      Random
    </a>
    <a href="${next.slug}.html" class="sticky-nav-btn sticky-nav-next" title="${next.word}">
      <span class="sticky-nav-word">${next.word}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </a>
  `;
  document.body.appendChild(bar);

  /* Show after slight scroll */
  let shown = false;
  function checkScroll() {
    if (!shown && window.scrollY > 300) {
      bar.classList.add('visible');
      shown = true;
      window.removeEventListener('scroll', checkScroll);
    }
  }
  window.addEventListener('scroll', checkScroll, { passive: true });
}

/* ── Highlight the slang word in example bubbles ── */
function highlightWord(text, word) {
  const base = word.replace(/[āīū]/g, c => ({ā:'a',ī:'i',ū:'u'}[c]||c));
  const regex = new RegExp(`(${word}|${base})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function shareSlangPage(word) {
  if (navigator.share) {
    navigator.share({ title: `${word} on Slangist`, text: `What does ${word} mean?`, url: window.location.href }).catch(()=>{});
  } else {
    copyToClipboard(window.location.href);
    showToast('Link copied!');
  }
}
