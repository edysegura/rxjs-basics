import { BehaviorSubject } from 'rxjs'
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

const mySubject$ = new BehaviorSubject('Xurupitas')
mySubject$
  .pipe(map(toHtmlElement))
  .subscribe(appendHtmlElement)

mySubject$.next('Edy')
mySubject$.next('Lidy')
setTimeout(() => mySubject$.next('Davi'), 1000)
setTimeout(() => mySubject$.next('Sofia'), 2000)

mySubject$.subscribe(value => console.log(value))
