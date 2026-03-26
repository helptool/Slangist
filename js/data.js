/* ════════════════════════════════════════════════════════════
   SLANGIST — data.js
   Complete slang database with full metadata
   29 entries: 7 original + 22 new
   ════════════════════════════════════════════════════════════ */

const SLANGIST_DATA = [

  /* ── ORIGINAL ENTRIES ─────────────────────────────────── */

  {
    id: "velkamya", word: "Velkāmya", slug: "velkamya",
    devanagari: "वेलकाम्य", pronunciation: "/veːl-kaːm-ya/",
    shortMeaning: "You're welcome — but make it desi Gen Z.",
    fullMeaning: "A modern Hindi/Hinglish slang word used as a warm, confident reply to 'thank you' or 'dhanyavaad'. It fills the gap that Hindi never had — a casual, expressive way to say 'you're welcome' without sounding stiff or dismissive.",
    tag: "new", year: 2026, language: "Hinglish", coinedBy: "@avgec", origin: "Indian Gen Z internet",
    culturalContext: "Born from the observation that Hindi had no casual, modern equivalent of 'you're welcome.' All existing options — koi baat nahi, swagat hai — felt either dismissive or archaic. Velkāmya fills that gap with warmth.",
    examples: [
      { label: "💬 WhatsApp", them: "Yaar tune meri itni help ki — thank you so much 🥺", me: "Velkāmya! Tu bhi hamesha mere liye hoti hai 💕" },
      { label: "📚 College Chat", them: "Bhai notes ke liye shukriya, seriously life saver hai tu.", me: "Velkāmya yaar. Exam mein achha karna bas." },
      { label: "📸 Instagram", them: "Thanks for always showing up fr fr ❤️", me: "Velkāmya — anytime, always 🤝" }
    ],
    originStory: [
      { date: "Early 2026", title: "The Gap Gets Noticed", body: "On Indian X (Twitter) and Instagram comment sections, Hinglish speakers started realizing that Hindi had no casual equivalent to 'you're welcome.' Every existing phrase fell flat." },
      { date: "Mid 2026 · @avgec", title: "The Word Is Coined", body: "By blending the English root 'welcome' with the soft conversational Hindi suffix '-ya' (common in dialects and terms like 'bhaiya'), Velkāmya was born. One comment reply. Instantly felt right." },
      { date: "2026 Onward", title: "Organic Spread", body: "WhatsApp groups, YouTube threads, Instagram Reels. The word spread because it sounds like it always existed — that's the mark of a word that was genuinely needed." }
    ],
    whyViral: [
      { title: "Sounds authentic", desc: "First time you hear it, it doesn't feel invented — it sounds like a dialect word that always existed." },
      { title: "Phonetically perfect", desc: "/veːl-kaːm-ya/ has natural rhythm and rolls off the tongue with genuine satisfaction." },
      { title: "Fills a real gap", desc: "Hindi had no casual 'you're welcome.' This word solves a real daily communication need." },
      { title: "Meme-ready", desc: "\"Velkāmya ho!\" as a dramatic reply has obvious viral Reel potential." }
    ],
    relatedSlangs: ["sus", "rizz", "delulu"],
    seoKeywords: ["velkamya meaning", "velkamya kya hai", "velkamya meaning in hindi", "gen z hindi slang 2026"]
  },

  {
    id: "sus", word: "Sus", slug: "sus",
    devanagari: null, pronunciation: "/sʌs/",
    shortMeaning: "Suspicious or suspect. Side-eye incarnate.",
    fullMeaning: "Short for 'suspicious' or 'suspect.' Used to describe someone or something that seems sketchy, untrustworthy, or acting in a way that raises red flags. Can refer to behavior, a vibe, or a person.",
    tag: "classic", year: 2018, language: "English", coinedBy: "Among Us community", origin: "Gaming / Among Us",
    culturalContext: "Originated in gaming communities discussing 'suspect' players. Among Us (2020) brought it mainstream. Now universal shorthand for anything or anyone that seems off or sketchy.",
    examples: [
      { label: "💬 Group Chat", them: "Bro he said he was home all night but I saw his car wasn't there 👀", me: "That's so sus omg." },
      { label: "🎮 Gaming", them: "RedPlayer was just hanging near the vents for like 5 mins.", me: "Mad sus. Vote him." },
      { label: "📱 Twitter", them: "Why did they delete their last three tweets?", me: "Very sus behavior honestly." }
    ],
    originStory: [
      { date: "Pre-2018", title: "The Slang Root", body: "'Sus' as slang for suspicious existed in British slang for decades. UK youth used it to describe sketchy situations and people long before it went global." },
      { date: "2018–2019", title: "Gaming Communities Pick It Up", body: "Online gaming communities, especially in survival and deception games, started using 'sus' to describe players acting suspiciously — setting the stage for its explosion." },
      { date: "2020 · Among Us", title: "Global Viral Moment", body: "Among Us became the most-played game in the world during the pandemic lockdowns. 'Sus' became its signature word, streaming to hundreds of millions of viewers worldwide." }
    ],
    whyViral: [
      { title: "Short and punchy", desc: "Three letters. Says everything. Sus is economy of expression at its finest." },
      { title: "Universally relatable", desc: "Everyone knows that feeling of 'something's off here.' Sus captured it perfectly." },
      { title: "Among Us timing", desc: "Riding a game played by 500M people at the exact moment the world was stuck at home — perfect storm." },
      { title: "Tone flexibility", desc: "Works as accusation, joke, serious concern, or aesthetic. That range keeps it alive years later." }
    ],
    relatedSlangs: ["rizz", "savage", "goat"],
    seoKeywords: ["sus meaning", "sus slang meaning", "what does sus mean", "sus meaning in english"]
  },

  {
    id: "rizz", word: "Rizz", slug: "rizz",
    devanagari: null, pronunciation: "/rɪz/",
    shortMeaning: "Natural charm or charisma that attracts people effortlessly.",
    fullMeaning: "The innate ability to attract people romantically or socially through effortless charm, charisma, and smooth communication. You either have it or you don't — but rizz can be developed. 'W Rizz' means excellent game. 'L Rizz' means you're trying too hard.",
    tag: "trending", year: 2022, language: "English", coinedBy: "Kai Cenat", origin: "Twitch / NY slang",
    culturalContext: "NYC and Black American vernacular gave us the concept, streamer Kai Cenat gave it the name. Now it's a global Gen Z vocabulary staple — even Oxford named it Word of the Year 2023.",
    examples: [
      { label: "💬 Text Conversation", them: "How did you get her number within 5 minutes??", me: "Bro I just have rizz, can't explain it 😭" },
      { label: "👀 Shade Throwing", them: "He texted 'hey' with no follow-up. What is that.", me: "Absolute L rizz. Tragic honestly." },
      { label: "📱 Complimenting", them: "The way he talked to literally everyone at that party...", me: "Unspoken rizz. He didn't even have to try." }
    ],
    originStory: [
      { date: "Pre-2022", title: "NYC Street Roots", body: "The concept of effortless social magnetism has been part of NYC and Black American vernacular for generations. 'Charisma' was never quite the right word — too formal, too effort-y." },
      { date: "2022 · Kai Cenat", title: "The Word Gets Named", body: "Twitch streamer Kai Cenat started using 'rizz' in his streams to describe that specific quality of smooth, effortless charm. His massive platform made it the vocabulary of millions almost overnight." },
      { date: "December 2023", title: "Oxford Word of the Year", body: "Oxford University Press named 'rizz' the Word of the Year 2023. From a Twitch stream to a dictionary board — the full journey took under 18 months." }
    ],
    whyViral: [
      { title: "Named something real", desc: "Everyone knew the concept. Nobody had the perfect word. Rizz gave language to something everyone already understood." },
      { title: "Kai Cenat's reach", desc: "One of Twitch's biggest streamers. When he speaks, a generation listens." },
      { title: "Oxford validation", desc: "Word of the Year 2023. Academic stamp on Gen Z slang = full mainstream crossover." },
      { title: "Infinitely meme-able", desc: "'Unspoken rizz,' 'W/L rizz,' 'rizzler' — the word spawned an entire ecosystem of derivatives." }
    ],
    relatedSlangs: ["savage", "lit", "goat"],
    seoKeywords: ["rizz meaning", "rizz slang meaning", "what does rizz mean", "rizz definition"]
  },

  {
    id: "delulu", word: "Delulu", slug: "delulu",
    devanagari: null, pronunciation: "/dɪ-luː-luː/",
    shortMeaning: "Being delusionally optimistic — but make it cute.",
    fullMeaning: "A playful, self-aware shortening of 'delusional.' Describes someone who has completely unrealistic expectations — about a crush, a situation, or life in general. 'Delulu is the solulu' means your delusions might just save you.",
    tag: "trending", year: 2023, language: "English", coinedBy: "K-pop fan communities", origin: "K-pop / TikTok",
    culturalContext: "Started in K-pop fandom culture where being 'delusional' about your bias returning your feelings was a shared joke. TikTok transformed it into universally relatable self-aware humor about manifestation and cope.",
    examples: [
      { label: "💬 Self-aware", them: "He liked your post from 3 years ago. That means nothing.", me: "Okay I know I'm being delulu but we're literally soulmates 😭" },
      { label: "🌟 Manifestation", them: "You really think you're gonna get that job with zero experience?", me: "Delulu is the solulu babe. Watch me." },
      { label: "📱 Comment Section", them: "She really thinks he's going to text back after 3 weeks.", me: "Let her be delulu in peace, she's happy." }
    ],
    originStory: [
      { date: "2019–2021", title: "K-pop Fandom Roots", body: "K-pop stan culture has its own language. Fans who fantasized about their idol noticing them were affectionately called 'delulu.' The word was self-deprecating, warm, and communal." },
      { date: "2023 · TikTok", title: "Universal Crossover", body: "TikTok creators started using delulu to describe their own optimistic, reality-bending thinking. It resonated because Gen Z decided that optimism — even irrational optimism — is a survival strategy." },
      { date: "Mid 2023", title: "Delulu is the Solulu", body: "The phrase 'delulu is the solulu' became its own meme. The self-aware irony of embracing your own delusions as a coping mechanism captured exactly the Gen Z relationship with mental health and humor." }
    ],
    whyViral: [
      { title: "Self-aware humor", desc: "Gen Z loves ironic self-deprecation. Calling yourself delulu is both honest and funny." },
      { title: "Relatable universally", desc: "Everyone has had an irrational hope or crush. Delulu gave that feeling a name." },
      { title: "K-pop to mainstream pipeline", desc: "K-pop fandoms are among the internet's most effective cultural transmission systems." },
      { title: "\"Delulu is the solulu\"", desc: "A complete philosophy in four words. That kind of meme density always wins the internet." }
    ],
    relatedSlangs: ["rizz", "savage", "lit"],
    seoKeywords: ["delulu meaning", "delulu slang", "what does delulu mean", "delulu is the solulu meaning"]
  },

  {
    id: "savage", word: "Savage", slug: "savage",
    devanagari: null, pronunciation: "/ˈsav-ɪdʒ/",
    shortMeaning: "Unbothered, fierce, and not here for anyone's nonsense.",
    fullMeaning: "Someone who is impressively bold, fearless, and unapologetically direct — usually in a way that earns admiration. A savage doesn't sugarcoat, doesn't back down, and doesn't apologize for taking up space. Often used as the highest compliment.",
    tag: "classic", year: 2014, language: "English / AAVE", coinedBy: "Black American culture / hip-hop", origin: "AAVE / Hip-hop culture",
    culturalContext: "Rooted in AAVE and hip-hop's celebration of uncompromising confidence. Mainstream adoption accelerated through Rihanna's 'Savage' and Megan Thee Stallion's 'Savage (Remix).'",
    examples: [
      { label: "💬 Complimenting", them: "She literally told her boss 'find someone else' and walked out??", me: "Absolute savage honestly. Respect." },
      { label: "📱 Clap-back", them: "They literally replied to his negativity with one word: 'cool.'", me: "That's cold. That's savage. No cap." },
      { label: "🎮 Gaming", them: "He 1v4'd them with no armor left.", me: "Savage mode activated fr." }
    ],
    originStory: [
      { date: "1990s–2000s", title: "Hip-Hop Foundation", body: "Savage described someone with an intense, uncompromising hustle and confidence. It carried respect — you didn't call just anyone savage." },
      { date: "2014–2016", title: "Social Media Amplification", body: "Twitter and Vine made 'savage' a reaction word — the perfect response to boldly, fearlessly direct behavior. Savage reply threads became a genre." },
      { date: "2020 · Megan Thee Stallion", title: "Global Anthem", body: "'Savage (Remix)' featuring Beyoncé became a cultural moment. The song's framing of savage as aspirational and empowering cemented the word's permanent place in global pop vocabulary." }
    ],
    whyViral: [
      { title: "Aspirational framing", desc: "Nobody wants to be boring. Savage is the opposite of boring." },
      { title: "Hip-hop + dance challenge", desc: "Megan's 'Savage' dance challenge hit TikTok at exactly the right moment." },
      { title: "Gender and power", desc: "The word evolved to celebrate women's boldness specifically, giving it new cultural resonance." },
      { title: "Longevity", desc: "A decade after entering slang vocabulary, 'savage' still works. Classic status earned." }
    ],
    relatedSlangs: ["goat", "rizz", "lit"],
    seoKeywords: ["savage meaning slang", "savage meaning in english", "what does savage mean gen z"]
  },

  {
    id: "lit", word: "Lit", slug: "lit",
    devanagari: null, pronunciation: "/lɪt/",
    shortMeaning: "Excellent, exciting, on fire — the highest vibe.",
    fullMeaning: "Something that is intensely exciting, excellent, or amazing. 'That party was lit' means it was alive, full of energy, and everything good. Also used to describe someone who is high or drunk, though the general 'excellent vibes' meaning is more dominant now.",
    tag: "classic", year: 2015, language: "English / AAVE", coinedBy: "Hip-hop / Black American culture", origin: "AAVE / Music culture",
    culturalContext: "Originally described the sensation of being intoxicated. Hip-hop adopted it to describe high-energy, incredible environments. From there, it became the go-to compliment for anything exceptional.",
    examples: [
      { label: "🎉 Post-event", them: "Bro how was the concert last night?", me: "It was LIT. Best night of my life no cap." },
      { label: "📱 Hyping up", them: "The playlist you made for the roadtrip was everything.", me: "Had to make it lit, didn't I 😤" },
      { label: "💬 General hype", them: "This episode was actually incredible.", me: "Season's been lit fr, no mid episodes." }
    ],
    originStory: [
      { date: "Early 2000s", title: "The Intoxication Root", body: "'Lit' originally meant intoxicated — 'getting lit' was getting drunk or high. The image of being 'lit up' translated to heightened sensation and energy." },
      { date: "2013–2015", title: "Hip-Hop Reframe", body: "Artists like Travis Scott, Future, and Young Thug used 'lit' to describe incredible parties and moments. The intoxication meaning faded; the 'incredibly amazing' meaning took over." },
      { date: "2015–2016", title: "Twitter and Vine Explosion", body: "Social media turned 'lit' into the universal hype word. Simple, adaptable, and endlessly useful — the perfect slang evolution." }
    ],
    whyViral: [
      { title: "Simplicity", desc: "Three letters. One syllable. Maximum impact." },
      { title: "Positive energy only", desc: "It's a pure hype word with no real negative connotation." },
      { title: "Music culture pipeline", desc: "When artists at the top of the charts use a word, it becomes vocabulary within months." },
      { title: "Adaptability", desc: "The food was lit, that fit is lit, the energy in here is lit — infinite contexts." }
    ],
    relatedSlangs: ["savage", "goat", "rizz"],
    seoKeywords: ["lit meaning slang", "lit meaning in english", "what does lit mean gen z"]
  },

  {
    id: "goat", word: "GOAT", slug: "goat",
    devanagari: null, pronunciation: "/ɡoʊt/",
    shortMeaning: "Greatest Of All Time. The absolute peak of human excellence.",
    fullMeaning: "An acronym for 'Greatest Of All Time.' Used to describe someone so exceptional in their field that no one can compare. Being called the GOAT is the highest possible compliment — it puts you in a category of one.",
    tag: "classic", year: 2000, language: "English", coinedBy: "LL Cool J (popularized by Muhammad Ali)", origin: "Sports / Hip-hop",
    culturalContext: "Muhammad Ali's wife Lonnie Ali registered 'G.O.A.T Inc.' for Ali's brand in 2000. LL Cool J named his 2000 album 'G.O.A.T.' Sports culture then carried it into daily internet slang.",
    examples: [
      { label: "⚽ Sports", them: "Messi or Ronaldo?", me: "Messi. The discussion is over. Absolute GOAT." },
      { label: "🎵 Music", them: "The way she just performed that live with no backing track.", me: "She's the GOAT, no one is touching her vocally." },
      { label: "💬 Everyday", them: "You finished all the work and got the team credit?", me: "You're literally the GOAT for that 😭🐐" }
    ],
    originStory: [
      { date: "1960s–70s", title: "Ali's Legacy", body: "Muhammad Ali called himself 'The Greatest' throughout his career. The concept of the Greatest Of All Time was created for — and by — him." },
      { date: "2000 · LL Cool J", title: "The Acronym is Born", body: "LL Cool J released an album titled 'G.O.A.T. (Greatest Of All Time).' Lonnie Ali formalized it by registering the trademark. The acronym was officially coined." },
      { date: "2010s · Sports Twitter", title: "Internet Takeover", body: "Sports Twitter turned GOAT into the ultimate compliment currency. Every record broke sparked the GOAT debate. The 🐐 emoji became permanently associated with greatness." }
    ],
    whyViral: [
      { title: "High stakes compliment", desc: "There's only one GOAT per category. It means something to give it — and everything to receive it." },
      { title: "The 🐐 emoji", desc: "The goat emoji became inseparable from the acronym, making it visual and instantly recognizable." },
      { title: "Sports as culture", desc: "Sports fandom is one of the most emotionally engaged communities on the internet." },
      { title: "Generational debates", desc: "Jordan vs LeBron. Messi vs Ronaldo. Every GOAT debate generates millions of views." }
    ],
    relatedSlangs: ["savage", "rizz", "lit"],
    seoKeywords: ["goat meaning slang", "goat acronym meaning", "what does goat mean", "goat greatest of all time"]
  },

  /* ── NEW ENTRIES ──────────────────────────────────────── */

  {
    id: "slay", word: "Slay", slug: "slay",
    devanagari: null, pronunciation: "/sleɪ/",
    shortMeaning: "Doing something exceptionally well or looking absolutely amazing.",
    fullMeaning: "To 'slay' means to absolutely nail something — whether it's a look, a performance, a speech, or just existing confidently. 'She slayed' means she was flawless. Telling someone to 'slay' is one of the highest encouragements you can give. It carries energy, celebration, and unapologetic pride.",
    tag: "trending", year: 2013, language: "English / AAVE / Drag culture", coinedBy: "Black drag and ballroom culture", origin: "AAVE / Ballroom / Beyoncé",
    culturalContext: "Rooted in African American drag and ballroom culture where 'slaying' meant dominating a performance with total confidence. Beyoncé's 2016 'I slay' lyric in Formation sent the word into the global mainstream permanently.",
    examples: [
      { label: "💬 Hyping a friend", them: "I'm nervous about my presentation tomorrow...", me: "You're going to absolutely SLAY it, stop doubting yourself." },
      { label: "📸 Instagram comment", them: "Posted the fit pic 🔥", me: "You are SLAYING this era omg 🔥🔥" },
      { label: "🎭 After a performance", them: "How did the audition go?", me: "Girl she SLAYED. They were literally speechless." }
    ],
    originStory: [
      { date: "1980s–90s", title: "Ballroom Beginnings", body: "In New York's underground drag ballroom scene, 'slaying' meant utterly dominating your category. It was the language of excellence among communities creating their own standards of beauty and success." },
      { date: "2013–2015", title: "Social Media Adoption", body: "Twitter and Tumblr, fueled by fan communities and Black internet culture, started using 'slay' as a term for anything done at an elite level. Drag vocabulary was crossing over." },
      { date: "2016 · Beyoncé", title: "Formation Cements It", body: "'I slay, I slay, I slay' — Beyoncé's Formation made 'slay' the anthem of unapologetic excellence. From a cultural niche to every group chat in the world in one Super Bowl performance." }
    ],
    whyViral: [
      { title: "Drag culture energy", desc: "Ballroom and drag have always been ahead of mainstream trends. When their vocabulary escapes, it carries that original fire." },
      { title: "Beyoncé effect", desc: "Few artists can single-handedly mainstream a word. Formation made slay unavoidable." },
      { title: "Versatility", desc: "'Slay' works as verb, noun, and exclamation. Maximum flexibility." },
      { title: "Pure positivity", desc: "In a cynical internet, an unambiguously celebratory word has enormous staying power." }
    ],
    relatedSlangs: ["savage", "rizz", "ate"],
    seoKeywords: ["slay meaning slang", "what does slay mean", "slay gen z meaning", "slay definition"]
  },

  {
    id: "nocap", word: "No Cap", slug: "nocap",
    devanagari: null, pronunciation: "/noʊ kæp/",
    shortMeaning: "No lie — for real, I'm being completely serious.",
    fullMeaning: "'No cap' means 'no lie' or 'I'm being completely honest.' When you add 'no cap' to a statement, you're emphasizing you genuinely mean it — no exaggeration, no fronting. Its opposite, 'cap' or 'capping', means someone is lying or exaggerating.",
    tag: "trending", year: 2017, language: "English / AAVE", coinedBy: "Young Thug and Quavo / Black American slang", origin: "AAVE / Atlanta hip-hop",
    culturalContext: "Rooted in AAVE where 'capping' meant lying or exaggerating. 'No cap' became Atlanta trap music's verbal signature of authenticity. It spread globally via streaming culture and became Gen Z's primary truth-emphasis tool.",
    examples: [
      { label: "💬 Emphasizing truth", them: "You really ran a 5K today?", me: "No cap, finished it in 28 minutes too." },
      { label: "🎵 Music reaction", them: "That album is mid tho.", me: "No cap that album is their best work, not even close." },
      { label: "📱 Calling someone out", them: "I totally knew that was going to happen.", me: "Cap. You literally said the opposite yesterday." }
    ],
    originStory: [
      { date: "Pre-2017", title: "AAVE Roots", body: "'Cap' meaning a lie has roots in African American Vernacular English going back decades. 'Don't cap on me' meant don't lie to me. The phrase existed in communities long before it hit mainstream." },
      { date: "2017 · Young Thug & Quavo", title: "Hip-hop Amplification", body: "Young Thug and Quavo's track 'No Cap' (2017) put the phrase into heavy rotation in trap music. Atlanta's dominance over hip-hop culture meant this phrase would travel fast." },
      { date: "2018–2020", title: "TikTok and Twitter Takeover", body: "'No cap' became the go-to emphasis tag for Gen Z on every platform. The 🧢 emoji became its universal shorthand." }
    ],
    whyViral: [
      { title: "Simple and versatile", desc: "Two words. Works at the end of any sentence. Zero learning curve." },
      { title: "Hip-hop credibility", desc: "Atlanta trap gave No Cap its authenticity signature. Credible origins make slang stick." },
      { title: "The cap/no cap duality", desc: "Having both 'cap' (lie) and 'no cap' (truth) created a complete system." },
      { title: "🧢 emoji", desc: "The cap emoji added a visual shorthand that made 'no cap' even more meme-able." }
    ],
    relatedSlangs: ["bet", "lowkey", "bussin"],
    seoKeywords: ["no cap meaning", "no cap slang meaning", "what does no cap mean", "no cap definition"]
  },

  {
    id: "bet", word: "Bet", slug: "bet",
    devanagari: null, pronunciation: "/bɛt/",
    shortMeaning: "Okay, yes, agreed — I'm down for it.",
    fullMeaning: "'Bet' is an affirmative response meaning 'okay,' 'yes,' 'I agree,' or 'it's settled.' It's a casual, confident confirmation. When someone proposes something and you reply 'bet,' you're saying you're in. It can also mean 'watch me' or 'challenge accepted' when said defiantly.",
    tag: "trending", year: 2015, language: "English / AAVE", coinedBy: "Black American slang", origin: "AAVE / Southern US slang",
    culturalContext: "Evolved from gambling language — 'I'd bet on it' shortened to 'bet' as an emphatic agreement. It exploded around 2019–2021 when it became the default Gen Z agreement word across every platform.",
    examples: [
      { label: "💬 Making plans", them: "I'll pick you up at 7?", me: "Bet. See you then." },
      { label: "🎮 Accepting a challenge", them: "I bet you can't finish that whole pizza.", me: "Bet 👀" },
      { label: "📱 Confirming", them: "Don't forget the assignment is due tomorrow.", me: "Bet, already done." }
    ],
    originStory: [
      { date: "Pre-2010s", title: "AAVE Origins", body: "'Bet' as an agreement term has roots in AAVE. The gambling connotation — 'I'd bet my money on it' — gave it its confident, certain energy." },
      { date: "2015–2018", title: "SoundCloud Rap Era", body: "The SoundCloud rap era brought AAVE into the mainstream internet vocabulary. 'Bet' traveled through music, YouTube, and Twitter as casual creator-to-audience language." },
      { date: "2019–2021", title: "TikTok Default", body: "TikTok's comment sections made 'bet' the universal reply to agreement. Short, punchy, works in any format — it became the Gen Z 'okay.'" }
    ],
    whyViral: [
      { title: "One word, infinite uses", desc: "Confirmation, challenge-acceptance, casual agreement — 'bet' does the work of a full sentence in three letters." },
      { title: "Energy it carries", desc: "There's a confidence in 'bet' that 'okay' doesn't have. It sounds decisive without being aggressive." },
      { title: "TikTok comments", desc: "Short-form platforms reward short-form language. 'Bet' was built for comment section culture." },
      { title: "Cross-cultural adoption", desc: "Started in AAVE, traveled through music and gaming, landed everywhere." }
    ],
    relatedSlangs: ["nocap", "lowkey", "slay"],
    seoKeywords: ["bet meaning slang", "what does bet mean", "bet slang definition", "bet gen z meaning"]
  },

  {
    id: "ate", word: "Ate", slug: "ate",
    devanagari: null, pronunciation: "/eɪt/",
    shortMeaning: "Did an incredible job — absolutely devoured it.",
    fullMeaning: "To 'ate' means someone completely dominated what they were doing — a performance, a look, a moment. 'She ate that' means she absolutely nailed it and left nothing to critique. Often extended to 'ate and left no crumbs' — meaning the job was so thorough there's nothing left to pick apart.",
    tag: "trending", year: 2021, language: "English / Drag / AAVE", coinedBy: "Black drag and ballroom culture", origin: "Drag culture / TikTok",
    culturalContext: "Originated in Black drag and ballroom culture where 'eating' a look meant consuming it completely with skill and confidence. TikTok's performance and fashion communities brought it mainstream around 2021–2022.",
    examples: [
      { label: "📸 Fashion post", them: "Just dropped my fit pic from last night 🔥", me: "You ATE and left absolutely no crumbs. Iconic." },
      { label: "🎤 After a performance", them: "How did Lizzo do at the VMAs?", me: "She ate every single second of that stage. No notes." },
      { label: "💬 Complimenting work", them: "Did you see the presentation she gave today?", me: "She ate it. The whole room was locked in the whole time." }
    ],
    originStory: [
      { date: "1990s–2000s", title: "Ballroom Origins", body: "In ballroom and drag performance culture, 'eating' a look or scene meant consuming it with total conviction. The metaphor: you devoured the performance so completely nothing was left." },
      { date: "2019–2021", title: "TikTok Fashion Era", body: "As TikTok's fashion and performance communities grew, vocabulary from drag culture accelerated into the mainstream. 'She ate' started appearing in comment sections to celebrate exceptional videos." },
      { date: "2022", title: "Left No Crumbs", body: "'Ate and left no crumbs' became its own complete phrase — emphasizing the performance was so thorough there's literally nothing to critique." }
    ],
    whyViral: [
      { title: "Food metaphor magic", desc: "'She ate it' lands differently than 'she did well' — it's physical, greedy, complete." },
      { title: "Drag culture prestige", desc: "Drag vocabulary carries an energy mainstream language lacks. When it crosses over, it brings that edge." },
      { title: "The 'no crumbs' extension", desc: "'Ate and left no crumbs' became a meme format in itself." },
      { title: "TikTok comment culture", desc: "'ATE' is the perfect three-letter comment for a stellar video." }
    ],
    relatedSlangs: ["slay", "rizz", "drip"],
    seoKeywords: ["ate meaning slang", "ate and left no crumbs meaning", "what does ate mean gen z", "ate slang definition"]
  },

  {
    id: "tea", word: "Tea", slug: "tea",
    devanagari: null, pronunciation: "/tiː/",
    shortMeaning: "Hot gossip or juicy inside information.",
    fullMeaning: "Tea means gossip, drama, or insider information — especially the kind that's scandalous, surprising, or exclusive. 'Spill the tea' means tell me the gossip. 'What's the tea?' asks for the current drama. The hotter the information, the better the tea.",
    tag: "classic", year: 2012, language: "English / Drag / AAVE", coinedBy: "Drag culture / Black American vernacular", origin: "Drag culture / Southern US",
    culturalContext: "The expression 'spilling the T' (short for 'truth') originated in Black drag culture in the 1990s-2000s. 'T' became 'tea,' and 'spilling' became the universal action. RuPaul's Drag Race brought it into mass awareness from 2009 onward.",
    examples: [
      { label: "💬 Group chat gossip", them: "Did you hear what happened at Priya's party??", me: "NO tell me everything, SPILL THE TEA RIGHT NOW." },
      { label: "📱 Asking for drama", them: "I just got back from the meeting.", me: "And??? What's the tea?? Don't leave me hanging." },
      { label: "🎭 Receiving gossip", them: "Okay so basically she showed up uninvited and then—", me: "The TEA is scalding rn omg keep going 👀☕" }
    ],
    originStory: [
      { date: "1990s", title: "The T for Truth", body: "In Black drag culture and Southern gay communities, 'T' stood for 'truth' — the real, unfiltered story. 'Spilling the T' meant revealing what actually happened." },
      { date: "2009 onward · RuPaul", title: "Drag Race Amplification", body: "RuPaul's Drag Race brought drag vocabulary to a massive television audience. 'The tea' became regular show vocabulary, crossing into mainstream LGBT+ and then broader internet culture." },
      { date: "2014–2016 · Twitter", title: "Universal Gossip Currency", body: "Twitter turned 'spill the tea' into the default phrase for gossip culture. The ☕ emoji became permanently associated with drama." }
    ],
    whyViral: [
      { title: "Gossip is universal", desc: "Every culture, every age group, every group chat has gossip. Tea just gave it a cooler name." },
      { title: "☕ Emoji shorthand", desc: "The tea cup emoji became an instant, platform-agnostic symbol for drama." },
      { title: "RuPaul pipeline", desc: "Drag Race is one of the most effective culture transmission machines in television history." },
      { title: "Infinite scenarios", desc: "Celebrity tea, friend tea, work tea, family tea — the word works in every context where information exists." }
    ],
    relatedSlangs: ["salty", "lowkey", "nocap"],
    seoKeywords: ["tea meaning slang", "spill the tea meaning", "what does tea mean gen z", "tea slang gossip"]
  },

  {
    id: "bussin", word: "Bussin'", slug: "bussin",
    devanagari: null, pronunciation: "/ˈbʌs.ɪn/",
    shortMeaning: "This food (or thing) is absolutely incredible — beyond delicious.",
    fullMeaning: "Bussin' means something is exceptionally good, particularly food. 'This is bussin'' is the highest food compliment in Gen Z vocabulary. It carries genuine enthusiasm — not just 'good,' but unexpectedly, overwhelmingly, stop-what-you're-doing good.",
    tag: "trending", year: 2020, language: "English / AAVE", coinedBy: "Black American slang", origin: "AAVE / Food culture",
    culturalContext: "Rooted in African American Vernacular English where 'bussin' described something exploding with goodness. It was always used in food contexts in Black communities, but TikTok's food content era — especially during the pandemic — launched it to global mainstream.",
    examples: [
      { label: "🍕 Food reaction", them: "Try the biryani, just trust me.", me: "Bro this is BUSSIN. Why is it this good??" },
      { label: "💬 Restaurant review", them: "How was that new ramen place?", me: "It was bussin no cap. Best ramen I've had in this city." },
      { label: "🎵 Extended usage", them: "Have you heard that new track yet?", me: "It's genuinely bussin, been on repeat for two days." }
    ],
    originStory: [
      { date: "Pre-2020", title: "AAVE Roots", body: "In Black American communities, 'bussin' described something overflowing with quality — literally busting at the seams with goodness. It was food-first from the beginning." },
      { date: "2020 · TikTok Food Content", title: "Pandemic Kitchen Era", body: "When the world went into lockdown, TikTok's food content exploded. 'Bussin' became the go-to comment for any genuinely incredible food video." },
      { date: "2021 · Viral Moment", title: "The Crossover", body: "A viral TikTok food review moment accelerated the word's crossover into broader demographics, sparking debates about Gen Z vocabulary that only made the word more famous." }
    ],
    whyViral: [
      { title: "Food is universal", desc: "Everyone eats. A word that perfectly describes incredible food will always find its audience." },
      { title: "TikTok food era", desc: "The pandemic made everyone a home cook and food critic. Bussin arrived at exactly the right cultural moment." },
      { title: "Sound of the word", desc: "'Bussin' sounds like what it means — something bursting, overflowing, explosive with goodness." },
      { title: "The repetition trick", desc: "'Bussin bussin' (said twice) became a format unto itself, signaling something next-level." }
    ],
    relatedSlangs: ["nocap", "slaps", "lit"],
    seoKeywords: ["bussin meaning", "bussin slang meaning", "what does bussin mean", "bussin bussin meaning"]
  },

  {
    id: "vibecheck", word: "Vibe Check", slug: "vibecheck",
    devanagari: null, pronunciation: "/vaɪb tʃɛk/",
    shortMeaning: "Assessing the energy or mood of a person or situation.",
    fullMeaning: "A vibe check is an informal assessment of someone's current energy, attitude, or mood — or the general atmosphere of a situation. 'You passed the vibe check' means you're giving good energy. 'Failed the vibe check' means something is off.",
    tag: "classic", year: 2019, language: "English", coinedBy: "Twitter / Gen Z internet", origin: "Twitter meme culture",
    culturalContext: "Emerged from Twitter's 2019 meme era where 'vibe check' was paired with threatening or absurd scenarios as dark humor. The threatening angle faded but the vocabulary stuck as a genuine energy-assessment term.",
    examples: [
      { label: "💬 New situation", them: "How's the party so far?", me: "Still doing the vibe check honestly. Jury's out." },
      { label: "📱 Checking on a friend", them: "Vibe check — you good?", me: "Passing barely. Long day but I'll survive 😭" },
      { label: "🎬 Movie reaction", them: "Should I watch that new show?", me: "I'm 2 episodes in and it's passing the vibe check so far." }
    ],
    originStory: [
      { date: "Late 2019", title: "Twitter Meme Origin", body: "The 'vibe check' meme started on Twitter in 2019, typically featuring someone appearing suddenly to 'check the vibes' — originally as chaotic, often dark humor." },
      { date: "2019–2020", title: "From Meme to Vocabulary", body: "'Vibe check' detached from its meme origins and became a genuine, neutral term for assessing energy or mood." },
      { date: "2020 Onward", title: "Mainstream Adoption", body: "Brands, teachers, parents, and media all adopted 'vibe check' — the ultimate signal that a phrase has escaped its internet origins." }
    ],
    whyViral: [
      { title: "Meme-to-phrase pipeline", desc: "The most durable slang often starts as jokes. The vibe check meme had the right format to leave a lasting phrase behind." },
      { title: "Fills a real gap", desc: "There was no quick way to ask 'what's the energy like here?' Vibe check solved that in two words." },
      { title: "Flexible application", desc: "Apply it to people, places, art, food, moments — anything with an atmosphere." },
      { title: "Pass/fail simplicity", desc: "Passed / failed the vibe check. Binary verdict. Instantly understood." }
    ],
    relatedSlangs: ["lowkey", "highkey", "tea"],
    seoKeywords: ["vibe check meaning", "what does vibe check mean", "vibe check slang", "failed the vibe check meaning"]
  },

  {
    id: "maincharacter", word: "Main Character", slug: "maincharacter",
    devanagari: null, pronunciation: "/meɪn ˈkær.ɪk.tər/",
    shortMeaning: "Acting like the lead of your own life story — protagonist energy.",
    fullMeaning: "Having 'main character energy' means living as if you're the protagonist of a movie or TV show — doing dramatic things, making decisions with cinematic confidence. It can be a compliment (you're living boldly) or a gentle roast (you're being self-absorbed).",
    tag: "trending", year: 2020, language: "English", coinedBy: "TikTok / Gen Z internet", origin: "TikTok aesthetic culture",
    culturalContext: "Emerged from TikTok's 'main character' trend where users filmed themselves as if in a movie. It intersects with the Gen Z philosophy of treating your own life as a story worth telling and yourself as the hero worth rooting for.",
    examples: [
      { label: "💬 Living boldly", them: "You quit your job and booked a solo trip the same day??", me: "Main character behavior only this year, no more supporting roles." },
      { label: "📸 Aesthetic post", them: "The way she's walking through the airport with headphones in 😭", me: "She is giving MAIN CHARACTER. The cinematography she thinks she has." },
      { label: "🎬 Self-commentary", them: "Why are you walking in slow motion to the coffee machine?", me: "Main character energy doesn't turn off." }
    ],
    originStory: [
      { date: "2020 · TikTok", title: "The Trend Begins", body: "TikTok users started filming 'main character' videos — treating mundane moments as cinematic scenes. The trend celebrated the mundane as meaningful." },
      { date: "2020–2021", title: "Philosophy Emerges", body: "'Main character energy' became a lifestyle philosophy — stop being a side character in your own life. Take up space, make bold decisions." },
      { date: "2021–2022", title: "The Dark Side: Main Character Syndrome", body: "'Main character syndrome' emerged as its critique — the tendency to treat everyone else as supporting characters rather than full people." }
    ],
    whyViral: [
      { title: "Narrative identity", desc: "Humans are hardwired for stories. Framing your own life as a narrative taps something deeply appealing." },
      { title: "TikTok's visual format", desc: "Main character videos look incredible on TikTok — slow motion, golden hour, sad music." },
      { title: "Self-empowerment language", desc: "'Be your own main character' is exactly the kind of permission people were looking for." },
      { title: "Self-aware irony", desc: "The phrase works earnestly and sarcastically — real admiration or playful mockery." }
    ],
    relatedSlangs: ["glowup", "slay", "ate"],
    seoKeywords: ["main character energy meaning", "main character syndrome meaning", "main character slang", "what is main character energy"]
  },

  {
    id: "glowup", word: "Glow Up", slug: "glowup",
    devanagari: null, pronunciation: "/ɡloʊ ʌp/",
    shortMeaning: "A major positive transformation in appearance, confidence, or life situation.",
    fullMeaning: "A glow up is a significant positive transformation — typically in appearance, confidence, style, or life circumstances. Unlike a simple 'makeover,' a glow up implies a whole-person upgrade: you look better, you feel better, you ARE better.",
    tag: "trending", year: 2016, language: "English / AAVE", coinedBy: "Black American culture / Lil B", origin: "AAVE / Hip-hop culture",
    culturalContext: "The phrase 'glow up' was popularized in hip-hop culture. It resonated because it framed transformation not as changing for others, but as becoming more fully yourself — a positive, self-directed evolution.",
    examples: [
      { label: "📸 Throwback post", them: "Found my middle school photos 😭", me: "Bro the GLOW UP is insane. Look at you now compared to that." },
      { label: "💬 Post-breakup", them: "She's doing amazing since the breakup — new job, new look, everything.", me: "Classic glow up. He lost the best thing he had and she thrived." },
      { label: "🌟 Self-narration", them: "This year was rough but...", me: "Yeah but look at your glow up from January to now. You're unrecognizable in the best way." }
    ],
    originStory: [
      { date: "Early 2010s", title: "Hip-hop Roots", body: "The concept of glowing up — elevating yourself, rising from humble beginnings to excellence — has always been in hip-hop DNA. Lil B and other artists used it to describe personal elevation." },
      { date: "2015–2016", title: "Instagram Era", body: "Instagram's before-and-after culture made 'glow up' the perfect caption. Fitness transformations, post-breakup reinventions, high school vs. college photos." },
      { date: "2016 Onward", title: "Self-Empowerment Anthem", body: "The glow up narrative became a cornerstone of Gen Z self-improvement culture — rise from wherever you are into whoever you want to be." }
    ],
    whyViral: [
      { title: "Universal human aspiration", desc: "Everyone wants to become a better version of themselves. Glow up gave that desire a name and a narrative." },
      { title: "Before/after format", desc: "Visual platforms love before/after content. Glow up was invented for Instagram and TikTok culture." },
      { title: "Positive framing", desc: "Unlike 'makeover,' glow up celebrates growth. The energy is additive, not corrective." },
      { title: "Post-heartbreak mythology", desc: "'Breakup glow up' is one of the internet's most beloved archetypes." }
    ],
    relatedSlangs: ["slay", "maincharacter", "drip"],
    seoKeywords: ["glow up meaning", "glow up slang meaning", "what does glow up mean", "glow up definition"]
  },

  {
    id: "simp", word: "Simp", slug: "simp",
    devanagari: null, pronunciation: "/sɪmp/",
    shortMeaning: "Someone who does excessive things for someone they like — usually unrewarded.",
    fullMeaning: "A simp goes to extreme, often embarrassing lengths to win someone's affection — usually without equal energy in return. Classic simp behaviors: agreeing with everything, spending large sums, defending them online at all costs, or dropping everything for someone who barely notices you.",
    tag: "classic", year: 2019, language: "English", coinedBy: "TikTok / General internet", origin: "TikTok / Twitch culture",
    culturalContext: "While 'simp' existed in hip-hop slang earlier (Tupac used it in the 1990s), TikTok's 'Simp Nation' meme era of 2019–2020 brought it to a global Gen Z audience.",
    examples: [
      { label: "💬 Calling out behavior", them: "He drove 3 hours at midnight to return her charger she forgot.", me: "Bro is a certified simp. She doesn't even know his last name." },
      { label: "📱 Self-aware", them: "I bought her the concert tickets AND offered to drive.", me: "I am simping so hard rn but I cannot stop myself." },
      { label: "🎮 Twitch/streaming", them: "He gifted her 50 subs in a row again.", me: "Simp behavior logged. She called him a homie in return." }
    ],
    originStory: [
      { date: "1990s · Hip-hop", title: "Original Usage", body: "Tupac Shakur used 'simp' in the early 1990s to describe a man who was overly submissive. In AAVE and hip-hop, 'simp' described someone who prioritized romantic interests to the point of losing self-respect." },
      { date: "2019 · TikTok", title: "Simp Nation", body: "TikTok's 'Simp Nation' meme format — videos of over-the-top devotion acts set to dramatic music — made simp a Gen Z household word." },
      { date: "2020", title: "The Great Simp Discourse", body: "The word sparked cultural debate: is 'simp' accountability for not valuing yourself, or is it shaming men for showing emotion? The discourse kept the word trending for months." }
    ],
    whyViral: [
      { title: "Relatable scenario", desc: "Most people have either been a simp or watched someone close to them become one. The recognition is instant." },
      { title: "Self-aware humor", desc: "Calling yourself a simp became a badge of ironic honor. The word survived because people reclaimed it laughingly." },
      { title: "TikTok meme format", desc: "The Simp Nation format was immediately replicable and highly relatable — perfect TikTok content DNA." },
      { title: "The discourse multiplier", desc: "Controversy about a word's meaning keeps it alive. The simp debate added months of additional cultural airtime." }
    ],
    relatedSlangs: ["rizz", "ghosting", "salty"],
    seoKeywords: ["simp meaning", "what does simp mean", "simp slang definition", "simp meaning gen z"]
  },

  {
    id: "flex", word: "Flex", slug: "flex",
    devanagari: null, pronunciation: "/flɛks/",
    shortMeaning: "Showing off or flaunting something impressive.",
    fullMeaning: "To flex means to show off, boast, or ostentatiously display something valuable — wealth, accomplishments, a relationship, or an experience. A 'flex' (noun) is the thing being shown off. Can be sincere admiration or ironic: 'that's a weird flex.'",
    tag: "classic", year: 2014, language: "English / AAVE", coinedBy: "Hip-hop / Bodybuilding culture", origin: "Hip-hop / Gym culture",
    culturalContext: "Borrowing from the literal physical act of flexing muscles, 'flex' became hip-hop's word for showing off status and wealth. It peaked as mainstream slang in 2014–2016 with Instagram's rise and rap's obsession with displays of success.",
    examples: [
      { label: "💬 Admiring a purchase", them: "He showed up to school in a brand new car.", me: "That is a serious flex ngl. What does his dad do?" },
      { label: "📱 Humble brag", them: "I got accepted to three Ivy Leagues but can only go to one 🙄", me: "The weird flex in this tweet is sending me." },
      { label: "🏋️ Gym context", them: "He's been lifting for 6 months straight.", me: "The results are showing, he's out here flexing every chance he gets." }
    ],
    originStory: [
      { date: "1990s", title: "Physical to Cultural", body: "Bodybuilding and fitness culture used 'flex' literally. Hip-hop borrowed the physical metaphor to describe showing off material success: if you've got it, flex it." },
      { date: "2014–2016", title: "Instagram Flex Era", body: "Instagram's rise as a status-display platform was peak flex culture. Watches, cars, vacations, bodies — flexing was the entire economy of Instagram attention." },
      { date: "2018 · Weird Flex Meme", title: "The Ironic Turn", body: "'Weird flex but okay' became a massive meme format. This ironic version gave the word a second life and a new comedic dimension." }
    ],
    whyViral: [
      { title: "Instagram culture alignment", desc: "Social media was literally built for flexing. The word described what everyone was doing anyway." },
      { title: "Weird flex meme", desc: "The ironic 'weird flex but okay' gave the word a comedic extension that doubled its cultural footprint." },
      { title: "Physical metaphor clarity", desc: "Flexing muscles = showing off strength. The metaphor is so clean it barely feels like slang." },
      { title: "Hip-hop roots", desc: "When rap music uses a word and then becomes the most-streamed genre in the world, that word goes everywhere." }
    ],
    relatedSlangs: ["drip", "goat", "savage"],
    seoKeywords: ["flex meaning slang", "what does flex mean", "weird flex meaning", "flex slang definition"]
  },

  {
    id: "drip", word: "Drip", slug: "drip",
    devanagari: null, pronunciation: "/drɪp/",
    shortMeaning: "Your sense of style is immaculate — the outfit is dripping.",
    fullMeaning: "Drip refers to a person's overall style, fashion sense, or appearance — specifically when it's impressive, well-coordinated, and excellent. 'Your drip is fire' means your style is elite. 'He's dripping' means his look is so good it's practically overflowing with cool.",
    tag: "trending", year: 2018, language: "English / AAVE", coinedBy: "Atlanta hip-hop / Young Thug", origin: "AAVE / Atlanta trap culture",
    culturalContext: "Originated in Atlanta's trap music scene. Young Thug, Gunna and other artists popularized 'drip' as the supreme word for fashion excellence. Gunna's 'Drip Season' mixtape series made it his personal brand before it became universal fashion vocabulary.",
    examples: [
      { label: "💬 Outfit compliment", them: "Bro what are you wearing to the function tonight?", me: "Just know the drip is unmatched. They're not ready." },
      { label: "📸 Instagram appreciation", them: "The fit pic from yesterday was everything.", me: "His drip has been on another level this whole year, no off days." },
      { label: "🛍️ Shopping", them: "This brand is expensive but...", me: "Nah it's worth it for the drip. You get what you pay for." }
    ],
    originStory: [
      { date: "Pre-2018", title: "AAVE Fashion Roots", body: "In Atlanta and Black American fashion culture, 'dripping' described someone whose style was so perfect it seemed to flow — like the freshness was literally running off them." },
      { date: "2018 · Gunna and Atlanta Trap", title: "Drip Season", body: "Gunna's 'Drip Season' mixtapes made 'drip' his signature. Young Thug's fashion-forward approach reinforced the connection between trap music and style vocabulary." },
      { date: "2019–2021", title: "Mainstream Fashion Language", body: "Sneaker culture, streetwear communities, and fashion-forward social media all adopted 'drip' as the universal compliment for excellent personal style." }
    ],
    whyViral: [
      { title: "Visual metaphor perfection", desc: "'Dripping' with style — you can picture it. Great slang creates images, and drip is a movie poster in one word." },
      { title: "Gunna's brand", desc: "Artists who make a word their identity amplify it immeasurably." },
      { title: "Sneaker and streetwear boom", desc: "The explosion of sneaker culture and streetwear communities needed vocabulary. Drip arrived at exactly the right moment." },
      { title: "Status signaling", desc: "In an era obsessed with how you look, having a precise word for exceptional looks was always going to spread fast." }
    ],
    relatedSlangs: ["flex", "slay", "glowup"],
    seoKeywords: ["drip meaning slang", "what does drip mean", "drip slang fashion", "drip meaning gen z"]
  },

  {
    id: "yeet", word: "Yeet", slug: "yeet",
    devanagari: null, pronunciation: "/jiːt/",
    shortMeaning: "Throw something with force, or an exclamation of excitement.",
    fullMeaning: "Yeet functions as both a verb and an exclamation. As a verb: to throw something with significant force or enthusiasm. As an exclamation: expressing excitement, triumph, agreement, or general hype. The beauty of yeet is that it works in almost any high-energy context.",
    tag: "classic", year: 2014, language: "English", coinedBy: "Vine / Black teen internet culture", origin: "Vine / Black internet culture",
    culturalContext: "Originated on Vine around 2014 when a video of a young Black teen yelling 'YEET' while doing a dance move went viral. The word captured total commitment, no second thoughts, maximum force — resonating universally.",
    examples: [
      { label: "💬 Throwing context", them: "What happened to the old homework?", me: "YEETED it the second finals were over." },
      { label: "🎉 Exclamation", them: "We just got tickets to Coachella!!!", me: "YEET LET'S GO 🎉🎉" },
      { label: "🎮 Gaming", them: "He just threw the grenade at his own feet.", me: "He literally yeeted himself into the void. Classic." }
    ],
    originStory: [
      { date: "2014 · Vine", title: "The Original YEET", body: "A Vine video showed a young Black teen doing a specific dance move while yelling 'YEET.' The combination captured something raw and joyful. The Vine was shared millions of times." },
      { date: "2014–2015", title: "Dance Becomes Word", body: "The 'Yeet' dance spread through middle and high schools. The exclamation detached from the dance and began functioning as a standalone expression of excitement or power." },
      { date: "2018 Onward", title: "Meme Immortality", body: "Despite Vine dying in 2017, yeet survived because it had embedded into Gen Z vocabulary. The 'baby yeet' meme (2018) reintroduced it and cemented it as one of the defining words of the era." }
    ],
    whyViral: [
      { title: "Vine timing", desc: "Vine was the most potent 6-second culture engine the internet has ever had. Anything that went viral there had special staying power." },
      { title: "Physical + verbal combo", desc: "Yeet sounds like what it is — a burst of energy. The phonetics do the emotional work." },
      { title: "Survived its platform", desc: "Most Vine slang died with Vine. Yeet escaped. That signals a word that genuinely filled a need." },
      { title: "The baby yeet revival", desc: "The 2018 meme cycle brought yeet to people who missed its 2014 origins and gave the whole word a second life." }
    ],
    relatedSlangs: ["lit", "savage", "slay"],
    seoKeywords: ["yeet meaning", "what does yeet mean", "yeet slang definition", "yeet origin"]
  },

  {
    id: "mid", word: "Mid", slug: "mid",
    devanagari: null, pronunciation: "/mɪd/",
    shortMeaning: "Mediocre, average — nothing special at all.",
    fullMeaning: "'Mid' means mediocre, average, or unimpressive. If something is 'mid,' it's not terrible but definitely not good — it exists in a disappointing middle ground. The word is particularly brutal because it dismisses with indifference rather than anger. Being called bad is notable. Being called mid means you're not even worth a strong reaction.",
    tag: "trending", year: 2021, language: "English", coinedBy: "Twitch/streaming culture / General internet", origin: "Twitch / Twitter",
    culturalContext: "While 'mid' as an abbreviation of 'mediocre' existed before, it exploded in gaming and Twitch streaming communities where evaluating content quality constantly is part of the culture.",
    examples: [
      { label: "💬 Movie review", them: "Did you see that superhero film everyone was hyping?", me: "It was mid tbh. Waited 3 years for that." },
      { label: "🍕 Food opinion", them: "This pizza place is supposed to be the best in the city.", me: "I've had better. It's mid. The hype is doing a lot of heavy lifting." },
      { label: "📱 Hot take", them: "His new album just dropped!", me: "Three songs are great and the rest is just... mid. Disappointing." }
    ],
    originStory: [
      { date: "Pre-2021", title: "Gaming Origins", body: "In competitive gaming, 'mid' referred to the middle of the map — neither advancing nor retreating, just existing. This spatial meaning seeded the quality meaning: not impressive, just occupying space." },
      { date: "2021 · Twitch Boom", title: "Streaming Culture Adoption", body: "Twitch streamers used 'mid' constantly to evaluate games, clips, and content. The word's efficiency in dismissing mediocrity made it perfect for high-volume content consumption culture." },
      { date: "2022 · Twitter Discourse", title: "Hot Take Engine", body: "'That show is mid' became the format of a thousand Twitter hot takes. Calling something mid that everyone likes generates immediate engagement by design." }
    ],
    whyViral: [
      { title: "The power of dismissal", desc: "'Mid' is crueler than 'bad' because indifference stings more than anger. That psychological edge makes the word memorable." },
      { title: "Three letters, complete verdict", desc: "You don't need to explain why something is mid. The word implies the full critique." },
      { title: "Hot take fuel", desc: "Calling something mid that everyone likes generates immediate engagement. It's the perfect discourse-starter." },
      { title: "Gaming vocabulary crossover", desc: "What gamers say in 2020 is what everyone says in 2022. Gaming culture leads on slang adoption." }
    ],
    relatedSlangs: ["slaps", "bop", "cheugy"],
    seoKeywords: ["mid meaning slang", "what does mid mean", "mid slang definition", "mid gen z meaning"]
  },

  {
    id: "ghosting", word: "Ghosting", slug: "ghosting",
    devanagari: null, pronunciation: "/ˈɡoʊst.ɪŋ/",
    shortMeaning: "Suddenly cutting off all contact with someone, without explanation.",
    fullMeaning: "Ghosting is abruptly cutting off all communication — stopping replies, going completely silent — without any explanation or closure. The person being ghosted is left confused and hurt without the ability to get answers. The ghost metaphor: the person vanishes as if they were never real.",
    tag: "classic", year: 2015, language: "English", coinedBy: "Dating culture / Internet", origin: "Online dating culture",
    culturalContext: "Became prominent with the rise of dating apps where cutting contact requires zero confrontation. Merriam-Webster added it in 2017. Now applies to friendships, jobs, and any relationship context.",
    examples: [
      { label: "💬 Dating confusion", them: "We went on three great dates and now... nothing?", me: "Girl you got ghosted. He's not coming back." },
      { label: "📱 Calling it out", them: "He left my message on read 12 days ago.", me: "That's not a delay, that's a ghost. You need to accept it." },
      { label: "🏢 Job context", them: "Applied two weeks ago, they interviewed me and now silence.", me: "Companies ghost all the time now. It's infuriating but unfortunately normal." }
    ],
    originStory: [
      { date: "Pre-2015", title: "The Behavior Predates the Word", body: "Abruptly cutting off contact has always existed. What changed was how visible and common it became in the digital age." },
      { date: "2014–2015", title: "Tinder Era Names It", body: "Dating apps like Tinder made ghosting both easier and more common. The term emerged from dating culture blogs trying to describe the epidemic of silent rejection." },
      { date: "2017", title: "Dictionary Official", body: "Merriam-Webster added 'ghosting' in 2017. By then it had moved beyond dating into friendships, professional contexts, and everyday relationships." }
    ],
    whyViral: [
      { title: "Universal experience", desc: "Almost everyone has been ghosted or has ghosted someone. The instant recognition made the word immediately essential." },
      { title: "Dating app culture", desc: "The rise of Tinder, Bumble, and Hinge made ghosting not just possible but default. The apps created the behavior; the word named it." },
      { title: "Emotional precision", desc: "Ghost as metaphor is perfect — the person becomes an absence, a silence, almost unreal." },
      { title: "Dictionary validation", desc: "When Merriam-Webster adds slang, it signals the word solved a real vocabulary gap." }
    ],
    relatedSlangs: ["simp", "salty", "tea"],
    seoKeywords: ["ghosting meaning", "what does ghosting mean", "ghosting in relationships", "ghosting slang definition"]
  },

  {
    id: "salty", word: "Salty", slug: "salty",
    devanagari: null, pronunciation: "/ˈsɔːl.ti/",
    shortMeaning: "Being bitter or upset, usually over something small.",
    fullMeaning: "Salty means upset, bitter, or irritable — particularly when the cause is minor or the reaction is disproportionate. 'You're so salty' tells someone they're taking something too personally. The taste metaphor: salt stings, and a salty person has that same sharp, unpleasant edge when wounded or embarrassed.",
    tag: "classic", year: 2013, language: "English / AAVE", coinedBy: "Gaming culture / African American slang", origin: "Naval slang / Gaming culture",
    culturalContext: "Originally from naval slang and Black American slang. Gaming communities adopted it as the perfect descriptor for players who complain after losing. From esports it crossed into general internet culture.",
    examples: [
      { label: "🎮 Gaming", them: "He left the game after I killed him once.", me: "Bro is so salty. It was literally round one." },
      { label: "💬 Over something small", them: "She still hasn't responded to my text from this morning.", me: "Don't get salty over it, she might just be busy." },
      { label: "📱 Sports reaction", them: "The referee made a bad call and he's been posting about it for three days.", me: "The saltiness is unreal. Let it go man." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Naval and AAVE Roots", body: "Sailors used 'salty' to describe bitter old mariners with bad attitudes. In Black American vernacular, salty described someone who was bitter or upset in a petty way." },
      { date: "2010–2013", title: "Gaming Communities Adopt It", body: "Competitive gaming communities made 'salty' the standard descriptor for losing players who complained loudly. 'Salt' and 'salty' became core esports vocabulary." },
      { date: "2014–2016", title: "Social Media General Adoption", body: "From gaming Twitter and Reddit, 'salty' crossed into general internet use. The perfect word for calling out petty grievances and disproportionate reactions." }
    ],
    whyViral: [
      { title: "Gaming culture velocity", desc: "Esports communities move slang from niche to global faster than almost any other community." },
      { title: "Taste metaphor perfection", desc: "Salt stings. A salty person stings. The metaphor requires no explanation." },
      { title: "Applies everywhere", desc: "From gaming to relationships to sports to workplaces — bitterness over small things is universal." },
      { title: "Playful roast energy", desc: "'You're salty' is a gentle tease, not a harsh insult. That light-roast energy makes it easy to use." }
    ],
    relatedSlangs: ["ghosting", "tea", "simp"],
    seoKeywords: ["salty meaning slang", "what does salty mean", "salty slang definition", "salty gen z meaning"]
  },

  {
    id: "slaps", word: "Slaps", slug: "slaps",
    devanagari: null, pronunciation: "/slæps/",
    shortMeaning: "This song hits incredibly hard — it's excellent.",
    fullMeaning: "'That slaps' means something — almost always music — is incredibly good. The physical metaphor: the beat, the melody hits you like a slap — unexpected, forceful, impossible to ignore. A song that slaps makes you turn up the volume and feel the music physically.",
    tag: "classic", year: 2016, language: "English / AAVE", coinedBy: "West Coast hip-hop culture", origin: "Bay Area / West Coast slang",
    culturalContext: "Originated in Bay Area and West Coast hip-hop culture where the bass-heavy, trunk-rattling sound of their music was described as physically hitting you. Migrated from car stereo culture to general music praise.",
    examples: [
      { label: "🎵 Music reaction", them: "Have you heard the new track he dropped last night?", me: "IT SLAPS. First song I've replayed this many times in months." },
      { label: "🍕 Extended usage", them: "Try this sauce, it's homemade.", me: "Okay this genuinely slaps. Can I get the recipe?" },
      { label: "🎧 Playlist", them: "This playlist you made for the drive was perfect.", me: "I curate exclusively songs that slap. That's the whole philosophy." }
    ],
    originStory: [
      { date: "Pre-2016", title: "Bay Area Car Culture", body: "Bay Area hip-hop has always been defined by bass-heavy production designed to be played at full volume in cars with subwoofers. Music that 'slaps' makes the seats vibrate and your chest thump." },
      { date: "2016–2018", title: "Internet Music Culture", body: "As music streaming and music Twitter grew, the vocabulary of passionate music fans spread wider. 'That slaps' became a national music discourse grade-A compliment." },
      { date: "2018–2020", title: "General Excellence Compliment", body: "Like many music-born words, 'slaps' expanded beyond music. Food that slaps. A fit that slaps. The quality threshold: something that hits you unexpectedly hard with its excellence." }
    ],
    whyViral: [
      { title: "Physical metaphor", desc: "Music that physically impacts you is the best music. 'Slaps' describes that physical impact perfectly." },
      { title: "West Coast cool", desc: "California hip-hop culture carries global influence. When their vocabulary travels, it arrives with prestige." },
      { title: "Music is universal", desc: "Everyone needs words to describe great songs. 'Slaps' is the most enthusiastic option available." },
      { title: "Extended domain flexibility", desc: "Moving from music to food to general excellence gave the word enormous longevity." }
    ],
    relatedSlangs: ["bop", "lit", "bussin"],
    seoKeywords: ["slaps meaning slang", "what does slaps mean", "that slaps meaning", "slaps slang definition"]
  },

  {
    id: "lowkey", word: "Lowkey", slug: "lowkey",
    devanagari: null, pronunciation: "/ˈloʊ.kiː/",
    shortMeaning: "Secretly, quietly, or subtly — admitting something you don't want to broadcast.",
    fullMeaning: "'Lowkey' means discreetly, quietly, or to a moderate degree. 'I lowkey like that song' means you have a mild or secret appreciation you're slightly embarrassed to admit. It adds a layer of understated vulnerability or admission to a statement — like a soft whisper of honesty inside a louder conversation.",
    tag: "trending", year: 2016, language: "English / AAVE", coinedBy: "Black American culture / internet", origin: "AAVE / Internet culture",
    culturalContext: "While 'low-key' as an adjective has existed for decades, its use as a conversational softener — prefacing admissions and quiet feelings — emerged from Black internet culture around 2015–2017 and became one of the most-used qualifiers in Gen Z conversation.",
    examples: [
      { label: "💬 Soft confession", them: "Do you actually like that show?", me: "Lowkey yeah. I told myself I wouldn't but here we are." },
      { label: "📱 Understated feeling", them: "How are you doing with everything?", me: "Lowkey overwhelmed but putting on a brave face." },
      { label: "🎵 Guilty pleasure", them: "That pop song is SO basic though.", me: "Lowkey it's a bop tho. I'm not saying it loudly." }
    ],
    originStory: [
      { date: "Pre-slang", title: "The Adjective Root", body: "'Low-key' as an adjective meaning subdued or understated existed long before Gen Z. A low-key party is a quiet one." },
      { date: "2015–2017", title: "Adverbial Conversion", body: "Internet culture started using 'lowkey' as an adverb prefacing admissions: 'lowkey want to go,' 'lowkey crying rn.' The word shifted from describing things to modifying feelings." },
      { date: "2017 Onward", title: "Universal Softener", body: "Lowkey became the go-to prefix for any feeling you want to express quietly — without full commitment, without full vulnerability." }
    ],
    whyViral: [
      { title: "Emotional honesty with cover", desc: "'Lowkey' lets you be honest without being fully exposed. The perfect way to admit feelings you're not ready to own loudly." },
      { title: "Pairs with everything", desc: "Lowkey tired. Lowkey obsessed. Lowkey in love. The word applies to every feeling and every situation." },
      { title: "Contrasts with highkey", desc: "Having both lowkey and highkey creates a complete emotional-intensity spectrum in two words." },
      { title: "Digital-age hedging", desc: "'Lowkey' lets you express something without going on record — perfect for the anxiety of being permanently quoted." }
    ],
    relatedSlangs: ["highkey", "vibecheck", "nocap"],
    seoKeywords: ["lowkey meaning slang", "what does lowkey mean", "lowkey definition gen z", "lowkey slang"]
  },

  {
    id: "highkey", word: "Highkey", slug: "highkey",
    devanagari: null, pronunciation: "/ˈhaɪ.kiː/",
    shortMeaning: "Openly, obviously, very much — the opposite of lowkey.",
    fullMeaning: "'Highkey' means openly, obviously, or to a significant degree — the direct opposite of lowkey. If you 'highkey love that song,' you're not hiding it: you genuinely and openly love it. Highkey adds emphasis and transparency to a feeling, signaling you're not hedging.",
    tag: "trending", year: 2016, language: "English / AAVE", coinedBy: "Black American internet culture", origin: "AAVE / Internet / Twitter",
    culturalContext: "Emerged as the natural counterpart to 'lowkey' in Black internet vocabulary. While lowkey was about quiet admission, highkey was about open declaration. The two words together created a complete emotional-intensity vocabulary that Gen Z adopted wholesale.",
    examples: [
      { label: "📱 Open admission", them: "Do you actually like that new artist?", me: "Highkey obsessed. Have been since day one, no shame." },
      { label: "💬 Strong feeling", them: "You seem stressed about the exam.", me: "Highkey losing my mind about it ngl." },
      { label: "🎉 Excitement", them: "The concert is on Friday.", me: "I am highkey more excited about this than anything all year." }
    ],
    originStory: [
      { date: "Pre-slang", title: "Musical Terminology Root", body: "In music theory, 'high-key' refers to a key that is bright, sharp, and prominent. The slang meaning inherited this: highkey = loud, obvious, prominent." },
      { date: "2016", title: "Paired with Lowkey", body: "Highkey emerged almost in response to lowkey. Once lowkey was established as a way to hedge, highkey became the word for when you weren't hedging at all." },
      { date: "2017–2019", title: "Twitter and TikTok Adoption", body: "The lowkey/highkey pair became conversational infrastructure. You could map the entire emotional spectrum: 'lowkey might like him' vs. 'highkey in love.'" }
    ],
    whyViral: [
      { title: "The lowkey pair", desc: "Highkey only makes full sense alongside lowkey. A complete vocabulary system spreads faster than isolated words." },
      { title: "Direct and confident", desc: "Highkey is for when you're done hedging. That openness without apology resonates with Gen Z's authenticity values." },
      { title: "Twitter sentence efficiency", desc: "Character limits reward adverbs that pack maximum meaning in two syllables." },
      { title: "Versatility", desc: "Highkey works in positive, negative, and neutral contexts. Total coverage." }
    ],
    relatedSlangs: ["lowkey", "nocap", "slay"],
    seoKeywords: ["highkey meaning slang", "what does highkey mean", "highkey definition", "highkey vs lowkey meaning"]
  },

  {
    id: "cheugy", word: "Cheugy", slug: "cheugy",
    devanagari: null, pronunciation: "/ˈtʃuː.ɡi/",
    shortMeaning: "Outdated, trying too hard, or off-trend without realizing it.",
    fullMeaning: "Cheugy describes something (or someone) trying to be trendy but actually outdated, or that was once cool but has become associated with a demographic that is no longer culturally current. Classic cheugy markers: 'girl boss' energy, millennial Instagram aesthetics, chevron patterns, and phrases like 'Live Laugh Love.'",
    tag: "new", year: 2013, language: "English", coinedBy: "Gaby Rasson", origin: "Beverly Hills / TikTok revival 2021",
    culturalContext: "Coined by Gaby Rasson in 2013 at Beverly Hills High School. Sat dormant until a TikToker went viral in 2021 explaining the term, sparking a cultural conversation about how taste evolves and what happens when you stop keeping up.",
    examples: [
      { label: "💬 Fashion critique", them: "She's wearing the 'Live Laugh Love' hoodie unironically.", me: "That is peak cheugy and I say this with love." },
      { label: "📱 Interior design", them: "The new coffee shop has shiplap walls and mason jar glasses.", me: "It's cute but it's giving 2017 Instagram. Kind of cheugy ngl." },
      { label: "🎵 Music", them: "He still does the Woah dance in every video.", me: "Cheugy. That was 2019. Nobody told him it expired." }
    ],
    originStory: [
      { date: "2013", title: "The Original Coinage", body: "High school student Gaby Rasson coined 'cheugy' at Beverly Hills High School to describe a specific aesthetic that was trying to be cool but landing slightly off. The word sat in LA vernacular for years." },
      { date: "April 2021", title: "TikTok Goes Viral", body: "TikToker Hallie Cain explained the term 'cheugy' in a video that went massively viral. The timing was perfect: the pandemic had paused trends, and Gen Z was reckoning with what was genuinely current." },
      { date: "2021 · New York Times", title: "Media Coverage", body: "The New York Times ran a piece on 'cheugy' within days of the TikTok's virality. This sparked a millennial vs. Gen Z discourse that kept it trending for weeks." }
    ],
    whyViral: [
      { title: "Generational boundary-drawing", desc: "Gen Z needed a word to describe millennial aesthetics they didn't share. Cheugy gave them precise vocabulary." },
      { title: "Dormant-to-viral pipeline", desc: "A word sitting unused for 8 years suddenly becomes the perfect descriptor for a cultural moment — rare and remarkable." },
      { title: "Media coverage multiplier", desc: "When the NYT covers a TikTok slang word, it travels to demographics that would never discover it organically." },
      { title: "The millennial response", desc: "Millennials debating whether they were cheugy kept the word alive for months longer than a typical viral moment." }
    ],
    relatedSlangs: ["mid", "drip", "glowup"],
    seoKeywords: ["cheugy meaning", "what does cheugy mean", "cheugy definition", "cheugy millennial slang"]
  },

  {
    id: "bop", word: "Bop", slug: "bop",
    devanagari: null, pronunciation: "/bɒp/",
    shortMeaning: "A really good, catchy, upbeat song you can't stop playing.",
    fullMeaning: "A bop is a song that's genuinely, undeniably good — catchy, energetic, and built for repeat listening. Unlike 'slaps' (which emphasizes physical impact), a bop is about pure catchiness and joy. A bop makes you want to sing along, dance, and feel good.",
    tag: "classic", year: 2013, language: "English / AAVE", coinedBy: "Black American music culture", origin: "Music culture / Chicago",
    culturalContext: "Rooted in Chicago slang where 'bop' described a specific style of footwork dance music. It evolved into a general term for an excellent, upbeat, danceable track, peaking as Gen Z music praise vocabulary in the late 2010s.",
    examples: [
      { label: "🎵 Song recommendation", them: "I need something fun to listen to on the drive.", me: "I'll send you a playlist, all certified bops. No skips." },
      { label: "💬 Surprised by a song", them: "That Taylor Swift song is actually good??", me: "It's a BOP. She delivered, I'm not ashamed to say it." },
      { label: "📱 Playlist hype", them: "Every song you've sent me this week has been fire.", me: "I only curate bops. It's a lifestyle." }
    ],
    originStory: [
      { date: "1940s–1950s", title: "Jazz Origins", body: "In jazz culture, 'bebop' was a specific rhythmic style. 'Bop' as a shortened form described energetic, improvisational music with a bounce — something that makes you move." },
      { date: "2000s · Chicago", title: "Chicago Footwork Evolution", body: "In Chicago, 'bop' described a footwork-adjacent dance music style before it became a general compliment." },
      { date: "2015–2018 · Twitter/Tumblr", title: "Music Fandom Adoption", body: "Music-obsessed corners of Twitter and Tumblr, particularly K-pop and pop fandoms, popularized 'bop' as the go-to compliment for an excellent, catchy track." }
    ],
    whyViral: [
      { title: "The word sounds right", desc: "Bop is bouncy, short, and percussive. It sounds like what it describes — light, infectious, enjoyable." },
      { title: "Music fandom communities", desc: "K-pop stans and pop music Twitter are some of the most vocabulary-generating communities online." },
      { title: "No baggage", desc: "Unlike 'slaps' or 'lit,' 'bop' is purely about music joy. No connotations to navigate." },
      { title: "Certified bops culture", desc: "'No-skip album' and 'certified bops' became their own appreciation formats and quality standards." }
    ],
    relatedSlangs: ["slaps", "lit", "mid"],
    seoKeywords: ["bop meaning slang", "what does bop mean", "bop slang music", "bop definition gen z"]
  },

  {
    id: "wl", word: "W / L", slug: "wl",
    devanagari: null, pronunciation: "/wɪn/ · /lɒs/",
    shortMeaning: "W = Win (something great). L = Loss (something bad or embarrassing).",
    fullMeaning: "W stands for 'Win' and L stands for 'Loss.' Calling something a 'W' means it's a success or positive development. Calling something an 'L' means it's a failure or embarrassment. 'Taking an L' means accepting defeat. Can describe events, decisions, people, or any outcomes in life.",
    tag: "trending", year: 2012, language: "English", coinedBy: "Sports culture / Black American internet", origin: "Sports Twitter / Gaming culture",
    culturalContext: "Borrowed from sports scoreboard language, but elevated by internet culture into a complete life-commentary system. W and L became a moral and aesthetic verdict — a way to evaluate every moment with sports-scoreboard efficiency.",
    examples: [
      { label: "💬 Celebrating good news", them: "Got into my first choice university!!", me: "MASSIVE W. All that work paid off, genuinely so happy for you." },
      { label: "🎮 Gaming/reaction", them: "He dropped his food on the first date.", me: "That's an L honestly. Recoverable but still an L." },
      { label: "📱 Life commentary", them: "Got a raise AND a promotion in the same meeting.", me: "Double W. The company finally recognized what they had." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Sports Roots", body: "Win/Loss records have been fundamental to sports since organized competition began. W and L as shorthand existed on scoreboards and in sports writing long before the internet." },
      { date: "2010–2014 · Sports Twitter", title: "Life-Commentary System", body: "Black Twitter and sports Twitter began applying W and L to non-sports situations — relationships, decisions, social situations. The binary clarity of win/loss mapped perfectly onto social evaluation." },
      { date: "2016–2020 · Gaming and TikTok", title: "Universal Verdict", body: "Gaming culture, already fluent in win/loss language, spread W and L into every corner of Gen Z vocabulary. 'Taking an L' and 'claiming a W' became daily language across every platform." }
    ],
    whyViral: [
      { title: "Binary clarity", desc: "Everything is either a win or a loss. This black-and-white framing is satisfying and universally understood." },
      { title: "Infinite applications", desc: "W and L work on anything: food, relationships, weather, movies, world events. There is no topic they can't evaluate." },
      { title: "Single letter efficiency", desc: "One character. Complete verdict. W and L are possibly the most economical slang units ever created." },
      { title: "Sports prestige", desc: "Sports language carries authority — these are real, measurable outcomes. Borrowing that vocabulary adds weight to everyday commentary." }
    ],
    relatedSlangs: ["goat", "rizz", "mid"],
    seoKeywords: ["W meaning slang", "L meaning slang", "taking an L meaning", "W and L gen z slang"]
  }

  /* ── BATCH 3 — NEW ENTRIES ───────────────────────────── */

  {
    id: "pookie", word: "Pookie", slug: "pookie",
    devanagari: null, pronunciation: "/ˈpʊk.i/",
    shortMeaning: "An endearing nickname for a close friend or romantic partner.",
    fullMeaning: "Pookie is a cute, affectionate nickname used for someone you adore, whether a best friend, a partner, or even a pet. It conveys warmth, closeness, and a kind of playful intimacy. Calling someone your pookie signals genuine fondness without being too formal or serious.",
    tag: "trending", year: 2022, language: "English", coinedBy: "Internet / Black American vernacular", origin: "TikTok / social media",
    culturalContext: "While 'pookie' existed as an old-fashioned pet name, TikTok's affectionate culture brought it roaring back. Gen Z uses it ironically and sincerely at the same time — calling someone pookie is sweet but also a little funny, which is exactly the Gen Z emotional register.",
    examples: [
      { label: "💬 To a best friend", them: "Just got here, where are you??", me: "Coming pookie!! 30 seconds I promise 😭" },
      { label: "📸 Instagram caption", them: "Posted a photo with their partner", me: "My pookie and I 🥹❤️" },
      { label: "🐕 Pet owners", them: "Your dog's videos are everything.", me: "She's my pookie, I'd do anything for her honestly." }
    ],
    originStory: [
      { date: "1980s–90s", title: "Old-School Pet Name", body: "Pookie existed as a cutesy pet name in American English for decades, used mostly by grandparents and in cartoons. It was wholesome and slightly dorky — which is exactly why the internet brought it back." },
      { date: "2021–2022", title: "TikTok Revival", body: "TikTok's affection-heavy culture rediscovered 'pookie' and gave it new life. Videos calling partners, friends, and pets 'pookie' went viral because the word is both genuine and slightly ironic — perfect for Gen Z's emotional tone." },
      { date: "2023", title: "Mainstream Explosion", body: "By 2023, pookie was everywhere. Comments sections, couple content, friendship posts — anyone showing affection called their person their pookie. The word became shorthand for wholesome, earnest love." }
    ],
    whyViral: [
      { title: "Sounds adorable", desc: "Pookie is phonetically soft and round. It literally sounds like a hug." },
      { title: "Safe affection", desc: "Calling someone pookie is intimate but not intense. It's the perfect level of affection for internet culture." },
      { title: "Irony + sincerity blend", desc: "Gen Z loves words that work both genuinely and as jokes. Pookie does both without trying." },
      { title: "Universal application", desc: "Partners, friends, siblings, pets — pookie works for any being you love." }
    ],
    relatedSlangs: ["rizz", "simp", "slay"],
    seoKeywords: ["pookie meaning slang", "what does pookie mean", "pookie slang definition", "pookie gen z meaning"]
  },

  {
    id: "ick", word: "Ick", slug: "ick",
    devanagari: null, pronunciation: "/ɪk/",
    shortMeaning: "A sudden, visceral feeling of disgust toward someone you were attracted to.",
    fullMeaning: "The ick is that sudden, inexplicable moment when someone you were romantically interested in does something — sometimes completely trivial — that completely kills your attraction. You were interested, then they did that one thing, and now you physically cannot. The ick is instant, often irrational, and almost always permanent. Once you've gotten the ick, there's rarely any coming back.",
    tag: "trending", year: 2017, language: "English", coinedBy: "UK dating reality shows / internet", origin: "Love Island UK / TikTok",
    culturalContext: "The ick went mainstream through UK dating reality shows, particularly Love Island, where contestants described sudden turn-offs. TikTok then turned 'things that give me the ick' into a massive content genre. The format — listing absurd, hyper-specific triggers — is one of TikTok's most beloved.",
    examples: [
      { label: "💬 Dating horror", them: "Wait you stopped liking him? What happened??", me: "He waved at a train. I got the ick and it hasn't left." },
      { label: "📱 Shared experience", them: "What gives you the ick?", me: "When they run to catch a bus. I don't make the rules." },
      { label: "🎭 Self-aware", them: "She's cute right?", me: "She was until she clapped when the plane landed. Full ick. Can't recover." }
    ],
    originStory: [
      { date: "2017 · Love Island UK", title: "Reality TV Coinage", body: "Contestant Olivia Attwood used 'the ick' on Love Island UK Season 3 to describe the sudden revulsion she felt toward a partner. The show's massive following spread the term across UK social media instantly." },
      { date: "2020–2021", title: "TikTok Format", body: "'Things that give me the ick' became a wildly popular TikTok format. Creators listed increasingly absurd triggers — running for a bus, using a straw incorrectly, waving at a train — that resonated because everyone recognized the irrational specificity." },
      { date: "2022–2023", title: "Global Phenomenon", body: "The ick crossed from UK-centric to global. American, Australian, South Asian creators all joined the format. It became shorthand for the inexplicable nature of attraction and revulsion." }
    ],
    whyViral: [
      { title: "Universal relatability", desc: "Everyone has experienced an irrational turn-off. The ick gave that experience a name and a community." },
      { title: "TikTok list format", desc: "Listing your icks is a perfect TikTok format. Specific, funny, endlessly relatable, and infinitely repeatable." },
      { title: "Irrational specificity", desc: "The funnier and more specific your ick, the more people engage. 'Waving at a train' is funnier than 'being rude.'" },
      { title: "Dating culture zeitgeist", desc: "A generation navigating modern dating needed vocabulary for its irrational emotional realities. The ick delivered." }
    ],
    relatedSlangs: ["situationship", "ghosting", "rizz"],
    seoKeywords: ["the ick meaning", "ick slang dating", "what does the ick mean", "getting the ick meaning"]
  },

  {
    id: "stan", word: "Stan", slug: "stan",
    devanagari: null, pronunciation: "/stæn/",
    shortMeaning: "To be an obsessive superfan of someone or something.",
    fullMeaning: "To stan someone means to be their passionate, dedicated, sometimes obsessive fan. Originally a noun ('I'm a stan'), now also a verb ('I stan her'). A stan goes beyond regular appreciation — they follow every update, defend their favorite online, know every lyric, and consider support for their idol a core part of their identity. Also used more casually: 'We all stan this song' just means everyone loves it.",
    tag: "classic", year: 2000, language: "English", coinedBy: "Eminem (song 'Stan')", origin: "Hip-hop / Eminem",
    culturalContext: "Coined by Eminem's 2000 song 'Stan,' which told the story of an obsessive fan who wrote increasingly unhinged letters to his idol. The word went from describing dangerous obsession to being embraced by fan communities as a badge of passionate loyalty.",
    examples: [
      { label: "💬 Music fandom", them: "Have you listened to her new album yet?", me: "Every song, twice, in order. I unironically stan her forever." },
      { label: "📱 General appreciation", them: "That director's cinematography is incredible.", me: "We all stan him. No notes, no critique, just art." },
      { label: "🎭 Self-aware fandom", them: "Are you really buying concert tickets for a third time?", me: "Stan behavior, I cannot be helped at this stage." }
    ],
    originStory: [
      { date: "2000 · Eminem", title: "The Song That Coined It", body: "Eminem's 2000 track 'Stan' featured a fictional obsessive fan who idolized Eminem to the point of self-destruction. The song was a dark study in celebrity parasocial relationships. The name 'Stan' became the word for that extreme fandom." },
      { date: "2010–2016", title: "Fan Community Adoption", body: "K-pop fandoms, BeyHive, Swifties, and other dedicated fan armies adopted 'stan' as a self-identifier. The word detached from its dark original connotation and became a celebration of passionate fandom." },
      { date: "2016 Onward", title: "Verb and Casual Use", body: "'I stan this' expanded the word from describing superfans to a general expression of enthusiastic support. 'We stan' became a positive endorsement for anything from artists to brands to ideas." }
    ],
    whyViral: [
      { title: "Eminem's legacy", desc: "A Grammy-winning song that introduced a character named Stan gave the word immediate cultural prestige and emotional weight." },
      { title: "Fan culture explosion", desc: "The 2010s saw unprecedented growth in organized fandom, especially K-pop. 'Stan' was the perfect word for that identity." },
      { title: "Verb flexibility", desc: "'Stan' as a verb ('I stan her') made it usable in any sentence structure. Maximum linguistic versatility." },
      { title: "Dictionary official", desc: "Merriam-Webster added 'stan' in 2019. From a rap song to an official dictionary entry in under 20 years." }
    ],
    relatedSlangs: ["slay", "goat", "rizz"],
    seoKeywords: ["stan meaning slang", "what does stan mean", "stan slang definition", "stan fandom meaning"]
  },

  {
    id: "situationship", word: "Situationship", slug: "situationship",
    devanagari: null, pronunciation: "/ˌsɪtʃ.u.ˈeɪ.ʃən.ʃɪp/",
    shortMeaning: "A romantic connection that's more than friends but less than official.",
    fullMeaning: "A situationship is a romantic or emotionally intimate relationship that exists without a clear label, commitment, or defined status. You're not 'just friends' but you're also not officially together. There are feelings, there might be physical intimacy, you text constantly — but nobody has 'had the talk.' It's the grey zone of modern romance, and it's become increasingly common in an era of casual dating culture.",
    tag: "trending", year: 2022, language: "English", coinedBy: "Dating culture / Twitter / TikTok", origin: "Modern dating discourse",
    culturalContext: "Emerged from Gen Z and Millennial dating culture grappling with the rise of apps that made casual, undefined connections the norm. When everyone could date multiple people simultaneously with no commitment required, a new word was needed for the limbo that resulted.",
    examples: [
      { label: "💬 The grey zone", them: "So are you two dating or what?", me: "Honestly? Neither of us has said anything. It's a full situationship and I hate it." },
      { label: "📱 Seeking advice", them: "He texts me first thing every morning.", me: "Girl that's not nothing. But it's also not a relationship. Classic situationship." },
      { label: "🎭 Self-diagnosis", them: "How long has this been going on?", me: "Six months of situationship. I need to have the talk or I need to leave." }
    ],
    originStory: [
      { date: "Pre-2022", title: "The Experience Existed", body: "Undefined romantic relationships have always existed. But dating apps made them dramatically more common by normalizing non-commitment and making it easy to keep things ambiguous indefinitely." },
      { date: "2022 · TikTok", title: "The Word Takes Off", body: "TikTok's dating content creators started using 'situationship' to describe the epidemic of undefined relationships they were personally navigating. The word resonated instantly because millions of viewers recognized their own situation in it." },
      { date: "2023", title: "Cultural Diagnosis", body: "Situationship became a cultural diagnosis for what was wrong with modern dating. Articles, podcasts, and therapists all began using the term. It gave people a framework to understand and communicate their own ambiguous relationship experiences." }
    ],
    whyViral: [
      { title: "Names a universal experience", desc: "Millions of people were living in undefined romantic limbo with no word for it. Situationship named the shared experience." },
      { title: "Dating app era", desc: "Tinder and Hinge normalized casual, label-free connections. Situationship is the vocabulary for that normalized ambiguity." },
      { title: "Emotional resonance", desc: "Situationships are confusing and often painful. Naming the experience makes it feel less isolating and more manageable." },
      { title: "Relationship discourse", desc: "Relationship content performs extremely well. Situationship gave that entire content genre a precise, searchable keyword." }
    ],
    relatedSlangs: ["ick", "ghosting", "rizz"],
    seoKeywords: ["situationship meaning", "what is a situationship", "situationship definition", "situationship dating"]
  },

  {
    id: "baddie", word: "Baddie", slug: "baddie",
    devanagari: null, pronunciation: "/ˈbæd.i/",
    shortMeaning: "An attractive, confident person who knows they look good.",
    fullMeaning: "A baddie is someone — usually a woman — who is physically attractive, stylishly dressed, confident, and fully aware of all of the above. A baddie doesn't apologize for how good she looks. She walks into a room with the energy of someone who knows exactly who she is. Being a baddie is as much about confidence and self-possession as it is about appearance.",
    tag: "trending", year: 2015, language: "English / AAVE", coinedBy: "Black American culture / Instagram era", origin: "AAVE / Instagram influencer culture",
    culturalContext: "Rooted in AAVE where 'bad' meaning attractive has a long history (going back to 'bad' meaning excellent in hip-hop). The Instagram era formalized 'baddie' as an aesthetic: flawless makeup, form-fitting outfits, unshakeable confidence. It became an aspiration category.",
    examples: [
      { label: "📸 Instagram energy", them: "She walked into the party and the whole room noticed.", me: "That's just baddie behavior. She's built different." },
      { label: "💬 Complimenting", them: "Girl the way you've been carrying yourself lately.", me: "Finally stepped into my baddie era, it was long overdue." },
      { label: "🎯 Self-description", them: "What's the vibe for tonight?", me: "Baddie era, no notes. Hair done, drip sorted, ready." }
    ],
    originStory: [
      { date: "Pre-2015", title: "AAVE Roots", body: "In Black American culture, 'bad' as a compliment for attractiveness predates hip-hop. 'She's bad' meant she's strikingly attractive. 'Baddie' was the natural evolution into a category and identity." },
      { date: "2015–2018", title: "Instagram Aesthetic", body: "Instagram's influencer era codified the 'baddie aesthetic' into a recognizable visual genre: contoured makeup, curve-hugging outfits, attitude-filled selfies. The look had its own hashtag and millions of followers." },
      { date: "2019 Onward", title: "Aspirational Identity", body: "Baddie shifted from describing someone to being an identity to step into. 'My baddie era' became a declaration of self-transformation and confidence. It absorbed self-empowerment and fashion vocabulary simultaneously." }
    ],
    whyViral: [
      { title: "Aspirational category", desc: "Baddie is something you can become, not just something you are. That aspiration drives massive content creation." },
      { title: "Instagram visual culture", desc: "Perfectly photogenic by definition, baddie content performs extremely well on visual platforms." },
      { title: "Confidence as core", desc: "Baddie isn't just about looks. It's about the attitude. That makes it more inclusive and more aspirational than pure appearance-based labels." },
      { title: "Era narrative", desc: "'My baddie era' taps into the transformation narrative that Gen Z loves. Before/after, glow up, self-discovery." }
    ],
    relatedSlangs: ["slay", "drip", "glowup"],
    seoKeywords: ["baddie meaning slang", "what does baddie mean", "baddie slang definition", "baddie aesthetic meaning"]
  },

  {
    id: "opp", word: "Opp", slug: "opp",
    devanagari: null, pronunciation: "/ɒp/",
    shortMeaning: "Short for opposition. A rival, enemy, or someone who's against you.",
    fullMeaning: "An opp is someone who opposes you, whether in a real conflict or a more casual social rivalry. 'Opps' (plural) refers to your enemies or people who wish you ill. The word carries serious weight in hip-hop and street culture but has also been adopted more lightly online to describe anyone you're beefing with. 'Watch out for the opps' means be aware of people who don't have your best interests at heart.",
    tag: "trending", year: 2014, language: "English / AAVE", coinedBy: "UK and US hip-hop / drill music", origin: "UK drill / Chicago rap",
    culturalContext: "Emerged primarily from UK drill music and Chicago's rap scene simultaneously, both of which were documenting real neighborhood rivalries. As drill music went mainstream globally, its vocabulary traveled with it.",
    examples: [
      { label: "🎵 Hip-hop context", them: "Why is everyone so tense at that event?", me: "Half the room is opps, they shouldn't even be in the same building." },
      { label: "💬 Casual use", them: "Why don't you talk to Meera anymore?", me: "She's an opp at this point. Long story, but it's done." },
      { label: "📱 Online", them: "Your comment section is getting messy.", me: "Opps found my page, I knew this would happen." }
    ],
    originStory: [
      { date: "2012–2014", title: "Drill Music Origins", body: "Chicago's drill rap scene and the emerging UK drill scene both began using 'opps' to describe rival groups. The word was direct shorthand for 'opposition' in a context where rivalries were serious and real." },
      { date: "2015–2018", title: "Hip-hop Mainstream", body: "As drill music went platinum and global, its vocabulary traveled. 'Opps' entered mainstream hip-hop vocabulary through chart-topping artists. The word lost some of its intense edge and became more general." },
      { date: "2019 Onward", title: "Internet Casual Use", body: "Online, 'opp' softened to describe anyone you're in conflict with, even minor social drama. 'She's an opp' now can mean anything from a genuine enemy to someone who just annoys you." }
    ],
    whyViral: [
      { title: "Drill music reach", desc: "Drill became one of the most influential music genres globally. Its vocabulary went with it everywhere the music went." },
      { title: "Short and punchy", desc: "Three letters. One syllable. Unmistakable meaning. Opp hits fast and hard." },
      { title: "Universal conflict", desc: "Everyone has people in their life who are against them. 'Opp' gave that a cooler name than 'enemy.'" },
      { title: "Social media drama", desc: "Online conflict needs vocabulary. 'Opp' fitted perfectly into the drama-content ecosystem." }
    ],
    relatedSlangs: ["salty", "tea", "vibecheck"],
    seoKeywords: ["opp meaning slang", "what does opp mean", "opps meaning", "opp slang definition"]
  },

  {
    id: "snatched", word: "Snatched", slug: "snatched",
    devanagari: null, pronunciation: "/snætʃt/",
    shortMeaning: "Looking absolutely amazing, particularly in terms of fit, face, or figure.",
    fullMeaning: "Snatched means looking excellent — usually referring to a waist that appears sculpted, a face that's beautifully put together, or an outfit that fits perfectly. 'Your waist is snatched' means your waist looks cinched and defined. More broadly, 'she's snatched' means she looks incredible. It's a step beyond pretty — snatched implies effort, precision, and undeniable results.",
    tag: "trending", year: 2018, language: "English / Drag / AAVE", coinedBy: "Black drag and ballroom culture", origin: "Drag culture / Instagram beauty",
    culturalContext: "Originated in Black drag and ballroom culture where 'snatching a wig' meant so completely dominating a look or performance that it metaphorically yanked someone's hair off. Beauty and fashion communities on Instagram adopted 'snatched' to describe perfectly sculpted looks.",
    examples: [
      { label: "📸 Beauty compliment", them: "Did you see her at the event last night?", me: "Her waist was SNATCHED. The dress, the face, everything. Flawless." },
      { label: "💬 Getting ready", them: "How are you looking?", me: "Fully snatched and ready to leave. It's giving everything." },
      { label: "💄 Makeup reaction", them: "The contour tutorial she posted—", me: "Did her jawline absolutely snatched. I need that product immediately." }
    ],
    originStory: [
      { date: "Pre-2018", title: "Ballroom Roots", body: "In ballroom culture, 'snatching a wig' was the ultimate compliment — your performance was so stunning it metaphorically left your competitor wigless (devastated). The concept of looking so good you steal the room." },
      { date: "2018 · Instagram Beauty", body: "The fitness and beauty community on Instagram adopted 'snatched waist' to describe visible waist definition. Beauty influencers followed with 'snatched face.' The word moved from metaphor to aesthetic descriptor.", date: "2018 · Instagram Beauty", title: "Beauty Community Adoption" },
      { date: "2019 Onward", title: "General Excellence", body: "Like 'ate' and 'slay,' 'snatched' expanded beyond its specific original meaning to describe anything that looks precisely right and beautiful." }
    ],
    whyViral: [
      { title: "Visual and physical", desc: "Snatched describes something you can see. It's specific and visual in a way that 'pretty' or 'beautiful' aren't." },
      { title: "Beauty content is everything", desc: "Instagram and YouTube beauty communities are among the most engaged audiences online. Their vocabulary spreads incredibly fast." },
      { title: "Drag culture energy", desc: "Words from ballroom carry attitude and performance energy that 'normal' vocabulary lacks." },
      { title: "Precision compliment", desc: "'Snatched' tells someone exactly what they did well — their physical presentation is precise and excellent." }
    ],
    relatedSlangs: ["slay", "drip", "baddie"],
    seoKeywords: ["snatched meaning slang", "what does snatched mean", "snatched slang definition", "snatched waist meaning"]
  },

  {
    id: "boujee", word: "Boujee", slug: "boujee",
    devanagari: null, pronunciation: "/ˈbuː.ʒi/",
    shortMeaning: "Acting fancy, luxurious, or high-maintenance. Bougie.",
    fullMeaning: "Boujee (also spelled bougie or bourgie) means acting fancy, preferring luxury, or being high-maintenance about quality. It comes from 'bourgeois' (the middle or wealthy class). Being called boujee can be affectionate ('she's boujee but in the best way') or a gentle shade ('he's too boujee for this restaurant'). Migos made it globally famous with their 2016 hit.",
    tag: "classic", year: 2016, language: "English / AAVE / French", coinedBy: "Migos / AAVE culture", origin: "Hip-hop / Migos 'Bad and Boujee'",
    culturalContext: "While 'bourgie' as a corruption of 'bourgeois' existed in Black American vernacular for decades, Migos' 2016 smash 'Bad and Boujee' introduced the spelling 'boujee' to a global audience and redefined it. Being boujee became aspirational rather than a critique.",
    examples: [
      { label: "💬 Affectionate shade", them: "She refused to eat at a restaurant without reservations.", me: "She's boujee. Always has been. But the restaurants she picks are always incredible." },
      { label: "📱 Self-identification", them: "You really won't drink cheap wine?", me: "I'm not sorry, I'm boujee. There's a difference." },
      { label: "🛍️ Shopping", them: "That price tag though...", me: "Listen. Sometimes being boujee is the right choice." }
    ],
    originStory: [
      { date: "Pre-2016", title: "Bourgeois to Bourgie", body: "The French 'bourgeois' (middle/upper class) became 'bourgie' in Black American vernacular to describe someone who acted above their station or preferred fancy things. It was often a gentle critique." },
      { date: "2016 · Migos", title: "Bad and Boujee", body: "Migos released 'Bad and Boujee' which became one of the most streamed songs of 2016-2017. Their spelling 'boujee' and the song's celebration of luxury lifestyle flipped the meaning from critique to aspiration." },
      { date: "2017 Onward", title: "Cultural Aspiration", body: "Boujee became something to aspire to rather than be shamed for. Having standards, preferring quality, refusing to settle — all boujee, all celebrated." }
    ],
    whyViral: [
      { title: "Migos' mega-hit", desc: "One of the most-played songs of its era introduced the spelling and the aspirational meaning simultaneously." },
      { title: "Meaning flip", desc: "Turning a critique into an aspiration is always culturally powerful. Boujee did this perfectly." },
      { title: "Self-description freedom", desc: "People love words they can claim for themselves. 'I'm boujee' is a power statement, not an insult." },
      { title: "Luxury culture resonance", desc: "In an era obsessed with aspirational lifestyles and luxury aesthetics, boujee fit perfectly." }
    ],
    relatedSlangs: ["drip", "flex", "baddie"],
    seoKeywords: ["boujee meaning slang", "what does boujee mean", "boujee definition", "bougie meaning"]
  },

  {
    id: "fire", word: "Fire", slug: "fire",
    devanagari: null, pronunciation: "/faɪər/",
    shortMeaning: "Something that is amazing, cool, or exceptionally impressive.",
    fullMeaning: "In slang, 'fire' means something is outstanding, impressive, or excellent. 'That song is fire' means it's incredible. 'You look fire' means you look amazing. The fire metaphor is intuitive — fire is powerful, bright, and impossible to ignore. Something that's fire burns with obvious quality. It can be used for music, food, fashion, ideas, and people.",
    tag: "classic", year: 2012, language: "English / AAVE", coinedBy: "Hip-hop / Black American culture", origin: "Hip-hop / social media",
    culturalContext: "Fire as a compliment has deep roots in hip-hop culture where 'fire' described tracks with blazing production and bars. Social media then universalized it into the go-to compliment for any outstanding thing. It's one of the most versatile single-word endorsements in English.",
    examples: [
      { label: "🎵 Music reaction", them: "Did you hear his new project?", me: "Every track is fire. Not a single skip. How." },
      { label: "📸 Outfit check", them: "Rate my fit for tonight.", me: "BRO that fit is fire. They're not ready for you." },
      { label: "🍕 Food", them: "First time making homemade pasta.", me: "This is absolutely fire. Open a restaurant." }
    ],
    originStory: [
      { date: "1990s–2000s", title: "Hip-Hop Foundation", body: "Hip-hop producers, DJs, and MCs used 'fire' to describe beats and bars that burned with quality. 'That beat is fire' was the highest studio compliment." },
      { date: "2012–2015", title: "Social Media Universalization", body: "Instagram and Twitter turned fire into the go-to endorsement for anything excellent. The 🔥 emoji became inseparable from the word, adding a visual shorthand." },
      { date: "2015 Onward", title: "Everywhere, Always", body: "'Fire' is now one of the most used English slang terms globally. It's in every language community, every content genre, every platform. Few words have achieved this level of universal adoption." }
    ],
    whyViral: [
      { title: "Intuitive metaphor", desc: "Fire is hot, bright, powerful, and impossible to ignore. The metaphor for excellence is immediately understood." },
      { title: "🔥 emoji", desc: "The fire emoji and the word became inseparable. Having a visual shorthand accelerates any slang's spread." },
      { title: "Music pipeline", desc: "Hip-hop is the most-streamed genre on the planet. Words from hip-hop go global." },
      { title: "Maximally versatile", desc: "Fire applies to absolutely everything. Music, fashion, food, people, ideas. Zero limitations." }
    ],
    relatedSlangs: ["lit", "slaps", "goat"],
    seoKeywords: ["fire meaning slang", "what does fire mean", "fire slang definition", "fire gen z meaning"]
  },

  {
    id: "cooked", word: "Cooked", slug: "cooked",
    devanagari: null, pronunciation: "/kʊkt/",
    shortMeaning: "Completely done, burnt out, or in a catastrophically losing situation.",
    fullMeaning: "'Cooked' means thoroughly finished in a bad way. You might be cooked from exhaustion, cooked because you're losing badly, or cooked because you made a decision that's about to have dire consequences. 'We're cooked' is the modern 'we're done for.' The metaphor: once something is fully cooked, it's passed the point of return. Overdone. No going back.",
    tag: "trending", year: 2020, language: "English / Australian slang", coinedBy: "Australian slang / gaming culture", origin: "Australian English / internet gaming",
    culturalContext: "While 'cooked' as a past tense of 'cook' is standard English, Australian slang used 'cooked' to mean exhausted or in a bad state long before it went global. Gaming and internet culture amplified it as the perfect word for being in an unrecoverable situation.",
    examples: [
      { label: "🎮 Gaming disaster", them: "We have no resources left and they're rushing us.", me: "Bro we are COOKED. Absolutely cooked." },
      { label: "💬 Exhaustion", them: "How are you doing after that week?", me: "I am cooked. Completely. I need 48 hours of nothing." },
      { label: "📱 Bad situation", them: "She saw your message reactions from before you deleted them.", me: "I am so cooked. There's no coming back from this." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Australian Roots", body: "Australian slang has long used 'cooked' to describe someone who is exhausted, wrecked, or in a terrible state. The convivial harshness of Australian slang gave the word its direct edge." },
      { date: "2018–2020", title: "Gaming Culture Adoption", body: "Online gaming communities, particularly battle royale and strategy game players, adopted 'cooked' to describe situations where defeat is certain and resources are depleted. 'We're cooked' became the loss-acknowledgment phrase." },
      { date: "2021 Onward", title: "TikTok and General Use", body: "TikTok's global reach spread Australian-inflected internet slang rapidly. 'Cooked' crossed into mainstream use for any situation involving exhaustion, failure, or hopelessness." }
    ],
    whyViral: [
      { title: "Universally understood metaphor", desc: "Something that's cooked is past the point of no return. The culinary metaphor is immediately clear." },
      { title: "Gaming language pipeline", desc: "Gaming vocabulary constantly refreshes internet slang. 'We're cooked' arrived via millions of gaming streams." },
      { title: "Australian slang prestige", desc: "Australian English has a global reputation for vivid, punchy slang. Words with Australian origins carry authenticity." },
      { title: "Covers multiple situations", desc: "Cooked works for exhaustion, losing, bad decisions, and being caught. Total situational range." }
    ],
    relatedSlangs: ["mid", "salty", "vibecheck"],
    seoKeywords: ["cooked meaning slang", "what does cooked mean", "cooked slang definition", "we're cooked meaning"]
  },

  {
    id: "valid", word: "Valid", slug: "valid",
    devanagari: null, pronunciation: "/ˈvæl.ɪd/",
    shortMeaning: "Completely acceptable, understandable, or logically justified.",
    fullMeaning: "'Valid' in slang means something is completely acceptable, makes sense, or is worthy of respect. 'That's valid' is a way of saying you understand and accept someone's perspective or decision without judgment. It's also used to affirm choices: 'wearing that to the event is valid.' The word borrowed its technical meaning (logically sound) and turned it into an emotional validation tool.",
    tag: "trending", year: 2018, language: "English", coinedBy: "Internet culture / Twitter", origin: "Social media / Tumblr culture",
    culturalContext: "Emerged from Tumblr's validation culture and then flourished on Twitter, where 'that's valid' became the supportive, non-judgmental response to people sharing their feelings or choices. It spread as a way to affirm people without necessarily agreeing with them.",
    examples: [
      { label: "💬 Supporting a decision", them: "I just quit my job with nothing lined up.", me: "Honestly? Valid. Your peace of mind matters more." },
      { label: "📱 Affirmation", them: "I cried watching a dog food commercial.", me: "Completely valid response. Those ads are designed to wreck you." },
      { label: "🤷 Non-judgment", them: "I'm taking the day off just because.", me: "Valid. No explanation needed ever." }
    ],
    originStory: [
      { date: "Pre-2018", title: "Logic Becomes Emotion", body: "In logic and law, 'valid' means something holds up under scrutiny. Internet culture borrowed this sense of 'this checks out' and applied it to emotional and social situations." },
      { date: "2018 · Tumblr and Twitter", title: "Validation Culture", body: "Tumblr's mental health positive culture and Twitter's reply ecosystem made 'that's valid' a supportive standard response. It gave people a way to affirm without needing to agree or explain." },
      { date: "2019 Onward", title: "Universal Affirmation", body: "'Valid' became Gen Z's non-judgmental green light. Whatever you're feeling, whatever you're choosing — if someone says 'that's valid,' you feel seen." }
    ],
    whyViral: [
      { title: "Mental health culture", desc: "Gen Z's emphasis on emotional validation and non-judgmental support made 'valid' the perfect linguistic tool." },
      { title: "Short affirmation", desc: "One word that says 'I hear you, I understand, and I accept your experience.' Unmatched efficiency." },
      { title: "No commitment required", desc: "'That's valid' supports someone without requiring agreement. It's empathy without endorsement." },
      { title: "Universal applicability", desc: "Every feeling, every choice, every situation can be 'valid.' It works in every context." }
    ],
    relatedSlangs: ["lowkey", "nocap", "vibecheck"],
    seoKeywords: ["valid meaning slang", "what does valid mean", "that's valid meaning", "valid slang definition"]
  },

  {
    id: "imdead", word: "I'm Dead", slug: "imdead",
    devanagari: null, pronunciation: "/aɪm dɛd/",
    shortMeaning: "This is so funny I cannot handle it. Same energy as the 💀 skull emoji.",
    fullMeaning: "'I'm dead' (or just 💀) means something is so funny, shocking, or chaotic that you've metaphorically died from it. It's the hyperbolic reaction to anything hilarious — you've expired, ceased to exist, been slain by comedy. The skull emoji 💀 serves the exact same function and often replaces the phrase entirely.",
    tag: "trending", year: 2015, language: "English", coinedBy: "Black Twitter / internet culture", origin: "Twitter / Black internet culture",
    culturalContext: "Emerged from Black Twitter's tradition of hyperbolic, dramatic comedy reactions. Being metaphorically 'dead' from laughter was an established expression that social media compressed into a reaction phrase and then into a single emoji.",
    examples: [
      { label: "💬 Comedy reaction", them: "He tried to parallel park for 20 minutes and then just left.", me: "I'm DEAD 😭💀 please why is this so funny" },
      { label: "📱 Emoji only", them: "Posted the most chaotic video imaginable", me: "💀💀💀" },
      { label: "🎭 Group chat", them: "The professor replied to his own email to himself.", me: "I'm actually deceased. Cannot recover." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Hyperbolic Comedy Roots", body: "Dying from laughter is an old English expression. 'I'm dying' and 'I'm dead' as hyperbolic laughter reactions predate the internet by centuries." },
      { date: "2013–2016", title: "Black Twitter Codification", body: "Black Twitter compressed hyperbolic laughter into a reaction format. 'I'm dead' and 'I'm deceased' became the standard comedy reactions on the platform, establishing it as internet vocabulary." },
      { date: "2018 Onward", title: "Skull Emoji Dominance", body: "The 💀 emoji became the universal shorthand for 'I'm dead.' A single emoji that communicates dying from laughter — zero words needed. TikTok's comment section made the skull emoji one of the most-used reactions online." }
    ],
    whyViral: [
      { title: "Hyperbole is comedy", desc: "Saying you died from laughter is funnier than saying you laughed. Escalation is a core comedy principle." },
      { title: "💀 emoji efficiency", desc: "One emoji. The complete emotional reaction. That level of compression is unbeatable on fast-moving platforms." },
      { title: "Black Twitter prestige", desc: "Black Twitter set the comedic tone for English-language internet culture. Their vocabulary became everyone's vocabulary." },
      { title: "Universal comedy reaction", desc: "Everyone needs a way to react to something funny. 'I'm dead' filled that role for a generation." }
    ],
    relatedSlangs: ["sendingme", "sheesh", "yeet"],
    seoKeywords: ["I'm dead meaning slang", "skull emoji meaning", "what does I'm dead mean", "im dead slang"]
  },

  {
    id: "sheesh", word: "Sheesh", slug: "sheesh",
    devanagari: null, pronunciation: "/ʃiːʃ/",
    shortMeaning: "An exclamation of surprise, awe, or being impressed by something.",
    fullMeaning: "'Sheesh' is an exclamation that expresses a wide range of intense reactions — being impressed, surprised, overwhelmed, or in awe of something. It's the verbal equivalent of a slow head nod of respect. 'Sheesh' said to someone's outfit means you're blown away by how good they look. The Vine-era pronunciation — an extended 'sheeeesh' — added a comedic layer.",
    tag: "trending", year: 2020, language: "English", coinedBy: "Vine / TikTok internet culture", origin: "Vine / TikTok",
    culturalContext: "While 'sheesh' existed as an exclamation of mild exasperation for decades, a Vine clip of someone saying it while dramatically reacting turned it into a comedic meme. TikTok's Tiko Fish meme in 2021 then launched 'sheesh' into a full viral explosion.",
    examples: [
      { label: "📸 Reacting to a look", them: "Just posted my outfit.", me: "SHEESH. The drip is immaculate honestly." },
      { label: "🎵 Music reaction", them: "This guitar solo though—", me: "Sheeeeesh. How is that even possible." },
      { label: "💬 Impressed", them: "He got a full scholarship AND a job offer.", me: "Sheesh. Some people are just built different." }
    ],
    originStory: [
      { date: "Pre-2020", title: "Old Expression, New Energy", body: "'Sheesh' as mild exasperation ('sheesh, that was close') is old American English. But the internet found in it a comedic potential — saying it with extreme emphasis and drama as a reaction to being impressed." },
      { date: "2020 · Viral Clips", title: "Meme Format Established", body: "Viral clips of people saying 'SHEEEESH' while reacting to impressive things established it as a reaction format. The extended pronunciation became part of the joke." },
      { date: "2021 · Tiko Fish TikTok", title: "Full Explosion", body: "A TikTok trend featuring the 'Sheesh Tiko Fish' sound launched 'sheesh' into mainstream awareness. The comment section became flooded with 'sheesh' reactions and it became one of the most recognizable Gen Z sound bites." }
    ],
    whyViral: [
      { title: "Phonetically satisfying", desc: "The extended 'sheeeeesh' is physically enjoyable to say and hear. Good slang feels good in the mouth." },
      { title: "Universal reaction", desc: "Whether you're impressed, shocked, or overwhelmed, 'sheesh' covers it." },
      { title: "TikTok sound culture", desc: "TikTok is an audio platform. A sound that became iconic spread faster than any text-based slang." },
      { title: "Comedic escalation", desc: "The more dramatic the 'sheesh,' the funnier it gets. Built-in escalation mechanism." }
    ],
    relatedSlangs: ["imdead", "vibecheck", "fire"],
    seoKeywords: ["sheesh meaning slang", "what does sheesh mean", "sheesh slang definition", "sheesh gen z"]
  },

  {
    id: "sendingme", word: "Sending Me", slug: "sendingme",
    devanagari: null, pronunciation: "/ˈsɛnd.ɪŋ miː/",
    shortMeaning: "This is so funny it's making me lose it completely.",
    fullMeaning: "'That's sending me' means something is so funny, chaotic, or unhinged that you're being metaphorically launched into outer space by the hilarity. It's a step above 'I'm dead' — sending me implies you're being physically propelled by the comedy. The image: you've been shot out of a cannon by a piece of content.",
    tag: "trending", year: 2021, language: "English", coinedBy: "Twitter / TikTok", origin: "Black Twitter / internet comedy culture",
    culturalContext: "Part of the tradition of hyperbolic comedy reactions that evolved on Black Twitter and then spread through TikTok. 'Sending me' captures the specific sensation of comedy that makes you lose your composure — you're being sent somewhere else entirely by the sheer force of the funny.",
    examples: [
      { label: "💬 Comedy gold", them: "He replied 'k' to her two-paragraph text.", me: "This is SENDING me. The confidence required for that response." },
      { label: "📱 Chaos content", them: "Posted the most unhinged video ever filmed", me: "SENDING ME. I've watched this seven times." },
      { label: "🎭 Group chat", them: "The cat knocked the whole Christmas tree over on camera.", me: "The expression on its face at the end is sending me into another dimension." }
    ],
    originStory: [
      { date: "2019–2021", title: "Hyperbolic Reaction Evolution", body: "As 'I'm dead' became overused, internet comedy culture evolved toward even more extreme hyperbole. 'Sending me' emerged as the next escalation — being propelled somewhere by the comedy rather than just dying from it." },
      { date: "2021 · TikTok Comedy Era", title: "TikTok Mainstream", body: "TikTok's explosion of comedy and chaotic content created demand for fresh reaction vocabulary. 'Sending me' filled the gap left by oversaturation of 'I'm dead.'" },
      { date: "2022 Onward", title: "Comment Section Standard", body: "'This is sending me' became a standard comment section reaction format, particularly on videos that are funny in slow-burn, building ways rather than immediate comedy." }
    ],
    whyViral: [
      { title: "Hyperbole escalation", desc: "Internet comedy requires constant escalation. 'Sending me' is funnier than 'I'm dead' because it implies active propulsion." },
      { title: "Comment section perfect", desc: "Three words that convey strong laughter reaction. Efficient and readable in any comment section." },
      { title: "Fresh vocabulary", desc: "As 'dead' became overused, something fresh was needed. Sending me arrived at the right time." },
      { title: "Universal comedy reaction", desc: "Works for any type of comedy — visual, text, situations, music." }
    ],
    relatedSlangs: ["imdead", "sheesh", "nocap"],
    seoKeywords: ["sending me meaning slang", "what does sending me mean", "that's sending me meaning", "sending me slang"]
  },

  {
    id: "bigyikes", word: "Big Yikes", slug: "bigyikes",
    devanagari: null, pronunciation: "/bɪɡ jaɪks/",
    shortMeaning: "An expression for something extremely embarrassing, cringey, or terrible.",
    fullMeaning: "'Big yikes' is an intensified version of 'yikes' — expressing strong second-hand embarrassment, horror, or cringey discomfort at something. Where 'yikes' handles minor awkwardness, 'big yikes' is for when something is catastrophically, almost impressively, bad. It's said with the energy of watching someone crash in slow motion.",
    tag: "classic", year: 2017, language: "English", coinedBy: "Twitter / Tumblr", origin: "Twitter humor / internet culture",
    culturalContext: "Emerged from internet humor culture's tradition of graduated embarrassment reactions. 'Yikes' already existed; 'big yikes' simply added intensity when regular yikes wasn't enough for whatever horror had occurred.",
    examples: [
      { label: "💬 Social disaster", them: "He showed up to the wedding in a tracksuit.", me: "Big yikes. From him. That's a big yikes situation." },
      { label: "📱 Celebrity mishap", them: "She called her fans by the wrong city name at the concert.", me: "Ooh. Big yikes. That's going to be a meme." },
      { label: "🎭 Dating fail", them: "He sent the 'I miss you' text to the group chat instead of her.", me: "Big yikes. HUGE yikes. Catastrophic." }
    ],
    originStory: [
      { date: "Pre-2017", title: "Yikes Foundation", body: "'Yikes' as an expression of alarm or embarrassment predates the internet. It was already established as the standard reaction to mild awkwardness." },
      { date: "2017 · Twitter and Tumblr", title: "Intensification", body: "As internet culture evolved increasingly extreme reactions to increasingly chaotic situations, 'yikes' alone became insufficient. 'Big yikes' emerged on Twitter and Tumblr to handle situations that exceeded normal yikes capacity." },
      { date: "2018 Onward", title: "Standard Cringe Reaction", body: "'Big yikes' became the calibrated response to something embarrassing but not malicious — perfect for social fails, celebrity gaffes, and awkward moments." }
    ],
    whyViral: [
      { title: "Graduated reaction system", desc: "Having yikes, big yikes, and huge yikes creates a satisfying scale of embarrassment reactions." },
      { title: "Second-hand cringe culture", desc: "Internet content is full of things to cringe at. Calibrated vocabulary for cringe is always useful." },
      { title: "Tone clarity", desc: "Big yikes says 'this is bad but not evil' — it's calibrated for social fails, not moral failings." },
      { title: "Comment section precision", desc: "Two words. The exact reaction you need for many internet moments." }
    ],
    relatedSlangs: ["salty", "imdead", "cooked"],
    seoKeywords: ["big yikes meaning", "what does big yikes mean", "yikes slang meaning", "big yikes definition"]
  },

  {
    id: "shook", word: "Shook", slug: "shook",
    devanagari: null, pronunciation: "/ʃʊk/",
    shortMeaning: "Completely shocked, surprised, or left speechless by something.",
    fullMeaning: "Being 'shook' means you're so shocked, surprised, or emotionally affected by something that your stability has been disrupted — metaphorically shaken. You can be shook by news, an amazing performance, a plot twist, or someone's unexpected behavior. The physical metaphor: shook = physically rattled by the surprise or impact.",
    tag: "classic", year: 2016, language: "English / AAVE", coinedBy: "Black American internet culture", origin: "Black Twitter / AAVE",
    culturalContext: "While 'shook' is simply the past tense of 'shake,' AAVE and Black internet culture used it to describe the state of being emotionally rattled or surprised. Beyoncé's 'Formation' and other cultural moments made it mainstream — people were 'shook' by great art, surprising news, and anything that disrupted their equilibrium.",
    examples: [
      { label: "🎵 Music reaction", them: "Did you see that live performance??", me: "I am genuinely shook. I've watched it four times and I still can't process it." },
      { label: "💬 Plot twist", them: "The twist at the end of that show—", me: "I was SHOOK. Sat there for five minutes not speaking." },
      { label: "📱 Surprising news", them: "She got the job at her first interview.", me: "Shook. Genuinely shook for her. What an energy." }
    ],
    originStory: [
      { date: "Pre-2016", title: "AAVE Usage", body: "In Black American vernacular, being 'shook' described the physical sensation of being rattled by fear, surprise, or intense emotion. The word carried the physical metaphor of being physically shaken." },
      { date: "2016 · Cultural Moments", title: "Beyoncé and Internet Discourse", body: "Major cultural moments — Beyoncé's Lemonade, political events, shocking celebrity news — prompted 'I'm shook' as the standard intense reaction. The word captured the particular feeling of being left destabilized by something significant." },
      { date: "2017–2019", title: "General Surprise Reaction", body: "'Shook' became the calibrated word for when something affects you more than regular surprise. Not just 'oh wow' but actively destabilized." }
    ],
    whyViral: [
      { title: "Physical metaphor clarity", desc: "Shook literally means shaken. The physical metaphor for emotional disruption is immediately understood." },
      { title: "Graduated surprise scale", desc: "There's surprised and then there's shook. Having the distinction is useful and people used it." },
      { title: "Cultural moment reactions", desc: "Major events create demand for strong reaction vocabulary. Shook met that demand repeatedly." },
      { title: "Short and expressive", desc: "One syllable. Loaded with emotion. Perfect for the pace of social media reactions." }
    ],
    relatedSlangs: ["sheesh", "imdead", "vibecheck"],
    seoKeywords: ["shook meaning slang", "what does shook mean", "shook slang definition", "I'm shook meaning"]
  },

  {
    id: "touchgrass", word: "Touch Grass", slug: "touchgrass",
    devanagari: null, pronunciation: "/tʌtʃ ɡrɑːs/",
    shortMeaning: "Go outside and experience the real world. You're spending too much time online.",
    fullMeaning: "'Touch grass' is a piece of internet advice (often unsolicited) telling someone to go outside, disconnect from the internet, and re-engage with the physical world. It's the digital equivalent of 'get some fresh air.' Used when someone is being dangerously online — too invested in internet drama, takes things too seriously, or clearly hasn't left their room in a while.",
    tag: "classic", year: 2019, language: "English", coinedBy: "Gaming / internet culture", origin: "Gaming communities / Twitter",
    culturalContext: "Emerged from gaming communities where playing games all day while neglecting the physical world was a running joke. 'Touch grass' became the standard response to anyone displaying extreme internet behavior — a reminder that the outside world exists and is worth engaging with.",
    examples: [
      { label: "💬 Internet over-investment", them: "I've been in the comment section of this drama for 8 hours.", me: "Please go touch grass. The discourse will survive without you." },
      { label: "📱 Too online", them: "I'm taking this very seriously and here's a 12-point breakdown of why—", me: "Touch grass. I say this with love." },
      { label: "🎮 Gaming marathon", them: "Day 3 of not leaving my room.", me: "Brother I need you to touch grass. Just once. For me." }
    ],
    originStory: [
      { date: "2017–2019", title: "Gaming Community Origins", body: "Gaming communities used 'touch grass' as self-deprecating and external humor about the lifestyle of playing games all day inside. It was both an acknowledgment and a gently directed critique." },
      { date: "2020 · Pandemic Context", title: "Ironic During Lockdown", body: "During the pandemic lockdowns of 2020, 'touch grass' took on ironic dimensions — people genuinely couldn't go outside. The phrase became both a joke and a genuine longing." },
      { date: "2021 Onward", title: "Universal Internet Critique", body: "'Touch grass' became the standard response to anyone being dangerously online. It transcended gaming and became general internet vocabulary for calling out over-engagement with digital life." }
    ],
    whyViral: [
      { title: "Universal tech concern", desc: "Everyone — gamers, parents, therapists, journalists — recognized the problem of too much time online. Touch grass named the solution." },
      { title: "Specific and visual", desc: "'Touching grass' is specific and imageable. More memorable than 'go outside.'" },
      { title: "Self-aware humor", desc: "The people most likely to say 'touch grass' are often themselves deeply online. The self-awareness makes it funnier." },
      { title: "Perfect insult/advice hybrid", desc: "Touch grass is simultaneously a roast and genuine life advice. That dual function makes it versatile." }
    ],
    relatedSlangs: ["npc", "mid", "vibecheck"],
    seoKeywords: ["touch grass meaning", "what does touch grass mean", "touch grass slang", "touch grass definition"]
  },

  {
    id: "npc", word: "NPC", slug: "npc",
    devanagari: null, pronunciation: "/ɛn piː siː/",
    shortMeaning: "Someone who seems robotic, unoriginal, or acts like a background character with no real opinions.",
    fullMeaning: "NPC stands for Non-Playable Character — a game character controlled by AI rather than a player, who follows scripted routines without genuine thought or agency. When used about a real person, it means they seem to lack independent thought, follow the crowd blindly, give scripted responses, or seem generally unaware of what's happening around them. It's also an internet aesthetic: NPC streamers who act like video game characters for content.",
    tag: "trending", year: 2016, language: "English", coinedBy: "Gaming culture / internet", origin: "Video game culture / Twitter",
    culturalContext: "The metaphor of treating real people like video game NPCs emerged from gaming culture's philosophy that some people seem to be running on autopilot — scripted, unthinking, just filling space. TikTok's 'NPC streaming' trend (people acting like video game characters for gifts) added an entirely new dimension.",
    examples: [
      { label: "💬 Calling out behavior", them: "He just agrees with whatever the last person said.", me: "Full NPC behavior. He has no genuine opinions." },
      { label: "📱 Social observation", them: "Everyone in that comment section says the exact same thing.", me: "It's an NPC army. They all ran the same script." },
      { label: "🎮 TikTok streaming", them: "Why is she pretending to be a robot on TikTok?", me: "NPC streaming — people send gifts and she does the scripted reaction. It's actually genius." }
    ],
    originStory: [
      { date: "Pre-2016", title: "Gaming Concept", body: "Non-Playable Characters have existed since video games began. NPCs follow programmed routines, give the same responses, and exist to populate a world rather than think independently." },
      { date: "2016–2019", title: "Twitter Metaphor", body: "Twitter's philosophy culture began applying the NPC metaphor to real people — particularly to describe someone with robotic thinking, no original opinions, or who just follows social scripts without awareness." },
      { date: "2023 · NPC Streaming", title: "TikTok Aesthetic", body: "TikTok creators invented NPC streaming — performing scripted NPC-style reactions when viewers sent gifts. 'Ice cream so good' became iconic. The trend brought NPC vocabulary to millions who weren't gamers." }
    ],
    whyViral: [
      { title: "Gaming metaphor precision", desc: "The NPC metaphor captures exactly what it describes — someone running on autopilot, no real agency, just filling space." },
      { title: "TikTok NPC streaming", desc: "One of TikTok's most viral trends made NPC mainstream for non-gamers in 2023." },
      { title: "Social commentary value", desc: "Describing someone as an NPC makes a philosophical point about individuality and independent thought." },
      { title: "Infinitely applicable", desc: "Any person, any brand, any institution can be called NPC when they display scripted, unthinking behavior." }
    ],
    relatedSlangs: ["touchgrass", "mid", "vibecheck"],
    seoKeywords: ["NPC meaning slang", "what does NPC mean", "NPC slang definition", "NPC TikTok meaning"]
  },

  {
    id: "caughtin4k", word: "Caught in 4K", slug: "caughtin4k",
    devanagari: null, pronunciation: "/kɔːt ɪn fɔːr keɪ/",
    shortMeaning: "Caught red-handed with clear, undeniable evidence. No denying it.",
    fullMeaning: "'Caught in 4K' means caught doing something with such crystal-clear evidence that there's absolutely no possible denial. 4K refers to the ultra-high resolution of modern cameras — when something is captured in 4K, every detail is visible. Being caught in 4K is the ultimate 'there's no way out of this' situation.",
    tag: "trending", year: 2020, language: "English", coinedBy: "Black Twitter / internet culture", origin: "Black Twitter / social media",
    culturalContext: "Emerged from the increasingly high-resolution cameras on smartphones and surveillance systems. As 4K became the standard for video, 'caught in 4K' became the phrase for evidence so clear it's irrefutable. It's the digital evolution of 'caught red-handed.'",
    examples: [
      { label: "💬 Evidence moment", them: "He said he wasn't there.", me: "He was absolutely there. Someone posted a video. Caught in 4K." },
      { label: "📱 Social media exposure", them: "She denied being at the party.", me: "Three different people tagged her in their Stories. Caught in 4K, no recovery." },
      { label: "🎮 Gaming caught", them: "He claims he wasn't hacking.", me: "The kill cam caught it all in full 4K. It's over for him." }
    ],
    originStory: [
      { date: "2018–2019", title: "Camera Technology Context", body: "As 4K cameras became standard on smartphones and security systems, the phrase 'caught in 4K' emerged to describe being captured with irrefutably clear evidence — every pixel of your guilt visible." },
      { date: "2020 · Black Twitter", title: "Viral Format", body: "Black Twitter formalized 'caught in 4K' as a reaction phrase for any situation where someone's lie or misdeed was captured with undeniable clarity. The format spread rapidly." },
      { date: "2021 Onward", title: "Universal Evidence Phrase", body: "From sports controversies to celebrity drama to personal relationship issues — 'caught in 4K' became the go-to phrase for any situation where the evidence is irrefutable." }
    ],
    whyViral: [
      { title: "Technology metaphor", desc: "4K resolution means nothing is hidden. The metaphor perfectly captures the sensation of being caught with no ambiguity." },
      { title: "Satisfying specificity", desc: "Not just caught, but caught in 4K. The specificity adds humor and emphasizes the completeness of the evidence." },
      { title: "Evergreen format", desc: "People get caught doing things constantly. 'Caught in 4K' will always be applicable." },
      { title: "Drama and accountability culture", desc: "A generation that grew up with cameras everywhere needed vocabulary for the reality of being permanently observable." }
    ],
    relatedSlangs: ["nocap", "tea", "opp"],
    seoKeywords: ["caught in 4K meaning", "what does caught in 4K mean", "caught in 4K slang", "4K slang definition"]
  },

  {
    id: "rentfree", word: "Rent Free", slug: "rentfree",
    devanagari: null, pronunciation: "/rɛnt friː/",
    shortMeaning: "Something or someone who lives in your head constantly without paying rent.",
    fullMeaning: "When something or someone is 'living rent free in your head,' it means you cannot stop thinking about them, even if you don't want to. The person or thing occupies mental space without contributing anything in return — hence, rent free. It's applied to people you're obsessing over, songs you can't stop thinking of, situations you can't let go, and anything that takes up mental real estate uninvited.",
    tag: "trending", year: 2019, language: "English", coinedBy: "Twitter / internet culture", origin: "Twitter humor / internet",
    culturalContext: "The metaphor of the mind as a house with rooms to rent existed in psychology before it became internet slang. Twitter humor made 'rent free' a standard way to describe involuntary and often unwanted mental preoccupation — particularly with people you wish you weren't thinking about.",
    examples: [
      { label: "💬 Post-breakup", them: "How are you over him?", me: "I'm not. He's living completely rent free in my head and I can't evict him." },
      { label: "📱 Song obsession", them: "What's stuck in your head today?", me: "That same melody. Rent free. I've heard it three times and it will not leave." },
      { label: "🎭 Personal rival", them: "Do you still think about what she said?", me: "Rent free, fully. I replay it at 3am and I hate myself for it." }
    ],
    originStory: [
      { date: "Pre-internet", title: "The Metaphor's Roots", body: "The concept of someone living in your head was a psychology and self-help metaphor before it became slang. Mental real estate, cognitive space — the mind-as-property framework existed." },
      { date: "2019 · Twitter", title: "Slang Compression", body: "Twitter humor condensed 'living rent free in my head' into a standard phrase for involuntary obsession. The real estate metaphor resonated in an era of housing anxiety — the irony of something in your mind not paying rent was immediately funny." },
      { date: "2020 Onward", title: "Universal Mental Preoccupation", body: "'Rent free' became the phrase for anything you can't stop thinking about — songs, people, embarrassing memories, unresolved situations." }
    ],
    whyViral: [
      { title: "Universal human experience", desc: "Everyone has things that occupy their mind uninvited. Rent free named that universal experience precisely." },
      { title: "Real estate metaphor resonance", desc: "In an era where housing costs are a constant concern, metaphors about rent hit differently and more humorously." },
      { title: "Self-aware vulnerability", desc: "Admitting something lives rent free in your head is vulnerable but framed humorously — the perfect internet confession tone." },
      { title: "Applies to everything", desc: "Songs, people, memories, embarrassments. Any form of involuntary mental preoccupation." }
    ],
    relatedSlangs: ["lowkey", "situationship", "tea"],
    seoKeywords: ["rent free meaning slang", "living rent free meaning", "what does rent free mean", "rent free slang"]
  },

  {
    id: "iykyk", word: "IYKYK", slug: "iykyk",
    devanagari: null, pronunciation: "/ɪf juː noʊ juː noʊ/",
    shortMeaning: "If You Know You Know. A nod to shared inside knowledge or an experience not everyone gets.",
    fullMeaning: "IYKYK stands for 'If You Know You Know.' It's used when referencing something that only a specific group, community, or set of people would understand — an inside joke, a niche reference, or a shared experience that doesn't need explaining to those who were there but would take too long to explain to outsiders.",
    tag: "trending", year: 2019, language: "English", coinedBy: "Social media / Gen Z internet", origin: "Twitter / Instagram captions",
    culturalContext: "IYKYK emerged from caption culture — posting content with context that only your community would understand, using IYKYK as a knowing wink to insiders. It creates two audiences: those who know and feel belonging, and those who don't and feel curious.",
    examples: [
      { label: "📸 Niche reference", them: "Posted a very specific inside joke photo", me: "IYKYK 😭" },
      { label: "💬 Shared experience", them: "Posted a clip from a show only superfans would recognize", me: "The season 4 callback. IYKYK." },
      { label: "🎵 Fandom moment", them: "Posted a lyric that only true fans know the significance of", me: "This lyric hits different. IYKYK." }
    ],
    originStory: [
      { date: "2018–2019", title: "Caption Culture", body: "Instagram caption culture created the need for shorthand that signals 'this is for a specific audience.' IYKYK emerged as a way to post for insiders without alienating the broader audience — or without having to explain." },
      { date: "2019–2021", title: "Twitter and TikTok", body: "IYKYK became a standard caption/hashtag across platforms. It functions as both content label and community signal — creating belonging for those who understand and intrigue for those who don't." },
      { date: "2021 Onward", title: "Universal Inside Reference", body: "IYKYK expanded from truly niche references to ironically referring to things everyone knows. The ironic use — IYKYK about something completely mainstream — added a comedic layer." }
    ],
    whyViral: [
      { title: "Creates community", desc: "IYKYK builds instant in-group solidarity. Seeing it and understanding feels like a handshake." },
      { title: "Creates curiosity", desc: "For those who don't know, IYKYK is an invitation to find out. It drives engagement." },
      { title: "Caption efficiency", desc: "Four letters that replace a long explanation. Maximum efficiency for captions." },
      { title: "Inside joke culture", desc: "Every community has its own language. IYKYK is the meta-signal for all of them." }
    ],
    relatedSlangs: ["lowkey", "fr", "nocap"],
    seoKeywords: ["IYKYK meaning", "what does IYKYK mean", "if you know you know meaning", "IYKYK slang"]
  },

  {
    id: "fr", word: "FR", slug: "fr",
    devanagari: null, pronunciation: "/fɔːr rɪəl/",
    shortMeaning: "For Real. Used for emphasis or to ask if something is genuinely true.",
    fullMeaning: "'FR' stands for 'for real' and serves two purposes: as an emphasis (I am fr done with this = I am genuinely done) and as a question (FR? = Are you serious?). It's one of the most versatile internet abbreviations because it can end a statement, begin a question, or stand alone as a reaction.",
    tag: "trending", year: 2012, language: "English / AAVE", coinedBy: "Texting culture / Black American vernacular", origin: "SMS / Twitter",
    culturalContext: "A natural abbreviation of 'for real' from texting culture. 'For real' itself comes from AAVE where it served as both emphasis and question for decades. The abbreviation emerged from character-limited SMS culture and became even more natural in tweet-length internet communication.",
    examples: [
      { label: "💬 Emphasis", them: "I cannot deal with this today.", me: "FR tho. Some days are just like that." },
      { label: "📱 Question mode", them: "He actually apologized??", me: "FR?? Like a real apology or the fake kind?" },
      { label: "🎭 Agreement", them: "The ending of that show made no sense.", me: "FR FR. The writers absolutely lost the plot in season 3." }
    ],
    originStory: [
      { date: "Pre-internet", title: "AAVE Roots", body: "'For real' as emphasis and verification question comes from African American Vernacular English. 'For real?' asked for confirmation. 'For real' ended a statement with sincerity." },
      { date: "2010–2013", title: "SMS Abbreviation", body: "As texting became universal, 'for real' naturally compressed to 'fr.' Character limits and typing speed made the abbreviation practical and it spread rapidly through text culture." },
      { date: "2015 Onward", title: "Twitter Standard", body: "On Twitter and then every other platform, 'fr' became a standard sentence modifier. 'Fr tho' (for real though) became particularly common as an agreement phrase." }
    ],
    whyViral: [
      { title: "Maximum efficiency", desc: "Two letters. The complete function of 'for real.' SMS culture made this abbreviation inevitable." },
      { title: "Dual function", desc: "Works as statement emphasis AND as a question. That flexibility makes it extremely useful." },
      { title: "Universal agreement tool", desc: "'FR tho' is one of the most natural agreement phrases in internet English." },
      { title: "AAVE foundation", desc: "Built on deeply embedded Black American vernacular that has driven internet language for two decades." }
    ],
    relatedSlangs: ["nocap", "bet", "iykyk"],
    seoKeywords: ["FR meaning slang", "what does FR mean", "for real slang", "FR slang definition"]
  },

  {
    id: "ofc", word: "OFC", slug: "ofc",
    devanagari: null, pronunciation: "/ɒv kɔːrs/",
    shortMeaning: "Of course. A quick way to agree or confirm something obvious.",
    fullMeaning: "'OFC' means 'of course' — used to agree, confirm, or answer a yes/no question where the answer is obviously yes. It's the abbreviated affirmative that says 'obviously, what a question.' Used to confirm plans, agree with something obvious, or respond to requests. Sometimes carries a slightly sarcastic edge when the 'of course' is delivered with mild exasperation.",
    tag: "trending", year: 2013, language: "English", coinedBy: "Texting / internet culture", origin: "SMS / online chat",
    culturalContext: "A natural product of SMS and internet chat culture where brevity is valued. 'Of course' is already only two words, but OFC emerged because every word saved is friction removed in fast-moving conversation.",
    examples: [
      { label: "💬 Obvious confirmation", them: "Are you coming tonight?", me: "Ofc! Wouldn't miss it." },
      { label: "📱 Quick agreement", them: "Is it okay if I borrow your notes?", me: "Ofc, I'll send them now." },
      { label: "🙄 Sarcastic edge", them: "Of course he was late again.", me: "Ofc he was. Some things never change." }
    ],
    originStory: [
      { date: "2010–2013", title: "Chat Abbreviation Era", body: "Online chat platforms like MSN Messenger, Skype, and early smartphone messaging created a culture of abbreviation. OFC emerged alongside LOL, BRB, and TTYL as a standard shorthand." },
      { date: "2015 Onward", title: "Universal Acknowledgment", body: "OFC became standard across all platforms — Twitter replies, Instagram comments, WhatsApp — as a quick affirmative that doesn't require full words." },
      { date: "Present", title: "Tone Flexibility", body: "OFC can be warm ('ofc, I'm here for you'), casual ('ofc let's go'), or slightly exasperated ('ofc that happened'). That tone flexibility kept it versatile." }
    ],
    whyViral: [
      { title: "Pure efficiency", desc: "Three letters instead of eight. The math works in any time-pressed conversation." },
      { title: "Universal affirmative", desc: "Works as agreement, confirmation, permission, and acknowledgment. All from three letters." },
      { title: "Abbreviation culture", desc: "The internet normalized abbreviations. OFC was one of the first wave and has never left." },
      { title: "Tone flexibility", desc: "Warm, casual, or exasperated — OFC adapts to context automatically." }
    ],
    relatedSlangs: ["fr", "bet", "nocap"],
    seoKeywords: ["OFC meaning slang", "what does OFC mean", "of course abbreviation", "OFC slang definition"]
  },

  {
    id: "finna", word: "Finna", slug: "finna",
    devanagari: null, pronunciation: "/ˈfɪn.ə/",
    shortMeaning: "About to do something. Fixing to. Getting ready to.",
    fullMeaning: "'Finna' is a contraction of 'fixing to' or 'fixin' to' — meaning 'about to' or 'getting ready to do something.' 'I'm finna go' means I'm about to go. It's used to signal immediate future action in casual conversation. It carries a casual confidence: I've decided, I'm moving.",
    tag: "classic", year: 2015, language: "English / AAVE", coinedBy: "Black American vernacular / Southern US", origin: "AAVE / Southern US slang",
    culturalContext: "Finna has deep roots in African American and Southern American English where 'fixing to' (preparing to do something) has been used for generations. 'Finna' is the compressed, casual form that became standard in Black internet culture and then spread broadly.",
    examples: [
      { label: "💬 Immediate action", them: "Where are you?", me: "Finna leave rn, be there in 10." },
      { label: "📱 Decision made", them: "Are you ordering food?", me: "Finna order the whole left side of the menu honestly." },
      { label: "🎮 Gaming", them: "What are you about to do?", me: "Finna solo the whole dungeon. Watch." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Southern AAVE Roots", body: "'Fixing to' (or 'fixin' to') is a Southern American and Black American expression meaning 'about to' or 'preparing to.' It's been in use for generations as a way to signal imminent future action." },
      { date: "2012–2015", title: "Black Internet Culture", body: "Black internet culture, particularly Black Twitter, normalized 'finna' as an everyday written expression. The compressed form spread rapidly through online communication." },
      { date: "2016 Onward", title: "General Internet Adoption", body: "'Finna' spread from Black internet culture into general Gen Z vocabulary. It's now used across communities as a casual future tense marker." }
    ],
    whyViral: [
      { title: "AAVE pipeline", desc: "AAVE has been the primary driver of English internet slang for two decades. Finna was carried by that current." },
      { title: "Casual future tense", desc: "English doesn't have a dedicated casual future form. Finna fills that gap naturally and expressively." },
      { title: "Efficient and musical", desc: "Two syllables. Sounds good when spoken or typed. Finna has a rhythm that 'about to' lacks." },
      { title: "Black Twitter influence", desc: "Black Twitter standardized finna in written internet English and its reach is massive." }
    ],
    relatedSlangs: ["bet", "fr", "lowkey"],
    seoKeywords: ["finna meaning slang", "what does finna mean", "finna slang definition", "finna about to meaning"]
  },

  {
    id: "smol", word: "Smol", slug: "smol",
    devanagari: null, pronunciation: "/smoʊl/",
    shortMeaning: "Something small, cute, and absolutely precious.",
    fullMeaning: "'Smol' is a deliberately misspelled version of 'small' that conveys extreme cuteness and affection. Something that is smol is not just small — it is tiny in the most endearing, precious, want-to-protect-it way possible. Kittens are smol. Babies are smol. Very short people (affectionately) are smol. The misspelling is itself part of the aesthetic — it softens the word and makes it feel even more gentle.",
    tag: "classic", year: 2015, language: "English", coinedBy: "Tumblr / internet cute culture", origin: "Tumblr / fandom culture",
    culturalContext: "Emerged from Tumblr's 'uwu' and cute aesthetic culture where deliberate misspellings conveyed softness and affection. 'Smol' is part of a vocabulary system (also including 'bby,' 'soft,' 'precious') that expresses protective affection for cute things.",
    examples: [
      { label: "🐾 Pet content", them: "My kitten is 8 weeks old.", me: "She is so smol I cannot handle this. Protect her at all costs." },
      { label: "💬 Affectionate about a person", them: "My little cousin just tried to give me a high five and barely reached my elbow.", me: "The smolest thing I've ever heard, I love them." },
      { label: "📱 Cute reaction", them: "Posted a photo of a tiny plant", me: "This smol plant deserves the world." }
    ],
    originStory: [
      { date: "2014–2015", title: "Tumblr Cute Aesthetic", body: "Tumblr's culture of affectionate, protective feelings toward cute things created a vocabulary of deliberate misspellings. 'Smol' emerged alongside 'bby,' 'frend,' and 'precious' as markers of this aesthetic." },
      { date: "2016–2018", title: "Fandom Adoption", body: "Fandom communities adopted 'smol' to describe beloved small characters, baby animals, and short celebrities. 'Smol bean' became its own phrase for someone small and precious." },
      { date: "2018 Onward", title: "General Cute Culture", body: "Smol escaped fandom into general internet use for anything that triggers protective affection through its smallness." }
    ],
    whyViral: [
      { title: "Phonetically soft", desc: "Smol sounds softer than 'small.' The misspelling creates a gentler, rounder sound that matches its meaning." },
      { title: "Protective affection culture", desc: "The internet loves to express protective feelings toward cute things. Smol is a vocabulary word for that impulse." },
      { title: "Deliberate misspelling signals", desc: "Intentional misspelling is a community signal — it says 'I'm participating in this aesthetic on purpose.'" },
      { title: "Universal cute triggers", desc: "Babies, animals, small plants — the triggers for 'smol' are everywhere and constant." }
    ],
    relatedSlangs: ["pookie", "bussin", "tea"],
    seoKeywords: ["smol meaning slang", "what does smol mean", "smol slang definition", "smol bean meaning"]
  },

  {
    id: "gucci", word: "Gucci", slug: "gucci",
    devanagari: null, pronunciation: "/ˈɡuː.tʃi/",
    shortMeaning: "Everything's good. All is well. We're fine.",
    fullMeaning: "In slang, 'Gucci' means good, great, or everything is fine. 'We're Gucci' means we're okay. 'It's all Gucci' means there's no problem. The luxury fashion brand's name was borrowed to signal premium okayness — if something is Gucci, it's elevated above average and functioning at its best. It's the fashion-world version of 'all good.'",
    tag: "classic", year: 2009, language: "English / AAVE", coinedBy: "Gucci Mane / hip-hop culture", origin: "Hip-hop / Atlanta culture",
    culturalContext: "Atlanta rapper Gucci Mane made 'Gucci' a frequent exclamation in his music, turning his own name (a nod to the brand) into slang. The association between the luxury brand's quality and personal okayness was then adopted by broader hip-hop culture.",
    examples: [
      { label: "💬 Everything's fine", them: "Sorry I'm running late, is that okay?", me: "We're Gucci, take your time." },
      { label: "📱 Confirming good status", them: "How are things after the drama?", me: "All Gucci now. We talked it out." },
      { label: "🤝 Clearing the air", them: "Are we good after last time?", me: "Completely Gucci. Already forgot about it." }
    ],
    originStory: [
      { date: "2009 · Gucci Mane", title: "Rapper as Living Brand", body: "Gucci Mane — whose stage name already referenced the luxury brand — started using 'Gucci' as a general positive affirmation in his music and interviews. His Atlanta fanbase adopted it immediately." },
      { date: "2012–2016", title: "Hip-hop Integration", body: "'Gucci' as an affirmation spread through Southern hip-hop, then general hip-hop, then Black internet culture. Saying everything is 'Gucci' connected everyday okayness to luxury quality." },
      { date: "2016 Onward", title: "General Positive", body: "Gucci became standard internet slang for 'good' or 'fine.' Its luxury brand origins add a faintly ironic layer — even mundane okayness gets elevated to designer status." }
    ],
    whyViral: [
      { title: "Gucci Mane's reach", desc: "An Atlanta rap legend making his own name into slang is both clever and impossible to miss." },
      { title: "Luxury elevation of 'fine'", desc: "Everything isn't just fine, it's Gucci. The brand association upgrades the mundane." },
      { title: "Atlanta's cultural influence", desc: "Atlanta's dominance of hip-hop culture meant its vocabulary went everywhere the music went." },
      { title: "Casual okayness need", desc: "English needed a casual, elevated way to say everything is fine. Gucci delivered." }
    ],
    relatedSlangs: ["fire", "lit", "bet"],
    seoKeywords: ["gucci meaning slang", "what does gucci mean", "gucci slang definition", "all gucci meaning"]
  },

  {
    id: "periodt", word: "Periodt", slug: "periodt",
    devanagari: null, pronunciation: "/ˈpɪər.i.ɒdt/",
    shortMeaning: "Period. Full stop. The discussion is absolutely over. No further argument.",
    fullMeaning: "'Periodt' is an intensified version of 'period' (as in, 'and that's final'). The added 't' makes it more emphatic and signals AAVE origins. When you say 'periodt,' you're declaring something as fact, ending discussion, and indicating no further debate is welcome or possible. It's the ultimate mic-drop punctuation for any statement.",
    tag: "trending", year: 2019, language: "English / AAVE", coinedBy: "Black American culture / drag culture", origin: "AAVE / Black drag culture",
    culturalContext: "Emerged from Black and drag culture's tradition of declarative, final statements. 'Period' as emphasis comes from AAVE. The spelling 'periodt' with a silent T adds flair and signals cultural origin. It was popularized by drag queens and Black Twitter before becoming universal.",
    examples: [
      { label: "💬 Declaring a fact", them: "Who was better, honestly?", me: "Beyoncé. Periodt. End of discussion." },
      { label: "📱 Self-affirmation", them: "You deserve better.", me: "I know. And I'm not settling anymore. Periodt." },
      { label: "🎭 Final word", them: "But don't you think—", me: "No. She's the greatest. Periodt." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Period as Punctuation of Life", body: "In AAVE and Black rhetoric, 'period' at the end of a statement has long meant 'this is final, the conversation ends here.' It borrowed punctuation's function as spoken emphasis." },
      { date: "2018–2019", title: "Drag and Black Twitter", body: "Black drag culture and Black Twitter began spelling it 'periodt' to signal the word as slang rather than standard English. The silent T became a community identifier." },
      { date: "2019–2021", title: "TikTok and Mainstream", body: "TikTok's lip sync and speech culture spread 'periodt' rapidly. It became standard punctuation for any emphatic statement, used as both a standalone word and a caption addition." }
    ],
    whyViral: [
      { title: "Punctuation as personality", desc: "Borrowing a punctuation mark and turning it into a power statement is clever and immediately understood." },
      { title: "Drag culture charisma", desc: "Drag vocabulary carries energy and conviction. Periodt is the linguistic equivalent of a death drop." },
      { title: "Finality is universal", desc: "Everyone wants a way to end a discussion definitively. Periodt is the perfect tool for that." },
      { title: "The T makes it different", desc: "The silent T spelling marks 'periodt' as slang rather than standard English, creating community ownership of the word." }
    ],
    relatedSlangs: ["slay", "nocap", "fr"],
    seoKeywords: ["periodt meaning slang", "what does periodt mean", "periodt slang definition", "period slang meaning"]
  }

  /* ── BATCH 4 — 10 NEW ENTRIES ────────────────────────── */

  {
    id: "era", word: "Era", slug: "era",
    devanagari: null, pronunciation: "/ˈɪər.ə/",
    shortMeaning: "A chapter or phase of your life you are currently living.",
    fullMeaning: "An 'era' is a defined chapter or phase of your life, usually one with a specific vibe, aesthetic, or personal evolution. 'I'm in my villain era' means you're done being nice and taking no nonsense. 'Hot girl era', 'healing era', 'main character era' — eras are personal seasons you consciously step into and announce.",
    tag: "trending", year: 2022, language: "English", coinedBy: "Gen Z / TikTok", origin: "TikTok / social media",
    culturalContext: "Taylor Swift's album releases are called 'eras,' and the Eras Tour brought the concept of distinct life chapters to global mainstream. Gen Z adopted 'era' as the framework for narrating personal transformation and identity shifts.",
    examples: [
      { label: "💬 Self-declaration", them: "You've been so unbothered lately.", me: "Fully in my villain era. Nobody gets grace anymore." },
      { label: "📸 Caption", them: "Posted a glow-up photo series", me: "Not the same person. New era, new me." },
      { label: "🎭 Mood shift", them: "Why are you studying so hard this semester?", me: "Locked in era. No distractions, no excuses." }
    ],
    originStory: [
      { date: "Pre-2022", title: "Music Framework", body: "Taylor Swift famously divided her career into distinct 'eras' — each album era had its own aesthetic, color palette, and emotional world. The Eras Tour made this framework legendary." },
      { date: "2022", title: "TikTok Life Framework", body: "Gen Z adopted 'era' to describe personal life chapters. 'I'm in my healing era', 'entering my unbothered era' became standard self-narration vocabulary on TikTok." },
      { date: "2023 Onward", title: "Universal Life Language", body: "Era became the go-to framework for life chapters across every demographic. Announcing your current era signals self-awareness and intentional personal evolution." }
    ],
    whyViral: [
      { title: "Taylor Swift pipeline", desc: "One of the biggest artists in the world made 'eras' a narrative framework. When Taylor speaks, millions absorb the vocabulary." },
      { title: "Self-narrative culture", desc: "Gen Z loves to narrate their own lives as stories. 'Era' is the chapter heading for that story." },
      { title: "Infinite applications", desc: "Villain era, soft era, hot era, study era — any mood, any phase, any transformation gets its own era." },
      { title: "Empowerment framing", desc: "Announcing your era is an act of intention. You're not just changing, you're entering something." }
    ],
    relatedSlangs: ["maincharacter", "glowup", "slay"],
    seoKeywords: ["era meaning slang", "villain era meaning", "what does era mean gen z", "my era slang"]
  },

  {
    id: "itsgiving", word: "It's Giving", slug: "itsgiving",
    devanagari: null, pronunciation: "/ɪts ˈɡɪv.ɪŋ/",
    shortMeaning: "This is giving off a specific vibe or energy. What it is.",
    fullMeaning: "'It's giving' means something is radiating a certain vibe, aesthetic, or energy. 'It's giving royalty' means it looks elegant and regal. 'It's giving unhinged' means it's chaotic. You can finish the sentence or leave it open ('it's giving...') and let context complete the meaning. Often used as a compliment, sometimes ironic.",
    tag: "trending", year: 2021, language: "English / AAVE / Drag", coinedBy: "Black drag culture / AAVE", origin: "Drag culture / Black Twitter / TikTok",
    culturalContext: "Rooted in Black drag culture's tradition of describing the essence or vibe a person or look is projecting. 'She's giving' in ballroom meant she was embodying a specific energy or aesthetic. TikTok brought it to global audiences in 2021.",
    examples: [
      { label: "📸 Look description", them: "What's the vibe with this fit?", me: "It's giving old money. Very quiet luxury." },
      { label: "💬 Ironic use", them: "His apology was three sentences long.", me: "It's giving... 'I'm sorry you were offended.' Classic non-apology." },
      { label: "🎭 Open-ended", them: "I can't describe this painting.", me: "It's just giving. You know when you know." }
    ],
    originStory: [
      { date: "Pre-2021", title: "Ballroom Origins", body: "In drag ballroom culture, 'giving' described what a look or performance was projecting. 'She's giving face', 'giving runway' — it meant embodying an aesthetic with conviction." },
      { date: "2021", title: "TikTok Explosion", body: "'It's giving' went viral on TikTok as creators used it to describe aesthetics, moods, and vibes in a specific, playful way. The phrase's flexibility made it endlessly reusable." },
      { date: "2022 Onward", title: "Universal Descriptor", body: "'It's giving' became one of the most versatile phrases in Gen Z vocabulary — usable for fashion, art, food, situations, people, and any feeling that has a distinct energy." }
    ],
    whyViral: [
      { title: "Drag culture precision", desc: "Drag vocabulary is specificity elevated to art form. 'It's giving X' names a vibe with precision that standard English lacks." },
      { title: "The incomplete sentence trick", desc: "Leaving 'It's giving...' open-ended is a comedic and stylistic move that invites the listener to complete it." },
      { title: "Aesthetic era culture", desc: "A generation obsessed with aesthetics and vibes needed vocabulary to name them. 'It's giving' is perfect for that." },
      { title: "Infinite completion", desc: "It's giving royalty. It's giving chaos. It's giving nothing. It works with any noun or concept." }
    ],
    relatedSlangs: ["vibecheck", "slay", "ate"],
    seoKeywords: ["it's giving meaning slang", "what does it's giving mean", "its giving slang", "it's giving definition"]
  },

  {
    id: "based", word: "Based", slug: "based",
    devanagari: null, pronunciation: "/beɪst/",
    shortMeaning: "Confidently yourself, unapologetic, and not caring about others' opinions.",
    fullMeaning: "'Based' means being confidently yourself, holding your own opinions firmly, and not changing yourself to fit social expectations. Calling someone or something 'based' is high praise — it means they're authentic, self-assured, and unapologetically genuine. Originally popularized by rapper Lil B, it evolved from meaning 'self-accepting' to a broader internet compliment for any confidently held opinion or action.",
    tag: "classic", year: 2010, language: "English", coinedBy: "Lil B 'The BasedGod'", origin: "Hip-hop / Lil B / 4chan / internet",
    culturalContext: "Lil B The BasedGod coined 'based' as his personal philosophy: do what you want, be yourself, love yourself regardless of what others say. Internet culture absorbed it and 'based' became the compliment for any opinion or action taken with total authenticity and self-confidence.",
    examples: [
      { label: "💬 Strong opinion", them: "I don't care if people think my music taste is weird.", me: "That's incredibly based of you honestly." },
      { label: "📱 Complimenting conviction", them: "She wore exactly what she wanted and didn't ask for approval.", me: "Based behavior. She doesn't owe anyone an explanation." },
      { label: "🎯 Response to honesty", them: "I said what I said and I stand by it.", me: "Based. Absolutely based." }
    ],
    originStory: [
      { date: "2009–2010", title: "Lil B Coins It", body: "Rapper Lil B The BasedGod developed 'based' as his personal philosophy — being yourself, not caring about judgment, living authentically. His 'Based movement' built a devoted following around this ideology." },
      { date: "2012–2018", title: "Internet Spread", body: "Various internet communities adopted 'based' as shorthand for opinions or actions held with total confidence, regardless of social pressure. It became a compliment for authenticity." },
      { date: "2020 Onward", title: "Mainstream Compliment", body: "'Based' became one of Gen Z's standard compliments for anyone who acts with genuine conviction. Being called based means you're respected for your authenticity." }
    ],
    whyViral: [
      { title: "Lil B's philosophical foundation", desc: "A coherent, positive philosophy ('be yourself') gives a word staying power. Based has meaning beyond slang." },
      { title: "Counterculture appeal", desc: "Based rewards non-conformity. In an era of social media performance, authenticity is precious." },
      { title: "One-word verdict", desc: "One word that says 'you are confidently yourself and I respect it.' Unmatched efficiency." },
      { title: "Cross-community adoption", desc: "Based escaped its original community and traveled across different internet cultures while keeping its core meaning." }
    ],
    relatedSlangs: ["nocap", "savage", "valid"],
    seoKeywords: ["based meaning slang", "what does based mean", "based slang definition", "based gen z meaning"]
  },

  {
    id: "ratio", word: "Ratio", slug: "ratio",
    devanagari: null, pronunciation: "/ˈreɪ.ʃi.oʊ/",
    shortMeaning: "When a reply gets more likes than the original post. A public defeat.",
    fullMeaning: "On Twitter/X, being 'ratioed' means a reply to your tweet got significantly more likes than your original tweet — signaling widespread disagreement or mockery from the audience. To 'ratio' someone means to post a reply that outperforms the original. A ratio is a form of public humiliation: the internet has voted and your post lost. 'L + ratio' is the complete defeat combo.",
    tag: "trending", year: 2017, language: "English", coinedBy: "Twitter culture", origin: "Twitter / social media discourse",
    culturalContext: "Born entirely from Twitter's public metrics system where anyone can see exactly how many likes a post vs a reply has received. When a reply 'outperforms' an original, it signals broad public rejection of the original post's content.",
    examples: [
      { label: "📱 Post getting destroyed", them: "His hot take got 200 likes and the top reply has 50k.", me: "He got ratioed into the shadow realm. Devastating." },
      { label: "💬 Calling it out", them: "Should I ratio this?", me: "The ratio is already happening naturally. It's over for him." },
      { label: "🎭 Complete defeat", them: "L + ratio + you fell off", me: "The holy trinity of being finished on this app." }
    ],
    originStory: [
      { date: "2017", title: "Twitter Mechanics", body: "Someone noticed that replies can outperform original posts in likes when the original tweet is widely disagreed with. The numeric 'ratio' of likes to replies became a metric of public disapproval." },
      { date: "2018–2020", title: "Weapon Format", body: "Twitter users began intentionally trying to ratio posts they disagreed with. 'Ratio' became both a noun (that tweet got a ratio) and a verb (I'm going to ratio this)." },
      { date: "2021 Onward", title: "L + Ratio Combo", body: "'L + ratio' became the ultimate Twitter defeat combo — calling someone's post a loss AND noting that the reply section agreed. Politicians, celebrities, and brands have all been famously ratioed." }
    ],
    whyViral: [
      { title: "Platform-native", desc: "Ratio was born from Twitter's own metrics. It could only exist on a platform with public engagement counts." },
      { title: "Public accountability", desc: "A ratio is evidence. You can't deny it — the numbers are visible to everyone." },
      { title: "The L + ratio combo", desc: "Adding 'L + ratio' created a complete rhetorical combo. It's internet debate shorthand for total defeat." },
      { title: "Celebrity ratioing", desc: "When famous people get ratioed, it becomes news. High-profile ratios kept the word in the cultural conversation." }
    ],
    relatedSlangs: ["wl", "nocap", "tea"],
    seoKeywords: ["ratio meaning slang", "what does ratio mean", "getting ratioed meaning", "ratio twitter slang"]
  },

  {
    id: "clout", word: "Clout", slug: "clout",
    devanagari: null, pronunciation: "/klaʊt/",
    shortMeaning: "Social media influence, fame, or the power that comes from a large following.",
    fullMeaning: "Clout means influence, fame, or social power — specifically in the context of social media. Having clout means having a large following, being well-known, and having your opinions and actions carry weight. 'Clout chasing' means doing things purely to gain attention and followers, without genuine substance. Clout is the social media economy's currency.",
    tag: "classic", year: 2017, language: "English / AAVE", coinedBy: "Hip-hop / social media culture", origin: "AAVE / Instagram / hip-hop",
    culturalContext: "While 'clout' as a word for influence or a hit has existed for centuries, its modern usage as social media currency was amplified by hip-hop culture and the influencer economy. ASAP Mob's track 'Clout Cobain' and countless references in rap normalized clout as the metric of digital success.",
    examples: [
      { label: "💬 Influencer talk", them: "Why does he get invited everywhere?", me: "The clout. 2 million followers opens every door." },
      { label: "📱 Calling out behavior", them: "She only dates athletes and posts about it immediately.", me: "Full clout chaser. Everything is content." },
      { label: "🎭 Self-aware", them: "Are you only doing this for attention?", me: "Partially the clout, partially I genuinely care. Both can be true." }
    ],
    originStory: [
      { date: "Pre-social media", title: "Old Meaning", body: "'Clout' in old English meant a blow or hit, and in American slang it meant political power or influence. Both meanings fed into its social media evolution." },
      { date: "2016–2018", title: "Hip-hop and Instagram Era", body: "As Instagram's influencer economy matured, 'clout' became the word for the social currency that followers represented. Hip-hop tracks about 'clout' and 'clout chasers' normalized the term." },
      { date: "2019 Onward", title: "Economy of Attention", body: "Clout became the standard word for social media influence and the sometimes desperate pursuit of it. 'Clout chasing' named a specific behavior pattern that social media had created." }
    ],
    whyViral: [
      { title: "Names a real economy", desc: "Social media created a real influence economy. Clout named it precisely when people needed the word." },
      { title: "Hip-hop amplification", desc: "Rap's constant engagement with status and influence made clout a natural vocabulary word for the genre." },
      { title: "Clout chaser archetype", desc: "'Clout chaser' as a character type gave the word a narrative role — everyone could identify examples in their own life." },
      { title: "Business language crossover", desc: "Clout crossed from slang into business — 'influencer clout' is now used in marketing briefs. That legitimization keeps words alive." }
    ],
    relatedSlangs: ["flex", "stan", "ratio"],
    seoKeywords: ["clout meaning slang", "what does clout mean", "clout chaser meaning", "clout slang definition"]
  },

  {
    id: "builtdifferent", word: "Built Different", slug: "builtdifferent",
    devanagari: null, pronunciation: "/bɪlt ˈdɪf.ər.ənt/",
    shortMeaning: "Someone who is exceptionally unique, strong, or operates on a different level.",
    fullMeaning: "'Built different' means someone is constructed from a different blueprint — their resilience, talent, mindset, or physical attributes are so exceptional that they seem to operate by different rules than everyone else. It's the highest form of 'you're not like the rest.' Can be earnest praise or ironic humor ('he stayed on his phone the whole meeting, built different').",
    tag: "trending", year: 2020, language: "English / AAVE", coinedBy: "Sports and fitness culture / Black American vernacular", origin: "Sports Twitter / fitness culture",
    culturalContext: "Emerged from sports culture where exceptional athletes' performances seemed physically impossible for normal humans. Extended into mindset culture, meme culture, and everyday life. The ironic use — applying it to mundane or absurd behavior — added comedic depth.",
    examples: [
      { label: "⚽ Sports", them: "He played 90 minutes at that intensity without substitution.", me: "That man is just built different. Not human." },
      { label: "💬 Ironic use", them: "He's been awake for 40 hours studying.", me: "Built different. Or just unwell. Hard to tell." },
      { label: "📱 Admiration", them: "She forgave them AND still showed up for them.", me: "Built different. I could never. The strength required." }
    ],
    originStory: [
      { date: "Pre-2020", title: "Sports Origins", body: "Sports commentary and training culture used 'built different' to describe athletes whose physical and mental attributes set them apart. Michael Jordan, Kobe Bryant, Serena Williams — players who seemed to have different internal architecture." },
      { date: "2020", title: "Pandemic Meme", body: "During the pandemic, 'built different' became a meme format — applied to people who handled lockdown unusually well (or unusually badly). The ironic application expanded the phrase's range." },
      { date: "2021 Onward", title: "Universal Exceptionalism", body: "Built different became the phrase for anyone operating at an unusual level — positive or negative. It's both the highest compliment and a versatile observation tool." }
    ],
    whyViral: [
      { title: "Sports culture reach", desc: "Sports commentary reaches billions. When athletes and commentators adopted it, built different went global." },
      { title: "Earnest and ironic simultaneously", desc: "Works as genuine admiration and as comedic observation of unusual behavior. Dual function." },
      { title: "Human exceptionalism fascination", desc: "People are drawn to stories of exceptional capacity. Built different names that fascination in two words." },
      { title: "Meme format versatility", desc: "Any unusual behavior can be 'built different.' The format has essentially infinite applications." }
    ],
    relatedSlangs: ["goat", "savage", "based"],
    seoKeywords: ["built different meaning", "what does built different mean", "built different slang", "built different definition"]
  },

  {
    id: "cap", word: "Cap", slug: "cap",
    devanagari: null, pronunciation: "/kæp/",
    shortMeaning: "A lie. Someone is capping if they are not telling the truth.",
    fullMeaning: "'Cap' means a lie or exaggeration. If someone is 'capping,' they are lying. 'That's cap' means that statement is false. It is the direct counterpart to 'no cap' (no lie). The 🧢 (cap/baseball cap) emoji is the visual shorthand. Calling out someone's cap is calling out their dishonesty in the most efficient way possible.",
    tag: "trending", year: 2017, language: "English / AAVE", coinedBy: "Young Thug / Black American slang", origin: "AAVE / Atlanta hip-hop",
    culturalContext: "Rooted in African American Vernacular English where 'capping' meant lying or exaggerating. Paired with 'no cap' to create a complete truth/lie vocabulary system. Young Thug and Atlanta hip-hop culture cemented both terms into mainstream Gen Z vocabulary.",
    examples: [
      { label: "💬 Calling someone out", them: "I was first in the whole school on that test.", me: "Cap. You told me yesterday you hadn't even studied." },
      { label: "📱 Emoji accusation", them: "Trust me, I'm never late.", me: "🧢" },
      { label: "🎭 Strong denial", them: "She said she doesn't care what people think.", me: "Big cap. She refreshed the comments 40 times." }
    ],
    originStory: [
      { date: "Pre-2017", title: "AAVE Foundation", body: "'Capping' — lying, exaggerating, or fronting — existed in African American vernacular for decades. The cap as metaphor for a lid on the truth: something covering up what's real." },
      { date: "2017", title: "Young Thug and Quavo", body: "The track 'No Cap' by Young Thug and Quavo formally introduced 'cap' (lie) and 'no cap' (truth) as a binary system to mainstream hip-hop audiences." },
      { date: "2018–2020", title: "The 🧢 Emoji", body: "The baseball cap emoji 🧢 became the perfect visual shorthand for 'that's a lie.' A single emoji that delivers an accusation — efficient and satisfying." }
    ],
    whyViral: [
      { title: "Binary system with no cap", desc: "Cap and no cap work as a complete truth/lie vocabulary pair. Complete systems spread together." },
      { title: "🧢 emoji shorthand", desc: "One emoji delivers a full accusation. Visual language is always faster than text." },
      { title: "Universal human behavior", desc: "People lie constantly. Having a clean, cool word to call it out will always be useful." },
      { title: "Hip-hop credibility", desc: "Atlanta trap gave cap its authenticity foundation. Words from credible cultural sources stick." }
    ],
    relatedSlangs: ["nocap", "fr", "based"],
    seoKeywords: ["cap meaning slang", "what does cap mean", "capping meaning slang", "cap lie slang"]
  },

  {
    id: "pressed", word: "Pressed", slug: "pressed",
    devanagari: null, pronunciation: "/prɛst/",
    shortMeaning: "Being worked up, upset, or overly bothered about something.",
    fullMeaning: "To be 'pressed' means to be noticeably upset, stressed, or bothered — often about something that others think you should let go of. 'Why are you so pressed?' asks why you're so worked up. Being called pressed implies you're overreacting, dwelling on something, or visibly disturbed by a situation that doesn't warrant that level of concern.",
    tag: "classic", year: 2016, language: "English / AAVE", coinedBy: "Black American culture", origin: "AAVE / social media",
    culturalContext: "Pressed as in pressure — someone is under internal pressure and it's showing. In AAVE and Black internet culture, 'pressed' became the specific word for visibly, unnecessarily bothered. Being called pressed also implies others can see your distress, adding a social dimension.",
    examples: [
      { label: "💬 Calling someone out", them: "He's been talking about this for three days.", me: "Why is he so pressed about something that has nothing to do with him?" },
      { label: "📱 Defending yourself", them: "Stop acting so pressed.", me: "I'm not pressed, I'm making a valid point. Different things." },
      { label: "🎭 Unbothered response", them: "Don't you care what they said?", me: "Not even slightly. I refuse to be pressed over people who don't matter." }
    ],
    originStory: [
      { date: "Pre-internet", title: "Pressure Metaphor", body: "The physical sensation of being pressed — squeezed, under pressure — translates directly to emotional distress. AAVE used 'pressed' to describe someone visibly under emotional pressure." },
      { date: "2016–2018", title: "Twitter and Instagram", body: "Black Twitter and Instagram comment sections made 'pressed' a standard observation phrase. Calling someone pressed was both a roast and an invitation to calm down." },
      { date: "2018 Onward", title: "Universal Emotion Label", body: "Pressed traveled from AAVE into general Gen Z vocabulary as the specific word for unnecessary, visible upset. It fills a gap between 'bothered' (neutral) and 'angry' (intense)." }
    ],
    whyViral: [
      { title: "Fills a vocabulary gap", desc: "'Pressed' describes a specific emotional state that 'upset' or 'bothered' doesn't fully capture — visible, unnecessary worry." },
      { title: "Social mirror function", desc: "Calling someone pressed names their emotional state from the outside, which is both clarifying and slightly humiliating." },
      { title: "Unbothered culture", desc: "Gen Z values appearing unbothered. Having a word for the opposite (pressed) reinforces the cultural value of not being pressed." },
      { title: "Concise observation", desc: "'Why are you so pressed?' delivers a full assessment in five words." }
    ],
    relatedSlangs: ["salty", "based", "vibecheck"],
    seoKeywords: ["pressed meaning slang", "what does pressed mean", "pressed slang definition", "why are you so pressed meaning"]
  },

  {
    id: "understood", word: "Understood the Assignment", slug: "understood",
    devanagari: null, pronunciation: "/ˌʌn.də.ˈstʊd ðə əˈsaɪn.mənt/",
    shortMeaning: "Did exactly what was needed, perfectly. Delivered completely.",
    fullMeaning: "'Understood the assignment' means someone completely grasped what was expected and delivered it flawlessly. When someone understands the assignment, they read the room perfectly, met the brief, and executed. It's one of the highest compliments for effort, style, performance, or presence. The flip side: 'did NOT understand the assignment' means someone missed the mark entirely.",
    tag: "trending", year: 2021, language: "English", coinedBy: "TikTok / Tay Money rap lyric", origin: "TikTok / Tay Money 'The Assignment'",
    culturalContext: "The phrase exploded after rapper Tay Money's song 'The Assignment' in 2021. TikTok then turned 'understood the assignment' into a format — videos where people transformed an outfit, look, or moment to perfectly fit a brief. It became the phrase for any flawless execution.",
    examples: [
      { label: "📸 Outfit moment", them: "The theme was 'old Hollywood glamour.'", me: "She came in a full Audrey Hepburn moment. Understood the assignment completely." },
      { label: "💬 Performance", them: "The speech at the gala was incredible.", me: "He understood the assignment. Room was silent by the end." },
      { label: "🎭 Missed mark", them: "The theme was 'formal' and he wore jeans.", me: "Did NOT understand the assignment. At all." }
    ],
    originStory: [
      { date: "2021 · Tay Money", title: "The Song That Launched It", body: "Rapper Tay Money released 'The Assignment' in 2021. TikTokers used the audio for transformation videos — before/after clips where someone perfectly executed a look or a brief. The phrase was born." },
      { date: "2021", title: "TikTok Format", body: "The format spread rapidly: clip of a challenge or brief, cut to perfect execution, caption 'understood the assignment.' The phrase became the caption for any flawless delivery." },
      { date: "2022 Onward", title: "Universal Excellence Marker", body: "Beyond TikTok, 'understood the assignment' became the phrase for any moment where someone perfectly met expectations — performances, speeches, outfits, business decisions." }
    ],
    whyViral: [
      { title: "TikTok transformation format", desc: "Before/after transformation videos are TikTok's most reliable format. This phrase gave those videos their perfect caption." },
      { title: "Academic metaphor clarity", desc: "Everyone understands the concept of an assignment and the satisfaction of doing it well. The metaphor is immediately clear." },
      { title: "Negative version equally powerful", desc: "'Did NOT understand the assignment' is as useful as the positive. Both versions drive engagement." },
      { title: "Versatility across contexts", desc: "Fashion, performance, cooking, speeches, relationship moves — every context has 'assignments' that can be understood or missed." }
    ],
    relatedSlangs: ["slay", "ate", "fire"],
    seoKeywords: ["understood the assignment meaning", "what does understood the assignment mean", "understood assignment slang", "slayed the assignment meaning"]
  },

  {
    id: "vibe", word: "Vibe", slug: "vibe",
    devanagari: null, pronunciation: "/vaɪb/",
    shortMeaning: "The feeling or energy something gives off. Also: to enjoy and feel in sync.",
    fullMeaning: "'Vibe' as a noun describes the feeling, energy, or atmosphere of a place, person, or moment. 'The vibe here is off' means something feels wrong. 'This place has a vibe' means it has a distinct, good energy. As a verb, 'vibing' means relaxing, enjoying yourself, or being in pleasant sync with someone or something. It's both a feeling and an activity.",
    tag: "classic", year: 2016, language: "English", coinedBy: "Music and youth culture", origin: "Music culture / slang evolution",
    culturalContext: "Evolved from 'vibration' — the idea that places and people emit frequencies you can feel. Music culture has always talked about vibes. Social media amplified it into the universal word for atmosphere and energy, spawning 'good vibes only,' 'vibe check,' and 'vibing.'",
    examples: [
      { label: "💬 Place energy", them: "What's that coffee shop like?", me: "The vibe is incredible. Warm lights, good music, no rush." },
      { label: "📱 Just existing peacefully", them: "What are you doing?", me: "Just vibing honestly. No plans, good music, window open." },
      { label: "🎵 With someone", them: "How was the drive with them?", me: "We just vibed the whole way. No awkward silence, perfect playlist." }
    ],
    originStory: [
      { date: "1970s–80s", title: "Musical Roots", body: "The concept of 'vibrations' — invisible energy frequencies you can feel from people and places — was central to soul, jazz, and later hip-hop. 'Good vibes' was already in use." },
      { date: "2015–2017", title: "Social Media Standardization", body: "'Vibe' became the universal word for atmosphere and energy on social media. 'Good vibes only' became a caption philosophy. 'The vibe' became standard shorthand for any evaluative question about a place or person." },
      { date: "2018 Onward", title: "Verb Adoption", body: "'Vibing' as a verb — hanging out peacefully, being in pleasant sync — became standard. 'We're vibing' means things are flowing naturally without tension or effort." }
    ],
    whyViral: [
      { title: "Names the intangible", desc: "Atmosphere and energy are real experiences with no good English words. 'Vibe' filled that gap perfectly." },
      { title: "Both noun and verb", desc: "'The vibe is good' and 'we're vibing' — the same word covers both the state and the activity." },
      { title: "Universal human sensitivity", desc: "Everyone has felt a room or a person's energy. Vibe validated that sensitivity with language." },
      { title: "Spawned a family", desc: "Vibe check, vibing, good vibes, bad vibes — one word became an entire vocabulary family." }
    ],
    relatedSlangs: ["vibecheck", "lowkey", "fire"],
    seoKeywords: ["vibe meaning slang", "what does vibe mean", "vibing meaning", "vibe slang definition"]
  }

];

/* ════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
   ════════════════════════════════════════════════════════════ */

function getAllSlangs() { return SLANGIST_DATA; }

function getSlangBySlug(slug) {
  return SLANGIST_DATA.find(s => s.slug === slug) || null;
}

function getSlangsByTag(tag) {
  if (!tag || tag === 'all') return SLANGIST_DATA;
  return SLANGIST_DATA.filter(s => s.tag === tag);
}

function searchSlangs(query) {
  if (!query || query.trim() === '') return SLANGIST_DATA;
  const q = query.toLowerCase().trim();
  return SLANGIST_DATA.filter(s =>
    s.word.toLowerCase().includes(q) ||
    s.shortMeaning.toLowerCase().includes(q) ||
    s.tag.toLowerCase().includes(q) ||
    (s.origin && s.origin.toLowerCase().includes(q)) ||
    (s.fullMeaning && s.fullMeaning.toLowerCase().includes(q)) ||
    (s.id && s.id.toLowerCase().includes(q))
  );
}

function getRelatedSlangs(slang) {
  return (slang.relatedSlangs || [])
    .map(slug => SLANGIST_DATA.find(s => s.slug === slug))
    .filter(Boolean);
}

function getFeaturedSlangs(count = 6) {
  const sorted = [...SLANGIST_DATA].sort((a, b) => {
    const order = { trending: 0, new: 1, classic: 2 };
    return (order[a.tag] ?? 3) - (order[b.tag] ?? 3);
  });
  return sorted.slice(0, count);
}

function getWordOfTheDay() {
  const today = new Date();
  const dayIndex = today.getDate() % SLANGIST_DATA.length;
  return SLANGIST_DATA[dayIndex];
}

const TAG_LABELS = {
  trending: '🔥 Trending',
  classic: '⭐ Classic',
  new: '✨ New',
  viral: '🚀 Viral'
};

function getSlangURL(slug, fromRoot = true) {
  return fromRoot ? `slang/${slug}.html` : `${slug}.html`;
}
