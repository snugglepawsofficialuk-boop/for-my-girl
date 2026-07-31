/* ══════════════════════════════════════════════════════════════════════
   ❤  EVERYTHING PERSONAL LIVES IN THIS BLOCK  ❤
   Change the words, save, push to GitHub. Nothing below the line
   needs editing.
   ══════════════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ─── the basics ─────────────────────────────────────────────── */
  herName:   "Shazra",
  heroNameText: "Girl",                // the big name once the curtains open (curtains, letter + footer still use herName)
  nickname:  "",                       // optional — used in the letter greeting instead of her name
  yourName:  "Hasan",
  tabTitle:  "Happy Girlfriend's Day, Shazra",
  dateLine:  "August 1 \u00b7 National Girlfriend's Day",

  /* ─── the curtains ───────────────────────────────────────────── */
  gateEyebrow: "i made you something",
  gateWord:    "for",
  beginLabel:  "open it",
  gateNote:    "sound on \u2014 there's a song waiting",

  /* ─── hero ───────────────────────────────────────────────────── */
  heroScript:   "my dearest",
  heroSubtitle: "For the girl I fell for on a Tuesday in October \u2014 eighty-eight days before you caught up to me.",

  /* ─── the counter (the day it became us) ─────────────────────── */
  anniversary:    "2025-10-28",
  counterEyebrow: "Since 28 October 2025 \u2014 the day I fell",
  counterNote:    "\u2026and you caught up 88 days later, on the 24th of January. I fell first. I'd fall first again.",

  /* ─── our story ──────────────────────────────────────────────── */
  timeline: [
    { date: "28 October 2025",  title: "The day I fell",
      text: "You didn't know yet. I did. A Tuesday like any other \u2014 except nothing after it was ordinary again." },
    { date: "24 January 2026",  title: "The day you fell \u2014 and the day we met",
      text: "Eighty-eight days after me. And the same day I finally saw you. Every one of those days made sense at once." },
    { date: "7 June 2026",      title: "The second time",
      text: "Proof the first wasn't luck. Saying goodbye was harder the second time \u2014 that's how I knew." },
    { date: "1 August 2026",    title: "Today",
      text: "Your day. This page. Every word on it is true." }
  ],

  /* ─── why I love you — the deck she keeps drawing from ───────── */
  reasonsEyebrow:  "From a list of one hundred \u2014 yes, there's a real list",
  reasonsLoopLine: "\u2026and again from the top. I could do this all day.",
  reasons: [
    "The way you look at me feels like home.",
    "Your voice calms me in a way nothing else can.",
    "Your laughter pulls happiness out of me even on my worst days.",
    "You make even the simplest moments feel meaningful.",
    "You choose me, every day, even when I'm not easy to love.",
    "You listen with your heart, not just your ears.",
    "You make me feel safe in a world that's often overwhelming.",
    "You bring peace where there used to be chaos.",
    "Your hugs feel like a reset button for my soul.",
    "You make me feel chosen, never just wanted.",
    "You make routine days feel extraordinary.",
    "Your love is steady \u2014 never loud, never uncertain.",
    "You know how to comfort me without saying a word.",
    "You're thoughtful about things most people never notice.",
    "You're my calm in storms I don't tell anyone else about.",
    "You're the person I want to tell my day to \u2014 every day.",
    "You see beauty in places I never noticed until you showed me.",
    "You make silence feel full, not empty.",
    "You're the safest place I've ever known.",
    "You turn ordinary days into memories.",
    "You're the person I feel safest falling asleep next to.",
    "You're my peace when my mind is loud.",
    "You make my heart feel steady.",
    "You're everything I prayed for before I even met you."
  ],

  /* ─── my promises ────────────────────────────────────────────── */
  promisesEyebrow: "Not feelings \u2014 commitments. There's a difference.",
  promises: [
    "I promise to protect your heart like it's my own.",
    "I promise to choose you every day \u2014 not just the easy days.",
    "I promise to keep your secrets safe.",
    "I promise to make time for you, no matter how busy life gets.",
    "I promise to notice the things you don't say out loud.",
    "I promise to bring you peace, not chaos.",
    "I promise to stay when things get difficult, not walk away.",
    "I promise to make you feel safe \u2014 emotionally, mentally, and physically.",
    "I promise to make your happiness part of my purpose.",
    "I promise that loving you will never be something I do halfway."
  ],

  /* ─── the letter (each string is a paragraph) ────────────────── */
  letter: [
    "I fell first. October 28th \u2014 and I've never once wanted to take it back. You took eighty-eight more days, and then the day you finally fell was the same day I finally got to see you. Still the best day I've ever had.",
    "You're my peace when my mind is loud. You make silence feel full instead of empty. You're the safest place I've ever known \u2014 and somehow you make loving you feel like the most natural thing I've ever done.",
    "I didn't need a date on a calendar to celebrate you. But since today is officially yours: thank you for choosing me, for your patience with me, and for making ordinary days worth writing down. Everything I promised on this page \u2014 I meant."
  ],
  signoff: "Always yours,",

  /* ─── the surprise inside the gift box ───────────────────────── */
  giftMessage: "I love you, Shazra \u2014 and loving you is the most natural thing I've ever done. Never halfway. Never quietly. Never stopping.",

  /* ─── the sky finale ─────────────────────────────────────────── */
  skyEyebrow:  "Look up",
  skyTitle:    "I mapped us",
  skyCaption:  "every day since the 28th of October \u2014 connected.",
  skyHint:     "tap the sky \u2014 send a wish up",

  /* ─── the song ───────────────────────────────────────────────── */
  // "Arz Kiya Hai" — plays through a hidden YouTube player and starts
  // the moment she presses "open it" on the curtains.
  // Bulletproof alternative: put an mp3 at music/song.mp3, set
  // youtubeId to "" and musicFile to "music/song.mp3".
  youtubeId: "Kg8_ADYhYWE",
  songTitle: "arz kiya hai",
  musicFile: ""
};

