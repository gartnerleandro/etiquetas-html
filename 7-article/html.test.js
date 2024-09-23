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

test('El body contiene un artículo correcto', () => {
  const article = document.body.querySelector('article');
  expect(article).toBeTruthy();

  const h2 = article.querySelector('h2');
  expect(h2).toBeTruthy();
  expect(h2.textContent.trim()).toBe('Mi primer artículo');

  const paragraphs = article.querySelectorAll('p');
  expect(paragraphs.length).toBe(2);
  expect(paragraphs[0].textContent.trim()).toBeTruthy();
  expect(paragraphs[1].textContent.trim()).toBeTruthy();
});