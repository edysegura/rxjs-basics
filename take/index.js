import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

const showValue = value => {
  const output = document.querySelector('output')
  output.textContent = value
}

const source$ = interval(1000)

source$
  .pipe(take(6))
  .subscribe(showValue)