/* ══════════════════════════════════════════════════════════════════════
   Machinery. You shouldn't need to edit anything below this line.
   ══════════════════════════════════════════════════════════════════════ */

const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = window.matchMedia("(pointer: fine)").matches;
const clamp01 = (n) => Math.max(0, Math.min(1, n));

function esc(str){
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}
function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function tilt(el, max){
  if (!(FINE && !REDUCED)) return;
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--tx", (x * max).toFixed(2) + "deg");
    el.style.setProperty("--ty", (-y * max).toFixed(2) + "deg");
  });
  el.addEventListener("pointerleave", () => {
    el.style.setProperty("--tx", "0deg");
    el.style.setProperty("--ty", "0deg");
  });
}

const HERO_NAME = CONFIG.heroNameText || CONFIG.herName;

/* ─── static text ───────────────────────────────────────────────── */
document.title = CONFIG.tabTitle;
$("#gateEyebrow").textContent     = CONFIG.gateEyebrow;
$("#gateWord").textContent        = CONFIG.gateWord;
$("#gateName").textContent        = CONFIG.herName;
$("#gateBtnLabel").textContent    = CONFIG.beginLabel;
$("#gateNote").textContent        = CONFIG.gateNote;
$("#dateLineText").textContent    = CONFIG.dateLine;
$("#heroScript").textContent      = CONFIG.heroScript;
$("#heroSub").textContent         = CONFIG.heroSubtitle;
$("#counterEyebrow").textContent  = CONFIG.counterEyebrow;
$("#odoNote").textContent         = CONFIG.counterNote;
$("#reasonsEyebrow").textContent  = CONFIG.reasonsEyebrow;
$("#promisesEyebrow").textContent = CONFIG.promisesEyebrow;
$("#skyEyebrow").textContent      = CONFIG.skyEyebrow;
$("#skyTitle").textContent        = CONFIG.skyTitle;
$("#constCap").textContent        = CONFIG.skyCaption;
$("#skyHint").textContent         = CONFIG.skyHint;
$("#footerBig").textContent       = CONFIG.tabTitle;
$("#footerSmall").textContent     = `made for ${CONFIG.herName} \u00b7 with love, ${CONFIG.yourName}`;
$("#sealInitial").textContent     = (CONFIG.herName || "?").trim().charAt(0).toUpperCase();

