import styled from 'styled-components'
import { BlockStatement as T_BlockStatement, Statement as T_Statement } from '@babel/types/lib/index.d'
import Statement from '../Statement'

function BlockStatement(props: T_BlockStatement) {
	const { body } = props
	return (
		<>
			{body.map((item) => {
				return (
					<>
						<Statement {...item} key={item.range?.toString()} />
						{/* <Arrow></Arrow> */}
					</>
				)
			})}
		</>
	)
}

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: ${`#${Math.random().toString(16).slice(2, 8)}`};
`
export default BlockStatement
