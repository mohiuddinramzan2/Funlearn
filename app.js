// ============================================
//  ABC শিখি - Kids Alphabet Learning App
//  Full App Logic
// ============================================

// ---- Data ----
const ALPHABET = [
  { letter: 'A', word: 'Apple',      emoji: '🍎', sound: 'ay',    color: '#FF6B9D' },
  { letter: 'B', word: 'Ball',       emoji: '⚽', sound: 'bee',   color: '#FF9A3C' },
  { letter: 'C', word: 'Cat',        emoji: '🐱', sound: 'see',   color: '#FFD93D' },
  { letter: 'D', word: 'Dog',        emoji: '🐶', sound: 'dee',   color: '#6BCB77' },
  { letter: 'E', word: 'Elephant',   emoji: '🐘', sound: 'ee',    color: '#4ECDC4' },
  { letter: 'F', word: 'Fish',       emoji: '🐟', sound: 'ef',    color: '#4D96FF' },
  { letter: 'G', word: 'Grapes',     emoji: '🍇', sound: 'jee',   color: '#C77DFF' },
  { letter: 'H', word: 'Hat',        emoji: '🎩', sound: 'aych',  color: '#FF6B9D' },
  { letter: 'I', word: 'Ice cream',  emoji: '🍦', sound: 'eye',   color: '#FF9A3C' },
  { letter: 'J', word: 'Jellyfish',  emoji: '🪼', sound: 'jay',   color: '#FFD93D' },
  { letter: 'K', word: 'Kite',       emoji: '🪁', sound: 'kay',   color: '#6BCB77' },
  { letter: 'L', word: 'Lion',       emoji: '🦁', sound: 'el',    color: '#4ECDC4' },
  { letter: 'M', word: 'Moon',       emoji: '🌙', sound: 'em',    color: '#4D96FF' },
  { letter: 'N', word: 'Nest',       emoji: '🪺', sound: 'en',    color: '#C77DFF' },
  { letter: 'O', word: 'Orange',     emoji: '🍊', sound: 'oh',    color: '#FF9A3C' },
  { letter: 'P', word: 'Penguin',    emoji: '🐧', sound: 'pee',   color: '#4D96FF' },
  { letter: 'Q', word: 'Queen',      emoji: '👑', sound: 'queue', color: '#FFD93D' },
  { letter: 'R', word: 'Rainbow',    emoji: '🌈', sound: 'ar',    color: '#FF6B9D' },
  { letter: 'S', word: 'Star',       emoji: '⭐', sound: 'es',    color: '#FFD93D' },
  { letter: 'T', word: 'Tiger',      emoji: '🐯', sound: 'tee',   color: '#FF9A3C' },
  { letter: 'U', word: 'Umbrella',   emoji: '☂️', sound: 'you',   color: '#4ECDC4' },
  { letter: 'V', word: 'Violin',     emoji: '🎻', sound: 'vee',   color: '#C77DFF' },
  { letter: 'W', word: 'Watermelon', emoji: '🍉', sound: 'double-u', color: '#6BCB77' },
  { letter: 'X', word: 'Xylophone',  emoji: '🎶', sound: 'ex',    color: '#FF6B9D' },
  { letter: 'Y', word: 'Yo-yo',      emoji: '🪀', sound: 'why',   color: '#FFD93D' },
  { letter: 'Z', word: 'Zebra',      emoji: '🦓', sound: 'zee',   color: '#6BCB77' },
];

let score = 0;
let currentModalIndex = 0;
let quizIndex = -1;
let songInterval = null;
let songPlaying = false;
let songStep = 0;

