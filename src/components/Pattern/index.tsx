import { Pattern as T_Pattern } from '@babel/types/lib/index.d';


import AssignmentPattern from '../AssignmentPattern';

import ArrayPattern from '../ArrayPattern';

import ObjectPattern from '../ObjectPattern';


function Pattern(props: T_Pattern) {
	switch (props.type) {
		
		case 'AssignmentPattern':
			return <AssignmentPattern  {...props as any}></AssignmentPattern>;
		
		case 'ArrayPattern':
			return <ArrayPattern  {...props as any}></ArrayPattern>;
		
		case 'ObjectPattern':
			return <ObjectPattern  {...props as any}></ObjectPattern>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Pattern;
