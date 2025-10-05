document.addEventListener("DOMContentLoaded", () => {
  // Flashcard modal code
  const buttons = document.querySelectorAll(".card button");
  const modal = document.getElementById("flashcardModal");
  const closeBtn = document.querySelector(".close-btn");
  const jpWord = document.getElementById("jpWord");
  const enWord = document.getElementById("enWord");
  const nextBtn = document.getElementById("nextBtn");

  const verbs = [
    { jp: "食べる (taberu)", en: "to eat" },
    { jp: "行く (iku)", en: "to go" },
    { jp: "見る (miru)", en: "to see/watch" },
    { jp: "話す (hanasu)", en: "to speak" },
    { jp: "来る (kuru)", en: "to come" }
  ];

  function getRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
  }

  function showFlashcard() {
    const randomVerb = getRandomVerb();
    jpWord.textContent = randomVerb.jp;
    enWord.textContent = randomVerb.en;
    modal.style.display = "flex";
  }

  // Flashcard button
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const text = e.target.textContent;
      if (text.includes("Flashcard")) {
        showFlashcard();
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  nextBtn.addEventListener("click", showFlashcard);

  // ===== Kana List button redirect with temporary message =====
  const kanaBtn = document.getElementById("kanaBtn");

  kanaBtn.addEventListener("click", () => {
    kanaBtn.textContent = "📖 Loading Kana List...";
    kanaBtn.disabled = true;
    kanaBtn.style.opacity = 0.7;

    setTimeout(() => {
      window.location.href = "kana.html";
    }, 1500);
  });
});
