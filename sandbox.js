someObject = {
  test: 'value1',
  foo: 'bar',
  fizz: 'buzz'
}
someObject.new = 'test435'

console.log(someObject);

setFiles(acceptedFiles.map(file => Object.assign(file, {
  preview: URL.createObjectURL(file)
})));