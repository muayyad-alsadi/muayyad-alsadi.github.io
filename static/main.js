(function () {
  var track = document.getElementById("deck-track");
  var slides = track ? track.children : [];
  var count = slides.length;
  var index = 0;
  var countEl = document.getElementById("deck-count");
  var dots = document.getElementById("deck-dots");
  var prev = document.getElementById("deck-prev");
  var next = document.getElementById("deck-next");
  var pauseBtn = document.getElementById("deck-pause");
  var rail = document.getElementById("rail-track");
  var railPause = document.getElementById("rail-pause");
  var form = document.getElementById("request");
  var error = document.getElementById("form-error");
  var userPaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hovering = false;
  var DURATION = 8000;
  var elapsed = 0;
  var clockStart = 0;
  var clockOn = false;
  var raf = 0;
  var placed = [];

  function ring(p) {
    var buttons = dots.querySelectorAll("button");
    for (var d = 0; d < buttons.length; d++) {
      buttons[d].style.setProperty("--p", d === index ? String(p) : "0");
    }
  }

  function stopClock() {
    clockOn = false;
    window.cancelAnimationFrame(raf);
  }

  function freezeClock() {
    if (!clockOn) return;
    elapsed = Math.min(DURATION, performance.now() - clockStart);
    stopClock();
  }

  function frame(now) {
    if (!clockOn) return;
    elapsed = now - clockStart;
    var p = Math.min(1, elapsed / DURATION);
    ring(p);
    if (p >= 1) {
      stopClock();
      elapsed = 0;
      show(index + 1);
      return;
    }
    raf = window.requestAnimationFrame(frame);
  }

  function armClock() {
    if (userPaused || hovering || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    stopClock();
    clockStart = performance.now() - elapsed;
    clockOn = true;
    raf = window.requestAnimationFrame(frame);
  }

  function resetClock() {
    elapsed = 0;
    ring(0);
    stopClock();
    armClock();
  }

  function place() {
    var w = slides[0].getBoundingClientRect().width;
    var gap = parseFloat(getComputedStyle(track.parentElement).getPropertyValue("--deck-gap")) || 16;
    var step = w + gap;
    var half = count / 2;
    var tall = 0;
    var first = placed.length === 0;
    for (var n = 0; n < count; n++) {
      var delta = n - index;
      if (delta > half) delta -= count;
      if (delta < -half) delta += count;
      var jump = !first && placed[n] !== undefined && Math.abs(delta - placed[n]) > 1;
      slides[n].style.transition = (first || jump) ? "none" : "";
      slides[n].style.setProperty("--shift", (delta * step) + "px");
      slides[n].style.zIndex = delta === 0 ? "2" : "1";
      placed[n] = delta;
      tall = Math.max(tall, slides[n].offsetHeight);
    }
    if (tall) track.style.height = tall + "px";
  }

  function show(i) {
    index = (i + count) % count;
    place();
    countEl.textContent = (index + 1) + " / " + count;
    for (var n = 0; n < count; n++) {
      var on = n === index;
      slides[n].setAttribute("aria-hidden", on ? "false" : "true");
      var links = slides[n].querySelectorAll("a");
      for (var k = 0; k < links.length; k++) {
        if (on) links[k].removeAttribute("tabindex");
        else links[k].tabIndex = -1;
      }
    }
    var dotButtons = dots.querySelectorAll("button");
    for (var d = 0; d < dotButtons.length; d++) {
      var selected = d === index;
      dotButtons[d].setAttribute("aria-selected", selected ? "true" : "false");
      dotButtons[d].tabIndex = selected ? 0 : -1;
    }
    resetClock();
  }

  if (count) {
    for (var s = 0; s < count; s++) {
      (function (n) {
        var title = slides[n].querySelector("h3");
        var dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", title ? title.textContent : "Slide " + (n + 1));
        dot.addEventListener("click", function () { show(n); });
        dots.appendChild(dot);
        slides[n].addEventListener("click", function (event) {
          if (n === index) return;
          event.preventDefault();
          show(n);
        });
      })(s);
    }
    show(0);
    window.addEventListener("resize", place);
    prev.addEventListener("click", function () { show(index - 1); });
    next.addEventListener("click", function () { show(index + 1); });
    pauseBtn.addEventListener("click", function () {
      userPaused = !userPaused;
      if (userPaused) {
        freezeClock();
        pauseBtn.setAttribute("aria-pressed", "true");
        pauseBtn.textContent = "Play slides";
      } else {
        pauseBtn.setAttribute("aria-pressed", "false");
        pauseBtn.textContent = "Pause slides";
        armClock();
      }
    });
    dots.addEventListener("mouseenter", function () { hovering = true; freezeClock(); });
    dots.addEventListener("mouseleave", function () { hovering = false; armClock(); });
    dots.addEventListener("focusin", function () { hovering = true; freezeClock(); });
    dots.addEventListener("focusout", function () { hovering = false; armClock(); });
    document.addEventListener("keydown", function (event) {
      var tag = document.activeElement && document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key === "ArrowRight") show(index + 1);
      if (event.key === "ArrowLeft") show(index - 1);
    });
    if (userPaused) {
      pauseBtn.setAttribute("aria-pressed", "true");
      pauseBtn.textContent = "Play slides";
    }
  }

  [].slice.call(document.querySelectorAll('.rail-set[aria-hidden="true"] a')).forEach(function (a) {
    a.tabIndex = -1;
  });

  railPause.addEventListener("click", function () {
    var held = rail.classList.toggle("is-paused");
    railPause.setAttribute("aria-pressed", String(held));
    railPause.textContent = held ? "Run the logos" : "Pause the logos";
  });

  var links = [].slice.call(document.querySelectorAll(".bar nav a[href^='#']"));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
  function mark() {
    var y = window.scrollY + 110;
    var current = null;
    sections.forEach(function (s) { if (s.offsetTop <= y) current = s; });
    links.forEach(function (a) {
      var on = current && a.getAttribute("href") === "#" + current.id;
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  document.addEventListener("scroll", mark, { passive: true });
  mark();

  function fitAlso() {
    var wall = document.querySelector(".also-wall");
    if (!wall) return;
    var set = wall.querySelector(".also-set");
    var imgs = set.querySelectorAll("img");
    if (!imgs.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      set.style.gap = "";
      set.style.paddingInlineEnd = "";
      return;
    }
    var icon = imgs[0].getBoundingClientRect().width;
    var gap = (wall.clientWidth - imgs.length * icon) / imgs.length;
    if (gap < 14) gap = 14;
    set.style.gap = gap + "px";
    set.style.paddingInlineEnd = gap + "px";
  }
  fitAlso();
  window.addEventListener("resize", fitAlso);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = String(data.get("name") || "").trim();
    var about = String(data.get("about") || "").trim();
    form.elements.name.setAttribute("aria-invalid", name ? "false" : "true");
    form.elements.about.setAttribute("aria-invalid", about ? "false" : "true");
    if (!name || !about) {
      error.hidden = false;
      form.elements[name ? "about" : "name"].focus();
      return;
    }
    error.hidden = true;
    var body = "Name: " + name + "\n\n" + about + "\n\nDrafted on the site. The page itself does not deliver mail.";
    window.location.href = "mailto:alsadi@gmail.com?subject=" + encodeURIComponent("Note for Muayyad Alsadi") + "&body=" + encodeURIComponent(body);
  });
})();
