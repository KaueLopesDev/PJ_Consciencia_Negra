/* ============================================================
   APP — Home
   Monta o hero, o legado e a grade de pesquisas.
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

  function hasPhoto(p) {
    return Boolean(p.foto);
  }

  /* ---------- HERO ---------- */
  function renderHero() {
    var host = document.getElementById("hero");
    if (!host) return;

    var nome = central.nome || "Zumbi dos Palmares";
    var words = nome.split(" ");
    var first = words.shift();
    var rest = words.join(" ");

    var zumbi = null;
    for (var zi = 0; zi < P.length; zi++) { if (P[zi].slug === "zumbi-dos-palmares") { zumbi = P[zi]; break; } }
    var heroPos = (zumbi && zumbi.fotoPos) || "50% 25%";

    var media = central.foto
      ? '<figure class="hero__figure">' +
          '<span class="hero__tag" aria-hidden="true">Nº 01</span>' +
          '<img src="' + esc(central.foto) + '" alt="' + esc(central.fotoAlt || nome) +
            '" width="768" height="1024" fetchpriority="high" decoding="async" style="object-position:' + heroPos + '">' +
          (central.fotoCredito
            ? "<figcaption>" + esc(central.fotoCredito) + "</figcaption>"
            : "") +
        "</figure>"
      : "";

    host.innerHTML =
      '<p class="kicker hero__kicker">' + esc(central.eyebrow || "20 DE NOVEMBRO") + "</p>" +
      '<h1 class="hero__title" id="hero-title">' + esc(first) +
        (rest ? "<br><span>" + esc(rest) + "</span>" : "") + "</h1>" +
      media +
      '<p class="hero__manifesto">' + esc(central.manifesto || "") + "</p>" +
      '<p class="hero__meta">' +
        "<span>" + esc(central.anos || "") + "</span>" +
        "<span>" + esc(central.local || "") + "</span>" +
      "</p>" +
      '<div class="hero__actions">' +
        '<a class="btn btn--solid" href="#pesquisas">Ver as 40 histórias</a>' +
        '<a class="link" href="sobre.html">Sobre o projeto</a>' +
      "</div>";
  }

  /* ---------- LEGADO ---------- */
  function renderLegado() {
    var host = document.getElementById("legadoHost");
    if (!host) return;
    var l = central.legado || {};
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
      return '<li class="timeline__item">' +
        '<span class="timeline__year">' + esc(t.ano) + "</span>" +
        '<p class="timeline__text">' + esc(t.texto) + "</p>" +
      "</li>";
    }).join("");

    var statsHTML = impacto.map(function (s) {
      return '<div class="stat">' +
        '<p class="stat__num">' + esc(s.numero) + "</p>" +
        '<p class="stat__label">' + esc(s.label) + "</p>" +
        '<p class="stat__text">' + esc(s.texto) + "</p>" +
      "</div>";
    }).join("");

    host.innerHTML =
      '<figure class="legado__figure legado__abertura" data-reveal>' +
        '<img src="secoes/hero-serra-da-barriga.jpg" alt="Comemoração do Dia da Consciência Negra na Serra da Barriga" width="3960" height="2640" loading="lazy" decoding="async">' +
        "<figcaption>Comemorações do Dia da Consciência Negra na Serra da Barriga — Ministério da Cultura · CC BY 2.0 · via Wikimedia Commons</figcaption>" +
      "</figure>" +

      '<div class="legado__layout">' +
        '<div class="legado__head" data-reveal>' +
          '<p class="kicker">02 — Legado</p>' +
          '<h2 class="legado__title" id="legado-title">' +
            esc(l.titulo || "O que ele fez contra o racismo") + "</h2>" +
          '<p class="legado__intro">' + esc(l.intro || "") + "</p>" +
        "</div>" +
        '<figure class="legado__figure legado__map" data-reveal>' +
          '<img src="secoes/legado-mapa-palmares-1647.jpg" alt="Mapa da Capitania de Pernambuco com a representação do Quilombo dos Palmares, 1647" width="1378" height="1124" loading="lazy" decoding="async">' +
          "<figcaption>Mapa de Palmares, 1647 — Frans Post · Domínio público · via Wikimedia Commons</figcaption>" +
        "</figure>" +
      "</div>" +

      '<div class="legado__body">' + feitosHTML + "</div>" +

      (l.citacao
        ? '<blockquote class="legado__quote" data-reveal>' +
            "<p>" + esc(l.citacao.texto) + "</p>" +
            "<cite>" + esc(l.citacao.autor) + "</cite>" +
          "</blockquote>"
        : "") +

      (tdl.length
        ? '<div class="legado__timeline-head" data-reveal>' +
            '<h3 class="legado__timeline-title">Linha do tempo</h3>' +
          "</div>" +
          '<ol class="timeline" data-reveal>' + timelineHTML + "</ol>"
        : "") +

      (impacto.length ? '<div class="stats" data-reveal>' + statsHTML + "</div>" : "");
  }

  /* ---------- GRID / FILTROS ---------- */
  var state = { cat: "Todas", q: "" };

  function categoriasVisiveis() {
    var count = {};
    P.forEach(function (p) {
      (p.categorias || []).forEach(function (c) { count[c] = (count[c] || 0) + 1; });
    });
    return Object.keys(count)
      .filter(function (c) { return count[c] >= 3; })
      .sort(function (a, b) { return a.localeCompare(b, "pt-BR"); });
  }

  function renderChips() {
    var host = document.getElementById("chips");
    if (!host) return;
    var cats = ["Todas"].concat(categoriasVisiveis());
    host.innerHTML = cats.map(function (c) {
      return '<button class="chip" type="button" data-cat="' + esc(c) +
        '" aria-pressed="' + (state.cat === c ? "true" : "false") + '">' + esc(c) + "</button>";
    }).join("");
  }

  function typographicMedia(p, idx) {
    var words = String(p.nome).split(" ");
    var first = words.shift();
    var rest = words.join(" ");
    return '<div class="card__media card__media--typo" aria-hidden="true">' +
      '<span class="card__idx" aria-hidden="true">' + String(idx + 1).padStart(2, "0") + "</span>" +
      '<span class="typo__ini">' + esc(initials(p.nome)) + "</span>" +
      '<span class="typo__nome">' + esc(first) +
        (rest ? "<br>" + esc(rest) : "") + "</span>" +
    "</div>";
  }

  function photoMedia(p, idx) {
    return '<figure class="card__media">' +
      '<span class="card__idx" aria-hidden="true">' + String(idx + 1).padStart(2, "0") + "</span>" +
      '<img src="' + esc(p.foto) + '" alt="' + esc(p.fotoAlt || "Retrato de " + p.nome) +
        '" loading="lazy" decoding="async" width="800" height="1000" style="object-position:' +
        esc(p.fotoPos || "50% 30%") + '">' +
    "</figure>";
  }

  function cardHTML(p, featured, idx) {
    var aluno = p.aluno && p.aluno.nomes ? p.aluno.nomes : "";
    var cat = firstCategory(p);
    var credit = p.fotoCredito || "Sem imagem livre verificada.";

    return '<a class="card' + (featured ? " card--featured" : "") +
      '" href="pessoa.html?p=' + encodeURIComponent(p.slug) + '" data-reveal style="--rd:' + ((idx % 4) * 70) + 'ms">' +
      (hasPhoto(p) ? photoMedia(p, idx) : typographicMedia(p, idx)) +
      '<div class="card__body">' +
        '<p class="card__kicker">' + esc(cat) + "</p>" +
        '<h3 class="card__name">' + esc(p.nome) + "</h3>" +
        '<p class="card__desc">' + esc(p.resumoCard || p.resumo || "") + "</p>" +
        '<p class="card__meta">' +
          (aluno ? '<span class="card__student">' + esc(aluno) + '</span><span class="card__sep" aria-hidden="true">·</span>' : "") +
          "<span>" + esc(cat) + "</span>" +
          '<span class="card__sep" aria-hidden="true">·</span>' +
          "<span>" + (p.tempoLeitura || 2) + " min</span>" +
          '<span class="card__arrow" aria-hidden="true">↗</span>' +
        "</p>" +
        '<p class="card__credit">' + esc(credit) + "</p>" +
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

    var destaque = state.cat === "Todas" && !state.q;

    grid.innerHTML = list.length
      ? list.map(function (p, i) {
          return cardHTML(p, destaque && i === 0 && p.slug === "zumbi-dos-palmares", i);
        }).join("")
      : '<p class="empty">Nenhuma história com esse nome. Tente outra palavra ou limpe o filtro.</p>';

    if (contador) {
      if (state.cat !== "Todas" || state.q) {
        contador.innerHTML = "<b>" + list.length + "</b> de " + P.length + " pesquisas";
      } else {
        contador.innerHTML = "<b>" + P.length + "</b> histórias";
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
      }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    }
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- FOOTER ---------- */
  function renderFooter() {
    var list = document.getElementById("footTurmaList");
    var a2 = document.getElementById("footAno2");

    if (list) {
      var linhas = [C.turma, C.escola, C.professor, C.ano].filter(function (v) {
        return v && String(v).trim();
      });
      list.innerHTML = linhas.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("");
    }
    if (a2) a2.textContent = C.ano ? "© " + C.ano : "";
  }

  /* ---------- INIT ---------- */
  function init() {
    renderHero();
    renderLegado();
    renderChips();
    renderGrid();
    renderFooter();

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
