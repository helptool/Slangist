/* ════════════════════════════════════════════════════════════
   SLANGIST — slang-render.js
   Dynamically renders individual slang detail pages from data.js
   ════════════════════════════════════════════════════════════ */

'use strict';

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

  /* Update document title and meta */
  document.title = `${slang.word} Meaning — ${slang.tag === 'new' ? 'New ' : ''}${slang.language || ''} Slang | Slangist`;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.content = `${slang.word} meaning explained: ${slang.shortMeaning} ${slang.fullMeaning.slice(0,100)}`;

  /* Tag color map */
  const tagClass = { trending: 'tag-trending', classic: 'tag-classic', new: 'tag-new' };
  const tagLabel = { trending: '🔥 Trending', classic: '⭐ Classic', new: '✨ New' };

  /* Render chat examples */
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

  /* Render origin timeline */
  const originHTML = (slang.originStory || []).map(item => `
    <div class="tl-item">
      <div class="tl-dot" aria-hidden="true"></div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-title">${item.title}</div>
      <p class="tl-body">${item.body}</p>
    </div>
  `).join('');

  /* Render why viral cards */
  const viralHTML = (slang.whyViral || []).map((item, i) => `
    <div class="viral-card">
      <div class="viral-num">0${i + 1}</div>
      <div class="viral-title">${item.title}</div>
      <p class="viral-desc">${item.desc}</p>
    </div>
  `).join('');

  /* Render related slangs */
  const related = getRelatedSlangs(slang);
  const relatedHTML = related.map(r => `
    <a href="${r.slug}.html" class="related-card">
      <div class="related-word">${r.word}</div>
      <div class="related-meaning">${r.shortMeaning.slice(0,55)}…</div>
      <div style="margin-top:10px"><span class="tag ${tagClass[r.tag]}">${tagLabel[r.tag]}</span></div>
    </a>
  `).join('');

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

  /* Build the full main content */
  document.querySelector('main').innerHTML = `

    <!-- HERO -->
    <section class="slang-hero">
      <div class="slang-hero-bg">
        <div class="slang-hero-glow" aria-hidden="true"></div>
      </div>
      <div class="container slang-hero-content">
        <nav class="slang-breadcrumb" aria-label="Breadcrumb">
          <a href="../index.html">Home</a>
          <span aria-hidden="true">›</span>
          <a href="../slangs.html">Slangs</a>
          <span aria-hidden="true">›</span>
          <span aria-current="page">${slang.word}</span>
        </nav>
        <div style="overflow:hidden;margin-bottom:10px">
          <h1 class="slang-hero-word" style="opacity:0;animation:word-rise 1s 0.2s var(--expo) forwards">
            ${slang.word}
          </h1>
        </div>
        ${slang.devanagari ? `<p class="slang-hero-devanagari" style="opacity:0;animation:word-rise 0.8s 0.5s var(--expo) forwards">${slang.devanagari}</p>` : ''}
        <div class="slang-hero-meta" style="opacity:0;animation:word-rise 0.8s 0.65s var(--expo) forwards">
          <div class="pronun-chip">Pronunciation: <em>${slang.pronunciation}</em></div>
          <span class="tag ${tagClass[slang.tag]}">${tagLabel[slang.tag]} · ${slang.year}</span>
          ${langBadge}
        </div>
        <p class="slang-hero-def" style="opacity:0;animation:word-rise 0.8s 0.8s var(--expo) forwards">
          ${slang.shortMeaning}
        </p>
        <div class="slang-hero-actions" style="opacity:0;animation:word-rise 0.8s 0.95s var(--expo) forwards">
          <button class="btn btn-primary copy-btn" data-copy="${slang.word}" aria-label="Copy the word ${slang.word}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
            Copy Word
          </button>
          <button class="btn btn-ghost" onclick="shareSlangPage('${slang.word}')" aria-label="Share this page">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Share
          </button>
          <a href="../slangs.html" class="btn btn-ghost" aria-label="Browse all slangs">Browse All →</a>
        </div>
        ${coinedByHTML}
      </div>
    </section>

    <!-- Decorative divider -->
    <div class="container">
      <div class="hr-ornate"><span class="hr-ornate-glyph">✦</span></div>
    </div>

    <!-- CONTENT BODY -->
    <div class="container--narrow">

      <!-- DEFINITION -->
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
          <p class="def-body">${slang.fullMeaning}</p>
          ${slang.culturalContext ? `<p class="def-body" style="margin-top:14px">${slang.culturalContext}</p>` : ''}
        </div>
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
        <div class="pull-quote reveal" style="margin-top:32px">
          <p class="pull-quote-text">"Every word was invented at some point. <em>${slang.word}</em> earned its place."</p>
          <cite class="pull-quote-cite">— Slangist, ${slang.year}</cite>
        </div>
      </section>

      <hr class="hr reveal" />

      <!-- ORIGIN -->
      <section class="section" aria-labelledby="origin-heading">
        <div class="reveal">
          <div class="eyebrow">Origin Story</div>
          <h2 id="origin-heading" class="display-md" style="margin-bottom:8px">
            How <em style="color:var(--gold)">${slang.word}</em> was born
          </h2>
          <p class="body-md" style="margin-bottom:32px">
            Every word has a birth story. Here's how ${slang.word} found its way into the cultural vocabulary.
          </p>
        </div>
        <div class="timeline reveal">${originHTML}</div>
      </section>

      <hr class="hr reveal" />

      <!-- CULTURAL CONTEXT -->
      <section class="section" aria-labelledby="culture-heading">
        <div class="reveal">
          <div class="eyebrow">Cultural Context</div>
          <h2 id="culture-heading" class="display-md" style="margin-bottom:20px">
            Why <em style="color:var(--gold)">${slang.word}</em> matters
          </h2>
        </div>
        <div class="reveal">
          <p class="body-lg" style="margin-bottom:20px">${slang.fullMeaning}</p>
          <p class="body-md">${slang.culturalContext || ''}</p>
        </div>
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
              <span class="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">${slang.fullMeaning}</div>
            </div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              How do you use ${slang.word}?
              <span class="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                Use <strong>${slang.word}</strong> in casual conversation, text messages, or social media. 
                ${slang.examples && slang.examples[0] ? `Example: "${slang.examples[0].me}"` : ''}
                The word works best in informal settings among peers.
              </div>
            </div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              Where did ${slang.word} come from?
              <span class="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <strong>${slang.word}</strong> originated from <strong>${slang.origin || 'internet culture'}</strong> 
                around ${slang.year}. ${slang.coinedBy ? `It was coined by <strong>${slang.coinedBy}</strong>.` : ''}
                ${slang.originStory && slang.originStory[0] ? slang.originStory[0].body : ''}
              </div>
            </div>
          </div>
          <div class="accordion-item" role="listitem">
            <button class="accordion-trigger" aria-expanded="false">
              Is ${slang.word} still used today?
              <span class="accordion-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              </span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                ${slang.tag === 'trending' ? `Yes! <strong>${slang.word}</strong> is currently trending and widely used across social media platforms.` :
                  slang.tag === 'new' ? `<strong>${slang.word}</strong> is a freshly coined word gaining traction right now.` :
                  `<strong>${slang.word}</strong> is a classic slang term that has stood the test of time. While newer slang evolves, ${slang.word} remains part of the active vocabulary.`
                }
              </div>
            </div>
          </div>
        </div>
      </section>

    </div><!-- /container--narrow -->

    <!-- RELATED SLANGS -->
    <section class="section" style="border-top:1px solid var(--line-soft)" aria-labelledby="related-heading">
      <div class="container">
        <div class="section-header reveal">
          <div>
            <div class="eyebrow">Keep Exploring</div>
            <h2 id="related-heading" class="section-title">Related <em>slangs</em></h2>
          </div>
          <a href="../slangs.html" class="btn btn-ghost">View All →</a>
        </div>
        <div class="related-scroll stagger-group" role="list" aria-label="Related slang words">
          ${relatedHTML}
        </div>
      </div>
    </section>
  `;

  /* Re-init interactions for newly rendered content */
  initRevealAnimations();
  initCopyButtons();
  initAccordions();
}

/* Highlight the slang word in example text */
function highlightWord(text, word) {
  const base = word.replace(/[āīū]/g, c => ({ 'ā':'a','ī':'i','ū':'u' }[c] || c));
  const regex = new RegExp(`(${word}|${base}|Velkamya|velkamya)`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

function shareSlangPage(word) {
  if (navigator.share) {
    navigator.share({
      title: `${word} — Slangist`,
      text: `Check out the meaning of "${word}" on Slangist!`,
      url: window.location.href
    }).catch(() => {});
  } else {
    copyToClipboard(window.location.href);
    showToast('Link copied to clipboard!');
  }
}
