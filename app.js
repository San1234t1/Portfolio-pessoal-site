/**
 * FUNCIONAMENTO DO SITE
 * Para mudar nome, títulos, traduções ou imagens, edite content.js.
 * Este arquivo cuida das interações e da exibição do conteúdo.
 */

// Elementos compartilhados pelas funções.
const languageSelect = document.getElementById('language');
const themeToggle = document.getElementById('themeToggle');
const projectDialog = document.getElementById('projectDialog');
const projectDialogImage = document.getElementById('dialogImage');
const dialogPlaceholder = projectDialogImage.innerHTML;
let activeProjectIndex = 0;

// Rótulos dos controles: acompanham o idioma selecionado.
const controlLabels = {
  'pt-BR': {
    language: 'Idioma da página',
    close: 'Fechar',
    pageTitle: 'Portfólio',
    lightTheme: 'Ativar tema claro',
    darkTheme: 'Ativar tema escuro'
  },
  en: {
    language: 'Page language',
    close: 'Close',
    pageTitle: 'Portfolio',
    lightTheme: 'Switch to light theme',
    darkTheme: 'Switch to dark theme'
  },
  es: {
    language: 'Idioma de la página',
    close: 'Cerrar',
    pageTitle: 'Portafolio',
    lightTheme: 'Activar tema claro',
    darkTheme: 'Activar tema oscuro'
  }
};

// A página funciona mesmo se o navegador bloquear o armazenamento local.
function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Salvar a preferência é opcional para o funcionamento do site.
  }
}

// Preenche os elementos marcados no HTML com data-t="nomeDaChave".
function translateElements(container = document) {
  const currentTranslations = translations[languageSelect.value];

  container.querySelectorAll('[data-t]').forEach((element) => {
    const translatedText = currentTranslations[element.dataset.t];
    if (translatedText !== undefined) element.textContent = translatedText;
  });
}

function displaySiteIdentity() {
  document.getElementById('siteName').textContent = siteContent.name;
  document.getElementById('copyright').textContent =
    `${siteContent.name} © ${siteContent.copyrightYear}`;

  document.querySelectorAll('[data-project-title]').forEach((heading) => {
    const projectIndex = Number(heading.dataset.projectTitle);
    heading.textContent = siteContent.projects[projectIndex].title;
  });
}

function setLanguage(requestedLanguage) {
  const language = Object.hasOwn(translations, requestedLanguage)
    ? requestedLanguage
    : 'pt-BR';
  const labels = controlLabels[language];

  languageSelect.value = language;
  document.documentElement.lang = language;
  document.title = `${siteContent.name} — ${labels.pageTitle}`;
  languageSelect.setAttribute('aria-label', labels.language);
  document.querySelector('.close').setAttribute('aria-label', labels.close);
  document.querySelector('.logo').setAttribute('aria-label', translations[language].home);

  translateElements();
  updateProjectDialog();
  updateThemeButton();
  savePreference('portfolio-language', language);
}

// IMAGENS: src vazio mantém a moldura; um caminho exibe a imagem.
// Se o arquivo não existir, o espaço reservado reaparece automaticamente.
function displayImage(container, imageSettings) {
  if (!imageSettings?.src.trim()) return;

  const placeholderNodes = Array.from(container.childNodes);
  const image = document.createElement('img');
  image.className = 'portfolio-image';
  image.alt = imageSettings.alt;
  image.loading = 'lazy';
  image.decoding = 'async';

  image.addEventListener('error', () => {
    // Ignora respostas de uma imagem antiga se outro projeto já foi aberto.
    if (!container.contains(image)) return;
    container.classList.remove('has-image');
    container.replaceChildren(...placeholderNodes);
    translateElements(container);
  }, { once: true });

  container.classList.add('has-image');
  container.replaceChildren(image);
  image.src = imageSettings.src;
}

function displayPageImages() {
  document.querySelectorAll('[data-image]').forEach((container) => {
    const imageSettings = siteContent.images[container.dataset.image];
    displayImage(container, imageSettings);
  });
}

