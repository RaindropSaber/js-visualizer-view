import { Conditional as T_Conditional } from '@babel/types/lib/index.d';


import ConditionalExpression from '../ConditionalExpression';

import IfStatement from '../IfStatement';


function Conditional(props: T_Conditional) {
	switch (props.type) {
		
		case 'ConditionalExpression':
			return <ConditionalExpression  {...props as any}></ConditionalExpression>;
		
		case 'IfStatement':
			return <IfStatement  {...props as any}></IfStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Conditional;
