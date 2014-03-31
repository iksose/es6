const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (let x of iterable) {
  console.log(x);
}

var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

var a2 = a.map(function(s){ return s.length });

var a3 = a.map( s => s.length );


console.log(a3)


function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (word of fibonacci()) {
    // truncate the sequence at 1000
    if (n > 1000)
        break;
    console.log(n);
}

// let seq = fibonacci();

// console.log(seq.next().value)
