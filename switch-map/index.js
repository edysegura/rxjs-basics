import { fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

const button = document.querySelector('button')
const output = document.querySelector('output')

const counter = () =>
  scan(count => count + 1, 0)

const printer = count =>
  output.textContent = `Clicked ${ count } times`

fromEvent(button, 'click')
  .pipe(counter())
  .subscribe(printer)