import { fromEvent } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

const firstField = document.getElementById('first')
const secondField = document.getElementById('second')

const getFieldValue = () =>
  map(event => event.target.value)

const mergeValues = firstFieldValue => {
  const concatenateValues = secondFieldValue =>
    `${firstFieldValue} ${secondFieldValue}`

  return secondField$
    .pipe(
      getFieldValue(),
      map(concatenateValues)
    )
}

const showInputValue = value => {
  const output = document.querySelector('output')
  output.textContent = value
}

const firstField$ = fromEvent(firstField, 'input')
const secondField$ = fromEvent(secondField, 'input')

firstField$
  .pipe(
    getFieldValue(),
    mergeMap(mergeValues)
  )
  .subscribe(showInputValue)