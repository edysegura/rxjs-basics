import { from } from 'rxjs'
import { map } from 'rxjs/operators'


const toHtmlElement = name => {
  const element = document.createElement('p')
  element.textContent = name
  return element
}

const appendHtmlElement = element => {
  const output = document.querySelector('output')
  output.appendChild(element)
}

const source$ = from(['Lidy', 'Davi', 'Edy'])

source$
  .pipe(map(toHtmlElement))
  .subscribe(appendHtmlElement)
