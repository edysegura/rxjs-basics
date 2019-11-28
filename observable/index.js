import { Observable } from 'rxjs'
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

const source$ = new Observable(subscriber => {
  subscriber.next('Edy')
  subscriber.next('Lidy')
  setTimeout(() => subscriber.next('Davi'), 1000)
  setTimeout(() => subscriber.next('Sofia'), 2000)
})

source$
  .pipe(map(toHtmlElement))
  .subscribe(appendHtmlElement)