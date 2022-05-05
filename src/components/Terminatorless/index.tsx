import { Terminatorless as T_Terminatorless } from '@babel/types/lib/index.d';


import BreakStatement from '../BreakStatement';

import ContinueStatement from '../ContinueStatement';

import ReturnStatement from '../ReturnStatement';

import ThrowStatement from '../ThrowStatement';

import YieldExpression from '../YieldExpression';

import AwaitExpression from '../AwaitExpression';


function Terminatorless(props: T_Terminatorless) {
	switch (props.type) {
		
		case 'BreakStatement':
			return <BreakStatement  {...props as any}></BreakStatement>;
		
		case 'ContinueStatement':
			return <ContinueStatement  {...props as any}></ContinueStatement>;
		
		case 'ReturnStatement':
			return <ReturnStatement  {...props as any}></ReturnStatement>;
		
		case 'ThrowStatement':
			return <ThrowStatement  {...props as any}></ThrowStatement>;
		
		case 'YieldExpression':
			return <YieldExpression  {...props as any}></YieldExpression>;
		
		case 'AwaitExpression':
			return <AwaitExpression  {...props as any}></AwaitExpression>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Terminatorless;
