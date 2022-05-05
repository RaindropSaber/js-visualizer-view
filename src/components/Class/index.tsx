import { Class as T_Class } from '@babel/types/lib/index.d';


import ClassExpression from '../ClassExpression';

import ClassDeclaration from '../ClassDeclaration';


function Class(props: T_Class) {
	switch (props.type) {
		
		case 'ClassExpression':
			return <ClassExpression  {...props as any}></ClassExpression>;
		
		case 'ClassDeclaration':
			return <ClassDeclaration  {...props as any}></ClassDeclaration>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Class;
