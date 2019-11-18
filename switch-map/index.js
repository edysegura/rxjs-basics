import { fromEvent, interval } from 'rxjs'
import { switchMap } from 'rxjs/operators'

const button = document.querySelector('button')
const output = document.querySelector('output')

const startCount = () =>
  interval(1000)

const printer = value =>
  output.textContent = value

fromEvent(button, 'click')
  .pipe(
    switchMap(startCount)
  )
  .subscribe(printer)