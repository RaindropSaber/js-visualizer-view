import styled from 'styled-components'
import {
	VariableDeclarator as T_VariableDeclarator,
	Expression as T_Expression,
	Literal as T_Literal,
} from '@babel/types/lib/index.d'
import LVal from '../LVal'
import Expression from '../Expression'
import Literal from '../Literal'

function VariableDeclarator(props: T_VariableDeclarator) {
	const { id, init } = props

	return (
		<Container>
			<LVal {...id} />
			<Assignment>=</Assignment>
			<Init {...(init as any)} />
		</Container>
	)
}

function Init(props: T_Expression | null | undefined) {
	if (!props) return null
	return <Expression {...props} />
}

export default VariableDeclarator

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`

const Assignment = styled.div`
	margin-inline: 10px;
`
