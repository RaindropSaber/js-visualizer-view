import { Program as T_Program } from '@babel/types/lib/index.d'
import Statement from '../Statement'

function Program(props: T_Program) {
	const { body } = props

	return (
		<div>
			{body.map((statement) => (
				<Statement {...statement} key={JSON.stringify(statement.loc)}></Statement>
			))}
		</div>
	)
}

export default Program
