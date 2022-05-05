import { ForXStatement as T_ForXStatement } from '@babel/types/lib/index.d';


import ForInStatement from '../ForInStatement';

import ForOfStatement from '../ForOfStatement';


function ForXStatement(props: T_ForXStatement) {
	switch (props.type) {
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ForXStatement;
