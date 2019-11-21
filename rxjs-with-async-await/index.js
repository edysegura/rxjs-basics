import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

const source$ = interval(1000)
  .pipe(take(3))

const showValue = value => {
  const output = document.querySelector('output')
  output.textContent = value
}

source$.subscribe(showValue)