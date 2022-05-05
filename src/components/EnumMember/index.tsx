import { EnumMember as T_EnumMember } from '@babel/types/lib/index.d';


import EnumBooleanMember from '../EnumBooleanMember';

import EnumNumberMember from '../EnumNumberMember';

import EnumStringMember from '../EnumStringMember';

import EnumDefaultedMember from '../EnumDefaultedMember';


function EnumMember(props: T_EnumMember) {
	switch (props.type) {
		
		case 'EnumBooleanMember':
			return <EnumBooleanMember  {...props as any}></EnumBooleanMember>;
		
		case 'EnumNumberMember':
			return <EnumNumberMember  {...props as any}></EnumNumberMember>;
		
		case 'EnumStringMember':
			return <EnumStringMember  {...props as any}></EnumStringMember>;
		
		case 'EnumDefaultedMember':
			return <EnumDefaultedMember  {...props as any}></EnumDefaultedMember>;
		

		default:
			break;
	}
	return <div></div>;
}

export default EnumMember;
