import { fromEvent } from 'rxjs'

const button = document.querySelector('button')
const output = document.querySelector('output')

const printer = event =>
  output.textContent = event.target.value

fromEvent(button, 'click')
  .subscribe(printer)