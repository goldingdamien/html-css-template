/**
 * Load style.css to head tag.
 * Loads index.html to body tag.
 * @param {String} url HTML+CSS template directory
 */
async function loadTemplate (url) {
  await loadCss(`${url}/style.css`)
  await loadHtml(`${url}/index.html`)
}

async function loadCss (url) {
  const css = await getData(url)
  const element = document.createElement('style')
  element.textContent = css
  document.head.appendChild(element)
}

async function loadHtml (url) {
  const html = await getData(url)
  const element = htmlToElement(html)
  document.body.appendChild(element)
}

async function getData (url) {
  const response = await window.fetch(url)
  const text = await response.text()

  return text
}

function htmlToElement (html) {
  const template = document.createElement('template')
  template.innerHTML = html
  const element = template.content.firstChild

  return element
}
