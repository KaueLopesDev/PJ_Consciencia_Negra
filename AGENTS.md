# AGENTS.md — Consciência Negra

Guia de contexto do projeto para agentes de código (OpenCode + ECC).

## Visão geral

Site escolar sobre consciência negra: hero e seção de legado sobre Zumbi dos
Palmares, seguidos de uma grade com pesquisas de alunos. Cada card abre uma
página no mesmo template.

- **Stack:** HTML, CSS e JavaScript puros. Sem build, sem framework, sem banco.
- **Publicação:** GitHub Pages (`.nojekyll` na raiz).
- **Idioma do conteúdo:** português do Brasil.
- **Fonte de verdade do conteúdo:** `js/data.js` (`window.PESSOAS`).

## Estrutura

```text
index.html        Home (hero, legado, grade de pesquisas)
pessoa.html       Template de pesquisa (?p=slug)
sobre.html        Sobre o projeto
qr.html           Gerador de QR code
404.html          Página de erro do GitHub Pages
css/tokens.css    Cores, fontes e espaçamento
css/global.css    Estilos do site
js/data.js        ⭐ Único arquivo a editar para adicionar/alterar conteúdo
js/app.js         Monta a home
js/pessoa.js      Monta a página de pesquisa
pessoas/          Fotos enviadas
assets/           Imagens do site (og.png etc.)
```

`img2threejs-guerreiro/` e `modelo-guerreiro/` são experimentos/protótipos e
**não** fazem parte do site publicado. Só mexa neles quando o pedido for
explícito.

## Comandos úteis

```bash
# Servir localmente (recomendado)
python3 -m http.server 8080
# Abrir http://localhost:8080

# Não existe build, lint ou suíte de testes automatizada neste projeto.
```

## Convenções

- Mantenha HTML/CSS/JS puro: não introduza bundler, framework ou dependência
  npm para o site.
- Preserve a separação: conteúdo em `js/data.js`; markup/comportamento em
  `js/app.js` e `js/pessoa.js`; estilos em `css/`.
- Use `esc()` ao interpolar texto vindo dos dados em HTML. Não injete conteúdo
  não confiável com `innerHTML` sem escapar.
- Conteúdo novo em português, com `slug` único, sem acento e com hífen.
- Imagens: Wikimedia Commons, domínio público ou licença explícita. Nunca use
  Google Imagens. Prefira JPG/WebP com até 1600 px de largura e sempre preencha
  `fotoAlt` e `fotoCredito`.
- Preserve acessibilidade: texto alternativo real, contraste adequado, foco
  visível e navegação por teclado.
- Não edite `node_modules/` nem artefatos gerados em `modelo-guerreiro/out/`.

## Verificação antes de concluir

1. Sirva o site com `python3 -m http.server 8080`.
2. Abra `index.html`, uma página `pessoa.html?p=<slug>` e `sobre.html`.
3. Confira o console do navegador (sem erros) e o layout em desktop e mobile.
4. Se alterou `js/data.js`, confirme que a grade, os filtros e a página interna
   refletem o novo registro.

## Fluxo ECC disponível

Os comandos abaixo foram instalados em `.opencode/commands/`:

| Comando | Uso |
| --- | --- |
| `/plan <tarefa>` | Planejar uma mudança antes de implementar |
| `/tdd <tarefa>` | Ciclo TDD (red → green → refactor) |
| `/code-review [escopo]` | Revisar qualidade, segurança e manutenção |
| `/build-fix [escopo]` | Corrigir erros de build/tipos com mudanças mínimas |
| `/security [escopo]` | Revisão de segurança |
| `/e2e [fluxo]` | Testes E2E com Playwright |
| `/verify [escopo]` | Loop de verificação em seis fases |
| `/refactor-clean [escopo]` | Remover código morto e consolidar duplicatas |
| `/orchestrate <tarefa>` | Orquestrar vários agentes especializados |

Como este checkout pode não ter `.git`, comandos que dependem de diff devem
receber um escopo explícito (arquivo ou diretório) ou revisar o estado atual
dos arquivos.
