# AGENTS.md

## Escopo e instruções do usuário

- Este arquivo orienta o trabalho nesta pasta e em suas subpastas.
- Trabalhe somente em `C:\Users\Usuario\Desktop\Portfolio pessoal site`.
  Esta é a versão atual do projeto. Não altere nem sincronize as cópias antigas
  em `Documents\Codex`.
- O usuário acompanha o trabalho por esta conversa e pode editar os mesmos
  arquivos no VS Code. Leia os arquivos atuais antes de modificar qualquer coisa
  e preserve as alterações manuais do usuário.
- O site deve continuar local. Não publique, faça deploy, envie o código para
  hospedagem nem mude permissões de acesso sem uma nova solicitação explícita.
- Novas instruções explícitas do usuário prevalecem sobre estas convenções.

## Visão geral do projeto

Portfólio pessoal estático, inspirado na referência visual fornecida pelo usuário:
papel de caderno, elementos de scrapbook, molduras estilo polaroid, adesivos
coloridos e projetos em blocos de cor. O site foi iniciado com o plugin Sites,
mas o usuário optou por mantê-lo local.

Use HTML, CSS e JavaScript simples. Preserve o funcionamento ao abrir
`index.html` diretamente e em um servidor local. Não introduza framework,
dependências, instalação ou etapa de build para mudanças que o projeto atual
consegue atender diretamente.

## Estrutura dos arquivos

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura semântica, seções, controles e molduras. |
| `content.js` | Conteúdo editável: identidade, projetos, traduções e imagens. |
| `style.css` | Aparência, fontes, cores, temas e layout responsivo. |
| `app.js` | Comportamento: idioma, tema, imagens, navegação e detalhes dos projetos. |
| `images/` | Fotos e capas inseridas manualmente pelo usuário. |
| `fonts/Pixeboy.ttf` | Fonte local do título principal. |
| `README.md` | Guia de edição manual destinado ao usuário. |
| `.editorconfig` | Convenções de formatação. |
| `work/` | Utilitários locais, verificações e arquivos temporários. |

As capturas de prévia são referências de conferência. Não são imagens do
portfólio nem se atualizam automaticamente.

## Legibilidade e manutenção

- Escreva código para leitura humana: indentação de dois espaços, UTF-8,
  quebras de linha LF e uma quebra ao final do arquivo, conforme `.editorconfig`.
- Não minifique os arquivos de trabalho. Use blocos bem separados, uma
  declaração CSS por linha e funções com responsabilidades claras.
- Use comentários e documentação em português, explicando o propósito e os
  pontos de edição. Evite comentários que apenas repitam o código.
- Mantenha nomes de funções e variáveis descritivos e consistentes com o código
  existente. Não duplique a configuração em vários lugares.
- Separe conteúdo, estrutura, estilo e comportamento conforme a tabela acima.
- Remova regras comprovadamente substituídas ou redundantes com cuidado para
  preservar a cascata do CSS, o tema escuro e os ajustes para celular.
- Mantenha mudanças proporcionais ao pedido e preserve o visual e as funções
  existentes durante reorganizações.
- Não deixe scripts temporários capazes de reescrever o projeto por engano.
  Mantenha apenas utilitários úteis e documentados em `work/`.

## Conteúdo e edição manual

- Centralize nome, ano do rodapé, títulos de projetos e caminhos das imagens
  em `siteContent`, no arquivo `content.js`.
- Preserve o nome atual definido pelo usuário (`Sant`, enquanto não alterado).
  A troca de idioma não deve substituí-lo por um nome genérico.
- Use o mesmo título de projeto no cartão e na janela de detalhes. As
  descrições devem continuar vinculadas por `descriptionKey`.
- Mantenha `content.js` carregado antes de `app.js` no HTML.
- Elementos com `data-t` recebem texto de `translations`. Não instrua o usuário
  a editar apenas o conteúdo desses elementos no HTML, pois ele será substituído.
- Preserve as relações entre `data-t`, `data-project`, `data-project-title`,
  `data-image` e suas configurações. Ao acrescentar itens, atualize todas as
  partes correspondentes.
- Projetos e textos ilustrativos devem continuar identificados como exemplos
  até serem substituídos por conteúdo real. Não invente trabalhos, resultados,
  depoimentos ou informações pessoais.
- Atualize `README.md` quando mudar o modo de editar títulos, textos, cores ou
  imagens. Inclua exemplos simples e informe quando basta salvar e recarregar.

## Idiomas

- Preserve o seletor com as opções `Portugues Br`, `English` e `Español`.
- Mantenha os três blocos de traduções: `pt-BR`, `en` e `es`.
- Ao adicionar ou alterar conteúdo traduzível, mantenha as chaves consistentes
  e forneça os textos correspondentes nos três idiomas.
