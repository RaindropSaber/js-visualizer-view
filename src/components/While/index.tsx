import { While as T_While } from '@babel/types/lib/index.d';


import DoWhileStatement from '../DoWhileStatement';

import WhileStatement from '../WhileStatement';


function While(props: T_While) {
	switch (props.type) {
		
		case 'DoWhileStatement':
			return <DoWhileStatement  {...props as any}></DoWhileStatement>;
		
		case 'WhileStatement':
			return <WhileStatement  {...props as any}></WhileStatement>;
		

		default:
			break;
	}
	return <div></div>;
}

export default While;
