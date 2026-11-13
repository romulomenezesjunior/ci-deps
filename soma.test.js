import { test } from 'node:test';
import assert from 'node:assert/strict';
import { soma } from './soma.js';

test('soma 1 e 1 para dar 2', () => {
  assert.equal(soma(1, 1), 2);
});

test('soma 1000000 e 1000000 para dar 2M', () => {
  assert.equal(soma(1000000, 1000000), 2000000);
});
