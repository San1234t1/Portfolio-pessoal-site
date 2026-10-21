// Usa o nome centralizado no conteúdo compartilhado do portfólio.
document.getElementById('blogAuthor').textContent = siteContent.name;

// Apenas a entrada do Blog tem aviso; os links dos contos marcam o retorno.
function initializeAgeNotice() {
  const ageNotice = document.getElementById('ageNotice');
  if (!ageNotice) return;

  const returningFromStory = new URLSearchParams(location.search).get('origem') === 'conto';
  const historyNavigation = performance.getEntriesByType('navigation')[0]?.type === 'back_forward';
  if (returningFromStory || historyNavigation) return;

  ageNotice.addEventListener('close', () => {
    document.body.classList.remove('notice-open');
    document.querySelector('.blog-intro .read-link').focus({ preventScroll: true });
  });
  document.getElementById('continueReading').addEventListener('click', () => ageNotice.close());

  document.body.classList.add('notice-open');
  ageNotice.showModal();
}

initializeAgeNotice();
