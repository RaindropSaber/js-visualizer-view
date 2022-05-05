import { Pureish as T_Pureish } from '@babel/types/lib/index.d';


import FunctionDeclaration from '../FunctionDeclaration';

import FunctionExpression from '../FunctionExpression';

import StringLiteral from '../StringLiteral';

import NumericLiteral from '../NumericLiteral';

import NullLiteral from '../NullLiteral';

import BooleanLiteral from '../BooleanLiteral';

import RegExpLiteral from '../RegExpLiteral';

import ArrowFunctionExpression from '../ArrowFunctionExpression';

import BigIntLiteral from '../BigIntLiteral';

import DecimalLiteral from '../DecimalLiteral';


function Pureish(props: T_Pureish) {
	switch (props.type) {
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'FunctionExpression':
			return <FunctionExpression  {...props as any}></FunctionExpression>;
		
		case 'StringLiteral':
			return <StringLiteral  {...props as any}></StringLiteral>;
		
		case 'NumericLiteral':
			return <NumericLiteral  {...props as any}></NumericLiteral>;
		
		case 'NullLiteral':
			return <NullLiteral  {...props as any}></NullLiteral>;
		
		case 'BooleanLiteral':
			return <BooleanLiteral  {...props as any}></BooleanLiteral>;
		
		case 'RegExpLiteral':
			return <RegExpLiteral  {...props as any}></RegExpLiteral>;
		
		case 'ArrowFunctionExpression':
			return <ArrowFunctionExpression  {...props as any}></ArrowFunctionExpression>;
		
		case 'BigIntLiteral':
			return <BigIntLiteral  {...props as any}></BigIntLiteral>;
		
		case 'DecimalLiteral':
			return <DecimalLiteral  {...props as any}></DecimalLiteral>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Pureish;
