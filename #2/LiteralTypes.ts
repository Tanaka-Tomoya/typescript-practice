//'Taro'という文字列だけを許容する変数
let myName: 'Taro';
myName = 'Taro';
myName = 'Jiro';
//String型を継承しているので文字列のクラスメソッドにアクセスできる
myName.toLowerCase();

let zero: 0;
zero = 0;
zero = 1;
zero.toFixed(1);

let bit: 8 | 16 | 32 | 64;
bit = 8;
bit = 12;

let truth: true;
truth = true;
truth = false;
