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
  expect(document.body).toBeTruthy();
  expect(document.body.parentNode).toBe(document.documentElement);
  expect(document.getElementsByTagName('body').length).toBe(1);
});

test('El body contiene el texto correcto', () => {
  const body = document.body;
  expect(body.textContent.trim()).toBe('Bienvenido a mi página');
});