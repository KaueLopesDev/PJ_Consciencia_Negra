# Consciência Negra — 40 histórias de resistência

Site escolar sobre consciência negra. Hero e seção de legado sobre **Zumbi dos
Palmares**, seguidos de uma grade com as pesquisas dos alunos — cada card abre
uma página no mesmo template.

Feito em **HTML, CSS e JavaScript puros**. Sem build, sem framework, sem banco
de dados. Publica direto no GitHub Pages.

---

## 1. Como ver o site agora

**Opção A — abrir direto**
Dê duplo clique em `index.html`. Funciona.

**Opção B — servidor local** (recomendado para testar no celular)
```bash
cd consciencia-negra
python3 -m http.server 8080
```
Abra `http://localhost:8080`. No celular, use o IP do computador na mesma rede.

---

## 2. Estrutura

```
consciencia-negra/
├── index.html          Home: hero, legado, grade de pesquisas
├── pessoa.html         Template único de pesquisa (?p=slug)
├── sobre.html          Sobre o projeto
├── qr.html             Gera o QR code do site
├── 404.html            Página de erro (GitHub Pages usa automaticamente)
├── css/
│   ├── tokens.css      Cores, fontes, espaçamento
│   └── global.css      Todo o estilo
├── js/
│   ├── data.js         ⭐ O ÚNICO ARQUIVO QUE VOCÊ EDITA
│   ├── app.js          Monta a home
│   └── pessoa.js       Monta a página de pesquisa
├── pessoas/            Coloque as fotos aqui
└── assets/             Imagens do site (og.jpg etc.)
```

---

## 3. Adicionar a pesquisa de um aluno

Abra `js/data.js` e copie um objeto inteiro da lista `window.PESSOAS`.
Cole no fim, antes do `];`, e troque os valores:

```js
{
  slug: "nome-da-pessoa",          // único, sem acento, com hífen
  nome: "Nome da Pessoa",
  nascimento: 1940,
  morte: null,                     // null se ainda está vivo
  local: "Cidade, Estado",
  categorias: ["Literatura"],      // veja a lista de categorias abaixo
  resumoCard: "Uma frase de até 90 caracteres.",
  resumo: "Parágrafo de abertura, 2 ou 3 linhas.",
  foto: "",                        // "" = placeholder com iniciais
  fotoAlt: "Descrição da imagem",
  fotoCredito: "",
  secoes: [
    { titulo: "Quem foi", texto: "Primeiro parágrafo.\nSegundo parágrafo." },
    { titulo: "Por que importa hoje", texto: "Texto..." }
  ],
  galeria: [],                     // ou [{ src, alt, credito }]
  video: null,                     // ou { url } ou { embed, poster }
  fontes: [
    { titulo: "Título", veiculo: "Veículo", url: "https://...", acesso: "2026-11-07" }
  ],
  aluno: { nomes: "Juan, Eduardo", turma: "3º B" },
  tempoLeitura: 2
}
```

### Categorias usadas nos filtros
`Literatura` · `Música` · `Política` · `Esporte` · `Ciência` · `Religião` ·
`Artes` · `Ativismo` · `Resistência` · `Abolicionismo` · `Direito`

Você pode criar outras — os chips são gerados automaticamente a partir dos
dados.

### Nome do aluno no card
É o campo `aluno.nomes`. Ele aparece no **canto superior direito** do card.
Para duplas ou trios, separe com vírgula: `"Juan, Eduardo, Fellype"`.

---

## 4. Adicionar fotos

1. Salve a imagem em `pessoas/` (ex.: `pessoas/luis-gama.jpg`).
2. No registro, escreva `foto: "pessoas/luis-gama.jpg"`.
3. Preencha `fotoAlt` (descrição real) e `fotoCredito` (fonte e licença).

**Regras de imagem**
- Use Wikimedia Commons, domínio público ou licença explícita.
- Nunca baixe do Google Imagens.
- Prefira JPG/WebP com até 1600px de largura.
- Sem foto? Deixe `""` — o site gera um placeholder bonito com as iniciais.

---

## 5. Vídeo e galeria (opcionais)

Galeria:
```js
galeria: [
  { src: "pessoas/foto1.jpg", alt: "Descrição", credito: "Foto: Wikimedia Commons" }
]
```

