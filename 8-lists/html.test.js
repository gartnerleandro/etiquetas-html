import { expect, test } from 'vitest';
import { readFileSync } from 'fs';
import { JSDOM } from 'jsdom';

const html = readFileSync('./ejercicio/index.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

test('El documento tiene la estructura HTML correcta', () => {
  expect(html.trim().toLowerCase().startsWith('<!doctype html>')).toBe(true);
  expect(document.documentElement.tagName).toBe('HTML');
  expect(document.documentElement.lang).toBe('es');
  expect(document.head).toBeTruthy();
  expect(document.body).toBeTruthy();
});

test('El body contiene una lista desordenada y una lista ordenada', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Mis frutas favoritas');

  const ul = document.body.querySelector('ul');
  expect(ul).toBeTruthy();
  const liItems = ul.querySelectorAll('li');
  expect(liItems.length).toBeGreaterThanOrEqual(3);

  const h2 = document.body.querySelector('h2');
  expect(h2).toBeTruthy();
  expect(h2.textContent.trim()).toBe('Pasos para hacer un batido');

  const ol = document.body.querySelector('ol');
  expect(ol).toBeTruthy();
  const olItems = ol.querySelectorAll('li');
  expect(olItems.length).toBeGreaterThanOrEqual(3);
});