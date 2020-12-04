// PULL vs PUSH

// WHAT IS AN OBSERVABLE?

// LET'S LOOK AT SOME RXJS OBSERVABLES!

// PIPE AND RXJS OPERATORS

// HOT vs COLD

const { Observable, BehaviorSubject } = require('rxjs');
const { filter, map } = require('rxjs/operators');

const observer = {
  next: (x) => console.log(`${x} world`),
  error: () => console.log('Oh no!'),
  complete: () => console.log('All done'),
};

const cold$ = new Observable((subscribe) => {
  let i = 0;
  setInterval(() => {
    i += 1;
    subscribe.next(i);
  }, 1000);
});

const hot$ = new BehaviorSubject('Hello world!');
hot$.subscribe((value) => console.log(value));
hot$.subscribe((value) => console.log(value));
hot$.next(Math.random());

cold$.pipe(map((value) => {
  const fizz = value % 3 === 0 ? 'fizz' : '';
  const buzz = value % 5 === 0 ? 'buzz' : '';
  return fizz + buzz;
})).subscribe((value) => {
  if (value) console.log(value);
});
