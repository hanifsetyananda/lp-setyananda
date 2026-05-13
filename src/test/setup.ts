import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Constructible class mock for IntersectionObserver
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly scrollMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect: () => void = vi.fn();
  observe: (target: Element) => void = vi.fn();
  takeRecords: () => IntersectionObserverEntry[] = vi.fn().mockReturnValue([]);
  unobserve: (target: Element) => void = vi.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

// Constructible class mock for ResizeObserver
class MockResizeObserver implements ResizeObserver {
  disconnect: () => void = vi.fn();
  observe: (target: Element) => void = vi.fn();
  unobserve: (target: Element) => void = vi.fn();
}
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
})

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
