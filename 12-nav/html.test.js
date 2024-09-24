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

test('El body contiene un header, un nav, un main y un footer correctos', () => {
  const header = document.body.querySelector('header');
  expect(header).toBeTruthy();
  const h1 = header.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Bienvenido a mi sitio web');

  const nav = header.querySelector('nav');
  expect(nav).toBeTruthy();
  const ul = nav.querySelector('ul');
  expect(ul).toBeTruthy();
  const listItems = ul.querySelectorAll('li');
  expect(listItems.length).toBe(3);

  const links = Array.from(listItems).map(item => item.querySelector('a'));
  expect(links.length).toBe(3);
  expect(links[0].textContent.trim()).toBe('Sobre mí');
  expect(links[1].textContent.trim()).toBe('Mis hobbies');
  expect(links[2].textContent.trim()).toBe('Contacto');

  const main = document.body.querySelector('main');
  expect(main).toBeTruthy();

  const sections = main.querySelectorAll('section');
  expect(sections.length).toBe(3);

  const sobreMiSection = sections[0];
  expect(sobreMiSection.id).toBe('sobre-mi');
  const h2SobreMi = sobreMiSection.querySelector('h2');
  expect(h2SobreMi).toBeTruthy();
  expect(h2SobreMi.textContent.trim()).toBe('Sobre mí');

  const misHobbiesSection = sections[1];
  expect(misHobbiesSection.id).toBe('mis-hobbies');
  const h2MisHobbies = misHobbiesSection.querySelector('h2');
  expect(h2MisHobbies).toBeTruthy();
  expect(h2MisHobbies.textContent.trim()).toBe('Mis hobbies');

  const contactoSection = sections[2];
  expect(contactoSection.id).toBe('contacto');
  const h2Contacto = contactoSection.querySelector('h2');
  expect(h2Contacto).toBeTruthy();
  expect(h2Contacto.textContent.trim()).toBe('Contacto');

  const footer = document.body.querySelector('footer');
  expect(footer).toBeTruthy();
  const footerParagraph = footer.querySelector('p');
  expect(footerParagraph).toBeTruthy();
  expect(footerParagraph.textContent.trim()).toBe('© 2023 Mi Página Web. Todos los derechos reservados.');
});