import { LVal as T_LVal } from '@babel/types/lib/index.d';


import Identifier from '../Identifier';

import MemberExpression from '../MemberExpression';

import RestElement from '../RestElement';

import AssignmentPattern from '../AssignmentPattern';

import ArrayPattern from '../ArrayPattern';

import ObjectPattern from '../ObjectPattern';

import TSParameterProperty from '../TSParameterProperty';


function LVal(props: T_LVal) {
	switch (props.type) {
		
		case 'Identifier':
			return <Identifier  {...props as any}></Identifier>;
		
		case 'MemberExpression':
			return <MemberExpression  {...props as any}></MemberExpression>;
		
		case 'RestElement':
			return <RestElement  {...props as any}></RestElement>;
		
		case 'AssignmentPattern':
			return <AssignmentPattern  {...props as any}></AssignmentPattern>;
		
		case 'ArrayPattern':
			return <ArrayPattern  {...props as any}></ArrayPattern>;
		
		case 'ObjectPattern':
			return <ObjectPattern  {...props as any}></ObjectPattern>;
		
		case 'TSParameterProperty':
			return <TSParameterProperty  {...props as any}></TSParameterProperty>;
		

		default:
			break;
	}
	return <div></div>;
}

export default LVal;
