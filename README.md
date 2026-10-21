# Portfólio pessoal — guia de edição

## Personalização rápida

Siga esta ordem para deixar o site com a sua identidade:

1. Em `content.js`, ajuste `name` e `copyrightYear`.
2. Ainda em `content.js`, edite os títulos da lista `projects`.
3. Nos blocos de `translations`, personalize sua apresentação, profissão,
   localização, descrições dos projetos e contato em cada idioma.
4. Coloque suas imagens em `images/` e informe os caminhos em `siteContent.images`.
5. Em `style.css`, ajuste cores, fontes e tamanhos se desejar.
6. Salve os arquivos, recarregue a página e confira os três idiomas e os dois temas.

Para encontrar rapidamente um campo, pressione `Ctrl+F` no arquivo e procure
pelo nome da chave, como `headline`, `contactTitle` ou `portrait`.
As seções abaixo explicam cada etapa com exemplos.

## Onde fica cada coisa

| Arquivo ou pasta | Função |
| --- | --- |
| `content.js` | Nome, títulos dos projetos, textos nos três idiomas e caminhos das imagens. É o principal arquivo para personalizar o site. |
| `index.html` | Estrutura da página, ordem das seções e molduras das imagens. |
| `style.css` | Fontes, cores, tamanhos, espaçamento, tema escuro e adaptações para celular. |
| `app.js` | Funcionamento do idioma, tema, imagens e janelas dos projetos. |
| `images/` | Coloque aqui suas fotos e capas. A pasta começa sem imagens. |
| `fonts/Pixeboy.ttf` | Fonte do nome principal. |
| `previa-tema-escuro.png` | Captura antiga de referência. Não é usada pela página nem se atualiza automaticamente. |

## 1. Trocar o nome principal

No começo de `content.js`, procure:

```js
"name": "Sant",
```

Troque apenas o texto entre aspas, por exemplo:

```js
"name": "Maria Silva",
```

Esse valor é usado no nome grande, na aba do navegador e no rodapé. Ele permanece
igual ao alternar o idioma. O ano do rodapé fica em `copyrightYear`.

O `<title>` e o `<h1>` de `index.html` são textos iniciais, antes de o JavaScript
carregar. Você pode atualizá-los também para combinar, mas a edição principal
deve ser feita em `content.js`, pois ele preenche a página ao carregar.

## 2. Mudar os títulos e textos das seções

Mais abaixo em `content.js`, o objeto `translations` tem três blocos:

- `"pt-BR"`: português brasileiro.
- `"en"`: inglês.
- `"es"`: espanhol.

Edite o texto à direita da chave no bloco do idioma desejado. Por exemplo, no
bloco `"pt-BR"`:

```js
"headline": "Transformo ideias em experiências digitais.",
```

Atualize também `headline` nos blocos `en` e `es` se quiser as traduções.
A página usa exatamente os textos que você escrever; não há tradução automática.

| Chave para buscar com `Ctrl+F` | Texto na página |
| --- | --- |
| `headline` | Frase principal abaixo do nome. |
| `role` | Profissão no adesivo. |
| `location` | Localização no adesivo. |
| `available` | Mensagem de disponibilidade. |
| `whatsup` | Título da seção Sobre. |
| `bio` | Texto de apresentação. |
| `selected` | Chamada acima dos projetos. |
| `desc1`, `desc2`, `desc3` | Descrição de cada projeto, também exibida na janela de detalhes. |
| `playTitle` | Título do laboratório. |
| `experiment1`, `experiment2`, `experiment3` | Legendas dos experimentos quando ainda estão vazios. |
| `contactTitle` | Título da seção de contato. |
| `contactText` | Frase de contato. |
| `email` | Texto do espaço de e-mail. Atualmente é apenas texto, sem link para enviar mensagem. |

Os atributos `data-t` do HTML indicam a chave correspondente. Por exemplo,
`<h2 data-t="headline"></h2>` recebe o texto de `headline` em `content.js`.
Escrever diretamente dentro desse elemento não basta: o idioma selecionado
substitui esse texto ao carregar a página.

## 3. Trocar os nomes dos projetos

No início de `content.js`, procure a lista `projects`:

```js
"projects": [
  {
    "title": "Tandem",
    "descriptionKey": "desc1",
    "imageKey": "project1"
  },
```

Troque `"Tandem"` pelo nome do seu primeiro projeto. Faça o mesmo com `Forge` e
`Forma` nos próximos itens. O título do cartão e da janela de detalhes será o
mesmo em todos os idiomas. Não altere `descriptionKey` nem `imageKey` para uma
simples troca de título.

