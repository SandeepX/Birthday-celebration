// ── Disable right-click context menu ──
document.addEventListener('contextmenu', (e) => e.preventDefault());

// ── Disable common DevTools / view-source keyboard shortcuts ──
document.addEventListener('keydown', (e) => {
    const key = e.key;
    const k = key ? key.toUpperCase() : '';
    // F12
    if (key === 'F12') { e.preventDefault(); return; }
    // Ctrl+Shift+I / J / C (DevTools panels)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === 'I' || k === 'J' || k === 'C')) {
        e.preventDefault(); return;
    }
    // Ctrl+U (view source)
    if ((e.ctrlKey || e.metaKey) && k === 'U') { e.preventDefault(); return; }
    // Ctrl+S (save page)
    if ((e.ctrlKey || e.metaKey) && k === 'S') { e.preventDefault(); return; }
});

// ── Stars Background ──
(function initStars() {
    const starsEl = document.getElementById('stars');
    for (let i = 0; i < 120; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.animationDelay = Math.random() * 3 + 's';
        s.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        starsEl.appendChild(s);
    }
})();

// ── Confetti Generator ──
function spawnConfetti(count = 60) {
    const colors = ['#f472b6', '#c084fc', '#818cf8', '#38bdf8', '#facc15', '#34d399', '#fb923c'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.className = 'confetti-piece';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.background = colors[Math.floor(Math.random() * colors.length)];
            c.style.animationDuration = (2 + Math.random() * 3) + 's';
            c.style.width = (6 + Math.random() * 8) + 'px';
            c.style.height = (10 + Math.random() * 14) + 'px';
            c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
            document.body.appendChild(c);
            setTimeout(() => c.remove(), 5000);
        }, i * 40);
    }
}

// ── Balloon Generator ──
function spawnBalloons(count = 12) {
    const emojis = [' ', ' ', ' ', ' ', ' ', ' ', ' '];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const b = document.createElement('div');
            b.className = 'balloon';
            b.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            b.style.left = Math.random() * 100 + 'vw';
            b.style.animationDuration = (4 + Math.random() * 4) + 's';
            b.style.fontSize = (50 + Math.random() * 40) + 'px';
            document.body.appendChild(b);
            setTimeout(() => b.remove(), 9000);
        }, i * 300);
    }
}

// ── Fireworks Generator ──
function spawnFireworks(bursts = 4) {
    const colors = ['#f472b6', '#c084fc', '#818cf8', '#38bdf8', '#facc15', '#34d399', '#fb923c', '#f87171'];
    for (let b = 0; b < bursts; b++) {
        setTimeout(() => {
            const cx = 15 + Math.random() * 70; // vw
            const cy = 10 + Math.random() * 50; // vh
            const particleCount = 22;
            for (let i = 0; i < particleCount; i++) {
                const angle = (Math.PI * 2 * i) / particleCount;
                const distance = 60 + Math.random() * 60;
                const p = document.createElement('div');
                p.className = 'firework-particle';
                p.style.left = cx + 'vw';
                p.style.top = cy + 'vh';
                p.style.background = colors[Math.floor(Math.random() * colors.length)];
                p.style.setProperty('--fx', Math.cos(angle) * distance + 'px');
                p.style.setProperty('--fy', Math.sin(angle) * distance + 'px');
                document.body.appendChild(p);
                setTimeout(() => p.remove(), 1200);
            }
        }, b * 500);
    }
}

// ── Shooting Star Generator ──
function spawnShootingStar() {
    const s = document.createElement('div');
    s.className = 'shooting-star';
    s.style.top = Math.random() * 30 + 'vh';
    s.style.left = Math.random() * 40 + 'vw';
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1700);
}
setInterval(spawnShootingStar, 4000);

