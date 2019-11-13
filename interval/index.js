import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

const makeItDouble = () =>
  map(value => value * 2)

const showValue = value => {
  const output = document.querySelector('output')
  output.textContent = value
}

interval(1000)
  .pipe(makeItDouble())
  .subscribe(showValue)