Para mudar as descrições, edite `desc1`, `desc2` e `desc3` em cada idioma.
A lista atual está preparada para três projetos; adicionar um quarto exige
adicionar também seu cartão em `index.html` e os textos e a imagem correspondentes.

## 4. Colocar ou substituir imagens

1. Copie a imagem para a pasta `images` deste projeto.
2. Prefira nomes simples, sem espaços, como `retrato.jpg` ou `capa-tandem.webp`.
3. Abra `content.js` e procure o item da imagem em `siteContent.images`.
4. Preencha `src` com o caminho relativo, usando `/`.
5. Preencha `alt` com uma descrição curta da imagem para leitores de tela.

Exemplo de retrato:

```js
"portrait": {
  "src": "images/retrato.jpg",
  "alt": "Retrato de Sant em seu espaço de trabalho"
},
```

Exemplo de capa de projeto:

```js
"project1": {
  "src": "images/capa-tandem.webp",
  "alt": "Telas do aplicativo Tandem"
},
```

| Item em `images` | Lugar na página |
| --- | --- |
| `portrait` | Foto da moldura esquerda na seção Sobre. |
| `workspace` | Foto da moldura direita na seção Sobre. |
| `project1` | Capa do primeiro projeto e de sua janela de detalhes. |
| `project2` | Capa do segundo projeto e de sua janela de detalhes. |
| `project3` | Capa do terceiro projeto e de sua janela de detalhes. |
| `experiment1` | Primeiro espaço do laboratório. |
| `experiment2` | Segundo espaço do laboratório. |
| `experiment3` | Terceiro espaço do laboratório. |

JPG, PNG e WebP funcionam. Confira a extensão real do arquivo: `retrato.jpg`
e `retrato.jpeg` são nomes diferentes. O caminho deve ser relativo ao
`index.html`; não use um caminho do Windows como `C:\Users\...`.

Para remover uma imagem e recuperar a moldura vazia, deixe `"src": ""`.
Se o arquivo não for encontrado, a moldura também reaparece. O texto `alt` é
compartilhado pelos idiomas e deve ser editado nesse mesmo item.

As fotos preenchem a moldura, então as bordas podem ser recortadas. Para mostrar
a imagem inteira, procure `.portfolio-image` no CSS e troque
`object-fit: cover;` por `object-fit: contain;`.

## 5. Ajustar cores e fontes

No início de `style.css`, o bloco `:root` define as cores do tema claro:

```css
--paper: #dfdacb; /* Cor do papel. */
--ink: #201f1b;   /* Cor do texto. */
```

As cores do tema escuro ficam no bloco `[data-theme="dark"]`.
A fonte Pixeboy está no `@font-face` e é aplicada ao seletor `h1`.
As fontes DM Sans, Caveat e Barlow Condensed são carregadas do Google Fonts;
sem internet, o navegador usa as alternativas definidas no CSS.

### Personalizar o papel e as cores de destaque

No bloco `:root`, altere somente os valores das variáveis que deseja ajustar:

| Variável | O que controla |
| --- | --- |
| `--paper` | Cor de fundo do papel. |
| `--rule` | Cor e transparência das linhas do caderno. |
| `--header` | Fundo do cabeçalho. |
| `--ink` | Cor principal dos textos que usam essa variável. |
| `--muted` | Textos secundários. |
| `--yellow`, `--mint`, `--pink`, `--blue` | Cores dos adesivos, destaques e blocos que usam essas variáveis. |

Por exemplo, para um papel mais bege no tema claro:

```css
:root {
  --paper: #d8d0bc;
  --header: #d8d0bcf2;
}
```

Esses trechos são exemplos: edite as propriedades dentro do bloco existente,
sem apagar as outras variáveis. Algumas cores específicas de molduras e capas
estão nas regras de suas próprias classes, não nas variáveis.

Para modificar somente o tema escuro, procure o bloco existente
`[data-theme="dark"]` e ajuste suas variáveis. Confira o contraste dos textos
depois de alterar as cores. O botão ao lado do idioma permite comparar os temas;
a escolha fica salva no navegador.

### Personalizar as fontes e os tamanhos

| Seletor no CSS | Parte da página |
| --- | --- |
| `h1` | Nome principal, atualmente com Pixeboy. |
| `body` | Fonte padrão dos textos, atualmente DM Sans. |
| `.hand` | Textos manuscritos, atualmente Caveat. |
| `.hero h2` | Frase principal abaixo do nome. |
| `.project-copy h2` | Títulos dos projetos. |
| `.contact h2` | Título de contato. |

Para mudar o tamanho, ajuste `font-size` na regra correspondente. Quando houver
`clamp(mínimo, valor adaptável, máximo)`, os três valores permitem que o tamanho
se adapte à largura da tela. As regras `@media` mais abaixo podem substituir
esses valores em celulares ou tablets; confira também esses blocos.

