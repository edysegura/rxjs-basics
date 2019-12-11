import { ReplaySubject } from 'rxjs'
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

const replaySubject$ = new ReplaySubject(2)
replaySubject$
  .pipe(map(toHtmlElement))
  .subscribe(appendHtmlElement)

replaySubject$.next('Edy')
replaySubject$.next('Lidy')
replaySubject$.next('Davi')
replaySubject$.next('Sofia')

replaySubject$.subscribe(value => console.log(value))
