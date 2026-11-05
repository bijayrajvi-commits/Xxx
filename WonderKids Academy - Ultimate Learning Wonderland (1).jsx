<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>WonderKids Academy - Ultimate Learning Wonderland</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <!-- Google Fonts: Fredoka & Outfit for ultra-friendly, cheerful kid typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Fredoka', cursive, system-ui, sans-serif;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }
    .font-heading {
      font-family: 'Outfit', sans-serif;
    }

    /* Cheerful background wallpaper pattern */
    .kids-bg {
      background-color: #fef9f2;
      background-image: 
        radial-gradient(#fed7aa 1.5px, transparent 1.5px), 
        radial-gradient(#fbcfe8 1.5px, #fef9f2 1.5px);
      background-size: 40px 40px;
      background-position: 0 0, 20px 20px;
    }

    /* Bouncy Chunky Buttons */
    .bouncy-btn {
      transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    .bouncy-btn:hover {
      transform: translateY(-2px) scale(1.02);
    }
    .bouncy-btn:active {
      transform: translateY(2px) scale(0.97);
    }

    /* Fun Card Shadows */
    .chunky-card {
      box-shadow: 0 8px 0px rgba(0, 0, 0, 0.08), 0 16px 24px -4px rgba(0, 0, 0, 0.06);
    }
    .chunky-card-pink {
      border: 3px solid #f472b6;
      box-shadow: 0 8px 0px #f472b6, 0 16px 24px -4px rgba(244, 114, 182, 0.3);
    }
    .chunky-card-blue {
      border: 3px solid #38bdf8;
      box-shadow: 0 8px 0px #38bdf8, 0 16px 24px -4px rgba(56, 189, 248, 0.3);
    }
    .chunky-card-yellow {
      border: 3px solid #facc15;
      box-shadow: 0 8px 0px #facc15, 0 16px 24px -4px rgba(250, 204, 21, 0.3);
    }
    .chunky-card-purple {
      border: 3px solid #c084fc;
      box-shadow: 0 8px 0px #c084fc, 0 16px 24px -4px rgba(192, 132, 252, 0.3);
    }
    .chunky-card-green {
      border: 3px solid #4ade80;
      box-shadow: 0 8px 0px #4ade80, 0 16px 24px -4px rgba(74, 222, 128, 0.3);
    }

    /* Hide scrollbars but keep horizontal scroll functional */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Star celebration animation */
    @keyframes star-pop {
      0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
      50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    .pop-in {
      animation: star-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }

    /* Tracing canvas dashed guideline styling */
    #traceCanvas {
      touch-action: none;
      cursor: crosshair;
    }
    #drawCanvas {
      touch-action: none;
      cursor: crosshair;
    }

    /* Confetti Canvas Overlay */
    #confettiCanvas {
      pointer-events: none;
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
    }
  </style>
</head>
<body class="kids-bg min-h-screen text-slate-800 flex flex-col justify-between selection:bg-pink-300">
  <!-- Audio & Voice Activation Banner -->
  <div id="audioWakeBanner" class="w-full bg-gradient-to-r from-amber-400 via-pink-400 to-purple-500 text-white font-bold text-xs sm:text-sm py-2 px-4 text-center cursor-pointer shadow-md flex items-center justify-center gap-2 sticky top-0 z-50 transition-all">
    <span>🎵 Tap anywhere to wake up Lily (Girl 👧) and Leo (Boy 👦)'s cute voices!</span>
    <span class="bg-white text-pink-600 px-2 py-0.5 rounded-full text-xs font-extrabold shadow-sm hover:scale-105 transition">Tap to Start</span>
  </div>

  <!-- Confetti Canvas for Celebrations -->
  <canvas id="confettiCanvas"></canvas>

  <!-- TOP HEADER / APP BAR -->
  <header class="bg-white/90 backdrop-blur-md border-b-4 border-amber-300 sticky top-0 z-40 px-3 sm:px-6 py-2.5 shadow-sm">
    <div class="max-w-6xl mx-auto flex items-center justify-between gap-2">
      
      <!-- Brand Logo -->
      <div class="flex items-center gap-2.5 cursor-pointer" id="brandLogoHome">
        <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-400 to-purple-500 flex items-center justify-center text-2xl shadow-md border-2 border-white">
          ✨
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <span class="text-xl sm:text-2xl font-bold font-heading text-pink-500 tracking-tight">Wonder<span class="text-amber-500">Kids</span></span>
            <span class="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full border border-purple-300 uppercase tracking-wider">Play & Learn</span>
          </div>
          <p class="text-xs text-slate-400 font-medium hidden sm:block">Everything for smart, creative, happy minds!</p>
        </div>
      </div>

      <!-- Header Widgets: Stars Counter, Narrator Voice & Sound -->
      <div class="flex items-center gap-2 sm:gap-3">
                <!-- Cute Kid Narrator Indicator Badge -->
        <div id="activeVoiceBadge" class="flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-pink-50 border-2 border-pink-300 shadow-sm" title="Active Voice Narrator">
          <span id="activeVoiceEmoji" class="text-base sm:text-lg">👧</span>
          <div class="flex flex-col text-left leading-none">
            <span id="activeVoiceName" class="text-[11px] sm:text-xs font-bold text-pink-700">Lily</span>
            <span class="text-[9px] text-pink-500 font-semibold">Cute Voice</span>
          </div>
          <div id="soundWavesBox" class="flex items-end gap-0.5 ml-1 h-3.5">
            <span class="w-1 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span class="w-1 h-3.5 bg-purple-400 rounded-full animate-pulse delay-75"></span>
            <span class="w-1 h-2.5 bg-amber-400 rounded-full animate-pulse delay-150"></span>
          </div>
        </div>

        <!-- Golden Star Reward Counter -->
        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 border-2 border-amber-300 shadow-sm" title="Stars collected!">
          <span class="text-lg">⭐</span>
          <span id="starCounter" class="font-bold font-heading text-sm sm:text-base text-amber-700">0</span>
        </div>

                <!-- Open in New Tab Button (bypasses all iframe audio/sandbox restrictions) -->
        <button id="openNewTabBtn" class="bouncy-btn hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs font-bold shadow-sm border-2 border-white" title="Open full screen in a new tab for 100% audio compatibility">
          <span>🚀</span>
          <span>Open Fullscreen</span>
        </button>

        <!-- Audio Sound Effects Toggle -->
        <button id="sfxToggleBtn" class="bouncy-btn p-2 sm:px-3 sm:py-1.5 rounded-2xl bg-sky-100 hover:bg-sky-200 border-2 border-sky-300 text-sky-800 text-xs font-bold flex items-center gap-1 shadow-sm" title="Sound Effects">
          <span id="sfxIcon">🔊</span>
          <span class="hidden md:inline" id="sfxLabel">Sound On</span>
        </button>

        <!-- Voice Narrator (Read Aloud) Toggle -->
        <button id="voiceToggleBtn" class="bouncy-btn p-2 sm:px-3 sm:py-1.5 rounded-2xl bg-purple-100 hover:bg-purple-200 border-2 border-purple-300 text-purple-800 text-xs font-bold flex items-center gap-1 shadow-sm" title="Voice Narrator">
          <span id="voiceIcon">🗣️</span>
          <span class="hidden md:inline" id="voiceLabel">Voice On</span>
        </button>
      </div>

    </div>
  </header>

  <!-- NAVIGATION PILLS BAR (HORIZONTALLY SCROLLABLE TABS) -->
  <nav class="bg-amber-100/70 border-b-2 border-amber-200 px-2 py-2 sticky top-[61px] sm:top-[69px] z-30 shadow-inner">
    <div class="max-w-6xl mx-auto flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
      
      <button id="navBtnAbc" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-pink-500 text-white shadow-md border-2 border-pink-400 flex items-center gap-1.5 transition">
        <span>🔤</span>
        <span>ABC & Vowels</span>
      </button>

      <button id="navBtn123" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-amber-200/60 border-2 border-amber-300 flex items-center gap-1.5 transition">
        <span>🔢</span>
        <span>123 & Count</span>
      </button>

      <button id="navBtnTrace" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-sky-200/60 border-2 border-sky-300 flex items-center gap-1.5 transition">
        <span>✏️</span>
        <span>Magic Tracing</span>
      </button>

      <button id="navBtnPaint" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-purple-200/60 border-2 border-purple-300 flex items-center gap-1.5 transition">
        <span>🎨</span>
        <span>Color & Paint</span>
      </button>

      <button id="navBtnShapes" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-emerald-200/60 border-2 border-emerald-300 flex items-center gap-1.5 transition">
        <span>🔺</span>
        <span>Shapes & Figures</span>
      </button>

      <button id="navBtnRhymes" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-rose-200/60 border-2 border-rose-300 flex items-center gap-1.5 transition">
        <span>🎵</span>
        <span>Rhymes</span>
      </button>

      <button id="navBtnStories" class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-indigo-200/60 border-2 border-indigo-300 flex items-center gap-1.5 transition">
        <span>📖</span>
        <span>Stories</span>
      </button>

    </div>
  </nav>

  <!-- MAIN LEARNING PLAYGROUND -->
  <main class="max-w-6xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-6 flex-1 flex flex-col items-center">

    <!-- ================================================================= -->
    <!-- MODULE 1: ABC & VOWELS WONDERLAND -->
    <!-- ================================================================= -->
    <section id="sectionAbc" class="w-full flex flex-col items-center gap-5">
      
      <!-- Sub-filter: All / Vowels Only / Consonants -->
      <div class="flex items-center gap-2 bg-white/80 p-1.5 rounded-2xl border-2 border-pink-200 shadow-sm">
        <button id="abcFilterAllBtn" class="bouncy-btn px-3 py-1 rounded-xl text-xs font-bold bg-pink-500 text-white shadow-sm">
          All Letters (A-Z)
        </button>
        <button id="abcFilterVowelsBtn" class="bouncy-btn px-3 py-1 rounded-xl text-xs font-bold text-pink-700 hover:bg-pink-100">
          ⭐ Special Vowels (A, E, I, O, U)
        </button>
      </div>

      <!-- Center Big Flashcard -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card-pink p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden">
        
        <!-- Vowel Banner Tag -->
        <div id="vowelBadge" class="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-pink-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-md hidden">
          🌟 Vowel
        </div>

        <!-- Big Animated Letter Display -->
        <div class="my-2">
          <span id="bigLetterUpper" class="text-7xl sm:text-9xl font-extrabold font-heading text-pink-500 inline-block drop-shadow-md pop-in">A</span>
          <span id="bigLetterLower" class="text-5xl sm:text-7xl font-bold font-heading text-purple-400 ml-1 inline-block">a</span>
        </div>

        <!-- Big Cheerful Illustrated Emoji & Word -->
        <div class="my-3 flex flex-col items-center">
          <div id="letterEmoji" class="text-6xl sm:text-7xl mb-2 transform transition hover:scale-125 cursor-pointer">🍎</div>
          <h2 id="letterWord" class="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-wide font-heading">Apple</h2>
          <p id="letterPhonicsSentence" class="text-sm sm:text-base text-pink-600 font-semibold mt-1">"A is for Apple! Ah, ah, Apple!"</p>
        </div>

                <!-- Interactive Voice Speak & Star Buttons -->
        <div class="flex items-center justify-center gap-3 mt-4 w-full">
          <button id="speakLetterBtn" class="bouncy-btn flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-500/20 border-2 border-white flex items-center justify-center gap-2">
            <span>🗣️ Hear Pronunciation</span>
          </button>
          <button id="collectStarAbcBtn" class="bouncy-btn py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-400/25 border-2 border-white flex items-center gap-1.5">
            <span>⭐ Got It!</span>
          </button>
        </div>
        <!-- Live Pronunciation Diagnostic & Subtitle Pill -->
        <div id="pronounceStatusPill" class="mt-2.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[11px] font-semibold text-pink-700 flex items-center justify-center gap-1.5 transition-all">
          <span id="pronounceStatusIcon">📢</span>
          <span id="pronounceStatusText">Click "Hear Pronunciation" to listen</span>
        </div>

        <!-- Prev / Next Letter Navigation -->
        <div class="flex items-center justify-between w-full mt-6 pt-4 border-t-2 border-pink-100">
          <button id="prevLetterBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold text-xs sm:text-sm flex items-center gap-1">
            <span>◀ Previous</span>
          </button>
          <span id="letterProgressText" class="text-xs font-bold text-slate-400">1 of 26</span>
          <button id="nextLetterBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-bold text-xs sm:text-sm flex items-center gap-1 shadow-md">
            <span>Next ▶</span>
          </button>
        </div>

      </div>

      <!-- Alphabet Quick-Pick Grid -->
      <div class="w-full max-w-2xl bg-white/90 rounded-3xl p-4 sm:p-5 border-2 border-pink-200 shadow-sm">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-3">Tap Any Letter to Learn</h4>
        <div id="alphabetGrid" class="grid grid-cols-7 sm:grid-cols-9 gap-1.5 sm:gap-2">
          <!-- Populated by JS -->
        </div>
      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 2: 123 NUMBERS & POP COUNTING -->
    <!-- ================================================================= -->
    <section id="section123" class="w-full flex flex-col items-center gap-5 hidden">
      
      <!-- Center Big Number Flashcard -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card-yellow p-6 sm:p-8 flex flex-col items-center text-center">
        
        <div class="flex items-center justify-center gap-2 my-1">
          <span id="bigNumberDigit" class="text-8xl sm:text-9xl font-extrabold font-heading text-amber-500 drop-shadow-md pop-in">5</span>
        </div>
        <h2 id="numberWord" class="text-3xl font-bold font-heading text-slate-800">Five</h2>
        <p class="text-xs sm:text-sm text-amber-600 font-semibold mb-4">Tap each item below to count together!</p>

        <!-- Interactive Tap-to-Count Garden (e.g. 5 Stars to Pop!) -->
        <div id="countingItemsContainer" class="w-full bg-amber-50 rounded-2xl p-4 min-h-[120px] flex flex-wrap items-center justify-center gap-3 border-2 border-dashed border-amber-300">
          <!-- Populated dynamically with clickable emojis -->
        </div>

        <!-- Counting Progress Counter -->
        <div class="mt-3 text-sm font-bold text-amber-700">
          Tapped: <span id="tappedCountSpan" class="text-lg text-amber-500 font-extrabold">0</span> / <span id="targetCountSpan">5</span>
        </div>

        <!-- Voice & Reward Buttons -->
        <div class="flex items-center justify-center gap-3 mt-4 w-full">
          <button id="speakNumberBtn" class="bouncy-btn flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 font-bold text-sm sm:text-base shadow-lg shadow-amber-400/25 border-2 border-white flex items-center justify-center gap-2">
            <span>🗣️ Count Aloud</span>
          </button>
          <button id="collectStarNumberBtn" class="bouncy-btn py-3 px-4 rounded-2xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-400/25 border-2 border-white flex items-center gap-1.5">
            <span>⭐ Mastered!</span>
          </button>
        </div>

        <!-- Navigation Controls -->
        <div class="flex items-center justify-between w-full mt-6 pt-4 border-t-2 border-amber-100">
          <button id="prevNumberBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold text-xs sm:text-sm">
            ◀ Previous
          </button>
          <span id="numberProgressText" class="text-xs font-bold text-slate-400">5 of 20</span>
          <button id="nextNumberBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-xs sm:text-sm shadow-md">
            Next ▶
          </button>
        </div>

      </div>

      <!-- Numbers Quick-Pick Selector -->
      <div class="w-full max-w-2xl bg-white/90 rounded-3xl p-4 sm:p-5 border-2 border-amber-200 shadow-sm">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-3">Pick a Number (1 - 20)</h4>
        <div id="numbersGrid" class="grid grid-cols-5 sm:grid-cols-10 gap-2">
          <!-- Populated by JS -->
        </div>
      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 3: MAGIC TRACING STUDIO (LETTERS, NUMBERS & CURSIVE) -->
    <!-- ================================================================= -->
    <section id="sectionTrace" class="w-full flex flex-col items-center gap-4 hidden">
      
      <!-- Tracing Category Switcher -->
      <div class="flex flex-wrap items-center justify-center gap-2 bg-white/90 p-1.5 rounded-2xl border-2 border-sky-200 shadow-sm">
        <button id="traceModePrintBtn" class="bouncy-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-500 text-white shadow-sm">
          🔤 Print (A-Z)
        </button>
        <button id="traceModeCursiveBtn" class="bouncy-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-sky-800 hover:bg-sky-100">
          ✍️ Cursive Script
        </button>
        <button id="traceModeNumBtn" class="bouncy-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-sky-800 hover:bg-sky-100">
          🔢 Numbers (0-9)
        </button>
        <button id="traceModeShapesBtn" class="bouncy-btn px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-sky-800 hover:bg-sky-100">
          🔺 Shapes
        </button>
      </div>

      <!-- Tracing Canvas Box -->
      <div class="w-full max-w-md bg-white rounded-3xl chunky-card-blue p-4 sm:p-6 flex flex-col items-center relative">
        
        <div class="flex items-center justify-between w-full mb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">✨</span>
            <span id="traceTargetName" class="font-bold text-lg font-heading text-sky-700">Trace: Letter A</span>
          </div>
          <button id="speakTraceBtn" class="bouncy-btn p-1.5 px-3 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-800 text-xs font-bold flex items-center gap-1">
            <span>🗣️ Listen</span>
          </button>
        </div>

        <!-- The Canvas Frame -->
        <div class="relative w-full aspect-square max-w-[340px] bg-slate-50 rounded-2xl border-4 border-dashed border-sky-300 shadow-inner overflow-hidden flex items-center justify-center">
          <canvas id="traceCanvas" width="340" height="340" class="w-full h-full"></canvas>
        </div>

        <!-- Magic Color Palette & Clear Tools -->
        <div class="flex items-center justify-between w-full mt-4 gap-2">
          <!-- Color picker dots -->
          <div class="flex items-center gap-2" id="traceColorPalette">
            <button class="w-7 h-7 rounded-full bg-pink-500 border-2 border-white ring-2 ring-pink-400 trace-color-btn" data-color="#ec4899"></button>
            <button class="w-7 h-7 rounded-full bg-sky-500 border-2 border-white ring-2 ring-sky-400 trace-color-btn" data-color="#0284c7"></button>
            <button class="w-7 h-7 rounded-full bg-amber-400 border-2 border-white ring-2 ring-amber-400 trace-color-btn" data-color="#f59e0b"></button>
            <button class="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-400 trace-color-btn" data-color="#10b981"></button>
            <button class="w-7 h-7 rounded-full bg-purple-500 border-2 border-white ring-2 ring-purple-400 trace-color-btn" data-color="#a855f7"></button>
          </div>

          <!-- Action buttons -->
          <div class="flex items-center gap-2">
            <button id="clearTraceBtn" class="bouncy-btn px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs">
              🔄 Clear
            </button>
            <button id="completeTraceBtn" class="bouncy-btn px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs shadow-md">
              ⭐ Done!
            </button>
          </div>
        </div>

        <!-- Tracing Item Carousel Selector -->
        <div class="flex items-center justify-between w-full mt-4 pt-3 border-t-2 border-sky-100">
          <button id="prevTraceBtn" class="bouncy-btn px-3 py-1.5 rounded-xl bg-sky-100 text-sky-800 font-bold text-xs">
            ◀ Prev
          </button>
          <div id="traceItemChipsContainer" class="flex items-center gap-1 overflow-x-auto max-w-[200px] no-scrollbar py-1">
            <!-- Mini buttons for characters -->
          </div>
          <button id="nextTraceBtn" class="bouncy-btn px-3 py-1.5 rounded-xl bg-sky-500 text-white font-bold text-xs shadow">
            Next ▶
          </button>
        </div>

      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 4: COLORING & PAINTING STUDIO -->
    <!-- ================================================================= -->
    <section id="sectionPaint" class="w-full flex flex-col items-center gap-4 hidden">
      
      <!-- Mode Toggle: Colouring Book vs Free Painting -->
      <div class="flex items-center gap-2 bg-white/90 p-1.5 rounded-2xl border-2 border-purple-200 shadow-sm">
        <button id="paintTabColoringBtn" class="bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-500 text-white shadow-sm">
          🖍️ Colouring Book
        </button>
        <button id="paintTabFreeDrawBtn" class="bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-purple-800 hover:bg-purple-100">
          🖌️ Free Draw & Stickers
        </button>
      </div>

      <!-- Coloring Book Templates Bar (Teddy, Rocket, Butterfly, etc.) -->
      <div id="coloringTemplatesBar" class="flex items-center gap-2 overflow-x-auto max-w-xl w-full no-scrollbar py-1">
        <button class="bouncy-btn flex-shrink-0 px-3 py-1.5 rounded-2xl bg-white border-2 border-purple-300 text-xs font-bold shadow-sm color-template-btn active" data-template="teddy">
          🧸 Teddy Bear
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3 py-1.5 rounded-2xl bg-white border-2 border-purple-300 text-xs font-bold shadow-sm color-template-btn" data-template="rocket">
          🚀 Space Rocket
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3 py-1.5 rounded-2xl bg-white border-2 border-purple-300 text-xs font-bold shadow-sm color-template-btn" data-template="butterfly">
          🦋 Butterfly
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3 py-1.5 rounded-2xl bg-white border-2 border-purple-300 text-xs font-bold shadow-sm color-template-btn" data-template="castle">
          🏰 Magic Castle
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3 py-1.5 rounded-2xl bg-white border-2 border-purple-300 text-xs font-bold shadow-sm color-template-btn" data-template="dino">
          🦕 Friendly Dino
        </button>
      </div>

      <!-- Canvas Frame -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card-purple p-4 sm:p-6 flex flex-col items-center">
        
        <!-- Canvas Surface -->
        <div class="relative w-full aspect-square max-w-[360px] bg-white rounded-2xl border-4 border-slate-200 shadow-inner overflow-hidden flex items-center justify-center">
          <canvas id="drawCanvas" width="360" height="360" class="w-full h-full"></canvas>
        </div>

        <!-- Color Palette (Bright, Kid-friendly colors) -->
        <div class="w-full mt-4 flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap" id="paintColorPalette">
            <!-- 10 vibrant colors -->
            <button class="w-7 h-7 rounded-full bg-red-500 border-2 border-white ring-2 ring-red-400 paint-color-btn" data-color="#ef4444"></button>
            <button class="w-7 h-7 rounded-full bg-orange-400 border-2 border-white ring-2 ring-orange-300 paint-color-btn" data-color="#fb923c"></button>
            <button class="w-7 h-7 rounded-full bg-yellow-400 border-2 border-white ring-2 ring-yellow-300 paint-color-btn" data-color="#facc15"></button>
            <button class="w-7 h-7 rounded-full bg-emerald-500 border-2 border-white ring-2 ring-emerald-400 paint-color-btn" data-color="#10b981"></button>
            <button class="w-7 h-7 rounded-full bg-sky-400 border-2 border-white ring-2 ring-sky-300 paint-color-btn" data-color="#38bdf8"></button>
            <button class="w-7 h-7 rounded-full bg-indigo-500 border-2 border-white ring-2 ring-indigo-400 paint-color-btn" data-color="#6366f1"></button>
            <button class="w-7 h-7 rounded-full bg-pink-500 border-2 border-white ring-2 ring-pink-400 paint-color-btn" data-color="#ec4899"></button>
            <button class="w-7 h-7 rounded-full bg-purple-600 border-2 border-white ring-2 ring-purple-500 paint-color-btn" data-color="#9333ea"></button>
            <button class="w-7 h-7 rounded-full bg-amber-800 border-2 border-white ring-2 ring-amber-700 paint-color-btn" data-color="#78350f"></button>
            <button class="w-7 h-7 rounded-full bg-slate-900 border-2 border-white ring-2 ring-slate-700 paint-color-btn" data-color="#0f172a"></button>
          </div>

          <!-- Brush Size Selector -->
          <div class="flex items-center gap-1 bg-purple-50 p-1 rounded-xl border border-purple-200">
            <button id="brushSizeSmallBtn" class="p-1 px-2 rounded-lg text-xs font-bold hover:bg-purple-200">Thin</button>
            <button id="brushSizeMedBtn" class="p-1 px-2 rounded-lg text-xs font-bold bg-purple-500 text-white shadow-sm">Medium</button>
            <button id="brushSizeLargeBtn" class="p-1 px-2 rounded-lg text-xs font-bold hover:bg-purple-200">Thick</button>
          </div>
        </div>

        <!-- Stickers Bar for Free Draw Mode -->
        <div id="stickersBar" class="w-full mt-3 pt-3 border-t-2 border-purple-100 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar hidden">
          <span class="text-xs font-bold text-slate-400 mr-1">Tap a Stamp:</span>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="⭐">⭐</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="🌸">🌸</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="🐱">🐱</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="🚀">🚀</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="💖">💖</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="🎈">🎈</button>
          <button class="text-2xl p-1 hover:scale-125 transition stamp-btn" data-stamp="🌈">🌈</button>
        </div>

        <!-- Canvas Controls (Clear, Confetti reward) -->
        <div class="flex items-center justify-between w-full mt-4 pt-3 border-t-2 border-purple-100">
          <button id="clearPaintBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm">
            🔄 New / Clear
          </button>
          <button id="celebratePaintBtn" class="bouncy-btn px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-1.5">
            <span>🎉 Beautiful! Collect ⭐</span>
          </button>
        </div>

      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 5: SHAPES & FIGURES -->
    <!-- ================================================================= -->
    <section id="sectionShapes" class="w-full flex flex-col items-center gap-5 hidden">
      
      <!-- Big Shape Explorer Card -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card-green p-6 sm:p-8 flex flex-col items-center text-center">
        
        <!-- Shape SVG Container -->
        <div id="shapeDisplayBox" class="w-40 h-40 flex items-center justify-center my-3 pop-in">
          <!-- Populated by SVG in JS -->
        </div>

        <h2 id="shapeName" class="text-3xl font-extrabold font-heading text-emerald-600">Circle</h2>
        <p id="shapeDescription" class="text-sm sm:text-base text-slate-600 font-medium mt-1">"A round shape like a clock or a yummy pancake!"</p>

        <!-- Hear Voice & Star -->
        <div class="flex items-center justify-center gap-3 mt-5 w-full">
          <button id="speakShapeBtn" class="bouncy-btn flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 border-2 border-white flex items-center justify-center gap-2">
            <span>🗣️ Hear Shape</span>
          </button>
          <button id="collectStarShapeBtn" class="bouncy-btn py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-400/25 border-2 border-white flex items-center gap-1.5">
            <span>⭐ I Know It!</span>
          </button>
        </div>

        <!-- Navigation Controls -->
        <div class="flex items-center justify-between w-full mt-6 pt-4 border-t-2 border-emerald-100">
          <button id="prevShapeBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm">
            ◀ Previous
          </button>
          <span id="shapeProgressText" class="text-xs font-bold text-slate-400">1 of 8</span>
          <button id="nextShapeBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md">
            Next ▶
          </button>
        </div>

      </div>

      <!-- Quick Pick Shapes Grid -->
      <div class="w-full max-w-2xl bg-white/90 rounded-3xl p-4 sm:p-5 border-2 border-emerald-200 shadow-sm">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-3">Explore All Shapes & Figures</h4>
        <div id="shapesGrid" class="grid grid-cols-4 sm:grid-cols-8 gap-2">
          <!-- Populated by JS -->
        </div>
      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 6: RHYMES & SING-ALONGS -->
    <!-- ================================================================= -->
    <section id="sectionRhymes" class="w-full flex flex-col items-center gap-5 hidden">
      
      <!-- Rhyme Selector Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto max-w-xl w-full no-scrollbar py-1">
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-rose-500 text-white border-2 border-rose-400 text-xs font-bold shadow-sm rhyme-select-btn" data-rhyme="twinkle">
          ⭐ Twinkle Twinkle
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-rose-300 text-xs font-bold shadow-sm rhyme-select-btn" data-rhyme="bus">
          🚌 Wheels on the Bus
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-rose-300 text-xs font-bold shadow-sm rhyme-select-btn" data-rhyme="sheep">
          🐑 Baa Baa Black Sheep
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-rose-300 text-xs font-bold shadow-sm rhyme-select-btn" data-rhyme="spider">
          🕷️ Itsy Bitsy Spider
        </button>
      </div>

      <!-- Big Rhyme Player Stage -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card p-6 sm:p-8 flex flex-col items-center text-center border-4 border-rose-300 relative overflow-hidden">
        
        <!-- Animated Visual Scene Card -->
        <div id="rhymeSceneEmoji" class="w-28 h-28 rounded-3xl bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-6xl shadow-inner mb-3 pop-in">
          🌟
        </div>

        <h2 id="rhymeTitle" class="text-2xl sm:text-3xl font-extrabold font-heading text-rose-600">Twinkle, Twinkle, Little Star</h2>
        
        <!-- Live Synchronized Lyric Box -->
        <div id="rhymeLyricsBox" class="w-full bg-rose-50/70 border-2 border-rose-200 rounded-2xl p-4 my-4 font-heading text-base sm:text-lg leading-relaxed text-slate-700 min-h-[140px] flex flex-col items-center justify-center">
          <p id="rhymeLine1" class="font-bold text-rose-600 transition">Twinkle, twinkle, little star,</p>
          <p id="rhymeLine2" class="text-slate-600 transition">How I wonder what you are!</p>
          <p id="rhymeLine3" class="text-slate-600 transition">Up above the world so high,</p>
          <p id="rhymeLine4" class="text-slate-600 transition">Like a diamond in the sky.</p>
        </div>

        <!-- Sing-Along Audio & Voice Controls -->
        <div class="flex items-center gap-3 w-full">
          <button id="playRhymeBtn" class="bouncy-btn flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-500/25 border-2 border-white flex items-center justify-center gap-2">
            <span id="playRhymeIcon">▶️</span>
            <span id="playRhymeText">Sing With Music!</span>
          </button>
          <button id="starRhymeBtn" class="bouncy-btn py-3 px-4 rounded-2xl bg-amber-400 text-amber-950 font-bold text-sm shadow-md border-2 border-white">
            ⭐ Sing Along Done!
          </button>
        </div>

      </div>

    </section>

    <!-- ================================================================= -->
    <!-- MODULE 7: INTERACTIVE STORYBOOKS -->
    <!-- ================================================================= -->
    <section id="sectionStories" class="w-full flex flex-col items-center gap-5 hidden">
      
      <!-- Story Selector Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto max-w-xl w-full no-scrollbar py-1">
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-indigo-600 text-white border-2 border-indigo-400 text-xs font-bold shadow-sm story-select-btn" data-story="bunny">
          🐰 Barnaby Bunny's Meadow
        </button>
        <button class="bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-indigo-300 text-xs font-bold shadow-sm story-select-btn" data-story="penguin">
          🚀 Pip's Rocket to the Moon
        </button>
      </div>

      <!-- Storybook Reading Stage -->
      <div class="w-full max-w-lg bg-white rounded-3xl chunky-card p-6 sm:p-8 flex flex-col items-center text-center border-4 border-indigo-300 relative">
        
        <!-- Page Illustration -->
        <div id="storyPageEmoji" class="w-32 h-32 rounded-3xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-7xl shadow-inner mb-4 pop-in">
          🐰
        </div>

        <h3 id="storyPageTitle" class="text-xl font-bold font-heading text-indigo-700 mb-2">Chapter 1: The Sunny Meadow</h3>
        
        <!-- Story Paragraph Box -->
        <div class="w-full bg-indigo-50/70 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 my-2 text-left min-h-[120px]">
          <p id="storyParagraph" class="text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
            Once upon a bright sunny morning, Barnaby the fluffy bunny hopped through the soft green grass. He discovered a sparkling carrot that could talk!
          </p>
        </div>

        <!-- Read Aloud Button -->
        <div class="flex items-center gap-3 w-full mt-3">
          <button id="readStoryAloudBtn" class="bouncy-btn flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/25 border-2 border-white flex items-center justify-center gap-2">
            <span>🗣️ Read Page to Me</span>
          </button>
        </div>

        <!-- Book Page Navigation -->
        <div class="flex items-center justify-between w-full mt-6 pt-4 border-t-2 border-indigo-100">
          <button id="prevStoryPageBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-indigo-100 text-indigo-800 font-bold text-xs sm:text-sm">
            ◀ Previous Page
          </button>
          <span id="storyProgressText" class="text-xs font-bold text-slate-400">Page 1 of 3</span>
          <button id="nextStoryPageBtn" class="bouncy-btn px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md">
            Next Page ▶
          </button>
        </div>

      </div>

    </section>

  </main>

  <!-- FOOTER -->
  <footer class="mt-8 py-4 border-t-2 border-amber-200 bg-white/70 text-center text-xs text-slate-500 font-medium">
    <p>🌟 WonderKids Academy • Made with love for happy, curious little learners</p>
  </footer>

  <!-- =======================================================================
       JAVASCRIPT: ENGINE, AUDIO SYNTH, SPEECH SYNTHESIS, CANVASES & DATA
       ======================================================================= -->
  <script>
    /* =======================================================================
       1. WEB AUDIO SYNTHESIZER (Pops, Sparkles, Chimes & Rhyme Melodies)
       ======================================================================= */
    class KidsAudio {
      constructor() {
        this.ctx = null;
        this.sfxEnabled = true;
        this.voiceEnabled = true;
        this.isUnlocked = false;
        this.initVoices();
      }

      getAudioContext() {
        if (!this.ctx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
            this.ctx = new AudioContext();
          }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        return this.ctx;
      }

      initVoices() {
        if ('speechSynthesis' in window) {
          try {
            window.speechSynthesis.getVoices();
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
              window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
              };
            }
          } catch(e) {}
        }
      }

      unlock() {
        if (this.isUnlocked) return;
        this.isUnlocked = true;
        const ctx = this.getAudioContext();
        if (ctx && ctx.state === 'suspended') {
          ctx.resume();
        }
        const banner = document.getElementById('audioWakeBanner');
        if (banner) {
          banner.style.opacity = '0';
          banner.style.pointerEvents = 'none';
          setTimeout(() => banner.classList.add('hidden'), 250);
        }
        // Play gentle introductory chime without blocking speech
        this.playTone(523.25, 'triangle', 0.15, 0.25);
        setTimeout(() => this.playTone(659.25, 'triangle', 0.15, 0.25), 100);
      }

      // Safe, rock-solid tone generator using setTargetAtTime (never throws, always audible)
      playTone(freq, type = 'sine', duration = 0.22, gainVal = 0.3) {
        if (!this.sfxEnabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = type;
          osc.frequency.setValueAtTime(freq, now);

          gain.gain.setValueAtTime(gainVal, now);
          gain.gain.linearRampToValueAtTime(0.001, now + duration);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + duration);
        } catch (e) {}
      }

      pop() {
        this.playTone(520, 'sine', 0.1, 0.35);
      }

      // Golden star earned fanfare
      starEarned() {
        this.playTone(523.25, 'triangle', 0.12, 0.35); // C5
        setTimeout(() => this.playTone(659.25, 'triangle', 0.12, 0.35), 90); // E5
        setTimeout(() => this.playTone(783.99, 'triangle', 0.12, 0.35), 180); // G5
        setTimeout(() => this.playTone(1046.50, 'triangle', 0.3, 0.4), 270); // C6
      }

      // Formant Acoustic Vocal Synthesizer (Simulates real human vowel tract formants F1 & F2)
      // Works 100% inside any sandboxed iframe without needing SpeechSynthesis permissions!
      playFormantVocal(vowel = 'ah', isGirl = true, duration = 0.4) {
        if (!this.sfxEnabled) return;
        const ctx = this.getAudioContext();
        if (!ctx) return;
        try {
          const now = ctx.currentTime;
          // Child fundamental voice pitch: 350Hz (Lily girl), 270Hz (Leo boy)
          const f0 = isGirl ? 350 : 270;

          // Vocal tract formant frequencies (F1, F2) for English vowels
          const formants = {
            ah: [850, 1250],
            eh: [530, 1840],
            ee: [300, 2300],
            oh: [500, 1000],
            oo: [350, 800],
            ay: [650, 2100],
            eye: [750, 1600]
          }[vowel.toLowerCase()] || [800, 1200];

          // Sawtooth oscillator produces natural vocal cord harmonics
          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(f0, now);
          osc.frequency.linearRampToValueAtTime(f0 * 0.96, now + duration);

          // Formant Filter 1 (Mouth opening)
          const f1 = ctx.createBiquadFilter();
          f1.type = 'bandpass';
          f1.frequency.setValueAtTime(formants[0], now);
          f1.Q.setValueAtTime(4.5, now);

          // Formant Filter 2 (Tongue position)
          const f2 = ctx.createBiquadFilter();
          f2.type = 'bandpass';
          f2.frequency.setValueAtTime(formants[1], now);
          f2.Q.setValueAtTime(5.5, now);

          const vocalGain = ctx.createGain();
          vocalGain.gain.setValueAtTime(0.01, now);
          vocalGain.gain.linearRampToValueAtTime(0.35, now + 0.06);
          vocalGain.gain.setTargetAtTime(0.001, now + duration * 0.5, duration * 0.25);

          osc.connect(f1);
          osc.connect(f2);
          f1.connect(vocalGain);
          f2.connect(vocalGain);
          vocalGain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + duration + 0.1);
        } catch (e) {
          console.warn('Formant error:', e);
        }
      }

      // Melodious child sing-song phonics signature
      playPhonicsMelody(letter, word, isGirl = true) {
        const charCode = letter.charCodeAt(0) - 65;
        // Base note tailored to letter
        const baseFreq = 440 + (charCode % 7) * 45;
        
        // 1. Vocal formant Ah / Eh / Ee / Oh
        const vowels = ['ah', 'eh', 'ee', 'oh', 'oo', 'ay', 'eye'];
        const chosenVowel = vowels[charCode % vowels.length];
        this.playFormantVocal(chosenVowel, isGirl, 0.45);

        // 2. Play sing-song musical arpeggio for the word
        setTimeout(() => this.playTone(baseFreq, 'triangle', 0.18, 0.35), 100);
        setTimeout(() => this.playTone(baseFreq * 1.25, 'triangle', 0.18, 0.35), 260);
        setTimeout(() => this.playTone(baseFreq * 1.5, 'triangle', 0.35, 0.4), 420);
      }

      playMelodicChime(isGirl = true) {
        if (!this.sfxEnabled) return;
        if (isGirl) {
          // Melodious harp sparkle
          this.playTone(659.25, 'sine', 0.14, 0.25); // E5
          setTimeout(() => this.playTone(880.00, 'sine', 0.16, 0.3), 80); // A5
          setTimeout(() => this.playTone(1174.66, 'sine', 0.25, 0.3), 160); // D6
        } else {
          // Playful boy chime
          this.playTone(440.00, 'triangle', 0.14, 0.3); // A4
          setTimeout(() => this.playTone(554.37, 'triangle', 0.14, 0.3), 80); // C#5
          setTimeout(() => this.playTone(659.25, 'triangle', 0.25, 0.35), 160); // E5
        }
      }

      // Unified Speech Function (Formant Synthesizer + SpeechSynthesis)
      speak(text, gender = 'girl') {
        const isGirl = gender === 'girl';
        this.updateNarratorBadge(isGirl);

        // 1. Play delightful melodic greeting chimes via Web Audio
        this.playMelodicChime(isGirl);

        if (!this.voiceEnabled) return;

        // 2. Browser Speech Synthesis without destructive cancel()
        if ('speechSynthesis' in window) {
          try {
            // If the browser paused speech synthesis in the background, resume it
            if (window.speechSynthesis.paused) {
              window.speechSynthesis.resume();
            }

            const UtterClass = window.SpeechSynthesisUtterance || SpeechSynthesisUtterance;
            if (UtterClass) {
              const utter = new UtterClass(text);
              utter.lang = 'en-US';
              utter.volume = 1.0;
              utter.pitch = isGirl ? 1.4 : 1.2;
              utter.rate = isGirl ? 0.92 : 0.96;

              utter.onstart = () => this.animateVoiceBadge(true);
              utter.onend = () => this.animateVoiceBadge(false);
              utter.onerror = (err) => {
                this.animateVoiceBadge(false);
                if (window.speechSynthesis.paused) window.speechSynthesis.resume();
              };

              // Safely queue speech without calling cancel() which aborts Chrome playback
              window.speechSynthesis.speak(utter);
            }
          } catch (e) {
            console.warn('Speech error:', e);
          }
        }
      }

      speakGirl(text) {
        this.speak(text, 'girl');
      }

      speakBoy(text) {
        this.speak(text, 'boy');
      }

      updateNarratorBadge(isGirl) {
        const emoji = document.getElementById('activeVoiceEmoji');
        const name = document.getElementById('activeVoiceName');
        const badge = document.getElementById('activeVoiceBadge');
        if (emoji && name && badge) {
          if (isGirl) {
            emoji.textContent = '👧';
            name.textContent = 'Lily (Girl)';
            badge.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-pink-50 border-2 border-pink-300 shadow-sm transition-all';
          } else {
            emoji.textContent = '👦';
            name.textContent = 'Leo (Boy)';
            badge.className = 'flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-sky-50 border-2 border-sky-300 shadow-sm transition-all';
          }
        }
      }

      animateVoiceBadge(speaking) {
        const waves = document.getElementById('soundWavesBox');
        if (waves) {
          if (speaking) waves.classList.remove('opacity-40');
          else waves.classList.add('opacity-40');
        }
      }
    }
    const sound = new KidsAudio();

    /* =======================================================================
       2. REWARD CONFETTI SYSTEM
       ======================================================================= */
    class ConfettiEffect {
      constructor() {
        this.canvas = document.getElementById('confettiCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
      }
      resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      }
      burst(x = window.innerWidth / 2, y = window.innerHeight / 2) {
        sound.starEarned();
        const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#facc15'];
        for (let i = 0; i < 60; i++) {
          this.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.7) * 14,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            alpha: 1
          });
        }
        if (!this.animId) this.animate();
      }
      animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.35; // gravity
          p.rotation += p.rotationSpeed;
          p.alpha -= 0.015;

          if (p.alpha <= 0) {
            this.particles.splice(i, 1);
            continue;
          }

          this.ctx.save();
          this.ctx.translate(p.x, p.y);
          this.ctx.rotate((p.rotation * Math.PI) / 180);
          this.ctx.fillStyle = p.color;
          this.ctx.globalAlpha = p.alpha;
          this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          this.ctx.restore();
        }

        if (this.particles.length > 0) {
          this.animId = requestAnimationFrame(() => this.animate());
        } else {
          this.animId = null;
        }
      }
    }

    /* =======================================================================
       3. CURRICULUM DATA: ALPHABET, NUMBERS, SHAPES, RHYMES & STORIES
       ======================================================================= */
    const ALPHABET_DATA = [
      { letter: 'A', word: 'Apple', emoji: '🍎', phonics: 'A is for Apple! Ah, ah, Apple!', isVowel: true },
      { letter: 'B', word: 'Butterfly', emoji: '🦋', phonics: 'B is for Butterfly! Buh, buh, Butterfly!', isVowel: false },
      { letter: 'C', word: 'Cat', emoji: '🐱', phonics: 'C is for Cat! Kuh, kuh, Cat!', isVowel: false },
      { letter: 'D', word: 'Dolphin', emoji: '🐬', phonics: 'D is for Dolphin! Duh, duh, Dolphin!', isVowel: false },
      { letter: 'E', word: 'Elephant', emoji: '🐘', phonics: 'E is for Elephant! Eh, eh, Elephant!', isVowel: true },
      { letter: 'F', word: 'Fish', emoji: '🐟', phonics: 'F is for Fish! Fuh, fuh, Fish!', isVowel: false },
      { letter: 'G', word: 'Giraffe', emoji: '🦒', phonics: 'G is for Giraffe! Juh, juh, Giraffe!', isVowel: false },
      { letter: 'H', word: 'Heart', emoji: '💖', phonics: 'H is for Heart! Huh, huh, Heart!', isVowel: false },
      { letter: 'I', word: 'Ice Cream', emoji: '🍦', phonics: 'I is for Ice Cream! Eye, eye, Ice Cream!', isVowel: true },
      { letter: 'J', word: 'Jellyfish', emoji: '🪼', phonics: 'J is for Jellyfish! Juh, juh, Jellyfish!', isVowel: false },
      { letter: 'K', word: 'Kite', emoji: '🪁', phonics: 'K is for Kite! Kuh, kuh, Kite!', isVowel: false },
      { letter: 'L', word: 'Lion', emoji: '🦁', phonics: 'L is for Lion! Lull, lull, Lion!', isVowel: false },
      { letter: 'M', word: 'Monkey', emoji: '🐵', phonics: 'M is for Monkey! Mmm, mmm, Monkey!', isVowel: false },
      { letter: 'N', word: 'Nest', emoji: '🪺', phonics: 'N is for Nest! Nnn, nnn, Nest!', isVowel: false },
      { letter: 'O', word: 'Owl', emoji: '🦉', phonics: 'O is for Owl! Ow, ow, Owl!', isVowel: true },
      { letter: 'P', word: 'Penguin', emoji: '🐧', phonics: 'P is for Penguin! Puh, puh, Penguin!', isVowel: false },
      { letter: 'Q', word: 'Queen', emoji: '👑', phonics: 'Q is for Queen! Kwuh, kwuh, Queen!', isVowel: false },
      { letter: 'R', word: 'Rainbow', emoji: '🌈', phonics: 'R is for Rainbow! Ruh, ruh, Rainbow!', isVowel: false },
      { letter: 'S', word: 'Sun', emoji: '☀️', phonics: 'S is for Sun! Sss, sss, Sun!', isVowel: false },
      { letter: 'T', word: 'Tiger', emoji: '🐯', phonics: 'T is for Tiger! Tuh, tuh, Tiger!', isVowel: false },
      { letter: 'U', word: 'Umbrella', emoji: '☂️', phonics: 'U is for Umbrella! Uh, uh, Umbrella!', isVowel: true },
      { letter: 'V', word: 'Violin', emoji: '🎻', phonics: 'V is for Violin! Vuh, vuh, Violin!', isVowel: false },
      { letter: 'W', word: 'Whale', emoji: '🐳', phonics: 'W is for Whale! Wuh, wuh, Whale!', isVowel: false },
      { letter: 'X', word: 'Xylophone', emoji: '🎵', phonics: 'X is for Xylophone! Zz, zz, Xylophone!', isVowel: false },
      { letter: 'Y', word: 'Yo-Yo', emoji: '🪀', phonics: 'Y is for Yo-Yo! Yuh, yuh, Yo-Yo!', isVowel: false },
      { letter: 'Z', word: 'Zebra', emoji: '🦓', phonics: 'Z is for Zebra! Zzz, zzz, Zebra!', isVowel: false }
    ];

    const NUMBER_WORDS = [
      '', 'One', 'Two', 'Three', 'Four', 'Five',
      'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
      'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty'
    ];

    const SHAPES_DATA = [
      { name: 'Circle', desc: 'Round like a yummy pancake or a big smiling clock!', icon: '🟡', type: 'circle' },
      { name: 'Square', desc: 'Four equal sides like a fun building block!', icon: '🟧', type: 'square' },
      { name: 'Triangle', desc: 'Three pointy corners like a slice of delicious pizza!', icon: '🔺', type: 'triangle' },
      { name: 'Star', desc: 'Five twinkling arms shining high in the night sky!', icon: '⭐', type: 'star' },
      { name: 'Heart', desc: 'Full of love and kindness for your family and friends!', icon: '💖', type: 'heart' },
      { name: 'Diamond', desc: 'Sparkly tilted square like a high-flying kite!', icon: '🔷', type: 'diamond' },
      { name: 'Rectangle', desc: 'Two long sides and two short sides like a storybook!', icon: '🚪', type: 'rectangle' },
      { name: 'Oval', desc: 'An egg-shaped curve ready to roll and bounce!', icon: '🥚', type: 'oval' }
    ];

    const RHYMES_DATA = {
      twinkle: {
        title: "Twinkle, Twinkle, Little Star",
        emoji: "🌟",
        lines: [
          "Twinkle, twinkle, little star,",
          "How I wonder what you are!",
          "Up above the world so high,",
          "Like a diamond in the sky."
        ],
        notes: [261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00]
      },
      bus: {
        title: "The Wheels on the Bus",
        emoji: "🚌",
        lines: [
          "The wheels on the bus go round and round,",
          "Round and round, round and round!",
          "The wheels on the bus go round and round,",
          "All through the town!"
        ],
        notes: [261.63, 329.63, 392.00, 329.63, 261.63, 392.00]
      },
      sheep: {
        title: "Baa, Baa, Black Sheep",
        emoji: "🐑",
        lines: [
          "Baa, baa, black sheep, have you any wool?",
          "Yes sir, yes sir, three bags full!",
          "One for the master, and one for the dame,",
          "And one for the little boy who lives down the lane!"
        ],
        notes: [261.63, 261.63, 392.00, 392.00, 440.00, 440.00, 392.00]
      },
      spider: {
        title: "The Itsy Bitsy Spider",
        emoji: "🕷️",
        lines: [
          "The itsy bitsy spider climbed up the water spout,",
          "Down came the rain and washed the spider out!",
          "Out came the sunshine and dried up all the rain,",
          "And the itsy bitsy spider climbed up the spout again!"
        ],
        notes: [329.63, 261.63, 293.66, 329.63, 392.00]
      }
    };

    const STORIES_DATA = {
      bunny: {
        title: "Barnaby the Bunny's Big Adventure",
        pages: [
          {
            chapter: "Chapter 1: The Sunny Meadow",
            emoji: "🐰",
            text: "Once upon a bright sunny morning, Barnaby the fluffy bunny hopped through the soft green grass. He discovered a sparkling carrot that could talk!"
          },
          {
            chapter: "Chapter 2: The Whispering Woods",
            emoji: "🌲",
            text: "The singing carrot told Barnaby about a magical party deep in the woods. Together with Bella the bluebird, they solved riddles under ancient friendly trees."
          },
          {
            chapter: "Chapter 3: The Rainbow Feast",
            emoji: "🌈",
            text: "All the forest animals shared berries, smiles, and laughter under a giant rainbow. Barnaby realized that sharing makes every adventure ten times sweeter!"
          }
        ]
      },
      penguin: {
        title: "Pip the Penguin Visits the Stars",
        pages: [
          {
            chapter: "Chapter 1: Pip's Big Dream",
            emoji: "🐧",
            text: "Pip was a little penguin in Antarctica who loved staring at the night sky. While other penguins slid on ice, Pip sketched dreams of flying to the stars."
          },
          {
            chapter: "Chapter 2: Building the Rocket",
            emoji: "🚀",
            text: "Using shiny icicles, bright balloons, and warm friendship, Pip and the polar bear built a gleaming space rocket. 3... 2... 1... Blastoff!"
          },
          {
            chapter: "Chapter 3: Dancing on the Moon",
            emoji: "🌕",
            text: "Pip landed softly on the glowing moon and danced in zero gravity! He planted a flag of friendship and waved hello to everyone back on Earth."
          }
        ]
      }
    };

    /* =======================================================================
       4. APPLICATION CONTROLLER
       ======================================================================= */
    class WonderKidsApp {
      constructor() {
        this.confetti = new ConfettiEffect();
        this.stars = 0;
        
        // Navigation sections
        this.sections = {
          abc: document.getElementById('sectionAbc'),
          '123': document.getElementById('section123'),
          trace: document.getElementById('sectionTrace'),
          paint: document.getElementById('sectionPaint'),
          shapes: document.getElementById('sectionShapes'),
          rhymes: document.getElementById('sectionRhymes'),
          stories: document.getElementById('sectionStories')
        };
        this.navBtns = {
          abc: document.getElementById('navBtnAbc'),
          '123': document.getElementById('navBtn123'),
          trace: document.getElementById('navBtnTrace'),
          paint: document.getElementById('navBtnPaint'),
          shapes: document.getElementById('navBtnShapes'),
          rhymes: document.getElementById('navBtnRhymes'),
          stories: document.getElementById('navBtnStories')
        };

        // State trackers
        this.abcIndex = 0;
        this.abcVowelOnly = false;
        
        this.numValue = 5;
        this.numTappedCount = 0;

        this.traceCategory = 'print'; // print, cursive, num, shapes
        this.traceItemIndex = 0;
        this.traceColor = '#0284c7';

        this.paintMode = 'coloring'; // coloring or free
        this.currentColorTemplate = 'teddy';
        this.paintColor = '#ef4444';
        this.paintBrushSize = 12;

        this.shapeIndex = 0;

        this.currentRhymeKey = 'twinkle';
        this.rhymePlaying = false;

        this.currentStoryKey = 'bunny';
        this.storyPageIndex = 0;

        this.initDOM();
        this.initEvents();
        this.initAlphabet();
        this.initNumbers();
        this.initTracing();
        this.initPainting();
        this.initShapes();
        this.initRhymes();
        this.initStories();
      }

      initDOM() {
        this.starCounter = document.getElementById('starCounter');
      }

      addStars(count = 1) {
        this.stars += count;
        this.starCounter.textContent = this.stars;
        this.confetti.burst();
      }

      initEvents() {
        // App bar sound toggles
        const sfxToggleBtn = document.getElementById('sfxToggleBtn');
        const sfxIcon = document.getElementById('sfxIcon');
        const sfxLabel = document.getElementById('sfxLabel');
        sfxToggleBtn.addEventListener('click', () => {
          sound.sfxEnabled = !sound.sfxEnabled;
          sfxIcon.textContent = sound.sfxEnabled ? '🔊' : '🔇';
          sfxLabel.textContent = sound.sfxEnabled ? 'Sound On' : 'Muted';
          if (sound.sfxEnabled) sound.pop();
        });

        const voiceToggleBtn = document.getElementById('voiceToggleBtn');
        const voiceIcon = document.getElementById('voiceIcon');
        const voiceLabel = document.getElementById('voiceLabel');
        voiceToggleBtn.addEventListener('click', () => {
          sound.voiceEnabled = !sound.voiceEnabled;
          voiceIcon.textContent = sound.voiceEnabled ? '🗣️' : '🤐';
          voiceLabel.textContent = sound.voiceEnabled ? 'Voice On' : 'Voice Off';
          if (sound.voiceEnabled) sound.speak('Voice is on!');
        });

                // First user click unlocks browser AudioContext and welcomes user
        const wakeBanner = document.getElementById('audioWakeBanner');
        if (wakeBanner) {
          wakeBanner.addEventListener('click', () => sound.unlock());
        }
        document.body.addEventListener('click', () => {
          if (!sound.isUnlocked) sound.unlock();
        }, { once: true });

                // Open in new tab button logic
        const openNewTabBtn = document.getElementById('openNewTabBtn');
        if (openNewTabBtn) {
          openNewTabBtn.addEventListener('click', () => {
            try {
              const htmlSource = document.documentElement.outerHTML;
              const blob = new Blob([htmlSource], { type: 'text/html' });
              const blobUrl = URL.createObjectURL(blob);
              window.open(blobUrl, '_blank');
            } catch(e) {
              if (window.location && window.location.href) window.open(window.location.href, '_blank');
            }
          });
        }

        document.getElementById('brandLogoHome').addEventListener('click', () => this.switchSection('abc'));

        // Nav pill tabs
        Object.keys(this.navBtns).forEach(key => {
          this.navBtns[key].addEventListener('click', () => this.switchSection(key));
        });
      }

      switchSection(targetKey) {
        sound.pop();
        Object.keys(this.sections).forEach(key => {
          if (key === targetKey) {
            this.sections[key].classList.remove('hidden');
            this.navBtns[key].className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-pink-500 text-white shadow-md border-2 border-pink-400 flex items-center gap-1.5 transition";
          } else {
            this.sections[key].classList.add('hidden');
            this.navBtns[key].className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 hover:bg-amber-100 border-2 border-slate-200 flex items-center gap-1.5 transition";
          }
        });

        // Melodious tab introductions alternating between Lily (Girl 👧) and Leo (Boy 👦)
        if (targetKey === 'abc') {
          sound.speakGirl("Hi! I'm Lily! Let's learn the Alphabet and special Vowels together!");
        } else if (targetKey === '123') {
          sound.speakBoy("Hey there! I'm Leo! Let's count numbers and pop balloons!");
        } else if (targetKey === 'trace') {
          sound.speakGirl("Magic Tracing Studio! Follow the sparkly lines with your glowing brush!");
          setTimeout(() => this.drawTraceGuide(), 50);
        } else if (targetKey === 'paint') {
          sound.speakBoy("Welcome to the Art Studio! Pick any color and let's paint!");
          setTimeout(() => this.loadColoringTemplate(this.currentColorTemplate), 50);
        } else if (targetKey === 'shapes') {
          sound.speakGirl("Look at all these wonderful shapes and figures! Tap one to explore!");
        } else if (targetKey === 'rhymes') {
          sound.speakBoy("Sing-along time! Sing and dance with me!");
        } else if (targetKey === 'stories') {
          sound.speakGirl("Storytime adventure! Let's read a magical story together!");
        }
      }

      /* =====================================================================
         MODULE 1: ALPHABET & VOWELS
         ===================================================================== */
      initAlphabet() {
        const grid = document.getElementById('alphabetGrid');
        grid.innerHTML = '';
        ALPHABET_DATA.forEach((item, idx) => {
          const btn = document.createElement('button');
          btn.className = `p-2 rounded-xl text-center font-bold text-sm sm:text-base border-2 transition bouncy-btn ${
            item.isVowel ? 'bg-amber-100 border-amber-400 text-amber-900' : 'bg-pink-50 border-pink-200 text-pink-800'
          }`;
          btn.textContent = item.letter;
          btn.addEventListener('click', () => {
            this.abcIndex = idx;
            this.renderAlphabetCard();
            sound.pop();
            const item = ALPHABET_DATA[idx];
            if (item.isVowel) sound.speakGirl(`${item.letter}! ${item.word}!`);
            else sound.speakBoy(`${item.letter}! ${item.word}!`);
          });
          grid.appendChild(btn);
        });

        document.getElementById('prevLetterBtn').addEventListener('click', () => {
          this.abcIndex = (this.abcIndex - 1 + ALPHABET_DATA.length) % ALPHABET_DATA.length;
          this.renderAlphabetCard();
          sound.pop();
        });
        document.getElementById('nextLetterBtn').addEventListener('click', () => {
          this.abcIndex = (this.abcIndex + 1) % ALPHABET_DATA.length;
          this.renderAlphabetCard();
          sound.pop();
        });

                document.getElementById('speakLetterBtn').addEventListener('click', () => {
          const item = ALPHABET_DATA[this.abcIndex];
          const btn = document.getElementById('speakLetterBtn');
          const pill = document.getElementById('pronounceStatusPill');
          const pillText = document.getElementById('pronounceStatusText');
          const pillIcon = document.getElementById('pronounceStatusIcon');

          // Ensure audio context is running immediately on user click
          const ctx = sound.getAudioContext();
          if (ctx && ctx.state === 'suspended') ctx.resume();

          // Button active animation
          btn.classList.add('ring-4', 'ring-pink-400', 'scale-105');
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<span>🔊 Pronouncing: "${item.letter}"</span>`;

          // Update status pill with subtitle
          if (pill && pillText) {
            pill.className = "mt-2.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-bold text-emerald-800 flex items-center justify-center gap-1.5 transition-all animate-pulse";
            pillIcon.textContent = "🔊";
            pillText.textContent = `Speaking: "${item.letter} is for ${item.word}!"`;
          }

          setTimeout(() => {
            btn.classList.remove('ring-4', 'ring-pink-400', 'scale-105');
            btn.innerHTML = originalHTML;
            if (pill && pillText) {
              pill.className = "mt-2.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[11px] font-semibold text-pink-700 flex items-center justify-center gap-1.5 transition-all";
              pillIcon.textContent = "📢";
              pillText.textContent = `Just heard: "${item.letter} for ${item.word}" • Tap again to replay!`;
            }
          }, 2400);

          // 1. Play loud, cheerful 3-note child phonics chord
          sound.playTone(523.25, 'triangle', 0.22, 0.45); // C5
          setTimeout(() => sound.playTone(659.25, 'triangle', 0.22, 0.45), 110); // E5
          setTimeout(() => sound.playTone(783.99, 'triangle', 0.35, 0.5), 220); // G5

          // 2. Play acoustic vocal formant (works even if speech synthesis is blocked)
          sound.playFormantVocal(item.isVowel ? 'ah' : 'eh', item.isVowel, 0.4);

          // 3. Dispatch Speech Synthesis
          const cleanText = `${item.letter}! ${item.letter} is for ${item.word}! ${item.word}!`;
          if (item.isVowel) {
            sound.speakGirl(cleanText);
          } else {
            sound.speakBoy(cleanText);
          }
        });

        document.getElementById('collectStarAbcBtn').addEventListener('click', () => {
          this.addStars(1);
          const item = ALPHABET_DATA[this.abcIndex];
          if (item.isVowel) {
            sound.speakGirl("Great job learning vowel " + item.letter + "! You earned a star!");
          } else {
            sound.speakBoy("Awesome job! You mastered letter " + item.letter + "!");
          }
        });

        document.getElementById('abcFilterAllBtn').addEventListener('click', () => {
          this.abcVowelOnly = false;
          document.getElementById('abcFilterAllBtn').className = "bouncy-btn px-3 py-1 rounded-xl text-xs font-bold bg-pink-500 text-white shadow-sm";
          document.getElementById('abcFilterVowelsBtn').className = "bouncy-btn px-3 py-1 rounded-xl text-xs font-bold text-pink-700 hover:bg-pink-100";
          this.renderAlphabetCard();
        });

        document.getElementById('abcFilterVowelsBtn').addEventListener('click', () => {
          this.abcVowelOnly = true;
          document.getElementById('abcFilterVowelsBtn').className = "bouncy-btn px-3 py-1 rounded-xl text-xs font-bold bg-pink-500 text-white shadow-sm";
          document.getElementById('abcFilterAllBtn').className = "bouncy-btn px-3 py-1 rounded-xl text-xs font-bold text-pink-700 hover:bg-pink-100";
          // Jump to vowel
          if (!ALPHABET_DATA[this.abcIndex].isVowel) {
            this.abcIndex = 0; // A
          }
          this.renderAlphabetCard();
        });

        this.renderAlphabetCard();
      }

      renderAlphabetCard() {
        const item = ALPHABET_DATA[this.abcIndex];
        document.getElementById('bigLetterUpper').textContent = item.letter;
        document.getElementById('bigLetterLower').textContent = item.letter.toLowerCase();
        document.getElementById('letterEmoji').textContent = item.emoji;
        document.getElementById('letterWord').textContent = item.word;
        document.getElementById('letterPhonicsSentence').textContent = `"${item.phonics}"`;
        document.getElementById('letterProgressText').textContent = `${this.abcIndex + 1} of 26`;

        const badge = document.getElementById('vowelBadge');
        if (item.isVowel) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
      }

      /* =====================================================================
         MODULE 2: 123 NUMBERS & POP COUNTING
         ===================================================================== */
      initNumbers() {
        const grid = document.getElementById('numbersGrid');
        grid.innerHTML = '';
        for (let i = 1; i <= 20; i++) {
          const btn = document.createElement('button');
          btn.className = "py-2 px-1 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-900 font-bold text-sm text-center bouncy-btn";
          btn.textContent = i;
          btn.addEventListener('click', () => {
            this.numValue = i;
            this.renderNumberCard();
            sound.pop();
            if (i % 2 === 1) sound.speakBoy(`Number ${i}! ${NUMBER_WORDS[i]}!`);
            else sound.speakGirl(`Number ${i}! ${NUMBER_WORDS[i]}!`);
          });
          grid.appendChild(btn);
        }

        document.getElementById('prevNumberBtn').addEventListener('click', () => {
          this.numValue = this.numValue > 1 ? this.numValue - 1 : 20;
          this.renderNumberCard();
          sound.pop();
        });
        document.getElementById('nextNumberBtn').addEventListener('click', () => {
          this.numValue = this.numValue < 20 ? this.numValue + 1 : 1;
          this.renderNumberCard();
          sound.pop();
        });

        document.getElementById('speakNumberBtn').addEventListener('click', () => {
          if (this.numValue % 2 === 1) {
            sound.speakBoy(`Number ${this.numValue}! ${NUMBER_WORDS[this.numValue]}!`);
          } else {
            sound.speakGirl(`Number ${this.numValue}! ${NUMBER_WORDS[this.numValue]}!`);
          }
        });

        document.getElementById('collectStarNumberBtn').addEventListener('click', () => {
          this.addStars(1);
          if (this.numValue % 2 === 1) {
            sound.speakBoy(`Super counting! You mastered number ${this.numValue}!`);
          } else {
            sound.speakGirl(`Fantastic! You know number ${this.numValue}!`);
          }
        });

        this.renderNumberCard();
      }

      renderNumberCard() {
        this.numTappedCount = 0;
        document.getElementById('bigNumberDigit').textContent = this.numValue;
        document.getElementById('numberWord').textContent = NUMBER_WORDS[this.numValue];
        document.getElementById('numberProgressText').textContent = `${this.numValue} of 20`;
        document.getElementById('tappedCountSpan').textContent = '0';
        document.getElementById('targetCountSpan').textContent = this.numValue;

        const container = document.getElementById('countingItemsContainer');
        container.innerHTML = '';
        const emojis = ['🎈', '⭐', '🍓', '🧁', '🍪', '🐱', '🚀', '🌺'];
        const chosenEmoji = emojis[(this.numValue - 1) % emojis.length];

        for (let i = 0; i < this.numValue; i++) {
          const item = document.createElement('button');
          item.className = "text-3xl sm:text-4xl p-2 rounded-2xl bg-white border-2 border-amber-200 shadow-sm bouncy-btn cursor-pointer";
          item.textContent = chosenEmoji;
          item.addEventListener('click', () => {
            if (!item.classList.contains('tapped')) {
              item.classList.add('tapped', 'opacity-40', 'scale-90');
              this.numTappedCount++;
              document.getElementById('tappedCountSpan').textContent = this.numTappedCount;
              sound.pop();
              if (this.numTappedCount % 2 === 1) {
                sound.speakBoy(this.numTappedCount.toString());
              } else {
                sound.speakGirl(this.numTappedCount.toString());
              }
              if (this.numTappedCount === this.numValue) {
                this.addStars(1);
                sound.speakGirl(`Hooray! You popped all ${this.numValue}! Fantastic job!`);
              }
            }
          });
          container.appendChild(item);
        }
      }

      /* =====================================================================
         MODULE 3: MAGIC TRACING STUDIO
         ===================================================================== */
      initTracing() {
        this.traceCanvas = document.getElementById('traceCanvas');
        this.traceCtx = this.traceCanvas.getContext('2d');
        this.isTracing = false;

        const startTrace = (e) => {
          this.isTracing = true;
          const pos = this.getCanvasPos(this.traceCanvas, e);
          this.traceCtx.beginPath();
          this.traceCtx.moveTo(pos.x, pos.y);
          sound.pop();
        };
        const moveTrace = (e) => {
          if (!this.isTracing) return;
          const pos = this.getCanvasPos(this.traceCanvas, e);
          this.traceCtx.lineTo(pos.x, pos.y);
          this.traceCtx.strokeStyle = this.traceColor;
          this.traceCtx.lineWidth = 16;
          this.traceCtx.lineCap = 'round';
          this.traceCtx.lineJoin = 'round';
          this.traceCtx.stroke();
        };
        const endTrace = () => {
          this.isTracing = false;
        };

        this.traceCanvas.addEventListener('mousedown', startTrace);
        this.traceCanvas.addEventListener('mousemove', moveTrace);
        window.addEventListener('mouseup', endTrace);

        this.traceCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); startTrace(e.touches[0]); });
        this.traceCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); moveTrace(e.touches[0]); });
        this.traceCanvas.addEventListener('touchend', endTrace);

        // Color selector
        document.querySelectorAll('.trace-color-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.traceColor = btn.dataset.color;
            sound.pop();
          });
        });

        // Clear and Done buttons
        document.getElementById('clearTraceBtn').addEventListener('click', () => {
          this.drawTraceGuide();
          sound.pop();
        });

        document.getElementById('completeTraceBtn').addEventListener('click', () => {
          this.addStars(1);
          sound.speakGirl("Sparkling and beautiful! You're an amazing writer!");
        });

        document.getElementById('speakTraceBtn').addEventListener('click', () => {
          const list = this.getTraceList();
          const char = list[this.traceItemIndex] || 'A';
          sound.speakGirl(`Let's trace ${char}! Follow the sparkly dotted lines!`);
        });

        // Category switches
        const setCategory = (cat) => {
          this.traceCategory = cat;
          this.traceItemIndex = 0;
          this.updateTraceChips();
          this.drawTraceGuide();
          sound.pop();
        };

        document.getElementById('traceModePrintBtn').addEventListener('click', () => setCategory('print'));
        document.getElementById('traceModeCursiveBtn').addEventListener('click', () => setCategory('cursive'));
        document.getElementById('traceModeNumBtn').addEventListener('click', () => setCategory('num'));
        document.getElementById('traceModeShapesBtn').addEventListener('click', () => setCategory('shapes'));

        document.getElementById('prevTraceBtn').addEventListener('click', () => {
          const list = this.getTraceList();
          this.traceItemIndex = (this.traceItemIndex - 1 + list.length) % list.length;
          this.drawTraceGuide();
          sound.pop();
        });
        document.getElementById('nextTraceBtn').addEventListener('click', () => {
          const list = this.getTraceList();
          this.traceItemIndex = (this.traceItemIndex + 1) % list.length;
          this.drawTraceGuide();
          sound.pop();
        });

        this.updateTraceChips();
        this.drawTraceGuide();
      }

      getTraceList() {
        if (this.traceCategory === 'print') return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        if (this.traceCategory === 'cursive') return 'abcdefghijklmnopqrstuvwxyz'.split('');
        if (this.traceCategory === 'num') return '0123456789'.split('');
        return ['Circle', 'Square', 'Triangle', 'Star', 'Heart'];
      }

      updateTraceChips() {
        const container = document.getElementById('traceItemChipsContainer');
        container.innerHTML = '';
        const list = this.getTraceList();
        list.slice(0, 10).forEach((item, idx) => {
          const chip = document.createElement('button');
          chip.className = "px-2 py-0.5 rounded-lg bg-sky-100 text-sky-800 text-xs font-bold bouncy-btn flex-shrink-0";
          chip.textContent = item;
          chip.addEventListener('click', () => {
            this.traceItemIndex = idx;
            this.drawTraceGuide();
            sound.pop();
          });
          container.appendChild(chip);
        });
      }

      drawTraceGuide() {
        const ctx = this.traceCtx;
        const w = this.traceCanvas.width;
        const h = this.traceCanvas.height;
        ctx.clearRect(0, 0, w, h);

        const list = this.getTraceList();
        const char = list[this.traceItemIndex] || 'A';
        document.getElementById('traceTargetName').textContent = `Trace: ${char}`;

        // Draw guideline lines
        ctx.save();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, h * 0.25); ctx.lineTo(w - 20, h * 0.25);
        ctx.moveTo(20, h * 0.5);  ctx.lineTo(w - 20, h * 0.5);
        ctx.moveTo(20, h * 0.75); ctx.lineTo(w - 20, h * 0.75);
        ctx.stroke();

        // Draw character / shape dotted outline
        ctx.font = this.traceCategory === 'cursive' ? 'italic 160px "Brush Script MT", cursive, sans-serif' : 'bold 180px Fredoka, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.setLineDash([8, 8]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#94a3b8';
        ctx.strokeText(char, w / 2, h / 2 + 10);
        ctx.setLineDash([]);
        ctx.restore();
      }

      /* =====================================================================
         MODULE 4: COLORING & PAINTING STUDIO
         ===================================================================== */
      initPainting() {
        this.drawCanvas = document.getElementById('drawCanvas');
        this.drawCtx = this.drawCanvas.getContext('2d');
        this.isPainting = false;

        const startPaint = (e) => {
          this.isPainting = true;
          const pos = this.getCanvasPos(this.drawCanvas, e);
          this.drawCtx.beginPath();
          this.drawCtx.moveTo(pos.x, pos.y);
          sound.pop();
        };
        const movePaint = (e) => {
          if (!this.isPainting) return;
          const pos = this.getCanvasPos(this.drawCanvas, e);
          this.drawCtx.lineTo(pos.x, pos.y);
          this.drawCtx.strokeStyle = this.paintColor;
          this.drawCtx.lineWidth = this.paintBrushSize;
          this.drawCtx.lineCap = 'round';
          this.drawCtx.lineJoin = 'round';
          this.drawCtx.stroke();
        };
        const endPaint = () => {
          this.isPainting = false;
        };

        this.drawCanvas.addEventListener('mousedown', startPaint);
        this.drawCanvas.addEventListener('mousemove', movePaint);
        window.addEventListener('mouseup', endPaint);

        this.drawCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPaint(e.touches[0]); });
        this.drawCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); movePaint(e.touches[0]); });
        this.drawCanvas.addEventListener('touchend', endPaint);

        // Color selector
        document.querySelectorAll('.paint-color-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.paintColor = btn.dataset.color;
            sound.pop();
          });
        });

        // Brush size
        document.getElementById('brushSizeSmallBtn').addEventListener('click', () => { this.paintBrushSize = 6; sound.pop(); });
        document.getElementById('brushSizeMedBtn').addEventListener('click', () => { this.paintBrushSize = 14; sound.pop(); });
        document.getElementById('brushSizeLargeBtn').addEventListener('click', () => { this.paintBrushSize = 24; sound.pop(); });

        // Tabs
        document.getElementById('paintTabColoringBtn').addEventListener('click', () => {
          this.paintMode = 'coloring';
          document.getElementById('coloringTemplatesBar').classList.remove('hidden');
          document.getElementById('stickersBar').classList.add('hidden');
          document.getElementById('paintTabColoringBtn').className = "bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-500 text-white shadow-sm";
          document.getElementById('paintTabFreeDrawBtn').className = "bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-purple-800 hover:bg-purple-100";
          this.loadColoringTemplate(this.currentColorTemplate);
          sound.pop();
        });

        document.getElementById('paintTabFreeDrawBtn').addEventListener('click', () => {
          this.paintMode = 'free';
          document.getElementById('coloringTemplatesBar').classList.add('hidden');
          document.getElementById('stickersBar').classList.remove('hidden');
          document.getElementById('paintTabFreeDrawBtn').className = "bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-purple-500 text-white shadow-sm";
          document.getElementById('paintTabColoringBtn').className = "bouncy-btn px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-purple-800 hover:bg-purple-100";
          this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
          sound.pop();
        });

        // Templates selection
        document.querySelectorAll('.color-template-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.currentColorTemplate = btn.dataset.template;
            this.loadColoringTemplate(this.currentColorTemplate);
            sound.pop();
          });
        });

        // Stamp stickers
        document.querySelectorAll('.stamp-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const stamp = btn.dataset.stamp;
            this.drawCtx.font = '40px sans-serif';
            this.drawCtx.textAlign = 'center';
            this.drawCtx.textBaseline = 'middle';
            this.drawCtx.fillText(stamp, 180 + (Math.random() - 0.5) * 160, 180 + (Math.random() - 0.5) * 160);
            sound.pop();
          });
        });

        document.getElementById('clearPaintBtn').addEventListener('click', () => {
          if (this.paintMode === 'coloring') this.loadColoringTemplate(this.currentColorTemplate);
          else this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
          sound.pop();
        });

        document.getElementById('celebratePaintBtn').addEventListener('click', () => {
          this.addStars(1);
          sound.speakBoy("Whoa, that looks awesome! You are a brilliant artist!");
        });

        this.loadColoringTemplate('teddy');
      }

      loadColoringTemplate(tpl) {
        const ctx = this.drawCtx;
        const w = this.drawCanvas.width;
        const h = this.drawCanvas.height;
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (tpl === 'teddy') {
          // Teddy head
          ctx.beginPath(); ctx.arc(180, 180, 80, 0, Math.PI * 2); ctx.stroke();
          // Ears
          ctx.beginPath(); ctx.arc(115, 115, 30, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.arc(245, 115, 30, 0, Math.PI * 2); ctx.stroke();
          // Eyes
          ctx.fillStyle = '#1e293b';
          ctx.beginPath(); ctx.arc(150, 160, 8, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(210, 160, 8, 0, Math.PI * 2); ctx.fill();
          // Muzzle & Nose
          ctx.beginPath(); ctx.arc(180, 195, 30, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.arc(180, 185, 10, 0, Math.PI * 2); ctx.fill();
          // Smile
          ctx.beginPath(); ctx.arc(180, 195, 16, 0.2 * Math.PI, 0.8 * Math.PI); ctx.stroke();
        } else if (tpl === 'rocket') {
          // Body
          ctx.beginPath();
          ctx.moveTo(180, 50);
          ctx.bezierCurveTo(240, 120, 240, 260, 210, 280);
          ctx.lineTo(150, 280);
          ctx.bezierCurveTo(120, 260, 120, 120, 180, 50);
          ctx.stroke();
          // Window
          ctx.beginPath(); ctx.arc(180, 160, 30, 0, Math.PI * 2); ctx.stroke();
          // Wings
          ctx.beginPath(); ctx.moveTo(130, 220); ctx.lineTo(80, 290); ctx.lineTo(140, 280); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(230, 220); ctx.lineTo(280, 290); ctx.lineTo(220, 280); ctx.stroke();
          // Flame
          ctx.beginPath(); ctx.moveTo(160, 280); ctx.lineTo(180, 330); ctx.lineTo(200, 280); ctx.stroke();
        } else {
          // Butterfly / Star default
          ctx.beginPath(); ctx.arc(180, 180, 90, 0, Math.PI * 2); ctx.stroke();
          ctx.font = '120px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.strokeText(tpl === 'butterfly' ? '🦋' : (tpl === 'castle' ? '🏰' : '🦕'), 180, 180);
        }

        ctx.restore();
      }

      /* =====================================================================
         MODULE 5: SHAPES & FIGURES
         ===================================================================== */
      initShapes() {
        const grid = document.getElementById('shapesGrid');
        grid.innerHTML = '';
        SHAPES_DATA.forEach((item, idx) => {
          const btn = document.createElement('button');
          btn.className = "p-2 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-bold text-xs text-center bouncy-btn flex flex-col items-center gap-1";
          btn.innerHTML = `<span class="text-xl">${item.icon}</span><span>${item.name}</span>`;
          btn.addEventListener('click', () => {
            this.shapeIndex = idx;
            this.renderShapeCard();
            sound.pop();
            const shape = SHAPES_DATA[idx];
            if (idx % 2 === 0) sound.speakGirl(`${shape.name}!`);
            else sound.speakBoy(`${shape.name}!`);
          });
          grid.appendChild(btn);
        });

        document.getElementById('prevShapeBtn').addEventListener('click', () => {
          this.shapeIndex = (this.shapeIndex - 1 + SHAPES_DATA.length) % SHAPES_DATA.length;
          this.renderShapeCard();
          sound.pop();
        });
        document.getElementById('nextShapeBtn').addEventListener('click', () => {
          this.shapeIndex = (this.shapeIndex + 1) % SHAPES_DATA.length;
          this.renderShapeCard();
          sound.pop();
        });

        document.getElementById('speakShapeBtn').addEventListener('click', () => {
          const shape = SHAPES_DATA[this.shapeIndex];
          if (this.shapeIndex % 2 === 0) {
            sound.speakGirl(`${shape.name}! ${shape.desc}`);
          } else {
            sound.speakBoy(`${shape.name}! ${shape.desc}`);
          }
        });

        document.getElementById('collectStarShapeBtn').addEventListener('click', () => {
          this.addStars(1);
          const shape = SHAPES_DATA[this.shapeIndex];
          if (this.shapeIndex % 2 === 0) {
            sound.speakGirl(`Hooray! You know the ${shape.name}!`);
          } else {
            sound.speakBoy(`Awesome job! The ${shape.name} is super cool!`);
          }
        });

        this.renderShapeCard();
      }

      renderShapeCard() {
        const shape = SHAPES_DATA[this.shapeIndex];
        document.getElementById('shapeName').textContent = shape.name;
        document.getElementById('shapeDescription').textContent = `"${shape.desc}"`;
        document.getElementById('shapeProgressText').textContent = `${this.shapeIndex + 1} of ${SHAPES_DATA.length}`;

        const box = document.getElementById('shapeDisplayBox');
        box.innerHTML = '';

        const svgs = {
          circle: `<svg viewBox="0 0 100 100" class="w-full h-full text-emerald-500 fill-current drop-shadow"><circle cx="50" cy="50" r="45"/></svg>`,
          square: `<svg viewBox="0 0 100 100" class="w-full h-full text-amber-500 fill-current drop-shadow"><rect x="10" y="10" width="80" height="80" rx="12"/></svg>`,
          triangle: `<svg viewBox="0 0 100 100" class="w-full h-full text-pink-500 fill-current drop-shadow"><polygon points="50,10 90,90 10,90"/></svg>`,
          star: `<svg viewBox="0 0 100 100" class="w-full h-full text-yellow-400 fill-current drop-shadow"><polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36"/></svg>`,
          heart: `<svg viewBox="0 0 100 100" class="w-full h-full text-rose-500 fill-current drop-shadow"><path d="M50,85 C20,55 5,35 15,18 C25,2 45,10 50,28 C55,10 75,2 85,18 C95,35 80,55 50,85 Z"/></svg>`,
          diamond: `<svg viewBox="0 0 100 100" class="w-full h-full text-sky-500 fill-current drop-shadow"><polygon points="50,10 90,50 50,90 10,50"/></svg>`,
          rectangle: `<svg viewBox="0 0 100 100" class="w-full h-full text-purple-500 fill-current drop-shadow"><rect x="5" y="25" width="90" height="50" rx="10"/></svg>`,
          oval: `<svg viewBox="0 0 100 100" class="w-full h-full text-teal-500 fill-current drop-shadow"><ellipse cx="50" cy="50" rx="45" ry="30"/></svg>`
        };

        box.innerHTML = svgs[shape.type] || svgs.circle;
      }

      /* =====================================================================
         MODULE 6: RHYMES & SING-ALONGS
         ===================================================================== */
      initRhymes() {
        document.querySelectorAll('.rhyme-select-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.currentRhymeKey = btn.dataset.rhyme;
            document.querySelectorAll('.rhyme-select-btn').forEach(b => {
              b.className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-rose-300 text-xs font-bold shadow-sm rhyme-select-btn";
            });
            btn.className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-rose-500 text-white border-2 border-rose-400 text-xs font-bold shadow-sm rhyme-select-btn";
            this.loadRhyme();
            sound.pop();
          });
        });

        document.getElementById('playRhymeBtn').addEventListener('click', () => {
          this.playRhymeAudio();
        });

        document.getElementById('starRhymeBtn').addEventListener('click', () => {
          this.addStars(1);
          sound.speak("Wonderful singing! You have a beautiful voice!");
        });

        this.loadRhyme();
      }

      loadRhyme() {
        const rhyme = RHYMES_DATA[this.currentRhymeKey];
        document.getElementById('rhymeTitle').textContent = rhyme.title;
        document.getElementById('rhymeSceneEmoji').textContent = rhyme.emoji;
        document.getElementById('rhymeLine1').textContent = rhyme.lines[0];
        document.getElementById('rhymeLine2').textContent = rhyme.lines[1];
        document.getElementById('rhymeLine3').textContent = rhyme.lines[2];
        document.getElementById('rhymeLine4').textContent = rhyme.lines[3];
      }

      playRhymeAudio() {
        const rhyme = RHYMES_DATA[this.currentRhymeKey];
        sound.speakBoy(rhyme.lines.join('. '));
        // Synthesize cheerful melody notes alongside
        rhyme.notes.forEach((freq, i) => {
          setTimeout(() => {
            sound.playTone(freq, 'triangle', 0.25, 0.25);
          }, i * 350);
        });
      }

      /* =====================================================================
         MODULE 7: INTERACTIVE STORYBOOKS
         ===================================================================== */
      initStories() {
        document.querySelectorAll('.story-select-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            this.currentStoryKey = btn.dataset.story;
            this.storyPageIndex = 0;
            document.querySelectorAll('.story-select-btn').forEach(b => {
              b.className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-white text-slate-700 border-2 border-indigo-300 text-xs font-bold shadow-sm story-select-btn";
            });
            btn.className = "bouncy-btn flex-shrink-0 px-3.5 py-1.5 rounded-2xl bg-indigo-600 text-white border-2 border-indigo-400 text-xs font-bold shadow-sm story-select-btn";
            this.renderStoryPage();
            sound.pop();
          });
        });

        document.getElementById('prevStoryPageBtn').addEventListener('click', () => {
          const story = STORIES_DATA[this.currentStoryKey];
          this.storyPageIndex = (this.storyPageIndex - 1 + story.pages.length) % story.pages.length;
          this.renderStoryPage();
          sound.pop();
        });

        document.getElementById('nextStoryPageBtn').addEventListener('click', () => {
          const story = STORIES_DATA[this.currentStoryKey];
          this.storyPageIndex = (this.storyPageIndex + 1) % story.pages.length;
          this.renderStoryPage();
          sound.pop();
        });

        document.getElementById('readStoryAloudBtn').addEventListener('click', () => {
          const story = STORIES_DATA[this.currentStoryKey];
          const page = story.pages[this.storyPageIndex];
          // Alternate girl and boy narrator based on story and page
          const isGirl = (this.currentStoryKey === 'bunny') ? (this.storyPageIndex % 2 === 0) : (this.storyPageIndex % 2 === 1);
          if (isGirl) {
            sound.speakGirl(`${page.chapter}. ${page.text}`);
          } else {
            sound.speakBoy(`${page.chapter}. ${page.text}`);
          }
        });

        this.renderStoryPage();
      }

      renderStoryPage() {
        const story = STORIES_DATA[this.currentStoryKey];
        const page = story.pages[this.storyPageIndex];
        document.getElementById('storyPageEmoji').textContent = page.emoji;
        document.getElementById('storyPageTitle').textContent = page.chapter;
        document.getElementById('storyParagraph').textContent = page.text;
        document.getElementById('storyProgressText').textContent = `Page ${this.storyPageIndex + 1} of ${story.pages.length}`;
      }

      getCanvasPos(canvas, e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX !== undefined ? e.clientX : (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY !== undefined ? e.clientY : (e.touches ? e.touches[0].clientY : 0);
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
          x: (clientX - rect.left) * scaleX,
          y: (clientY - rect.top) * scaleY
        };
      }
    }

    // Launch app once DOM is ready
    window.onload = () => {
      window.app = new WonderKidsApp();
    };
  </script>
</body>
</html>