- Traduza também os rótulos acessíveis e os estados dos controles.
- Atualize o atributo `lang` da página e o título da aba conforme o idioma.
- Salve a preferência de idioma no navegador e mantenha uma alternativa
  funcional se o armazenamento local estiver indisponível.

## Imagens

- Não gere imagens. Preserve os espaços reservados até o usuário fornecer
  arquivos ou preencher seus caminhos manualmente.
- Não use imagens de referência ou capturas de tela como conteúdo definitivo.
- Armazene as imagens do usuário em `images/` e use caminhos relativos com `/`,
  como `images/retrato.jpg`, em vez de caminhos absolutos do Windows.
- Configure cada imagem com `src` e `alt` em `siteContent.images`.
- `src` vazio deve manter a moldura. Um arquivo inexistente deve restaurar o
  espaço reservado, sem deixar o layout quebrado.
- Preserve as molduras, o comportamento responsivo e o enquadramento definido
  por `.portfolio-image`. Use `alt` descritivo para imagens de conteúdo.
- As capas devem permanecer vinculadas ao cartão e à janela do mesmo projeto
  por `imageKey`.
- Não acrescente imagens de demonstração permanentes para testar. Se usar um
  arquivo existente temporariamente na conferência, restaure a configuração.

## Aparência e acessibilidade

- Preserve a identidade inspirada em caderno e scrapbook, sem exigir cópia
  literal da referência.
- Mantenha Pixeboy no título principal e o arquivo local da fonte em `fonts/`.
- O papel do tema claro deve ter o tom mais fechado já escolhido, evitando
  voltar ao fundo quase branco. Preserve as linhas de caderno nos dois temas.
- Mantenha o botão de tema ao lado do seletor de idioma, com estado acessível,
  ícone e rótulo correspondentes à próxima ação.
- Salve a preferência de tema no navegador; sua indisponibilidade não deve
  impedir o funcionamento do site.
- Preserve contraste legível, navegação por teclado, foco visível e rótulos dos
  controles. Respeite `prefers-reduced-motion`.
- Confira que desktop e celular mantêm texto legível, controles utilizáveis e
  molduras bem dimensionadas.
- Preserve abertura e fechamento das janelas de projeto, incluindo Escape e
  clique fora da janela.
- Mantenha as seções como folhas que se sobrepõem durante a rolagem, permitindo
  ler por inteiro as seções mais altas que a tela. Os links do menu devem usar
  as posições originais das folhas, não suas posições já fixas.
- Preserve os projetos em uma pilha controlada por abas: apenas o painel da
  frente permite interação. Mantenha as relações de `tab`/`tabpanel`, o estado
  selecionado e a troca por setas, Home e End.
- A aba selecionada deve ficar unida ao arquivo, com a mesma cor. Na troca,
  aba e pasta deslizam juntas para a frente, sem criar um vão entre elas.
- Com movimento reduzido, mantenha a sobreposição vinculada à rolagem e remova
  a escala e as transições extras.

## Verificação

Execute verificações proporcionais às alterações. Para mudanças no conteúdo ou
no JavaScript, os comandos disponíveis, executados na raiz, são:

```powershell
node --check content.js
node --check app.js
node work/check-content.cjs
```

O último comando confere traduções, referências de imagens, projetos e ordem
dos scripts. Se a estrutura mudar, atualize essa verificação de forma coerente;
não altere as expectativas apenas para esconder um erro.

Quando a mudança afetar comportamento ou aparência, confira no navegador os
itens relevantes: idiomas, permanência do nome, tema, projetos, imagens vazias
ou configuradas e adaptação da página. Não crie uma suíte extensa para uma
edição pequena e reversível.

Para uma prévia local, com Node.js instalado:

```powershell
node work/preview.cjs
```

O endereço é `http://127.0.0.1:4174/`. O servidor deve atender apenas esta pasta
e permanecer limitado ao computador local. Encerre-o quando a conferência
terminar, salvo quando necessário para a prévia que o usuário estiver usando.

## Comunicação e entrega

- Converse em português claro e explique o resultado sem excesso de detalhes
  técnicos, a menos que o usuário peça.
- Avise de forma breve o que vai alterar e relate o que mudou, o que foi
  conferido e qualquer limitação real.
- Use links com caminhos absolutos ao apontar arquivos para o usuário.
- Ao explicar edição manual, indique o arquivo e a chave exatos, com exemplos
  que correspondam ao código atual.
- Não peça confirmação novamente para trabalho local já autorizado e
  reversível. Se uma permissão realmente bloquear uma ação, explique a pasta
  ou operação afetada e o motivo concreto.
