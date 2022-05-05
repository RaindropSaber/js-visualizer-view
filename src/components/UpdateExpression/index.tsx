import styled from 'styled-components'
import { UpdateExpression as T_UpdateExpression, Expression as T_Expression } from '@babel/types/lib/index.d'
import Expression from '../Expression'
function UpdateExpression(props: T_UpdateExpression) {
	const { operator, argument } = props

	return (
		<Container>
			<Argument {...argument} />
			{operator}
		</Container>
	)
}

function Argument(props: T_Expression) {
	return <Expression {...props} />
}

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`

export default UpdateExpression
