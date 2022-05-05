import { Immutable as T_Immutable } from '@babel/types/lib/index.d';


import StringLiteral from '../StringLiteral';

import NumericLiteral from '../NumericLiteral';

import NullLiteral from '../NullLiteral';

import BooleanLiteral from '../BooleanLiteral';

import BigIntLiteral from '../BigIntLiteral';

import JSXAttribute from '../JSXAttribute';

import JSXClosingElement from '../JSXClosingElement';

import JSXElement from '../JSXElement';

import JSXExpressionContainer from '../JSXExpressionContainer';

import JSXSpreadChild from '../JSXSpreadChild';

import JSXOpeningElement from '../JSXOpeningElement';

import JSXText from '../JSXText';

import JSXFragment from '../JSXFragment';

import JSXOpeningFragment from '../JSXOpeningFragment';

import JSXClosingFragment from '../JSXClosingFragment';

import DecimalLiteral from '../DecimalLiteral';


function Immutable(props: T_Immutable) {
	switch (props.type) {
		
		case 'StringLiteral':
			return <StringLiteral  {...props as any}></StringLiteral>;
		
		case 'NumericLiteral':
			return <NumericLiteral  {...props as any}></NumericLiteral>;
		
		case 'NullLiteral':
			return <NullLiteral  {...props as any}></NullLiteral>;
		
		case 'BooleanLiteral':
			return <BooleanLiteral  {...props as any}></BooleanLiteral>;
		
		case 'BigIntLiteral':
			return <BigIntLiteral  {...props as any}></BigIntLiteral>;
		
		case 'JSXAttribute':
			return <JSXAttribute  {...props as any}></JSXAttribute>;
		
		case 'JSXClosingElement':
			return <JSXClosingElement  {...props as any}></JSXClosingElement>;
		
		case 'JSXElement':
			return <JSXElement  {...props as any}></JSXElement>;
		
		case 'JSXExpressionContainer':
			return <JSXExpressionContainer  {...props as any}></JSXExpressionContainer>;
		
		case 'JSXSpreadChild':
			return <JSXSpreadChild  {...props as any}></JSXSpreadChild>;
		
		case 'JSXOpeningElement':
			return <JSXOpeningElement  {...props as any}></JSXOpeningElement>;
		
		case 'JSXText':
			return <JSXText  {...props as any}></JSXText>;
		
		case 'JSXFragment':
			return <JSXFragment  {...props as any}></JSXFragment>;
		
		case 'JSXOpeningFragment':
			return <JSXOpeningFragment  {...props as any}></JSXOpeningFragment>;
		
		case 'JSXClosingFragment':
			return <JSXClosingFragment  {...props as any}></JSXClosingFragment>;
		
		case 'DecimalLiteral':
			return <DecimalLiteral  {...props as any}></DecimalLiteral>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Immutable;
