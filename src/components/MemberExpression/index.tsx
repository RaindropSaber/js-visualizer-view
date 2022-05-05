import styled from 'styled-components'
import {
	MemberExpression as T_MemberExpression,
	Expression as T_Expression,
	PrivateName as T_PrivateName,
} from '@babel/types/lib/index.d'
import Identifier from '../Identifier'
import PrivateName from '../PrivateName'
import Expression from '../Expression'
function MemberExpression(props: T_MemberExpression) {
	const { object, property } = props

	return (
		<Container>
			{<Identifier {...(object as any)}></Identifier>}
			{'.'}
			{<Property {...(property as any)}></Property>}
		</Container>
	)
}
function Property(props: T_Expression | T_PrivateName) {
	if (props.type === 'PrivateName') return <PrivateName {...(props as any)}></PrivateName>
	return <Expression {...(props as any)}></Expression>
}

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`

export default MemberExpression
