let asString: string = '';
let value: typeof asString;
value = 'value';
value = 0;

let anotherObject: typeof myObject = { foo: '' };
anotherObject['foo'] = 'value';
anotherObject['bar'] = 'value';

const myObject = {
  foo: 'FOO',
  bar: 'BAR',
  baz: 'BAZ'
};

let myObjectKey: keyof typeof myObject;
myObjectKey = 'bar';
myObjectKey = 'qux';

const indexedObject = {
  0: 0,
  1: 1
};

let indexedKey: keyof typeof indexedObject;
indexedKey = 1;
indexedKey = 2;
