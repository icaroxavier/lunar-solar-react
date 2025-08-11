import '@testing-library/jest-dom/vitest';
import 'whatwg-fetch';
import RO from 'resize-observer-polyfill';

type GlobalWithRO = typeof globalThis & { ResizeObserver?: typeof ResizeObserver };
const gw = globalThis as GlobalWithRO;
if (typeof gw.ResizeObserver === 'undefined') {
  gw.ResizeObserver = RO as unknown as typeof ResizeObserver;
}

Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  value: 800,
});
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
  configurable: true,
  value: 300,
});
Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  value: 800,
});
Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  configurable: true,
  value: 300,
});

HTMLElement.prototype.getBoundingClientRect = function () {
  return {
    x: 0,
    y: 0,
    width: 800,
    height: 300,
    top: 0,
    left: 0,
    right: 800,
    bottom: 300,
    toJSON() {},
  } as DOMRect;
};

const mql: MediaQueryList = {
  matches: false,
  media: '',
  onchange: null,
  addListener() {},
  removeListener() {},
  addEventListener() {},
  removeEventListener() {},
  dispatchEvent() {
    return false;
  },
};
if (!window.matchMedia) {
  window.matchMedia = () => mql;
}
