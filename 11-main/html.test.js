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

test('El body contiene un header, un main y un footer correctos', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Bienvenido a mi sitio web');

  const main = document.body.querySelector('main');
  expect(main).toBeTruthy();
  const h2 = main.querySelector('h2');
  expect(h2).toBeTruthy();
  expect(h2.textContent.trim()).toBe('Contenido principal');

  const paragraph = main.querySelector('p');
  expect(paragraph).toBeTruthy();
  expect(paragraph.textContent.trim()).toBeTruthy();

  const footer = document.body.querySelector('footer');
  expect(footer).toBeTruthy();
  const footerParagraph = footer.querySelector('p');
  expect(footerParagraph).toBeTruthy();
  expect(footerParagraph.textContent.trim()).toBe('© 2024 Mi Página Web. Todos los derechos reservados.');
});