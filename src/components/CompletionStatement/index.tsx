import { CompletionStatement as T_CompletionStatement } from '@babel/types/lib/index.d';


import BreakStatement from '../BreakStatement';

import ContinueStatement from '../ContinueStatement';

import ReturnStatement from '../ReturnStatement';

import ThrowStatement from '../ThrowStatement';


function CompletionStatement(props: T_CompletionStatement) {
	switch (props.type) {
		
		case 'BreakStatement':
			return <BreakStatement  {...props as any}></BreakStatement>;
		
		case 'ContinueStatement':
			return <ContinueStatement  {...props as any}></ContinueStatement>;
		
		case 'ReturnStatement':
			return <ReturnStatement  {...props as any}></ReturnStatement>;
		
		case 'ThrowStatement':
			return <ThrowStatement  {...props as any}></ThrowStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default CompletionStatement;
