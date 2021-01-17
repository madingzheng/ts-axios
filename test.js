const qs = require('qs')
const a = {
  foo: {
    bar: 'baz'
  }
};

console.log(qs.stringify(a));