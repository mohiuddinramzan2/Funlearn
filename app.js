// ============================================
//  ABC & 123 শিখি — Kids Learning App v3
//  Alphabet + Numbers + Writing Board
// ============================================

// ===================== DATA =====================

const ALPHABET = [
  { letter:'A', word:'Apple',      emoji:'🍎', sound:'ay',       color:'#FF6B9D' },
  { letter:'B', word:'Ball',       emoji:'⚽', sound:'bee',      color:'#FF9A3C' },
  { letter:'C', word:'Cat',        emoji:'🐱', sound:'see',      color:'#FFD93D' },
  { letter:'D', word:'Dog',        emoji:'🐶', sound:'dee',      color:'#6BCB77' },
  { letter:'E', word:'Elephant',   emoji:'🐘', sound:'ee',       color:'#4ECDC4' },
  { letter:'F', word:'Fish',       emoji:'🐟', sound:'ef',       color:'#4D96FF' },
  { letter:'G', word:'Grapes',     emoji:'🍇', sound:'jee',      color:'#C77DFF' },
  { letter:'H', word:'Hat',        emoji:'🎩', sound:'aych',     color:'#FF6B9D' },
  { letter:'I', word:'Ice cream',  emoji:'🍦', sound:'eye',      color:'#FF9A3C' },
  { letter:'J', word:'Jellyfish',  emoji:'🪼', sound:'jay',      color:'#FFD93D' },
  { letter:'K', word:'Kite',       emoji:'🪁', sound:'kay',      color:'#6BCB77' },
  { letter:'L', word:'Lion',       emoji:'🦁', sound:'el',       color:'#4ECDC4' },
  { letter:'M', word:'Moon',       emoji:'🌙', sound:'em',       color:'#4D96FF' },
  { letter:'N', word:'Nest',       emoji:'🪺', sound:'en',       color:'#C77DFF' },
  { letter:'O', word:'Orange',     emoji:'🍊', sound:'oh',       color:'#FF9A3C' },
  { letter:'P', word:'Penguin',    emoji:'🐧', sound:'pee',      color:'#4D96FF' },
  { letter:'Q', word:'Queen',      emoji:'👑', sound:'queue',    color:'#FFD93D' },
  { letter:'R', word:'Rainbow',    emoji:'🌈', sound:'ar',       color:'#FF6B9D' },
  { letter:'S', word:'Star',       emoji:'⭐', sound:'es',       color:'#FFD93D' },
  { letter:'T', word:'Tiger',      emoji:'🐯', sound:'tee',      color:'#FF9A3C' },
  { letter:'U', word:'Umbrella',   emoji:'☂️', sound:'you',      color:'#4ECDC4' },
  { letter:'V', word:'Violin',     emoji:'🎻', sound:'vee',      color:'#C77DFF' },
  { letter:'W', word:'Watermelon', emoji:'🍉', sound:'double-u', color:'#6BCB77' },
  { letter:'X', word:'Xylophone',  emoji:'🎶', sound:'ex',       color:'#FF6B9D' },
  { letter:'Y', word:'Yo-yo',      emoji:'🪀', sound:'why',      color:'#FFD93D' },
  { letter:'Z', word:'Zebra',      emoji:'🦓', sound:'zee',      color:'#6BCB77' },
];

