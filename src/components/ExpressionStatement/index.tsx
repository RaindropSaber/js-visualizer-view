import styled from 'styled-components'
import { ExpressionStatement as T_ExpressionStatement } from '@babel/types/lib/index.d'
import Expression from '../Expression'
function ExpressionStatement(props: T_ExpressionStatement) {
	const { expression } = props
	return (
		<div>
			<Expression {...(expression as any)}></Expression>
		</div>
	)
}

const Container = styled.div`
	display: flex;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`
export default ExpressionStatement
