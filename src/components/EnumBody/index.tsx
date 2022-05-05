import { EnumBody as T_EnumBody } from '@babel/types/lib/index.d';


import EnumBooleanBody from '../EnumBooleanBody';

import EnumNumberBody from '../EnumNumberBody';

import EnumStringBody from '../EnumStringBody';

import EnumSymbolBody from '../EnumSymbolBody';


function EnumBody(props: T_EnumBody) {
	switch (props.type) {
		
		case 'EnumBooleanBody':
			return <EnumBooleanBody  {...props as any}></EnumBooleanBody>;
		
		case 'EnumNumberBody':
			return <EnumNumberBody  {...props as any}></EnumNumberBody>;
		
		case 'EnumStringBody':
			return <EnumStringBody  {...props as any}></EnumStringBody>;
		
		case 'EnumSymbolBody':
			return <EnumSymbolBody  {...props as any}></EnumSymbolBody>;
		

		default:
			break;
	}
	return <div></div>;
}

export default EnumBody;