Para usar outra fonte local, coloque o arquivo em `fonts/`, declare um novo
`@font-face` no CSS e use o mesmo nome em `font-family`. Exemplo:

```css
@font-face {
  font-family: "MinhaFonte";
  src: url("fonts/minha-fonte.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

h1 {
  font-family: "MinhaFonte", sans-serif;
}
```

O exemplo exige que esse arquivo exista e que você tenha permissão de uso da
fonte. Para manter o visual atual, não é necessário trocar a Pixeboy.

## 6. Personalizar contato, menus e detalhes dos projetos

- **Contato:** edite `email`, `contactTitle`, `contactText` e `talk` em cada
  idioma de `translations`. O campo `email` atualmente exibe texto; escrever um
  endereço nele não cria automaticamente um link de e-mail.
- **Menus:** os textos ficam em `home`, `about`, `work`, `play` e `contact`.
  Para trocar apenas os rótulos, não altere os destinos `href="#..."` no HTML.
- **Detalhes dos projetos:** `caseStudy`, `casePlaceholder` e `caseNote` são
  textos compartilhados pelas janelas. Cada janela usa o título da lista
  `projects`, a descrição indicada por `descriptionKey` e a capa de `imageKey`.
- **Ordem e estrutura das seções:** edite os blocos comentados em `index.html`.
  Preserve os identificadores `id` usados pela navegação e os atributos
  `data-t`, `data-image` e `data-project` usados pelo JavaScript.

## 7. Conferir a personalização

Depois de salvar, confira:

- O nome principal, o título da aba e o rodapé mostram o nome desejado.
- Os três idiomas exibem os textos que você escreveu.
- Os títulos e as capas correspondem aos projetos corretos, inclusive nas janelas.
- As imagens carregam; se a moldura continuar vazia, confira `src`, a pasta e a extensão.
- O tema claro e o escuro mantêm textos legíveis.
- A página continua utilizável com a janela estreita, simulando uma tela de celular.

Se todos os textos traduzidos ficarem vazios, confira a pontuação de `content.js`
e se ele continua carregando antes de `app.js`. Com Node.js disponível, execute
os comandos abaixo no terminal, dentro da pasta do projeto:

```powershell
node --check content.js
node --check app.js
node work/check-content.cjs
```

## Cuidados ao editar

### Rolagem em folhas e abas dos projetos

As seções são folhas que se sobrepõem conforme você rola a página. Cada seção
fica dentro de uma `.section-layer` em `index.html`. Preserve essa estrutura
ao reorganizar o conteúdo. Folhas mais altas que a tela podem ser lidas por
inteiro antes de a próxima assumir a frente.

Os três projetos ocupam a mesma `.project-stack`. Clique nas abas para trazer
uma pasta à frente; isso não abre a janela de detalhes. O botão **Explorar
projeto** continua abrindo os detalhes do projeto selecionado.

As abas e os arquivos têm a mesma identificação: **azul = 01**, **preto = 02**
e **amarelo = 03**. A aba selecionada fica unida à borda do arquivo e com o
texto sublinhado. Durante a troca, aba e pasta deslizam juntas para a frente.
As abas inativas ficam levantadas, com um espaço visível em relação às pastas;
somente a aba selecionada permanece encostada ao arquivo.

Pelo teclado, use `Tab` para chegar à aba selecionada, as setas esquerda/direita
para trocar de projeto e `Home`/`End` para ir à primeira/última aba. Apenas a
pasta da frente permite interação. Os rótulos das abas continuam em `tab1`,
`tab2` e `tab3` nas traduções de `content.js`.

Para ajustar o efeito, procure os comentários **FOLHAS DO CADERNO** e
**PASTAS DOS PROJETOS** no fim de `style.css`. A variável `--folder-duration`
controla a duração da transição das pastas. O comportamento está nas funções
`initializeProjectTabs` e `initializeSectionStack` de `app.js`.

Se o sistema estiver com movimento reduzido ativado, a sobreposição ainda
acompanha a rolagem, mas a escala das folhas e as transições extras são removidas.

### Ao salvar os arquivos

- Preserve as aspas, vírgulas e chaves de `content.js`.
- Edite os valores, não os nomes das chaves usadas pelo HTML.
- Para aspas dentro de um texto, use `\"`, como em `"Um projeto chamado \"Forma\""`.
- O idioma e o tema ficam salvos no navegador; selecione o idioma que está editando.
- Abra `index.html` diretamente no navegador ou use uma prévia local do VS Code.
- Não é necessário publicar para conferir suas alterações.