const NUMBERS = [
  { num:0,  word:'Zero',     emoji:'🌕', bengali:'শূন্য',  color:'#C77DFF', dotEmoji:'⭕' },
  { num:1,  word:'One',      emoji:'🍎', bengali:'এক',     color:'#FF6B9D', dotEmoji:'🌟' },
  { num:2,  word:'Two',      emoji:'🦆', bengali:'দুই',    color:'#FF9A3C', dotEmoji:'🌟' },
  { num:3,  word:'Three',    emoji:'🐛', bengali:'তিন',    color:'#FFD93D', dotEmoji:'🌟' },
  { num:4,  word:'Four',     emoji:'🐞', bengali:'চার',    color:'#6BCB77', dotEmoji:'🌟' },
  { num:5,  word:'Five',     emoji:'🖐️', bengali:'পাঁচ',  color:'#4ECDC4', dotEmoji:'🌟' },
  { num:6,  word:'Six',      emoji:'🎲', bengali:'ছয়',    color:'#4D96FF', dotEmoji:'🌟' },
  { num:7,  word:'Seven',    emoji:'🌈', bengali:'সাত',    color:'#C77DFF', dotEmoji:'🌟' },
  { num:8,  word:'Eight',    emoji:'🐙', bengali:'আট',     color:'#FF6B9D', dotEmoji:'🌟' },
  { num:9,  word:'Nine',     emoji:'🍭', bengali:'নয়',    color:'#FF9A3C', dotEmoji:'🌟' },
  { num:10, word:'Ten',      emoji:'🎯', bengali:'দশ',     color:'#FFD93D', dotEmoji:'🌟' },
  { num:11, word:'Eleven',   emoji:'⚽', bengali:'এগারো',  color:'#6BCB77', dotEmoji:'🌟' },
  { num:12, word:'Twelve',   emoji:'🍕', bengali:'বারো',   color:'#4ECDC4', dotEmoji:'🌟' },
  { num:13, word:'Thirteen', emoji:'🎮', bengali:'তেরো',   color:'#4D96FF', dotEmoji:'🌟' },
  { num:14, word:'Fourteen', emoji:'🦋', bengali:'চৌদ্দ', color:'#C77DFF', dotEmoji:'🌟' },
  { num:15, word:'Fifteen',  emoji:'🐬', bengali:'পনেরো',  color:'#FF6B9D', dotEmoji:'🌟' },
  { num:16, word:'Sixteen',  emoji:'🌺', bengali:'ষোলো',   color:'#FF9A3C', dotEmoji:'🌟' },
  { num:17, word:'Seventeen',emoji:'🦜', bengali:'সতেরো',  color:'#FFD93D', dotEmoji:'🌟' },
  { num:18, word:'Eighteen', emoji:'🐠', bengali:'আঠারো',  color:'#6BCB77', dotEmoji:'🌟' },
  { num:19, word:'Nineteen', emoji:'🎪', bengali:'উনিশ',   color:'#4ECDC4', dotEmoji:'🌟' },
  { num:20, word:'Twenty',   emoji:'🎂', bengali:'বিশ',    color:'#4D96FF', dotEmoji:'🌟' },
];

// ===================== STATE =====================
let score         = 0;
let currentMode   = 'alpha';   // 'alpha' | 'num'
let currentTab    = 'learn';
let modalIndex    = 0;
let modalDataset  = ALPHABET;

let songInterval    = null;
let songPlaying     = false;
let songStep        = 0;

let numSongInterval = null;
let numSongPlaying  = false;
let numSongStep     = 0;

let quizAnswered    = false;
let numQuizAnswered = false;

// ===================== INIT =====================
createStars();
buildAlphaGrid();
buildNumGrid();
buildSongDisplay();
buildNumSongDisplay();
loadQuiz();
loadNumQuiz();
initAlphaWrite();
initNumWrite();

