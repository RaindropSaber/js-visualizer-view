import { Identifier as T_Identifier } from '@babel/types/lib/index.d'

function Identifier(props: T_Identifier) {
	const { name } = props

	return <div>{name}</div>
}

export default Identifier
