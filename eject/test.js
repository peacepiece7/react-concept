function f1() {
  const a = 10;
  function f2() {
    return a + b;
  }
  const b = 20;
  return f2;
}

const a = f1();
console.log(a());
