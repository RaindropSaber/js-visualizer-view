import { Function as T_Function } from '@babel/types/lib/index.d';


import FunctionDeclaration from '../FunctionDeclaration';

import FunctionExpression from '../FunctionExpression';

import ObjectMethod from '../ObjectMethod';

import ArrowFunctionExpression from '../ArrowFunctionExpression';

import ClassMethod from '../ClassMethod';

import ClassPrivateMethod from '../ClassPrivateMethod';


function Function(props: T_Function) {
	switch (props.type) {
		
		case 'FunctionDeclaration':
			return <FunctionDeclaration  {...props as any}></FunctionDeclaration>;
		
		case 'FunctionExpression':
			return <FunctionExpression  {...props as any}></FunctionExpression>;
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'ArrowFunctionExpression':
			return <ArrowFunctionExpression  {...props as any}></ArrowFunctionExpression>;
		
		case 'ClassMethod':
			return <ClassMethod  {...props as any}></ClassMethod>;
		
		case 'ClassPrivateMethod':
			return <ClassPrivateMethod  {...props as any}></ClassPrivateMethod>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Function;
