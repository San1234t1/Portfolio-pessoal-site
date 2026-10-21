// Compartilha o primeiro episódio. Na prévia local, envia apenas a indicação
// do conto, pois um endereço deste computador não abre para outras pessoas.
const storyAddress = new URL('o-viajante.html', location.href);
const publicAddress = /^https?:$/.test(storyAddress.protocol)
  && !['localhost', '127.0.0.1', '[::1]'].includes(storyAddress.hostname);
const shareText = 'Leia “O viajante”, um conto de ficção científica macabra no Blog Boa noite. Conteúdo +18.';
const shareContent = publicAddress ? `${shareText}\n${storyAddress.href}` : shareText;
const shareStatus = document.getElementById('shareStatus');
const shareFallback = document.getElementById('shareFallback');

document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${encodeURIComponent(shareContent)}`;
document.getElementById('shareTelegram').href = `https://t.me/share/url?url=${encodeURIComponent(publicAddress ? storyAddress.href : '')}&text=${encodeURIComponent(shareText)}`;

// Contador temporariamente desativado. Preserve este bloco para reativação.
/*
// Este contador registra ações locais, não publicações confirmadas nas redes.
const shareCount = document.getElementById('shareCount');
const counterKey = 'boa-noite-o-viajante-share-count';
let initiatedShares = 0;
try {
  const savedCount = Number(localStorage.getItem(counterKey));
  if (Number.isSafeInteger(savedCount) && savedCount > 0) initiatedShares = savedCount;
} catch {
  // Sem armazenamento, a contagem funciona durante esta abertura da página.
}

function displayShareCount() {
  shareCount.textContent = initiatedShares === 1
    ? '1 compartilhamentos'
    : initiatedShares + ' compartilhamentos';
}

function registerShare() {
  initiatedShares++;
  displayShareCount();
  try {
    localStorage.setItem(counterKey, String(initiatedShares));
  } catch {
    // A indisponibilidade do armazenamento não impede compartilhar.
  }
}

displayShareCount();
for (const id of ['shareWhatsapp', 'shareTelegram']) {
  document.getElementById(id).addEventListener('click', registerShare);
}
*/

document.getElementById('shareInstagram').addEventListener('click', async () => {
  // registerShare();
  try {
    await navigator.clipboard.writeText(shareContent);
    shareStatus.textContent = 'Texto copiado. Cole no Instagram para compartilhar o conto.';
  } catch {
    shareFallback.hidden = false;
    shareFallback.value = shareContent;
    shareFallback.focus();
    shareFallback.select();
    shareStatus.textContent = 'Copie este texto e cole no Instagram para compartilhar o conto.';
  }
});

document.getElementById('copyStory').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(shareContent);
    // registerShare();
    shareStatus.textContent = publicAddress
      ? 'Texto e link copiados. Obrigado por compartilhar!'
      : 'Texto copiado. O link ficará disponível quando o Blog tiver um endereço público.';
  } catch {
    shareFallback.hidden = false;
    shareFallback.value = shareContent;
    shareFallback.focus();
    shareFallback.select();
    shareStatus.textContent = 'Copie o texto selecionado e compartilhe no app que preferir.';
  }
});
