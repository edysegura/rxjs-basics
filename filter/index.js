import { interval } from 'rxjs'
import { filter } from 'rxjs/operators'

const isEven = () =>
  filter(value => value % 2 === 0)

const showValue = value => {
  const output = document.querySelector('output')
  output.textContent = value
}

interval(1000)
  .pipe(isEven())
  .subscribe(showValue)