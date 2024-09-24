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
  const header = document.body.querySelector('header');
  expect(header).toBeTruthy();
  const h1 = header.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Bienvenido a mi sitio web');

  const main = document.body.querySelector('main');
  expect(main).toBeTruthy();
  const h2Main = main.querySelector('h2');
  expect(h2Main).toBeTruthy();
  expect(h2Main.textContent.trim()).toBe('Contenido principal');

  const footer = document.body.querySelector('footer');
  expect(footer).toBeTruthy();
  const h2Footer = footer.querySelector('h2');
  expect(h2Footer).toBeTruthy();
  expect(h2Footer.textContent.trim()).toBe('Contacto');

  const address = footer.querySelector('address');
  expect(address).toBeTruthy();
  const addressLines = address.querySelectorAll('p');
  expect(addressLines.length).toBeGreaterThan(0);

  const emailLink = address.querySelector('a[href^="mailto:"]');
  expect(emailLink).toBeTruthy();
  expect(emailLink.textContent.trim()).toBe('juan.perez@example.com');

  const phoneLink = address.querySelector('a[href^="tel:"]');
  expect(phoneLink).toBeTruthy();
  expect(phoneLink.textContent.trim()).toBe('+1 (234) 567-890');

  const footerParagraph = footer.querySelector('p');
  expect(footerParagraph).toBeTruthy();
  expect(footerParagraph.textContent.trim()).toBe('© 2024 Mi Página Web. Todos los derechos reservados.');
});