/* Slip the Trap — site script (plain JavaScript, no libraries)
   1. Light/dark toggle (remembers your choice; otherwise follows the system)
   2. Fade-in-on-scroll for elements with class="reveal"
   3. Gentle parallax for the home-page hero decorations
*/

(function () {
  "use strict";

  var docEl = document.documentElement;

  function currentTheme() {
    return docEl.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function setTheme(theme, store) {
    docEl.setAttribute("data-theme", theme);
    var icons = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < icons.length; i++) {
      icons[i].textContent = theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"; /* sun / moon */
    }
    if (store) {
      try { localStorage.setItem("stt-theme", theme); } catch (e) {}
    }
  }

  /* --- theme toggle button --- */
  document.addEventListener("DOMContentLoaded", function () {
    setTheme(currentTheme(), false); /* just sets the right icon */

    var toggles = document.querySelectorAll(".theme-toggle");
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].addEventListener("click", function () {
        setTheme(currentTheme() === "dark" ? "light" : "dark", true);
      });
    }

    /* follow the operating system while the visitor hasn't chosen manually */
    if (window.matchMedia) {
      var stored = null;
      try { stored = localStorage.getItem("stt-theme"); } catch (e) {}
      if (!stored) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (ev) {
          setTheme(ev.matches ? "dark" : "light", false);
        });
      }
    }

    /* --- fade-in on scroll --- */
    var reveals = document.querySelectorAll(".reveal");
    function showNow(el) { el.classList.add("in"); }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            showNow(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      for (var r = 0; r < reveals.length; r++) io.observe(reveals[r]);
    }

    /* Safety nets: reveal anything already on screen right away, and make sure
       nothing can stay invisible even if IntersectionObserver never fires. */
    function revealVisible() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = 0; i < reveals.length; i++) {
        var el = reveals[i];
        if (el.classList.contains("in")) continue;
        var rect = el.getBoundingClientRect();
        if (rect.top < vh - 40 && rect.bottom > 0) showNow(el);
      }
    }
    revealVisible();
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible);
    setTimeout(function () {
      /* last resort: after 2.5s show everything that is still hidden */
      for (var i = 0; i < reveals.length; i++) showNow(reveals[i]);
    }, 2500);

    /* --- home hero parallax (only runs if the elements exist) --- */
    var slow = document.querySelector("[data-parallax-slow]");
    var fast = document.querySelector("[data-parallax-fast]");
    if (slow || fast) {
      window.addEventListener("scroll", function () {
        var y = window.scrollY || 0;
        if (slow) slow.style.translate = "0 " + (y * 0.12) + "px";
        if (fast) fast.style.translate = "0 " + (y * -0.06) + "px";
      }, { passive: true });
    }
  });
})();
