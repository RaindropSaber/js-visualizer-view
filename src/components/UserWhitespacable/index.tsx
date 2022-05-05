import { UserWhitespacable as T_UserWhitespacable } from '@babel/types/lib/index.d';


import ObjectMethod from '../ObjectMethod';

import ObjectProperty from '../ObjectProperty';

import ObjectTypeInternalSlot from '../ObjectTypeInternalSlot';

import ObjectTypeCallProperty from '../ObjectTypeCallProperty';

import ObjectTypeIndexer from '../ObjectTypeIndexer';

import ObjectTypeProperty from '../ObjectTypeProperty';

import ObjectTypeSpreadProperty from '../ObjectTypeSpreadProperty';


function UserWhitespacable(props: T_UserWhitespacable) {
	switch (props.type) {
		
		case 'ObjectMethod':
			return <ObjectMethod  {...props as any}></ObjectMethod>;
		
		case 'ObjectProperty':
			return <ObjectProperty  {...props as any}></ObjectProperty>;
		
		case 'ObjectTypeInternalSlot':
			return <ObjectTypeInternalSlot  {...props as any}></ObjectTypeInternalSlot>;
		
		case 'ObjectTypeCallProperty':
			return <ObjectTypeCallProperty  {...props as any}></ObjectTypeCallProperty>;
		
		case 'ObjectTypeIndexer':
			return <ObjectTypeIndexer  {...props as any}></ObjectTypeIndexer>;
		
		case 'ObjectTypeProperty':
			return <ObjectTypeProperty  {...props as any}></ObjectTypeProperty>;
		
		case 'ObjectTypeSpreadProperty':
			return <ObjectTypeSpreadProperty  {...props as any}></ObjectTypeSpreadProperty>;
		

		default:
			break;
	}
	return <div></div>;
}

export default UserWhitespacable;
