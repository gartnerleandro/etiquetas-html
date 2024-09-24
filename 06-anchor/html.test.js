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

test('El body contiene el título y los párrafos correctos', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Mis sitios favoritos');

  const paragraphs = document.body.querySelectorAll('p');
  expect(paragraphs.length).toBe(3);
});

test('Los enlaces están correctamente configurados', () => {
  const links = document.body.querySelectorAll('a');
  expect(links.length).toBe(3);

  // Primer enlace
  expect(links[0].href).toBeTruthy();
  expect(links[0].target).toBeFalsy();

  // Segundo enlace
  expect(links[1].href).toBeTruthy();
  expect(links[1].target).toBe('_blank');

  // Tercer enlace
  expect(links[2].href.startsWith('mailto:')).toBe(true);
});

test('Los enlaces están dentro de párrafos', () => {
  const paragraphs = document.body.querySelectorAll('p');
  paragraphs.forEach(p => {
    expect(p.querySelector('a')).toBeTruthy();
  });
});