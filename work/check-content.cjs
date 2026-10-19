const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const contentSource = fs.readFileSync('content.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');
const { siteContent, translations } = vm.runInNewContext(
  contentSource + '; ({ siteContent, translations })'
);

const translationKeys = [...html.matchAll(/data-t="([^"]+)"/g)].map(match => match[1]);
for (const language of ['pt-BR', 'en', 'es']) {
  for (const key of translationKeys) {
    assert.equal(typeof translations[language][key], 'string', language + ': ' + key);
  }
  console.log(language + ': todas as traduções presentes.');
}

const imageKeys = [...html.matchAll(/data-image="([^"]+)"/g)].map(match => match[1]);
assert.equal(imageKeys.length, 8);
for (const key of imageKeys) {
  assert.equal(typeof siteContent.images[key].src, 'string');
  assert.ok(siteContent.images[key].alt.length > 0);
}
for (const project of siteContent.projects) {
  assert.ok(siteContent.images[project.imageKey]);
  assert.ok(translations['pt-BR'][project.descriptionKey]);
}
assert.ok(html.indexOf('src="content.js"') < html.indexOf('src="app.js"'));
console.log('Oito imagens, três projetos e ordem dos scripts verificados.');

// As abas precisam controlar os painéis corretos e ter IDs únicos.
const tabs = [...html.matchAll(/<button[^>]*role="tab"[^>]*>/g)].map(match => match[0]);
assert.equal(tabs.length, siteContent.projects.length);
const projectColors = ['blue', 'dark', 'yellow'];
for (let index = 0; index < tabs.length; index++) {
  const panelId = 'project' + (index + 1);
  const tabId = 'projectTab' + (index + 1);
  assert.ok(tabs[index].includes(`aria-controls="${panelId}"`));
  assert.ok(html.includes(`id="${panelId}" role="tabpanel" aria-labelledby="${tabId}"`));
  const panel = html.match(new RegExp(`<article id="${panelId}"[\\s\\S]*?</article>`))[0];
  assert.ok(panel.includes(`class="project ${projectColors[index]}"`), 'Cor incorreta: ' + panelId);
  assert.ok(panel.includes(`<span class="project-number">0${index + 1}</span>`));
}
const pageIds = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(pageIds).size, pageIds.length, 'IDs duplicados no HTML.');
assert.equal((html.match(/class="section-layer"/g) || []).length, 5);
console.log('Abas, painéis e cinco folhas de conteúdo verificados.');