/* ─── the song ──────────────────────────────────────────────────── */
let musicPlay = () => {};
let musicPause = () => {};
function setMusicUI(playing){
  const btn = $("#musicToggle");
  if (!btn) return;
  btn.classList.toggle("is-playing", playing);
  btn.setAttribute("aria-pressed", String(playing));
  btn.setAttribute("aria-label", playing ? "Pause music" : "Play music");
  $("#musicLabel").textContent = playing ? (CONFIG.songTitle || "pause") : "play song";
}
(function music(){
  const btn = $("#musicToggle");
  const audio = $("#song");
  const hasYT = !!CONFIG.youtubeId;
  const hasMp3 = !!CONFIG.musicFile;
  if (!hasYT && !hasMp3){ btn.remove(); return; }

  /* if a play attempt is blocked, quietly retry on her very next tap/keypress */
  const armGestureRetry = () => {
    if (armGestureRetry.armed) return;
    armGestureRetry.armed = true;
    const retry = () => { armGestureRetry.armed = false; musicPlay(); };
    document.addEventListener("pointerdown", retry, { once: true, capture: true });
    document.addEventListener("keydown", retry, { once: true, capture: true });
  };

  const useMp3 = () => {
    audio.src = CONFIG.musicFile;
    audio.volume = 0.55;
    audio.addEventListener("play",  () => setMusicUI(true));
    audio.addEventListener("pause", () => setMusicUI(false));
    musicPlay  = () => audio.play().catch(() => armGestureRetry());
    musicPause = () => audio.pause();
  };

  if (hasYT){
    let ytPlayer = null, ytReady = false, wantPlay = false, audible = false;

    window.onYouTubeIframeAPIReady = () => {
      ytPlayer = new YT.Player("ytHolder", {
        videoId: CONFIG.youtubeId,
        playerVars: {
          autoplay: 0, controls: 0, disablekb: 1, fs: 0,
          loop: 1, playlist: CONFIG.youtubeId,
          playsinline: 1, rel: 0, iv_load_policy: 3
        },
        events: {
          onReady: () => {
            ytReady = true;
            if (wantPlay){ wantPlay = false; musicPlay(); }
            else {
              // buffer silently behind the curtains so her tap gets instant sound
              try { ytPlayer.mute(); ytPlayer.playVideo(); } catch (e) {}
            }
          },
          onStateChange: (e) => {
            const S = YT.PlayerState;
            if (e.data === S.PLAYING) setMusicUI(audible);
            else if ((e.data === S.PAUSED || e.data === S.ENDED) && audible) setMusicUI(false);
          },
          onError: () => { if (hasMp3){ useMp3(); armGestureRetry(); } }
        }
      });
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    musicPlay = () => {
      if (!ytReady){ wantPlay = true; armGestureRetry(); return; }
      try {
        if (!audible) ytPlayer.seekTo(0, true);            // start the song from the top
        ytPlayer.unMute();
        ytPlayer.setVolume(65);
        ytPlayer.playVideo();
        setMusicUI(true);
        setTimeout(() => {                                  // did the browser actually allow it?
          try {
            if (ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING || ytPlayer.isMuted()){
              setMusicUI(false);
              armGestureRetry();
            } else {
              audible = true;
            }
          } catch (e) {}
        }, 900);
      } catch (e) { armGestureRetry(); }
    };
    musicPause = () => { if (ytReady){ try { ytPlayer.pauseVideo(); } catch (e) {} } };
  } else {
    useMp3();
  }

  btn.addEventListener("click", () => {
    if (btn.classList.contains("is-playing")) musicPause();
    else musicPlay();
  });
})();

/* ─── hero name, split into letters ─────────────────────────────── */
(function heroName(){
  const el = $("#heroName");
  el.setAttribute("aria-label", HERO_NAME);
  let d = 0;
  el.innerHTML = HERO_NAME.split(" ").map((word) => {
    const letters = word.split("").map((ch) => {
      const s = `<span class="l" style="--d:${(0.55 + d * 0.07).toFixed(2)}s" aria-hidden="true">${esc(ch)}</span>`;
      d += 1;
      return s;
    }).join("");
    return `<span class="w">${letters}</span>`;
  }).join(" ");
})();

/* ─── the curtains ──────────────────────────────────────────────── */
(function gate(){
  const gate = $("#gate");
  const hero = $(".hero");

  $("#gateOpen").addEventListener("click", () => {
    gate.classList.add("is-open");
    document.body.classList.remove("locked");
    hero.classList.add("is-live");

    musicPlay();                                            // her tap is the audio unlock

    setTimeout(() => burst(innerWidth / 2, innerHeight / 2, "gate"), 300);

    const goldName = () => {
      const el = $("#heroName");
      el.textContent = HERO_NAME;      // plain text — background-clip:text breaks on animated child spans
      el.classList.add("shimmer");
    };
    const total = 550 + HERO_NAME.length * 70 + 1000;
    setTimeout(goldName, REDUCED ? 0 : total);

    setTimeout(() => gate.remove(), 1600);
  }, { once: true });
})();

/* ─── odometer ──────────────────────────────────────────────────── */
(function odometer(){
  const start = new Date(CONFIG.anniversary + "T00:00:00");
  if (isNaN(start)) return;

  const units = {};
  $$(".odo__digits").forEach((el) => units[el.dataset.unit] = { el, reels: [], vals: [] });

  const buildReels = (unit, count) => {
    unit.el.innerHTML = "";
    unit.reels = []; unit.vals = [];
    for (let i = 0; i < count; i++){
      const digit = document.createElement("span");
      digit.className = "odo__digit";
      const strip = document.createElement("span");
      strip.className = "odo__strip no-t";
      strip.innerHTML = "<span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>0</span>";
      digit.appendChild(strip);
      unit.el.appendChild(digit);
      unit.reels.push(strip);
      unit.vals.push(0);
    }
    requestAnimationFrame(() => requestAnimationFrame(() =>
      unit.reels.forEach((r) => r.classList.remove("no-t"))
    ));
  };

  const setUnit = (unit, str) => {
    if (unit.reels.length !== str.length) buildReels(unit, str.length);
    for (let i = 0; i < str.length; i++){
      const nv = +str[i], ov = unit.vals[i];
      if (nv === ov) continue;
      const reel = unit.reels[i];
      if (nv < ov){
        reel.style.transform = "translateY(-10em)";        // roll onto the spare 0…
        const snap = () => {
          reel.classList.add("no-t");
          reel.style.transform = "translateY(0em)";        // …snap back silently
          requestAnimationFrame(() => requestAnimationFrame(() => {
            reel.classList.remove("no-t");
            if (nv !== 0) reel.style.transform = `translateY(-${nv}em)`;
          }));
          reel.removeEventListener("transitionend", snap);
        };
        reel.addEventListener("transitionend", snap);
      } else {
        reel.style.transform = `translateY(-${nv}em)`;
      }
      unit.vals[i] = nv;
    }
  };

  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    let ms = Date.now() - start.getTime();
    if (ms < 0) ms = 0;
    const sec = Math.floor(ms / 1000);
    setUnit(units.d, String(Math.floor(sec / 86400)));
    setUnit(units.h, pad(Math.floor(sec / 3600) % 24));
    setUnit(units.m, pad(Math.floor(sec / 60) % 60));
    setUnit(units.s, pad(sec % 60));
  };
  tick();
  setInterval(tick, 1000);
})();