// ── Floating Hearts Generator ──
function spawnHearts(count = 6) {
    const emojis = ['❤️', '💖', '💕', '💗'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const h = document.createElement('div');
            h.className = 'floating-heart';
            h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            h.style.left = Math.random() * 100 + 'vw';
            h.style.fontSize = (20 + Math.random() * 24) + 'px';
            h.style.animationDuration = (6 + Math.random() * 4) + 's';
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 11000);
        }, i * 400);
    }
}
setInterval(() => spawnHearts(3), 6000);

// ── Cake Wiggle on Interval ──
setInterval(() => {
    const cake = document.getElementById('cakeEmoji');
    if (cake) {
        cake.classList.add('cake-wiggle');
        setTimeout(() => cake.classList.remove('cake-wiggle'), 600);
    }
}, 3500);

// ── Sparkle on Click ──
document.addEventListener('click', (e) => {
    const emojis = ['✨', ' ', ' ', ' ', ' ', ' '];
    for (let i = 0; i < 6; i++) {
        const sp = document.createElement('div');
        sp.className = 'sparkle';
        sp.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        sp.style.left = (e.clientX + (Math.random() - 0.5) * 60) + 'px';
        sp.style.top = (e.clientY + (Math.random() - 0.5) * 60) + 'px';
        sp.style.fontSize = (16 + Math.random() * 16) + 'px';
        document.body.appendChild(sp);
        setTimeout(() => sp.remove(), 900);
    }
});

// ── Particle Canvas ──
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.3 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 280; // purple-pink range
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.001;
        if (this.opacity <= 0 || this.y < -10) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.fill();
    }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
reveals.forEach(r => revealObserver.observe(r));

(function countdown() {
    function getBirthday() {
        const now = new Date();
        let year = now.getFullYear();
        let bday = new Date(year, 8, 15);
        if (now > bday) bday = new Date(year + 1, 8, 15);
        return bday;
    }
    let nextBday = getBirthday();

    function tick() {
        const now = new Date();
        let diff = nextBday - now;
        if (diff < 0) { nextBday = getBirthday(); diff = nextBday - now; }

        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        document.getElementById('cDays').textContent = String(d).padStart(2, '0');
        document.getElementById('cHours').textContent = String(h).padStart(2, '0');
        document.getElementById('cMins').textContent = String(m).padStart(2, '0');
        document.getElementById('cSecs').textContent = String(s).padStart(2, '0');
    }
    tick();
    setInterval(tick, 1000);
})();

(function typewriter() {

    const messages = [
        "यो वर्ष जिन्दगीमा रमाइला adventure हरू आइरहून् 🥳✈️ अचानक आउने surprise ले मुटु होइन, हाँसो फुटाओस् 😂🎁",
        "घुम्न जाँदा बाटो हराए पनि मज्जा नहराओस् 🗺️🤣 खाँदा पेट भरियोस् तर मिठो खाने इच्छा कहिल्यै नभरियोस् 🍕🍰😂!",
        "सधैं यसरी नै हाँस्दै 😄, जिस्किँदै 🤪एक-अर्कालाई सताउँदै 😂 र रमाउँदै ❤️",
        "धेरैभन्दा धेरै सुन्दर memories बनाउँदै जानुहोस्! 📸✨",
        "जीवन छोटो छ, त्यसैले धेरै हाँस्नुहोस् 😄 धेरै घुम्नुहोस् ✈️🌍, धेरै खानुहोस् 🍕🍔",
        "अनि बिल तिर्ने बेला चाहिँ एक-अर्कालाई हेर्नुहोस्! 😂😂❤️"
    ];
    const el = document.getElementById('typewriterText');
    let msgIdx = 0, charIdx = 0, deleting = false;

    function type() {
        const current = messages[msgIdx];
        if (!deleting) {
            el.textContent = current.substring(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                setTimeout(() => { deleting = true; type(); }, 3000);
                return;
            }
        } else {
            el.textContent = current.substring(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                msgIdx = (msgIdx + 1) % messages.length;
            }
        }
        setTimeout(type, deleting ? 30 : 60);
    }
    type();
})();

