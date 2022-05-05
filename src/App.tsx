import Program from './components/Program'

import * as babelParser from '@babel/parser'
const code = `
for(let a = 0;a<=100;a++){
  console.log(a,f)
  console.log(a,f)
  console.log(a,f)
}
`

const ast = babelParser.parse(code, {
	plugins: ['typescript'],
})
console.log(ast.program.body)

function App() {
	return <Program {...ast.program}></Program>
}

export default App
