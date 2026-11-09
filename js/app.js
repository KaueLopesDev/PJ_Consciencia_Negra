/* ============================================================
   APP — Home
   Monta o hero, o legado, o marquee e a grade de pesquisas.
   Não precisa editar este arquivo: edite js/data.js.
   ============================================================ */
(function () {
  "use strict";

  var C = window.CONFIG || {};
  var P = window.PESSOAS || [];
  var central = C.central || {};

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function initials(nome) {
    var parts = String(nome || "?").trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function firstCategory(p) {
    return (p.categorias && p.categorias[0]) || "Pesquisa";
  }

  function portraitHTML(p, extraClass) {
    var cls = "ph" + (extraClass ? " " + extraClass : "");
    if (p.foto) {
      return '<img src="' + esc(p.foto) + '" alt="' + esc(p.fotoAlt || p.nome) +
        '" fetchpriority="high" decoding="async">';
    }
    return '<div class="' + cls + '" aria-hidden="true"><span>' + esc(initials(p.nome)) + "</span></div>";
  }

  /* ---------- HERO ---------- */
  function renderHero() {
    var host = document.getElementById("hero");
    if (!host) return;

    var nome = central.nome || "Zumbi dos Palmares";
    var words = nome.split(" ");
    var first = words.shift();
    var rest = words.join(" ");

    document.getElementById("heroBg").textContent = first;

    var media = central.foto
      ? '<img src="' + esc(central.foto) + '" alt="' + esc(central.fotoAlt || nome) +
        '" fetchpriority="high" decoding="async">'
      : '<div class="ph ph--hero" aria-hidden="true"><span>' + esc(initials(nome)) + "</span></div>";

    host.innerHTML =
      '<p class="chapter">01 — ' + esc(first) + "</p>" +
      '<p class="hero__eyebrow">' + esc(central.eyebrow || "20 DE NOVEMBRO") + "</p>" +
      '<div class="hero__portrait' + (central.foto ? "" : " hero__portrait--art") + '">' + media + "</div>" +
      '<h1 class="hero__title" id="hero-title">' + esc(first) +
        (rest ? "<br><em>" + esc(rest) + "</em>" : "") + "</h1>" +
      '<p class="hero__manifesto">' + esc(central.manifesto || "") + "</p>" +
      '<div class="hero__meta">' +
        "<span>" + esc(central.anos || "") + "</span>" +
        "<span>" + esc(central.local || "") + "</span>" +
      "</div>";
  }

  /* ---------- MARQUEE ---------- */
  function renderMarquee() {
    var track = document.getElementById("marqueeTrack");
    if (!track) return;
    var nomes = P.map(function (p) { return p.nome; });
    if (!nomes.length) nomes = ["Zumbi dos Palmares", "Dandara", "Luís Gama"];
    var html = nomes.map(function (n) {
      return '<span class="marquee__item">' + esc(n) + "</span>";
    }).join("");
    track.innerHTML = html + html;
  }

  /* ---------- LEGADO ---------- */
  function renderLegado() {
    /* Usa "legadoHost" para não conflitar com o id da <section id="legado"> */
    var host = document.getElementById("legadoHost");
    if (!host) return;
    var l = (central.legado || {});
    var feitos = l.feitos || [];
    var tdl = l.linhaDoTempo || [];
    var impacto = l.impacto || [];

    var feitosHTML = feitos.map(function (f, i) {
      return '<article class="feito" data-reveal>' +
        '<div class="feito__num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</div>" +
        "<div>" +
          '<h3 class="feito__verb">' + esc(f.verbo) +
            (f.ano ? '<span class="feito__year">' + esc(f.ano) + "</span>" : "") + "</h3>" +
          '<p class="feito__text">' + esc(f.texto) + "</p>" +
        "</div>" +
      "</article>";
    }).join("");

    var timelineHTML = tdl.map(function (t) {
      return '<div class="timeline__item" role="group">' +
        '<span class="timeline__year">' + esc(t.ano) + "</span>" +
        '<p class="timeline__text">' + esc(t.texto) + "</p>" +
      "</div>";
    }).join("");

    var statsHTML = impacto.map(function (s) {
      return '<div class="stat">' +
        '<p class="stat__num">' + esc(s.numero) + "</p>" +
        '<p class="stat__label">' + esc(s.label) + "</p>" +
        '<p class="stat__text">' + esc(s.texto) + "</p>" +
      "</div>";
    }).join("");

    host.innerHTML =
      '<div class="legado__layout">' +
        '<div class="legado__head" data-reveal>' +
          '<p class="chapter">02 — Legado</p>' +
          '<h2 class="legado__title" id="legado-title">' +
            esc(l.titulo || "O que ele fez contra o racismo") + "</h2>" +
          '<p class="legado__intro">' + esc(l.intro || "") + "</p>" +
        "</div>" +
        '<div class="legado__body">' + feitosHTML + "</div>" +
      "</div>" +
      (l.citacao
        ? '<blockquote class="legado__quote" data-reveal>' +
            "<p>" + esc(l.citacao.texto) + "</p>" +
            "<cite>" + esc(l.citacao.autor) + "</cite>" +
          "</blockquote>"
        : "") +
      (tdl.length
        ? '<div class="legado__timeline-head" data-reveal>' +
            '<p class="legado__timeline-title">Linha do tempo</p>' +
            '<p class="legado__hint">arraste →</p>' +
          "</div>" +
          '<div class="timeline" data-reveal>' + timelineHTML + "</div>"
        : "") +
      (impacto.length ? '<div class="stats" data-reveal>' + statsHTML + "</div>" : "");
  }

  /* ---------- AVISO ---------- */
  function renderAviso() {
    var host = document.getElementById("aviso");
    if (!host || !C.mostrarAvisoExemplo) return;
    host.innerHTML =
      '<div class="aviso" role="note">' +
        "<p><b>Modo molde.</b> As pesquisas abaixo são exemplos para mostrar o formato. " +
        "Troque os textos, os alunos e as fontes em <code>js/data.js</code>. " +
        "Quando tudo estiver real, mude <code>mostrarAvisoExemplo</code> para <code>false</code>.</p>" +
        '<button class="aviso__close" type="button" aria-label="Fechar aviso" data-dismiss>×</button>' +
      "</div>";
    host.querySelector("[data-dismiss]").addEventListener("click", function () {
      host.innerHTML = "";
    });
  }

  /* ---------- GRID / FILTROS ---------- */
  var state = { cat: "Todas", q: "" };

  function todasCategorias() {
    var set = {};
    P.forEach(function (p) {
      (p.categorias || []).forEach(function (c) { set[c] = true; });
    });
    return Object.keys(set).sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
  }

  function renderChips() {
    var host = document.getElementById("chips");
    if (!host) return;
    var cats = ["Todas"].concat(todasCategorias());
    host.innerHTML = cats.map(function (c) {
      return '<button class="chip" type="button" data-cat="' + esc(c) +
        '" aria-pressed="' + (state.cat === c ? "true" : "false") + '">' + esc(c) + "</button>";
    }).join("");
  }

  function cardHTML(p) {
    var media = p.foto
      ? '<img src="' + esc(p.foto) + '" alt="' + esc(p.fotoAlt || "Retrato de " + p.nome) +
        '" loading="lazy" decoding="async" width="400" height="500">'
      : '<div class="ph" aria-hidden="true"><span>' + esc(initials(p.nome)) + "</span></div>";

    return '<a class="card" href="pessoa.html?p=' + encodeURIComponent(p.slug) + '" data-reveal>' +
      '<div class="card__media' + (p.foto ? "" : " card__media--art") + '">' + media +
        '<span class="card__student">' + esc((p.aluno && p.aluno.nomes) || "Aluno") + "</span>" +
      "</div>" +
      '<div class="card__body">' +
        '<h3 class="card__name">' + esc(p.nome) + "</h3>" +
        '<p class="card__desc">' + esc(p.resumoCard || p.resumo || "") + "</p>" +
        '<div class="card__meta">' +
          "<span>" + esc(firstCategory(p)) + " · " + (p.tempoLeitura || 2) + " min</span>" +
          '<span class="card__arrow" aria-hidden="true">↗</span>' +
        "</div>" +
      "</div>" +
    "</a>";
  }

  function renderGrid() {
    var grid = document.getElementById("grid");
    var contador = document.getElementById("contador");
    if (!grid) return;

    var q = norm(state.q);
    var list = P.filter(function (p) {
      var okCat = state.cat === "Todas" || (p.categorias || []).indexOf(state.cat) !== -1;
      if (!okCat) return false;
      if (!q) return true;
      var hay = norm(
        [p.nome, p.resumoCard, p.resumo, (p.categorias || []).join(" "), (p.aluno && p.aluno.nomes) || ""].join(" ")
      );
      return hay.indexOf(q) !== -1;
    });

    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<p class="empty">Nenhuma história com esse nome. Tente outra palavra ou limpe o filtro.</p>';

    if (contador) {
      var total = C.totalPrevisto || P.length;
      if (state.cat !== "Todas" || state.q) {
        contador.innerHTML = "<b>" + list.length + "</b> de " + P.length + " pesquisas";
      } else {
        contador.innerHTML = "<b>" + P.length + "</b> de " + total + " histórias";
      }
    }

    observeReveals();
  }

  /* ---------- REVEAL ---------- */
  var io = null;

  function observeReveals() {
    var els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- NAV SCROLL ---------- */
  function navScroll() {
    var nav = document.getElementById("nav");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- FOOTER ---------- */
  function renderFooter() {
    var t = document.getElementById("footTurma");
    var p = document.getElementById("footProfessor");
    var a = document.getElementById("footAno");
    var a2 = document.getElementById("footAno2");
    if (t) t.textContent = [C.turma, C.escola].filter(Boolean).join(" · ") || "—";
    if (p) p.textContent = C.professor || "—";
    if (a) a.textContent = C.ano || "—";
    if (a2) a2.textContent = C.ano ? "© " + C.ano : "—";
  }

  /* ---------- INIT ---------- */
  function init() {
    renderHero();
    renderMarquee();
    renderLegado();
    renderAviso();
    renderChips();
    renderGrid();
    renderFooter();
    navScroll();

    var search = document.getElementById("busca");
    if (search) {
      search.addEventListener("input", function (e) {
        state.q = e.target.value;
        renderGrid();
      });
    }

    var chips = document.getElementById("chips");
    if (chips) {
      chips.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-cat]");
        if (!btn) return;
        state.cat = btn.getAttribute("data-cat");
        chips.querySelectorAll("[data-cat]").forEach(function (b) {
          b.setAttribute("aria-pressed", String(b === btn));
        });
        renderGrid();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
