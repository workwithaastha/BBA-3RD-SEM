// Friendly "buddy" bubble: every time the site opens it greets "Hi Astha" with a random question (random entrance + exit animation),
// (the second 'days left' popup is switched off). Also records the study-day streak and keeps the 3D tilt / hero parallax.
(function () {
  const { store, esc, ICON } = window.App;
  const NAME = store.get('name', 'Astha');
  const today = () => new Date().toISOString().slice(0, 10);
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  // record today as a study day (used by streaks and badges)
  (function () {
    let days = store.get('days', []);
    const t = today();
    if (!days.includes(t)) { days.push(t); store.set('days', days.slice(-60)); }
    store.set('visited', true);
  })();

  // ---------- messages: [question, [[reply button, answer], ...]] ----------
  // the three "favourites" are asked most often
  const FAV = [
    ["Did you remember me? 🥺", [["Always 💜", "Aww! I remembered you too. You made my day ✨"], ["Sorry, forgot 🙈", "Forgiven! But you owe me a smile 😌"]]],
    ["Are you angry with me? 😶", [["No, not at all 😄", "Phew! 😮‍💨 I was worried for a second."], ["A little bit 😤", "Sorry! I will make it up with some chocolate 🍫"]]],
    ["Should I order you some food? 🍕", [["Yes please! 🍔", "Wait, let me order for you! 🛵 Tell me what you want - is it pizza? 🍕"], ["No, I'm full 😋", "Okay! Then I will keep the pizza for myself 🍕"]]],
  ];
  const LOVE = [
    ["Did you miss me today? 🥺", [["Yes, so much 💕", "Aww, I missed you even more! 🫶"], ["Just a little 😜", "Only a little?! I will remember that 😤💗"]]],
    ["Do you know you are my favourite person? 💖", [["Of course I do 😍", "And I will keep reminding you 💞"], ["Tell me again 🥰", "You are my favourite person, always 💖"]]],
    ["Want a big hug? 🤗", [["Yes please! 🫂", "Squeezing you tight right now 🤗💞"], ["Make it two 🥹", "Two hugs coming up, with a kiss on top 😘"]]],
    ["Who is the cutest person in the world? 😏", [["Me, obviously 😎", "Okay okay, you win... because it is you 😍"], ["You 😘", "Aww, stop it, you are making me blush 🙈"]]],
    ["Are you smiling right now? 😊", [["Yes, because of you 💕", "That is the best thing I heard all day ✨"], ["Now I am 😄", "Mission accomplished! 😎"]]],
    ["Shall we plan a movie date? 🎬🍿", [["Yes! 🍿", "Popcorn is on me 😄🎬"], ["Pizza date instead 🍕", "Even better! Pizza date it is 💞"]]],
    ["Did you eat on time, my cutie? 🍛", [["Yes, I did 😋", "Good girl! I am proud of you 🥰"], ["Not yet 🙈", "Go eat right now, or I will get angry 😤🍛"]]],
    ["Do you love me? 🥺💗", [["Obviously 😘", "Love you more than all the pizzas in the world 🍕💗"], ["Maybe... 😜", "Maybe?! I will take it and make you say yes 😎💗"]]],
    ["Should I send you a flower? 🌹", [["Send it! 🌹", "Sent! Smell it with your eyes closed 🌹😚"], ["Send chocolate 🍫", "Even better: a chocolate bouquet 🍫💐"]]],
    ["Tell me honestly, am I annoying? 😅", [["Never 💕", "Good, because you are stuck with me forever 😌💞"], ["Sometimes 😜", "Only sometimes?! I will take that win 😎"]]],
    ["Good morning, sunshine! Did you wake up smiling? ☀️", [["Yes, thinking of you 😊", "Then my morning is already perfect 🌞💞"], ["Still sleepy 😴", "Five more minutes, then come and shine ☀️"]]],
    ["If I was there right now, what would you do? 😏", [["Hug you tight 🫂", "Come here, I am already hugging you back 💞"], ["Steal your food 🍟", "Haha, deal! But I get half of yours 😜"]]],
    ["Do you want a goodnight kiss? 😘🌙", [["Yes please 🥰", "Mwah! Sleep tight, my cutie 😘🌙"], ["Two please 🥹", "Mwah mwah! Dream of me 💫"]]],
    ["Guess how much I like you? 🤭", [["To the moon 🌙", "And all the way back, and then some 🚀💗"], ["Tell me 🥺", "More than chai, more than pizza, more than anything 💗"]]],
    ["Can I call you my forever? 💍😄", [["Haha, yes 😍", "Then it is official, no returns or refunds 😎💞"], ["Ask me later 🙈", "I will ask every day until you say yes 😘"]]],
    ["Which is better - chocolate or me? 🍫😏", [["You, always 😘", "Correct answer! Here is a chocolate as a prize 🍫"], ["Chocolate 😜", "Ouch! Then I will share my chocolate with someone else 😤🍫"]]],
    ["Did anyone make you smile today besides me? 🤨", [["No one but you 💕", "Good! That job belongs only to me 😌💗"], ["A few people 😄", "Fine, but I am still your favourite smile-maker 😎"]]],
    ["Selfie time? Show me your cutest face 📸", [["Smiling 😊", "Aww, that is my favourite look 💖"], ["Making a funny face 🤪", "Best face ever, I am saving it forever 😂💞"]]],
    ["What should we eat on our next date? 🍝", [["Pizza 🍕", "Pizza date locked in! 🍕💞"], ["Momos 🥟", "Momos it is - extra chutney for you 🥟💗"]]],
    ["Are you my cutie pie or my chocolate cake? 🍰", [["Cutie pie 🥧", "Cutie pie it is, sweet and a little crazy 😍"], ["Chocolate cake 🍫", "Rich, sweet and I want a big slice of you 😋💞"]]],
    ["Do you miss our silly talks? 🥹", [["Every day 💕", "Me too, I save every silly word 🫶"], ["Tell me a joke first 😜", "Why did the cutie cross the road? To get to me! 😂💗"]]],
    ["Who loves who more? 👀", [["Me, obviously 😎", "Wrong. Me. Final answer. Case closed 😤💗"], ["You 🥰", "Okay, you win this one... for today 😘"]]],
    ["Can I borrow your smile for the rest of my life? 😇", [["Keep it forever 💞", "Deal! Returning it only with interest 😘"], ["Only on rent 😜", "Fine, I will pay in hugs every day 🤗💗"]]],
    ["If I was a pizza, which topping would I be? 🍕😏", [["Extra cheese 🧀", "Cheesy and irresistible, just like me 😎💗"], ["Chocolate chips 🍫", "Weird, but you are the sweetest topping anyway 😍"]]],
    ["Guess what I am thinking about right now? 🤔💭", [["About me 😏", "Correct! You win a hug and one extra chocolate 🤗🍫"], ["About food 🍟", "Also correct, because you are always on my mind next to food 😂💗"]]],
    ["Do you want a little surprise today? 🎁", [["Yes please! 🎁", "Close your eyes and count to three... surprise! My biggest smile for you 😁💗"], ["Tell me what 🥺", "If I tell you it is not a surprise, silly 😜🎁"]]],
    ["Cute or beautiful - what should I call you? 🥰", [["Both 💕", "Cutiful it is! I just invented a new word for you 😍"], ["Cutie only 😜", "Cutie, forever and ever 🫶"]]],
    ["Are you my lucky charm? 🍀", [["Yes, always 🍀", "Then I will never take you off my keychain 😄💗"], ["Maybe 😜", "I will test it by keeping you around for life 😎🍀"]]],
    ["Rain or sunshine - which date would you pick? 🌧️☀️", [["Rain with chai ☕", "Chai in the rain with you, perfect plan 🌧️💞"], ["Sunshine walk 🌞", "Sunshine and your hand in mine, deal 🌞💗"]]],
    ["Do I look good today? 😎", [["Super handsome 😍", "Hehe, I only dressed up so you would say that 😌💗"], ["Hmm, so-so 😜", "So-so?! I am going to fix my hair just to annoy you 😤😂"]]],
    ["Can I steal one fry from your plate? 🍟", [["Take it 🍟", "You are the best, I will give you my last fry someday 🥹🍟"], ["No way! 🙅", "Fine, then I will steal your smile instead 😜💗"]]],
    ["Say something sweet to me 🍬", [["You are my sunshine ☀️", "Aww! You are my whole sky, sunshine included 🌈💗"], ["You make me smile 😊", "That is exactly my job, and I love it 😎💞"]]],
    ["How many hugs do you want today? 🫂", [["A hundred 🥹", "Counting... one, two, three... this will take all day 🫂💗"], ["Just one big one 🤗", "One extra-large hug, packed with love 🤗💞"]]],
    ["Are you my teddy bear or my pillow? 🧸", [["Teddy bear 🧸", "A cuddly teddy bear who gives free hugs 🧸💗"], ["Pillow 😴", "Okay, then I will sleep on you every night 😂💤"]]],
    ["What is our song today? 🎵", [["A love song 🎶", "Playing it in my heart on repeat 🎵💗"], ["A funny song 😜", "Dancing badly to it, only for you 💃😂"]]],
    ["Can you keep a secret? 🤫", [["Yes, tell me 🤭", "My secret: you are the best part of my day 🤫💗"], ["Maybe not 😜", "Then I will whisper it only to your heart 💞"]]],
    ["Who makes the better tea - you or me? 🍵", [["Me, of course 😎", "Okay chef, I will drink yours and pretend it is perfect 🍵😂"], ["You 🥰", "Then I will make it with extra love and extra sugar 🍵💞"]]],
    ["Did you do something nice for yourself today? 🌷", [["Yes, I rested 😊", "That is lovely, you deserve all the rest 🌷💗"], ["Not yet 🥲", "Then do one thing right now: drink water and smile 💧😊"]]],
    ["What shall we do on a lazy Sunday? 🛋️", [["Watch movies 🎬", "With blankets, snacks and you, best Sunday ever 🛋️💗"], ["Sleep all day 😴", "Then I will sleep next to you and guard the snacks 😴🍿"]]],
    ["Do you believe in love at first sight? 👀💘", [["Yes, I do 💘", "Me too, it happened to me the day I met you 😍"], ["Show me again 🥰", "Look into my eyes... see? It happens every time 👀💗"]]],
    ["Pick one: a puppy or a kitten? 🐶🐱", [["Puppy 🐶", "Puppies it is! I will be the biggest puppy for you 🐶💗"], ["Kitten 🐱", "Kittens it is! I will purr whenever you are near 🐱💞"]]],
    ["Is it okay if I annoy you a little today? 😜", [["Of course 😄", "Yay! Prepare for 100 silly messages 🤪💗"], ["No, not today 🙅", "Okay okay, only 99 messages then 😂"]]],
    ["Who is your favourite person in this whole world? 🌍", [["You 😘", "Correct! Stay right there, I am coming to hug you 🫂💗"], ["My family 💕", "Good answer! I love them too because of you 🥰"]]],
    ["Are you thinking of me while studying? 📚😏", [["Always 💕", "Then I must be a great distraction, I am sorry not sorry 😎💗"], ["Not now 🙈", "Then think of me during break time, deal? 😜☕"]]],
    ["Do you want a head massage? 💆", [["Yes please 😌", "Closing my eyes... magic fingers activated 💆✨"], ["Foot massage too 😜", "Do not push your luck, cutie 😂💗"]]],
    ["Which colour looks best on you today? 🎨", [["Pink 🩷", "Pink! Obviously. You are my rose 🌸💗"], ["Blue 💙", "Blue like the sky, big and endless like my love 💙"]]],
    ["If you could go anywhere with me, where would we go? ✈️", [["Mountains ⛰️", "Mountains it is! Hot chocolate and your hand in mine ⛰️🍫"], ["Beach 🏖️", "Beach it is! Sand, waves and you stealing my fries 🏖️🍟"]]],
    ["How was your day, my cutie? 🌸", [["It was good 😊", "Yay! Tell me every little detail later 🥰"], ["A bit rough 😔", "Come here, I am sending you the biggest hug right now 🤗💗"]]],
    ["Do you want to hear a cheesy line? 🧀", [["Yes! 😂", "Are you a magnet? Because I am so attracted to you 🧲💗"], ["No please 🙈", "Too late! You are the cheese to my pizza 🍕🧀😘"]]],
    ["Who is more stubborn - you or me? 😤", [["You 😜", "Excuse me?! Stubborn is my other name, nice to meet you 😎"], ["Me 😌", "Good, then we are the perfect stubborn pair 😂💗"]]],
    ["Can I be the reason you smile today? 😊", [["You already are 💕", "Then my mission is complete for today 🥹🌟"], ["Try harder 😜", "Challenge accepted! Starting a funny dance now 💃😂"]]],
    ["What is your favourite thing about us? 💞", [["Our silly talks 😄", "Mine too! I will keep them in my heart forever 🫶"], ["Our little fights 😜", "Because we always make up with a hug 🤗💗"]]],
    ["Time for a mini break? Stretch your arms up! 🙆", [["Done 🙆", "Great! Now your body and my heart are both relaxed 💗"], ["Too lazy 😴", "Fine, I will stretch for you. See? Stretching... done 🥱😂"]]],
  ];
  const MORE = [
    ["Are you okay? 🤗", [["Yes, I'm good 😊", "Yay! That makes me really happy 💪"], ["A bit tired 😴", "Take a deep breath and a little rest, you deserve it 🫶"]]],
    ["Whatsup? 😎", [["All good 😄", "Love that energy! 🔥"], ["Nothing much", "Same here, just waiting for you 😅"]]],
    ["Did you drink water today? 💧", [["Yes 👍", "Great! Your body says thank you 🥤"], ["Not yet 😅", "Go grab a glass - I will wait right here 🥤"]]],
    ["Have you eaten something? 🍱", [["Yes 😋", "Good! A happy tummy means a happy day."], ["Not yet", "Please eat something soon, promise? 🤝"]]],
    ["Did you sleep well last night? 😴", [["Like a baby 😇", "Lucky you! Sweet dreams do work 🌙"], ["Not really 🥱", "Oh no. A short nap might help later 🛌"]]],
    ["Tea or coffee today? ☕", [["Tea 🍵", "Chai lovers unite! 🫖"], ["Coffee ☕", "Strong choice! Enjoy every sip."]]],
    ["Did you smile today? 😁", [["Yes, a lot 😄", "That smile looks great on you ✨"], ["Not yet 🥲", "Here you go: 🙂 - now your turn!"]]],
    ["Want some chocolate? 🍫", [["Yes please! 🍫", "Here is a big chocolate bar, no calories 😄"], ["No thanks 🙅", "More chocolate for me then 😋"]]],
    ["How is your mood right now? 🌈", [["Super happy 🥳", "Yay! Keep shining 🌟"], ["Not great 😔", "Sending you a big hug 🤗"]]],
  ];
  // answers that start with one of these show the SAD image, all others the HAPPY image
  const SAD = ['Sorry, forgot', 'Still sleepy', 'Chocolate 😜', 'Ask me later', 'A little bit', 'No, I', 'A bit tired', 'Nothing much', 'Not yet', 'Not really', 'No thanks', 'Not great', 'A bit rough', 'Too lazy', 'Not now', 'No way'];
  // extra funny / cute answers: question -> { reply index: [more answers] } (one is picked at random on each tap)
  const ORDER = ["Wait, let me order for you! 🛵 Tell me what you want - is it pizza? 🍕", "Wait, let me order for you, cutie! 🛵 What should I get - pizza? 🍕", "Wait wait, let me order it right now 🛵 Is it your favourite pizza? 🍕"];
  const PIZZA = ORDER;
  // after an order line the card asks "what?" with two quick answers
  const FOLLOW = [["Yes, pizza! 🍕", "Pizza it is! Extra cheese, ordered and on its way 🧀🛵💗"], ["Something else 😋", "Tell me what - I will order anything for you 🛍️💗"]];
  const EXTRA = {
    "Should I order you some food? 🍕": { 0: PIZZA, 1: ["Full?! Then I will eat your share and you can watch 😋🍕", "Okay, but if you get hungry in 10 minutes I am still ordering your favourite pizza 🍕😜"] },
    "Have you eaten something? 🍱": { 1: PIZZA },
    "Did you eat on time, my cutie? 🍛": { 1: PIZZA, 0: ["Good! Even my stomach is proud of you 🥰", "Yay! Now you may have dessert with me 🍰💗"] },
    "Did you drink water today? 💧": { 1: ["Drink some water, or I will send a goldfish to check on you 🐟💧", "Water first, then I will give you a big hug 🥤🤗"] },
    "Are you angry with me? 😶": { 1: ["Sorry, sorry, sorry! Here is a pizza, a hug and a flower 🍕🤗🌹", "Please do not be angry, I will do the cutest puppy face 🥺🐶"], 0: ["Yay! Then I can keep my puppy face for later 🐶😄"] },
    "Did you remember me? 🥺": { 0: ["Aww! I remembered you so much that even my phone got jealous 📱💗"], 1: ["Not remembering me?! I am telling the pizza on you 🍕😤"] },
    "Do you love me? 🥺💗": { 0: ["Love you more than pizza, and that is saying a lot 🍕💗", "Obviously? Good, because I already told everyone you are mine 😎💞"], 1: ["Maybe?! I will bring pizza until you say yes 🍕😜"] },
    "Who is the cutest person in the world? 😏": { 0: ["Wrong answer! The cutest one is you. Punishment: one tickle 😜🤭"], 1: ["Stop it! My cheeks are already red and my phone is hot 🙈🔥"] },
    "Tell me honestly, am I annoying? 😅": { 1: ["Only sometimes? Then I am doing great, call me a part-time cutie 😂", "Annoying? No no, you are limited-edition entertainment 🎭💗"] },
    "Did you miss me today? 🥺": { 1: ["A little?! I will send you 100 hugs to correct that answer 🤗x100"] },
    "Want a big hug? 🤗": { 0: ["Hug incoming! Warning: extremely tight, no escape 🫂😄"] },
    "Do you want a goodnight kiss? 😘🌙": { 0: ["Mwah! Now sleep, or the moon will tell on you 🌙😚"] },
    "Want some chocolate? 🍫": { 0: ["Here is a huge chocolate. Do not tell the pizza 🍫🍕😂"], 1: ["No chocolate?! Who are you and what did you do with my cutie? 😳🍫"] },
  };
  const answerFor = (q, i, base) => { const more = (EXTRA[q] && EXTRA[q][i]) || []; return pick([base].concat(more)); };
  let lastQ = '', lastEx = '';
  const ASK = () => { let r; for (let i = 0; i < 12; i++) { const x = Math.random(); r = x < 0.45 ? pick(LOVE) : x < 0.75 ? pick(FAV) : pick(MORE); if (r[0] !== lastQ) break; } lastQ = r[0]; return r; };

  const FACES = ['😊', '🤗', '😄', '🥰', '😎', '🤓', '🙂', '✨'];
  const IN = ['b-slide', 'b-bounce', 'b-flip', 'b-zoom', 'b-swing', 'b-drop', 'b-roll', 'b-jelly', 'b-rise'];
  const OUT = ['x-fly', 'x-shrink', 'x-spin', 'x-fade', 'x-down'];
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

  function dismiss(el, then) {
    if (!el || el.dataset.gone) return;
    el.dataset.gone = '1';
    el.className = el.className.replace(/\bb-\w+\b/g, '') + ' ' + (reduce ? 'x-fade' : pick(OUT));
    setTimeout(() => { el.remove(); if (then) then(); }, reduce ? 150 : 650);
  }

  function bubble(html, onReady, after) {
    document.querySelectorAll('#buddy').forEach((x) => x.remove());
    const el = document.createElement('div');
    el.id = 'buddy';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    el.className = reduce ? '' : pick(IN);
    el.innerHTML = '<img class="bdino" src="img/dino.webp" alt="" width="84" height="84">' + html + '<button class="bx" aria-label="Close">×</button>';
    document.body.appendChild(el);
    el.querySelector('.bx').onclick = () => { clearAll(); dismiss(el, after); };
    if (onReady) onReady(el);
    return el;
  }

  const hello = () => { const h = new Date().getHours(); return h < 5 ? 'Still awake? 🌙' : h < 12 ? 'Good morning ☀️' : h < 17 ? 'Good afternoon 🌤️' : h < 21 ? 'Good evening 🌆' : 'Late-night study mode 🌙'; };

  // ---------- 1. greeting + random question ----------
  function greet(thenDays) {
    clearAll();
    const [q, replies] = ASK();
    const el = bubble(`<div class="bhead"><div class="bface"><img src="img/avatar.webp" alt="" width="72" height="72"></div>
      <div class="bhello"><small>${hello()}</small><h3>Hi ${esc(NAME)} <span class="wave">👋</span></h3></div></div>
      <p class="bq">${esc(q)}</p>
      <div class="breps two">${replies.map((r, i) => `<button class="brep${i ? '' : ' main'}" data-i="${i}">${esc(r[0])}</button>`).join('')}</div>
      <div class="bfoot"><button class="bnext" type="button">Next question ›</button></div>`, (e) => {
      e.querySelector('.bnext').onclick = () => { clearAll(); e.remove(); greet(thenDays); };
      e.querySelectorAll('.brep').forEach((b) => {
        b.onclick = () => {
          clearAll();
          const ans = answerFor(q, +b.dataset.i, replies[+b.dataset.i][1]);
          if (ans === '__daily') { dismiss(e); location.hash = '#/daily'; return; }
          e.querySelector('.bq').textContent = ans;
          e.querySelector('.bq').classList.add('ans');
          if (ORDER.indexOf(ans) >= 0) {  // food order: ask what, with two quick answers
            const bar = e.querySelector('.breps');
            bar.innerHTML = FOLLOW.map((f, k) => '<button class="brep' + (k ? '' : ' main') + '" data-k="' + k + '">' + esc(f[0]) + '</button>').join('');
            const fb = e.querySelector('.bfoot'); if (fb) fb.remove();
            const face0 = e.querySelector('.bface');
            face0.classList.add('mood', 'happy');
            face0.innerHTML = '<img src="img/happy.webp" alt="" width="72" height="72">';
            bar.querySelectorAll('.brep').forEach((fbtn) => {
              fbtn.onclick = () => {
                clearAll();
                e.querySelector('.bq').textContent = FOLLOW[+fbtn.dataset.k][1];
                bar.remove();
                e.classList.add('answered');
                later(() => dismiss(e, thenDays), 3800);
              };
            });
            return;
          }
          e.querySelector('.breps').remove();
          e.querySelector('.bfoot').remove();
          e.classList.add('answered');
          const label = replies[+b.dataset.i][0];
          const mood = SAD.some((x) => label.indexOf(x) === 0) ? 'sad' : 'happy';
          const face = e.querySelector('.bface');
          face.classList.add('mood', mood);
          face.innerHTML = '<img src="img/' + mood + '.webp" alt="" width="72" height="72">';
          later(() => dismiss(e, thenDays), 3800);
        };
      });
    }, thenDays);
    return el;  // stays open until you close it (x) or pick an answer
  }

  // ---------- 2. days left for a random upcoming exam ----------
  function daysPopup() {
    const E = window.EXAMS || [];
    const t0 = new Date(); t0.setHours(0, 0, 0, 0);
    const left = (ex) => { const [y, m, d] = ex.date.split('-').map(Number); return Math.round((new Date(y, m - 1, d) - t0) / 86400000); };
    const up = E.filter((x) => left(x) >= 0);
    if (!up.length) return;
    let ex = pick(up);
    for (let i = 0; i < 12 && up.length > 1 && ex.id === lastEx; i++) ex = pick(up);
    lastEx = ex.id;
    const d = left(ex);
    const when = d === 0 ? 'is TODAY!' : d === 1 ? 'is tomorrow!' : 'is in ' + d + ' days';
    const date = new Date(ex.date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
    const hot = d <= 3;
    const el = bubble(`<div class="bhead"><div class="bface"><img src="img/avatar.webp" alt="" width="72" height="72"><span class="bico">${ICON[ex.id] || '📅'}</span></div>
      <div class="bcount"><b>${d === 0 ? '!' : d}</b><span>${d === 0 ? 'TODAY' : d === 1 ? 'day left' : 'days left'}</span></div></div>
      <p class="bq"><b>${esc(ex.name)}</b> ${when}</p>
      <div class="bchips"><span>📅 ${date}</span><span>🕐 ${esc(ex.time)}</span><span>${ex.kind === 'objective' ? '✅ MCQ' : '✍️ Written'} · ${esc(ex.dur)}</span></div>
      <div class="breps"><button class="brep main" id="bgot" type="button">Got it 👍</button></div>
      ${up.length > 1 ? '<div class="bfoot"><button class="bnext" type="button">Another exam ›</button></div>' : ''}`, (e) => {
      const nb = e.querySelector('.bnext');
      if (nb) nb.onclick = () => { clearAll(); e.remove(); daysPopup(); };
      if (hot) e.classList.add('hot');
      e.querySelector('#bgot').onclick = () => { clearAll(); dismiss(e); };
    });
    return el;  // stays open until you close it (x) or use a button
  }

  // leaving the first screen closes it
  addEventListener('hashchange', () => { clearAll(); const x = document.getElementById('buddy'); if (x) x.remove(); });

  // only the greeting popup is shown now (the second 'days left' popup was removed on request)
  function sequence() { greet(() => {}); }

  // header button replays the greeting + days popup
  const top = document.querySelector('.top');
  if (top) {
    const b = document.createElement('button');
    b.id = 'wopen';
    b.textContent = '👋';
    b.title = 'Say hi';
    b.setAttribute('aria-label', 'Say hi');
    b.onclick = sequence;
    top.insertBefore(b, document.getElementById('theme'));
  }

  // 3D tilt on subject cards + hero parallax (pointer devices only)
  if (window.matchMedia && matchMedia('(hover: hover)').matches) {
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest && e.target.closest('.scard');
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty('--ry', (px * 14).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-py * 14).toFixed(2) + 'deg');
      }
      const hero = document.querySelector('.hero');
      if (hero) {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        hero.style.setProperty('--px', (x * 30).toFixed(1) + 'px');
        hero.style.setProperty('--py', (y * 20).toFixed(1) + 'px');
        hero.style.setProperty('--cy', (x * 40).toFixed(1) + 'deg');
        hero.style.setProperty('--cx', (-y * 30).toFixed(1) + 'deg');
      }
    }, { passive: true });
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest && e.target.closest('.scard');
      if (card && !card.contains(e.relatedTarget)) { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); }
    });
  }

  // every time the site opens
  // only on the first screen (home) when the site opens
  if (/^#?\/?$/.test(location.hash)) setTimeout(sequence, 900);
})();
