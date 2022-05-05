import { Method as T_Method } from '@babel/types/lib/index.d';


import ObjectMethod from '../ObjectMethod';

import ClassMethod from '../ClassMethod';

import ClassPrivateMethod from '../ClassPrivateMethod';


function Method(props: T_Method) {
	switch (props.type) {
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'ClassMethod':
			return <ClassMethod  {...props as any}></ClassMethod>;
		
		case 'ClassPrivateMethod':
			return <ClassPrivateMethod  {...props as any}></ClassPrivateMethod>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Method;
