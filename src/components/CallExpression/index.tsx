import styled from 'styled-components'
import {
	CallExpression as T_CallExpression,
	Expression as T_Expression,
	SpreadElement as T_SpreadElement,
	JSXNamespacedName as T_JSXNamespacedName,
	ArgumentPlaceholder as T_ArgumentPlaceholder,
	V8IntrinsicIdentifier as T_V8IntrinsicIdentifier,
} from '@babel/types/lib/index.d'
import SpreadElement from '../SpreadElement'
import JSXNamespacedName from '../JSXNamespacedName'
// import ArgumentPlaceholder from '../ArgumentPlaceholder'
import Expression from '../Expression'
import V8IntrinsicIdentifier from '../V8IntrinsicIdentifier'

function CallExpression(props: T_CallExpression) {
	const { callee, arguments: arg } = props

	return (
		<Container>
			<Callee {...(callee as any)}></Callee>
			{'('}
			{arg.map((item, index) => {
				return (
					<>
						<Arguments {...(item as any)} key={item.range?.toString()}></Arguments>
						{index === arg.length - 1 ? '' : ','}
					</>
				)
			})}
			{')'}
		</Container>
	)
}
function Callee(props: T_Expression | T_V8IntrinsicIdentifier) {
	if (props.type === 'V8IntrinsicIdentifier') return <V8IntrinsicIdentifier {...props} />
	return <Expression {...props} />
}
function Arguments(props: T_Expression | T_SpreadElement | T_JSXNamespacedName | T_ArgumentPlaceholder) {
	switch (props.type) {
		case 'SpreadElement':
			return <SpreadElement {...(props as any)}></SpreadElement>
		case 'JSXNamespacedName':
			return <JSXNamespacedName {...(props as any)}></JSXNamespacedName>
		default:
			return <Expression {...(props as any)} />
	}
}
const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`
export default CallExpression
