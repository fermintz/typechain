const sayHi = (name:string, age:number, gender:string): string => {
  return `hello ${name}, you are ${age}, you are a ${gender}`
}

console.log(sayHi('nicolas',37, 'male'))

export {};