// ===================== STARS =====================
function createStars() {
  const c = document.getElementById('stars');
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() * 3 + 1;
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${(Math.random()*4+2).toFixed(1)}s;animation-delay:${(Math.random()*5).toFixed(1)}s`;
    c.appendChild(s);
  }
}

// ===================== MODE SWITCH =====================
function switchMode(mode) {
  currentMode = mode;
  document.getElementById('alphaMode').style.display = mode === 'alpha' ? '' : 'none';
  document.getElementById('numMode').style.display   = mode === 'num'   ? '' : 'none';

  document.getElementById('modeAlpha').classList.toggle('active', mode === 'alpha');
  document.getElementById('modeNum').classList.toggle('active',   mode === 'num');

  ['tabLearn','tabQuiz','tabSong','tabWrite'].forEach(id =>
    document.getElementById(id).classList.remove('active')
  );
  document.getElementById('tabLearn').classList.add('active');
  currentTab = 'learn';

  stopSong();
  stopNumSong();

  if (mode === 'alpha') showAlphaTab('learn');
  else                  showNumTab('num-learn');
}

// ===================== TAB NAV =====================
function showAlphaTab(name) {
  ['learn','quiz','song','write'].forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    if (el) el.classList.toggle('active', t === name);
  });
}

function showNumTab(name) {
  ['num-learn','num-quiz','num-song','num-write'].forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    if (el) el.classList.toggle('active', t === name);
  });
}

window.showTab = function(name) {
  currentTab = name;

  ['tabLearn','tabQuiz','tabSong','tabWrite'].forEach(id =>
    document.getElementById(id).classList.remove('active')
  );
  const btnMap = { learn:'tabLearn', quiz:'tabQuiz', song:'tabSong', write:'tabWrite' };
  document.getElementById(btnMap[name]).classList.add('active');

  stopSong(); stopNumSong();

  if (currentMode === 'alpha') {
    showAlphaTab(name);
    if (name === 'quiz') loadQuiz();
  } else {
    const map = { learn:'num-learn', quiz:'num-quiz', song:'num-song', write:'num-write' };
    showNumTab(map[name]);
    if (name === 'quiz') loadNumQuiz();
  }
};

// ===================== ALPHA GRID =====================
function buildAlphaGrid() {
  const grid = document.getElementById('alphabetGrid');
  ALPHABET.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.setProperty('--glow', item.color);
    card.style.setProperty('--glow-shadow', hexRgba(item.color, .45));
    card.innerHTML = `
      <div class="big-letter" style="color:${item.color}">${item.letter}</div>
      <div class="small-letter" style="color:${item.color}">${item.letter.toLowerCase()}</div>
      <span class="card-emoji">${item.emoji}</span>
      <div class="card-word">${item.word}</div>`;
    card.addEventListener('click', () => openAlphaModal(i));
    grid.appendChild(card);
  });
}

// ===================== NUMBER GRID =====================
function buildNumGrid() {
  const grid = document.getElementById('numberGrid');
  NUMBERS.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.style.setProperty('--glow', item.color);
    card.style.setProperty('--glow-shadow', hexRgba(item.color, .45));
    const dots = makeDots(item.num, item.dotEmoji);
    card.innerHTML = `
      <div class="big-letter" style="color:${item.color}">${item.num}</div>
      <div class="small-letter" style="color:${item.color}">${item.bengali}</div>
      <span class="card-emoji">${item.emoji}</span>
      <div class="num-dots-mini">${dots}</div>
      <div class="card-word">${item.word}</div>`;
    card.addEventListener('click', () => openNumModal(i));
    grid.appendChild(card);
  });
}

function makeDots(n, dotEmoji) {
  if (n === 0) return '—';
  const max = Math.min(n, 10);
  return dotEmoji.repeat(max) + (n > 10 ? '…' : '');
}

// ===================== MODAL =====================
function openAlphaModal(index) {
  modalDataset = ALPHABET;
  modalIndex = index;
  renderAlphaModal();
  document.getElementById('modalOverlay').classList.add('open');
  speakText(`${ALPHABET[index].letter}. ${ALPHABET[index].letter} for ${ALPHABET[index].word}`);
}

function openNumModal(index) {
  modalDataset = NUMBERS;
  modalIndex = index;
  renderNumModal();
  document.getElementById('modalOverlay').classList.add('open');
  const item = NUMBERS[index];
  speakText(`${item.word}. ${item.num}. ${item.word}`);
}

function renderAlphaModal() {
  const item = ALPHABET[modalIndex];
  document.getElementById('modalLetter').textContent = item.letter;
  document.getElementById('modalLetter').style.color = item.color;
  document.getElementById('modalLetterLower').textContent = item.letter.toLowerCase();
  document.getElementById('modalLetterLower').style.color = item.color;
  document.getElementById('modalLetterLower').style.display = '';
  document.getElementById('modalEmoji').textContent = item.emoji;
  document.getElementById('modalWord').textContent = item.word;
  document.getElementById('modalPronunciation').textContent = `উচ্চারণ: "${item.sound}"`;
  document.getElementById('modalDots').textContent = '';
  document.getElementById('modalCard').style.borderColor = item.color + '66';
}

function renderNumModal() {
  const item = NUMBERS[modalIndex];
  document.getElementById('modalLetter').textContent = item.num;
  document.getElementById('modalLetter').style.color = item.color;
  document.getElementById('modalLetterLower').textContent = item.bengali;
  document.getElementById('modalLetterLower').style.color = item.color;
  document.getElementById('modalLetterLower').style.display = '';
  document.getElementById('modalEmoji').textContent = item.emoji;
  document.getElementById('modalWord').textContent = item.word;
  document.getElementById('modalPronunciation').textContent = `বাংলা: ${item.bengali}`;
  const dots = item.num > 0 ? item.dotEmoji.repeat(Math.min(item.num, 15)) + (item.num > 15 ? '…' : '') : '⭕';
  document.getElementById('modalDots').textContent = dots;
  document.getElementById('modalCard').style.borderColor = item.color + '66';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  window.speechSynthesis && window.speechSynthesis.cancel();
}

function navigateItem(dir) {
  const len = modalDataset.length;
  modalIndex = (modalIndex + dir + len) % len;
  if (modalDataset === ALPHABET) {
    renderAlphaModal();
    speakText(`${ALPHABET[modalIndex].letter}. ${ALPHABET[modalIndex].letter} for ${ALPHABET[modalIndex].word}`);
  } else {
    renderNumModal();
    const item = NUMBERS[modalIndex];
    speakText(`${item.word}. ${item.num}`);
  }
}

document.getElementById('modalSpeakBtn').addEventListener('click', () => {
  if (modalDataset === ALPHABET) {
    const it = ALPHABET[modalIndex];
    speakText(`${it.letter}. ${it.letter} for ${it.word}`);
  } else {
    const it = NUMBERS[modalIndex];
    speakText(`${it.word}. ${it.num}`);
  }
});

// ===================== SPEECH =====================
function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = 0.82; u.pitch = 1.2;
  window.speechSynthesis.speak(u);
}

// ===================== ALPHA QUIZ =====================
function loadQuiz() {
  quizAnswered = false;
  const idx  = Math.floor(Math.random() * ALPHABET.length);
  const item = ALPHABET[idx];
  document.getElementById('quizQuestion').textContent = 'কোন অক্ষর দিয়ে শুরু?';
  document.getElementById('quizEmoji').textContent    = item.emoji;
  document.getElementById('quizResult').textContent   = '';

  const opts = [item.letter];
  while (opts.length < 4) {
    const r = ALPHABET[Math.floor(Math.random() * ALPHABET.length)].letter;
    if (!opts.includes(r)) opts.push(r);
  }
  opts.sort(() => Math.random() - .5);

  const cont = document.getElementById('quizOptions');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkAlphaAnswer(opt, item.letter, btn));
    cont.appendChild(btn);
  });
  setTimeout(() => speakText(`What letter does ${item.word} start with?`), 400);
}

function checkAlphaAnswer(chosen, correct, btn) {
  if (quizAnswered) return;
  quizAnswered = true;
  const res = document.getElementById('quizResult');
  if (chosen === correct) {
    btn.classList.add('correct');
    res.textContent = '🎉 সঠিক! দারুণ!'; res.style.color = '#6BCB77';
    addScore(10); launchConfetti(); speakText('Correct! Great job!');
  } else {
    btn.classList.add('wrong');
    res.textContent = `❌ উত্তর ছিল: ${correct}`; res.style.color = '#FF6B9D';
    document.querySelectorAll('#quizOptions .quiz-opt-btn').forEach(b => {
      if (b.textContent === correct) b.classList.add('correct');
    });
    speakText(`The answer is ${correct}.`);
  }
  setTimeout(loadQuiz, 2600);
}

// ===================== NUMBER QUIZ =====================
function loadNumQuiz() {
  numQuizAnswered = false;
  const idx  = Math.floor(Math.random() * NUMBERS.length);
  const item = NUMBERS[idx];

  document.getElementById('numQuizQuestion').textContent = 'এই সংখ্যাটি কোনটি?';
  const dots = item.num === 0
    ? '⭕'
    : item.dotEmoji.repeat(Math.min(item.num, 10)) + (item.num > 10 ? `\n+ আরও ${item.num - 10}টি` : '');
  document.getElementById('numQuizEmoji').textContent = dots;
  document.getElementById('numQuizResult').textContent = '';

  const opts = [item.num];
  while (opts.length < 4) {
    const r = NUMBERS[Math.floor(Math.random() * NUMBERS.length)].num;
    if (!opts.includes(r)) opts.push(r);
  }
  opts.sort(() => Math.random() - .5);

  const cont = document.getElementById('numQuizOptions');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkNumAnswer(opt, item.num, btn));
    cont.appendChild(btn);
  });
  setTimeout(() => speakText(`How many ${item.dotEmoji.replace(/\uFE0F/g,'')} are there?`), 400);
}

function checkNumAnswer(chosen, correct, btn) {
  if (numQuizAnswered) return;
  numQuizAnswered = true;
  const res = document.getElementById('numQuizResult');
  if (chosen === correct) {
    btn.classList.add('correct');
    res.textContent = '🎉 সঠিক!'; res.style.color = '#6BCB77';
    addScore(10); launchConfetti(); speakText(`Correct! The answer is ${correct}.`);
  } else {
    btn.classList.add('wrong');
    res.textContent = `❌ উত্তর: ${correct}`; res.style.color = '#FF6B9D';
    document.querySelectorAll('#numQuizOptions .quiz-opt-btn').forEach(b => {
      if (+b.textContent === correct) b.classList.add('correct');
    });
    speakText(`The answer is ${correct}.`);
  }
  setTimeout(loadNumQuiz, 2600);
}

// ===================== ABC SONG =====================
function buildSongDisplay() {
  const d = document.getElementById('songDisplay');
  d.innerHTML = '';
  ALPHABET.forEach((item, i) => {
    const chip = document.createElement('div');
    chip.className = 'song-letter-chip';
    chip.id = `chip-${i}`;
    chip.textContent = item.letter;
    d.appendChild(chip);
  });
}

function toggleSong() { songPlaying ? stopSong() : startSong(); }
function startSong() {
  songPlaying = true; songStep = 0;
  document.getElementById('playSongBtn').textContent = '⏹ থামাও';
  playSongStep();
}
function stopSong() {
  songPlaying = false;
  if (songInterval) clearTimeout(songInterval); songInterval = null;
  document.getElementById('playSongBtn').textContent = '▶️ গান শুরু';
  document.getElementById('currentLetter').innerHTML = '';
  document.querySelectorAll('.song-letter-chip').forEach(c => c.classList.remove('active'));
  window.speechSynthesis && window.speechSynthesis.cancel();
}
function playSongStep() {
  if (!songPlaying) return;
  document.querySelectorAll('#songDisplay .song-letter-chip').forEach(c => c.classList.remove('active'));
  if (songStep >= ALPHABET.length) {
    speakText('Now I know my ABCs, next time won\'t you sing with me!');
    document.getElementById('currentLetter').innerHTML = `<div class="current-letter-display">🎉 শেষ!</div>`;
    songPlaying = false;
    document.getElementById('playSongBtn').textContent = '▶️ আবার শুনি';
    songStep = 0; return;
  }
  const item = ALPHABET[songStep];
  const chip = document.getElementById(`chip-${songStep}`);
  if (chip) chip.classList.add('active');
  document.getElementById('currentLetter').innerHTML =
    `<div class="current-letter-display" style="color:${item.color}">${item.letter} ${item.emoji}</div>`;
  speakText(item.letter);
  songStep++;
  const delay = [7,16,19,22,26].includes(songStep) ? 1400 : 700;
  songInterval = setTimeout(playSongStep, delay);
}

// ===================== COUNT SONG =====================
function buildNumSongDisplay() {
  const d = document.getElementById('numSongDisplay');
  d.innerHTML = '';
  NUMBERS.forEach((item, i) => {
    const chip = document.createElement('div');
    chip.className = 'song-letter-chip';
    chip.id = `nchip-${i}`;
    chip.textContent = item.num;
    d.appendChild(chip);
  });
}
function toggleNumSong() { numSongPlaying ? stopNumSong() : startNumSong(); }
function startNumSong() {
  numSongPlaying = true; numSongStep = 0;
  document.getElementById('playNumSongBtn').textContent = '⏹ থামাও';
  playNumSongStep();
}
function stopNumSong() {
  numSongPlaying = false;
  if (numSongInterval) clearTimeout(numSongInterval); numSongInterval = null;
  document.getElementById('playNumSongBtn').textContent = '▶️ গান শুরু';
  document.getElementById('currentNumber').innerHTML = '';
  document.querySelectorAll('.song-letter-chip').forEach(c => c.classList.remove('active'));
  window.speechSynthesis && window.speechSynthesis.cancel();
}
function playNumSongStep() {
  if (!numSongPlaying) return;
  document.querySelectorAll('#numSongDisplay .song-letter-chip').forEach(c => c.classList.remove('active'));
  if (numSongStep >= NUMBERS.length) {
    speakText('One, two, three, four, five, six, seven, eight, nine, ten — and all the way to twenty!');
    document.getElementById('currentNumber').innerHTML = `<div class="current-letter-display">🎉 শেষ!</div>`;
    numSongPlaying = false;
    document.getElementById('playNumSongBtn').textContent = '▶️ আবার শুনি';
    numSongStep = 0; return;
  }
  const item = NUMBERS[numSongStep];
  const chip = document.getElementById(`nchip-${numSongStep}`);
  if (chip) chip.classList.add('active');
  document.getElementById('currentNumber').innerHTML =
    `<div class="current-letter-display" style="color:${item.color}">${item.num} ${item.emoji}<br><span style="font-size:1.2rem;opacity:.7">${item.bengali}</span></div>`;
  speakText(item.word);
  numSongStep++;
  numSongInterval = setTimeout(playNumSongStep, 1000);
}

// ============================================
//  ✏️ WRITING BOARD — Drawing Canvas Logic
// ============================================

const BRUSH_COLORS = ['#222222','#FF6B9D','#4D96FF','#6BCB77','#FFD93D','#C77DFF','#FF9A3C','#ffffff'];

// --- প্রতিটি বোর্ডের নিজস্ব state ---
const boards = {
  alpha: {
    canvasId:    'alphaCanvas',
    selectorId:  'alphaWriteSelector',
    guideId:     'alphaGuideLetter',
    brushId:     'alphaBrushSize',
    colorRowId:  'alphaColorRow',
    praiseId:    'praiseMsgAlpha',
    activeColor: '#222222',
    drawing:     false,
    lastX: 0, lastY: 0,
    canvas: null, ctx: null,
  },
  num: {
    canvasId:    'numCanvas',
    selectorId:  'numWriteSelector',
    guideId:     'numGuideLetter',
    brushId:     'numBrushSize',
    colorRowId:  'numColorRow',
    praiseId:    'praiseMsgNum',
    activeColor: '#222222',
    drawing:     false,
    lastX: 0, lastY: 0,
    canvas: null, ctx: null,
  }
};

// --- ক্যানভাস থেকে সঠিক পজিশন নেওয়া ---
function getPos(canvas, e) {
  const rect   = canvas.getBoundingClientRect();
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;
  const src    = e.touches ? e.touches[0] : e;
  return {
    x: (src.clientX - rect.left) * scaleX,
    y: (src.clientY - rect.top)  * scaleY
  };
}

// --- একটি বোর্ড সেটআপ করা ---
function setupBoard(key) {
  const b = boards[key];
  b.canvas = document.getElementById(b.canvasId);
  b.ctx    = b.canvas.getContext('2d');
  b.ctx.lineCap  = 'round';
  b.ctx.lineJoin = 'round';

  // মাউস ইভেন্ট
  b.canvas.addEventListener('mousedown', e => {
    b.drawing = true;
    const p = getPos(b.canvas, e);
    b.lastX = p.x; b.lastY = p.y;
  });
  b.canvas.addEventListener('mousemove', e => {
    if (!b.drawing) return;
    drawStroke(b, e);
  });
  b.canvas.addEventListener('mouseup',    () => { b.drawing = false; b.ctx.beginPath(); });
  b.canvas.addEventListener('mouseleave', () => { b.drawing = false; b.ctx.beginPath(); });

  // টাচ ইভেন্ট (মোবাইল)
  b.canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    b.drawing = true;
    const p = getPos(b.canvas, e);
    b.lastX = p.x; b.lastY = p.y;
  }, { passive: false });
  b.canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    if (!b.drawing) return;
    drawStroke(b, e);
  }, { passive: false });
  b.canvas.addEventListener('touchend', () => { b.drawing = false; b.ctx.beginPath(); });
}

function drawStroke(b, e) {
  const p = getPos(b.canvas, e);
  const brushSize = parseInt(document.getElementById(b.brushId).value);
  b.ctx.lineWidth   = brushSize;
  b.ctx.strokeStyle = b.activeColor;
  b.ctx.beginPath();
  b.ctx.moveTo(b.lastX, b.lastY);
  b.ctx.lineTo(p.x, p.y);
  b.ctx.stroke();
  b.lastX = p.x; b.lastY = p.y;
}

// --- ক্যানভাস মুছি ---
function clearActiveCanvas() {
  const key = currentMode;
  const b   = boards[key];
  b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height);
}

// --- ব্রাশ লেবেল ---
function updateBrushLabel(key, val) {
  const labelId = key === 'alpha' ? 'alphaBrushLabel' : 'numBrushLabel';
  document.getElementById(labelId).textContent = val;
}

// --- প্রশংসা ---
const PRAISES = [
  'দারুণ লিখেছ! 🌟', 'বাহ! অসাধারণ! 🎉', 'তুমি সেরা! ⭐',
  'কী সুন্দর! 🥳', 'আরেকটা লেখো! 💪', 'শাবাশ! 👏'
];
function praiseKid() {
  const key = currentMode;
  const msg = document.getElementById(boards[key].praiseId);
  msg.textContent = PRAISES[Math.floor(Math.random() * PRAISES.length)];
  msg.style.opacity = '1';
  addScore(5);
  launchConfetti();
  setTimeout(() => { msg.style.opacity = '0'; }, 2800);
}

// --- সিলেক্টর বাটন তৈরি ---
function buildWriteSelector(key, dataset, labelFn) {
  const b         = boards[key];
  const container = document.getElementById(b.selectorId);
  container.innerHTML = '';

  dataset.forEach((item, i) => {
    const btn = document.createElement('button');
    btn.className = 'write-char-btn';
    btn.textContent = labelFn(item);
    btn.style.borderColor = item.color;
    btn.style.color       = item.color;
    btn.onclick = () => {
      container.querySelectorAll('.write-char-btn').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const guide = document.getElementById(b.guideId);
      guide.textContent = labelFn(item);
      guide.style.color = hexRgba(item.color, 0.18);
      b.ctx.clearRect(0, 0, b.canvas.width, b.canvas.height);
      speakText(labelFn(item));
    };
    if (i === 0) btn.classList.add('active');
    container.appendChild(btn);
  });
}

// --- রঙের বাটন তৈরি ---
function buildColorPicker(key) {
  const b   = boards[key];
  const row = document.getElementById(b.colorRowId);
  row.innerHTML = '';

  BRUSH_COLORS.forEach(color => {
    const btn = document.createElement('button');
    btn.className = 'color-dot';
    btn.style.background = color;
    btn.style.border = color === '#ffffff'
      ? '3px solid rgba(255,255,255,.4)'
      : '3px solid rgba(255,255,255,.15)';
    if (color === b.activeColor) btn.classList.add('active');
    btn.title = color;
    btn.onclick = () => {
      b.activeColor = color;
      row.querySelectorAll('.color-dot').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
    };
    row.appendChild(btn);
  });
}

// --- ইনিশিয়ালাইজ ---
function initAlphaWrite() {
  setupBoard('alpha');
  buildWriteSelector('alpha', ALPHABET, item => item.letter);
  buildColorPicker('alpha');
  // প্রথম গাইড লেটার সেট করি
  const guide = document.getElementById(boards.alpha.guideId);
  guide.style.color = hexRgba(ALPHABET[0].color, 0.18);
}

function initNumWrite() {
  setupBoard('num');
  buildWriteSelector('num', NUMBERS, item => String(item.num));
  buildColorPicker('num');
  // প্রথম গাইড নম্বর সেট করি
  const guide = document.getElementById(boards.num.guideId);
  guide.textContent = '0';
  guide.style.color = hexRgba(NUMBERS[0].color, 0.18);
}

// ===================== SCORE =====================
function addScore(n) {
  score += n;
  document.getElementById('score').textContent = score;
}

// ===================== CONFETTI =====================
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const pieces = Array.from({length:90}, () => ({
    x:Math.random()*canvas.width, y:-10,
    r:Math.random()*8+4,
    color:['#FF6B9D','#FFD93D','#6BCB77','#4D96FF','#C77DFF','#FF9A3C'][Math.floor(Math.random()*6)],
    vx:(Math.random()-.5)*4, vy:Math.random()*5+3,
    rot:Math.random()*360, rotV:(Math.random()-.5)*8
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r); ctx.restore();
      p.x+=p.vx; p.y+=p.vy; p.vy+=0.15; p.rot+=p.rotV;
    });
    frame++;
    if (frame < 90) requestAnimationFrame(draw); else canvas.style.display = 'none';
  }
  draw();
}

// ===================== UTIL =====================
function hexRgba(hex, a) {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
}
