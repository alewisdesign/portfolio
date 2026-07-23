// Aaron Lewis — portfolio home. Small progressive enhancements only.

(function () {
  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Keyboard parity for the hover-lift effect on case study cards
  var cards = document.querySelectorAll(".case-card");
  cards.forEach(function (card) {
    card.addEventListener("focusin", function () { card.classList.add("is-lifted"); });
    card.addEventListener("focusout", function () { card.classList.remove("is-lifted"); });
    var href = card.getAttribute("data-href");
    if (href) {
      var go = function () { window.top.location.href = href; };
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    }
  });

  // Selected Visual Work — apply thumbnail images from data-vw-image
  document.querySelectorAll(".vw-card[data-vw-image]").forEach(function (card) {
    var url = card.getAttribute("data-vw-image");
    var thumb = card.querySelector(".vw-thumb");
    if (thumb && url) {
      thumb.style.backgroundImage = 'url("' + url + '")';
      thumb.classList.add("has-image");
    }
  });

  // Mobile hamburger toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Case Studies dropdown (click to toggle — works on mobile + desktop)
  var ddToggle = document.querySelector(".nav-dropdown-toggle");
  var dd = document.getElementById("cs-menu");
  if (ddToggle && dd) {
    ddToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle("is-open");
      ddToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!dd.contains(e.target) && e.target !== ddToggle) {
        dd.classList.remove("is-open");
        ddToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Case study rail: smooth scroll + scrollspy
  var railLinks = document.querySelectorAll(".cs-rail-link");
  var sections = document.querySelectorAll(".cs-section[data-section]");
  if (railLinks.length && sections.length) {
    var setActive = function (id) {
      railLinks.forEach(function (l) {
        l.classList.toggle("is-active", l.getAttribute("data-navlink") === id);
      });
    };
    railLinks.forEach(function (l) {
      l.addEventListener("click", function (e) {
        e.preventDefault();
        var id = l.getAttribute("data-navlink");
        var el = document.getElementById(id);
        if (el) {
          var y = el.getBoundingClientRect().top + window.pageYOffset - 84;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    });
    if ("IntersectionObserver" in window) {
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) setActive(en.target.getAttribute("data-section"));
          });
        },
        { rootMargin: "-38% 0px -55% 0px", threshold: 0 }
      );
      sections.forEach(function (s) { spy.observe(s); });
    }
  }
})();

// Selected Visual Work — lightbox
(function () {
  var lb = document.getElementById("vw-lightbox");
  if (!lb) return;
  var img = document.getElementById("vw-lb-image");
  var imgTag = document.getElementById("vw-lb-img");
  var titleEl = document.getElementById("vw-lb-title");
  var descEl = document.getElementById("vw-lb-desc");
  var tagsEl = document.getElementById("vw-lb-tags");
  var closeBtn = document.getElementById("vw-lb-close");
  var prevBtn = document.getElementById("vw-lb-prev");
  var nextBtn = document.getElementById("vw-lb-next");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".vw-card"));
  var currentIndex = -1;
  var lastFocus = null;

  function render(card) {
    titleEl.textContent = card.getAttribute("data-vw-title") || "";
    descEl.textContent = card.getAttribute("data-vw-desc") || "";
    img.setAttribute("data-placeholder", card.getAttribute("data-vw-placeholder") || "");
    var imgUrl = card.getAttribute("data-vw-image");
    if (imgUrl) {
      if (imgTag) imgTag.src = imgUrl;
      img.classList.add("has-image");
    } else {
      if (imgTag) imgTag.src = "";
      img.classList.remove("has-image");
    }
    tagsEl.innerHTML = "";
    (card.getAttribute("data-vw-tags") || "")
      .split(",")
      .map(function (t) { return t.trim(); })
      .filter(Boolean)
      .forEach(function (t) {
        var s = document.createElement("span");
        s.className = "vw-lb-tag";
        s.textContent = t;
        tagsEl.appendChild(s);
      });
  }

  function openAt(index) {
    if (index < 0 || index >= cards.length) return;
    currentIndex = index;
    render(cards[index]);
    if (!lb.classList.contains("is-open")) {
      lastFocus = document.activeElement;
      lb.hidden = false;
      lb.classList.add("is-open");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
  }

  function step(delta) {
    if (!cards.length) return;
    openAt((currentIndex + delta + cards.length) % cards.length);
  }

  function close() {
    lb.classList.remove("is-open");
    lb.hidden = true;
    document.body.style.overflow = "";
    currentIndex = -1;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  cards.forEach(function (card, i) {
    var trigger = card.querySelector(".vw-thumbwrap");
    if (!trigger) return;
    trigger.addEventListener("click", function () { openAt(i); });
  });
  closeBtn.addEventListener("click", close);
  if (prevBtn) prevBtn.addEventListener("click", function (e) { e.stopPropagation(); step(-1); });
  if (nextBtn) nextBtn.addEventListener("click", function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  });
})();

// Before/After (and single-shot) carousels
(function () {
  var roots = document.querySelectorAll(".ba-carousel");
  if (!roots.length) return;
  roots.forEach(function (root) {
    var viewer = root.querySelector(".ba-viewer");
    var caption = root.querySelector(".ba-caption");
    var thumbs = Array.prototype.slice.call(root.querySelectorAll(".ba-thumb"));
    var prev = root.querySelector(".ba-prev");
    var next = root.querySelector(".ba-next");
    var index = 0;

    function apply(i) {
      index = (i + thumbs.length) % thumbs.length;
      thumbs.forEach(function (t, ti) {
        var active = ti === index;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      var t = thumbs[index];
      var src = t.getAttribute("data-src");
      if (src) {
        viewer.style.backgroundImage = 'url("' + src + '")';
        viewer.classList.add("has-image");
      } else {
        viewer.style.backgroundImage = "";
        viewer.classList.remove("has-image");
      }
      if (caption) caption.textContent = t.getAttribute("data-caption") || "";
    }

    thumbs.forEach(function (t, i) {
      t.addEventListener("click", function () { apply(i); });
      var src = t.getAttribute("data-src");
      if (src) {
        t.style.backgroundImage = 'url("' + src + '")';
        var label = t.querySelector("span");
        if (label) label.style.display = "none";
      }
    });
    if (prev) prev.addEventListener("click", function () { apply(index - 1); });
    if (next) next.addEventListener("click", function () { apply(index + 1); });
    apply(0);
  });
})();



