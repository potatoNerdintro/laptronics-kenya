import test from 'node:test';
import assert from 'node:assert/strict';
import { filterAndSortLaptops, getCategoryCounts } from './catalogueLogic';
import { LAPTOPS } from '../data/laptops';

test('catalogue contains exactly 6 advertised laptops', () => {
  assert.equal(LAPTOPS.length, 6);
});

test('category filter correctly isolates gaming laptops', () => {
  const gamingLaptops = filterAndSortLaptops(LAPTOPS, '', 'gaming', 'default');
  assert.equal(gamingLaptops.length, 2);
  assert.ok(gamingLaptops.every((l) => l.category === 'gaming'));
});

test('category filter correctly isolates workstation laptops', () => {
  const workstations = filterAndSortLaptops(LAPTOPS, '', 'workstations', 'default');
  assert.equal(workstations.length, 2);
  assert.ok(workstations.every((l) => l.category === 'workstations'));
});

test('category filter correctly isolates Apple laptops', () => {
  const appleLaptops = filterAndSortLaptops(LAPTOPS, '', 'apple', 'default');
  assert.equal(appleLaptops.length, 2);
  assert.ok(appleLaptops.every((l) => l.category === 'apple'));
});

test('search query finds laptops by graphic specifications (e.g. RTX)', () => {
  const results = filterAndSortLaptops(LAPTOPS, 'RTX', 'all', 'default');
  // Both HP ZBooks (RTX A3000), HP Victus 16 (RTX 4060), and Lenovo Legion 5 (RTX 5060)
  assert.equal(results.length, 4);
});

test('search query finds laptops by use-case keywords (e.g. CAD)', () => {
  const results = filterAndSortLaptops(LAPTOPS, 'CAD', 'all', 'default');
  assert.equal(results.length, 2);
  assert.ok(results.every((l) => l.name.includes('ZBook')));
});

test('sorting by price lowest to highest sorts correctly', () => {
  const sorted = filterAndSortLaptops(LAPTOPS, '', 'all', 'price-asc');
  assert.equal(sorted.length, 6);
  assert.equal(sorted[0].priceKsh, 150000);
  assert.equal(sorted[sorted.length - 1].priceKsh, 230000);
  for (let i = 0; i < sorted.length - 1; i++) {
    assert.ok(sorted[i].priceKsh <= sorted[i + 1].priceKsh);
  }
});

test('sorting by price highest to lowest sorts correctly', () => {
  const sorted = filterAndSortLaptops(LAPTOPS, '', 'all', 'price-desc');
  assert.equal(sorted.length, 6);
  assert.equal(sorted[0].priceKsh, 230000);
  assert.equal(sorted[sorted.length - 1].priceKsh, 150000);
  for (let i = 0; i < sorted.length - 1; i++) {
    assert.ok(sorted[i].priceKsh >= sorted[i + 1].priceKsh);
  }
});

test('category counts are calculated correctly', () => {
  const counts = getCategoryCounts(LAPTOPS);
  assert.equal(counts.all, 6);
  assert.equal(counts.gaming, 2);
  assert.equal(counts.workstations, 2);
  assert.equal(counts.apple, 2);
});
