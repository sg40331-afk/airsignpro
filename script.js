/* =========================================================
   에어사인 프로 — 랜딩페이지 인터랙션 (script.js)
   ========================================================= */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {

    /* ---------- FAQ 아코디언 ---------- */
    var faqButtons = document.querySelectorAll("[data-faq-q]");

    faqButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest("[data-faq]");
        if (!item) return;

        var answer = item.querySelector("[data-faq-a]");
        var signSpan = btn.querySelector("span:last-child");
        var isOpen = answer && answer.style.display !== "none";

        /* 다른 항목 모두 닫기 (한 번에 하나만 열림) */
        document.querySelectorAll("[data-faq]").forEach(function (other) {
          var a = other.querySelector("[data-faq-a]");
          var s = other.querySelector("[data-faq-q] span:last-child");
          if (a) a.style.display = "none";
          if (s) s.textContent = "+";
          other.style.background = "#fff";
        });

        /* 클릭한 항목 토글 */
        if (!isOpen && answer) {
          answer.style.display = "block";
          if (signSpan) signSpan.textContent = "\u2212"; /* − */
          item.style.background = "#F6F8FB";
        }
      });
    });

    /* 첫 번째 FAQ 기본 열림 */
    var firstAnswer = document.querySelector("[data-faq] [data-faq-a]");
    if (firstAnswer) {
      firstAnswer.style.display = "block";
      var firstItem = firstAnswer.closest("[data-faq]");
      var firstSign = firstItem && firstItem.querySelector("[data-faq-q] span:last-child");
      if (firstSign) firstSign.textContent = "\u2212";
      if (firstItem) firstItem.style.background = "#F6F8FB";
    }
  });
})();
