import { Loop as T_Loop } from '@babel/types/lib/index.d';


import DoWhileStatement from '../DoWhileStatement';

import ForInStatement from '../ForInStatement';

import ForStatement from '../ForStatement';

import WhileStatement from '../WhileStatement';

import ForOfStatement from '../ForOfStatement';


function Loop(props: T_Loop) {
	switch (props.type) {
		
		case 'DoWhileStatement':
			return <DoWhileStatement  {...props as any}></DoWhileStatement>;
		
		case 'ForInStatement':
			return <ForInStatement  {...props as any}></ForInStatement>;
		
		case 'ForStatement':
			return <ForStatement  {...props as any}></ForStatement>;
		
		case 'WhileStatement':
			return <WhileStatement  {...props as any}></WhileStatement>;
		
		case 'ForOfStatement':
			return <ForOfStatement  {...props as any}></ForOfStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Loop;
