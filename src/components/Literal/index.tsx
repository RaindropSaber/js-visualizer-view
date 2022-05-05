import { Literal as T_Literal } from '@babel/types/lib/index.d'

import StringLiteral from '../StringLiteral'

import NumericLiteral from '../NumericLiteral'

import NullLiteral from '../NullLiteral'

import BooleanLiteral from '../BooleanLiteral'

import RegExpLiteral from '../RegExpLiteral'

import TemplateLiteral from '../TemplateLiteral'

import BigIntLiteral from '../BigIntLiteral'

import DecimalLiteral from '../DecimalLiteral'

function Literal(props: T_Literal) {
	switch (props.type) {
		case 'StringLiteral':
			return <StringLiteral {...(props as any)}></StringLiteral>

		case 'NumericLiteral':
			return <NumericLiteral {...(props as any)}></NumericLiteral>

		case 'NullLiteral':
			return <NullLiteral {...(props as any)}></NullLiteral>

		case 'BooleanLiteral':
			return <BooleanLiteral {...(props as any)}></BooleanLiteral>

		case 'RegExpLiteral':
			return <RegExpLiteral {...(props as any)}></RegExpLiteral>

		case 'TemplateLiteral':
			return <TemplateLiteral {...(props as any)}></TemplateLiteral>

		case 'BigIntLiteral':
			return <BigIntLiteral {...(props as any)}></BigIntLiteral>

		case 'DecimalLiteral':
			return <DecimalLiteral {...(props as any)}></DecimalLiteral>

		default:
			break
	}
	return <div></div>
}

export default Literal
