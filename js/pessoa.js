/* ============================================================
   PESSOA — template único de pesquisa
   Lê o slug da URL (?p=slug) e monta a página a partir de
   window.PESSOAS, em js/data.js.
   ============================================================ */
(function () {
  "use strict";

  var C = window.CONFIG || {};
  var P = window.PESSOAS || [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initials(nome) {
    var parts = String(nome || "?").trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function slugFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("p") || "";
  }

  function anos(p) {
    var n = p.nascimento ? String(p.nascimento) : "";
    var m = p.morte ? String(p.morte) : "";
    if (n && m) return n + " — " + m;
    if (n && !m) return n + " — atualidade";
    if (!n && m) return "† " + m;
    return "";
  }

  function paragraphs(texto) {
    return String(texto || "")
      .split(/\n{1,}/)
      .filter(function (t) { return t.trim(); })
      .map(function (t) { return "<p>" + esc(t.trim()) + "</p>"; })
      .join("");
  }

  function notFound() {
    document.getElementById("pessoa").innerHTML =
      '<section class="simple">' +
        '<p class="chapter">404 — Pesquisa</p>' +
        '<h1 class="simple__title">Essa história<br>não foi<br>encontrada</h1>' +
        '<p class="simple__lead">O link pode estar incompleto ou a pesquisa ainda não foi publicada. ' +
        "Volte para a grade e escolha outro nome.</p>" +
        '<p style="margin-top:28px"><a class="btn btn--solid" href="index.html#pesquisas">Ver todas as pesquisas</a></p>' +
      "</section>";
  }

  function renderGaleria(g) {
    if (!g || !g.length) return "";
    return '<div class="galeria">' + g.map(function (item) {
      return "<figure>" +
        '<img src="' + esc(item.src) + '" alt="' + esc(item.alt || "") + '" loading="lazy" decoding="async">' +
        (item.credito ? "<figcaption>" + esc(item.credito) + "</figcaption>" : "") +
      "</figure>";
    }).join("") + "</div>";
  }

  function renderVideo(v) {
    if (!v) return "";
    if (v.embed) {
      return '<div class="video" id="videoBox">' +
        '<button class="video__poster" type="button" id="playVideo" ' +
          'aria-label="Reproduzir vídeo">' +
          (v.poster ? '<img src="' + esc(v.poster) + '" alt="">' : "") +
          '<span class="video__play" aria-hidden="true">▶</span>' +
          "<span>assistir</span>" +
        "</button>" +
      "</div>";
    }
    if (v.url) {
      return '<div class="video">' +
        '<video controls preload="metadata"' + (v.poster ? ' poster="' + esc(v.poster) + '"' : "") + ">" +
          '<source src="' + esc(v.url) + '">' +
          "Seu navegador não reproduz este vídeo." +
        "</video>" +
      "</div>";
    }
    return "";
  }

  function renderFontes(f) {
    if (!f || !f.length) return "";
    return '<section class="fontes">' +
      "<h2>Fontes consultadas</h2>" +
      "<ol>" + f.map(function (s) {
        var label = esc(s.titulo || s.url || "Fonte");
        var veiculo = s.veiculo ? " — " + esc(s.veiculo) : "";
        var link = s.url
          ? ' <a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>"
          : " " + label;
        var acesso = s.acesso ? " (acesso em " + esc(s.acesso) + ")" : "";
        return "<li>" + link + veiculo + acesso + "</li>";
      }).join("") + "</ol>" +
    "</section>";
  }

  function abnt(p) {
    var hoje = new Date();
    var data = String(hoje.getDate()).padStart(2, "0") + " " +
      ["jan.", "fev.", "mar.", "abr.", "maio", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."][hoje.getMonth()] +
      " " + hoje.getFullYear();
    var url = window.location.href;
    return p.nome + ". Pesquisa escolar. In: PROJETO CONSCIÊNCIA NEGRA. " +
      (C.escola || "") + ", " + (C.ano || "") + ". Disponível em: " + url +
      ". Acesso em: " + data + ".";
  }

  function renderNav(p) {
    var sorted = P.slice().sort(function (a, b) { return a.nome.localeCompare(b.nome, "pt-BR"); });
    var i = sorted.findIndex(function (x) { return x.slug === p.slug; });
    var prev = i > 0 ? sorted[i - 1] : null;
    var next = i > -1 && i < sorted.length - 1 ? sorted[i + 1] : null;

    function item(o, dir) {
      if (!o) return "<span></span>";
      return '<a href="pessoa.html?p=' + encodeURIComponent(o.slug) + '">' +
        "<small>" + dir + "</small>" +
        "<strong>" + esc(o.nome) + "</strong>" +
      "</a>";
    }

    return '<nav class="pessoa__nav" aria-label="Outras pesquisas">' +
      item(prev, "← anterior") + item(next, "próxima →") +
    "</nav>";
  }

  function render(p) {
    document.title = p.nome + " — Consciência Negra";

    var heroMedia = p.foto
      ? '<div class="pessoa__hero-media"><img src="' + esc(p.foto) + '" alt="' +
        esc(p.fotoAlt || "Retrato de " + p.nome) + '" fetchpriority="high" decoding="async"></div>'
      : '<div class="pessoa__hero-media"><div class="ph ph--hero" aria-hidden="true"><span>' +
        esc(initials(p.nome)) + "</span></div></div>";

    var ficha = [
      ["Aluno(s)", (p.aluno && p.aluno.nomes) || "—"],
      ["Turma", (p.aluno && p.aluno.turma) || C.turma || "—"],
      ["Categoria", (p.categorias || []).join(", ") || "—"],
      ["Leitura", (p.tempoLeitura || 2) + " min"]
    ].map(function (row) {
      return '<div class="ficha__item" data-reveal>' +
        '<p class="ficha__k">' + esc(row[0]) + "</p>" +
        '<p class="ficha__v">' + esc(row[1]) + "</p>" +
      "</div>";
    }).join("");

    var secoes = (p.secoes || []).map(function (s, si) {
      return "<h2 data-reveal>" + esc(s.titulo) + "</h2>" + paragraphs(s.texto).replace(/<p>/g, '<p data-reveal>');
    }).join("");

    document.getElementById("pessoa").innerHTML =
      '<section class="pessoa__hero" aria-labelledby="pessoa-name">' +
        heroMedia +
        '<div class="pessoa__hero-content">' +
          '<p class="pessoa__eyebrow" data-reveal>Pesquisa · ' +
            esc((p.categorias && p.categorias[0]) || "Consciência Negra") + "</p>" +
          '<h1 class="pessoa__name" id="pessoa-name" data-reveal>' + esc(p.nome) + "</h1>" +
          '<div class="pessoa__dates" data-reveal>' +
            (anos(p) ? "<span>" + esc(anos(p)) + "</span>" : "") +
            (p.local ? "<span>" + esc(p.local) + "</span>" : "") +
          "</div>" +
        "</div>" +
      "</section>" +

      '<div class="pessoa__body"><div class="wrap">' +
        '<div class="ficha" data-reveal>' + ficha + "</div>" +
        (p.resumo ? '<div class="resumo" data-reveal><p>' + esc(p.resumo) + "</p></div>" : "") +
        '<div class="prose">' + secoes + "</div>" +
        (p.galeria && p.galeria.length ? '<div class="galeria" data-reveal>' + renderGaleria(p.galeria).replace('<div class="galeria">', '').replace('</div>', '') + '</div>' : "") +
        (p.video ? '<div class="video" data-reveal>' + renderVideo(p.video).replace('<div class="video">', '').replace('</div>', '') + '</div>' : "") +
        (p.fontes && p.fontes.length ? '<section class="fontes" data-reveal>' + renderFontes(p.fontes).replace('<section class="fontes">', '').replace('</section>', '') + '</section>' : "") +
        '<div class="abnt" data-reveal>' +
          '<button class="btn" type="button" id="copyAbnt">Copiar citação ABNT</button>' +
          '<span class="abnt__note">Use nas referências do trabalho.</span>' +
        "</div>" +
        '<nav class="pessoa__nav" data-reveal aria-label="Outras pesquisas">' + renderNav(p).replace('<nav class="pessoa__nav" aria-label="Outras pesquisas">', '').replace('</nav>', '') + '</nav>' +
      "</div></div>";

    // Vídeo com click-to-load
    var play = document.getElementById("playVideo");
    if (play && p.video && p.video.embed) {
      play.addEventListener("click", function () {
        document.getElementById("videoBox").innerHTML =
          '<iframe src="' + esc(p.video.embed) + '" title="Vídeo sobre ' + esc(p.nome) +
          '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
          "allowfullscreen loading=\"lazy\"></iframe>";
      });
    }

    // Copiar ABNT
    var btn = document.getElementById("copyAbnt");
    var toast = document.getElementById("toast");
    if (btn) {
      btn.addEventListener("click", function () {
        var texto = abnt(p);
        var done = function () {
          if (toast) {
            toast.textContent = "Citação copiada";
            toast.classList.add("is-on");
            setTimeout(function () { toast.classList.remove("is-on"); }, 2200);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(texto).then(done).catch(function () { fallback(); });
        } else {
          fallback();
        }
        function fallback() {
          var ta = document.createElement("textarea");
          ta.value = texto;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); done(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    }

    // JSON-LD
    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: p.nome,
      birthDate: p.nascimento ? String(p.nascimento) : undefined,
      deathDate: p.morte ? String(p.morte) : undefined,
      description: p.resumo || "",
      image: p.foto || undefined
    });
    document.head.appendChild(ld);

    observeReveals();
  }

  /* ---------- REVEAL (copiado de app.js) ---------- */
  function observeReveals() {
    var els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    var slug = slugFromUrl();
    var p = P.find(function (x) { return x.slug === slug; });
    if (!p) { notFound(); return; }
    render(p);

    var nav = document.getElementById("nav");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
