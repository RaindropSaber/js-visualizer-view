import { FlowBaseAnnotation as T_FlowBaseAnnotation } from '@babel/types/lib/index.d';


import AnyTypeAnnotation from '../AnyTypeAnnotation';

import BooleanTypeAnnotation from '../BooleanTypeAnnotation';

import NullLiteralTypeAnnotation from '../NullLiteralTypeAnnotation';

import MixedTypeAnnotation from '../MixedTypeAnnotation';

import EmptyTypeAnnotation from '../EmptyTypeAnnotation';

import NumberTypeAnnotation from '../NumberTypeAnnotation';

import StringTypeAnnotation from '../StringTypeAnnotation';

import SymbolTypeAnnotation from '../SymbolTypeAnnotation';

import ThisTypeAnnotation from '../ThisTypeAnnotation';

import VoidTypeAnnotation from '../VoidTypeAnnotation';


function FlowBaseAnnotation(props: T_FlowBaseAnnotation) {
	switch (props.type) {
		
		case 'AnyTypeAnnotation':
			return <AnyTypeAnnotation  {...props as any}></AnyTypeAnnotation>;
		
		case 'BooleanTypeAnnotation':
			return <BooleanTypeAnnotation  {...props as any}></BooleanTypeAnnotation>;
		
		case 'NullLiteralTypeAnnotation':
			return <NullLiteralTypeAnnotation  {...props as any}></NullLiteralTypeAnnotation>;
		
		case 'MixedTypeAnnotation':
			return <MixedTypeAnnotation  {...props as any}></MixedTypeAnnotation>;
		
		case 'EmptyTypeAnnotation':
			return <EmptyTypeAnnotation  {...props as any}></EmptyTypeAnnotation>;
		
		case 'NumberTypeAnnotation':
			return <NumberTypeAnnotation  {...props as any}></NumberTypeAnnotation>;
		
		case 'StringTypeAnnotation':
			return <StringTypeAnnotation  {...props as any}></StringTypeAnnotation>;
		
		case 'SymbolTypeAnnotation':
			return <SymbolTypeAnnotation  {...props as any}></SymbolTypeAnnotation>;
		
		case 'ThisTypeAnnotation':
			return <ThisTypeAnnotation  {...props as any}></ThisTypeAnnotation>;
		
		case 'VoidTypeAnnotation':
			return <VoidTypeAnnotation  {...props as any}></VoidTypeAnnotation>;
		

		default:
			break;
	}
	return <div></div>;
}

export default FlowBaseAnnotation;