Vídeo do YouTube (carrega só quando o usuário clica):
```js
video: {
  embed: "https://www.youtube.com/embed/CODIGO_DO_VIDEO",
  poster: "pessoas/capa-do-video.jpg"
}
```

Vídeo em arquivo MP4:
```js
video: { url: "pessoas/video.mp4", poster: "pessoas/capa.jpg" }
```

Se `galeria` for `[]` e `video` for `null`, os blocos simplesmente não aparecem.

---

## 6. Quando as pesquisas estiverem prontas

Em `js/data.js`, no topo:

```js
mostrarAvisoExemplo: false
```

Isso remove a faixa amarela de "modo molde". Também vale apagar ou substituir
os 18 registros de exemplo.

E atualize os dados do projeto:

```js
escola: "Nome da Escola",
turma: "3º Ano B",
professor: "Prof. Nome",
ano: "2026"
```

---

## 7. Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `consciencia-negra`).
2. Envie esta pasta:
   ```bash
   cd consciencia-negra
   git init
   git add .
   git commit -m "Site do projeto Consciência Negra"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/consciencia-negra.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages**.
4. Em *Source*, escolha **Deploy from a branch**.
5. Branch: `main` · Pasta: `/ (root)` · **Save**.
6. Espere 1–2 minutos. O site fica em:
   ```
   https://SEU-USUARIO.github.io/consciencia-negra/
   ```

> O arquivo `.nojekyll` já está incluído — ele evita que o GitHub tente
> processar o site com Jekyll.

### Atualizar depois de mudar algo
```bash
git add .
git commit -m "Atualiza pesquisas"
git push
```
O GitHub Pages republica sozinho em cerca de 1 minuto.

---

## 8. Compartilhamento (WhatsApp, Instagram, X)

O `index.html` já tem as tags Open Graph apontando para `assets/og.png`
(imagem 1200×630 pronta). Para o preview aparecer corretamente fora do site,
troque os caminhos relativos pelas URLs absolutas:

```html
<meta property="og:url" content="https://SEU-USUARIO.github.io/consciencia-negra/">
<meta property="og:image" content="https://SEU-USUARIO.github.io/consciencia-negra/assets/og.png">
```

Depois teste no [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
(força o recarregamento do cache).

---

## 9. QR code

Abra `qr.html` **no site publicado** — ele detecta a URL sozinho e gera o QR.
Clique em **Imprimir** para colocar no cartaz.

Se estiver testando localmente, cole a URL do GitHub Pages no campo e clique
em **Gerar QR**.

> O QR é gerado pela API `api.qrserver.com`, então precisa de internet no
> momento da geração. O QR impresso funciona offline.

---

## 10. Trocar a pessoa central (Zumbi)

O hero, o legado, a linha do tempo e os números vêm de `CONFIG.central` em
`js/data.js`. Para usar outra pessoa:

- `nome`, `anos`, `local`, `eyebrow`, `manifesto`
- `foto` (deixe `""` para o placeholder artístico)
- `legado.feitos`, `legado.citacao`, `legado.linhaDoTempo`, `legado.impacto`

---

## 11. Regras de conteúdo (importantes)

- **Não invente fatos, datas, falas ou números.** Se não há fonte, omita.
- Toda pesquisa termina com a lista de fontes.
- Cite pessoas com o nome correto e sem eufemismos.
- Religiões de matriz africana não são sinônimos: Candomblé, Umbanda e outras
  têm histórias próprias.
- Não use imagens sem licença.
- Não use frases atribuídas a Zumbi sem fonte documental — não existem
  registros escritos de falas dele. O site usa um texto do projeto, marcado
  como tal.

---

## 12. O que ainda pode ser adicionado

- Linha do tempo interativa em tela cheia
- Mapa do Brasil com as pessoas por estado
- Modo apresentação (slide por slide, setas do teclado)
- Página por turma (`/turma/3b`) filtrando os alunos
- Player de áudio com depoimentos
- Busca por voz

---

## 13. Créditos

- Tipografia: Anton, Instrument Serif e Inter (Google Fonts, licença aberta)
- Conteúdo: alunos e professor responsável
- Design e código: projeto escolar, uso livre para fins educacionais
