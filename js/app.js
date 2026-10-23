let current = 0;
let score = 0;
let answered = false;
const topicStats = {};

const $ = (id) => document.getElementById(id);

function show(screenId) {
  ["start-screen", "quiz-screen", "result-screen"].forEach((id) => {
    $(id).hidden = id !== screenId;
  });
}

function startQuiz() {
  current = 0;
  score = 0;
  Object.keys(topicStats).forEach((k) => delete topicStats[k]);
  QUESTIONS.forEach((q) => {
    topicStats[q.topic] = topicStats[q.topic] || { correct: 0, total: 0 };
    topicStats[q.topic].total++;
  });
  show("quiz-screen");
  loadQuestion();
}

function loadQuestion() {
  const q = QUESTIONS[current];
  answered = false;
  $("question-count").textContent = `Question ${current + 1} of ${QUESTIONS.length}`;
  $("topic-label").textContent = q.topic;
  $("question-text").textContent = q.question;
  $("progress-bar").style.width = `${(current / QUESTIONS.length) * 100}%`;
  $("feedback").hidden = true;
  $("next-btn").hidden = true;
  $("african-text").hidden = true;

  const box = $("options");
  box.innerHTML = "";
  q.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${"ABCD"[i]}. ${text}`;
    btn.addEventListener("click", () => selectAnswer(i));
    box.appendChild(btn);
  });
}

function selectAnswer(i) {
  if (answered) return;
  answered = true;
  const q = QUESTIONS[current];

  document.querySelectorAll(".option").forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) btn.classList.add("correct");
    else if (idx === i) btn.classList.add("wrong");
  });

  const right = i === q.answer;
  if (right) {
    score++;
    topicStats[q.topic].correct++;
  }

  $("feedback-title").textContent = right ? "Correct!" : "Not quite.";
  $("explanation").textContent = q.explanation;

  const list = $("why-wrong");
  list.innerHTML = "";
  q.whyWrong.forEach((reason, idx) => {
    if (idx !== q.answer) {
      const li = document.createElement("li");
      li.textContent = `${"ABCD"[idx]}: ${reason}`;
      list.appendChild(li);
    }
  });

  $("feedback").hidden = false;
  $("next-btn").hidden = false;
  $("next-btn").textContent = current === QUESTIONS.length - 1 ? "See results" : "Next";
}

function showResults() {
  show("result-screen");
  const pct = Math.round((score / QUESTIONS.length) * 100);
  $("score-text").textContent = `You scored ${score} out of ${QUESTIONS.length} (${pct}%).`;

  const box = $("topic-scores");
  box.innerHTML = "";
  Object.entries(topicStats).forEach(([topic, s]) => {
    const p = Math.round((s.correct / s.total) * 100);
    const row = document.createElement("div");
    row.className = "topic-row";
    row.innerHTML = `<p>${topic}: ${s.correct}/${s.total}</p><div class="bar"><div style="width:${p}%"></div></div>`;
    box.appendChild(row);
  });

  let msg;
  if (pct >= 80) msg = "Strong result. Keep practising with more questions to confirm you are exam-ready.";
  else if (pct >= 50) msg = "Getting there. Review the topics with the shortest bars and try again.";
  else msg = "Keep going. Re-read the explanations, then retry the quiz.";
  $("readiness").textContent = msg + " (This short quiz is a practice guide, not an exam prediction.)";
}

$("start-btn").addEventListener("click", startQuiz);
$("restart-btn").addEventListener("click", startQuiz);
$("next-btn").addEventListener("click", () => {
  current++;
  if (current < QUESTIONS.length) loadQuestion();
  else showResults();
});

$("african-btn").addEventListener("click", async () => {
  const box = $("african-text");
  box.hidden = false;
  box.textContent = "Thinking of a real-life example...";
  box.textContent = await getAfricanExample(QUESTIONS[current]);
});