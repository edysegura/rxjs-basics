import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const searchField = document.querySelector('input')
const output = document.querySelector('output')

const getInputValue = () =>
  map(event => event.target.value)

const showInputValue = value => {
  console.log('Passed here!')
  output.textContent = value
}

fromEvent(searchField, 'input')
  .pipe(
    getInputValue(),
    debounceTime(1000),
    distinctUntilChanged()
  )
  .subscribe(showInputValue)