/* ─── the golden thread ─────────────────────────────────────────── */
(function thread(){
  const list = $("#threadList");
  list.innerHTML = CONFIG.timeline.map((e) => `
    <li class="thread__item">
      <span class="thread__date">${esc(e.date)}</span>
      <h3 class="thread__title">${esc(e.title)}</h3>
      <p class="thread__text">${esc(e.text)}</p>
    </li>`).join("");

  if (REDUCED){
    $$(".thread__item").forEach((li) => li.classList.add("lit"));
    return;
  }

  const wrap = $("#thread");
  const fill = $("#threadFill");
  const items = $$(".thread__item");
  let ticking = false;

  const update = () => {
    ticking = false;
    const r = wrap.getBoundingClientRect();
    const anchor = innerHeight * 0.72;
    const p = clamp01((anchor - r.top) / r.height);
    fill.style.height = (p * 100).toFixed(2) + "%";
    const reach = p * wrap.offsetHeight;
    items.forEach((li) => li.classList.toggle("lit", li.offsetTop + 12 <= reach));
  };
  const onScroll = () => {
    if (!ticking){ ticking = true; requestAnimationFrame(update); }
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  update();
})();

/* ─── the deck of reasons ───────────────────────────────────────── */
(function deck(){
  let pool = shuffle([...CONFIG.reasons]);
  const card = $("#deckCard");
  const text = $("#deckText");
  const count = $("#deckCount");
  let i = 0, busy = false, wrapped = false;

  const rot = () => ((Math.random() * 5) - 2.5).toFixed(2) + "deg";
  const render = () => {
    text.textContent = pool[i];
    card.style.setProperty("--rot", rot());
    count.textContent = wrapped ? CONFIG.reasonsLoopLine : `${i + 1} of ${pool.length}`;
    wrapped = false;
  };
  render();

  const advance = () => {
    i = (i + 1) % pool.length;
    if (i === 0){ wrapped = true; pool = shuffle(pool); }
    render();
  };

  card.addEventListener("click", () => {
    if (busy) return;
    if (REDUCED){ advance(); return; }
    busy = true;
    card.classList.add("out");
    setTimeout(() => {
      advance();
      card.classList.add("no-t", "in-start");
      card.classList.remove("out");
      void card.offsetWidth;
      card.classList.remove("no-t");
      requestAnimationFrame(() => card.classList.remove("in-start"));
      setTimeout(() => busy = false, 470);
    }, 430);
  });

  tilt(card, 5);
})();

/* ─── the vows ──────────────────────────────────────────────────── */
(function vows(){
  const wrap = $("#vow");
  const card = $("#vowCard");
  const text = $("#vowText");
  const count = $("#vowCount");
  const dots = $("#vowDots");
  const list = CONFIG.promises;
  let i = 0, busy = false;

  dots.innerHTML = list.map(() => "<i></i>").join("");
  const ds = Array.from(dots.children);

  const render = () => {
    text.textContent = list[i];
    count.textContent = `${i + 1} / ${list.length}`;
    ds.forEach((d, j) => {
      d.classList.toggle("seen", j < i);
      d.classList.toggle("now", j === i);
    });
    wrap.classList.toggle("final", i === list.length - 1);
  };
  render();

  card.addEventListener("click", () => {
    if (busy) return;
    if (REDUCED){ i = (i + 1) % list.length; render(); return; }
    busy = true;
    wrap.classList.add("switching");
    setTimeout(() => {
      i = (i + 1) % list.length;
      render();
      wrap.classList.remove("switching");
      setTimeout(() => busy = false, 420);
    }, 400);
  });
})();

/* ─── the sealed letter, in three acts ──────────────────────────── */
(function letter(){
  const lettr = $("#lettr");
  const seal  = $("#seal");
  const paper = $("#paper");
  const who   = CONFIG.nickname || CONFIG.herName;

  $("#greeting").textContent = `Dear ${who},`;
  $("#signoff").textContent  = `${CONFIG.signoff} ${CONFIG.yourName}`;

  $("#letterBody").innerHTML = CONFIG.letter
    .map((p, i) => `<p class="paper__line" style="animation-delay:${(0.55 + i * 0.5).toFixed(2)}s">${esc(p)}</p>`)
    .join("");
  const endDelay = 0.55 + CONFIG.letter.length * 0.5;
  $(".paper__sign").style.animationDelay = endDelay + "s";
  $("#signHeart").style.animationDelay = (endDelay + 0.7) + "s";

  seal.addEventListener("click", () => {
    if (lettr.classList.contains("s1")) return;
    seal.setAttribute("aria-expanded", "true");
    $("#sealHint").classList.add("is-done");

    if (REDUCED){
      lettr.classList.add("s1", "s2", "s3");
      paper.hidden = false;
      return;
    }
    lettr.classList.add("s1");                               // crack + flap
    setTimeout(() => lettr.classList.add("s2"), 1050);       // letter climbs out
    setTimeout(() => {                                       // takes the stage
      paper.hidden = false;
      lettr.classList.add("s3");
    }, 2150);
  });
})();

/* ─── gift box ──────────────────────────────────────────────────── */
(function gift(){
  const box = $("#giftbox");
  const msg = $("#giftMsg");
  msg.textContent = CONFIG.giftMessage;

  box.addEventListener("click", () => {
    if (box.classList.contains("is-open")) return;
    box.classList.add("is-open");
    box.setAttribute("aria-expanded", "true");
    $("#giftHint").classList.add("is-done");
    msg.hidden = false;

    const r = box.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height * 0.3, "gift");
    heartRain(3400);
  });
})();

