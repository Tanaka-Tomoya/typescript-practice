function logger(message: string): void {
  console.log(message);
}

//関数以外でvoidを使用すると、nullかundefinedしか代入できない
let unusable: void = undefined;
