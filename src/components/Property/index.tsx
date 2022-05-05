import { Property as T_Property } from '@babel/types/lib/index.d';


import ObjectProperty from '../ObjectProperty';

import ClassProperty from '../ClassProperty';

import ClassAccessorProperty from '../ClassAccessorProperty';

import ClassPrivateProperty from '../ClassPrivateProperty';


function Property(props: T_Property) {
	switch (props.type) {
		
		case 'ObjectProperty':
			return <ObjectProperty  {...props as any}></ObjectProperty>;
		
		case 'ClassProperty':
			return <ClassProperty  {...props as any}></ClassProperty>;
		
		case 'ClassAccessorProperty':
			return <ClassAccessorProperty  {...props as any}></ClassAccessorProperty>;
		
		case 'ClassPrivateProperty':
			return <ClassPrivateProperty  {...props as any}></ClassPrivateProperty>;
		

		default:
			break;
	}
	return <div></div>;
}

export default Property;
