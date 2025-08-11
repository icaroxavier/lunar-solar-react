import '@testing-library/jest-dom/vitest';
import 'whatwg-fetch';
import RO from 'resize-observer-polyfill';

if (!(globalThis as any).ResizeObserver) {
  (globalThis as any).ResizeObserver = RO as unknown as typeof ResizeObserver;
}

Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
  configurable: true,
  value: 800
});
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
  configurable: true,
  value: 300
});
Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  value: 800
});
Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
  configurable: true,
  value: 300
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
    toJSON() {}
  } as DOMRect;
};

if (!window.matchMedia) {
  window.matchMedia = () => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: () => {}, 
    removeListener: () => {}, 
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false
  });
}
