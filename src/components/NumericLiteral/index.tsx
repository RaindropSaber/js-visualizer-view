import { NumericLiteral as T_NumericLiteral } from '@babel/types/lib/index.d'

function NumericLiteral(props: T_NumericLiteral) {
	const { value } = props

	return <div>{value}</div>
}

export default NumericLiteral
