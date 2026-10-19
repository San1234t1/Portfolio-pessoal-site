// Confere a sincronização das animações sem depender da configuração do sistema.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync('app.js', 'utf8');
const start = source.indexOf('function initializeProjectTabs()');
const end = source.indexOf('// FOLHAS SOBREPOSTAS', start);

function checkMotion(reduceMotion) {
  const animations = [];
  function element(id) {
    return {
      id,
      classList: { toggle() {}, add() {} },
      events: {},
      setAttribute() {},
      focus() {},
      addEventListener(event, handler) { this.events[event] = handler; },
      animate(frames, timing) {
        const animation = { id, frames, timing, canceled: false };
        animation.cancel = () => { animation.canceled = true; };
        animations.push(animation);
        return animation;
      }
    };
  }
  const tabs = [1, 2, 3].map(number => element('tab' + number));
  const panels = [1, 2, 3].map(number => element('project' + number));
  const stack = { classList: { add() {} }, querySelectorAll: () => panels };
  vm.runInNewContext(source.slice(start, end) + '; initializeProjectTabs();', {
    document: { querySelector: () => stack, querySelectorAll: () => tabs },
    window: { matchMedia: () => ({ matches: reduceMotion }), addEventListener() {} },
    location: { hash: '' },
    getComputedStyle: () => ({ getPropertyValue: () => '680ms' })
  });

  tabs[2].events.click();
  if (reduceMotion) {
    assert.equal(animations.length, 0);
    return;
  }

  assert.equal(animations.length, 2);
  assert.equal(animations[0].id, 'project3');
  assert.equal(animations[1].id, 'tab3');
  assert.equal(animations[0].frames, animations[1].frames);
  assert.equal(animations[0].timing, animations[1].timing);
  assert.equal(animations[0].timing.duration, 680);
  tabs[2].events.click();
  assert.equal(animations.length, 2, 'Repetir a aba não deve reiniciar a animação.');
  tabs[1].events.click();
  assert.ok(animations[0].canceled && animations[1].canceled);
  assert.equal(animations.length, 4);
}

checkMotion(false);
checkMotion(true);
console.log('Aba e pasta sincronizadas; cliques rápidos e movimento reduzido verificados.');
