import { ObjectMember as T_ObjectMember } from '@babel/types/lib/index.d';


import ObjectMethod from '../ObjectMethod';

import ObjectProperty from '../ObjectProperty';


function ObjectMember(props: T_ObjectMember) {
	switch (props.type) {
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'ObjectProperty':
			return <ObjectProperty  {...props as any}></ObjectProperty>;
		

		default:
			break;
	}
	return <div></div>;
}

export default ObjectMember;
