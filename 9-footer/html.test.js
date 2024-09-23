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

test('El body contiene un header, secciones y un footer correcto', () => {
  const h1 = document.body.querySelector('h1');
  expect(h1).toBeTruthy();
  expect(h1.textContent.trim()).toBe('Bienvenido a mi sitio web');

  const sections = document.body.querySelectorAll('section');
  expect(sections.length).toBe(2);

  const aboutSection = sections[0];
  const aboutH2 = aboutSection.querySelector('h2');
  expect(aboutH2).toBeTruthy();
  expect(aboutH2.textContent.trim()).toBe('Sobre mí');
  const aboutParagraph = aboutSection.querySelector('p');
  expect(aboutParagraph).toBeTruthy();

  const projectsSection = sections[1];
  const projectsH2 = projectsSection.querySelector('h2');
  expect(projectsH2).toBeTruthy();
  expect(projectsH2.textContent.trim()).toBe('Mis proyectos');
  const articles = projectsSection.querySelectorAll('article');
  expect(articles.length).toBeGreaterThanOrEqual(2);

  articles.forEach(article => {
    const articleH2 = article.querySelector('h2');
    expect(articleH2).toBeTruthy();
    expect(articleH2.textContent.trim()).toBeTruthy(); // Verifica que el título del artículo no esté vacío

    const articleParagraph = article.querySelector('p');
    expect(articleParagraph).toBeTruthy();
    expect(articleParagraph.textContent.trim()).toBeTruthy(); // Verifica que la descripción del artículo no esté vacía
  });

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