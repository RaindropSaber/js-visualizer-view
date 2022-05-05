import { ExpressionWrapper as T_ExpressionWrapper } from '@babel/types/lib/index.d';


import ExpressionStatement from '../ExpressionStatement';

import ParenthesizedExpression from '../ParenthesizedExpression';

import TypeCastExpression from '../TypeCastExpression';


function ExpressionWrapper(props: T_ExpressionWrapper) {
	switch (props.type) {
		
		case 'ExpressionStatement':
			return <ExpressionStatement  {...props as any}></ExpressionStatement>;
		
		case 'ParenthesizedExpression':
			return <ParenthesizedExpression  {...props as any}></ParenthesizedExpression>;
		
		case 'TypeCastExpression':
			return <TypeCastExpression  {...props as any}></TypeCastExpression>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ExpressionWrapper;