## Organização do código

O HTML e o CSS estão divididos por seções com comentários em português.
O JavaScript tem funções separadas para conteúdo, imagens, idioma, projetos,
tema e navegação. `content.js` deve carregar antes de `app.js` no fim do HTML.

Os utilitários de conferência ficam em `work/`. Se tiver Node.js instalado,
`node work/check-content.cjs` verifica as chaves de conteúdo e
`node work/preview.cjs` abre um servidor local em `http://127.0.0.1:4174/`.
`node work/check-folder-motion.cjs` confere a sincronização de aba e arquivo,
as trocas rápidas e o comportamento com movimento reduzido.
Encerre a prévia com `Ctrl+C` no terminal. Esses utilitários não são carregados
pelo site e não são necessários para abrir o HTML diretamente.

## Blog Boa noite

O Projeto 01 abre `blog/index.html`; os projetos 02 e 03 continuam como exemplos.
O título fica em `siteContent.projects[0].title`, e o destino em
`siteContent.projects[0].url`, dentro de `content.js`. A descrição do cartão
fica em `translations['pt-BR'].desc1` (e nas versões `en` e `es`). O link usa
`readBlog` nas três traduções. O conto permanece no idioma original, português.

Para editar a descrição do Blog, altere o texto do parágrafo `id="blogDescription"`
em `blog/index.html`. O conto está nos parágrafos dentro de
`<div class="story-body">` em `blog/O viajante/o-viajante.html`. O nome do autor continua vindo de `siteContent.name`.

As cores da página ficam nas variáveis `--night`, `--text`, `--muted` e
`--accent` em `blog/blog.css`. A lua decorativa é um SVG em grade pixelada no HTML,
sem arquivo de imagem ou geração por IA. Sua posição e opacidade ficam em
`.moon`, no CSS. Basta salvar e recarregar o navegador para ver as alterações.

As observações de continuidade e narrativa estão em `work/revisao-o-viajante.md`.

Os arquivos próprios do Blog ficam na pasta `blog/`: `index.html` (apresentação e chamada do conto), `O viajante/o-viajante.html` (conto),
`blog.css` (aparência) e `blog.js` (comportamento). O conteúdo de identidade
continua compartilhado em `../content.js`, e a fonte em `../fonts/Pixeboy.ttf`.

### Aviso de idade do Blog

O aviso de recomendação de 18 anos aparece somente na entrada da página inicial
do Blog. Não aparece nos contos nem no retorno deles à página inicial.
Os links de retorno dos contos usam `../index.html?origem=conto`; preserve esse parâmetro.
O botão Voltar do navegador também não reabre o aviso.
Edite os textos no bloco `id="ageNotice"` de `blog/index.html`.
A aparência fica nas regras `.age-notice` de `blog/blog.css`.
O botão de continuar e a tecla Escape fecham o aviso; o link de saída volta
ao portfólio. A recomendação é editorial e não verifica a idade do visitante.

A indicação `+18` fica abaixo do título, na chamada da página inicial e na
página do conto. Edite o parágrafo `.content-rating` em cada HTML para alterá-la;
sua aparência fica em `blog/blog.css`. Basta salvar e recarregar.

O subtítulo de capítulo `h2#capitulo-style` tem regra própria em `blog/blog.css`:
`font-size: clamp(20px, 4vw, 32px)`, metade do tamanho do título `.story-title`.

### Próximo episódio e pedido de apoio

`blog/O viajante/Pagina de apelo.html` é o destino de “Próximo episódio”. Por enquanto,
exibe o pedido de apoio no bloco `.support-copy`. Substitua esse bloco pelo novo
texto quando estiver pronto. O primeiro conto permanece intacto.

Para configurar o Pix, substitua o texto “Em breve” no parágrafo `.pix-key` pela
sua chave. Coloque o QR code fornecido por você em `images/` e troque o bloco
`.pix-placeholder` por, por exemplo:
`<img src="../../images/pix.png" alt="QR code para doação via Pix" width="176" height="176">`.
Os espaços atuais são reservados e ainda não permitem doar.

O compartilhamento fica em `blog/apoio.js`: WhatsApp, Telegram, Instagram e cópia. O botão do Instagram copia o texto e abre a rede social. O menu
de apps foi substituído pelo Instagram. Na prévia local, compartilha apenas
a indicação do conto; com endereço público, inclui o link do primeiro episódio.
O contador ao lado do último botão registra compartilhamentos iniciados neste navegador, incluindo cópias concluídas. Não confirma publicações nem soma visitantes. A contagem fica no armazenamento local; se bloqueado, dura só nesta abertura. Não há registro de doações no site.
Salve e recarregue para conferir as alterações.
