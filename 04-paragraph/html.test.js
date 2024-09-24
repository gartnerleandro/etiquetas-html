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

test('El body contiene los elementos correctos', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Mi biografía');

  const h2 = document.body.querySelector('h2');
  expect(h2).toBeTruthy();
  expect(h2.textContent.trim()).toBe('Mis hobbies');

  const paragraphs = document.body.querySelectorAll('p');
  expect(paragraphs.length).toBe(4);

  expect(paragraphs[0].previousElementSibling).toBe(h1);
  expect(paragraphs[1].previousElementSibling).toBe(h2);
});

test('Los elementos están en el orden correcto', () => {
  const elements = document.body.children;
  expect(elements[0].tagName).toBe('H1');
  expect(elements[1].tagName).toBe('P');
  expect(elements[2].tagName).toBe('H2');
  expect(elements[3].tagName).toBe('P');
  expect(elements[4].tagName).toBe('P');
  expect(elements[5].tagName).toBe('P');
});