// ---- Stars ----
function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 3 + 1;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --dur:${(Math.random()*4+2).toFixed(1)}s;
      animation-delay:${(Math.random()*5).toFixed(1)}s;
    `;
    container.appendChild(s);
  }
}

// ---- Tab Navigation ----
function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
  if (name === 'quiz') loadQuiz();
  if (name === 'song') buildSongDisplay();
  if (name !== 'song') stopSong();
}

// ---- Build Alphabet Grid ----
function buildGrid() {
  const grid = document.getElementById('alphabetGrid');
  ALPHABET.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.setProperty('--glow', item.color);
    card.style.setProperty('--glow-shadow', hexToRgba(item.color, 0.45));
    card.innerHTML = `
      <div class="big-letter" style="color:${item.color}">${item.letter}</div>
      <div class="small-letter" style="color:${item.color}">${item.letter.toLowerCase()}</div>
      <span class="card-emoji">${item.emoji}</span>
      <div class="card-word">${item.word}</div>
    `;
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);
  });
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ---- Modal ----
function openModal(index) {
  currentModalIndex = index;
  renderModal();
  document.getElementById('modalOverlay').classList.add('open');
  speakLetter(index);
}

function renderModal() {
  const item = ALPHABET[currentModalIndex];
  document.getElementById('modalLetter').textContent = item.letter;
  document.getElementById('modalLetter').style.color = item.color;
  document.getElementById('modalLetterLower').textContent = item.letter.toLowerCase();
  document.getElementById('modalLetterLower').style.color = item.color;
  document.getElementById('modalEmoji').textContent = item.emoji;
  document.getElementById('modalWord').textContent = item.word;
  document.getElementById('modalPronunciation').textContent = `উচ্চারণ: "${item.sound}"`;
  document.getElementById('modalCard').style.borderColor = item.color + '55';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function navigateLetter(dir) {
  currentModalIndex = (currentModalIndex + dir + ALPHABET.length) % ALPHABET.length;
  renderModal();
  speakLetter(currentModalIndex);
}

document.getElementById('modalSpeakBtn').addEventListener('click', () => {
  speakLetter(currentModalIndex);
});

// ---- Speech Synthesis ----
function speakLetter(index) {
  if (!window.speechSynthesis) return;
  const item = ALPHABET[index];
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(`${item.letter}. ${item.letter} for ${item.word}`);
  utt.lang = 'en-US';
  utt.rate = 0.85;
  utt.pitch = 1.2;
  window.speechSynthesis.speak(utt);
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.85;
  utt.pitch = 1.2;
  window.speechSynthesis.speak(utt);
}

// ---- Quiz ----
let quizAnswered = false;

function loadQuiz() {
  quizAnswered = false;
  const idx = Math.floor(Math.random() * ALPHABET.length);
  quizIndex = idx;
  const item = ALPHABET[idx];

  document.getElementById('quizQuestion').textContent = 'কোন অক্ষর দিয়ে শুরু?';
  document.getElementById('quizEmoji').textContent = item.emoji;
  document.getElementById('quizResult').textContent = '';

  // Get 4 unique options
  const options = [item.letter];
  while (options.length < 4) {
    const rand = ALPHABET[Math.floor(Math.random() * ALPHABET.length)].letter;
    if (!options.includes(rand)) options.push(rand);
  }
  options.sort(() => Math.random() - 0.5);

  const container = document.getElementById('quizOptions');
  container.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkAnswer(opt, item.letter, btn));
    container.appendChild(btn);
  });

  // Speak the word
  setTimeout(() => speakText(`What letter does ${item.word} start with?`), 400);
}

function checkAnswer(chosen, correct, btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  const resultEl = document.getElementById('quizResult');

  if (chosen === correct) {
    btn.classList.add('correct');
    resultEl.textContent = '🎉 সঠিক! দারুণ!';
    resultEl.style.color = '#6BCB77';
    score += 10;
    document.getElementById('score').textContent = score;
    launchConfetti();
    speakText('Correct! Great job!');
  } else {
    btn.classList.add('wrong');
    resultEl.textContent = `❌ আবার চেষ্টা করো! উত্তর ছিল: ${correct}`;
    resultEl.style.color = '#FF6B9D';
    // Highlight correct
    document.querySelectorAll('.quiz-opt-btn').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    speakText(`The correct answer is ${correct}.`);
  }

  setTimeout(loadQuiz, 2500);
}

// ---- Song Tab ----
function buildSongDisplay() {
  const display = document.getElementById('songDisplay');
  display.innerHTML = '';
  ALPHABET.forEach((item, i) => {
    const chip = document.createElement('div');
    chip.className = 'song-letter-chip';
    chip.id = `chip-${i}`;
    chip.textContent = item.letter;
    display.appendChild(chip);
  });
}

function toggleSong() {
  if (songPlaying) {
    stopSong();
  } else {
    startSong();
  }
}

function startSong() {
  songPlaying = true;
  songStep = 0;
  document.getElementById('playSongBtn').textContent = '⏹ থামাও';
  playSongStep();
}

function stopSong() {
  songPlaying = false;
  if (songInterval) clearTimeout(songInterval);
  songInterval = null;
  document.getElementById('playSongBtn').textContent = '▶️ গান শুরু';
  document.getElementById('currentLetter').innerHTML = '';
  document.querySelectorAll('.song-letter-chip').forEach(c => c.classList.remove('active'));
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function playSongStep() {
  if (!songPlaying) return;

  // Remove all active
  document.querySelectorAll('.song-letter-chip').forEach(c => c.classList.remove('active'));

  if (songStep >= ALPHABET.length) {
    // Finished — say the rhyme end
    speakText('Now I know my ABCs, next time won\'t you sing with me!');
    document.getElementById('currentLetter').innerHTML =
      `<div class="current-letter-display">🎉 শেষ! 🎉</div>`;
    songPlaying = false;
    document.getElementById('playSongBtn').textContent = '▶️ আবার শুনি';
    songStep = 0;
    return;
  }

  const item = ALPHABET[songStep];
  const chip = document.getElementById(`chip-${songStep}`);
  if (chip) chip.classList.add('active');

  document.getElementById('currentLetter').innerHTML = `
    <div class="current-letter-display" style="color:${item.color}">
      ${item.letter} ${item.emoji}
    </div>`;

  speakText(item.letter);

  songStep++;

  // Group pauses like the actual ABC song
  let delay = 700;
  // Pause after G (index 6), after P (index 15), after S (index 18), and Q-R-S together
  if (songStep === 7 || songStep === 16 || songStep === 19 || songStep === 22 || songStep === 26) {
    delay = 1400;
  }

  songInterval = setTimeout(playSongStep, delay);
}

// ---- Confetti ----
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({length: 80}, () => ({
    x: Math.random() * canvas.width,
    y: -10,
    r: Math.random() * 8 + 4,
    color: ['#FF6B9D','#FFD93D','#6BCB77','#4D96FF','#C77DFF','#FF9A3C'][Math.floor(Math.random()*6)],
    vx: (Math.random()-0.5) * 4,
    vy: Math.random() * 5 + 3,
    rot: Math.random() * 360,
    rotV: (Math.random()-0.5)*8
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r/2, -p.r/2, p.r, p.r);
      ctx.restore();
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.rot += p.rotV;
    });
    frame++;
    if (frame < 80) requestAnimationFrame(draw);
    else canvas.style.display = 'none';
  }
  draw();
}

// ---- Init ----
createStars();
buildGrid();
buildSongDisplay();