// DETALHES: usa o mesmo título e a mesma capa do cartão de projeto.
function updateProjectDialog() {
  const project = siteContent.projects[activeProjectIndex];
  document.getElementById('dialogTitle').textContent = project.title;
  document.getElementById('dialogDescription').textContent =
    translations[languageSelect.value][project.descriptionKey];

  projectDialogImage.classList.remove('has-image');
  projectDialogImage.innerHTML = dialogPlaceholder;
  translateElements(projectDialogImage);
  displayImage(projectDialogImage, siteContent.images[project.imageKey]);
}

function openProjectDialog(projectIndex) {
  activeProjectIndex = projectIndex;
  updateProjectDialog();
  projectDialog.showModal();
}

function closeDialogWhenClickingOutside(event) {
  if (event.target !== projectDialog) return;

  const bounds = projectDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) projectDialog.close();
}

// TEMA: ativa as cores declaradas em style.css.
function updateThemeButton() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const labels = controlLabels[languageSelect.value];
  const label = isDark ? labels.lightTheme : labels.darkTheme;

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.firstElementChild.textContent = isDark ? '☀' : '☾';
}

function setTheme(requestedTheme) {
  const theme = requestedTheme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
  savePreference('portfolio-theme', theme);
}

function toggleTheme() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  setTheme(isDark ? 'light' : 'dark');
}

// ABAS DOS PROJETOS: traz uma pasta à frente sem alterar a altura da pilha.
function initializeProjectTabs() {
  const projectStack = document.querySelector('.project-stack');
  const tabs = Array.from(document.querySelectorAll('[data-tab]'));
  const panels = Array.from(projectStack.querySelectorAll('[role="tabpanel"]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selectedIndex = -1;
  let folderAnimations = [];

  function selectProject(index, moveFocus = false) {
    if (index === selectedIndex) {
      if (moveFocus) tabs[index].focus({ preventScroll: true });
      return;
    }

    const shouldAnimate = selectedIndex !== -1 && !reducedMotion.matches;
    // Cancela a troca anterior para que cliques rápidos nunca deixem pastas presas.
    folderAnimations.forEach((animation) => animation.cancel());
    folderAnimations = [];

    tabs.forEach((tab, tabIndex) => {
      const isSelected = tabIndex === index;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      panels[tabIndex].classList.toggle('is-active', isSelected);
      panels[tabIndex].setAttribute('aria-hidden', String(!isSelected));
      panels[tabIndex].inert = !isSelected;
    });

    selectedIndex = index;
    if (shouldAnimate) {
      const duration = parseFloat(getComputedStyle(projectStack)
        .getPropertyValue('--folder-duration')) || 680;
      const movement = [
        { transform: 'translateY(36px)' },
        { transform: 'translateY(0)' }
      ];
      const timing = { duration, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' };

      // Aba e arquivo percorrem exatamente o mesmo caminho, sem se separarem.
      folderAnimations = [panels[index], tabs[index]].map((element) =>
        element.animate(movement, timing)
      );
    }

    if (moveFocus) tabs[index].focus({ preventScroll: true });
  }

  // Setas percorrem as abas; Home e End vão à primeira e à última.
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectProject(index));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;

      event.preventDefault();
      selectProject(nextIndex, true);
    });
  });

  function selectProjectFromHash() {
    const index = panels.findIndex((panel) => `#${panel.id}` === location.hash);
    if (index !== -1) selectProject(index);
  }

  selectProject(0);
  selectProjectFromHash();
  projectStack.classList.add('tabs-ready');
  window.addEventListener('hashchange', selectProjectFromHash);
}

