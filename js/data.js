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
