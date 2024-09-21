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

test('El body contiene dos secciones correctas', () => {
  const sections = document.body.querySelectorAll('section');
  expect(sections.length).toBe(2);

  const firstSection = sections[0];
  expect(firstSection.querySelector('h2').textContent.trim()).toBe('Sobre mí');
  expect(firstSection.querySelector('p')).toBeTruthy();

  const secondSection = sections[1];
  expect(secondSection.querySelector('h2').textContent.trim()).toBe('Mis habilidades');
  const paragraphs = secondSection.querySelectorAll('p');
  expect(paragraphs.length).toBe(3);
});

test('Las secciones están en el orden correcto', () => {
  const sections = document.body.querySelectorAll('section');
  expect(sections[0].querySelector('h2').textContent.trim()).toBe('Sobre mí');
  expect(sections[1].querySelector('h2').textContent.trim()).toBe('Mis habilidades');
});