/* ─── scroll reveals + progress bar ─────────────────────────────── */
(function reveals(){
  const items = $$(".reveal");
  if (REDUCED || !("IntersectionObserver" in window)){
    items.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add("is-in"), i * 110);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    items.forEach((el) => io.observe(el));
  }

  const bar = $("#pbar");
  let ticking = false;
  const paint = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0).toFixed(2) + "%";
  };
  addEventListener("scroll", () => {
    if (!ticking){ ticking = true; requestAnimationFrame(paint); }
  }, { passive: true });
  paint();
})();

/* ─── ambient canvas: falling petals + rising gold dust ─────────── */
(function ambient(){
  const cv = $("#petals");
  if (REDUCED){ cv.remove(); return; }
  const ctx = cv.getContext("2d");
  const tints = ["rgba(232,121,142,", "rgba(200,40,70,", "rgba(217,164,65,"];
  let w, h, dpr, petals = [], dust = [], raf = null;

  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width = innerWidth * dpr;
    h = cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
    build();
  };

  const makePetal = (seeded) => {
    const depth = 0.35 + Math.random() * 0.65;
    return {
      x: Math.random() * w,
      y: seeded ? Math.random() * h : -60 * dpr,
      r: (9 + Math.random() * 15) * depth * dpr,
      vy: (0.16 + Math.random() * 0.34) * depth * dpr,
      sway: 14 + Math.random() * 30,
      phase: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.011,
      rot: Math.random() * Math.PI * 2,
      alpha: 0.14 + depth * 0.4,
      tint: tints[(Math.random() * tints.length) | 0]
    };
  };
  const makeDust = (seeded) => ({
    x: Math.random() * w,
    y: seeded ? Math.random() * h : h + 10 * dpr,
    r: (0.7 + Math.random() * 1.5) * dpr,
    vy: (0.08 + Math.random() * 0.22) * dpr,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.12 + Math.random() * 0.3
  });

  const build = () => {
    petals = Array.from({ length: Math.min(28, Math.round(innerWidth / 46)) }, () => makePetal(true));
    dust   = Array.from({ length: Math.min(50, Math.round(innerWidth / 26)) }, () => makeDust(true));
  };

  const petalShape = (p) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo( p.r * 0.95, -p.r * 0.55,  p.r * 1.15, p.r * 0.75, 0, p.r * 1.5);
    ctx.bezierCurveTo(-p.r * 1.15,  p.r * 0.75, -p.r * 0.95, -p.r * 0.55, 0, 0);
    ctx.fillStyle = p.tint + p.alpha + ")";
    ctx.fill();
    ctx.restore();
  };

  const frame = (t) => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < dust.length; i++){
      const d = dust[i];
      d.y -= d.vy;
      d.x += Math.sin(t / 1900 + d.phase) * 0.18 * dpr;
      if (d.y + d.r < -10 * dpr) dust[i] = makeDust(false);
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244,227,176,${(d.alpha * (0.7 + 0.3 * Math.sin(t / 700 + d.phase))).toFixed(3)})`;
      ctx.fill();
    }
    for (let i = 0; i < petals.length; i++){
      const p = petals[i];
      p.y += p.vy;
      p.rot += p.spin;
      p.x += Math.sin(t / 1400 + p.phase) * (p.sway / 260) * dpr;
      if (p.y - p.r > h + 40 * dpr) petals[i] = makePetal(false);
      petalShape(p);
    }
    raf = requestAnimationFrame(frame);
  };

  const start = () => { if (raf === null) raf = requestAnimationFrame(frame); };
  const stop  = () => { cancelAnimationFrame(raf); raf = null; };

  size(); start();
  addEventListener("resize", size, { passive: true });
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
})();

/* ─── overlay particles: bursts, heart-rain, trail, tap hearts ──── */
let burst = () => {};
let heartRain = () => {};
(function overlay(){
  const cv = $("#burst");
  const ctx = cv.getContext("2d");
  let dpr = 1, bits = [], raf = null;

  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
  };
  size();
  addEventListener("resize", size, { passive: true });

  const heartPath = (s) => {
    ctx.beginPath();
    ctx.moveTo(0, s * 0.3);
    ctx.bezierCurveTo(-s * 0.55, -s * 0.35, -s * 1.05, s * 0.28, 0, s);
    ctx.bezierCurveTo( s * 1.05,  s * 0.28,  s * 0.55, -s * 0.35, 0, s * 0.3);
    ctx.closePath();
  };
  const colors = ["#C82846", "#E8798E", "#D9A441", "#F4E3B0", "#FBF4E6"];
  const pick = () => colors[(Math.random() * colors.length) | 0];
  const wake = () => { if (raf === null) raf = requestAnimationFrame(loop); };

  const loop = (t) => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    bits = bits.filter((b) => b.life > 0 && b.y < cv.height + 60 * dpr);
    for (const b of bits){
      b.life -= 1;
      switch (b.kind){
        case "heart":
        case "spark":
          b.vy += 0.16 * dpr; b.vx *= 0.992;
          b.x += b.vx; b.y += b.vy; b.rot += b.spin;
          break;
        case "dot":
          b.y -= 0.25 * dpr;
          break;
        case "floatH":
          b.y += b.vy;
          b.x += Math.sin(t / 300 + b.phase) * 0.7 * dpr;
          break;
        case "rain":
          b.y += b.vy;
          b.x += Math.sin(t / 800 + b.phase) * 0.5 * dpr;
          b.rot = Math.sin(t / 600 + b.phase) * 0.35;
          break;
      }
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rot || 0);
      ctx.globalAlpha = Math.max(0, Math.min(1, b.life / b.fade));
      ctx.fillStyle = b.color;
      if (b.kind === "spark"){
        ctx.fillRect(-b.size * 0.22, -b.size * 0.5, b.size * 0.44, b.size);
      } else if (b.kind === "dot"){
        ctx.beginPath(); ctx.arc(0, 0, b.size, 0, Math.PI * 2); ctx.fill();
      } else {
        heartPath(b.size); ctx.fill();
      }
      ctx.restore();
    }
    if (bits.length) raf = requestAnimationFrame(loop);
    else { raf = null; ctx.clearRect(0, 0, cv.width, cv.height); }
  };

  burst = (cx, cy, kind) => {
    if (REDUCED) return;
    const n = kind === "gate" ? 46 : 92;
    for (let i = 0; i < n; i++){
      const a = kind === "gate"
        ? Math.random() * Math.PI * 2
        : (-Math.PI / 2) + (Math.random() - 0.5) * 1.9;
      const sp = (kind === "gate" ? 2.5 + Math.random() * 6 : 5 + Math.random() * 13) * dpr;
      bits.push({
        kind: Math.random() < 0.6 ? "heart" : "spark",
        x: cx * dpr, y: cy * dpr,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        size: (kind === "gate" ? 4 + Math.random() * 7 : 7 + Math.random() * 11) * dpr,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.24,
        life: 85 + Math.random() * 70, fade: 55,
        color: pick()
      });
    }
    wake();
  };

  heartRain = (duration) => {
    if (REDUCED) return;
    const t0 = performance.now();
    const drip = () => {
      if (performance.now() - t0 > duration) return;
      bits.push({
        kind: "rain",
        x: Math.random() * cv.width, y: -20 * dpr,
        vy: (0.9 + Math.random() * 1.1) * dpr,
        size: (6 + Math.random() * 9) * dpr,
        phase: Math.random() * Math.PI * 2,
        life: 900, fade: 60,
        color: Math.random() < 0.75 ? "#C82846" : "#D9A441"
      });
      wake();
      setTimeout(drip, 90);
    };
    drip();
  };

  if (FINE && !REDUCED){
    let last = 0;
    addEventListener("pointermove", (e) => {
      const now = performance.now();
      if (now - last < 26) return;
      last = now;
      bits.push({
        kind: "dot",
        x: e.clientX * dpr, y: e.clientY * dpr,
        size: (1 + Math.random() * 1.8) * dpr,
        life: 26, fade: 26,
        color: Math.random() < 0.5 ? "rgba(244,227,176,.9)" : "rgba(217,164,65,.9)"
      });
      wake();
    }, { passive: true });
  }

  if (!REDUCED){
    addEventListener("click", (e) => {
      if (e.target.closest("a,button,#sky,.gate")) return;
      for (let i = 0; i < 2; i++){
        bits.push({
          kind: "floatH",
          x: (e.clientX + (Math.random() - 0.5) * 20) * dpr,
          y: e.clientY * dpr,
          vy: -(0.9 + Math.random() * 0.9) * dpr,
          size: (6 + Math.random() * 6) * dpr,
          phase: Math.random() * Math.PI * 2,
          life: 110, fade: 70,
          color: Math.random() < 0.7 ? "#E8798E" : "#F4E3B0"
        });
      }
      wake();
    });
  }
})();

/* ─── the sky: stars, a heart constellation, wishes ─────────────── */
(function sky(){
  const section = $("#sky");
  const cv = $("#skyCv");
  const cap = $("#constCap");
  const ctx = cv.getContext("2d");
  let dpr = 1, w = 0, h = 0;
  let stars = [], constPts = [], shooters = [], sparks = [];
  let visible = false, raf = null, lineStart = 0, capLit = false;

  const heartPoints = (n) => {
    const pts = [];
    for (let i = 0; i < n; i++){
      const t = (i / n) * Math.PI * 2;
      pts.push({
        hx: 16 * Math.pow(Math.sin(t), 3),
        hy: 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
      });
    }
    return pts;
  };
  const HEART = heartPoints(26);

  const size = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = section.getBoundingClientRect();
    w = cv.width = r.width * dpr;
    h = cv.height = r.height * dpr;
    cv.style.width = r.width + "px";
    cv.style.height = r.height + "px";

    stars = Array.from({ length: Math.round((r.width * r.height) / 8500) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: (0.4 + Math.random() * 1.1) * dpr,
      ph: Math.random() * Math.PI * 2,
      sp: 0.6 + Math.random() * 1.4
    }));

    const scale = Math.min(w, h) * 0.021;
    const cx = w / 2, cy = h * 0.42;
    constPts = HEART.map((p) => ({
      x: cx + p.hx * scale,
      y: cy - p.hy * scale,
      ph: Math.random() * Math.PI * 2
    }));
  };

  const drawStatic = () => {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars){
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(246,214,220,.55)"; ctx.fill();
    }
    ctx.beginPath();
    constPts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
    ctx.closePath();
    ctx.strokeStyle = "rgba(217,164,65,.8)";
    ctx.lineWidth = 1 * dpr;
    ctx.stroke();
    for (const p of constPts){
      ctx.beginPath(); ctx.arc(p.x, p.y, 2 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "#F4E3B0"; ctx.fill();
    }
  };

  const frame = (t) => {
    ctx.clearRect(0, 0, w, h);

    for (const s of stars){
      const a = 0.22 + 0.4 * (0.5 + 0.5 * Math.sin(t / 900 * s.sp + s.ph));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246,214,220,${a.toFixed(3)})`;
      ctx.fill();
    }

    const lp = clamp01((t - lineStart) / 3800);
    const seg = lp * constPts.length;
    if (seg > 0){
      ctx.save();
      ctx.strokeStyle = "rgba(217,164,65,.85)";
      ctx.lineWidth = 1 * dpr;
      ctx.shadowColor = "rgba(217,164,65,.9)";
      ctx.shadowBlur = 7 * dpr;
      ctx.beginPath();
      ctx.moveTo(constPts[0].x, constPts[0].y);
      const full = Math.floor(seg);
      for (let i = 1; i <= Math.min(full, constPts.length - 1); i++) ctx.lineTo(constPts[i].x, constPts[i].y);
      if (full < constPts.length){
        const a = constPts[Math.min(full, constPts.length - 1)];
        const b = constPts[(full + 1) % constPts.length];
        const f = seg - full;
        ctx.lineTo(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f);
      } else {
        ctx.closePath();
      }
      ctx.stroke();
      ctx.restore();
    }
    if (lp >= 1 && !capLit){ capLit = true; cap.classList.add("lit"); }

    for (const p of constPts){
      const a = 0.65 + 0.35 * Math.sin(t / 600 + p.ph);
      ctx.beginPath(); ctx.arc(p.x, p.y, 2 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244,227,176,${a.toFixed(3)})`;
      ctx.shadowColor = "rgba(244,227,176,.9)";
      ctx.shadowBlur = 6 * dpr;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    shooters = shooters.filter((s) => s.life > 0);
    for (const s of shooters){
      s.life -= 1; s.x += s.vx; s.y += s.vy;
      const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 7, s.y - s.vy * 7);
      g.addColorStop(0, "rgba(251,244,230,.95)");
      g.addColorStop(1, "rgba(251,244,230,0)");
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.6 * dpr;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 7, s.y - s.vy * 7);
      ctx.stroke();
    }

    sparks = sparks.filter((s) => s.life > 0);
    for (const s of sparks){
      s.life -= 1; s.x += s.vx; s.y += s.vy;
      ctx.globalAlpha = s.life / 30;
      ctx.beginPath(); ctx.arc(s.x, s.y, 1.3 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "#F4E3B0"; ctx.fill();
      ctx.globalAlpha = 1;
    }

    if (visible) raf = requestAnimationFrame(frame);
    else raf = null;
  };

  section.addEventListener("pointerdown", (e) => {
    if (REDUCED) return;
    const r = section.getBoundingClientRect();
    const x = (e.clientX - r.left) * dpr;
    const y = (e.clientY - r.top) * dpr;
    const dir = Math.random() < 0.5 ? 1 : -1;
    shooters.push({
      x, y,
      vx: dir * (5 + Math.random() * 4) * dpr,
      vy: (2 + Math.random() * 2.4) * dpr,
      life: 46
    });
    for (let i = 0; i < 6; i++){
      const a = Math.random() * Math.PI * 2;
      sparks.push({ x, y, vx: Math.cos(a) * 1.4 * dpr, vy: Math.sin(a) * 1.4 * dpr, life: 30 });
    }
    if (raf === null && visible) raf = requestAnimationFrame(frame);
  });

  size();
  addEventListener("resize", () => { size(); if (REDUCED) drawStatic(); }, { passive: true });

  if (REDUCED){
    drawStatic();
    cap.classList.add("lit");
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const en of entries){
      visible = en.isIntersecting;
      if (visible){
        if (!lineStart) lineStart = performance.now() + 500;
        if (raf === null) raf = requestAnimationFrame(frame);
      }
    }
  }, { threshold: 0.25 });
  io.observe(section);
})();