window.addEventListener('load', () => {
    setTimeout(() => spawnConfetti(80), 500);
    setTimeout(() => spawnBalloons(15), 1200);
    setTimeout(() => spawnFireworks(5), 800);
    setTimeout(() => spawnHearts(8), 1500);
});

const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', () => {
    if (!tunePlaying) {
        playHappyBirthdayTune();
        spawnConfetti(40);
        spawnBalloons(8);
        spawnFireworks(3);
    }
});

// ── Synthesized "Happy Birthday" tune (~20s), plays on entry ──
let audioCtx = null;
let tunePlaying = false;

const NOTE_FREQ = {
    C4:261.63, D4:293.66, E4:329.63, F4:349.23, G4:392.00, A4:440.00, B4:493.88,
    C5:523.25, D5:587.33, E5:659.25, F5:698.46, G5:783.99
};

// Classic "Happy Birthday to You" melody, [note, beats]
const HB_MELODY = [
    ['G4',0.3],['G4',0.15],['A4',0.45],['G4',0.45],['C5',0.45],['B4',0.9],
    ['G4',0.3],['G4',0.15],['A4',0.45],['G4',0.45],['D5',0.45],['C5',0.9],
    ['G4',0.3],['G4',0.15],['G5',0.45],['E5',0.45],['C5',0.45],['B4',0.45],['A4',0.9],
    ['F5',0.3],['F5',0.15],['E5',0.45],['C5',0.45],['D5',0.45],['C5',0.9]
];
const TEMPO_SCALE = 1.8; // stretches ~11s melody to ~20s

function playHappyBirthdayTune() {
    if (tunePlaying) return;
    try {
        audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        tunePlaying = true;
        const btn = document.getElementById('musicBtn');
        if (btn) btn.textContent = '🎶 Playing...';

        let t = audioCtx.currentTime + 0.05;
        HB_MELODY.forEach(([note, beats]) => {
            const freq = NOTE_FREQ[note];
            const dur = beats * TEMPO_SCALE;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.value = freq;

            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(0.25, t + 0.03);
            gain.gain.setValueAtTime(0.25, t + dur * 0.7);
            gain.gain.linearRampToValueAtTime(0, t + dur * 0.95);

            osc.connect(gain).connect(audioCtx.destination);
            osc.start(t);
            osc.stop(t + dur);

            t += dur;
        });

        const totalMs = (t - audioCtx.currentTime) * 1000;
        setTimeout(() => {
            tunePlaying = false;
            if (btn) btn.textContent = '🎵 Play Song';
        }, totalMs + 200);
    } catch (err) {
        console.error('Audio playback error:', err);
        tunePlaying = false;
    }
}

// Try to autoplay right away; if the browser blocks it, play on first interaction instead.
let autoplayAttempted = false;
function attemptAutoplay() {
    if (autoplayAttempted) return;
    autoplayAttempted = true;
    playHappyBirthdayTune();
}
window.addEventListener('load', () => {
    attemptAutoplay();
});
['click', 'keydown', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, function firstInteraction() {
        if (!tunePlaying && audioCtx === null) attemptAutoplay();
    }, { once: true });
});

function handlePhotoUpload(event) {
    const files = event.target.files;
    const container = document.getElementById('uploadedPhotos');
    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const div = document.createElement('div');
            div.className = 'reveal group relative rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer';
            div.innerHTML = `
            <img src="${e.target.result}" alt="Uploaded Photo" class="w-full h-48 object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-sm text-gray-200">Your Memory </span>
            </div>
            <button onclick="this.parentElement.remove()" class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-lg">×</button>
          `;
            container.appendChild(div);
            // Observe new element
            revealObserver.observe(div);
        };
        reader.readAsDataURL(file);
    }
}

const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(s => {
        if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    navLinks.forEach(l => {
        l.classList.remove('text-pink-400', 'text-purple-400');
        if (l.getAttribute('href') === '#' + current) {
            l.classList.add('text-pink-400');
        }
    });
});

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});