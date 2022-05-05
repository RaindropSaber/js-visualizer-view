import { PatternLike as T_PatternLike } from '@babel/types/lib/index.d';


import Identifier from '../Identifier';

import RestElement from '../RestElement';

import AssignmentPattern from '../AssignmentPattern';

import ArrayPattern from '../ArrayPattern';

import ObjectPattern from '../ObjectPattern';


function PatternLike(props: T_PatternLike) {
	switch (props.type) {
		
		case 'Identifier':
			return <Identifier  {...props as any}></Identifier>;
		
		case 'RestElement':
			return <RestElement  {...props as any}></RestElement>;
		
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

export default PatternLike;
