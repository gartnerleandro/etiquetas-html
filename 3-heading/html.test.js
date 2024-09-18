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

test('El body contiene los encabezados correctos', () => {
  const headings = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6');
  expect(headings.length).toBe(6);

  const expectedHeadings = [
    { tag: 'H1', text: 'Mi página web' },
    { tag: 'H2', text: 'Sobre mí' },
    { tag: 'H3', text: 'Mis hobbies' },
    { tag: 'H4', text: 'Deportes' },
    { tag: 'H5', text: 'Fútbol' },
    { tag: 'H6', text: 'Equipos favoritos' }
  ];

  headings.forEach((heading, index) => {
    expect(heading.tagName).toBe(expectedHeadings[index].tag);
    expect(heading.textContent.trim()).toBe(expectedHeadings[index].text);
  });
});

test('Los encabezados están en el orden correcto', () => {
  const headings = document.body.children;
  for (let i = 0; i < headings.length; i++) {
    expect(headings[i].tagName).toBe(`H${i + 1}`);
  }
});