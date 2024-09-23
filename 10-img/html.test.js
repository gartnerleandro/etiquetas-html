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

test('El body contiene un h1, una imagen, un artículo y un footer correctos', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Mi imagen favorita');

  const img = document.body.querySelector('img');
  expect(img).toBeTruthy();
  expect(img.getAttribute('src')).toBeTruthy();
  expect(img.getAttribute('alt')).toBeTruthy();
  expect(img.getAttribute('width')).toBeTruthy();
  expect(img.getAttribute('height')).toBeTruthy();

  const article = document.body.querySelector('article');
  expect(article).toBeTruthy();

  const articleH2 = article.querySelector('h2');
  expect(articleH2).toBeTruthy();
  expect(articleH2.textContent.trim()).toBe('Descripción de la imagen');

  const articleParagraph = article.querySelector('p');
  expect(articleParagraph).toBeTruthy();
  expect(articleParagraph.textContent.trim()).toBeTruthy();

  const footer = document.body.querySelector('footer');
  expect(footer).toBeTruthy();
  
  const footerParagraph = footer.querySelector('p');
  expect(footerParagraph).toBeTruthy();
  expect(footerParagraph.textContent.trim()).toBe('© 2023 Mi Página Web. Todos los derechos reservados.');

  const footerList = footer.querySelector('ul');
  expect(footerList).toBeTruthy();
  const listItems = footerList.querySelectorAll('li');
  expect(listItems.length).toBe(2);

  const contactLink = listItems[0].querySelector('a');
  expect(contactLink).toBeTruthy();
  expect(contactLink.textContent.trim()).toBe('Contacto');
  expect(contactLink.getAttribute('href')).toBe('/contacto');

  const privacyLink = listItems[1].querySelector('a');
  expect(privacyLink).toBeTruthy();
  expect(privacyLink.textContent.trim()).toBe('Política de privacidad');
  expect(privacyLink.getAttribute('href')).toBe('/politica');
});