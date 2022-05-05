import styled from 'styled-components'
import {
	ForStatement as T_ForStatement,
	VariableDeclaration as T_VariableDeclaration,
	Expression as T_Expression,
} from '@babel/types/lib/index.d'
import VariableDeclaration from '../VariableDeclaration'
import Expression from '../Expression'
import Statement from '../Statement'

function ForStatement(props: T_ForStatement) {
	const { init, test, update, body } = props

	return (
		<>
			<Container>
				<For>{'for'}</For>
				{<Init {...(init as any)} />}
				{<Test {...(test as any)} />}
				{<Update {...(update as any)} />}
			</Container>
			{<Statement {...body} />}
		</>
	)
}

function Init(props: T_VariableDeclaration | T_Expression | null | undefined) {
	if (!props) return null
	const { type } = props
	if (type === 'VariableDeclaration') return <VariableDeclaration {...props}></VariableDeclaration>
	return <Expression {...props}></Expression>
}

function Test(props: T_Expression | null | undefined) {
	if (!props) return null
	return <Expression {...props}></Expression>
}
function Update(props: T_Expression | null | undefined) {
	if (!props) return null
	return <Expression {...props}></Expression>
}

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`
const For = styled.div``

export default ForStatement
