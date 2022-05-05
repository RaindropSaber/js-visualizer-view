import styled from 'styled-components'
import { VariableDeclaration as T_VariableDeclaration } from '@babel/types/lib/index.d'
import VariableDeclarator from '../VariableDeclarator'

function VariableDeclaration(props: T_VariableDeclaration) {
	const { declarations, kind, declare } = props
	return (
		<Container>
			{declare && 'declare'}
			<Kind>{kind}</Kind>
			{declarations.map((declaration) => (
				<VariableDeclarator {...declaration} key={JSON.stringify(declaration.loc)} />
			))}
		</Container>
	)
}

export default VariableDeclaration

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`

const Kind = styled.div`
	margin-right: 10px;
`
