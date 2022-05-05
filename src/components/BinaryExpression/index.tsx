import styled from 'styled-components'
import {
	BinaryExpression as T_BinaryExpression,
	Expression as T_Expression,
	PrivateName as T_PrivateName,
} from '@babel/types/lib/index.d'
import Expression from '../Expression'
import PrivateName from '../PrivateName'

function BinaryExpression(props: T_BinaryExpression) {
	const { left, operator, right } = props

	return (
		<Container>
			<Left {...left} />
			<Operator>{operator}</Operator>
			<Right {...right} />
		</Container>
	)
}
function Left(props: T_Expression | T_PrivateName) {
	if (props.type === 'PrivateName') return <PrivateName {...props} />
	return <Expression {...props} />
}
function Right(props: T_Expression) {
	return <Expression {...props} />
}

const Operator = styled.div`
	margin-inline: 10px;
`

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`
export default BinaryExpression