// FOLHAS SOBREPOSTAS: o navegador controla a rolagem; não interceptamos a roda.
function initializeSectionStack() {
  const layers = Array.from(document.querySelectorAll('.section-layer'));
  const header = document.querySelector('header');
  const navigationLinks = Array.from(document.querySelectorAll('nav a'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let framePending = false;
  let headerHeight = header.offsetHeight;
  // Marcadores ficam no fluxo normal: âncoras não podem usar a posição já fixa da folha.
  const anchors = layers.map((layer, index) => {
    const anchor = document.createElement('div');
    anchor.className = 'section-scroll-anchor';
    anchor.setAttribute('aria-hidden', 'true');
    layer.before(anchor);
    layer.style.setProperty('--section-level', index + 1);
    return anchor;
  });

  function scrollToSection(hash) {
    const id = hash.slice(1);
    const sectionIndex = layers.findIndex((layer) =>
      layer.firstElementChild.id === id || layer.querySelector(`[id="${CSS.escape(id)}"]`)
    );
    if (sectionIndex === -1) return false;

    const top = anchors[sectionIndex].getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(0, top - headerHeight - 12),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
    return true;
  }

  function updateScrollState() {
    framePending = false;
    const positions = layers.map((layer) => layer.getBoundingClientRect());
    const visibleHeight = Math.max(1, window.innerHeight - headerHeight);
    let currentSectionId = layers[0].firstElementChild.id;

    // Lê as posições antes de escrever estilos, evitando cálculos repetidos.
    layers.forEach((layer, index) => {
      const nextTop = positions[index + 1]?.top ?? window.innerHeight;
      const overlap = Math.max(0, Math.min(1,
        (window.innerHeight - nextTop) / visibleHeight
      ));

      layer.style.setProperty('--section-scale', reducedMotion.matches ? 1 : 1 - overlap * 0.025);
      const nextPosition = positions[index + 1];
      const fullyCovered = nextPosition &&
        nextPosition.top <= Math.max(headerHeight + 12, positions[index].top) + 1 &&
        nextPosition.bottom >= positions[index].bottom - 1;
      // Folhas inteiramente cobertas não entram na navegação por teclado.
      layer.inert = Boolean(fullyCovered);
      if (positions[index].top <= headerHeight + visibleHeight * 0.4) {
        currentSectionId = layer.firstElementChild.id;
      }
    });

    navigationLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
    });
  }

  function requestScrollUpdate() {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateScrollState);
  }

  function measureLayers() {
    headerHeight = header.offsetHeight;
    const availableHeight = Math.max(1, window.innerHeight - headerHeight - 12);
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--section-height', `${availableHeight}px`);

    layers.forEach((layer) => {
      // Folhas altas rolam por inteiro antes de se fixarem pela borda inferior.
      const extraHeight = Math.max(0, layer.offsetHeight - availableHeight);
      layer.style.setProperty('--section-top', `${headerHeight + 12 - extraHeight}px`);
    });
    requestScrollUpdate();
  }

  const resizeObserver = new ResizeObserver(measureLayers);
  resizeObserver.observe(header);
  layers.forEach((layer) => resizeObserver.observe(layer));
  window.addEventListener('resize', measureLayers);
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  reducedMotion.addEventListener('change', measureLayers);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (!scrollToSection(hash)) return;
    event.preventDefault();
    history.pushState(null, '', hash);
  });
  window.addEventListener('hashchange', () => scrollToSection(location.hash));
  measureLayers();
  if (location.hash) requestAnimationFrame(() => scrollToSection(location.hash));
}

// INICIALIZAÇÃO: conteúdo, preferências e ações dos botões.
displaySiteIdentity();
setLanguage(readPreference('portfolio-language', 'pt-BR'));
setTheme(readPreference('portfolio-theme', 'light'));
displayPageImages();
initializeProjectTabs();
initializeSectionStack();

languageSelect.addEventListener('change', () => setLanguage(languageSelect.value));
themeToggle.addEventListener('click', toggleTheme);
projectDialog.addEventListener('click', closeDialogWhenClickingOutside);
document.querySelector('.close').addEventListener('click', () => projectDialog.close());

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    openProjectDialog(Number(button.dataset.project));
  });
});
