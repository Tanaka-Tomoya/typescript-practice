let value: boolean | number | string;
value = false;
value = 1;
value = 2;

let numberOrStrings: (number | string)[];
numberOrStrings = [0, '1'];
numberOrStrings = [0, '1', false];

let nullableString: string | null;
nullableString = null;
nullableString = 'notNull';

let nullableStrings: (string | null)[] = [];
nullableStrings.push('1');
nullableStrings.push(null);
nullableStrings.push(false);
